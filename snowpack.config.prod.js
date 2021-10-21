module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
    entrypoints: ['index.js']
  },
  plugins: ['@snowpack/plugin-postcss'],
  exclude: ['**/dist/**/*'],
}
