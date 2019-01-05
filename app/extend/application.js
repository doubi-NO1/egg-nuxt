'use strict';
const { Nuxt, Builder } = require('nuxt');
const NUXT = Symbol('Application#nuxt');
const NUXTBUILD = Symbol('Application#nuxtBuild');
const { loadNuxtConfig } = require('../../lib/utils');


module.exports = {
  get nuxt() {
    if (!this[NUXT]) {
      this[NUXT] = new Nuxt(loadNuxtConfig(this.config));
    }
    return this[NUXT];
  },
  get nuxtBuild() {
    if (!this[NUXTBUILD]) {
      this[NUXTBUILD] = new Builder(this.nuxt);
    }
    return this[NUXTBUILD];
  },
};
