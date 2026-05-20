# Spark & Anvil Website — Coding Agent Instructions

Static site for the Spark & Anvil studio at `spark-and-anvil.com`. Astro 4 + Tailwind CSS + TypeScript. Deploys to Cloudflare Pages.

## Scope

This repo contains the website only — NOT the iOS apps (those are at `../[appname]-app/`) and NOT the labsmith research hub (at `../labsmith/`).

Labsmith provides:
- Brand assets (palette, logo, typography spec)
- Per-app source material (CLAUDE.md, illustrations, icons, hero colors)
- Research, planning, and content-sourcing rationale

This repo consumes those assets but doesn't author them. If you need to update the brand or add app content, work upstream in labsmith.

## Tech stack

| Concern | Choice | Rationale |
|---|---|---|
| Static site generator | Astro 4.x | Best-in-class for content-heavy sites with many templated pages; near-zero JS shipped |
| Styling | Tailwind CSS | Token-mapped to labsmith brand palette; maintainable across 131 per-app pages |
| Type checking | TypeScript strict | Catches data-shape bugs in `src/data/*.ts` |
| Hosting | Cloudflare Pages | Edge CDN, free tier, instant deploys, COPPA-safe |
| Analytics | Plausible | Privacy-first, no cookies, COPPA-safe |
| Forms | Formspree or Netlify Forms | No backend needed |

## Brand palette tokens

Defined in `tailwind.config.js`, sourced from `../labsmith/Branding/Colors/spark-anvil-palette.md`:

| Token | Hex | Use |
|---|---|---|
| `forge` (`#E8652B`) | Forge Orange | Primary CTAs, key UI |
| `anvil` (`#2D2D2D`) | Anvil Charcoal | Body text, grounding |
| `spark` (`#FFBE2E`) | Spark Gold | Highlights, accents |
| `warm` (`#FAF8F5`) | Warm White | Page backgrounds |
| `slate` (`#4A6FA5`) | Slate Blue | Links, secondary |
| `outline` (`#2A1F1A`) | Outline | Matches chunky-cartoon portfolio aesthetic |

Dark variants available as `forge-light`, `anvil-light`, `spark-soft`, `slate-light`.

## Component conventions

- Astro components are the default. React/Vue/etc. opted-in via Astro islands ONLY when interactivity demands it.
- Component files: `src/components/<Name>.astro` with PascalCase. Props typed via `interface Props`.
- Layouts: `src/layouts/BaseLayout.astro` is the canonical wrapper; all pages extend it.
- Styling: Tailwind utility classes preferred. Custom classes via `@layer components` in `src/styles/global.css`.

## Page conventions

- Each `src/pages/<route>.astro` receives a frontmatter block with imports + data fetching, then markup.
- Use `<BaseLayout title="..." description="..." ogImage="...">` for SEO.
- Trust signals visible above-the-fold on `/` and `/for-parents`.
- COPPA-compliant copy: no kid-tracking claims, plain language for parents.

## Asset reuse policy

Per `../labsmith/.claude/rules/spark-anvil-website.md`:

- ✅ Reuse existing portfolio assets — icons, mascots, jokes, backdrops, modecards, portraits, M9 accessories, hero colors
- ✅ Generate brand-website-specific assets only when impossible to source from existing apps (e.g., logo)
- ❌ DO NOT regenerate topic illustrations — DEFERRED portfolio-wide as of 2026-05-20

When adding new per-app pages, the `scripts/build-apps-data.mjs` build script (to be authored) sources from:

- `../labsmith/Docs/<AppName>/README.md` → tagline + summary
- `../<app>-app/CLAUDE.md` → tech stack + safety statement
- `../<app>-app/.../Resources/Illustrations/` → visuals (mascots, etc.)
- `../labsmith/Docs/REGISTRY_APP_HERO_COLORS.md` → per-app theming
- `../labsmith/Docs/RESEARCH_CURRICULUM_STANDARDS_MAPPING.md` → curriculum chips

## Definition of Done for any change

1. `npm run build` succeeds
2. Lighthouse score ≥ 95 on Performance / Accessibility / Best Practices / SEO (for affected pages)
3. WCAG 2.2 AA color contrast verified
4. Tested on Safari (macOS, iOS), Chrome, Firefox
5. Mobile responsive (320px → 4K)
6. No third-party SDK additions (preserves no-tracking trust signal)

## What to NEVER do

- ❌ Add third-party analytics, ads, or tracking scripts (breaks trust signals)
- ❌ Add a cookie banner (we don't use cookies; Plausible is cookie-free)
- ❌ Regenerate topic illustrations (deferred policy)
- ❌ Push to `main` without local `npm run build` passing
- ❌ Hardcode brand colors instead of using Tailwind tokens (`forge`, `anvil`, etc.)
- ❌ Author per-app content that contradicts the source-of-truth CLAUDE.md in the app's repo

## Local development

```bash
cd /Volumes/Data/Projects/GitHub/spark-anvil-site
npm install        # First time only
npm run dev        # localhost:4321
npm run build      # Static output to dist/
npm run preview    # Preview production build locally
```

## Cross-references

- `../labsmith/Docs/PLAN_SPARK_ANVIL_WEBSITE.md` — 7-phase implementation plan
- `../labsmith/Docs/RESEARCH_SPARK_ANVIL_WEBSITE.md` — research synthesis
- `../labsmith/Docs/DECISION_FIGMA_FOR_SPARK_ANVIL_WEBSITE.md` — no-Figma decision
- `../labsmith/.claude/rules/spark-anvil-website.md` — portfolio-side scope rule

## Status

v0.1 scaffold shipped 2026-05-20:
- ✅ Astro + Tailwind + sitemap configured
- ✅ Brand palette tokens
- ✅ Brand logo wired (logomark + lockup)
- ✅ Home + Apps + For-Parents + For-Educators + About + Press + Privacy + Terms pages
- 🟡 Per-app dynamic route + data sync script — Phase 4 of the PLAN
- 🟡 Letter to Parents content — pending founder copy
- 🟡 Full privacy policy + terms — pending counsel
- ❌ Production deploy + DNS — pending domain registration
