module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-prefixer')({prefix: 'cvio-ab-'}),
    process.env.npm_lifecycle_event == 'dev' ? null : require('cssnano'),
    require('postcss-preset-env'),
  ],
};
