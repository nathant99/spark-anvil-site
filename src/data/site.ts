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

// Top-level nav — kept lean (Hick's law / Miller's 7±2) per
// `labsmith/Docs/AUDIT_SPARK_ANVIL_SITE_NAV_AND_ENGAGEMENT.md` (queue #266).
// "For Families" is a dropdown group. Demoted to footer-only: /mascots,
// /method, /mission, /impact, /board, /annual-report, /press, /privacy, /terms.
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/apps', label: 'Apps' },
  { href: '/cast', label: 'Cast' },
  { href: '/play-together', label: 'Play Together' },
  {
    href: '/for-parents',
    label: 'For Families',
    children: [
      { href: '/for-parents', label: 'For Parents' },
      { href: '/for-educators', label: 'For Educators' },
      { href: '/classes', label: 'Classes' },
      { href: '/teach', label: 'Teach' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/donate', label: 'Donate', cta: true },
];

export const verticals = [
  { id: 'stem', name: 'STEM', description: 'Math, science, engineering, and applied tech.' },
  { id: 'steam', name: 'STEAM', description: 'Music, art, dance, theater, and creative making.' },
  { id: 'academics', name: 'Academics', description: 'Reading, writing, language, civics, history, and critical thinking.' },
  { id: 'dir-fedc', name: 'DIR / FEDC', description: 'Affect, regulation, and developmental capacity scaffolding.' },
  { id: 'special-interest', name: 'Special Interest', description: 'Cubing, cartography, paleontology, wildlife, and more.' },
];
