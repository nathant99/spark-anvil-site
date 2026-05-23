# Handoff from Labsmith — `/neurodivergent` Aggregate Site Page

Direction: **labsmith → spark-anvil-site**. Build a third portfolio-wide differentiator-aggregate page alongside `/play-together` (queue #221) and `/cast`. Surfaces the ~11 apps with documented neurodivergent-supportive design, with per-app evidence-base + crisis-resource surfacing.

**Closes queue item**: labsmith #310 — `/neurodivergent` aggregate page · Round 59 #315 · 2026-05-23
**Paired plan**: `labsmith/Docs/PLAN_NEURODIVERGENT_SITE_PAGE.md` (read this for motivation + thesis + per-app trait inventory + language conventions + crisis-resource spec)

## The decision

Spark & Anvil ships a `/neurodivergent` aggregate page on the company website — pattern-matched to `/play-together` and `/cast` — surfacing the ~11 portfolio apps with documented neurodivergent-supportive design. Strength-based framing; identity-first language; crisis-resource surfacing visible at all times.

## What labsmith did

Authored `labsmith/Docs/PLAN_NEURODIVERGENT_SITE_PAGE.md` covering:

1. Motivation + thesis — why a dedicated discovery surface (audience research + neurodiversity-paradigm framing)
2. AppData schema additions — 3 new optional fields (`neurodivergentSupport`, `neurodivergentEvidence`, `neurodivergentDesignTraits`)
3. `/neurodivergent` page spec — hero / disclaimer / stats / filter chips / app cards / explainer / evidence disclosure / crisis-resource block / donate CTA
4. Per-app design-trait inventory — the 11 launch apps with their evidence-base entries
5. Language conventions — identity-first / strength-based / no-functioning-labels / umbrella-term `neurodivergent`
6. Crisis-resource surfacing requirements — visible at all times + sticky affordance

## Requested changes (concrete + ordered)

### Phase 1 — Schema additions (`src/data/apps.generated.ts`)

Add 3 new optional fields to the `AppData` interface (paste the full block from PLAN §2 verbatim — JSDoc comments are part of the deliverable). Field signatures:

```ts
neurodivergentSupport?: boolean;
neurodivergentEvidence?: Array<{ aspect: string; basis: string }>;
neurodivergentDesignTraits?: string[];
```

All optional · default `undefined` · matches `playTogether` / `distributedNarrative` conventions.

### Phase 2 — Populate the 11 flagged apps

Update the following app entries in `src/data/apps.generated.ts` with `neurodivergentSupport: true` + populated `neurodivergentEvidence` array + `neurodivergentDesignTraits` array. Source the evidence + trait data verbatim from PLAN §4:

| App slug | Traits | Evidence entries |
|---|---|---|
| `focusforge` | ADHD-supportive · Focus-supportive · Strength-based · Identity-affirming · Predictable flow | 4 |
| `inclusionforge` | Identity-affirming · 2e-friendly · Communication-scaffolding · Sensory-aware · Strength-based | 4 |
| `mindforge` | Trauma-informed · Co-regulation · Identity-affirming · Strength-based · Communication-scaffolding | 4 |
| `spectrumcanvas` | Autism-supportive · Sensory-aware · Low-stimulus mode · Identity-affirming · Strength-based | 4 |
| `wellnessforge` | Strength-based · Co-regulation · Communication-scaffolding · Trauma-informed | 4 |
| `tempcheck` | Co-regulation · Interoception · Strength-based · Identity-affirming · Sensory-aware | 5 |
| `coregrealm` | Co-regulation · Interoception · Strength-based · Communication-scaffolding · Trauma-informed | 4 |
| `rupturerepair` | Trauma-informed · Co-regulation · Communication-scaffolding · Identity-affirming · Strength-based | 4 |
| `harmonyforge` | Autism-supportive · Sensory-aware · Low-stimulus mode · Strength-based · Identity-affirming | 4 |
| `motiflab` | Autism-supportive · Strength-based · Predictable flow · Sensory-aware | 4 |
| `microbelab` | Trauma-informed · Strength-based · Predictable flow · Identity-affirming | 4 |

Use a small Python or jq script that reads + modifies + writes specific app entries (per the file's preserved-rich-schema convention noted at top of `apps.generated.ts`). Do NOT run `scripts/build-apps-data.mjs` against this file — it would overwrite the rich schema.

### Phase 3 — Page implementation (`src/pages/neurodivergent.astro`)

Create the page from the spec in PLAN §3. Sections in order:

1. Hero with strength-based framing (PLAN §3.1)
2. Parent disclaimer (PLAN §3.2) — "Not medical advice" aside band
3. Stats strip (PLAN §3.3) — count of ND apps + trait count + evidence-count + trust signals
4. Filter chips (PLAN §3.4) — 6 umbrella categories (Sensory-Aware / Focus-Supportive / SEL / Communication-Scaffolding / Identity-Affirming / Co-Regulation); client-side filter via data-attribute
5. App cards (PLAN §3.5) — mirror `/play-together` card with trait pills below tagline + "Designed for neurodivergent learners" footer chip + `<details>` for first 2 evidence entries (keyboard-accessible expansion)
6. "What is neurodivergent?" educator-friendly explainer (PLAN §3.6) — ~250 words plain-language definition + identity-first convention note
7. Evidence-base disclosure (PLAN §3.7) — editorial-standard explanation
8. Testimonial slot (PLAN §3.8) — `<!-- testimonial slot — post-launch -->` placeholder
9. Crisis-resources footer block (PLAN §6.1) — visible at page-bottom + sticky affordance per PLAN §6.2
10. Donate cross-link (PLAN §3.10) — mirror `/play-together` CTA

Astro page; reuse `BaseLayout`, `~/data/apps.generated`, `~/data/site` (verticals). Default class conventions match `play-together.astro` (`text-anvil dark:text-warm`, `bg-anvil/5 dark:bg-warm/5`, etc.).

### Phase 4 — Nav update (`src/data/site.ts`)

Add `/neurodivergent` to the nav. Two options for placement; recommend **Option A — under "For Families" dropdown** for editorial restraint (don't overcrowd the top-level nav per Hick's law / Miller's 7±2 audit `AUDIT_SPARK_ANVIL_SITE_NAV_AND_ENGAGEMENT.md`):

```ts
{
  href: '/for-parents',
  label: 'For Families',
  children: [
    { href: '/for-parents', label: 'For Parents' },
    { href: '/for-educators', label: 'For Educators' },
    { href: '/classes', label: 'Classes' },
    { href: '/teach', label: 'Teach' },
    { href: '/neurodivergent', label: 'Neurodivergent Support' },
  ],
},
```

Option B — top-level nav slot — would push the total to 9 items, exceeding the lean target. If user prefers top-level visibility, swap with a lesser-trafficked item (e.g., demote `/news` to footer-only).

### Phase 5 — Crisis-resource implementation

Per PLAN §6.2:

- Resource block visible at page bottom (within the page; no modal)
- Sticky "Crisis support" affordance bottom-right at all scroll positions
- Smooth-scroll on click (not modal); honors `prefers-reduced-motion` (autism + vestibular consideration)
- High-contrast: meets WCAG 2.2 AAA on both warm + dark themes
- No tracking on resource clicks
- v1 USA-only; non-USA notice with "consult a local provider"

## Options considered

| Option | Verdict |
|---|---|
| Dedicated `/neurodivergent` page (this plan) | ✅ Chosen — mirrors `/play-together` + `/cast` differentiator-aggregate pattern; surfaces design property cross-cutting taxonomy |
| Filter on `/apps?ndSupport=true` | ❌ Insufficient — discovery happens at landing-page level; query-string filters don't show up in search; doesn't carry the editorial framing |
| Section on `/for-parents` | ❌ Insufficient — `/for-parents` is general-audience; the ND audience needs its own surface (audience-research-driven) |
| Per-app badge only on existing pages | ❌ Insufficient — badge is a follow-on; the aggregate page is the discovery entry-point |
| Name page `/special-needs` | ❌ Rejected — deficit framing, rejected by ND-community consensus |
| Name page `/learning-differences` | ❌ Rejected — still-deficit-coded; doesn't cover autistic / ADHD / OCD / Tourette's etc. cleanly |
| Name page `/autism-and-adhd` | ❌ Rejected — silos two of many ND categories; excludes dyslexia / dyspraxia / dyscalculia / OCD / Tourette's |
| Name page `/neurodivergent` (chosen) | ✅ — umbrella term per Walker 2021; current advocacy-community consensus |
| Person-first language ("kid with autism") | ❌ Rejected — identity-first preferred per Botha 2022 / Bury 2020 / Kenny 2016 / ASAN consensus |
| Identity-first language ("autistic kid") | ✅ Chosen — current advocacy + research consensus; we acknowledge person-first preference in explainer |
| Crisis-resource block in footer only | ❌ Insufficient — load-bearing per `.claude/rules/trauma-informed-content.md` § crisis-resource surfacing; needs visible-from-any-scroll affordance |
| Sticky crisis-resource affordance (chosen) | ✅ — respects `prefers-reduced-motion`; not a modal (modals get dismissed) |

## State at this handoff's commit

- ✅ `labsmith/Docs/PLAN_NEURODIVERGENT_SITE_PAGE.md` — committed + pushed
- ✅ This handoff — committed + pushed
- ⏳ `spark-anvil-site/src/data/apps.generated.ts` — 3 new optional fields to add (no field exists yet)
- ⏳ 11 app entries to populate with the evidence + trait arrays
- ⏳ `spark-anvil-site/src/pages/neurodivergent.astro` — to create
- ⏳ `spark-anvil-site/src/data/site.ts` — `/neurodivergent` link to add to "For Families" dropdown

The 11 apps already ship documented neurodivergent-supportive design (existing `dnCast` entries + DN handoffs + CLAUDE.md). The handoff doesn't request changes to the apps themselves — only the site-surface populate + page-build.

## Sequencing to unblock

1. **spark-anvil-site session**: add the 3 schema fields to `AppData` interface in `src/data/apps.generated.ts` (Phase 1)
2. **spark-anvil-site session**: populate the 11 apps with `neurodivergentSupport: true` + evidence + traits using a targeted Python/jq script (Phase 2). DO NOT run `scripts/build-apps-data.mjs` against the file
3. **spark-anvil-site session**: build `src/pages/neurodivergent.astro` per PLAN §3 (Phase 3)
4. **spark-anvil-site session**: add `/neurodivergent` to nav under "For Families" dropdown (Phase 4)
5. **spark-anvil-site session**: wire the crisis-resource block + sticky affordance per PLAN §6 (Phase 5)
6. **spark-anvil-site session**: smoke-test on local dev (`npm run dev`); verify trait pills render; verify crisis-resource affordance; verify identity-first copy throughout; verify WCAG AAA on the sticky affordance
7. **spark-anvil-site session**: ship + push; respond to labsmith with `HANDOFF_FROM_SITE_NEURODIVERGENT_PAGE_SHIPPED.md` confirming
8. **labsmith** (subsequent round): consider per-app card-badge variant for `/apps/<slug>` pages so the "neurodivergent support" property surfaces on individual app pages too (deferred — not in this handoff)

## What this doc does NOT cover

- Per-app `/apps/<slug>` page changes — deferred (badge integration is a follow-on; this handoff is the aggregate page only)
- Spanish-language localization — deferred to post-launch v2
- Testimonial section content — placeholder only; v2 deliverable
- Add-more-apps roadmap — DN-enhancement waves (`PLAN_DN_ENHANCEMENT_SEL_CLUSTER.md` #280) will add traits to more apps over time; the page is built to handle growth via the optional schema
- Server-side LLM moderation of caregiver text input — out of scope; the apps themselves handle crisis-signal static-response surfacing within their own session contexts
- HIPAA / crisis-counselor chat affordance — out of scope; page surfaces resources passively only

## Related commits / PRs

| Repo | Path | Note |
|---|---|---|
| labsmith | `Docs/PLAN_NEURODIVERGENT_SITE_PAGE.md` | This round (#315) |
| labsmith | `.claude/rules/trauma-informed-content.md` | Existing — crisis-resource surfacing requirements |
| labsmith | `.claude/rules/distributed-narrative.md` | Existing — DN methodology supplying most evidence-base entries |
| spark-anvil-site | `Docs/HANDOFF_FROM_LABSMITH_NEURODIVERGENT_PAGE.md` | This doc |
| spark-anvil-site | `src/data/apps.generated.ts` | Schema + 11 populate edits TBD |
| spark-anvil-site | `src/pages/neurodivergent.astro` | New file TBD |
| spark-anvil-site | `src/data/site.ts` | Nav update TBD |
| spark-anvil-site | `src/pages/play-together.astro` + `cast.astro` | Existing — pattern reference |
