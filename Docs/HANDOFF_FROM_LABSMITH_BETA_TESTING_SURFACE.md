# Handoff from Labsmith — Beta Testing Surface

Direction: **labsmith → spark-anvil-site**. Operational handoff translating `labsmith/Docs/PLAN_BETA_TESTING_SURFACE.md` (queue #299) into concrete site diffs + ordered PRs.

Date: 2026-05-23. Round 58 queue item #299. Origin: queue #297 user prompt — "all of our apps are going to be in beta for a long time before app store submission. should we include a section on the web site for beta testing signup (via link and email)? should we also include screenshots and links to videos of the apps in action during beta and beyond?"

Scope: follows `.claude/rules/spark-anvil-website.md` (labsmith owns the plan; site CC session owns implementation) and `labsmith/.claude/rules/portfolio.md` § Cross-Repo Handoff Protocol.

---

## The decision

Apps will be in beta for 12-18+ months before App Store launch. The site needs a dedicated beta-testing surface to convert curiosity → tester → advocate during the long pre-launch window, capture parent/educator feedback that shapes v1, and produce donor-cultivation evidence (waitlist size as LOI signal).

Three additions:

1. **New `/beta` hub page** — single index of all in-beta apps with filtering + global newsletter signup + "What is beta?" explainer
2. **Per-app beta-status section** — between hero and cast section on `/apps/[slug]`; renders one of 6 phase-specific states with email opt-in or TestFlight CTA
3. **AppData schema additions** — 5 new optional fields (`betaPhase` / `testflightUrl` / `appStoreUrl` / `betaTesterCount` / `screenshots` / `demoVideoUrl`)

All implementation lives on the site repo. Per-app screenshot/video capture is deferred to each `<app>-app` CC session per `portfolio.md` (labsmith never builds or screenshots apps).

---

## File-by-file diffs

### 1. `src/data/apps.generated.ts` — schema additions

Extend the `AppData` interface (around line 13). All fields optional with sensible defaults so existing 141 entries remain valid without batch migration.

```ts
export interface AppData {
  // ... existing fields ...

  /**
   * Beta-phase lifecycle state. Default 'not-started' when undefined.
   * Drives the per-app beta-status section + /beta page filtering.
   * Per `labsmith/Docs/PLAN_BETA_TESTING_SURFACE.md` (queue #299).
   */
  betaPhase?:
    | 'not-started'
    | 'in-development'
    | 'closed-beta'
    | 'open-beta'
    | 'submitted'
    | 'live';

  /**
   * TestFlight invite URL — primary CTA when betaPhase === 'open-beta'.
   * Format: https://testflight.apple.com/join/XXXXXXXX (8-char code).
   */
  testflightUrl?: string;

  /**
   * App Store URL — surfaced when betaPhase === 'live'. Format:
   * https://apps.apple.com/us/app/<name>/id<numeric-id>
   */
  appStoreUrl?: string;

  /**
   * Beta-tester count, manually updated. Surfaced as social proof
   * ("N families testing"). Optional — undefined → generic copy.
   */
  betaTesterCount?: number;

  /**
   * Screenshot paths in `public/apps/<slug>/screenshots/`. Authored
   * per-app by the app's CC session, NOT labsmith. 1290×2796 WebP,
   * quality 80. Empty array → no screenshot section rendered.
   */
  screenshots?: string[];

  /**
   * Demo video URL — Cloudflare Stream embed URL OR YouTube unlisted.
   * Cloudflare Stream preferred (COPPA-safe, no third-party JS).
   */
  demoVideoUrl?: string;
}
```

**No data migration needed** for v1. All 141 entries default to `not-started`. Founder updates per-app entries as apps progress; site rebuilds on push.

---

### 2. `src/data/site.ts` — nav update

Add `/beta` to nav. Two options for the site CC session to A/B based on visual test:

**Option A — top-level orange Beta badge** (recommended; signals novelty + urgency):

```ts
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/apps', label: 'Apps' },
  { href: '/beta', label: 'Beta', badge: 'orange' },  // NEW
  { href: '/cast', label: 'Cast' },
  { href: '/play-together', label: 'Play Together' },
  {
    href: '/for-parents',
    label: 'For Families',
    children: [ /* existing */ ],
  },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/donate', label: 'Donate', cta: true },
];
```

This brings the nav to 9 items including the CTA — still within Miller's 7±2 if we count the dropdown as one item. Acceptable given the strategic importance of the beta funnel.

**Option B — under "For Families" dropdown** (more conservative; preserves 7+CTA shape):

Add `{ href: '/beta', label: 'Join the Beta' }` to the `forFamiliesDropdown` (currently in `site.ts` line ~38 children block). Less prominent but less nav-crowding.

**Recommendation**: ship Option A. The beta funnel is high-strategic-value for the next 12-18 months; nav real estate is justified. Reassess Year 2 once full portfolio is live.

---

### 3. NEW FILE — `src/pages/beta.astro`

Hub page. Skeleton:

```astro
---
import BaseLayout from '~/layouts/BaseLayout.astro';
import { apps } from '~/data/apps.generated';
import { verticals } from '~/data/site';
import BetaAppCard from '~/components/BetaAppCard.astro'; // new
import EmailForm from '~/components/EmailForm.astro'; // new

const betaEligible = apps.filter(a =>
  ['in-development', 'closed-beta', 'open-beta', 'submitted'].includes(
    a.betaPhase ?? 'not-started'
  )
);
const openBeta = betaEligible.filter(a => a.betaPhase === 'open-beta');
const closedBeta = betaEligible.filter(a => a.betaPhase === 'closed-beta');
const inDev = betaEligible.filter(a => a.betaPhase === 'in-development');
const totalTesters = apps.reduce((sum, a) => sum + (a.betaTesterCount ?? 0), 0);
---

<BaseLayout title="Join the Beta" description="...">
  <!-- Hero -->
  <section class="py-16 md:py-24 bg-forge text-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h1 class="font-brand font-bold text-5xl md:text-6xl mb-6">
        Help shape the apps your kids will use
      </h1>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Spark &amp; Anvil's 141-app portfolio is in active development. We're a
        501(c)(3) non-profit (pending) and the apps will be free forever — but
        they're a long way from polished. Join our beta program to try apps
        before App Store launch, give feedback, and shape what we build.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-3">
        <a href="#beta-apps" class="btn-primary">Browse beta apps</a>
        <a href="#newsletter" class="btn-secondary">Join beta newsletter</a>
      </div>
      <p class="mt-6 text-sm text-white/80">
        Free forever · No marketing · One-shot launch emails · COPPA compliant
      </p>
    </div>
  </section>

  <!-- Stats strip -->
  <section class="bg-anvil/5 dark:bg-warm/5 py-8">
    <div class="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
      <div>
        <div class="text-3xl font-brand font-bold text-forge">{openBeta.length}</div>
        <div class="text-xs uppercase tracking-wider text-anvil/60 dark:text-warm/60">Open TestFlight</div>
      </div>
      <div>
        <div class="text-3xl font-brand font-bold text-forge">{closedBeta.length + inDev.length}</div>
        <div class="text-xs uppercase tracking-wider text-anvil/60 dark:text-warm/60">In development</div>
      </div>
      <div>
        <div class="text-3xl font-brand font-bold text-forge">{totalTesters || '—'}</div>
        <div class="text-xs uppercase tracking-wider text-anvil/60 dark:text-warm/60">Beta testers</div>
      </div>
    </div>
  </section>

  <!-- Per-app grid (filterable; client-side toggles via Alpine.js or vanilla JS) -->
  <section id="beta-apps" class="max-w-6xl mx-auto px-6 py-16">
    <h2 class="font-brand font-bold text-3xl text-anvil dark:text-warm mb-6">Apps in beta</h2>
    {/* Filter chips: vertical + phase. Client-side toggling. */}
    {/* Grid of BetaAppCard components */}
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {betaEligible.map(app => <BetaAppCard app={app} />)}
    </div>
    {betaEligible.length === 0 && (
      <div class="text-center py-12">
        <p class="text-anvil/60 dark:text-warm/60 mb-4">
          No apps are in beta yet. The first TestFlight builds are expected in 2026 Q4.
        </p>
        <a href="/apps" class="btn-secondary">Browse all 141 apps in development →</a>
      </div>
    )}
  </section>

  <!-- "What is beta?" explainer -->
  <section class="bg-anvil/5 dark:bg-warm/5 py-16">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="font-brand font-bold text-3xl text-anvil dark:text-warm mb-6">What is beta testing?</h2>
      <dl class="space-y-6">
        <div>
          <dt class="font-bold text-anvil dark:text-warm mb-2">What is TestFlight?</dt>
          <dd class="text-anvil/80 dark:text-warm/80 leading-relaxed">Apple's free official app for trying pre-release iPhone/iPad apps. Install TestFlight from the App Store, then tap any TestFlight link on this page to install the beta version of that app.</dd>
        </div>
        <div>
          <dt class="font-bold text-anvil dark:text-warm mb-2">What's the difference between closed and open beta?</dt>
          <dd class="text-anvil/80 dark:text-warm/80 leading-relaxed">Closed beta is invite-only — we manage a waitlist and let people in gradually as we stabilize the build. Open beta is public — anyone with the TestFlight link can install. We move apps to open beta when they're ready for broader testing.</dd>
        </div>
        <div>
          <dt class="font-bold text-anvil dark:text-warm mb-2">Is it safe for my kid?</dt>
          <dd class="text-anvil/80 dark:text-warm/80 leading-relaxed">Yes. Beta apps have the same COPPA compliance and on-device-AI architecture as the App Store version. The only difference is the build is newer (and may have bugs).</dd>
        </div>
        <div>
          <dt class="font-bold text-anvil dark:text-warm mb-2">Will it cost money?</dt>
          <dd class="text-anvil/80 dark:text-warm/80 leading-relaxed">No. Spark &amp; Anvil apps are free forever. No in-app purchases. No ads.</dd>
        </div>
        <div>
          <dt class="font-bold text-anvil dark:text-warm mb-2">What if it crashes or has bugs?</dt>
          <dd class="text-anvil/80 dark:text-warm/80 leading-relaxed">That's the point of beta — we want to find bugs before App Store launch. Every beta app has an in-app feedback channel that goes directly to our founder. Your reports literally shape what ships.</dd>
        </div>
      </dl>
    </div>
  </section>

  <!-- Global newsletter -->
  <section id="newsletter" class="max-w-3xl mx-auto px-6 py-16">
    <h2 class="font-brand font-bold text-3xl text-anvil dark:text-warm mb-4">Join the beta newsletter</h2>
    <p class="text-anvil/80 dark:text-warm/80 mb-6">
      Get notified when new apps enter beta. One email per launch, no marketing fluff. Unsubscribe anytime.
    </p>
    <EmailForm
      action="mailto:hello+beta@spark-and-anvil.com"
      label="Email address"
      cta="Join the beta newsletter"
      adultOnly={true}
    />
  </section>

  <!-- Donor cross-link -->
  <section class="bg-forge/5 dark:bg-forge-light/10 py-12 border-y border-forge/15">
    <div class="max-w-3xl mx-auto px-6 text-center">
      <p class="text-anvil/80 dark:text-warm/80 mb-4">
        Spark &amp; Anvil is a 501(c)(3) non-profit (pending). Your beta-testing
        feedback shapes apps that will reach ~10M+ tween learners.
      </p>
      <a href="/donate" class="text-forge dark:text-forge-light font-bold underline hover:no-underline">
        Want to help fund it? →
      </a>
    </div>
  </section>
</BaseLayout>
```

---

### 4. NEW COMPONENT — `src/components/BetaAppCard.astro`

Card used in `/beta` grid + (optionally) in `/apps` page for in-beta apps. ~80 lines:

- App icon + name + vertical
- Beta-phase pill badge (color-coded per § 3 of the labsmith plan)
- 1-line status copy (varies per phase)
- Primary CTA per phase (TestFlight button OR email-opt-in OR "Learn more" → per-app page)
- Tester count when present (`{betaTesterCount} families testing`)

---

### 5. NEW COMPONENT — `src/components/EmailForm.astro`

Wrapper for the email opt-in form. Props:

```ts
interface Props {
  action: string;           // mailto:... for v1; Mailchimp action URL when ready
  label: string;            // input label
  cta: string;              // button text
  adultOnly?: boolean;      // adds "I am 18+" checkbox per COPPA
  appSlug?: string;         // when present, tags forwarded email
}
```

For v1 the action is `mailto:hello+beta-<slug>@spark-and-anvil.com` (or just `mailto:hello+beta@spark-and-anvil.com` for the global newsletter). When Mailchimp account is funded, swap the action URL + remove the mailto fallback in a single PR.

The `adultOnly` checkbox is required for COPPA compliance — without it, we technically can't legally collect from anyone since we can't verify age. Always default to `true` for any form on this site.

---

### 6. `src/pages/apps/[slug].astro` — per-app beta-status section

Insert a new section between the hero (line 79) and the mascot section (line 82). ~90 lines of Astro. Switch-case on `app.betaPhase ?? 'not-started'`:

```astro
<!-- Beta status -->
<section class="py-12 border-b border-anvil/10 dark:border-warm/10" style={betaPhaseStyle(app.betaPhase)}>
  <div class="max-w-4xl mx-auto px-6">
    <div class="flex items-start gap-6 flex-wrap md:flex-nowrap">
      <div class="flex-1">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3" style={betaPillStyle(app.betaPhase)}>
          {betaPhaseLabel(app.betaPhase)}
        </span>
        <p class="text-lg text-anvil/90 dark:text-warm/90 leading-relaxed mb-4" set:html={betaPhaseCopy(app)}></p>
        {app.betaTesterCount && app.betaPhase === 'open-beta' && (
          <p class="text-sm text-anvil/60 dark:text-warm/60">
            {app.betaTesterCount} families testing
          </p>
        )}
      </div>
      <div class="flex-shrink-0">
        {app.betaPhase === 'open-beta' && app.testflightUrl ? (
          <a href={app.testflightUrl} class="btn-primary text-lg">
            Install via TestFlight
          </a>
        ) : app.betaPhase === 'live' && app.appStoreUrl ? (
          <a href={app.appStoreUrl} class="btn-primary text-lg">Install free</a>
        ) : (
          <EmailForm
            action={`mailto:hello+beta-${app.slug}@spark-and-anvil.com`}
            label="Your email"
            cta={betaPhaseCTA(app.betaPhase)}
            appSlug={app.slug}
            adultOnly={true}
          />
        )}
      </div>
    </div>
  </div>
</section>

<!-- Screenshots (when present) -->
{app.screenshots && app.screenshots.length > 0 && (
  <section class="max-w-5xl mx-auto px-6 py-12">
    <h2 class="font-brand font-bold text-2xl text-anvil dark:text-warm mb-6">Screenshots</h2>
    <div class="flex gap-4 overflow-x-auto pb-4 snap-x">
      {app.screenshots.map((src, i) => (
        <img
          src={src}
          alt={`${app.name} screenshot ${i + 1}`}
          class="h-96 w-auto rounded-2xl shadow-lg snap-start flex-shrink-0"
          loading="lazy"
        />
      ))}
    </div>
  </section>
)}

<!-- Demo video (when present) -->
{app.demoVideoUrl && (
  <section class="max-w-4xl mx-auto px-6 py-12">
    <h2 class="font-brand font-bold text-2xl text-anvil dark:text-warm mb-6">Watch the demo</h2>
    <div class="aspect-video rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src={app.demoVideoUrl}
        class="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
)}
```

Helper functions (extract to `src/lib/beta.ts`):

```ts
export function betaPhaseLabel(phase?: string): string {
  switch (phase) {
    case 'in-development': return 'In development';
    case 'closed-beta': return 'Closed beta';
    case 'open-beta': return 'Open TestFlight beta';
    case 'submitted': return 'Submitted to App Store';
    case 'live': return 'Live on App Store';
    default: return 'Coming soon';
  }
}

export function betaPhaseCopy(app: AppData): string {
  // Returns the per-state copy string from PLAN_BETA_TESTING_SURFACE.md § 3
  // Template-interpolate {app.name} where relevant.
}

export function betaPhaseCTA(phase?: string): string {
  switch (phase) {
    case 'in-development': return 'Join the waitlist';
    case 'closed-beta': return 'Join the waitlist';
    case 'submitted': return 'Email me at launch';
    default: return 'Notify me';
  }
}

export function betaPhaseStyle(phase?: string): string {
  // Returns the background color band per state — see PLAN § 3 "Visual treatment"
}

export function betaPillStyle(phase?: string): string {
  // Returns the pill badge color per state
}
```

---

### 7. Remove existing "Coming to the App Store" footer section

Lines 323-333 of current `[slug].astro` (the `<section class="bg-anvil text-warm py-16">` block at the end). Now redundant — the new beta-status section above the fold handles the launch-notification CTA per-state. Delete.

---

### 8. Update `src/pages/impact.astro` — beta-waitlist stat

Add a stat tile showing aggregate beta interest:

```astro
---
const totalWaitlist = apps.reduce((sum, a) => sum + (a.betaTesterCount ?? 0), 0);
const inBetaCount = apps.filter(a =>
  a.betaPhase && !['not-started', 'live'].includes(a.betaPhase)
).length;
---
<div class="text-center">
  <div class="text-4xl font-brand font-bold text-forge">{totalWaitlist || '—'}</div>
  <div class="text-sm text-anvil/70 dark:text-warm/70 mt-2">
    Families on our beta waitlist across {inBetaCount} in-development apps
  </div>
</div>
```

---

## Test plan

After implementation:

- [ ] Build succeeds (`npm run build`)
- [ ] All 141 existing apps render without errors (no `betaPhase` field set → defaults to `not-started`)
- [ ] `/beta` page renders with 0 in-beta apps (empty state copy correct)
- [ ] Force-set one test app to `betaPhase: 'open-beta'` + `testflightUrl: 'https://testflight.apple.com/join/TESTTEST'` → TestFlight button renders + per-app page shows correct state + `/beta` page lists it
- [ ] Force-set test cases for all 6 phases — visual diff each state
- [ ] Light + dark mode for each beta-phase color band
- [ ] Email form submits correctly (mailto opens default client; check the To: address includes the app slug)
- [ ] Keyboard navigation through email form (tab order: input → adult-only checkbox → submit)
- [ ] Screenshot carousel scrolls horizontally on mobile + desktop (touch + keyboard)
- [ ] Demo video iframe loads + Cloudflare Stream stub URL doesn't break the page
- [ ] Nav adds `/beta` correctly; mobile hamburger menu shows it
- [ ] `/impact` page renders new waitlist stat

## Accessibility checklist

- [ ] All beta-phase state copy + CTAs meet WCAG AA contrast (the spark/20 and forge/20 bands should be tested specifically)
- [ ] TestFlight button has clear accessible name ("Install <AppName> via TestFlight") — not just "Install"
- [ ] Email form input has associated `<label>` (not placeholder-only)
- [ ] Adult-only checkbox has clear label ("I am 18 or older")
- [ ] Screenshot carousel is keyboard-navigable + has aria-label
- [ ] Demo video iframe has descriptive title attribute
- [ ] Beta-phase pill badge has aria-label describing the state for screen readers
- [ ] Color is not the only signal — every state has both a color band AND a text label

---

## Sequencing (suggested PRs)

| PR | Scope | Approx LOC | Depends on |
|---|---|---|---|
| 1 | Schema additions to `AppData` + helpers in `src/lib/beta.ts` | ~80 | — |
| 2 | `EmailForm` + `BetaAppCard` components | ~150 | PR 1 |
| 3 | NEW `/beta` page | ~250 | PRs 1, 2 |
| 4 | Per-app `[slug].astro` beta-status section + screenshots + video | ~180 | PRs 1, 2 |
| 5 | Nav update + `/impact` stat + remove redundant "Coming to App Store" footer | ~40 | PRs 1-4 |
| 6 | Test plan + a11y audit + screenshot all 6 phase variants | — | PRs 1-5 |

Each PR is independently mergeable + tests pass. Total estimated effort: 3-4 hours for the site CC session.

---

## What this handoff does NOT cover

- **Per-app screenshot/video capture** — owned by each `<app>-app` CC session per `portfolio.md`. Labsmith authors a `TEMPLATE_BETA_SCREENSHOT_CAPTURE.md` at the first app's TestFlight-ready milestone (deferred T+3 months)
- **Mailchimp account setup + embed integration** — gated on non-profit fiscal sponsorship signup (T+1-2 months); site CC session swaps mailto stubs for embed forms in a single follow-up PR
- **Cloudflare Stream account + video uploads** — gated on funded budget; deferred until T+3 months
- **TestFlight code refresh automation** — Apple revokes codes every 90 days. v1 = manual refresh; build a CI warning later if mtime > 60 days on any `open-beta` entry
- **Tester testimonial / quote curation** — paired with `/beta` page once we have N≥10 testers per app; sensitivity-reviewer gated for any user-generated content
- **Per-app beta-status data entry** — founder updates `apps.generated.ts` entries manually as apps progress; not automated for v1

---

## Related commits + cross-references

| Repo | Doc / File | Direction |
|---|---|---|
| labsmith | `Docs/PLAN_BETA_TESTING_SURFACE.md` | Sibling plan (this handoff's source) |
| labsmith | `Docs/PLAN_FAMILY_FEEDBACK_COLLECTION.md` | COPPA-safe feedback paired with TestFlight |
| labsmith | `Docs/RESEARCH_FOUNDATION_GRANT_PLAYBOOK.md` | Waitlist size as LOI signal context |
| labsmith | `Docs/RESEARCH_NONPROFIT_PIVOT.md` § 8 | Gates Mailchimp funding (post-fiscal-sponsorship) |
| labsmith | `Docs/AUDIT_SPARK_ANVIL_SITE_NAV_AND_ENGAGEMENT.md` | Nav-restructure precedent (Round 53 #266) |
| labsmith | `.claude/rules/spark-anvil-website.md` | Scope rule (labsmith plans; site implements) |
| labsmith | `.claude/rules/age-assurance.md` | COPPA 2026 + Mailchimp adult-only context |
| spark-anvil-site | `src/data/apps.generated.ts` | Schema target |
| spark-anvil-site | `src/data/site.ts` | Nav target |
| spark-anvil-site | `src/pages/beta.astro` | NEW |
| spark-anvil-site | `src/pages/apps/[slug].astro` | Modified target |
| spark-anvil-site | `src/pages/impact.astro` | Modified target |
| spark-anvil-site | `src/components/BetaAppCard.astro` | NEW |
| spark-anvil-site | `src/components/EmailForm.astro` | NEW |
| spark-anvil-site | `src/lib/beta.ts` | NEW |
