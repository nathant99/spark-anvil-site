// Featured flagship apps for the home page hero strip.
// Sourced from labsmith Wave 1 + 2 implementing lists + asset-readiness audit.
// To regenerate the full per-app dataset, run scripts/build-apps-data.mjs.

export interface FeaturedApp {
  slug: string;
  name: string;
  tagline: string;
  vertical: 'stem' | 'steam' | 'academics' | 'dir-fedc' | 'special-interest';
  heroColor: string;
}

export const featured: FeaturedApp[] = [
  {
    slug: 'curiosityquest',
    name: 'CuriosityQuest',
    tagline: 'A daily-question adventure that builds curiosity into habit.',
    vertical: 'academics',
    heroColor: '#4A6FA5',
  },
  {
    slug: 'cubesensei',
    name: 'CubeSensei',
    tagline: 'Learn the Rubik’s Cube with a patient mentor and bite-sized practice.',
    vertical: 'special-interest',
    heroColor: '#E8652B',
  },
  {
    slug: 'quillspell',
    name: 'QuillSpell',
    tagline: 'Spelling and vocabulary mastery through pattern recognition and play.',
    vertical: 'academics',
    heroColor: '#7E57C2',
  },
  {
    slug: 'mindforge',
    name: 'MindForge',
    tagline: 'Trauma-informed social-emotional learning with gentle scaffolding.',
    vertical: 'dir-fedc',
    heroColor: '#81C784',
  },
  {
    slug: 'focusforge',
    name: 'FocusForge',
    tagline: 'ADHD-friendly executive-function practice in 10-minute sessions.',
    vertical: 'dir-fedc',
    heroColor: '#FF8A65',
  },
  {
    slug: 'bioforge',
    name: 'BioForge',
    tagline: 'Field-naturalist science with real specimens and curated taxonomies.',
    vertical: 'stem',
    heroColor: '#66BB6A',
  },
];
