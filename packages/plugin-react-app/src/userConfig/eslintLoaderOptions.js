module.exports = (config, eslintLoaderOptions) => {
  ['jsx', 'tsx'].forEach((rule) => {
    if (config.module.rules.get(rule)) {
      config.module
        .rule(rule)
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
    }
  });
};
