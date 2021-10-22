module.exports = {
  plugins: [
    require('postcss-import-url'),
    require('postcss-prefixer')({prefix: 'cvio-ab-'}),
    process.env.npm_lifecycle_event == 'dev' ? null : require('cssnano'),
    require('postcss-preset-env'),
  ],
};
