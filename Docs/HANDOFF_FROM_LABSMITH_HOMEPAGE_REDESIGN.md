# Handoff from Labsmith — Homepage Redesign

Direction: **labsmith → spark-anvil-site**. Queue #320 (user-direct, pre-approved 2026-05-23).

## TL;DR

`src/pages/index.astro` carries 8 sections. Four are strong; four overlap with `/about`, `/apps`, or themselves. Four content layers landed during Rounds 49-58 the homepage doesn't surface: **non-profit pivot**, **cost-transparency posture**, **586 cast portraits**, **pass-and-play / neurodivergent / beta-testing surfaces**. This handoff lays out a 5-phase redesign — Phase 2 is the highest-leverage (audience grid + impact ticker).

Full strategic context: `labsmith/Docs/PLAN_HOMEPAGE_REDESIGN.md`.

## What the redesign does (4-line summary)

1. **Adds an audience-segmented entry grid above-fold** (Parents / Teachers / Donors / Press) — best-practice on every children's-edtech homepage we benchmarked (Khan / Code.org / CommonLit / Sago Mini)
2. **Adds an impact ticker** (6 numbers — 138 apps / 586 chars / 21 frameworks / 80 trauma gates / 0 ads / 100% free) — establishes "this org does the thing it claims"
3. **Adds a recent-cast engagement hook** — visualizes the 586 portraits live + drives /cast traffic
4. **Compresses the 4 overlapping sections** — removes Why-Spark-&-Anvil + Verticals + Parent-CTA (move to /about and /apps) and merges them into a single donor-led closing CTA

Net: 8 sections → 7 tighter sections; donor + press visible above-fold; engagement hooks doubled.

## Phase 2 — Highest-leverage scope (start here)

Adds two NEW sections WITHOUT changing the existing ones. Lowest risk, highest user-visible impact.

### 2a. Audience-segmented entry grid

**Location**: inside Hero band (`§1`), directly below the existing CTA row + italic teacher tease — before closing `</section>`.

**Markup spec** (~60 lines):

```astro
<!-- Audience-segmented entry grid -->
<div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
  {[
    { icon: '👨‍👩‍👧', label: 'For parents',  hook: 'Privacy you can verify. Apps your kid actually uses.',                    href: '/for-parents',  cta: 'For parents →',         stripe: '#4A6FA5' },
    { icon: '🎓',     label: 'For teachers', hook: 'Pilot live small-group classes in 2027. Standards-mapped.',              href: '/for-educators', cta: 'For educators →',       stripe: '#FFBE2E' },
    { icon: '💛',     label: 'Donors',       hook: 'Keep 138 apps free forever. Tax-deductible via fiscal sponsor.',          href: '/donate',        cta: 'Support the mission →', stripe: '#E8652B' },
    { icon: '📰',     label: 'Press',        hook: 'Press kit, brand assets, founder bio.',                                   href: '/press',         cta: 'Press kit →',           stripe: '#2D2D2D' },
  ].map(tile => (
    <a
      href={tile.href}
      class="group block bg-white dark:bg-anvil/40 rounded-2xl p-5 border-2 border-anvil/10 dark:border-warm/15 hover:border-forge transition-colors overflow-hidden"
    >
      <div class="h-1 -mx-5 -mt-5 mb-4" style={`background-color: ${tile.stripe};`} aria-hidden="true"></div>
      <div class="text-3xl mb-2" aria-hidden="true">{tile.icon}</div>
      <h3 class="font-brand font-bold text-lg text-anvil dark:text-warm mb-2">{tile.label}</h3>
      <p class="text-sm text-anvil/70 dark:text-warm/70 leading-snug mb-3">{tile.hook}</p>
      <span class="text-sm font-bold text-forge group-hover:underline">{tile.cta}</span>
    </a>
  ))}
</div>
```

### 2b. Impact ticker

**Location**: NEW `<section>` directly after the Hero `</section>` close + before the Learn/Play/Create section.

**Markup spec** (~50 lines):

```astro
<!-- Impact ticker -->
<section class="bg-anvil/5 dark:bg-warm/5 py-12 border-y border-anvil/10 dark:border-warm/15">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-8">
      <h2 class="font-brand font-bold text-2xl md:text-3xl text-anvil dark:text-warm">The work, in numbers.</h2>
      <p class="text-sm text-anvil/60 dark:text-warm/60 mt-2">
        Updated 2026-05-23. <a href="/impact" class="underline hover:text-forge">See the full impact report →</a>
      </p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {[
        { v: apps.length.toString(),     l: 'iOS apps' },
        { v: '586',                       l: 'cast characters' },
        { v: '21',                        l: 'curriculum frameworks' },
        { v: '80',                        l: 'trauma-informed gates' },
        { v: '0',                         l: 'ads · IAPs · trackers' },
        { v: '100%',                      l: 'free, forever' },
      ].map(s => (
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-brand font-bold text-forge leading-none">{s.v}</div>
          <div class="text-xs uppercase tracking-wider text-anvil/60 dark:text-warm/60 mt-2">{s.l}</div>
        </div>
      ))}
    </div>
  </div>
</section>
```

Numbers source: `labsmith/Docs/REGISTRY_APP_HERO_COLORS.md` + `Docs/RESEARCH_CURRICULUM_STANDARDS_MAPPING.md` + `spark-anvil-site/src/pages/impact.astro` (single source of truth — keep the homepage numbers in sync with `/impact` if any change).

**That's all of Phase 2.** Both additions are pure-markup, no new dependencies, no new scripts, no data-layer changes.

## Phase 3 — DN compression + recent cast (medium-leverage)

### 3a. DN section — trim 4-card explainer

`index.astro:247-272` — delete the 4-card `<div class="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-10">` block (Behavior-not-decoration / Recurring-not-random / Small-casts-not-crowds / Story-carries-the-work). Keep the H2 + 2-paragraph intro + 5-mascot row + "How distributed-narrative works →" CTA.

Replacement (if you want to keep some explainer): a single-line list below the mascot row:

```astro
<ul class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-anvil/70 dark:text-warm/70 mb-8 max-w-3xl mx-auto">
  <li><strong>Behavior, not decoration</strong></li>
  <li><strong>Recurring, not random</strong></li>
  <li><strong>Small casts, not crowds</strong></li>
  <li><strong>Story carries the work</strong></li>
</ul>
```

### 3b. Recent cast surface

**Location**: NEW `<section>` after DN section, before Featured apps section.

**Data source**: `src/data/cast-manifest.json` (already built by `scripts/build-cast-manifest.mjs` on prebuild). The manifest maps `<app-slug> → [{ charSlug, charName, ... }]`.

**Pick 12 portraits** sampled across the cast — recommended sampling: take the first portrait from each of the 12 most-recently-shipped DN apps (lookup via `apps.filter(a => a.distributedNarrative)` sorted by manifest `editedAt` DESC, or fallback to alphabetical by slug).

**Markup spec** (~60 lines):

```astro
---
import castManifest from '~/data/cast-manifest.json';
// Sample 12 cast portraits across the portfolio
const recentCastApps = apps
  .filter(a => a.distributedNarrative && castManifest[a.slug]?.length > 0)
  .slice(0, 12);  // or sort by editedAt if available
const recentCast = recentCastApps
  .map(a => {
    const first = castManifest[a.slug]?.[0];
    if (!first) return null;
    return { appSlug: a.slug, appName: a.name, heroColor: a.heroColor, ...first };
  })
  .filter(Boolean);
---

<!-- Recent cast — engagement hook -->
<section class="py-16 bg-warm/30 dark:bg-anvil/30">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-10">
      <p class="text-xs uppercase tracking-wider text-forge font-bold mb-3">Meet the cast</p>
      <h2 class="font-brand font-bold text-3xl md:text-4xl text-anvil dark:text-warm mb-3">586 characters and counting</h2>
      <p class="text-anvil/70 dark:text-warm/70 max-w-2xl mx-auto">
        These characters embody the curriculum across {dnApps.length} apps. Each carries one specific concept your kid will learn.
      </p>
    </div>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8">
      {recentCast.map(c => (
        <a
          href={`/apps/${c.appSlug}`}
          class="group flex flex-col items-center"
        >
          <div
            class="w-24 h-24 rounded-full overflow-hidden border-4 border-warm shadow-md group-hover:scale-110 transition-transform"
            style={`background-color: ${c.heroColor};`}
          >
            <img src={`/cast/${c.appSlug}/${c.charSlug}.webp`} alt={c.charName} loading="lazy" class="w-full h-full object-cover" />
          </div>
          <div class="mt-2 text-center">
            <div class="text-xs font-brand font-bold text-anvil dark:text-warm">{c.charName}</div>
            <div class="text-xs text-anvil/50 dark:text-warm/50">{c.appName}</div>
          </div>
        </a>
      ))}
    </div>
    <div class="text-center">
      <a href="/cast" class="btn-secondary">Browse all 586 characters →</a>
    </div>
  </div>
</section>
```

If `cast-manifest.json` shape doesn't match the above (the script writes whatever shape the build needs), check `scripts/build-cast-manifest.mjs` and adapt the destructure.

## Phase 4 — Closing CTA consolidation (medium-leverage)

Delete current sections:
- `index.astro:319-349` — Why Spark & Anvil (Craft / Safety / Range) — content already lives on `/about`
- `index.astro:364-387` — Verticals (5) — content already accessible via `/apps?vertical=`
- `index.astro:389-403` — Parent CTA — duplicate of the new closing band

Replace with a single donor-led closing band:

```astro
<!-- Closing CTA — non-profit lead -->
<section class="bg-forge/5 dark:bg-forge-light/10 py-20 border-t border-forge/20 dark:border-forge-light/20">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <h2 class="font-brand font-bold text-3xl md:text-4xl text-anvil dark:text-warm mb-4">
      Keep 138 apps free for every kid. Forever.
    </h2>
    <p class="text-lg text-anvil/70 dark:text-warm/70 mb-8 leading-relaxed">
      We're a <strong>501(c)(3) non-profit (pending)</strong>. Donations route through our fiscal
      sponsor and are tax-deductible today. Every $25 monthly donor covers ~5% of our $500/month
      platform cost. <a href="/impact#how-we-sustain-the-work" class="underline hover:text-forge">See the breakdown →</a>
    </p>
    <div class="flex flex-wrap items-center justify-center gap-3 mb-6">
      <a href="/donate" class="btn-primary">Support the mission →</a>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-anvil/70 dark:text-warm/70">
      <a href="/for-parents" class="hover:text-forge underline">For parents</a>
      <span class="text-anvil/30 dark:text-warm/30">·</span>
      <a href="/for-educators" class="hover:text-forge underline">For educators</a>
      <span class="text-anvil/30 dark:text-warm/30">·</span>
      <a href="/press" class="hover:text-forge underline">Press kit</a>
      <span class="text-anvil/30 dark:text-warm/30">·</span>
      <a href="mailto:hello@spark-and-anvil.com?subject=Beta%20updates" class="hover:text-forge underline">Beta updates</a>
    </div>
  </div>
</section>
```

(When the beta-testing surface from queue #297 ships, swap the `mailto:` for the dedicated beta signup page.)

## Phase 5 — Plausible event wiring (low-leverage but ongoing)

Add a Plausible custom event on each of the 4 audience-grid tiles + the closing-CTA donate button. Event names:
- `home_audience_tile_parents` / `home_audience_tile_teachers` / `home_audience_tile_donors` / `home_audience_tile_press`
- `home_closing_cta_donate`
- `home_recent_cast_browse_all`

Pattern (vanilla JS in BaseLayout or per-link):

```astro
<a href="/donate" onclick="plausible('home_audience_tile_donors')">…</a>
```

Plausible call is a no-op if the script isn't loaded (privacy-first; no errors).

## Sequencing recommendation

Land Phase 2 first as a single PR (audience grid + impact ticker — both pure additions, low risk). Phase 3 + Phase 4 can be one PR or two (your call). Phase 5 wires events after the structural changes settle.

**Estimated work**:
- Phase 2: ~1-2 hours (paste + style verification across breakpoints)
- Phase 3: ~2-3 hours (cast manifest integration + sampling logic)
- Phase 4: ~1 hour (3 sections removed, 1 added)
- Phase 5: ~1 hour (event wiring)

## What this doc does NOT cover

- ❌ **No new asset generation** — uses 100% existing per-app mascots + cast portraits + brand assets
- ❌ **No CMS / dynamic content layer** — pure Astro static
- ❌ **No new data files** — uses `apps.generated.ts` + `cast-manifest.json` already in repo
- ❌ **No nav changes** — the audience-grid does NOT replace `/for-parents` / `/for-educators` / `/donate` / `/press` in the nav; it's an additional surface for visitors who land on home

## Related commits / PRs

| Side | Reference |
|---|---|
| Labsmith | `Docs/PLAN_HOMEPAGE_REDESIGN.md` (this PR) |
| Site | TBD — one PR per Phase (Phase 2 first) |

## Cross-references

- `labsmith/Docs/PLAN_HOMEPAGE_REDESIGN.md` — strategic context + competitive benchmark
- `labsmith/Docs/RESEARCH_SPARK_ANVIL_WEBSITE.md` — original 2026-05 site research
- `labsmith/Docs/PLAN_NONPROFIT_BRAND_REFRESH.md` — brand voice + IA spec
- `labsmith/Docs/PLAN_FOUNDER_SPEND_DISCLOSURE.md` — cost transparency framework (Phase 4 closing band)
- `labsmith/Docs/PLAN_BETA_TESTING_SURFACE.md` — beta-tester signup (Phase 4 secondary CTA)
- `spark-anvil-site/src/pages/index.astro` — target file
- `spark-anvil-site/src/data/cast-manifest.json` — Phase 3b data source
