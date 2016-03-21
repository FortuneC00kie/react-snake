/**
 * Created by 弘树<tiehang.lth@alibaba-inc.com> on 16/1/22.
 */

require('exports?$!zepto/build/zepto.min.js');

// 按需加入手淘 WindVane Lib
if (WINDVANE_CONTEXT) {
  require('lib-windvane');
}

var MTop = require('mtop');
var Bridge = require('bridge');
var Q = require('q');
var JSBridge = require('jsbridge');
var Tracker = require('tracker');

if (TMS_LIB) {
  require('tms-offline-parser');
}

// wlog
if (WLOG_LIB) {
  require('wlog/src/alitrip_query.js');
  require('wlog/src/aplus_wap.js');
  require('wlog/src/spm_wap.js');
  require('wlog/src/spmact_wap.js');
  require('wlog/src/alitrip_wap.js');
}

var exportObj = {
  version: __VERSION__,
  MTop: MTop.default || MTop,
  Bridge: Bridge.default || Bridge,
  Q: Q.default || Q,
  JSBridge: JSBridge.default || JSBridge,
  Tracker: Tracker.default || Tracker
};

// 按需加入 React
if (REACT_LIB) {
  var React = require('react');
  exportObj.React = React;
  React.addons = {
    ReactTransitionGroup: require('react-addons-transition-group'),
    ReactCSSTransitionGroup: require('react-addons-css-transition-group'),
    LinkedStateMixin: require('react-addons-linked-state-mixin'),
    cloneWithProps: require('react-addons-clone-with-props'),
    createFragment: require('react-addons-create-fragment'),
    update: require('react-addons-update'),
    PureRenderMixin: require('react-addons-pure-render-mixin'),
    shallowCompare: require('react-addons-shallow-compare')
  };
  if (DEBUG) {
    React.addons.ReactTestUtils = require('react-addons-test-utils');
    React.addons.Perf = require('react-addons-perf');
  }
  exportObj.ReactDOM = require('react-dom');

  // Tap plugin for React
  require("react-tap-event-plugin")();
}

// 按需加入 Vue
if (VUE_LIB) {
  var Vue = require('vue');
  var VueTouch = require('vue-touch');
  Vue.use(VueTouch);
  exportObj.Vue = Vue;
}

module.exports = exportObj;