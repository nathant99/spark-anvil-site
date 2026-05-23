# Handoff from Labsmith — Site Navigation Restructure + Engagement Upgrades

Direction: **labsmith → spark-anvil-site**. Operational handoff translating the audit in `labsmith/Docs/AUDIT_SPARK_ANVIL_SITE_NAV_AND_ENGAGEMENT.md` into concrete diffs + ordered PRs.

Date: 2026-05-23. Round 53 queue item #266 (merges queue #260 — "nav looks crowded" — with #263 — "preview production and make it more functional, intuitive, engaging").

Scope: follows `.claude/rules/spark-anvil-website.md` and `labsmith/.claude/rules/portfolio.md` § Cross-Repo Handoff Protocol. Labsmith owns the audit/research; this site CC session owns implementation.

---

## The decision

The current top nav (`src/data/site.ts`, 15 items, 14 visible) exceeds Miller's 7±2 working-memory limit and dilutes the Donate CTA in a sea of equal-weight siblings. Reduce to **7 items + 1 CTA**, group the 4 audience pages under a "For Families" dropdown, demote operational/portfolio-detail surfaces to the footer, and ship engagement upgrades in priority order (home hero refresh → per-app CTAs → cross-page differentiator linking). This restructure must ship ahead of the non-profit-pivot page additions (Mission, Impact, Board, etc.) so those pages land into a well-organized IA rather than getting bolted onto a 20-item nav.

---

## Concrete `src/data/site.ts` nav diff

**Current** (lines 26-42):

```ts
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/apps', label: 'Apps' },
  { href: '/classes', label: 'Classes' },
  { href: '/teach', label: 'Teach' },
  { href: '/for-parents', label: 'For Parents' },
  { href: '/for-educators', label: 'For Educators' },
  { href: '/mascots', label: 'Mascots' },
  { href: '/cast', label: 'Cast' },
  { href: '/play-together', label: 'Play Together' },
  { href: '/method', label: 'Method' },
  { href: '/mission', label: 'Mission' },
  { href: '/donate', label: 'Donate' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/press', label: 'Press' },
];
```

**Proposed**:

```ts
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/apps', label: 'Apps' },
  { href: '/cast', label: 'Cast' },
  { href: '/play-together', label: 'Play Together' },
  { href: '/for-parents', label: 'For Families', dropdown: 'forFamilies' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/donate', label: 'Donate', cta: true },
];

export const forFamiliesDropdown = [
  { href: '/for-parents', label: 'For Parents' },
  { href: '/for-educators', label: 'For Educators' },
  { href: '/classes', label: 'Classes (coming 2027)' },
  { href: '/teach', label: 'Teach (coming 2027)' },
];
```

The dropdown trigger `href` is `/for-parents` (the most-trafficked of the four children) so keyboard-only / no-JS users still reach a useful page on Enter.

---

## Concrete component changes

### `src/components/Nav.astro`

1. Import `forFamiliesDropdown` from `~/data/site`.
2. Render any `nav` item with `dropdown: 'forFamilies'` as a `<details>`-based dropdown (no JS framework needed; standard HTML disclosure pattern with Tailwind transitions).
3. Render any `nav` item with `cta: true` using `.btn-primary`-equivalent inline styling (`bg-forge text-warm px-4 py-2 rounded-full font-bold`).
4. Mobile drawer: render dropdown items as a nested `<details>` block. Pin the Donate CTA as a full-width button at the bottom of the drawer.
5. Active-state for the dropdown: when `pathname` starts with `/for-parents | /for-educators | /classes | /teach`, mark "For Families" active.
6. Accessibility: `aria-haspopup="true"` + `aria-expanded` on the dropdown trigger; arrow-key navigation within dropdown items; Esc closes.

### `src/components/Footer.astro`

Extend from 4 columns to 5 columns (current Apps / Organization / Connect + logo column → logo + 4 nav columns). New structure:

```
[Logo + mission]   [Apps]            [Families]         [Organization]    [Connect]
                   All apps           For Parents        Mission           News
                   Cast               For Educators      Impact            Press
                   Mascots            Classes            Board             About
                   Method             Teach              Annual Report     Privacy
                   Play Together                          Donate            Terms
```

Update `md:grid-cols-5` to `md:grid-cols-6` (logo gets 2 cols, each nav column gets 1).

### New: `MobileNavDrawer.astro` (optional extraction)

If the inline mobile drawer in `Nav.astro` grows too complex with the dropdown nesting, extract into a separate component. Defer until the inline version exceeds ~60 lines of template; current implementation is ~25 lines so probably stays inline.

---

## Engagement upgrade PR ordering

Ship as separate PRs in this order (each is independently mergeable):

### PR 1 — Nav restructure (P0, do this first)

- `src/data/site.ts` + `src/components/Nav.astro` + `src/components/Footer.astro` changes above.
- No new pages. No content changes.
- Verify accessibility: keyboard-navigate the dropdown, screen-reader announces correctly, mobile-drawer scroll stays within one viewport.
- Run `npm run preview` + Lighthouse baseline before merging; capture pre/post scores.

### PR 2 — Home hero refresh (§4.1 of the audit)

`src/pages/index.astro`:

- Reduce hero CTAs from 4 to 2: "Browse 141 apps" (primary) + "Donate" (orange-secondary). Move "For parents" + "For teachers" below the trust-pill block as smaller-typography links.
- Add small "Meet 700+ characters →" link/badge next to the trust-pill block, linking to `/cast`.
- Add "Pass-and-play in 111+ apps" badge to the trust-signal pill row (10th pill), linking to `/play-together`.

### PR 3 — Per-app page CTAs (§4.3)

`src/pages/apps/[slug].astro`:

- Add "Donate to keep [AppName] free" CTA in per-app footer, linking to `/donate?app=[slug]`.
- Conditional "Play together with this app →" badge when `app.playTogether === true`, linking to `/play-together#[slug]`.
- Conditional "Meet [AppName]'s cast →" link when `app.distributedNarrative === true`, linking to `/cast?app=[slug]` (or a deep anchor on `/cast` for that app's cast section).

### PR 4 — Cross-link differentiator pages (§4.4)

Add reciprocal intro links + footer "Related" blocks in `/cast`, `/play-together`, `/method`. Each page gets:

- One sentence in its intro that links to the other two differentiators.
- A "Related" footer block (above the global Footer) with 3 cards: the other two differentiators + the relevant audience page.

### PR 5 — Verify `?mode=` query (§4.2)

`src/pages/apps/index.astro` already implements client-side mode filtering. Verify:

- The URL state updates when a mode button is clicked.
- A direct visit to `/apps?mode=play` lands with the Play mode pre-selected.
- The home page Learn/Play/Create CTA links work end-to-end.

If anything is broken, fix in this PR. If everything works, this PR is just a verification + screenshot.

### PR 6 — Search affordance (§4.5, P2 — defer)

Add Pagefind static-site search. ~40 KB index for 141 pages. Trigger UI: `/` keyboard shortcut + a search-icon button in the nav (between For Families and About).

Defer until PRs 1-5 ship. Nav restructure is higher leverage.

### PR 7 — Home "What you can do here" rail (§4.6, P2 — defer)

Add a verb-first action rail below the hero: `Browse 141 apps →` `Meet 700+ characters →` `Play together with your kid →`. Three cards. Below the existing Learn/Play/Create section.

Defer until PRs 1-6 ship.

---

## State at this handoff's commit

- Repo: `spark-anvil-site/main` HEAD at the time of this handoff
- ForgeKit pin: N/A (site doesn't use ForgeKit)
- Astro version: 4.x
- Tailwind config: brand-token palette mapped (forge / anvil / spark / warm / slate) — unchanged by this work
- Plausible analytics: wired in `BaseLayout.astro` lines 56-59, production-only
- Nav file: `src/data/site.ts` 51 lines, nav array on lines 26-42
- Nav component: `src/components/Nav.astro` 98 lines
- Footer component: `src/components/Footer.astro` 56 lines, 4-column grid
- Pages directory: 22 routes total (21 `.astro` files + 1 sitemap.xml.ts)

---

## What this handoff does NOT cover

- The 6-8 non-profit-pivot pages (`/mission`, `/impact`, `/board`, `/annual-report`, `/partners`, `/financials`, `/501c3`) — those have their own implementation handoff queued separately per `labsmith/Docs/PLAN_NONPROFIT_BRAND_REFRESH.md` § 2. The nav restructure here MUST land before those pages so they slot into the new IA.
- Donor-tier copy + Stripe Connect setup — covered in `PLAN_NONPROFIT_BRAND_REFRESH.md` § 3.
- Brand voice rewrites — covered in `PLAN_NONPROFIT_BRAND_REFRESH.md` § 1.
- Privacy / Terms updates for non-profit status — covered in `PLAN_NONPROFIT_BRAND_REFRESH.md` § 5 (counsel-drafted).

---

## Cross-references

- `labsmith/Docs/AUDIT_SPARK_ANVIL_SITE_NAV_AND_ENGAGEMENT.md` — full audit with heuristic foundations, competitive nav teardowns, and source citations
- `labsmith/Docs/PLAN_NONPROFIT_BRAND_REFRESH.md` § 2 — original IA proposal that this handoff operationalizes
- `labsmith/Docs/RESEARCH_SPARK_ANVIL_WEBSITE.md` — competitive analysis (Toca Boca / Sago Mini / Lickability / Khan Academy / Common Sense Media)
- `labsmith/Docs/RESEARCH_PASS_AND_PLAY_DIFFERENTIATOR.md` — informs §4.1 pass-and-play badge
- `labsmith/.claude/rules/spark-anvil-website.md` — labsmith-vs-site-repo scope split (this handoff respects)
- Khan Academy / Common Sense Media / Mozilla Foundation / iKeepSafe — informal nav teardowns showing the 5-7-item-nav + long-footer convention for non-profit sites

---

## Related commits / PRs (table will fill in as work ships)

| Repo | Commit / PR | Description |
|---|---|---|
| labsmith | (this commit) | Audit + handoff authored |
| spark-anvil-site | TBD PR 1 | Nav restructure (P0) |
| spark-anvil-site | TBD PR 2 | Home hero refresh |
| spark-anvil-site | TBD PR 3 | Per-app CTAs |
| spark-anvil-site | TBD PR 4 | Differentiator cross-linking |
| spark-anvil-site | TBD PR 5 | `?mode=` query verification |

---

## When done

Once PRs 1-5 ship, the site CC session should commit a `HANDOFF_FROM_SITE_NAV_AND_ENGAGEMENT_COMPLETE.md` summarizing what shipped, any deviations from this plan, and the pre/post Lighthouse scores. That handoff closes queue item #266.
