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
    outDir: 'dist',
    cssCodeSplit: false,
    minify: true,
    target: 'es2018'
  },
  css: {
    postcss: './postcss.config.js'
  }
});
