'use strict';

module.exports = app => {
  app.config.coreMiddleware.splice(0, 0, 'nuxtrender');
  app.beforeStart(async () => {
    try {
      if (!app.config.nuxt.dev) {
        await app.nuxtBuild.build();
        console.log('[nuxt] Building done'); // eslint-disable-line no-console
      }
    } catch (error) {
      console.log('[nuxt] Building error', error); // eslint-disable-line no-console
      process.exit(1);
    }
  });
};
