import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@libs', replacement: path.resolve(__dirname, 'src/libs') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@type', replacement: path.resolve(__dirname, 'src/type') },
    ],
  },
});
