import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1200px',
      },
      fontFamily: {
        sans: 'var(--font-archivo)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '4rem',
        },
      },
      colors: {
        'red-orange': {
          500: 'color-mix(in srgb, theme("colors.red.500") 50%, theme("colors.orange.500") 50%)',
        },
        'olive-green': {
          500: 'color-mix(in srgb, theme("colors.pink.500") 50%, theme("colors.blue.700") 50%)'
        },
      },
    },
  },
  plugins: [],
};
export default config;
