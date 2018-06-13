# egg-nuxt-lib

## Description
- Based on [@liyanlong's nuxt-egg](https://github.com/liyanlong/nuxt-egg)
- Because of that lib doesn't work with the latest version of Eggjs & Nuxtjs yet. So I'v created a new lib here.


## Dependency description
### Dependency version
Version | Egg | Nuxt
--- | --- | ---
2.x | 😁 |  ❌
1.x | ❌ |  😁
0.x | ❌ |  ❌

### What is Egg.js
- Better enterprise frameworks and apps with Node.js & Koa.
- For more infomation please visit [eggjs.org](https://eggjs.org/en/index.html).

### What is Nuxt.js

- Nuxt.js is a framework for creating Universal Vue.js Applications.

- Its main scope is UI rendering while abstracting away the client/server distribution.

- Our goal is to create a framework flexible enough that you can use it as a main project base or in addition to your current project based on Node.js.

- Nuxt.js presets all the configuration needed to make your development of a Vue.js Application Server Rendered more enjoyable.

- In addition, we also provide another deployment option called: nuxt generate. It will build a Static Generated Vue.js Application. We believe that option could be the next big step in the development of Web Applications with microservices.

- As a framework, Nuxt.js comes with a lot of features to help you in your development between the client side and the server side such as Asynchronous Data, Middleware, Layouts, etc.
- For more infomation please visit [nuxtjs.org](https://nuxtjs.org/guide).

## Install

```bash
$ npm i egg-nuxt-lib --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.nuxt = {
  enable: true,
  package: 'egg-nuxt-lib',
};
```

## Import Nuxt Configuration

```js
// {app_root}/config/config.default.js
exports.nuxt = require(./nuxt.config);
```
see [nuxtjs.org](https://nuxtjs.org/guide/configuration) for more detail.

## Online demo
- Please visit [http://egg-nuxt.demos.party](http://egg-nuxt.demos.party).
- You can see the source of this demo [here](https://github.com/doubi-NO1/egg-nuxt-demo).


<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/doubi-NO1/egg-nuxt/issues).

## License

[MIT](LICENSE)
