import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'ClearvisioAppointmentBooker',
      formats: ['es'],
      fileName: () => 'index.js',
      cssFileName: 'style'
    },
    outDir: 'build',
    cssCodeSplit: false,
    minify: false,
    target: 'es2018'
  },
  css: {
    postcss: './postcss.config.js'
  }
});
