// build-apps-data.mjs
//
// ⚠️ DESTRUCTIVE — DO NOT RUN AGAINST PRODUCTION apps.generated.ts ⚠️
//
// This script ships a SLIM 36-app schema with only 7 fields per app (slug, name,
// tagline, vertical, heroColor, iconPath, mascotPath). Running it against the
// current apps.generated.ts will WIPE the rich schema (136 apps, fields like
// longTagline, features, implementing, wave, hasUserGuide, hasM9Accessories,
// standards, iconHeroPath) and reduce the data file to 36 apps.
//
// Until this script is extended to (a) cover all 136 apps in WAVE_IMPLEMENTING+
// non-implementing lists and (b) produce + preserve the rich schema fields,
// edit apps.generated.ts via targeted Python read+modify+write scripts. See
// labsmith Docs/WORK_QUEUE_INBOUND_HANDOFFS_2026-05-20.md Round 21 for the
// safe in-place mutation pattern.
//
// To regenerate from scratch safely (when the script is fixed): commit
// apps.generated.ts first; run with --check; only --write after diff review.
//
// Usage:
//   node scripts/build-apps-data.mjs --check   # validates without writing
//   node scripts/build-apps-data.mjs           # ⚠️ overwrites apps.generated.ts

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const GITHUB_ROOT = resolve(ROOT, '..');
const LABSMITH = join(GITHUB_ROOT, 'labsmith');

const CHECK_ONLY = process.argv.includes('--check');

// Wave 1+2+3 implementing apps (the 36 active priority — get full pages first)
const WAVE_IMPLEMENTING = [
  // Wave 1 (12)
  'mindforge', 'wellnessforge', 'creaturecare', 'equationquest', 'geometryforge',
  'spectrumcanvas', 'beatforge', 'readquest', 'grammarforge', 'fossilforge',
  'wildlens', 'mythforge',
  // Wave 2 (12)
  'focusforge', 'soundsphere', 'synaforge', 'proofquest', 'waveforge', 'prismforge',
  'harmonyforge', 'dancequest', 'truthquest', 'witquest', 'chronoquest', 'terravoyage',
  // Wave 3 (12)
  'bodyforge', 'activeforge', 'chemquest', 'bioforge', 'dataforge', 'mangaforge',
  'pixelforge', 'craftforge', 'taleforge', 'newsforge', 'cardforge', 'mapforge',
];

// Vertical classification — sourced from labsmith Wave recommendation docs
const VERTICAL_BY_APP = {
  // STEM
  equationquest: 'stem', geometryforge: 'stem', proofquest: 'stem', waveforge: 'stem',
  prismforge: 'stem', chemquest: 'stem', bioforge: 'stem', dataforge: 'stem',
  // STEAM
  spectrumcanvas: 'steam', beatforge: 'steam', harmonyforge: 'steam', dancequest: 'steam',
  mangaforge: 'steam', pixelforge: 'steam', craftforge: 'steam',
  // Academics
  readquest: 'academics', grammarforge: 'academics', truthquest: 'academics',
  witquest: 'academics', taleforge: 'academics', newsforge: 'academics',
  // DIR/FEDC
  mindforge: 'dir-fedc', wellnessforge: 'dir-fedc', focusforge: 'dir-fedc',
  soundsphere: 'dir-fedc', synaforge: 'dir-fedc', bodyforge: 'dir-fedc',
  activeforge: 'dir-fedc',
  // Special Interest
  creaturecare: 'special-interest', fossilforge: 'special-interest',
  wildlens: 'special-interest', mythforge: 'special-interest',
  chronoquest: 'special-interest', terravoyage: 'special-interest',
  cardforge: 'special-interest', mapforge: 'special-interest',
};

// Extract first H1 + first paragraph from a Markdown file as tagline + summary.
function extractMarkdown(filePath) {
  if (!existsSync(filePath)) return null;
  const md = readFileSync(filePath, 'utf-8');
  const lines = md.split('\n');
  let title = null;
  let summary = null;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim();
    if (!title && l.startsWith('# ')) {
      title = l.replace(/^#\s+/, '').replace(/—.*$/, '').trim();
      continue;
    }
    if (title && !summary && l && !l.startsWith('#') && !l.startsWith('**')) {
      // Take the full first paragraph; soft-cap at ~400 chars at a sentence/clause
      // boundary so cards have predictable height without ugly mid-word cuts.
      const raw = l.replace(/^\*\*([^*]+)\*\*:?\s*/, '');
      if (raw.length <= 400) {
        summary = raw;
      } else {
        const truncated = raw.slice(0, 400);
        const lastSentence = Math.max(
          truncated.lastIndexOf('. '),
          truncated.lastIndexOf('! '),
          truncated.lastIndexOf('? '),
          truncated.lastIndexOf('— '),
        );
        summary = (lastSentence > 200 ? truncated.slice(0, lastSentence + 1) : truncated).trim();
      }
      break;
    }
  }
  return { title, summary };
}

function parseAppReadme(slug) {
  // Try labsmith Docs/<AppName>/README.md
  const variants = readdirSync(join(LABSMITH, 'Docs')).filter(d => {
    const full = join(LABSMITH, 'Docs', d);
    return statSync(full).isDirectory() && d.toLowerCase() === slug.toLowerCase();
  });
  if (variants[0]) {
    const md = extractMarkdown(join(LABSMITH, 'Docs', variants[0], 'README.md'));
    if (md?.summary) return md;
  }
  return null;
}

// Hero color from labsmith REGISTRY_APP_HERO_COLORS.md
let heroColorMap = null;
function loadHeroColors() {
  if (heroColorMap) return heroColorMap;
  heroColorMap = {};
  const path = join(LABSMITH, 'Docs', 'REGISTRY_APP_HERO_COLORS.md');
  if (!existsSync(path)) return heroColorMap;
  const md = readFileSync(path, 'utf-8');
  const tableRowRe = /^\|\s*\*?\*?([a-zA-Z][a-zA-Z0-9]+)\*?\*?\s*\|.*?(#[0-9A-Fa-f]{6})/gm;
  let m;
  while ((m = tableRowRe.exec(md))) {
    const slug = m[1].toLowerCase();
    const hex = m[2];
    if (!heroColorMap[slug]) heroColorMap[slug] = hex;
  }
  return heroColorMap;
}

function findAppIcon(slug) {
  // App repo's icons/ directory typically holds icon candidates
  const repo = join(GITHUB_ROOT, `${slug}-app`);
  if (!existsSync(repo)) return null;

  const candidates = [
    join(repo, 'icons'),
    join(repo, 'Apps', 'icons'),
  ];

  for (const dir of candidates) {
    if (!existsSync(dir)) continue;
    const pngs = readdirSync(dir).filter(f => f.endsWith('.png'));
    if (pngs[0]) return join(dir, pngs[0]);
  }
  return null;
}

function findAppMascot(slug) {
  const repo = join(GITHUB_ROOT, `${slug}-app`);
  if (!existsSync(repo)) return null;
  const candidates = [
    `Libraries/Sources/SharedUI/Resources/Illustrations/mascots`,
    `Packages/Libraries/Sources/SharedUI/Resources/Illustrations/mascots`,
    `Packages/Libraries/Sources/CubeUIKit/Resources/Illustrations/mascots`,
    `Packages/Libraries/Sources/AppFeature/Resources/Illustrations/mascots`,
  ];
  for (const sub of candidates) {
    const dir = join(repo, sub);
    if (!existsSync(dir)) continue;
    const webps = readdirSync(dir).filter(f => f.endsWith('.webp'));
    if (webps[0]) {
      // Prefer the praising/encouraging pose if present
      const preferred = webps.find(f => f.includes('praising')) ||
                        webps.find(f => f.includes('encouraging')) ||
                        webps[0];
      return join(dir, preferred);
    }
  }
  return null;
}

function copyAssetTo(srcPath, slug, kind) {
  if (!srcPath || !existsSync(srcPath)) return null;
  const destDir = join(ROOT, 'public', 'apps', slug);
  mkdirSync(destDir, { recursive: true });
  const destPath = join(destDir, `${kind}.${srcPath.endsWith('.png') ? 'png' : 'webp'}`);
  if (!CHECK_ONLY) {
    copyFileSync(srcPath, destPath);
  }
  return `/apps/${slug}/${kind}.${srcPath.endsWith('.png') ? 'png' : 'webp'}`;
}

// Auto-generated taglines for apps without a labsmith README/<App>/README.md.
const FALLBACK_TAGLINES = {
  mindforge: 'Trauma-informed social-emotional learning with gentle scaffolding.',
  wellnessforge: 'Daily wellness habits — sleep, hydration, movement, mood.',
  creaturecare: 'Tend a cast of digital creatures and learn empathy through care.',
  equationquest: 'Algebra mastery through visual proofs and stepped practice.',
  geometryforge: 'Geometric reasoning with interactive constructions.',
  spectrumcanvas: 'Open-ended visual art with kid-safe color theory.',
  beatforge: 'Rhythm and music theory through pattern play.',
  readquest: 'Reading comprehension built on cozy stories and recall games.',
  grammarforge: 'Grammar mastery through diagramming and pattern recognition.',
  fossilforge: 'Paleontology field-work with real specimen taxonomies.',
  wildlens: 'Wildlife photography journal that teaches species ID.',
  mythforge: 'World mythology comparative literacy — symbols, archetypes, tales.',
  focusforge: 'ADHD-friendly executive-function practice in 10-minute sessions.',
  soundsphere: 'Sensory regulation through curated soundscapes.',
  synaforge: 'Cross-sensory learning for neurodiverse minds.',
  proofquest: 'Mathematical proofs as detective work.',
  waveforge: 'Acoustics and applied physics through hands-on signal play.',
  prismforge: 'Optics and color science via interactive light experiments.',
  harmonyforge: 'Music theory and concert performance prep.',
  dancequest: 'Movement learning with choreographed sequence play.',
  truthquest: 'Critical thinking and media literacy through claim evaluation.',
  witquest: 'Wordplay, puns, and quick-wit puzzles.',
  chronoquest: 'History time-travel adventure with primary-source craft.',
  terravoyage: 'Geographic exploration with biome-based field studies.',
  bodyforge: 'Anatomy and body awareness with friendly clinical accuracy.',
  activeforge: 'Movement and fitness games designed for kid-bodies.',
  chemquest: 'Chemistry lab with safe, age-appropriate experiments.',
  bioforge: 'Biology field naturalism with curated taxonomies.',
  dataforge: 'Data science — read, make, and reason about charts.',
  mangaforge: 'Manga storytelling and panel-craft for visual learners.',
  pixelforge: 'Pixel art creation with retro game-art conventions.',
  craftforge: 'Hands-on crafts — thread, paper, simple electronics.',
  taleforge: 'Narrative writing with mythic-distance scaffolds.',
  newsforge: 'Kid-reporter media literacy — fact-finding, quotes, ethics.',
  cardforge: 'Strategy card games designed for kids.',
  mapforge: 'Cartography and spatial reasoning through map-making.',
};

const apps = [];
const verticalCounts = { stem: 0, steam: 0, academics: 0, 'dir-fedc': 0, 'special-interest': 0 };

const colors = loadHeroColors();

for (const slug of WAVE_IMPLEMENTING) {
  const readme = parseAppReadme(slug);
  const tagline = (readme?.summary || FALLBACK_TAGLINES[slug] || '').trim();
  const name = readme?.title ||
    slug.charAt(0).toUpperCase() + slug.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');

  const heroColor = colors[slug] || '#4A6FA5';

  const iconPath = copyAssetTo(findAppIcon(slug), slug, 'icon');
  const mascotPath = copyAssetTo(findAppMascot(slug), slug, 'mascot');

  const vertical = VERTICAL_BY_APP[slug] || 'special-interest';
  verticalCounts[vertical] += 1;

  apps.push({
    slug,
    name,
    tagline,
    vertical,
    heroColor,
    iconPath,
    mascotPath,
  });
}

const summary = {
  total: apps.length,
  withIcon: apps.filter(a => a.iconPath).length,
  withMascot: apps.filter(a => a.mascotPath).length,
  byVertical: verticalCounts,
};

console.log('build-apps-data summary:', JSON.stringify(summary, null, 2));

if (CHECK_ONLY) {
  process.exit(0);
}

const tsOut = `// AUTO-GENERATED by scripts/build-apps-data.mjs — do not edit by hand.
// Run: node scripts/build-apps-data.mjs

export interface AppData {
  slug: string;
  name: string;
  tagline: string;
  vertical: 'stem' | 'steam' | 'academics' | 'dir-fedc' | 'special-interest';
  heroColor: string;
  iconPath: string | null;
  mascotPath: string | null;
}

export const apps: AppData[] = ${JSON.stringify(apps, null, 2)};

export const appsBySlug: Record<string, AppData> = Object.fromEntries(
  apps.map(a => [a.slug, a])
);

export const verticalCounts = ${JSON.stringify(verticalCounts, null, 2)};
`;

writeFileSync(join(ROOT, 'src', 'data', 'apps.generated.ts'), tsOut);
console.log(`Wrote ${apps.length} apps to src/data/apps.generated.ts`);
