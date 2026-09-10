import { defineConfig } from 'vite';
import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig(({ mode }) => ({
  base: './',
  // Static React rendering needs Vite's TS loader, not the Workers dev runtime.
  plugins: mode === 'static-render' ? [] : [cloudflare()],
  build: {
    target: 'es2022',
  },
}));
