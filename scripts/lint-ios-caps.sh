#!/usr/bin/env bash
# scripts/lint-ios-caps.sh
#
# Build-time lint: fails the build if "IOS" (all-caps) appears in user-visible
# source. The Apple-canonical spelling is "iOS" (lowercase i). Catches typos
# before they ship.
#
# Scope:
#   - src/  (all files)
#   - public/  (text-format files only — *.html, *.txt, *.md, *.json, *.xml, *.svg)
#
# Excludes:
#   - node_modules, .astro, dist (build artifacts)
#   - PDFs and binary assets in public/ (false positives from compressed byte streams)
#
# Added in Round 81 #422 (site UX cleanup bundle).

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

# Find IOS as a whole word (\bIOS\b) in user-visible source.
HITS=$(grep -rEn '\bIOS\b' \
  --include='*.astro' \
  --include='*.ts' \
  --include='*.tsx' \
  --include='*.js' \
  --include='*.mjs' \
  --include='*.jsx' \
  --include='*.md' \
  --include='*.html' \
  --include='*.txt' \
  --include='*.json' \
  --include='*.xml' \
  --include='*.svg' \
  --include='*.css' \
  src/ public/ 2>/dev/null || true)

if [ -n "$HITS" ]; then
  echo "✗ Lint failed: 'IOS' (all-caps) found in user-visible source."
  echo ""
  echo "Apple's canonical spelling is 'iOS' (lowercase i)."
  echo "Fix the hits below and re-run the build:"
  echo ""
  echo "$HITS"
  echo ""
  exit 1
fi

echo "✓ lint-ios-caps: no 'IOS' (all-caps) hits in user-visible source."
