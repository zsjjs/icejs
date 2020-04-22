module.exports = (config, eslintLoaderOptions) => {
  config.module
    .rule('eslint')
    .test(/\.(jsx?|tsx?)$/)
    .exclude
      .add(/node_modules/)
      .end()
    .enforce('pre')
    .use('eslint')
      .loader('eslint-loader')
      .tap((options) => ({
          ...options,
          ...eslintLoaderOptions
        }));
};
