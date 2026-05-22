/**
 * Engagement modality metadata for the Learn / Play / Create cross-cutting axis.
 * Orthogonal to subject `vertical`. Each app's `modes` field scores 0-3 per mode.
 *
 * Palette anchors:
 *   learn  — Forge Orange (#E8652B) — active instruction, the literal "forge" energy
 *   play   — Spark Gold   (#FFBE2E) — energy + delight
 *   create — Slate Blue   (#4A6FA5) — focus + craft
 */
import { apps, type AppData } from './apps.generated';

export type ModeKey = 'learn' | 'play' | 'create';

export interface ModeMeta {
  key: ModeKey;
  label: string;
  hex: string;
  /** Tailwind text color class for full-saturation use (badges, headlines) */
  textClass: string;
  /** Tailwind bg color class for solid fills (badges) */
  bgClass: string;
  /** Tailwind ring class for the filter chip selected state */
  ringClass: string;
  /** One-sentence card framing — kid-and-parent readable, no jargon */
  tagline: string;
  /** Two-sentence longer description for the home page strip */
  blurb: string;
  /** Concrete portfolio anchor for this mode — the named feature/cluster
   *  that grounds the abstract modality in something a parent or kid can browse. */
  anchor: {
    label: string;
    /** Short framing of why this anchor IS the mode (1-2 sentences) */
    description: string;
    /** Link target — could be /method, /apps?dn=true, or curated filter URL */
    href: string;
    /** Optional: explicit app slugs that exemplify the anchor. */
    appSlugs?: string[];
  };
}

export const modes: ModeMeta[] = [
  {
    key: 'learn',
    label: 'Learn',
    hex: '#E8652B',
    textClass: 'text-forge',
    bgClass: 'bg-forge',
    ringClass: 'ring-forge',
    tagline: 'Master a craft step by step with an AI mentor that scaffolds, hints, and celebrates progress.',
    blurb: 'Structured instruction, guided practice, and skill progression. Every Learn-mode app pairs your kid with an on-device AI mentor that scaffolds new concepts, gives hints without giving answers, and tracks mastery against recognized standards.',
    anchor: {
      label: 'Distributed-narrative apps',
      description: 'Recurring named characters who embody the curriculum — each one teaches a specific concept by being who they are, not by lecturing. Grounded in Bruner narrative learning + Habgood intrinsic integration.',
      href: '/method',
    },
  },
  {
    key: 'play',
    label: 'Play',
    hex: '#FFBE2E',
    textClass: 'text-spark',
    bgClass: 'bg-spark',
    ringClass: 'ring-spark',
    tagline: 'Adventures, RPGs, multiplayer rooms, and games where the fun is the curriculum — not a sugar coating on top.',
    blurb: 'Game-like engagement that pulls kids in. Adventures, RPGs, escape rooms, championships, and multiplayer where the curriculum is built into the game system itself — what researchers call "intrinsic integration."',
    anchor: {
      label: 'Adventure modes',
      description: 'Full RPG / quest / escape-room game shells across the portfolio. AdventureHub aggregates threads: solve a puzzle in one app, level up your shared character in another.',
      href: '/apps/adventurehub',
      appSlugs: [
        'adventurehub',
        'mindforge',
        'escapeforge',
        'fitquest',
        'mythforge',
        'chronoquest',
        'questforge',
        'forgearena',
      ],
    },
  },
  {
    key: 'create',
    label: 'Create',
    hex: '#4A6FA5',
    textClass: 'text-slate',
    bgClass: 'bg-slate',
    ringClass: 'ring-slate',
    tagline: 'Workshops where your kid composes songs, writes stories, builds characters, codes, and ships work they made themselves.',
    blurb: 'Build, compose, write, design. Every Create-mode app is a studio: kids leave with something they made — a song, a character sheet, a story, a circuit, a recipe, a magic trick — that they can show, share, or take into another app.',
    anchor: {
      label: 'Sound, image, voice, and music studios',
      description: 'The multimedia cluster: lyric + melody composition, voice-first storytelling, image craft (pixel art, manga, illusions), video editing, and figurative-language writing. The "shippable artifact" cluster.',
      href: '/apps?mode=create',
      appSlugs: [
        // Music + sound
        'lyricforge', 'beatforge', 'harmonyforge', 'motiflab', 'soundsphere', 'ensemblequest', 'effectsforge',
        // Voice + dialogue
        'voicetale', 'dialoguequest', 'speakforge',
        // Image + visual
        'pixelforge', 'spectrumcanvas', 'mangaforge', 'illusionforge', 'figureforge',
        // Frame + video
        'framequest', 'reelforge', 'mediaforge', 'stageforge',
      ],
    },
  },
];

export const modeByKey: Record<ModeKey, ModeMeta> = Object.fromEntries(
  modes.map(m => [m.key, m])
) as Record<ModeKey, ModeMeta>;

/** Score 0-3 → human label */
export const scoreLabel: Record<0 | 1 | 2 | 3, string> = {
  0: 'none',
  1: 'minor',
  2: 'secondary',
  3: 'primary',
};

/** Get the dominant mode(s) for an app — score 3 first, then 2 if no primary. */
export function dominantModes(app: AppData): ModeKey[] {
  if (!app.modes) return [];
  const entries = (Object.entries(app.modes) as [ModeKey, number][]).filter(([, s]) => s > 0);
  if (entries.length === 0) return [];
  const max = Math.max(...entries.map(([, s]) => s));
  return entries.filter(([, s]) => s === max).map(([k]) => k);
}

/** Apps that score `min` or higher on `mode`, sorted by score then name. */
export function appsScoringAtLeast(mode: ModeKey, min: 1 | 2 | 3 = 2): AppData[] {
  return apps
    .filter(a => a.modes && a.modes[mode] >= min)
    .sort((a, b) => (b.modes![mode] - a.modes![mode]) || a.name.localeCompare(b.name));
}

/**
 * Apps that ground a mode's anchor in concrete portfolio surface.
 * - Learn → apps flagged `distributedNarrative: true` (recurring-cast methodology)
 * - Play → apps in the curated `anchor.appSlugs` list (adventure modes)
 * - Create → apps in the curated `anchor.appSlugs` list (multimedia cluster)
 */
export function anchorAppsFor(mode: ModeKey): AppData[] {
  if (mode === 'learn') {
    return apps.filter(a => a.distributedNarrative).sort((a, b) => a.name.localeCompare(b.name));
  }
  const meta = modeByKey[mode];
  const slugSet = new Set(meta.anchor.appSlugs ?? []);
  return apps
    .filter(a => slugSet.has(a.slug))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** Per-mode counts at each score (for diagnostics / counters on UI) */
export function modeCounts(): Record<ModeKey, { primary: number; secondary: number; minor: number }> {
  const out = {
    learn: { primary: 0, secondary: 0, minor: 0 },
    play: { primary: 0, secondary: 0, minor: 0 },
    create: { primary: 0, secondary: 0, minor: 0 },
  };
  for (const a of apps) {
    if (!a.modes) continue;
    for (const key of ['learn', 'play', 'create'] as ModeKey[]) {
      const s = a.modes[key];
      if (s === 3) out[key].primary++;
      else if (s === 2) out[key].secondary++;
      else if (s === 1) out[key].minor++;
    }
  }
  return out;
}
