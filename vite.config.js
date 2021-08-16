import { defineConfig } from 'vite';
import reactRefresh from '@vite/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: 'dist/app',
  },
});
