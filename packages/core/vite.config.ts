/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
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
    dts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'PortfolioCore',
      fileName: format => `portfolio-core.${format}.js`,
      formats: ['es']
    }
  },
  test: {
    globals: true
  }
});
