import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


// Vite settings (https://vitejs.dev/config/)
const config = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~hover': path.resolve(__dirname, 'node_modules/hover.css'),
      '~front-matter': path.resolve(__dirname, 'node_modules/front-matter'),
      '~marked': path.resolve(__dirname, 'node_modules/marked'),
      '~dompurify': path.resolve(__dirname, 'node_modules/dompurify')
    }
  }
};

export default defineConfig(({ command, mode }) => {
  console.log(`vite.config.js: command=${command} mode=${mode}`);
  if (command === 'serve') {

    // Development mode (vite dev)
    return {
      ...config,
      base: '/',
      server: {
        port: 8080
      }
    };

  } else {

    // Production mode (vite build)
    return {
      ...config,
      base: '/hepgame',
      build: {
        outDir: 'dist'
      }
    };
  }
});
