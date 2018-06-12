# egg-nuxt-lib
##描述
- eggjs框架的nuxt插件。
- 本插件来源于[@liyanlong的nuxt-egg](https://github.com/liyanlong/nuxt-egg)，由于作者已经很久没有进行维护了，在最新的egg和nuxt版本下已经无法运行，因此对其进行了改造。
<!--
The Nuxt plugin for eggjs.
-->

## 依赖说明

### 依赖的库版本

version | egg | nuxt
--- | --- | ---
2.x | 😁 |  ❌
1.x | ❌ |  😁
0.x | ❌ |  ❌

### 依赖的插件
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
