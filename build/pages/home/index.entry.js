(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"));
	else if(typeof define === 'function' && define.amd)
		define("pages/home/index", ["base"], factory);
	else if(typeof exports === 'object')
		exports["pages/home/index"] = factory(require("base"));
	else
		root["h5-snake"] = root["h5-snake"] || {}, root["h5-snake"]["pages/home/index"] = factory(root["base"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return webpackJsonph5_snake__name_([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(23);

	var _stringify2 = _interopRequireDefault(_stringify);

	__webpack_require__(22);

	var _base = __webpack_require__(4);

	var _index = __webpack_require__(8);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Print Base Lib
	/**
	 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
	 */

	console.table({
	  MTop: _base.MTop,
	  Bridge: _base.Bridge,
	  JSBridge: _base.JSBridge,
	  Q: _base.Q,
	  Tracker: _base.Tracker,
	  React: _base.React,
	  ReactDOM: _base.ReactDOM
	});

	// 分渠道业务逻辑


	// Import Base
	var bridge = _base.Bridge.Global;
	if ((true) && bridge.isAlitrip) {
	  // 去啊容器内特定业务逻辑
	  console.log('Alitrip!');
	} else if ((true) && bridge.isTaobao) {
	  // 手淘容器内特定业务逻辑
	  console.log('Taobao!');
	} else if ((true) && bridge.isAlipay) {
	  // 钱包容器内特定业务逻辑
	  console.log('Alipay!');
	}

	// MTop & Mock 示例
	_base.MTop.getApi('mtop.trip.uilayout.queryUILayout', '1.0', {
	  uiLayoutName: 'qua_home',
	  uiLayoutVersion: '2.0',
	  clientPlatform: 'h5',
	  userCity: '北京',
	  userCityType: '0',
	  userCityCode: '',
	  userLng: '',
	  userLat: '',
	  extraParams: (0, _stringify2.default)({
	    // provinceCityName: city.capital || '',
	    // checkInChannel: checkInChannel
	  })
	}, {}, function (res) {
	  console.log(res);
	}, function (res) {
	  console.error(res);
	});

	// Example Mod


	_base.ReactDOM.render(_base.React.createElement(_index2.default, { subTitle: 'Home page here!' }), document.getElementById('J_Page'));

/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },

/***/ 22:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(2);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ }

})
});
;