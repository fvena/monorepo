/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
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
    vue({
      reactivityTransform: true
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
      name: 'PortfolioUi',
      fileName: format => `portfolio-ui.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
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
