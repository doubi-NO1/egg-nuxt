'use strict';

module.exports = (options, app) => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      app.emit('error', err, ctx);
      const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message;
      ctx.body = { error };
      ctx.status === 422 && (ctx.body.detail = err.errors);
      ctx.status = status = err.status || 500;
    }
  };
};