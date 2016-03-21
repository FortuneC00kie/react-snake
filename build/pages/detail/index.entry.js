(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"));
	else if(typeof define === 'function' && define.amd)
		define("pages/detail/index", ["base"], factory);
	else if(typeof exports === 'object')
		exports["pages/detail/index"] = factory(require("base"));
	else
		root["h5-snake"] = root["h5-snake"] || {}, root["h5-snake"]["pages/detail/index"] = factory(root["base"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return webpackJsonph5_snake__name_([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(21);

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

	// Example Mod


	_base.ReactDOM.render(_base.React.createElement(_index2.default, { subTitle: 'Detail page here!' }), document.getElementById('J_Page'));
	// ReactDOM.render(<h2>Detail page here!</h2>, document.getElementById('J_Page'));

/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },

/***/ 21:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

})
});
;