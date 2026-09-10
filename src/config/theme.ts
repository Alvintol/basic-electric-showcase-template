import type { Theme } from '../types';

export const theme = {
  colours: {
    background: '#F4F8FC',
    surface: '#FFFFFF',
    text: '#0A1628',
    muted: '#617086',
    border: '#D8E2EE',

    primary: '#0755C8',
    onPrimary: '#FFFFFF',

    accent: '#19A7FF',
    onAccent: '#0A1628',

    // Keep photo-backed text independent from the light page palette.
    heroSurface: '#061B36',
    onHero: '#FFFFFF',

    feature: '#E8F4FF',
    onFeature: '#0755C8',
  },

  fonts: {
    body: 'Inter, Helvetica, Arial, sans-serif',
    heading: 'Inter, Helvetica, Arial, sans-serif',
    accent: 'Inter, Helvetica, Arial, sans-serif',
  },

  shape: {
    radius: '20px',
    buttonRadius: '999px',
    contentWidth: '92rem',
  },
} satisfies Theme;
