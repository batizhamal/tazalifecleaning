import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3a6aad',
          green: '#5a8f3c',
          sky: '#7ab8d9',
        },
        bg: {
          light: '#f7f9fc',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        nav: '0 2px 10px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
