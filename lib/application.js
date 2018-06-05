'use strict';

const egg = require('egg');
const path = require('path');
const EGG_PATH = path.dirname(__dirname);

class EggNuxtApplication extends egg.Application {
  get [Symbol.for('egg#eggPath')]() {
    return EGG_PATH;
  }
}
module.exports = EggNuxtApplication;
