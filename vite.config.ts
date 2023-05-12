import * as path from 'node:path';

import * as vite from 'vite';
import vue from '@vitejs/plugin-vue';

export default vite.defineConfig({
  plugins: [vue()],
  server: {
    cors: true
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './source') },
      { find: '@datas', replacement: path.resolve(__dirname, './source/datas') },
      { find: '@assets', replacement: path.resolve(__dirname, './source/assets') },
      { find: '@components', replacement: path.resolve(__dirname, './source/components') }
    ]
  },
  base: './'
});
