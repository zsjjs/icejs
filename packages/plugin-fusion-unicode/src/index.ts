import { OptionsType } from './types';

module.exports = async ({ onGetWebpackConfig }, plugionOptions: OptionsType = {}) => {
  const { fusionEnv } = plugionOptions;
  onGetWebpackConfig((config) => {
    ['scss'].forEach((rule) => {
      config.module
        .rule(rule)
        .use('unicode-loader')
        .loader(require.resolve('./unicode'))
        .options({
          fusionEnv
        })
    });

  })
}