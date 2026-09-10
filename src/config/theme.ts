import type { Theme } from '../types';

// Set brand colours, fonts, corner shapes and maximum page width here.
export const theme = {
  "colours": {
    "background": "#0755c8",
    "surface": "#04439e",
    "text": "#ffffff",
    "muted": "#d2e4ff",
    "border": "#5789d4",
    "primary": "#ffffff",
    "onPrimary": "#062753",
    "accent": "#58E7FF",
    "onAccent": "#062753",
    "feature": "#052c67",
    "onFeature": "#ffffff"
  },
  "fonts": {
    "body": "Arial, sans-serif",
    "heading": "\"Arial Black\", Arial, sans-serif",
    "accent": "Georgia, serif"
  },
  "shape": {
    "radius": "1rem",
    "buttonRadius": "4rem",
    "contentWidth": "78rem"
  }
} satisfies Theme;
