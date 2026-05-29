import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

// Sitemap integration removed for v0.1 — sitemap dependency has a known
// crash on Astro 4.16 with no buildOutput; will be re-added once deploy
// pipeline is configured (Cloudflare Pages can also generate sitemap externally).
//
// output: 'static' is LOCKED in. Cloudflare Pages' `wrangler deploy`
// would otherwise auto-run `astro add cloudflare` and convert to 'hybrid'
// SSR mode, which breaks any page that does build-time Node fs work.
// All cast/mascot/portrait manifest scans run in scripts/build-*.mjs
// (prebuild hook) and produce static JSON imported by .astro pages.
export default defineConfig({
  site: 'https://spark-and-anvil.com',
  output: "hybrid",

  integrations: [
    tailwind(),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,
  adapter: cloudflare()
});