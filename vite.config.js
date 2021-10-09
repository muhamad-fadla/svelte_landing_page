import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],

  optimizeDeps: { exclude: ["svelte-navigator"] },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@component': path.resolve(__dirname, '/src/components'),
      '@asset': path.resolve(__dirname, '/src/assets'),
      '@view': path.resolve(__dirname, '/src/views')
    },
  }
})
