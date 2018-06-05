'use strict';

const egg = require('egg');
class EggNuxtAppWorkerLoader extends egg.AppWorkerLoader {
  load() {
    super.load();
  }
  loadConfig() {
    super.loadConfig();
  }
}
module.exports = EggNuxtAppWorkerLoader;
