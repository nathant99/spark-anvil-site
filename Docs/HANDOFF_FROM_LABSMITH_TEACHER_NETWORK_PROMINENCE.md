# Handoff from Labsmith — Teacher Network Prominence

Direction: **labsmith → spark-anvil-site**. Queue #322 (user-direct, Round 60).

## TL;DR

User asked: "should we make the teacher network more prominent?" Labsmith strategic analysis (full doc: `labsmith/Docs/PLAN_TEACHER_NETWORK_PROMINENCE.md`) says **yes — moderate prominence increase, 4 phases**. Phase 0 is a P1 bug fix that **blocks all other prominence work**.

## Phase 0 — BLOCKING bug fix (do this first)

`src/pages/for-educators.astro` line ~96-100 has **stale Round 53 pre-pivot 85% number** that contradicts `/teach`'s post-pivot 100%. Visitors who land on /for-educators (school-district search traffic) get the wrong number.

**Required edit**: `src/pages/for-educators.astro` Teacher Marketplace section (~line 77-122).

| Current (Round 53 stale) | Fixed (Round 55+ canonical) |
|---|---|
| "Teachers keep **85%** of the class fee (vs Outschool's 70%)" | "Teachers keep **100%** of class fees. **We take 0% — ever.** (Stripe ~3% direct)" |
| "85% teacher take" card heading | "100% teacher take" card heading |
| "We take 15% to cover platform + payments + marketing. You keep the rest. Weekly payouts via Stripe." | "We take 0%. Stripe Connect Direct Charges send class fees straight to your bank — same as any payment processor. Platform funded by foundations + donor sustainers." |

Ship as standalone PR — keep isolated from other prominence work. Title: "Fix /for-educators 85% → 100% (reconcile to /teach post-pivot rate)".

## Phase 1 — Audience-grid Teacher tile elevation (pair with #320 Phase 2)

When implementing #320 Phase 2 audience grid, the Teachers tile gets:

```astro
{
  icon: '🎓',
  label: 'For teachers',
  hook: 'Earn 100% of class fees. Pilot live classes in 2027.',
  href: '/teach',  // NOT /for-educators
  cta: 'Apply to the early pilot →',
  stripe: '#E8652B',  // forge orange (vs other tiles' branded stripes — visually elevates)
  badge: 'Now Recruiting',  // corner-overlay badge
}
```

Markup spec for the badge corner overlay (add to the audience-grid tile template):

```astro
{tile.badge && (
  <span class="absolute top-3 right-3 px-2 py-0.5 bg-forge text-warm text-[10px] font-bold uppercase tracking-wider rounded-full">
    {tile.badge}
  </span>
)}
```

(Requires `position: relative` on the tile `<a>` and `overflow: visible` instead of `overflow: hidden`.)

## Phase 2 — "Coming 2027" tease band (after #320 Phase 4)

NEW homepage section between `Featured apps` and the consolidated `Closing CTA` (per #320 redesign).

**Markup spec** (~50 lines):

```astro
---
import { apps } from '~/data/apps.generated';
const classCount = 6;  // matches /classes sample slot count; can pull dynamically
---

<!-- Coming 2027 — Teacher Network -->
<section class="bg-forge/5 dark:bg-forge-light/10 border-y border-forge/20 dark:border-forge-light/30 py-16">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <span class="inline-block px-3 py-1 mb-4 bg-forge text-warm text-xs font-bold uppercase tracking-wider rounded-full">Coming Q1 2027</span>
    <h2 class="font-brand font-bold text-3xl md:text-4xl text-anvil dark:text-warm mb-4">
      Live small-group classes — taught by real teachers.
    </h2>
    <p class="text-lg text-anvil/70 dark:text-warm/70 leading-relaxed mb-8 max-w-3xl mx-auto">
      Teachers keep <strong>100%</strong> of class fees. Parents pay teachers directly. Spark &amp; Anvil takes <strong>0%</strong>.
      We're a 501(c)(3) — platform funded by foundations + donor sustainers, not by skimming teacher earnings.
    </p>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <a href="/teach" class="btn-primary">Teach with us →</a>
      <a href="/classes" class="btn-secondary">Browse {classCount} sample classes →</a>
    </div>
    <p class="mt-4 text-sm text-anvil/60 dark:text-warm/60 italic">
      First 50 partners get paid pilot classes + founder access during 2026.
    </p>
  </div>
</section>
```

## Phase 3 — Nav promotion (after Phase 1-2)

`src/data/site.ts` nav config — promote `/teach` to top-level:

**Current** (4-item "For Families" dropdown nests Teach):
```typescript
{ href: '/', label: 'Home' },
{ href: '/apps', label: 'Apps' },
{ href: '/cast', label: 'Cast' },
{ href: '/play-together', label: 'Play Together' },
{
  href: '/for-parents',
  label: 'For Families',
  children: [
    { href: '/for-parents', label: 'For Parents' },
    { href: '/for-educators', label: 'For Educators' },
    { href: '/classes', label: 'Classes' },
    { href: '/teach', label: 'Teach' },
  ],
},
{ href: '/about', label: 'About' },
{ href: '/news', label: 'News' },
{ href: '/donate', label: 'Donate', cta: true },
```

**Proposed** (teach promoted; dropdown trimmed):
```typescript
{ href: '/', label: 'Home' },
{ href: '/apps', label: 'Apps' },
{ href: '/cast', label: 'Cast' },
{ href: '/play-together', label: 'Play Together' },
{ href: '/teach', label: 'Teach', badge: 'Recruiting' },  // NEW top-level + badge
{
  href: '/for-parents',
  label: 'For Families',
  children: [
    { href: '/for-parents', label: 'For Parents' },
    { href: '/for-educators', label: 'For Educators' },
    { href: '/classes', label: 'Classes' },
    // /teach removed from dropdown — now top-level
  ],
},
{ href: '/about', label: 'About' },
{ href: '/news', label: 'News' },
{ href: '/donate', label: 'Donate', cta: true },
```

The "Recruiting" badge in nav needs `Nav.astro` template support — small `<span>` next to the label, forge-colored.

## What this handoff does NOT cover

- ❌ **No new pages** — /teach is the gold-standard recruitment page; no rewrites or replacements
- ❌ **No teacher portrait generation** — premature; revisit after first pilot cohort signs
- ❌ **No district-licensing prominence change** — that's a separate workstream
- ❌ **No /donate Teacher Network Sustainers tier change** — current Round 55 treatment is correct

## Success metrics (track in Plausible)

| Metric | Track via |
|---|---|
| `/teach` page visits | Plausible pageview |
| Homepage → /teach click-through | Plausible custom event `home_audience_tile_teachers` + `home_coming_2027_teach` |
| `teachers@spark-and-anvil.com` inbound | Manual inbox count (Q1 2026 baseline → Q3 2026 target ≥20/mo) |
| Confirmed pilot teachers | Manual ledger |

Wire Plausible events in #320 Phase 5.

## Sequencing recommendation

1. **Phase 0** — `/for-educators` 85% → 100% bug fix (1 PR, ~30 mins)
2. **Phase 1** — Audience-tile elevation (rolled into #320 Phase 2 PR)
3. **Phase 2** — Coming-2027 band (1 PR after #320 Phase 4 ships)
4. **Phase 3** — Nav promotion (1 PR, ~1 hour for nav template + badge support)

Total estimated work: ~4-5 hours across 4 PRs.

## Cross-references

- `labsmith/Docs/PLAN_TEACHER_NETWORK_PROMINENCE.md` — full strategic context + 4 options compared
- `labsmith/Docs/PLAN_TEACHER_REVENUE_SHARE_UNDER_NONPROFIT.md` — Round 55 Option C canonical 100% spec
- `labsmith/Docs/RESEARCH_OUTSCHOOL_ADOPTION_THREAT_ANALYSIS.md` — competitive context
- `labsmith/Docs/PLAN_HOMEPAGE_REDESIGN.md` — #320 (Option B + C integrate here)
- `spark-anvil-site/src/pages/teach.astro` — gold-standard recruitment page (no changes needed)
- `spark-anvil-site/src/pages/for-educators.astro` — Phase 0 bug fix target
- `spark-anvil-site/src/data/site.ts` — Phase 3 nav config target

## Related commits / PRs

| Side | Reference |
|---|---|
| Labsmith | `Docs/PLAN_TEACHER_NETWORK_PROMINENCE.md` (this PR) |
| Site | Phase 0 PR (separate, blocking) + Phase 1 (rolled into #320 Phase 2) + Phase 2 (separate) + Phase 3 (separate) |
