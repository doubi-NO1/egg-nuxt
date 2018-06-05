'use strict';

module.exports = (options, app) => {
  return async function(ctx, next) {
    if (this.path !== '/__webpack_hmr') {
      await next();
      if (this.status !== 404 || this.method !== 'GET') {
        return;
      }
      this.status = 200;
      const path = this.path;
      /\.js$/.test(path) && this.set('Content-Type', 'application/javascript');
      /\.css/.test(path) && this.set('Content-Type', 'text/css');
    }
    await this.app.nuxt.render(this.req, this.res);
  };
};