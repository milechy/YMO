import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFE100',
          black: '#0A0A0A',
          cyan: '#00D4FF',
          white: '#F5F5F5',
          gray: '#888888',
          border: '#1A1A1A',
          surface: '#111111',
          cream: '#F0EDE7',
          'cream-dark': '#E4E0D8',
        },
      },
      fontFamily: {
        sans: ['var(--font-vt323)', 'var(--font-noto-sans-jp)', 'sans-serif'],
        mono: ['var(--font-vt323)', 'var(--font-ibm-plex-mono)', 'monospace'],
        display: ['var(--font-vt323)', 'monospace'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 20s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
