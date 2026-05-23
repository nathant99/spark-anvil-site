#!/usr/bin/env node
// Scans public/cast/<app>/<char>.webp and writes a deterministic JSON
// manifest at src/data/cast-manifest.json. The /cast page imports the
// JSON directly (no node:fs needed at SSG runtime), so this works in
// both Node-static and Cloudflare Pages hybrid-SSR builds.
//
// Run before `astro build` (wired in package.json prebuild hook).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const CAST_DIR = path.join(ROOT, 'public', 'cast');
const OUT = path.join(ROOT, 'src', 'data', 'cast-manifest.json');

const entries = [];
if (fs.existsSync(CAST_DIR)) {
  for (const appDir of fs.readdirSync(CAST_DIR).sort()) {
    const appPath = path.join(CAST_DIR, appDir);
    if (!fs.statSync(appPath).isDirectory()) continue;
    for (const file of fs.readdirSync(appPath).sort()) {
      if (file.endsWith('.webp')) entries.push(`${appDir}/${file}`);
    }
  }
}

fs.writeFileSync(OUT, JSON.stringify(entries, null, 2) + '\n');
console.log(`cast-manifest: ${entries.length} portraits across ${new Set(entries.map(e => e.split('/')[0])).size} apps`);
