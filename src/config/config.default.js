/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554802127868_1071';

  // add your middleware config here
  config.middleware = [];

  // view层
  config.view = {
    mapping: { '.html': 'ejs' } //左边写成.html后缀，会自动渲染.html文件
  };

  // socket.io
  config.io = {
    init: {
      wsEngine: 'ws',
    }, // passed to engine.io
    namespace: {
      '/default': {    ///连接不需要认证命名空间
        connectionMiddleware: ['default'],
        packetMiddleware: [],
      },
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
