'use strict';

module.exports = function (options, app) {
  return async (ctx, next) => {
    
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
    // webpack hot reload
    // egg will set 'content-length' with value, it will disable the hot middleware keep alive.
    // egg 默认设置了 'content-length' 值，导致热更新失败，建议去掉该值保持活跃
    if (ctx.path === '/__webpack_hmr') { 
      ctx.response.remove('content-length')
    }
    // the "nuxt.render" returns callback, not Promise
    await new Promise(resolve => {
      app.nuxt.render(ctx.req, ctx.res, resolve);
    });
    next();
  }
};
