'use strict';

//the 'nuxt.render' returns callback,not Promise
const render = (app, ctx) => {
  return new Promise((resolve, reject) => {
    app.nuxt.render(ctx.req, ctx.res, () => {
      resolve();
    });
  });
};

module.exports = function (options, app) {
  return async (ctx, next) => {
    // webpack hot reload
    if (ctx.path !== '/__webpack_hmr') {
      //await next();
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
      await render(app, ctx);
      next();
    }
  }
};