# Handoff from Labsmith — Cast Drill-In UX (Option C Hybrid)

Direction: **labsmith → spark-anvil-site**. Implement an in-place modal on `/cast` + 586 dedicated static routes `/cast/[app]/[char]` so visitors (especially kids) can zoom in on character portraits and learn about each cast member before downloading the apps.

**Source plan**: `labsmith/Docs/PLAN_CAST_DRILL_IN_UX.md` (queue #293, this round). Read that for motivation, content-depth deficit, sequencing rationale, and SEO design. This handoff is the site-side implementation spec only.

---

## What labsmith decided

**Option C hybrid**, picked over modal-only or pages-only alternatives. Rationale (in plan §2):

- Modal serves kid in-flow browsing + URL-fragment shareability.
- Per-character pages serve SEO + cross-cluster cameos + canonical-URL parent-due-diligence reading.
- Together they cover the four distinct visitor modes without compromise.

---

## Files to create

### 1. `src/pages/cast/[app]/[char].astro` (NEW)

Static-generated per-character page. ~150-200 LOC.

#### `getStaticPaths()`

```ts
import { apps } from '~/data/apps.generated';
import castManifest from '~/data/cast-manifest.json';

function slugChar(name: string): string {
  return name.toLowerCase()
    .replace(/&/g, '-and-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'char';
}

export async function getStaticPaths() {
  const portraitSet = new Set<string>(castManifest as string[]);
  const paths: Array<{ params: { app: string; char: string }; props: { ... } }> = [];

  for (const app of apps) {
    if (!app.distributedNarrative || !app.dnCast?.members?.length) continue;
    for (const member of app.dnCast.members) {
      const charSlug = slugChar(member.name);
      const portraitKey = `${app.slug}/${charSlug}.webp`;
      if (!portraitSet.has(portraitKey)) continue; // skip un-rendered chars
      paths.push({
        params: { app: app.slug, char: charSlug },
        props: { app, member, portraitUrl: `/cast/${portraitKey}` },
      });
    }
  }
  return paths;
}
```

Filtering on `portraitSet.has(...)` ensures we only emit routes for the ~586 characters who have shipped portraits — not the ~30+ trauma-gated characters who are still BLOCKED behind sensitivity review.

#### Page sections (in order)

1. **Hero band** (uses `app.heroColor` as background): large portrait (256×256 displayed, served at 512×512), name (font-brand text-5xl), 1-line role, breadcrumb (`← All cast · <App name>` with two links).
2. **What they teach** paragraph: for Phase 1, render `member.role` + a small `<p class="italic opacity-70">Richer learning explanation coming soon.</p>` placeholder. Phase 2 (future) wires in `Resources/CastContent/<app>.json` extended content.
3. **App context strip** (compact): mascot thumbnail + app name (link to `/apps/<app.slug>`) + mentor name + standards chips. Reuses the per-app card pattern from `/cast.astro` lines 103-138.
4. **Other characters in <App>** (5-card grid or however many): the rest of `app.dnCast.members` excluding the current character, each linking to its own `/cast/<app.slug>/<other-char-slug>` page. Use the same 40×40 circular-portrait card as `/cast.astro` lines 144-170.
5. **Methodology callout**: identical to `/cast.astro` lines 181-196 (or extract to a shared `<MethodologyCallout />` component if you prefer).
6. **JSON-LD `<script>` block** (in `<head>` via Astro's `<slot name="head">` or inline at top of page):

```html
<script type="application/ld+json" set:html={JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: member.name,
  image: `https://spark-and-anvil.com${portraitUrl}`,
  description: member.role,
  isPartOf: {
    '@type': 'CreativeWork',
    name: app.name,
    url: `https://spark-and-anvil.com/apps/${app.slug}`,
  },
})}></script>
```

7. **`<link rel="canonical">`**: set in `BaseLayout` via a prop, or inline `<link rel="canonical" href={`https://spark-and-anvil.com/cast/${app.slug}/${charSlug}`}>` in the page head.

### 2. `src/pages/cast.astro` (UPDATE)

Wrap each `<li>` character card (currently lines 144-170) in a `<button type="button" data-char="<app.slug>/<charSlug>">` OR an `<a href="/cast/<app.slug>/<charSlug>">` with `data-modal-trigger` attribute. Add a global `<dialog id="cast-modal">` element at end of `<BaseLayout>` slot. Add a `<script>` block with vanilla JS (no library) for modal logic.

#### Modal markup (added once near end of `cast.astro`)

```html
<dialog id="cast-modal" class="rounded-2xl p-0 backdrop:bg-anvil/60 backdrop:backdrop-blur-sm max-w-2xl w-full">
  <div class="relative bg-white dark:bg-anvil/90 p-8">
    <button id="cast-modal-close" class="absolute top-4 right-4 text-2xl text-anvil/60 hover:text-anvil dark:text-warm/60" aria-label="Close">×</button>
    <div id="cast-modal-body"><!-- populated by JS --></div>
  </div>
</dialog>
```

#### Modal JS (vanilla, ~60 LOC)

```html
<script>
  const dialog = document.getElementById('cast-modal');
  const body = document.getElementById('cast-modal-body');
  const closeBtn = document.getElementById('cast-modal-close');
  // Build a lookup from data attributes embedded on each card
  const characters = Array.from(document.querySelectorAll('[data-char-card]')).reduce((acc, el) => {
    acc[el.dataset.char] = {
      name: el.dataset.name,
      role: el.dataset.role,
      app: el.dataset.app,
      appSlug: el.dataset.appSlug,
      portrait: el.dataset.portrait,
      heroColor: el.dataset.heroColor,
    };
    return acc;
  }, {});

  function openModal(charKey) {
    const data = characters[charKey];
    if (!data) return;
    body.innerHTML = `
      <div class="text-center">
        <div class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-warm" style="background-color: ${data.heroColor}">
          <img src="${data.portrait}" alt="${data.name} portrait" class="w-full h-full object-contain" />
        </div>
        <h2 class="font-brand font-bold text-3xl mt-4 text-anvil dark:text-warm">${data.name}</h2>
        <p class="text-anvil/70 dark:text-warm/70 mt-2 max-w-md mx-auto">${data.role}</p>
        <div class="mt-6 flex gap-3 justify-center">
          <a href="/cast/${charKey}" class="btn-primary">View full page →</a>
          <a href="/apps/${data.appSlug}" class="btn-secondary">Open ${data.app} →</a>
        </div>
      </div>
    `;
    dialog.showModal();
    history.pushState({ char: charKey }, '', `?char=${charKey}`);
  }

  function closeModal() {
    if (dialog.open) dialog.close();
    if (location.search) history.pushState({}, '', location.pathname);
  }

  document.querySelectorAll('[data-modal-trigger]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      openModal(el.dataset.char);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  dialog.addEventListener('click', e => { if (e.target === dialog) closeModal(); });
  dialog.addEventListener('cancel', e => { closeModal(); }); // ESC

  // Deep-link support: ?char=app/slug auto-opens modal
  const params = new URLSearchParams(location.search);
  const charParam = params.get('char');
  if (charParam) openModal(charParam);

  window.addEventListener('popstate', () => {
    const newParams = new URLSearchParams(location.search);
    const newChar = newParams.get('char');
    if (newChar && characters[newChar]) openModal(newChar);
    else if (dialog.open) dialog.close();
  });
</script>
```

#### Each character card gets data attributes

Update lines 144-170 of `cast.astro`:

```astro
<li>
  <button
    type="button"
    data-modal-trigger
    data-char-card
    data-char={`${app.slug}/${slugChar(member.name)}`}
    data-name={member.name}
    data-role={member.role}
    data-app={app.name}
    data-app-slug={app.slug}
    data-portrait={portraitUrl ?? ''}
    data-hero-color={app.heroColor}
    class="w-full text-left flex items-start gap-3 text-anvil/80 dark:text-warm/80 hover:bg-anvil/5 dark:hover:bg-warm/5 rounded-lg p-1 -m-1 transition-colors"
  >
    {/* existing card content (lines 145-170) */}
  </button>
</li>
```

Cards WITHOUT a portrait (`portraitUrl === null`) should NOT be made clickable — the modal would have no image to show. Conditionally wrap in button only when `portraitUrl` is non-null.

### 3. `src/pages/apps/[slug].astro` (UPDATE)

Wrap each `dnCast.members[]` card (currently lines 206-235) in an `<a href={`/cast/${app.slug}/${slugChar(m.name)}`}>` when a portrait exists. Cards without a portrait stay as `<div>` (no link target).

The cards keep their current visual style; the wrapping anchor adds `hover:border-forge` etc. for affordance.

---

## Data sources (already in place — no labsmith changes needed)

- **Character names + roles**: `src/data/apps.generated.ts` `apps[].dnCast.members[]`.
- **Portrait paths**: `src/data/cast-manifest.json` (586 entries; built by `scripts/build-cast-manifest.mjs` at `prebuild` time).
- **Hero colors**: `apps[].heroColor`.
- **Mentor + standards**: `apps[].mentor` + `apps[].standards`.

Phase 1 needs NO new data files. Phase 2 (depth content) will add `src/data/cast-content.json` later — coordinate with labsmith when that ships.

---

## Build cost

- ~586 new static HTML pages × ~5-10ms gen = ~3-6s additional build time.
- Total static HTML bundle adds ~4.5MB raw (~1MB gzip on Cloudflare Pages).
- No new images (existing 512×512 WebP sufficient).
- Modal JS: ~60 LOC inline; no new dependencies.
- Sitemap auto-extends via `@astrojs/sitemap` (if you're not already using it, this is a good moment to add it).

---

## QA checklist

- [ ] `/cast/gambittales/sir-pinwell` (or any other character with shipped portrait) renders with portrait + role + cross-links
- [ ] `/cast/<some-trauma-gated-char>` returns 404 (filtered out by `portraitSet.has` check)
- [ ] Clicking a `/cast` card opens modal in-place; URL gets `?char=app/slug` appended
- [ ] ESC closes modal; backdrop click closes modal; close button closes modal
- [ ] Direct-loading `/cast?char=gambittales/sir-pinwell` auto-opens the modal
- [ ] Back button after opening modal returns to `/cast` (no broken history)
- [ ] `/apps/gambittales` cast cards link to `/cast/gambittales/<char>` (only the ones with portraits)
- [ ] `<link rel="canonical">` present on per-character pages
- [ ] JSON-LD `Person` schema renders in page source
- [ ] Modal has focus trap (Tab cycles within dialog)
- [ ] Modal has accessible name (`aria-labelledby` → name heading)
- [ ] No-JS fallback: card click navigates to `/cast/<app>/<char>` (use `<a>` not `<button>` for graceful degradation)
- [ ] Build time on full `npm run build` increases by <10s
- [ ] Plausible analytics shows pageviews on per-character pages
- [ ] Sitemap.xml includes all 586 new routes

---

## Content placeholder note

Per-character pages will show `member.role` (the 1-line string) plus an explicit "Richer learning explanation coming soon" tag in Phase 1. Labsmith will deliver `src/data/cast-content.json` with 2-3-sentence character paragraphs + kit-appearance schedules in a future round (queue #294 / #295). When that ships, this page template gets ~5 lines of update to read from the new file.

This is intentional: shipping the routes + SEO surface NOW (independent of content depth) unlocks search-indexing immediately. Content backfill is parallelizable.

---

## Cross-references

- **Source plan**: `labsmith/Docs/PLAN_CAST_DRILL_IN_UX.md` — full motivation, sequencing, SEO design, content-depth deficit detail.
- **Existing /cast page**: `src/pages/cast.astro` — pattern reference + the file you're updating.
- **Existing /apps/[slug] dynamic route**: `src/pages/apps/[slug].astro` — `getStaticPaths` pattern + cast card visual style we mirror.
- **Cast manifest**: `src/data/cast-manifest.json` — 586 portrait paths.
- **Apps data**: `src/data/apps.generated.ts` — `dnCast.members[]` source.
- **Site scope rule**: `labsmith/.claude/rules/spark-anvil-website.md` — labsmith owns plan; site CC session owns this implementation.
- **Companion**: `labsmith/Docs/PLAN_CAST_ART_APP_DISTRIBUTION.md` — distinct in-app cast distribution plan (queue #233), not relevant to this web-side ship.
