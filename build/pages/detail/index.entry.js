(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"));
	else if(typeof define === 'function' && define.amd)
		define("pages/detail/index", ["base"], factory);
	else if(typeof exports === 'object')
		exports["pages/detail/index"] = factory(require("base"));
	else
		root["h5-snake"] = root["h5-snake"] || {}, root["h5-snake"]["pages/detail/index"] = factory(root["base"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return webpackJsonph5_snake__name_([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(34);

	var _base = __webpack_require__(2);

	var _index = __webpack_require__(38);

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

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 31:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"index__root___1Tme-","highlighted":"index__highlighted___1c4UU","title":"index__title___3ErbQ","subTitle":"index__subTitle___25NFC"};

/***/ },

/***/ 34:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(5);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(6);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(8);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(7);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _base = __webpack_require__(2);

	var _bind = __webpack_require__(9);

	var _bind2 = _interopRequireDefault(_bind);

	var _index = __webpack_require__(31);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Component = _base.React.Component; /**
	                                        * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
	                                        * Header module
	                                        */

	var PropTypes = _base.React.PropTypes;
	var PureRenderMixin = _base.React.addons.PureRenderMixin;

	var cx = _bind2.default.bind(_index2.default);

	var PageHeader = function (_Component) {
	  (0, _inherits3.default)(PageHeader, _Component);


	  /**
	   * @constructor
	   */

	  function PageHeader(props) {
	    (0, _classCallCheck3.default)(this, PageHeader);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PageHeader).call(this, props));

	    _this.state = {
	      highlighted: false
	    };

	    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_this);
	    _this.handleCheckChange = _this.handleCheckChange.bind(_this);
	    return _this;
	  }

	  /**
	   * init state
	   * @type {{highlighted: boolean}}
	   */


	  /**
	   * default props
	   * @type {{title: string, subTitle: string}}
	   */


	  (0, _createClass3.default)(PageHeader, [{
	    key: 'handleCheckChange',
	    value: function handleCheckChange(event) {
	      event.preventDefault();
	      this.setState({
	        highlighted: !this.state.highlighted
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var highlighted = this.state.highlighted;

	      // 动态合并 className
	      var labelClassNames = cx({
	        root: true,
	        highlighted: highlighted
	      });

	      return _base.React.createElement(
	        'div',
	        { className: labelClassNames,
	          ref: 'headerContainer',
	          onTouchTap: this.handleCheckChange },
	        _base.React.createElement(
	          'h2',
	          { className: _index2.default.title },
	          this.props.title
	        ),
	        _base.React.createElement(
	          'h4',
	          { className: _index2.default.subTitle },
	          this.props.subTitle
	        )
	      );
	    }
	  }]);
	  return PageHeader;
	}(Component);

	PageHeader.propTypes = {
	  /**
	   * 标题
	   */
	  title: PropTypes.string,

	  /**
	   * 副标题
	   */
	  subTitle: PropTypes.string
	};
	PageHeader.defaultProps = {
	  title: 'H5 ES6 + React Snake Demo',
	  subTitle: 'Go!Go!Go'
	};
	exports.default = PageHeader;

/***/ }

})
});
;