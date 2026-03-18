import { defineConfig } from 'vite';
import { resolve, join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const bootstrapLicense = `/*!
 * Bootstrap v5.3.8 (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
`;

function addCssLicense(outDir) {
  return {
    name: 'add-css-license',
    closeBundle() {
      const cssFile = join(__dirname, outDir, 'style.css');
      try {
        const css = readFileSync(cssFile, 'utf8');
        if (!css.startsWith('/*!')) {
          writeFileSync(cssFile, bootstrapLicense + css);
        }
      } catch (e) {}
    }
  };
}

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  const outDir = isDev ? 'build' : 'dist';

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'index.js'),
        name: 'ClearvisioAppointmentBooker',
        formats: ['es'],
        fileName: () => 'index.js',
        cssFileName: 'style'
      },
      outDir,
      cssCodeSplit: false,
      minify: isDev ? false : 'terser',
      target: 'es2018',
      terserOptions: isDev ? undefined : {
        format: {
          comments: false,
        },
        compress: {
          drop_console: false,
        }
      }
    },
    plugins: [addCssLicense(outDir)],
    css: {
      postcss: './postcss.config.js'
    }
  };
});
