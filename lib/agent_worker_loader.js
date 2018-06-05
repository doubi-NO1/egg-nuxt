'use strict';

const egg = require('egg');
class EggNuxtAgentWorkerLoader extends egg.AgentWorkerLoader {
  load() {
    super.load();
  }
  loadConfig() {
    super.loadConfig();
  }
}
module.exports = EggNuxtAgentWorkerLoader;
