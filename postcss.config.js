const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 11']
    })
  ].concat(
    isDev
      ? [require('postcss-reporter')(), require('postcss-browser-reporter')()]
      : []
  )
};
