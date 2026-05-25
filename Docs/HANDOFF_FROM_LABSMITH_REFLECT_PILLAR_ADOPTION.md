# Handoff from Labsmith — Reflect-Pillar Adoption

Direction: **labsmith → spark-anvil-site**. Operational handoff translating `labsmith/Docs/PLAN_REFLECT_PILLAR_ADOPTION.md` (queue #386) into a single site PR. Trademark cleared YELLOW per `labsmith/Docs/RESEARCH_REFLECT_TRADEMARK_SCAN.md`.

Date: 2026-05-24. Round 74 queue item #386. Companion to Round 73 #385 (`RESEARCH_REFLECT_PILLAR.md`).

Scope: follows `.claude/rules/spark-anvil-website.md` (labsmith owns the plan; site CC session owns implementation) and `labsmith/.claude/rules/portfolio.md` § Cross-Repo Handoff Protocol.

---

## What labsmith did (Round 74 #386 — this PR)

1. **Research deliverable**: `labsmith/Docs/RESEARCH_REFLECT_TRADEMARK_SCAN.md` — USPTO knock-out scan for "Reflect" wordmark conflicts in IC 009 (software) + 041 (educational services) + 042 (computer services). Verdict: **YELLOW — descriptive-use posture, no counsel review needed for v1 site rollout, no `REFLECT` trademark filing by S&A.**
2. **Plan deliverable**: `labsmith/Docs/PLAN_REFLECT_PILLAR_ADOPTION.md` — concrete site IA + palette + schema + per-page spec for the single-PR adoption.
3. **This handoff**: the site-session execution sheet you're reading.

Open question resolved: trademark concern from `RESEARCH_REFLECT_PILLAR.md` § 9 question 5 is now closed (no counsel needed).

Pre-approved by user: palette Slate Charcoal `#3D5266` + single-PR rollout + `/reflect` as a dedicated landing page (NOT a top-nav slot).

---

## What the site session does next (single PR)

A single PR against `spark-anvil-site` titled **"Add Reflect as 4th pillar (Learn / Play / Create / Reflect)"**. Estimated wall-clock: 3-5 hours site + 1 hour labsmith script run.

### Sequencing

| # | Step | Owner | File(s) |
|---|---|---|---|
| 1 | Wait for `AUDIT_PORTFOLIO_PILLAR_TAGGING.md` (Round 74 #387, parallel background task) | labsmith | `labsmith/Docs/AUDIT_PORTFOLIO_PILLAR_TAGGING.md` |
| 2 | Extend `AppData.modes` schema | site session | `src/data/apps.generated.ts` |
| 3 | Run labsmith score-application Python script (idempotent) | founder | `labsmith/scripts/apply_reflect_scores.py` (to be authored by labsmith in #387) |
| 4 | Add `slateCharcoal` palette token | site session | `tailwind.config.js` |
| 5 | Extend `ModeKey` union + add 4th `ModeMeta` entry | site session | `src/data/modes.ts` |
| 6 | Update `modeCounts()` + `anchorAppsFor()` for reflect | site session | `src/data/modes.ts` |
| 7 | Homepage grid `md:grid-cols-3` → `md:grid-cols-2 lg:grid-cols-4` | site session | `src/pages/index.astro` (line ~184) |
| 8 | Create 4 new landing pages (`learn`/`play`/`create`/`reflect`.astro) | site session | `src/pages/{learn,play,create,reflect}.astro` |
| 9 | Refresh home-hero copy (3 modes → 4 modes) | site session | `src/pages/index.astro` (~line 180) |
| 10 | Pre-launch QA + Lighthouse + WCAG | site session | (whole repo) |
| 11 | Open PR | site session | (PR description summarizes 1-10) |
| 12 | Post-launch: Plausible event tracking | site session | analytics config |

**No top-nav edit.** `src/data/site.ts` is untouched. Pillar landing pages are surfaced via homepage modality cards + `/apps?mode=...` filter chips, not via nav. This matches how `/method` lives today.

---

## Exact files to edit

### `src/data/apps.generated.ts` — schema delta

```ts
// BEFORE
modes: {
  learn: 0 | 1 | 2 | 3;
  play: 0 | 1 | 2 | 3;
  create: 0 | 1 | 2 | 3;
};

// AFTER
modes: {
  learn: 0 | 1 | 2 | 3;
  play: 0 | 1 | 2 | 3;
  create: 0 | 1 | 2 | 3;
  reflect: 0 | 1 | 2 | 3;
};
```

After interface change, TypeScript will compile-error on every app object — that's the cue to run the labsmith Python script (step 3) which patches each app's `modes` block.

### `tailwind.config.js` — add Slate Charcoal token

```js
// inside theme.extend.colors, add:
slateCharcoal: {
  DEFAULT: '#3D5266',   // Slate Charcoal — Reflect pillar anchor
  light: '#5A7188',     // Dark-mode variant (20% lighter)
  text: '#314253',      // Body text on Warm White (passes WCAG AA Normal 7.4:1)
},
```

### `src/data/modes.ts` — extend ModeKey + add Reflect entry

```ts
// 1. Extend the union (top of file)
export type ModeKey = 'learn' | 'play' | 'create' | 'reflect';

// 2. Append to the `modes` array (after the create entry):
{
  key: 'reflect',
  label: 'Reflect',
  hex: '#3D5266',
  textClass: 'text-slateCharcoal',
  bgClass: 'bg-slateCharcoal',
  ringClass: 'ring-slateCharcoal',
  tagline:
    "Look inward — notice what you're thinking and feeling, name it, and decide what's next.",
  blurb:
    "Identity work, metacognition, mood + body awareness, and structured perspective-taking. Every Reflect-mode app gives your kid a calm space to think about their own thinking — supported by recurring cast members who model the practice.",
  anchor: {
    label: 'META cast across the portfolio',
    description:
      "Notice, Reflect, Settle, Counsel, Coach, Vet, Guard, Credit-Keeper — the kid-readable mentors who help your kid review their own work, choices, and feelings across every app.",
    href: '/cast?role=meta',
    appSlugs: [
      'mindforge', 'focusforge', 'wellnessforge', 'tempcheck',
      'coregrealm', 'rupturerepair', 'inclusionforge', 'microbelab',
      'ethosforge', 'huggyhabits',
    ],
  },
},

// 3. Update modeCounts() — see PLAN § 3.5 for full diff
```

### `src/pages/index.astro` — grid + hero refresh

```astro
<!-- Line ~184: -->
<!-- BEFORE -->
<div class="grid md:grid-cols-3 gap-6">
<!-- AFTER -->
<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<!-- Line ~180 hero copy: -->
<!-- BEFORE -->
Every app maps to one or more of three engagement modes. Most apps blend two or three — Learn pairs the AI mentor, Play wraps the game shell, Create gives kids something to ship.
<!-- AFTER -->
Every app maps to one or more of four engagement modes. Most apps blend two or three — Learn pairs the AI mentor, Play wraps the game shell, Create gives kids something to ship, and Reflect gives them a calm space to think about their own thinking.
```

### `src/pages/{learn,play,create,reflect}.astro` — NEW (4 files)

Template per `PLAN § 4.1`:

```
- Hero (pillar tagline + pillar hex color)
- "Why this pillar?" essay (2-3 paragraphs)
- App grid (filter to apps where modes[key] >= 2, sorted by score then name)
- Anchor cluster (renders modes[N].anchor.{label,description,href,appSlugs})
- Cross-pillar nav footer (3 sibling links + back to /apps)
```

Reflect-specific essay copy: see `PLAN § 4.3` for the 3-paragraph draft.

For `/play.astro`, add a note in the intro distinguishing the **Play pillar** (modality: game-like engagement) from the existing `/play-together` page (transport: face-to-face / couch-coop).

---

## Open questions for site session

1. **Astro `getStaticPaths` pattern for the 4 pillar pages** — should they be 4 separate files (current proposal, simpler) or a single `[pillar].astro` dynamic route? Recommend: 4 separate files for v1, so each can carry distinct hand-authored essay copy. Refactor to dynamic if maintenance becomes painful.
2. **Footer nav addition?** Optionally add a "Pillars" sub-section to the footer nav linking to `/learn` `/play` `/create` `/reflect`. Per plan § 6 question 8, recommendation is **defer** to post-launch Plausible review.
3. **Per-app pages** — verify the existing badge-rendering loop iterates all `ModeKey` values. If it has a hardcoded `['learn','play','create']` literal anywhere, swap to `modes.map(m => m.key)`.
4. **`/apps` filter chip** — same; verify the filter chip array iterates `modes` from `modes.ts` rather than a hardcoded literal.
5. **Plausible event names** for post-launch tracking — propose `pillar_view` (with prop `pillar=reflect`) for landing-page views, and `mode_filter` (with prop `mode=reflect`) for `/apps` filter clicks. Site session owns final naming.

---

## What labsmith does NOT do

Per `.claude/rules/spark-anvil-website.md`:

- ❌ labsmith does NOT author Astro / Tailwind / TypeScript code
- ❌ labsmith does NOT push to spark-anvil-site (this handoff doc IS the push)
- ❌ labsmith does NOT run `npm run build` or Lighthouse
- ❌ labsmith does NOT update `src/data/apps.generated.ts` directly — only via the Round 74 #387 Python script after the site session has migrated the schema

What labsmith DOES own going forward:

- ✅ The pillar-tagging audit (`Docs/AUDIT_PORTFOLIO_PILLAR_TAGGING.md`) and the score-application script (Round 74 #387)
- ✅ Any future cluster-plan cross-references to Reflect-pillar adoption (recommended deferred)
- ✅ Trademark monitoring (lightweight USPTO Trademark Official Gazette scan every ~6 months)

---

## Cross-references

### labsmith
- `Docs/RESEARCH_REFLECT_PILLAR.md` — Option D recommendation + market research (Round 73 #385)
- `Docs/RESEARCH_REFLECT_TRADEMARK_SCAN.md` — USPTO knock-out + descriptive-use posture (this round, queue #386)
- `Docs/PLAN_REFLECT_PILLAR_ADOPTION.md` — full plan w/ palette + IA + schema + sequencing (this round, queue #386)
- `Docs/AUDIT_PORTFOLIO_PILLAR_TAGGING.md` — per-app `modes.reflect` scoring (Round 74 #387, parallel)
- `Docs/PLAN_NONPROFIT_BRAND_REFRESH.md` — brand-voice context
- `.claude/rules/spark-anvil-website.md` — scope rule
- `Branding/Colors/spark-anvil-palette.md` — base palette (Slate Charcoal joins here)

### Spark & Anvil site
- `src/data/modes.ts` — current 3-pillar definitions
- `src/data/apps.generated.ts` — per-app modes scores; schema extends here
- `src/data/site.ts` — top-nav (untouched)
- `src/pages/index.astro` — homepage modality strip
- `tailwind.config.js` — palette tokens
- `CLAUDE.md` — site session rules

---

**End of handoff.** Trademark cleared YELLOW; palette locked at `#3D5266`; rollout is single PR. Site session executes per § "Sequencing" above. Founder runs the labsmith script when Round 74 #387 ships its audit.
