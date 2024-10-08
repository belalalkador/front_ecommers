import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Keep this '/' if you're deploying at the root
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://e-commers-api-0hbn.onrender.com/api',  // Adjusted to point to the backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),  // Ensures that `/api` is preserved in the route
      }
    }
  }
});
