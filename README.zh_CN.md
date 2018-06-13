# egg-nuxt-lib
##描述
- eggjs框架的nuxt插件。
- 本插件来源于[@liyanlong的nuxt-egg](https://github.com/liyanlong/nuxt-egg)，由于作者已经很久没有进行维护了，在最新的egg和nuxt版本下已经无法运行，因此对其进行了改造。
<!--
The Nuxt plugin for eggjs.
-->

## 依赖说明

### 依赖的库版本

version | Egg | Nuxt
--- | --- | ---
2.x | 😁 |  ❌
1.x | ❌ |  😁
0.x | ❌ |  ❌

### 什么是Egg.js

- Better enterprise frameworks and apps with Node.js & Koa([查看更多](https://eggjs.org/zh-cn/intro/))

### 什么是Nuxt.js
- 一款基于 Vue.js 的服务端渲染应用框架([查看更多](https://nuxtjs.org/guide))
<!--

如果有依赖其它插件，请在这里特别说明。如

- egg.js
- nuxt.js

-->
##安装
```bash
  npm install egg-nuxt-lib --save
```

## 开启插件

```javascript
// config/plugin.js
exports.nuxt = {
  enable: true,
  package: 'egg-nuxt-lib',
};
```

##导入nuxt.config.js配置
```javascript
//config.default.js
exports.nuxt = require('./nuxt.config')
```

## nuxt.config.js详细配置

请到 [nuxtjs.org](https://nuxtjs.org/guide/configuration) 查看详细配置项说明。


## 提问交流

请到 [egg-nuxt-lib issues](https://github.com/doubi-NO1/egg-nuxt/issues) 异步交流。
## License

[MIT](LICENSE)
