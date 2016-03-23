(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"));
	else if(typeof define === 'function' && define.amd)
		define("pages/home/index", ["base"], factory);
	else if(typeof exports === 'object')
		exports["pages/home/index"] = factory(require("base"));
	else
		root["h5-snake"] = root["h5-snake"] || {}, root["h5-snake"]["pages/home/index"] = factory(root["base"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return webpackJsonph5_snake__name_([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(35);

	var _base = __webpack_require__(2);

	var _index = __webpack_require__(36);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(14);

	var _index4 = _interopRequireDefault(_index3);

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

	// Example Mod


	var snake = [{ x: 0, y: 0 }];
	var gameRegion = _index4.default.getWindowRegion();
	var unit = _index4.default.calculateUnit(gameRegion);
	gameRegion.w = Math.ceil(gameRegion.width / unit);
	gameRegion.h = Math.ceil(gameRegion.height / unit);

	var props = {
	  scenceStyle: {
	    left: gameRegion.left,
	    top: gameRegion.top,
	    position: 'absolute'
	  },
	  gameRegion: gameRegion,
	  unit: unit,
	  snake: snake,
	  foodsCount: 1
	};

	_base.ReactDOM.render(_base.React.createElement(_index2.default, props), document.getElementById('J_Page'));

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 14:
/***/ function(module, exports) {

	/**
	 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-23.
	 */
	"use strict";

	// Import Base

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var win = window;
	var doc = document;
	/**
	 * @desc widgets
	 */
	exports.default = {
	  randomInt: function randomInt(min, max) {
	    return Math.floor(Math.random() * (max - min)) + min;
	  },
	  getWindowRegion: function getWindowRegion() {
	    var documentEle = doc.documentElement;
	    return {
	      width: win.innerWidth,
	      height: win.innerHeight,
	      left: win.scrollX,
	      top: win.scrollY
	    };
	  },
	  calculateUnit: function calculateUnit(region) {
	    var BEST_SCENCE_UNIT_COUNT = 10; //最大变的步长为50步
	    var minBorder = Math.min(region.width, region.height);
	    return Math.floor(minBorder / BEST_SCENCE_UNIT_COUNT);
	  },
	  /**
	   * 随机创建一批食物
	   * @param w
	   * @param h
	   * @param count
	     */
	  randomGenFoods: function randomGenFoods(w, h, count) {
	    var result = [];
	    while (count > 0) {
	      count--;
	      result.push({
	        x: this.randomInt(0, w),
	        y: this.randomInt(0, h)
	      });
	    }
	    return result;
	  }

	};

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ },

/***/ 29:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 30:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"food":"index__food___2vxVA"};

/***/ },

/***/ 32:
29,

/***/ 33:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"snakeNode":"index__snakeNode___IubWa"};

/***/ },

/***/ 35:
29,

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-22.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(15);

	var _assign2 = _interopRequireDefault(_assign);

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

	var _index = __webpack_require__(29);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(40);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(37);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(39);

	var _index8 = _interopRequireDefault(_index7);

	var _index9 = __webpack_require__(14);

	var _index10 = _interopRequireDefault(_index9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Component = _base.React.Component;
	var PropTypes = _base.React.PropTypes;
	var PureRenderMixin = _base.React.addons.PureRenderMixin;

	var cx = _bind2.default.bind(_index2.default);

	var App = function (_Component) {
	  (0, _inherits3.default)(App, _Component);

	  /**
	   * @constructor
	   */

	  function App(props) {
	    (0, _classCallCheck3.default)(this, App);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).call(this, props));

	    _this.clashObjs = [];
	    _this.state = {
	      unit: _this.props.unit, //最小单元宽度,蛇体宽度,步长
	      snake: _this.props.snake,
	      foods: _index10.default.randomGenFoods(_this.props.gameRegion.w, _this.props.gameRegion.h, _this.props.foodsCount),
	      obstacle: [{ x: -1, y: -1, w: 100, h: 1 }, { x: -1, y: -1, w: 1, h: 100 }],
	      gameState: "ing"
	    };

	    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_this);
	    _this.refreshClashObject();
	    return _this;
	  }
	  /**
	   * 吃食
	   * @param food
	     */
	  //需要进行碰撞检测的区域
	  /**
	   * init state
	   */


	  /**
	   * default props
	   */


	  (0, _createClass3.default)(App, [{
	    key: 'eat',
	    value: function eat(food) {
	      this.refs.snake.eat(food);
	      this.refs.food.del(food);
	    }

	    /**
	     * 每一次移动调用,碰撞检测
	     * @param newPos
	       */

	  }, {
	    key: 'handleMove',
	    value: function handleMove(newPos) {
	      var clashObj = this._detectClash(newPos);
	      if (clashObj) {
	        //如果发生碰撞则停止
	        if (clashObj.type === "obstacle") {
	          //撞到障碍物
	          this.setState({ gameState: 'fail' }, function () {
	            this.gameOver();
	          });
	        } else if (clashObj.type === "food") {
	          //撞到食物
	          this.eat(newPos);
	        }
	      }
	    }

	    /**
	     * 蛇和食物,障碍物的碰撞,返回碰撞物体
	     * @param target
	     * @returns {*}
	     * @private
	       */

	  }, {
	    key: '_detectClash',
	    value: function _detectClash(target) {
	      var _this2 = this;

	      var result = null;
	      this.clashObjs.some(function (clashObj) {
	        if (_this2._isRegionOverlap(_this2._parseClashObj(target, 'snake'), clashObj)) {
	          result = clashObj;
	          return true;
	        }
	      });
	      return result;
	    }

	    /**
	     * 重新计算可碰撞物体位置
	     * @private
	       */

	  }, {
	    key: 'refreshClashObject',
	    value: function refreshClashObject() {
	      var _this3 = this;

	      this.clashObjs = [];
	      this.clashObjs = this.state.foods.map(function (food) {
	        return _this3._parseClashObj(food, 'food');
	      }).concat(this.state.obstacle.map(function (obstacle) {
	        return _this3._parseClashObj(obstacle, 'obstacle');
	      }));
	    }

	    /**
	     * 游戏结束
	     */

	  }, {
	    key: 'gameOver',
	    value: function gameOver() {
	      this.refs.snake.stop();
	      console.log(this.state.gameState);
	    }
	  }, {
	    key: 'handleFoodEmpty',
	    value: function handleFoodEmpty() {
	      this.gameOver('success');
	    }
	    /**
	     * 将原始食物和障碍物转化为对象
	     * @param obj
	     * @param type
	     * @private
	       */

	  }, {
	    key: '_parseClashObj',
	    value: function _parseClashObj(obj, type) {
	      var unit = this.state.unit;
	      obj.w = obj.w || 1;
	      obj.h = obj.h || 1;
	      obj.type = type;
	      obj.left = obj.x * unit;
	      obj.top = obj.y * unit;
	      obj.right = (obj.x + obj.w) * unit;
	      obj.bottom = (obj.y + obj.h) * unit;
	      return obj;
	    }

	    /**
	     * 检测两个矩形是否碰撞
	     * @param region1
	     * @param region2
	     * @returns {boolean}
	       * @private
	       */

	  }, {
	    key: '_isRegionOverlap',
	    value: function _isRegionOverlap(region1, region2) {
	      var min = Math.min;
	      var max = Math.max;
	      var left = max(region1.left, region2.left);
	      var top = min(-region1.top, -region2.top);
	      var right = min(region1.right, region2.right);
	      var bottom = max(-region1.bottom, -region2.bottom);
	      return right > left && top > bottom;
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _base.React.createElement(
	        'div',
	        { style: this.props.scenceStyle },
	        _base.React.createElement(_index4.default, { ref: 'snake', model: this.state.snake, unit: this.state.unit, onMove: this.handleMove.bind(this) }),
	        _base.React.createElement(_index6.default, { ref: 'food', model: this.state.foods, unit: this.state.unit, onDel: this.refreshClashObject.bind(this), onEmpty: this.handleFoodEmpty.bind(this) }),
	        _base.React.createElement(_index8.default, { ref: 'obstacle', model: this.state.obstacle, unit: this.state.unit })
	      );
	    }
	  }]);
	  return App;
	}(Component);

	App.propTypes = {};
	App.defaultProps = (0, _assign2.default)({
	  unit: 10,
	  scenceStyle: {
	    left: 0,
	    top: 0
	  }
	});
	exports.default = App;

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
	 */
	"use strict";

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

	var _index = __webpack_require__(30);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Component = _base.React.Component;
	var PropTypes = _base.React.PropTypes;
	var PureRenderMixin = _base.React.addons.PureRenderMixin;

	var cx = _bind2.default.bind(_index2.default);
	var indexOfArr = function indexOfArr(arr, target) {
	  var result = -1;
	  arr.some(function (item, index) {
	    if (target.x === item.x && target.y === item.y) {
	      result = index;
	    }
	  });
	  return result;
	};

	var Food = function (_Component) {
	  (0, _inherits3.default)(Food, _Component);


	  /**
	   * @constructor
	   */


	  /**
	   * default props
	   */

	  function Food(props) {
	    (0, _classCallCheck3.default)(this, Food);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Food).call(this, props));

	    _this.state = {
	      model: _this.props.model
	    };

	    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_this);
	    return _this;
	  }

	  /**
	   * init state
	   */


	  (0, _createClass3.default)(Food, [{
	    key: 'render',
	    value: function render() {
	      var unit = this.props.unit;
	      var foodNodes = this.state.model.map(function (food) {
	        var foodStyle = {
	          left: food.x * unit,
	          top: food.y * unit,
	          width: unit,
	          height: unit
	        };
	        return _base.React.createElement('div', { className: _index2.default.food, style: foodStyle });
	      });
	      return _base.React.createElement(
	        'div',
	        null,
	        foodNodes
	      );
	    }

	    /**
	     * 食物被吃掉
	     * @param food
	       */

	  }, {
	    key: 'del',
	    value: function del(food) {
	      var foods = this.state.model;
	      var foodIndex = indexOfArr(foods, food);
	      if (foodIndex < 0) {
	        return;
	      }
	      foods.splice(foodIndex, 1); //食物消失
	      this.setState({ model: foods.concat() }, function () {
	        this.props.onDel();
	      });
	      if (foods.length < 1) {
	        this.props.onEmpty();
	      }
	    }
	  }]);
	  return Food;
	}(Component);

	Food.propTypes = {};
	Food.defaultProps = {
	  model: [],
	  unit: 10
	};
	exports.default = Food;

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
	 */
	"use strict";

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

	var _index = __webpack_require__(32);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Component = _base.React.Component;
	var PropTypes = _base.React.PropTypes;
	var PureRenderMixin = _base.React.addons.PureRenderMixin;

	var cx = _bind2.default.bind(_index2.default);

	var Obstacle = function (_Component) {
	  (0, _inherits3.default)(Obstacle, _Component);


	  /**
	   * @constructor
	   */


	  /**
	   * default props
	   */

	  function Obstacle(props) {
	    (0, _classCallCheck3.default)(this, Obstacle);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Obstacle).call(this, props));

	    _this.state = {};

	    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_this);
	    return _this;
	  }

	  /**
	   * init state
	   */


	  (0, _createClass3.default)(Obstacle, [{
	    key: 'render',
	    value: function render() {

	      return _base.React.createElement('p', null);
	    }
	  }]);
	  return Obstacle;
	}(Component);

	Obstacle.propTypes = {};
	Obstacle.defaultProps = {};
	exports.default = Obstacle;

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(15);

	var _assign2 = _interopRequireDefault(_assign);

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

	var _index = __webpack_require__(33);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Component = _base.React.Component;
	var PropTypes = _base.React.PropTypes;
	var PureRenderMixin = _base.React.addons.PureRenderMixin;

	var cx = _bind2.default.bind(_index2.default);

	var KEY_MAP = {
	  "37": 0, //"left",
	  "38": 1, //"up",
	  "39": 2, //"right",
	  "40": 3 //"down"
	};

	var Snake = function (_Component) {
	  (0, _inherits3.default)(Snake, _Component);


	  /**
	   * @constructor
	   */


	  /**
	   * default props
	   */

	  function Snake(props) {
	    (0, _classCallCheck3.default)(this, Snake);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Snake).call(this, props));

	    _this.state = (0, _assign2.default)({
	      direction: 3,
	      model: []
	    }, _this.props);

	    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_this);
	    _this.play();
	    document.addEventListener('keydown', function (e) {
	      if (typeof KEY_MAP[e.keyCode] === 'undefined') {
	        return;
	      }
	      e.preventDefault();

	      var userDirection = KEY_MAP[e.keyCode];
	      if (!this._isAllowDirection(userDirection)) {
	        return;
	      }
	      this.setState({
	        direction: userDirection
	      });
	    }.bind(_this), true);
	    return _this;
	  }
	  /**
	   * init state
	   */


	  (0, _createClass3.default)(Snake, [{
	    key: 'play',
	    value: function play() {
	      this._ticker = setInterval(function () {
	        this.move(this.state.direction);
	      }.bind(this), 60);
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      clearInterval(this._ticker);
	    }
	    /**
	     * 蛇的移动
	     * @param direction 移动的方向
	       */

	  }, {
	    key: 'move',
	    value: function move(direction) {
	      var snakeModel = this.state.model;
	      var newPos = (0, _assign2.default)({}, snakeModel[0]);
	      switch (direction) {
	        case 1:
	          //up
	          newPos.y--;
	          break;
	        case 3:
	          //down
	          newPos.y++;
	          break;
	        case 0:
	          //left
	          newPos.x--;
	          break;
	        case 2:
	          //right
	          newPos.x++;
	          break;
	        default:
	          break;
	      }
	      newPos.direction = direction;
	      this._doMove(snakeModel, newPos);
	      this.setState({
	        model: snakeModel.concat()
	      }, function () {
	        this.props.onMove(newPos);
	      });
	    }

	    /**
	     * 吃食
	     * @param food
	       */

	  }, {
	    key: 'eat',
	    value: function eat(food) {
	      this.state.model.unshift(food);
	      this.setState({ model: this.state.model });
	    }
	    /**
	     * 检测是否是反方向运动,只有在蛇的节点大于1时需要检测
	     * @param direction
	     * @returns {boolean}
	     * @private
	       */

	  }, {
	    key: '_isAllowDirection',
	    value: function _isAllowDirection(direction) {
	      return !(Math.abs(direction - this.state.direction) == 2 && this.state.model.length > 1);
	    }
	    /**
	     * 移动算法的实现,去掉最后一个蛇节点,头部插入一个蛇的节点
	     * @param newPos
	     * @private
	       */

	  }, {
	    key: '_doMove',
	    value: function _doMove(snakeModel, newPos) {
	      snakeModel.pop();
	      snakeModel.unshift(newPos);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.gameState == "stop") {
	        this.stop();
	        return;
	      }
	      var unit = this.props.unit;
	      var snakeNodes = this.state.model.map(function (item) {
	        var nodeStyle = {
	          left: item.x * unit,
	          top: item.y * unit,
	          width: unit,
	          height: unit
	        };
	        return _base.React.createElement('div', { className: _index2.default.snakeNode, style: nodeStyle });
	      });
	      return _base.React.createElement(
	        'div',
	        null,
	        snakeNodes
	      );
	    }
	  }]);
	  return Snake;
	}(Component);

	Snake.propTypes = {};
	Snake.defaultProps = {
	  unit: 10,
	  model: []
	};
	exports.default = Snake;

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	module.exports = __webpack_require__(3).Object.assign;

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(1)
	  , toObject = __webpack_require__(26)
	  , IObject  = __webpack_require__(22);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(10);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(59)});

/***/ }

})
});
;