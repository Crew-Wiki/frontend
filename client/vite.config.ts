import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  define: {
    global: {},
  },
  server: {
    port: 3000,
  },
  preview: {
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
      { find: './runtimeConfig', replacement: './runtimeConfig.browser' },
    ],
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/], // 번들에 포함시킬 모듈의 경로
      extensions: ['.js', '.cjs'], // CommonJS 모듈로 간주할 파일의 확장자
      strictRequires: true, // require 구문에 해당 모듈이 없을 경우 에러 발생
      transformMixedEsModules: true, // import와 require문을 함께 사용하는 경우 이를 번들에 포함시키기 위함
    },
  },
});
