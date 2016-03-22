/**
 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
 */

import './index.scss';

// Import Base
import { MTop, Bridge, Q, JSBridge, Tracker, React, ReactDOM } from 'base';
// Print Base Lib
console.table({
  MTop,
  Bridge,
  JSBridge,
  Q,
  Tracker,
  React,
  ReactDOM
});

// 分渠道业务逻辑
const bridge = Bridge.Global;
if (__OFFLINE_TRIP__ && bridge.isAlitrip) {
  // 去啊容器内特定业务逻辑
  console.log('Alitrip!');
} else if (__OFFLINE_TAOBAO__ && bridge.isTaobao) {
  // 手淘容器内特定业务逻辑
  console.log('Taobao!');
} else if (__OFFLINE_ALIPAY__ && bridge.isAlipay) {
  // 钱包容器内特定业务逻辑
  console.log('Alipay!');
}

/*// MTop & Mock 示例
MTop.getApi('mtop.trip.uilayout.queryUILayout', '1.0', {
  uiLayoutName: 'qua_home',
  uiLayoutVersion: '2.0',
  clientPlatform: 'h5',
  userCity: '北京',
  userCityType: '0',
  userCityCode: '',
  userLng: '',
  userLat: '',
  extraParams: JSON.stringify({
    // provinceCityName: city.capital || '',
    // checkInChannel: checkInChannel
  })
}, {}, res => {
  console.log(res);
}, res => {
  console.error(res);
});*/

// Example Mod
import App from '@mods/app/index';


ReactDOM.render(
  (
      <App />
  )
  , document.getElementById('J_Page'));
