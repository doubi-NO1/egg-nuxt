'use strict';

const mock = require('egg-mock');

describe('test/egg-nuxt.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-nuxt-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggNuxt')
      .expect(200);
  });
});
