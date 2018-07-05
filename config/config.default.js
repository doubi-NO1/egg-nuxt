'use strict';
const path = require('path');



module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '#egg-nuxt',
    core: 'egg-nuxt',
    nuxt: require('./config.nuxt'), 
    security:{
      ignoreJson: true
    }
  };
  return config;
};