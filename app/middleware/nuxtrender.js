'use strict';

module.exports = function (options, app) {
  return async (ctx, next) => {
    // webpack hot reload
    if (ctx.path !== '/__webpack_hmr') {
      await next();
      // ignore status if not 404
      if (ctx.status !== 404 || ctx.method !== 'GET') {
        return;
      }

      ctx.status = 200;
      const path = ctx.path;
      if (/\.js$/.test(path)) {
        ctx.set('Content-Type', 'application/javascript');
      }
      if (/\.css/.test(path)) {
        ctx.set('Content-Type', 'text/css');
      }
      // the "nuxt.render" returns callback, not Promise
      await new Promise(resolve => {
        app.nuxt.render(ctx.req, ctx.res, resolve);
      });
      next();
    }
  }
};