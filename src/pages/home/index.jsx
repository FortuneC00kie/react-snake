/**
 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
 */

import './index.scss';

// Import Base
import {React, ReactDOM } from 'base';
// Print Base Lib


// 分渠道业务逻辑
const bridge = Bridge.Global;

// Example Mod
import App from '@mods/app/index';
import Util from '@widgets/utils/index';

const snake = [{x:0,y:0}];
let gameRegion = Util.getLayerPosition();
var unit = Util.calculateUnit(gameRegion);

let props = {
  scenceStyle : Object.assign({
    position:'absolute'
  },gameRegion),
  gameRegion,
  unit,
  snake,
  foodsCount : 3,

}


ReactDOM.render(
  (
      <App {...props}  />
  )
  , document.getElementById('J_Page'));
