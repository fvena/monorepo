/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    eslint({
      fix: false,
      emitWarning: false,
      emitError: false,
      failOnError: false,
      exclude: ['**/node_modules/**', 'dist/**']
    }),
    vue({
      reactivityTransform: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: false, // The browser opens automatically when the service starts
    cors: true // Allow cross-origin resource sharing
  },
  esbuild: {
    legalComments: 'none'
  },
  test: {
    globals: true,
    css: false,
    environment: 'jsdom',
    setupFiles: [
      '@portfolio/style-guide/vitest/vitest-global-mock.ts',
      '@portfolio/style-guide/vitest/vitest-canvas-mock.ts'
    ]
  }
});
