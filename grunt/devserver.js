/**
 * Created by <%= author %><<%= email %>> on <%= date %>.
 * server for webpack & anyproxy
 */
"use strict";

var path = require('path');
var _ = require('lodash');
var pwd = process.cwd();

module.exports = {
  options: {
    hosts: [
      'dev.waptest.taobao.com',
      'dev.wapa.taobao.com',
      'dev.m.taobao.com'
    ],
    mockRegExp: /api\.(waptest|wapa|m)\.taobao\.com/,
    mockScriptPath: 'proxy/interface.js',
    progress: true,     // 是否显示 webpack 模块编译进度
    silent: false,      // 是否静默 anyproxy 输出 log
    proxyPort: 8080,    // 代理服务端口
    webPort: 8002,      // anyproxy web ui 界面服务端口
    socketPort: 8003,   // anyproxy websocket 服务端口
    injectHMR: true,    // 是否注入 hot module replacement 脚本
    contentBase: pwd,   // 文档根目录
    openBrowser: true   // 是否在浏览器自动打开 Url
  }
};
