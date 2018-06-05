'use strict';
const path = require('path');

module.exports = appInfo => {

  exports.keys = appInfo.name + '#egg-nuxt';

  exports.core = 'egg-nuxt';

  exports.nuxt = {
    srcDir: path.join(appInfo.baseDir, './resources'),
    rootDir: path.join(appInfo.baseDir)
  };

  // allow website request throw up crsf check
  exports.security = {
    ignoreJson: true,
  };

  return exports;
};
