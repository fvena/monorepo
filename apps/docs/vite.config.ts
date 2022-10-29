import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
    open: false, // The browser opens automatically when the service starts
    cors: true // Allow cross-origin resource sharing
  },
  esbuild: {
    legalComments: 'none'
  }
});
