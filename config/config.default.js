'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '#egg-nuxt',
    core: 'egg-nuxt',
    nuxt: {
      srcDir: path.join(appInfo.baseDir, './resources'),
      rootDir: path.join(appInfo.baseDir)
    }, 
    security:{
      ignoreJson: true
    }
  };
  return config;
};
