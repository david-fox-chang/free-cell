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
  chainWebpack(config, ...agrs) {
    // Only convert .svg files that are imported by these files as Vue component
    const FILE_RE = /\.(vue|js|ts|svg)$/;

    // Use vue-cli's default rule for svg in non .vue .js .ts files
    const svgRule = config.module.rule('svg').issuer(file => !FILE_RE.test(file));
    svgRule.uses.clear();
    // Use our loader to handle svg imported by other files
    config.module
      // svgRule.
      .rule('svg-component')
      .test(/\.svg$/)
      .issuer(file => FILE_RE.test(file))
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader');
  },
  css: {
    modules: true,
  },
};
