# Spark & Anvil — Company Website

Static site for [spark-and-anvil.com](https://spark-and-anvil.com) — the studio behind 131 educational iOS apps for kids ages 9–14.

## Tech stack

- [Astro 4](https://astro.build/) — static site generator
- [Tailwind CSS](https://tailwindcss.com/) — token-mapped brand palette
- TypeScript — strict mode
- Cloudflare Pages — deployment target
- Plausible — privacy-first analytics (no cookies, COPPA-safe)

## Brand source

All brand assets, palette tokens, and design rationale live in the labsmith research hub at `../labsmith/`:

- `../labsmith/Branding/Colors/spark-anvil-palette.md` — palette spec
- `../labsmith/Branding/Logo/PNG/` — logo files (copied to `public/brand/` here)
- `../labsmith/Docs/PLAN_SPARK_ANVIL_WEBSITE.md` — full 7-phase plan
- `../labsmith/Docs/RESEARCH_SPARK_ANVIL_WEBSITE.md` — research + competitive analysis
- `../labsmith/Docs/DECISION_FIGMA_FOR_SPARK_ANVIL_WEBSITE.md` — no-Figma rationale
- `../labsmith/.claude/rules/spark-anvil-website.md` — scope + content sourcing rules

## Local development

```bash
npm install
npm run dev          # localhost:4321
npm run build        # static build to dist/
npm run preview      # preview the production build
```

## Project structure

```
spark-anvil-site/
├── astro.config.mjs           # Astro + Tailwind + sitemap integration config
├── tailwind.config.js         # Brand palette tokens
├── tsconfig.json
├── public/
│   ├── brand/                 # Logo PNGs (sourced from labsmith/Branding/Logo/)
│   └── apps/                  # Per-app icons + mascots (TODO: scripts/build-apps-data.mjs)
├── src/
│   ├── components/            # Astro components (Nav, Footer, AppCard)
│   ├── data/                  # site config, featured apps list
│   ├── layouts/               # BaseLayout (SEO, OG, structured data)
│   ├── pages/                 # Routes (index, apps/, for-parents, etc.)
│   └── styles/global.css      # Tailwind base + component classes
├── scripts/
│   └── build-apps-data.mjs    # (TODO) Reads labsmith app docs to populate apps/[slug].astro
└── CLAUDE.md                  # Coding agent instructions
```

## Pages shipped (v0.1 scaffold)

| Route | Status |
|---|---|
| `/` | ✅ Hero + trust signals + Why + Featured + Verticals + Parent CTA |
| `/apps` | 🟡 Featured-only listing; full catalog TODO via build script |
| `/apps/[slug]` | ❌ Per-app dynamic route TODO |
| `/for-parents` | ✅ Privacy commitments + FAQ + Letter to Parents placeholder |
| `/for-educators` | ✅ Curriculum mapping + school compliance |
| `/about` | ✅ Studio story + how-we-work + contact |
| `/press` | ✅ Fact sheet + brand asset downloads |
| `/privacy` | 🟡 Parent-friendly summary; full legal version TBD |
| `/terms` | 🟡 Placeholder; counsel-drafted version TBD |

## Asset reuse from labsmith

Per portfolio asset-reuse policy (see `../labsmith/.claude/rules/spark-anvil-website.md`):

- ✅ Brand logo: sourced from `../labsmith/Branding/Logo/PNG/`
- 🟡 Per-app icons: TODO — `scripts/build-apps-data.mjs` will sync from each `../<app>-app/icons/`
- 🟡 Mascots, jokes, backdrops, modecards, portraits, M9 accessories: TODO — same sync script
- ✅ Hero color registry: source for per-app card theming
- ❌ Topic illustrations: DEFERRED per portfolio policy 2026-05-20 — not needed for v1

## Deployment

Target: Cloudflare Pages.

1. Push to `main` (GitHub).
2. Cloudflare Pages auto-builds via `npm run build`.
3. Site live at `spark-and-anvil.com` (domain TBD).

## Open questions (block public launch)

- Domain registration (`spark-and-anvil.com` vs `.studio`)
- Cloudflare Pages account setup + DNS configuration
- Counsel-drafted privacy policy + terms of service
- Founder letter for `/for-parents`
- Per-app dataset generation (`scripts/build-apps-data.mjs`)
- Real per-app screenshots (deferred until apps ship)

## License

© 2026 Spark & Anvil. All rights reserved.
