const tokens = {
  colors: {
    navy: '#1C2537',
    navyLight: '#243049',
    cyan: '#4ABFDB',
    cyanLight: '#7DD4E8',
    white: '#FFFFFF',
    light: '#F8FAFC',
    text: '#0F1923',
    textMuted: '#64748B',
    gray: '#94A3B8',
    border: '#E2E8F0',
    borderDark: '#2D3F5C',
  },
  fonts: {
    sans: 'Inter',
    display: 'Inter',
  },
  meta: {
    companyName: 'Assist One',
    companyFull: 'Assist One Malaysia Sdn. Bhd.',
    tagline: 'Investment Intelligence for Asia Pacific',
    locale: 'en_MY',
  },
} as const;

export default tokens;
export type MalaysiaParentTokens = typeof tokens;
