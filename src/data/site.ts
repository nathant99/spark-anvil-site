export const site = {
  name: 'Spark & Anvil',
  tagline: 'Free forever. Educational iOS apps, forged for curiosity.',
  description:
    'Spark & Anvil makes thoughtfully-crafted educational iOS apps for kids ages 9–14 — all free, forever. No ads, no in-app purchases, no tracking. Built with Swift 6 and SwiftUI, running on-device AI.',
  url: 'https://spark-and-anvil.com',
  ogImage: '/brand/og-image.png',
  email: 'hello@spark-and-anvil.com',
  press: 'press@spark-and-anvil.com',
  ages: '5–14',
  appCount: 141,
};

export const trustSignals = [
  '501(c)(3) non-profit (pending)',
  'Free forever',
  'No ads',
  'No in-app purchases',
  'No tracking',
  'COPPA compliant',
  'iOS 26 native',
  'On-device AI',
  'Designed for face-to-face play',
];

// Top-level nav — flattened 2026-05-23 (queue #322 IA fix).
// "For Families" dropdown previously nested /for-educators + /teach (semantic mismatch —
// educators and S&A teachers are not families). Flattened to 3 audience-specific top-level links.
// Phase 3 of `labsmith/Docs/PLAN_TEACHER_NETWORK_PROMINENCE.md` promotes /teach with "Recruiting" badge.
// Demoted to footer-only: /classes, /news, /mascots, /method, /mission, /impact, /board, /annual-report, /press, /privacy, /terms.
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/apps', label: 'Apps' },
  { href: '/cast', label: 'Cast' },
  { href: '/play-together', label: 'Play Together' },
  { href: '/neurodivergent', label: 'Neurodivergent' },
  { href: '/for-parents', label: 'For Parents' },
  { href: '/for-educators', label: 'For Educators' },
  { href: '/teach', label: 'Teach', badge: 'Recruiting' },
  { href: '/about', label: 'About' },
  { href: '/donate', label: 'Donate', cta: true },
];

export const verticals = [
  { id: 'stem', name: 'STEM', description: 'Math, science, engineering, and applied tech.' },
  { id: 'steam', name: 'STEAM', description: 'Music, art, dance, theater, and creative making.' },
  { id: 'academics', name: 'Academics', description: 'Reading, writing, language, civics, history, and critical thinking.' },
  { id: 'dir-fedc', name: 'DIR / FEDC', description: 'Affect, regulation, and developmental capacity scaffolding.' },
  { id: 'special-interest', name: 'Special Interest', description: 'Cubing, cartography, paleontology, wildlife, and more.' },
];
