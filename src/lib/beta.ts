// Beta-phase helpers — derive labels, copy, CTAs, and visual styling
// per app betaPhase state. Per labsmith/Docs/PLAN_BETA_TESTING_SURFACE.md
// queue #299 (6-state lifecycle: not-started → in-development → closed-beta
// → open-beta → submitted → live).

import type { AppData } from '~/data/apps.generated';

export type BetaPhase = NonNullable<AppData['betaPhase']>;

export function betaPhaseLabel(phase?: string): string {
  switch (phase) {
    case 'in-development':
      return 'In development';
    case 'closed-beta':
      return 'Closed beta';
    case 'open-beta':
      return 'Open TestFlight beta';
    case 'submitted':
      return 'Submitted to App Store';
    case 'live':
      return 'Live on App Store';
    default:
      return 'Coming soon';
  }
}

/**
 * Per-state copy. {app.name} interpolated. Per PLAN § 3.
 */
export function betaPhaseCopy(app: AppData): string {
  const phase = app.betaPhase ?? 'not-started';
  switch (phase) {
    case 'in-development':
      return `${app.name} is in active development. We're building the curriculum, the cast, and the on-device-AI mentor. Join the waitlist — we'll email you the moment closed beta opens.`;
    case 'closed-beta':
      return `${app.name} is in closed beta with a small group of testers. We're stabilizing the build before opening to everyone. Join the waitlist and we'll invite you the moment we move to open beta.`;
    case 'open-beta':
      return `${app.name} is in open TestFlight beta. Tap the button below to install — you'll get the latest build before it hits the App Store. Your feedback shapes what ships.`;
    case 'submitted':
      return `${app.name} has been submitted to the App Store and is in Apple's review queue. We'll email you the moment it goes live.`;
    case 'live':
      return `${app.name} is live on the App Store. Free forever. No ads. No in-app purchases. Tap to install.`;
    default:
      return `${app.name} is on our roadmap. Want to be notified when development starts? Drop your email.`;
  }
}

export function betaPhaseCTA(phase?: string): string {
  switch (phase) {
    case 'in-development':
      return 'Join the waitlist';
    case 'closed-beta':
      return 'Join the waitlist';
    case 'open-beta':
      return 'Notify me anyway';
    case 'submitted':
      return 'Email me at launch';
    case 'live':
      return 'Notify me of updates';
    default:
      return 'Notify me';
  }
}

/**
 * Background band color (CSS inline style fragment) for the per-app
 * beta-status section. Subtle tint by phase.
 */
export function betaPhaseStyle(phase?: string): string {
  switch (phase) {
    case 'in-development':
      return 'background-color: rgba(74,111,165,0.08);'; // slate/8 — neutral cool
    case 'closed-beta':
      return 'background-color: rgba(255,190,46,0.10);'; // spark/10 — warm warning
    case 'open-beta':
      return 'background-color: rgba(232,101,43,0.10);'; // forge/10 — bright action
    case 'submitted':
      return 'background-color: rgba(255,190,46,0.10);'; // spark/10
    case 'live':
      return 'background-color: rgba(76,175,80,0.10);';  // green/10 — shipped
    default:
      return 'background-color: rgba(120,120,120,0.06);';
  }
}

/**
 * Pill badge color (CSS inline style fragment) for the phase label.
 */
export function betaPillStyle(phase?: string): string {
  switch (phase) {
    case 'in-development':
      return 'background-color: #4A6FA5; color: #FFFFFF;';
    case 'closed-beta':
      return 'background-color: #FFBE2E; color: #2D2D2D;';
    case 'open-beta':
      return 'background-color: #E8652B; color: #FFFFFF;';
    case 'submitted':
      return 'background-color: #FFBE2E; color: #2D2D2D;';
    case 'live':
      return 'background-color: #4CAF50; color: #FFFFFF;';
    default:
      return 'background-color: #6B6B6B; color: #FFFFFF;';
  }
}

/**
 * Which phases qualify as "in beta" for /beta page filtering.
 * 'not-started' and 'live' are excluded — the beta surface is the
 * pre-launch funnel.
 */
export function isBetaEligible(phase?: string): boolean {
  return ['in-development', 'closed-beta', 'open-beta', 'submitted'].includes(
    phase ?? 'not-started'
  );
}
