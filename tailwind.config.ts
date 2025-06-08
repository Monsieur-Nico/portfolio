import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F0F2F5', // Light blue-gray
          dark: '#0F0F1B',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1E1E2E',
        },
        text: {
          DEFAULT: '#1E1E2E', // Using our dark surface color for light mode text
          dark: '#F5F5F7',
        },
        accent: {
          DEFAULT: '#00D1B2', // Slightly muted teal for light mode
          dark: '#00FFE0',
        },
        'accent-soft': {
          DEFAULT: '#7DD3FC', // Soft blue for light mode
          dark: '#B3FFAB',
        },
        border: {
          DEFAULT: '#E2E8F0',
          dark: '#2E2E3E',
        },
      },
      fontFamily: {
        heading: ['var(--font-orbitron)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        full: '9999px',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;
