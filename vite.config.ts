import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/static/' : '/',
  plugins: [react()],
  build: {
    outDir: 'dist', // будет лежать как frontend/dist
    assetsDir: '.', // ⚠️ положит index.js и index.css прямо в dist/
    emptyOutDir: true,
  },
}));
