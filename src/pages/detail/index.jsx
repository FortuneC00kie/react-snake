/**
 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
 */

import './test.scss';

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

// Example Mod
import PageHeader from '@mods/header/index';

ReactDOM.render(<PageHeader subTitle="Detail page here!" />, document.getElementById('J_Page'));
// ReactDOM.render(<h2>Detail page here!</h2>, document.getElementById('J_Page'));
