import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['lucide-react'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
