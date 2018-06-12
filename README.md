# egg-nuxt-lib

## Description
- Based on [@liyanlong's nuxt-egg](https://github.com/liyanlong/nuxt-egg)
- Because of that lib doesn't work with the latest version of Eggjs & Nuxtjs yet. So I'v created a new lib here.

## Install

```bash
$ npm i egg-nuxt-lib --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.egg = {
  enable: true,
  package: 'egg-nuxt-lib',
};
```

##Nuxt Configuration

```js
// {app_root}/config/config.default.js
exports.nuxt = require(./nuxt.config);
```

see [nuxtjs.org](https://nuxtjs.org/guide/configuration) for more detail.

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/doubi-NO1/egg-nuxt/issues).

## License

[MIT](LICENSE)
