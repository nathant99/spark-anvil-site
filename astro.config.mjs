import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Sitemap integration removed for v0.1 — sitemap dependency has a known
// crash on Astro 4.16 with no buildOutput; will be re-added once deploy
// pipeline is configured (Cloudflare Pages can also generate sitemap externally).
export default defineConfig({
  site: 'https://spark-and-anvil.com',
  integrations: [
    tailwind(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
