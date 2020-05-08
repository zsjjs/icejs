/* eslint-disable no-useless-escape */
import * as fs from 'fs';
import * as path from 'path';
import * as loaderUtils from 'loader-utils';

module.exports = function (source?: string): string {
  const options = loaderUtils.getOptions(this);
  const { fusionEnv = '@alifd' } = options;
  const varsPath = path.resolve('node_modules', fusionEnv, 'next', 'es', 'core', 'style', '_icon.scss');
  try {
    const iconVars = fs.readFileSync(varsPath, 'utf-8');
    if(iconVars.match(/\@function/)) {
      return source
    } else {
      const vars = source.replace(/\$icon\-content\-(.+?)\;/g, function(str, $1) {
        const reg = new RegExp(`\\$icon\\-content\\-${$1.replace('-','\\-')}:(.+?) \\!`);
        return iconVars.match(reg) && `${iconVars.match(reg)[1]};` || str;
      });
      return vars;
    }

  } catch (error) {
    console.error('Fusion Package路径不正确')
  }
  return source;
}