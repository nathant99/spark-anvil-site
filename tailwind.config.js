/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Spark & Anvil brand palette — source: labsmith/Branding/Colors/spark-anvil-palette.md
        forge: {
          DEFAULT: '#E8652B',   // Forge Orange — primary CTAs, key UI (use for fills + large headings only)
          light: '#F07A42',     // Dark-mode variant
          text: '#C0481F',      // Darker shade for body text on Warm White (passes WCAG AA Normal 5.2:1)
        },
        anvil: {
          DEFAULT: '#2D2D2D',   // Anvil Charcoal — text, grounding
          light: '#E8E4DF',     // Inverted for dark mode
        },
        spark: {
          DEFAULT: '#FFBE2E',   // Spark Gold — highlights, accents
          soft: '#FFD060',      // Dark-mode variant
        },
        warm: '#FAF8F5',         // Warm White — page background
        slate: {
          DEFAULT: '#4A6FA5',   // Slate Blue — links, secondary
          light: '#6B8FC4',
        },
        // Outline color — matches portfolio chunky-cartoon aesthetic
        outline: '#2A1F1A',
      },
      fontFamily: {
        brand: ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
    },
  },
  plugins: [],
};
