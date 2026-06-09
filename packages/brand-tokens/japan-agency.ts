const tokens = {
  colors: {
    primary: '#FFE100',
    secondary: '#0A0A0A',
    accent: '#00D4FF',
    textLight: '#F5F5F5',
    textDark: '#0A0A0A',
    gray: '#888888',
    border: '#1A1A1A',
    surface: '#111111',
  },
  fonts: {
    sans: 'Noto Sans JP',
    mono: 'IBM Plex Mono',
  },
  meta: {
    companyName: 'YMO Yield Media Online',
    tagline: '広告を、武器に。',
    locale: 'ja_JP',
  },
} as const;

export default tokens;
export type JapanAgencyTokens = typeof tokens;
