const path = require('path');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  publicPath: 'free-cell/',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    https: true,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@modules', resolve('node_modules'))
      .set('@routes', resolve('src/router/routes.js'))
      .set('@img', resolve('src/assets/img'))
      .set('@assets', resolve('src/assets'));
  },
  productionSourceMap: !1,
  crossorigin: 'use-credentials',
  configureWebpack(...allin) {
    console.log(`allin: ${allin.join(' ')}`);
  },
  css: {
    modules: true,
  },
};
