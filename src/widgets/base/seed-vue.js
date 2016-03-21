(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("base", [], factory);
	else if(typeof exports === 'object')
		exports["base"] = factory();
	else
		root["base"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by 弘树<tiehang.lth@alibaba-inc.com> on 16/1/22.
	 */
	
	__webpack_require__(1);
	
	// 按需加入手淘 WindVane Lib
	if (true) {
	  __webpack_require__(2);
	}
	
	var MTop = __webpack_require__(3);
	var Bridge = __webpack_require__(7);
	var Q = __webpack_require__(5);
	var JSBridge = __webpack_require__(6);
	var Tracker = __webpack_require__(8);
	
	if (false) {
	  require('tms-offline-parser');
	}
	
	// wlog
	if (true) {
	  __webpack_require__(9);
	  __webpack_require__(10);
	  __webpack_require__(11);
	  __webpack_require__(12);
	  __webpack_require__(13);
	}
	
	var exportObj = {
	  version: ("0.2.0"),
	  MTop: MTop.default || MTop,
	  Bridge: Bridge.default || Bridge,
	  Q: Q.default || Q,
	  JSBridge: JSBridge.default || JSBridge,
	  Tracker: Tracker.default || Tracker
	};
	
	// 按需加入 React
	if (false) {
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
	if (true) {
	  var Vue = __webpack_require__(14);
	  var VueTouch = __webpack_require__(15);
	  Vue.use(VueTouch);
	  exportObj.Vue = Vue;
	}
	
	module.exports = exportObj;

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* Zepto 1.1.6 - zepto event ajax - zeptojs.com/license */
	var Zepto=function(){function $(t){return null==t?String(t):T[S.call(t)]||"object"}function D(t){return"function"==$(t)}function Z(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function k(t){return"object"==$(t)}function F(t){return k(t)&&!Z(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function q(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function H(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function _(t){return t in c?c[t]:c[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function B(t,e){return"number"!=typeof e||l[H(t)]?e:e+"px"}function V(t){var e,n;return f[t]||(e=u.createElement(t),u.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),f[t]=n),f[t]}function I(t){return"children"in t?a.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function J(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function X(n,r,i){for(e in r)i&&(F(r[e])||L(r[e]))?(F(r[e])&&!F(n[e])&&(n[e]={}),L(r[e])&&!L(n[e])&&(n[e]=[]),X(n[e],r[e],i)):r[e]!==t&&(n[e]=r[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function W(t,e,n,r){return D(e)?e.call(t,n,r):e}function Y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function G(e,n){var r=e.className||"",i=r&&r.baseVal!==t;return n===t?i?r.baseVal:r:void(i?r.baseVal=n:e.className=n)}function K(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function Q(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)Q(t.childNodes[n],e)}var t,e,n,r,C,O,i=[],o=i.concat,s=i.filter,a=i.slice,u=window.document,f={},c={},l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},h=/^\s*<(\w+|!)[^>]*>/,p=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,d=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/^(?:body|html)$/i,g=/([A-Z])/g,v=["val","css","html","text","data","width","height","offset"],y=["after","prepend","before","append"],x=u.createElement("table"),w=u.createElement("tr"),b={tr:u.createElement("tbody"),tbody:x,thead:x,tfoot:x,td:w,th:w,"*":u.createElement("div")},E=/complete|loaded|interactive/,j=/^[\w-]*$/,T={},S=T.toString,N={},P=u.createElement("div"),A={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=P).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&P.removeChild(t),r},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},O=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(e,r,i){var o,s,f;return p.test(e)&&(o=n(u.createElement(RegExp.$1))),o||(e.replace&&(e=e.replace(d,"<$1></$2>")),r===t&&(r=h.test(e)&&RegExp.$1),r in b||(r="*"),f=b[r],f.innerHTML=""+e,o=n.each(a.call(f.childNodes),function(){f.removeChild(this)})),F(i)&&(s=n(o),n.each(i,function(t,e){v.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new J(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(e,r){var i;if(!e)return N.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&h.test(e))i=N.fragment(e,RegExp.$1,r),e=null;else{if(r!==t)return n(r).find(e);i=N.qsa(u,e)}else{if(D(e))return n(u).ready(e);if(N.isZ(e))return e;if(L(e))i=q(e);else if(k(e))i=[e],e=null;else if(h.test(e))i=N.fragment(e.trim(),RegExp.$1,r),e=null;else{if(r!==t)return n(r).find(e);i=N.qsa(u,e)}}return N.Z(i,e)},n=function(t,e){return N.init(t,e)},n.extend=function(t){var e,n=a.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){X(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=j.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:a.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=u.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=$,n.isFunction=D,n.isWindow=Z,n.isArray=L,n.isPlainObject=F,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return i.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.noop=function(){},n.map=function(t,e){var n,i,o,r=[];if(R(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return z(r)},n.each=function(t,e){var n,r;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){T["[object "+e+"]"]=e.toLowerCase()}),n.fn={constructor:N.Z,length:0,forEach:i.forEach,reduce:i.reduce,push:i.push,sort:i.sort,splice:i.splice,indexOf:i.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return o.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(a.apply(this,arguments))},ready:function(t){return E.test(u.readyState)&&u.body?t(n):u.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?a.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return i.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return D(t)?this.not(this.not(t)):n(s.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return n(O(this.concat(n(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(e){var r=[];if(D(e)&&e.call!==t)this.each(function(t){e.call(this,t)||r.push(this)});else{var i="string"==typeof e?this.filter(e):R(e)&&D(e.item)?a.call(e):n(e);this.forEach(function(t){i.indexOf(t)<0&&r.push(t)})}return n(r)},has:function(t){return this.filter(function(){return k(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!k(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!k(t)?t:n(t)},find:function(t){var e,r=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return i.some.call(r,function(e){return n.contains(e,t)})}):1==this.length?n(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):n()},closest:function(t,e){var r=this[0],i=!1;for("object"==typeof t&&(i=n(t));r&&!(i?i.indexOf(r)>=0:N.matches(r,t));)r=r!==e&&!M(r)&&r.parentNode;return n(r)},parents:function(t){for(var e=[],r=this;r.length>0;)r=n.map(r,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(O(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return I(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||a.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(I(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=V(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=D(t);if(this[0]&&!e)var r=n(t).get(0),i=r.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=D(t);return this.each(function(r){var i=n(this),o=i.contents(),s=e?t.call(this,r):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var r=n(this);(e===t?"none"==r.css("display"):e)?r.show():r.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var r=this.innerHTML;n(this).empty().append(W(this,t,e,r))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=W(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(n,r){var i;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(k(n))for(e in n)Y(this,e,n[e]);else Y(this,n,W(this,r,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){Y(this,t)},this)})},prop:function(t,e){return t=A[t]||t,1 in arguments?this.each(function(n){this[t]=W(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var r="data-"+e.replace(g,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?K(i):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=W(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var r=n(this),i=W(this,t,e,r.offset()),o=r.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==r.css("position")&&(s.position="relative"),r.css(s)});if(!this.length)return null;if(!n.contains(u.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,r){if(arguments.length<2){var i,o=this[0];if(!o)return;if(i=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||i.getPropertyValue(t);if(L(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||i.getPropertyValue(e)}),s}}var a="";if("string"==$(t))r||0===r?a=H(t)+":"+B(t,r):this.each(function(){this.style.removeProperty(H(t))});else for(e in t)t[e]||0===t[e]?a+=H(e)+":"+B(e,t[e])+";":this.each(function(){this.style.removeProperty(H(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?i.some.call(this,function(t){return this.test(G(t))},_(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){r=[];var i=G(this),o=W(this,t,e,i);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||r.push(t)},this),r.length&&G(this,i+(i?" ":"")+r.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return G(this,"");r=G(this),W(this,e,n,r).split(/\s+/g).forEach(function(t){r=r.replace(_(t)," ")}),G(this,r.trim())}})},toggleClass:function(e,r){return e?this.each(function(i){var o=n(this),s=W(this,e,i,G(this));s.split(/\s+/g).forEach(function(e){(r===t?!o.hasClass(e):r)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),r=this.offset(),i=m.test(e[0].nodeName)?{top:0,left:0}:e.offset();return r.top-=parseFloat(n(t).css("margin-top"))||0,r.left-=parseFloat(n(t).css("margin-left"))||0,i.top+=parseFloat(n(e[0]).css("border-top-width"))||0,i.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:r.top-i.top,left:r.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||u.body;t&&!m.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var r=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(i){var o,s=this[0];return i===t?Z(s)?s["inner"+r]:M(s)?s.documentElement["scroll"+r]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,W(this,i,t,s[e]()))})}}),y.forEach(function(t,e){var r=e%2;n.fn[t]=function(){var t,o,i=n.map(arguments,function(e){return t=$(e),"object"==t||"array"==t||null==e?e:N.fragment(e)}),s=this.length>1;return i.length<1?this:this.each(function(t,a){o=r?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null;var f=n.contains(u.documentElement,o);i.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,a),f&&Q(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[r?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),N.Z.prototype=J.prototype=n.fn,N.uniq=O,N.deserializeValue=K,n.zepto=N,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,r){if(e=p(e),e.ns)var i=d(e.ns);return(s[l(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||l(t.fn)===l(n))&&(!r||t.sel==r)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,r,i,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);r.split(/\s/).forEach(function(r){if("ready"==r)return t(document).ready(i);var s=p(r);s.fn=i,s.sel=a,s.e in c&&(i=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||i;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var r=l.apply(e,t._args==n?[t]:[t].concat(t._args));return r===!1&&(t.preventDefault(),t.stopPropagation()),r}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,r,i){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,r).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,i))})})}function j(e,r){return(r||!e.isDefaultPrevented)&&(r||(r=e),t.each(E,function(t,n){var i=r[t];e[t]=function(){return this[n]=x,i&&i.apply(r,arguments)},e[n]=w}),(r.defaultPrevented!==n?r.defaultPrevented:"returnValue"in r?r.returnValue===!1:r.getPreventDefault&&r.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function T(t){var e,r={originalEvent:t};for(e in t)b.test(e)||t[e]===n||(r[e]=t[e]);return j(r,t)}var n,e=1,r=Array.prototype.slice,i=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&r.call(arguments,2);if(i(e)){var a=function(){return e.apply(n,s?s.concat(r.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var x=function(){return!0},w=function(){return!1},b=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||i(u)||u===!1||(u=a,a=s,s=n),(u===n||a===!1)&&(u=a,a=n),u===!1&&(u=w),h.each(function(n,i){f&&(c=function(t){return y(i,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,i).get(0);return o&&o!==i?(n=t.extend(T(e),{currentTarget:o,liveFired:i}),(c||u).apply(o,[n].concat(r.call(arguments,1)))):void 0}),v(i,e,u,a,s,l||c)}))},t.fn.off=function(e,r,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,r,e)}),a):(o(r)||i(s)||s===!1||(s=r,r=n),s===!1&&(s=w),a.each(function(){y(this,e,s,r)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var r,i;return this.each(function(s,a){r=T(o(e)?t.Event(e):e),r._args=n,r.target=a,t.each(h(a,e.type||e),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),j(n)}}(Zepto),function(t){function h(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function p(t,e,r,i){return t.global?h(e||n,r,i):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),p(n,i,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),p(r,o,"ajaxError",[n,r,t||e]),x(e,n,r)}function x(t,e,n){var r=n.context;n.complete.call(r,e,t),p(n,r,"ajaxComplete",[e,n]),m(n)}function w(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function T(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function N(e,n,r,i){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?e.add(u.name,u.value):"array"==o||!r&&"object"==o?N(e,u,r,n):e.add(n,u)})}var r,i,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(r,i){if(!("type"in r))return t.ajax(r);var f,h,o=r.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return i&&i.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,r,i):y(null,n||"error",l,r,i),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,r)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=r.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),r.timeout>0&&(h=setTimeout(function(){c("timeout")},r.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:w,success:w,error:w,complete:w,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,u,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(r in t.ajaxSettings)void 0===o[r]&&(o[r]=t.ajaxSettings[r]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),(u=o.url.indexOf("#"))>-1&&(o.url=o.url.slice(0,u)),j(o);var f=o.dataType,h=/\?.+=\?/.test(o.url);if(h&&(f="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=f&&"jsonp"!=f)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==f)return h||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,p=o.accepts[f],m={},x=function(t,e){m[t.toLowerCase()]=[t,e]},T=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),N=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",p||"*/*"),(p=o.mimeType||p)&&(p.indexOf(",")>-1&&(p=p.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(p)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&x("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(i in o.headers)x(i,o.headers[i]);if(S.setRequestHeader=x,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=w,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==T){if(f=f||b(o.mimeType||S.getResponseHeader("content-type")),"arraybuffer"==S.responseType||"blob"==S.responseType)e=S.response;else{e=S.responseText;try{"script"==f?(1,eval)(e):"xml"==f?e=S.responseXML:"json"==f&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){n=r}if(n)return y(n,"parsererror",S,o,s)}v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(i in o.xhrFields)S[i]=o.xhrFields[i];var O="async"in o?o.async:!0;S.open(o.type,o.url,O,o.username,o.password);for(i in m)N.apply(S,m[i]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=w,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(T.apply(null,arguments))},t.post=function(){var e=T.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=T.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var a,i=this,s=e.split(/\s/),u=T(e,n,r),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){i.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(i,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(S(e)+"="+S(n))},N(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto);
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = $;

/***/ },
/* 2 */
/***/ function(module, exports) {

	!function(a,b){function c(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d)return-1;if(d>e)return 1}return 0}var d=a.Promise,e=a.document,f=a.navigator.userAgent,g=/Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(f)||/Windows\sNT\s[\d\.]+/i.test(f),h=g&&a.WindVane_Win_Private&&a.WindVane_Win_Private.call,i=/iPhone|iPad|iPod/i.test(f),j=/Android/i.test(f),k=f.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),l=Object.prototype.hasOwnProperty,m=b.windvane=a.WindVane||(a.WindVane={}),n=(a.WindVane_Native,1),o=[],p=3,q="hybrid",r="wv_hybrid",s="iframe_",t="suc_",u="err_",v="defer_",w="param_",x="chunk_",y=6e5,z=6e5,A=6e4;k=k?(k[1]||"0.0.0").replace(/\_/g,"."):"0.0.0";var B={isAvailable:1===c(k,"0"),call:function(a,b,c,e,f,g){var h,i;return"number"==typeof arguments[arguments.length-1]&&(g=arguments[arguments.length-1]),"function"!=typeof e&&(e=null),"function"!=typeof f&&(f=null),d&&(i={},i.promise=new d(function(a,b){i.resolve=a,i.reject=b})),h=g>0?setTimeout(function(){B.onFailure(h,{ret:"HY_TIMEOUT"})},g):C.getSid(),C.registerCall(h,e,f,i),C.registerGC(h,g),B.isAvailable?C.callMethod(a,b,c,h):B.onFailure(h,{ret:"HY_NOT_IN_WINDVANE"}),i?i.promise:void 0},fireEvent:function(a,b,c){var d=e.createEvent("HTMLEvents");d.initEvent(a,!1,!0),d.param=C.parseData(b||C.getData(c)),e.dispatchEvent(d)},getParam:function(a){return C.getParam(a)},setData:function(a,b){C.setData(a,b)},onSuccess:function(a,b){C.onComplete(a,b,"success")},onFailure:function(a,b){C.onComplete(a,b,"failure")}},C={params:{},chunks:{},calls:{},getSid:function(){return Math.floor(Math.random()*(1<<50))+""+n++},buildParam:function(a){return a&&"object"==typeof a?JSON.stringify(a):a||""},getParam:function(a){return this.params[w+a]||""},setParam:function(a,b){this.params[w+a]=b},parseData:function(a){var b;if(a&&"string"==typeof a)try{b=JSON.parse(a)}catch(c){b={ret:["WV_ERR::PARAM_PARSE_ERROR"]}}else b=a||{};return b},setData:function(){this.chunks[x+sid]=this.chunks[x+sid]||[],this.chunks[x+sid].push(chunk)},getData:function(a){return this.chunks[x+a]?this.chunks[x+a].join(""):""},registerCall:function(a,b,c,d){b&&(this.calls[t+a]=b),c&&(this.calls[u+a]=c),d&&(this.calls[v+a]=d)},unregisterCall:function(a){var b=t+a,c=u+a,d=v+a,e={};return this.calls[b]&&(e.success=this.calls[b],delete this.calls[b]),this.calls[c]&&(e.failure=this.calls[c],delete this.calls[c]),this.calls[d]&&(e.deferred=this.calls[d],delete this.calls[d]),e},useIframe:function(a,b){var c=s+a,d=o.pop();d||(d=e.createElement("iframe"),d.setAttribute("frameborder","0"),d.style.cssText="width:0;height:0;border:0;display:none;"),d.setAttribute("id",c),d.setAttribute("src",b),d.parentNode||setTimeout(function(){e.body.appendChild(d)},5)},retrieveIframe:function(a){var b=s+a,c=e.querySelector("#"+b);o.length>=p?e.body.removeChild(c):o.push(c)},callMethod:function(b,c,d,e){if(d=C.buildParam(d),g)h?a.WindVane_Win_Private.call(b,c,e,d):this.onComplete(e,{ret:"HY_NO_HANDLER_ON_WP"},"failure");else{var f=q+"://"+b+":"+e+"/"+c+"?"+d;if(i)this.setParam(e,d),this.useIframe(e,f);else if(j){var k=r+":";window.prompt(f,k)}else this.onComplete(e,{ret:"HY_NOT_SUPPORT_DEVICE"},"failure")}},registerGC:function(a,b){var c=this,d=Math.max(b||0,y),e=Math.max(b||0,A),f=Math.max(b||0,z);setTimeout(function(){c.unregisterCall(a)},d),i?setTimeout(function(){c.params[w+a]&&delete c.params[w+a]},e):j&&setTimeout(function(){c.chunks[x+a]&&delete c.chunks[x+a]},f)},onComplete:function(a,b,c){clearTimeout(a);var d=this.unregisterCall(a),e=d.success,f=d.failure,g=d.deferred;b=b?b:this.getData(a),b=this.parseData(b);var h=b.ret;"string"==typeof h&&(b=b.value||b,b.ret||(b.ret=[h])),"success"===c?(e&&e(b),g&&g.resolve(b)):"failure"===c&&(f&&f(b),g&&g.reject(b)),i?(this.retrieveIframe(a),this.params[w+a]&&delete this.params[w+a]):j&&this.chunks[x+a]&&delete this.chunks[x+a]}};for(var D in B)l.call(m,D)||(m[D]=B[D])}(window,window.lib||(window.lib={}));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(5), __webpack_require__(6), __webpack_require__(8));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(6), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["mtop"] = factory(require("q"), require("jsbridge"), require("tracker"));else root["mtop"] = factory(root["q"], root["jsbridge"], root["tracker"]);
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "/build/";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				/**
	    * @description mpi/mtop
	    * @author meng.limeng@alibaba-inc.com
	    */
				'use strict';
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				var _q = __webpack_require__(1);
	
				var _q2 = _interopRequireDefault(_q);
	
				var _jsbridge = __webpack_require__(2);
	
				var _jsbridge2 = _interopRequireDefault(_jsbridge);
	
				var _tracker = __webpack_require__(3);
	
				var _tracker2 = _interopRequireDefault(_tracker);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				__webpack_require__(4);
	
				/**
	    * Object.assign polyfill
	    */
				if (!Object.assign) {
					Object.defineProperty(Object, "assign", {
						enumerable: false,
						configurable: true,
						writable: true,
						value: function value(target, firstSource) {
							"use strict";
	
							if (target === undefined || target === null) throw new TypeError("Cannot convert first argument to object");
							var to = Object(target);
							for (var i = 1; i < arguments.length; i++) {
								var nextSource = arguments[i];
								if (nextSource === undefined || nextSource === null) continue;
								var keysArray = Object.keys(Object(nextSource));
								for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
									var nextKey = keysArray[nextIndex];
									var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
									if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
								}
							}
							return to;
						}
					});
				}
	
				//适配http|https，无域环境下默认http
	
				//mtop 请求域判断，与页面一级域相同，保证cookie操作权限
				var hostname = window.location.hostname,
				    hostRegexp = /.*?([^.]+)(?:\.x)?\.(alitrip|taobao|tmall|etao|alibaba|alipay|aliyun)\.(com|net).*/i,
				   
	
				//当前域名
				domain = (/\.alitrip\./.test(hostname) ? 'alitrip' : 'taobao') + '.' + (/\.net/.test(hostname) ? 'net' : 'com'),
				   
	
				//当前环境变量
				env = function () {
					var type = hostname.indexOf('x.taobao.net') > 0 ? 'waptest' : 'm';
					var host = hostname.match(hostRegexp);
					if (host && ['waptest', 'wapa', 'm', 'waptest2nd'].indexOf(host[1]) > -1) {
						type = host[1];
					}
					return type;
				}();
	
				//线上 mtop 请求锁定 https，日常/预发 mtop 仅支持http
				var protocol = 'https:';
				if (!/https:/i.test(location.protocol) && (env === 'waptest' || env === 'wapa')) {
					protocol = 'http:';
				}
	
				//tbpass同步地址
				var passURL = protocol + '//login.<%= domain %>/jump?target=<%= redirect %>';
				//登录地址
				var loginURL = protocol + '//login.<%= env %>.<%= domain %>/login.htm?tpl_redirect_url=<%= redirect %>';
	
				//mtop请求队列，串行
				var requestQueue = [],
				   
	
				//标记mtop运行状态
				isRunning = false,
				   
	
				//jsonp callback唯一标志位
				jsonpInc = 1;
	
				var sendPerformanceLog = function sendPerformanceLog(options, type) {
					/*
	     tracker && tracker.sendCustomPerformanceLog({
	     mtopName: options.api,
	     useNative: options.useNative,
	     spendTime: new Date() - beginTime,
	     type: type
	     });*/
					var _trackType = {
						"TIMEOUT": "timeout",
						"ACTIVE_ABORT": "abort",
						"success": "success",
						"failure": "failure"
					};
					_tracker2.default && _tracker2.default.timelineEnd && _tracker2.default.timelineEnd(options.api, _trackType[type] || type, {
						useNative: options.useNative
					}, "mtop");
				};
	
				//处理钱包下桥可用（创建桥的方式是异步的）
				function alipayCall(fn) {
					fn = fn || function () {};
					if (window.AlipayJSBridge && AlipayJSBridge.call) {
						fn();
					} else {
						document.addEventListener('AlipayJSBridgeReady', fn, false);
					}
				}
	
				/**
	    * Dispatch an event with props to el
	    */
				function dispatchEvent(el, eventType, props) {
					var event = document.createEvent('Events');
					var bubbles = true;
					if (props) {
						for (var name in props) {
							if ({}.hasOwnProperty.call(props, name)) {
								name === 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
							}
						}
					}
					event.initEvent(eventType, bubbles, true);
					el.dispatchEvent(event);
				}
	
				/**
	    * uid生成器
	    * */
				var randomUID = function randomUID() {
					var chars = 'abcdefghijklmnopqrstuvwxyz',
					    len = 8,
					    out = '';
	
					for (var i = 0, clen = chars.length; i < len; i++) {
						out += chars.substr(0 | Math.random() * clen, 1);
					}
	
					return randomUID.uids[out] ? randomUID(len) : randomUID.uids[out] = out;
				};
				randomUID.uids = {};
	
				/**
	    * 将所有的请求保存下来
	    * */
				var requestHistory = {};
	
				var Util = {
					/**
	     * 判断容器
	     * {object}
	     */
					container: function () {
						var isAlipay = false,
						    isAlitrip = false,
						    isTaobao = false,
						    isTmall = false;
	
						//钱包
						isAlipay = function () {
							return (/AlipayClient/i.test(navigator.userAgent)
							);
						}();
						//去啊
						isAlitrip = function () {
							return (/AliTrip/i.test(navigator.userAgent)
							);
						}();
	
						//手淘 version >= 5.2.9 接口人@四海
						isTaobao = function () {
							return (/Aliapp\(TB/i.test(navigator.userAgent)
							);
						}();
	
						isTmall = function () {
							return (/AliApp\(TM/i.test(navigator.userAgent)
							);
						}();
	
						return {
							isAlipay: isAlipay,
							isAlitrip: isAlitrip,
							isTaobao: isTaobao,
							isTmall: isTmall
						};
					}(),
					//是否使用native 代理mtop请求
					useNative: function useNative(options) {
						if (this.container.isAlitrip) {
							return options.alitrip;
						} else if (this.container.isAlipay) {
							return options.alipay && this.compareVersion('AlipayClient', '9.0.1') >= 0;
						} else if (this.container.isTaobao) {
							return options.taobao && (_jsbridge2.default.device.type === 'android' && this.compareVersion('TB', '5.2.12') >= 0 || _jsbridge2.default.device.type === 'ios' && this.compareVersion('TB', '5.2.9') >= 0) && window.WindVane;
						} else if (this.container.isTmall) {
							return options.tmall && this.compareVersion('TM', '5.2.0') >= 0 && window.WindVane;
						} else {
							return false;
						}
					},
					//relVersion 高时，返回-1；如果两者相等，返回0；低时则返回1
					compareVersion: function compareVersion(appUA, relVersion, digit) {
						var reg = new RegExp(appUA + '[\\s\\/]([\\d\\.]+)', 'i'),
						    match = navigator.userAgent.match(reg),
						    appVersion = match && match[1] ? match[1] : 0;
	
						if (!appVersion) {
							return -1;
						}
	
						var v = appVersion.split('.'),
						    r = relVersion.split('.'),
						    d = digit || v.length,
						    i = -1;
	
						while (++i < d) {
							var _v = Number(v[i]) || 0,
							    _r = Number(r[i]) || 0;
	
							if (_v > _r) {
								return 1;
							} else if (_v < _r) {
								return -1;
							}
						}
	
						return 0;
					},
					/**
	     * 删cookie
	     * @param name
	     */
					deleteCookie: function deleteCookie(name, domain, path) {
						var now = new Date();
						var path = path || '/';
						var domain = domain || window.location.hostname;
	
						now.setTime(now.getTime() - 1000);
						document.cookie = name + '=;path=' + path + ';domain=' + domain + ';expires=' + now.toGMTString();
					},
					/**
	     * 查cookie
	     * @param name
	     * @returns {*}
	     */
					getCookie: function getCookie(name) {
						var match = new RegExp('(?:^|;\\s*)' + name + '\\=([^;]+)(?:;\\s*|$)').exec(document.cookie);
						if (match) {
							return match[1];
						} else {
							return null;
						}
					},
					//跳转去登录
					goLogin: function goLogin() {
	
						if (this.isGoingToLogin) {
							return;
						}
	
						this.isGoingToLogin = true;
	
						_jsbridge2.default.getEnv().then(function (env) {
							var _domain = domain.replace(/alitrip/i, 'taobao');
							//alitrip域下改写回调地址主动同步登陆态
							if (location.href.indexOf('.alitrip.') > -1 && !_jsbridge2.default.isAlitrip && !_jsbridge2.default.isTaobao && !_jsbridge2.default.isAlipay) {
								var pass_redirect = passURL.replace(/\<\%\=\s*env\s*\%\>/i, env).replace(/\<\%\=\s*domain\s*\%\>/i, _domain).replace(/\<\%\=\s*redirect\s*\%\>/i, encodeURIComponent(location.href));
								location.href = loginURL.replace(/\<\%\=\s*env\s*\%\>/i, env).replace(/\<\%\=\s*domain\s*\%\>/i, _domain).replace(/\<\%\=\s*redirect\s*\%\>/i, encodeURIComponent(pass_redirect));
							} else {
								location.href = loginURL.replace(/\<\%\=\s*env\s*\%\>/i, env).replace(/\<\%\=\s*domain\s*\%\>/i, _domain).replace(/\<\%\=\s*redirect\s*\%\>/i, encodeURIComponent(location.href));
							}
						});
					},
					getAppKey: function getAppKey() {
						var appKey = 'J_app_key';
						var el = document.getElementById(appKey);
						if (el) {
							return el.value;
						} else {
							return env === 'waptest' ? '4272' : '12574478';
						}
					},
	
					deleteToken: function deleteToken(domain, path) {
						this.deleteCookie(this.TOKEN_KEY, domain, path);
					},
	
					mergeParams: function mergeParams(o) {
						var r = {},
						    k,
						    v;
	
						for (k in o) {
							v = o[k];
							if (o.hasOwnProperty(k)) {
								if (typeof v === 'function') {
									r[k] = v();
								} else {
									r[k] = v;
								}
							}
						}
	
						return r;
					},
	
					parseParams: function parseParams(params) {
						return this.mergeParams(params);
					},
	
					//触发mtop队列运行
					request: function request(options, success, failure) {
						var self = this;
						options.v = options.v || '*';
	
						//客户端弹出登录框，需要留有足够长的时间来等用户输入完成，否则会出现超时情况 @by 虎牙
						if (options.useNative && options.needLogin && this.useNative(options)) {
							options.timeout = options.timeout || 300000;
						}
	
						//H5通过jsonp方式请求mtop，需要将对象参数data序列化
						if ((!options.useNative || !this.useNative(options)) && _typeof(options.data) === 'object') {
							options.data = JSON.stringify(options.data || {}) || '{}';
						}
	
						self.sendInQueue(options, success, failure);
					},
	
					//mtop请求入栈
					sendInQueue: function sendInQueue(options, success, failure) {
						var request = [options, success, failure];
	
						requestQueue.push(request);
	
						requestHistory[options.uid].status = 'inQueue';
						requestHistory[options.uid].abort = function () {
							for (var i = 0, len = requestQueue.length; i < len; i++) {
								if (requestQueue[i] === request) {
									requestQueue.splice(i, 1);
									requestHistory[options.uid].status = 'complete';
									break;
								}
							}
						};
	
						this.runNextInQueue();
					},
					runNextInQueue: function runNextInQueue() {
						if (requestQueue.length && !isRunning) {
							isRunning = true;
							var oneMtopConfig = requestQueue.shift();
							requestHistory[oneMtopConfig[0].uid].status = 'outQueue';
							this.sendRequest.apply(this, oneMtopConfig);
						}
					},
					sendRequest: function sendRequest(options, success, failure) {
						var self = this,
						    callback = this.createHandler(options, success, failure);
	
						function _noNeedToValidate(e) {
							//S.one(document).detach('sufei:validateDone', _validateDone);
							//S.one(document).detach('sufei:noNeedToValidate', _noNeedToValidate);
							document.removeEventListener('sufei:validateDone', _validateDone);
							document.removeEventListener('sufei:noNeedToValidate', _noNeedToValidate);
	
							//console.log('sufei通知未爬--goon', e[0].api);
							callback.apply(this, [e[0]]);
						}
	
						function _validateDone(e) {
							//S.one(document).detach('sufei:validateDone', _validateDone);
							document.removeEventListener('sufei:validateDone', _validateDone);
	
							//console.log('sufei验证OK---重发请求');
							//var _options = S.clone(options);
							var _options = Object.assign(options);
	
							try {
								var sm = eval('({' + e[0].replace(/&/g, ',').replace(/\=/g, ':').replace(/([^\,\:]+)/g, '"$1"') + '})');
	
								//_options.data = S.merge(JSON.parse(_options.data || {}), sm);
								_options.data = Object.assign({}, JSON.parse(_options.data || {}), sm);
	
								_options.data = JSON.stringify(_options.data);
							} catch (e) {}
	
							//重发请求
							self.getApiUrlPromise(_options).then(function (url) {
								self.send(url, callback, _options);
							}, function () {
	
								//callback(S.merge(_options, {
								//  ret: ['ACTIVE_ABORT::手动中止请求']
								//}));
	
								callback(Object.assign({}, _options, {
									ret: ['ACTIVE_ABORT::手动中止请求']
								}));
							});
						}
	
						//需要验证且用户验证通过后，重发请求(sufei会广播：sufei:validateDone)
						//S.one(document).on('sufei:validateDone', _validateDone);
						//无需验证，继续处理response(sufei会广播：sufei:noNeedToValidate)
						//S.one(document).on('sufei:noNeedToValidate', _noNeedToValidate);
	
						//需要验证且用户验证通过后，重发请求(sufei会广播：sufei:validateDone)
						document.addEventListener('sufei:validateDone', _validateDone);
						//无需验证，继续处理response(sufei会广播：sufei:noNeedToValidate)
						document.addEventListener('sufei:noNeedToValidate', _noNeedToValidate);
	
						this.getApiUrlPromise(options).then(function (url) {
							self.send(url, callback, options);
						});
					},
					createHandler: function __callee(options, success, failure) {
						var that = this;
	
						//tracker mtop请求发出前的接口信息
						try {
							_tracker2.default && _tracker2.default.log('requestLog', {
								request: options
							}, null, "mtop");
						} catch (e) {}
	
						//token异常重试控制，最多允许三次重试
						__callee.failTimes = __callee.failTimes || 0;
						var maxFailTimes = 3;
	
						function _callee(json) {
							var ret = (json && json.ret || []).join(',');
							// ret = "TOKEN_EMPTY";
	
							//请求正常返回
							if (/SUCCESS/i.test(ret)) {
								isRunning = false;
								that.runNextInQueue();
	
								//容错，回调出错不阻断mtop请求队列继续运行
								try {
									success && success(json);
									console.log(json);
								} catch (e) {}
	
								return;
							}
	
							//token失效
							//FAIL_SYS_TOKEN_EXOIRED应该为笔误，兼容掉
							if (/TOKEN_EMPTY|TOKEN_EXPIRED|TOKEN_EXOIRED/i.test(ret)) {
								//允许重试3次
								if (__callee.failTimes++ < maxFailTimes) {
									that.sendRequest(options, success, failure);
								} else {
									//置回
									__callee.failTimes = 0;
	
									that.deleteToken();
									isRunning = false;
									that.runNextInQueue();
									//容错，回调出错不阻断mtop请求队列继续运行
									try {
										failure && failure(json);
									} catch (e) {}
								}
	
								//mtop token异常打点跟踪
								(function () {
									try {
										var error = ret.split('::');
										if (_tracker2.default && _tracker2.default.log) {
	
											_tracker2.default.log(json.api, {
												errorName: 'MTOP_ERROR::TOKEN',
												errorCode: error[0],
												errorMesage: error[1] || 'mtop token异常',
												errorDetail: json.api,
												v: json.v,
												useNative: options.useNative
											}, null, "mtop");
										}
									} catch (e) {
										console.log(e);
									}
								})();
	
								return;
							}
	
							//session失效
							if (/SESSION_EXPIRED|SID_INVALID|AUTH_REJECT|NEED_LOGIN/.test(ret)) {
								//mtop session异常打点跟踪
								(function () {
									try {
										var error = ret.split('::');
										if (_tracker2.default && _tracker2.default.log) {
	
											_tracker2.default.log(json.api, {
												errorName: 'MTOP_ERROR::SESSION',
												errorCode: error[0],
												errorMesage: error[1] || 'mtop session异常',
												errorDetail: json.api,
												v: json.v,
												useNative: options.useNative
											}, null, "mtop");
										}
									} catch (e) {
										console.log(e);
									}
								})();
	
								//非app代理登录，跳到H5登录页引导用户登录
								if (options.needLogin) {
									that.goLogin();
									return;
								}
	
								isRunning = false;
								that.runNextInQueue();
								//容错，回调出错不阻断mtop请求队列继续运行
								try {
									failure && failure(json);
								} catch (e) {}
	
								return;
							}
	
							//mtop 其他异常打点跟踪
							(function () {
								try {
									var error = ret.split('::');
									if (_tracker2.default && _tracker2.default.log) {
	
										_tracker2.default.log(json.api, {
											errorName: 'MTOP_ERROR::OTHER',
											errorCode: error[0],
											errorMesage: error[1] || 'mtop 其他异常',
											errorDetail: json.api,
											v: json.v,
											useNative: options.useNative
										}, null, "mtop");
									}
								} catch (e) {
									console.log(e);
								}
							})();
	
							isRunning = false;
							that.runNextInQueue();
							//容错，回调出错不阻断mtop请求队列继续运行
							try {
								failure && failure(json);
							} catch (e) {}
						}
	
						return _callee;
					},
					getApiUrlPromise: function getApiUrlPromise(options) {
						var self = this;
						var deferred = _q2.default.defer();
	
						//处理参数值，如果里面有函数，那么取函数的返回值
						//options = this.parseParams(S.clone(options));
						options = self.parseParams(Object.assign({}, options));
	
						requestHistory[options.uid].abort = function () {
							deferred.reject();
						};
	
						// 获取ttid
						_jsbridge2.default.getTTid().then(function (ttid) {
							//使用去啊、手淘的SPDY协议代理mtop请求，提升性能
							if (options.useNative && self.useNative(options)) {
								//处理
								if (!options['ttid'] && ttid) {
									options['ttid'] = ttid;
								}
								deferred.resolve(options);
								return;
							}
	
							//非native代理环境，H5自己发送jsonp请求mtop
							var host = hostname.match(hostRegexp);
							var apiUrl = protocol + '//' + [
							//api头，一淘下api被占
							host && host[2] === 'etao' ? 'apie' : 'api',
							//环境变量
							env,
							//当前域
							domain].join('.') + '/rest/' + mtop.name;
	
							var apiParams = [];
	
							apiParams.push('callback=jsonpCallback');
	
							if (options.type) {
								apiParams.push('type=' + options.type);
								delete options.type;
							} else {
								apiParams.push('type=originaljsonp');
							}
	
							for (var key in options) {
								if (key === 'timeout') continue;
								apiParams.push(key + '=' + encodeURIComponent(options[key]));
							}
	
							if (ttid) {
								apiParams.push('ttid=' + ttid);
							}
	
							var sprefer = location.search.match(/sprefer=([^=&]+)/);
							if (sprefer && sprefer[1]) {
								apiParams.push('sprefer=' + sprefer[1]);
							}
	
							var t = new Date().getTime();
							apiParams.push('appKey=' + self.getAppKey());
							apiParams.push('t=' + t);
	
							self.getSignPromise(options.data, t).then(function (sign) {
								apiParams.push('sign=' + sign);
								var url = apiUrl + '?' + apiParams.join('&');
	
								deferred.resolve(url);
							});
						});
	
						return deferred.promise;
					},
					/**
	     * 利用分配的token对请求的url参数生成摘要值sign，mtop利用这个值和cookie中的token来防止url篡改
	     * @param str
	     * @param t
	     * @returns {defer.promise}
	     */
					getSignPromise: function getSignPromise(str, t) {
						var that = this;
	
						var deferred = _q2.default.defer();
	
						Util.getMTopTokenPromise().then(function (token) {
							var sign = that.md5(token + '&' + t + "&" + that.getAppKey() + "&" + str);
	
							deferred.resolve(sign);
						});
	
						return deferred.promise;
					},
	
					TOKEN_KEY: '_m_h5_tk',
					getMTopTokenPromise: function getMTopTokenPromise() {
						var deferred = _q2.default.defer();
						var ua = window.navigator.userAgent;
	
						var formatter = function formatter(token) {
							return token ? token.split('_')[0] : '';
						};
	
						//优先从cookie里读取token (wap、去啊、手淘、钱包8.5ios、钱包8.6android)
						var token = this.getCookie(this.TOKEN_KEY);
	
						if (token) {
							deferred.resolve(formatter(token));
	
							//cookie不可用，借助桥拿token
						} else {
								//运行环境
								var container = undefined;
								//钱包无域
								if (this.container.isAlipay) {
									container = 'alipay';
								}
	
								switch (container) {
									case 'alipay':
										var _alipay_getMtopToken = function _alipay_getMtopToken() {
											AlipayJSBridge.call('getMtopToken', {
												domain: domain
											}, function (json) {
												deferred.resolve(formatter(json.token));
											});
										};
										alipayCall(_alipay_getMtopToken);
										break;
									default:
										deferred.resolve(formatter(null));
								}
							}
	
						return deferred.promise;
					},
					send: function send(url, callback, options) {
						var self = this;
	
						var uid = '';
						if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
							uid = url.uid;
						} else {
							// 从url中匹配出uid
							uid = url.match(/uid=([^=&]+)/)[1];
						}
	
						/**
	      * status：uninitialized, loading, loaded, interactive, complete
	      * (未初始化)： (XMLHttpRequest)对象已经创建，但还没有调用open()方法。
	      * (载入)：已经调用open() 方法，但尚未发送请求。
	      * 暂时没有 -- (载入完成)： 请求已经发送完成。
	      * 暂时没有 -- (交互)：可以接收到部分响应数据。
	      * (完成)：已经接收到了全部数据，并且连接已经关闭。
	      * */
						requestHistory[uid].status = 'uninitialized';
						var script = document.createElement('script');
	
						var callbackName = 'mtopjsonp' + jsonpInc++,
						    timeoutid = setTimeout(function () {
							cleanup('TIMEOUT');
						}, options.timeout);
	
						window[callbackName] = function () {
	
							//航旅棱镜数据埋点统一处理
							if (arguments[0] && arguments[0].data) {
								configPrism(arguments[0].data);
							}
	
							//MTOP性能统计
							options && sendPerformanceLog(options, 'success');
							//mtop已返回，清除超时处理
							timeoutid && clearTimeout(timeoutid);
	
							// 状态修改为完成
							requestHistory[uid].status = 'complete';
							requestHistory[uid].abort = function () {};
							//是否使用sufei防爬刷，默认false
							//if(options && options.useSufei){
							//  S.one(document).fire('sufei:validateData', arguments);
							//}else{
							//  S.one(document).fire('sufei:noNeedToValidate', arguments);
							//}
							//
	
							//是否使用sufei防爬刷，默认false
							if (options && options.useSufei) {
								dispatchEvent(document, 'sufei:validateData', arguments);
							} else {
								dispatchEvent(document, 'sufei:noNeedToValidate', arguments);
							}
						};
	
						//请求未成功返回
						var cleanup = function cleanup(type) {
							// 若已经完成，则直接跳出
							if (requestHistory[uid].status === 'complete') {
								return;
							}
	
							//适配器,按照新的tracker规范转换
							options && sendPerformanceLog(options, type); //MTOP性能
	
							timeoutid && clearTimeout(timeoutid);
							if (script && script.parentNode) {
								script.parentNode.removeChild(script);
							}
	
							// 将状态置为完成
							requestHistory[uid].status = 'complete';
							requestHistory[uid].abort = function () {};
	
							// 触发回调
							var ret = '';
							switch (type) {
								case 'TIMEOUT':
									ret = 'TIMEOUT::超时阈值' + options.timeout;
									break;
								case 'ACTIVE_ABORT':
									ret = 'ACTIVE_ABORT::手动中止请求';
									break;
								case 'ABORT':
									ret = 'ABORT::mtop请求失败';
									break;
								default:
									ret = 'ERROR::mtop.js未知原因';
							}
	
							//手动完成请求callback
							//window[callbackName](S.merge(options, {
							//  ret: [ret]
							//}));
							window[callbackName](Object.assign({}, options, {
								ret: [ret]
							}));
	
							window[callbackName] = function () {
								delete window[callbackName];
							};
						};
	
						// 添加主动abort请求的方法
						requestHistory[uid].abort = function () {
							cleanup('ACTIVE_ABORT');
						};
	
						self.beginMtopSend = new Date();
	
						_tracker2.default.timelineStart && _tracker2.default.timelineStart(options.api); //MTOP是串行,可以保证这里的参数是唯一,能和timelineEnd对应,如果要支持并行,此处建议增加jsonpInc来保证唯一
	
						//更新request的状态
						requestHistory[uid].status = 'loading';
	
						//alitrip 使用native代理mtop请求
						if (url.useNative && this.container.isAlitrip && this.useNative(options)) {
							console.log('alitrip');
							var params = url,
							    needLogin = params.needLogin,
							    protocal = needLogin ? 'biz/mtop_ecode_sign' : 'biz/mtop_normal_sign';
	
							//设置成功失败回调
							params.successCallback = function (data) {
								data = typeof data === 'string' ? JSON.parse(data) : data;
								window[callbackName] && window[callbackName].call(this, data);
							};
	
							params.failCallback = function (data) {
								data = typeof data === 'string' ? JSON.parse(data) : data;
								window[callbackName] && window[callbackName].call(this, data);
							};
	
							// 标识是h5通过native发的参数
							if (params['data']) {
								params['data']['_platform_from_h5'] = true;
							}
	
							//向客户端发送协议
							_jsbridge2.default.pushBack('native:', protocal, params);
							return;
						}
	
						//钱包version>=9.0 使用native代理mtop请求
						if (url.useNative && this.container.isAlipay && this.useNative(options)) {
							console.log('alipay');
							//钱包下hack未登录问题（主要针对未绑定淘宝账户的用户）
							if (url.needLogin && !mtop.isLogin()) {
								self.goLogin();
								return;
							}
	
							var _alipay_mtop = function _alipay_mtop() {
								//var _options = S.clone(url);
								var _options = Object.assign({}, url);
	
								//适配钱包mtop配置
								_options.apiName = _options.api;
								delete _options.api;
								_options.apiVersion = _options.v;
								delete _options.v;
								_options.needEcodeSign = _options.needLogin;
								delete _options.needLogin;
								//人机识别
								_options.needWua = _options.issec > 0;
								_options.isNeedWua = _options.issec > 0;
	
								AlipayJSBridge.call('mtop', _options, function (data) {
									data = typeof data === 'string' ? JSON.parse(data) : data;
									window[callbackName] && window[callbackName].call(this, data);
								});
							};
							alipayCall(_alipay_mtop);
							return;
						}
	
						//手淘(IOS:version>=5.2.9，Android:version>=5.2.12) 使用native代理mtop请求
						//淘宝和天猫都用的WindVane
						if (url.useNative && (this.container.isTaobao || this.container.isTmall) && this.useNative(options)) {
							console.log('taobao');
							//var params = S.clone(url);
							var params = Object.assign({}, url);
	
							//返回的数据类型(适配mtop sdk)
							if (params.type === 'originaljsonp') {
								params.type = 'originaljson';
							}
							if (params.type === 'jsonp') {
								params.type = 'json';
							}
							//业务参数
							params.param = url.data;
							delete params.data;
							//签名
							params.ecode = params.needLogin ? '1' : '0';
							//请求的 API 需要登录，自动登录，登录失败则拉起登录界面
							if (params.needLogin) {
								params.sessionOption = 'AutoLoginAndManualLogin';
							}
							delete params.needLogin;
							//人机识别(黑匣子)
							if (params.issec) {
								params.isSec = params.issec;
							}
	
							//发送网络请求的超时时间（毫秒），如果在指定时间内网络请求没有回来，则自动走缓存；如果没有缓存，则返回超时错误。-1 或不传表示不设置超时，总是会等待网络请求。
							params.timer = params.timeout;
	
							//向客户端发送协议
							var _callback = function _callback(data) {
								data = typeof data === 'string' ? JSON.parse(data) : data;
								window[callbackName] && window[callbackName].call(this, data);
							};
							window.WindVane.call('MtopWVPlugin', 'send', params, function (data) {
								_callback(data);
							}, function (data) {
								_callback(data);
							});
							return;
						}
	
						console.log('h5');
						script.src = url.replace('callback=jsonpCallback', 'callback=' + callbackName);
						script.sync = true;
						script.onerror = function () {
							cleanup('ABORT');
						};
						document.getElementsByTagName('head')[0].appendChild(script);
					},
	
					md5: function () {
						var e = function e(_e, t) {
							return _e << t | _e >>> 32 - t;
						},
						    t = function t(e, _t) {
							var n, r, i, s, o;
							return i = e & 2147483648, s = _t & 2147483648, n = e & 1073741824, r = _t & 1073741824, o = (e & 1073741823) + (_t & 1073741823), n & r ? o ^ 2147483648 ^ i ^ s : n | r ? o & 1073741824 ? o ^ 3221225472 ^ i ^ s : o ^ 1073741824 ^ i ^ s : o ^ i ^ s;
						},
						    n = function n(e, t, _n) {
							return e & t | ~e & _n;
						},
						    r = function r(e, t, n) {
							return e & n | t & ~n;
						},
						    i = function i(e, t, n) {
							return e ^ t ^ n;
						},
						    s = function s(e, t, n) {
							return t ^ (e | ~n);
						},
						    o = function o(r, i, s, _o, u, a, f) {
							return r = t(r, t(t(n(i, s, _o), u), f)), t(e(r, a), i);
						},
						    u = function u(n, i, s, o, _u, a, f) {
							return n = t(n, t(t(r(i, s, o), _u), f)), t(e(n, a), i);
						},
						    a = function a(n, r, s, o, u, _a, f) {
							return n = t(n, t(t(i(r, s, o), u), f)), t(e(n, _a), r);
						},
						    f = function f(n, r, i, o, u, a, _f) {
							return n = t(n, t(t(s(r, i, o), u), _f)), t(e(n, a), r);
						},
						    l = function l(e) {
							var t,
							    n = e.length,
							    r = n + 8,
							    i = (r - r % 64) / 64,
							    s = (i + 1) * 16,
							    o = new Array(s - 1),
							    u = 0,
							    a = 0;
							while (a < n) {
								t = (a - a % 4) / 4, u = a % 4 * 8, o[t] = o[t] | e.charCodeAt(a) << u, a++;
							}return t = (a - a % 4) / 4, u = a % 4 * 8, o[t] = o[t] | 128 << u, o[s - 2] = n << 3, o[s - 1] = n >>> 29, o;
						},
						    c = function c(e) {
							var t = "",
							    n = "",
							    r,
							    i;
							for (i = 0; i <= 3; i++) {
								r = e >>> i * 8 & 255, n = "0" + r.toString(16), t += n.substr(n.length - 2, 2);
							}return t;
						},
						    h = function h(e) {
							e = e.replace(/\r\n/g, "\n");
							var t = "";
							for (var n = 0; n < e.length; n++) {
								var r = e.charCodeAt(n);
								r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(r & 63 | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(r & 63 | 128));
							}
							return t;
						},
						    p = function p(e) {
							var n = [],
							    r,
							    i,
							    s,
							    p,
							    d,
							    v,
							    m,
							    g,
							    y,
							    b = 7,
							    w = 12,
							    E = 17,
							    S = 22,
							    x = 5,
							    T = 9,
							    N = 14,
							    C = 20,
							    k = 4,
							    L = 11,
							    A = 16,
							    O = 23,
							    M = 6,
							    _ = 10,
							    D = 15,
							    P = 21;
							e = h(e), n = l(e), v = 1732584193, m = 4023233417, g = 2562383102, y = 271733878;
							for (r = 0; r < n.length; r += 16) {
								i = v, s = m, p = g, d = y, v = o(v, m, g, y, n[r + 0], b, 3614090360), y = o(y, v, m, g, n[r + 1], w, 3905402710), g = o(g, y, v, m, n[r + 2], E, 606105819), m = o(m, g, y, v, n[r + 3], S, 3250441966), v = o(v, m, g, y, n[r + 4], b, 4118548399), y = o(y, v, m, g, n[r + 5], w, 1200080426), g = o(g, y, v, m, n[r + 6], E, 2821735955), m = o(m, g, y, v, n[r + 7], S, 4249261313), v = o(v, m, g, y, n[r + 8], b, 1770035416), y = o(y, v, m, g, n[r + 9], w, 2336552879), g = o(g, y, v, m, n[r + 10], E, 4294925233), m = o(m, g, y, v, n[r + 11], S, 2304563134), v = o(v, m, g, y, n[r + 12], b, 1804603682), y = o(y, v, m, g, n[r + 13], w, 4254626195), g = o(g, y, v, m, n[r + 14], E, 2792965006), m = o(m, g, y, v, n[r + 15], S, 1236535329), v = u(v, m, g, y, n[r + 1], x, 4129170786), y = u(y, v, m, g, n[r + 6], T, 3225465664), g = u(g, y, v, m, n[r + 11], N, 643717713), m = u(m, g, y, v, n[r + 0], C, 3921069994), v = u(v, m, g, y, n[r + 5], x, 3593408605), y = u(y, v, m, g, n[r + 10], T, 38016083), g = u(g, y, v, m, n[r + 15], N, 3634488961), m = u(m, g, y, v, n[r + 4], C, 3889429448), v = u(v, m, g, y, n[r + 9], x, 568446438), y = u(y, v, m, g, n[r + 14], T, 3275163606), g = u(g, y, v, m, n[r + 3], N, 4107603335), m = u(m, g, y, v, n[r + 8], C, 1163531501), v = u(v, m, g, y, n[r + 13], x, 2850285829), y = u(y, v, m, g, n[r + 2], T, 4243563512), g = u(g, y, v, m, n[r + 7], N, 1735328473), m = u(m, g, y, v, n[r + 12], C, 2368359562), v = a(v, m, g, y, n[r + 5], k, 4294588738), y = a(y, v, m, g, n[r + 8], L, 2272392833), g = a(g, y, v, m, n[r + 11], A, 1839030562), m = a(m, g, y, v, n[r + 14], O, 4259657740), v = a(v, m, g, y, n[r + 1], k, 2763975236), y = a(y, v, m, g, n[r + 4], L, 1272893353), g = a(g, y, v, m, n[r + 7], A, 4139469664), m = a(m, g, y, v, n[r + 10], O, 3200236656), v = a(v, m, g, y, n[r + 13], k, 681279174), y = a(y, v, m, g, n[r + 0], L, 3936430074), g = a(g, y, v, m, n[r + 3], A, 3572445317), m = a(m, g, y, v, n[r + 6], O, 76029189), v = a(v, m, g, y, n[r + 9], k, 3654602809), y = a(y, v, m, g, n[r + 12], L, 3873151461), g = a(g, y, v, m, n[r + 15], A, 530742520), m = a(m, g, y, v, n[r + 2], O, 3299628645), v = f(v, m, g, y, n[r + 0], M, 4096336452), y = f(y, v, m, g, n[r + 7], _, 1126891415), g = f(g, y, v, m, n[r + 14], D, 2878612391), m = f(m, g, y, v, n[r + 5], P, 4237533241), v = f(v, m, g, y, n[r + 12], M, 1700485571), y = f(y, v, m, g, n[r + 3], _, 2399980690), g = f(g, y, v, m, n[r + 10], D, 4293915773), m = f(m, g, y, v, n[r + 1], P, 2240044497), v = f(v, m, g, y, n[r + 8], M, 1873313359), y = f(y, v, m, g, n[r + 15], _, 4264355552), g = f(g, y, v, m, n[r + 6], D, 2734768916), m = f(m, g, y, v, n[r + 13], P, 1309151649), v = f(v, m, g, y, n[r + 4], M, 4149444226), y = f(y, v, m, g, n[r + 11], _, 3174756917), g = f(g, y, v, m, n[r + 2], D, 718787259), m = f(m, g, y, v, n[r + 9], P, 3951481745), v = t(v, i), m = t(m, s), g = t(g, p), y = t(y, d);
							}var H = c(v) + c(m) + c(g) + c(y);
							return H.toLowerCase();
						};
						return p;
					}()
				};
	
				//result 标准化处理
				var resultHandler = function resultHandler(result) {
					result = result || {};
					//规范服务端返回结果，如返回格式有误，抛出异常
					try {
						var ret = result.ret[0].split('::'),
						    data = result.data,
						    code = ret[0],
						    message = ret[1] && ret[1].split('##').pop() || '';
					} catch (e) {
	
						return {
							//返回状态码
							code: 'FAIL_RET_DATA_ERROR',
							//返回状态，如'success'、'warn'、'failed'
							status: 'FAIL_RET_DATA_ERROR',
							//局限当前返回，便于业务逻辑处理
							isSuccess: false,
							//明文，对用户可视
							message: '请求异常',
							//返回数据
							data: null
						};
					}
	
					//TODO,用code码与status标记状态更通用，便于状态扩展
					return {
						api: result.api,
						v: result.v,
						//返回状态码
						code: code,
						//返回状态，如'success'、'warn'、'failed'
						status: code,
						//局限当前返回，便于业务逻辑处理
						isSuccess: code === 'SUCCESS',
						//明文，对用户可视
						message: message,
						//返回数据
						data: data
					};
				};
	
				/**
	    * 全局埋点处理逻辑,如果有LK,放入全局变量,埋点请求均带上此值
	    * @param data
	    */
				function configPrism(data) {
					if (typeof data._prism_lk !== 'undefined') {
						window._prism_lk = data._prism_lk;
					}
				}
	
				/**
	    * 请求MTOP时,如果有_lk的埋点,则带上
	    * @param data
	    * @returns {*}
	    */
				function insertPrism(data) {
					if (typeof window._prism_lk !== 'undefined' && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
						data._prism_lk = JSON.stringify(window._prism_lk);
					}
					return data;
				}
	
				var mtop = {
	
					Util: Util,
	
					name: 'h5ApiUpdate.do',
	
					/**
	     * 保存所有历史请求信息
	     * */
					history: requestHistory,
	
					/**
	     * 请求接口服务，返回promise对象
	     * @param options
	     * @returns {promise|*|defer.promise|Q.promise}
	     */
					request: function request(options, $q) {
						$q = $q || _q2.default;
						var deferred = $q.defer();
	
						//mtop接口业务相关配置
						var api = options.api || options.url,
						    v = options.v || options.version,
						   
	
						//业务参数
						data = options.data || {},
						   
	
						//配置mtop请求的相关参数。默认为标准数据类型返回，如无特殊需求，统一以此格式返回。
						//  params = S.mix({
						//    type: 'originaljsonp'
						//  }, options.params || {});
						params = Object.assign({
							type: 'originaljsonp'
						}, options.params || {});
	
						//默认使用native代理mtop请求（native的SPDY比http1.1性能好很多，目前webView http2.0未启用）
						params.useNative = params.useNative === undefined ? true : params.useNative;
	
						//暂无notify状态跟踪
						var request = this.getApi(api, v, data, params, function (result) {
							var _result = resultHandler(result);
	
							if (_result.isSuccess) {
								deferred.resolve(_result);
	
								//返回异常
							} else {
									deferred.reject(_result);
								}
	
							//请求异常
						}, function (result) {
							var _result = resultHandler(result);
	
							deferred.reject(_result);
						});
	
						// 将request对象挂载到promise上
						deferred.promise.request = request;
	
						return deferred.promise;
					},
					//手动取消所有请求，慎用，会取消所有的请求
					abortAll: function abortAll() {
						for (var r in requestHistory) {
							if (requestHistory[r].status !== 'complete') {
								requestHistory[r].abort();
							}
						}
					},
					getApi: function getApi(apiName, apiVersion, data, params, success, failture) {
						params = params || {};
	
						data = insertPrism(data);
	
						var options = {
							api: apiName,
							v: apiVersion,
							data: data
						};
						//S.mix(options, params);
						Object.assign(options, params);
	
						// 设置options.uid
						options.uid = randomUID();
						//配置数据返回类型，默认为标准数据类型返回
						options.type = params.type || 'originaljsonp';
						//默认使用native代理mtop请求（native的SPDY比http1.1性能好很多，目前webView http2.0未启用）
						options.useNative = params.useNative === undefined ? true : params.useNative;
						//针对App定制化配置是否代理(钱包与手淘默认不代理)
						options.alipay = params.alipay === undefined ? false : params.alipay;
						options.taobao = params.taobao === undefined ? false : params.taobao;
						options.alitrip = params.alitrip === undefined ? true : params.alitrip;
						//等待mtop请求返回阈值(超时设置)，默认20秒。目前mtop平台接口超时设置为15秒
						options.timeout = options.timeout || 20000;
	
						/*------------------------------------*\
	      # 将每次请求的信息保存下来
	      \*------------------------------------*/
	
						var request = {
							// todo: 可以把一个mtop请求的timeline都保存在这里，在complete的时候再发送埋点
							timeline: {
								startTime: +new Date() // 调用mtop的时间
							},
							uid: options.uid
						};
	
						requestHistory[options.uid] = request;
	
						Util.request(options, success, failture);
	
						return request;
					},
					//是否登录，同步方法，在cookie未种上的情况下登陆状态可能有误
					//用户信息相关cookie会在mtop或服务端应用请求返回时种上
					isLogin: function isLogin() {
						return !!this.getNickFromCookie();
					},
					//是否登陆，异步方法，请尽量使用该方法获取登陆态
					isLoginAsync: function () {
						//以下三个参数配合mtop.loginAsync方法使用，主要用于H5页面异步同步登陆态
						//首次请求生成的promise
						var loginAsyncDeferred = _q2.default.defer();
						//异步登陆信息回调函数队列
						var isLoginArray = [];
						//标志异步登陆信息是否已刷新完成
						var isLoginRefresh = false;
	
						return function (callback, context) {
							var t = this;
							//已完成登陆态同步、所处域名非alitrip 情况下，不作登陆态同步操作
							if (isLoginRefresh || location.href.indexOf('.alitrip.') == -1 || _jsbridge2.default.isAlitrip) {
								callback && callback.call(context || t, t.isLogin());
								loginAsyncDeferred.resolve(t.isLogin());
							} else {
								//第一次调用
								if (!isLoginArray.length) {
									window.__loginAsync = function (status) {
										isLoginRefresh = true;
										//S.each(isLoginArray, function (item) {
										//  item.callback && item.callback.call(item.context || t, t.isLogin(), status);
										//  loginAsyncDeferred.resolve(t.isLogin(), status);
										//});
										isLoginArray.forEach(function (item) {
											item.callback && item.callback.call(item.context || t, t.isLogin(), status);
											loginAsyncDeferred.resolve(t.isLogin(), status);
										});
									};
	
									var script = document.createElement('script');
									script.src = 'https://login.taobao.com/jump?target=https%3a%2f%2fwww.alitrip.com%2fgo%2frgn%2ftrip%2falitrip_tbpass_jump.php';
									script.sync = true;
									script.onerror = function () {
										window.__loginAsync.call(t, 'error');
									};
									document.getElementsByTagName('head')[0].appendChild(script);
								}
	
								isLoginArray.push({
									callback: callback,
									context: context
								});
							}
	
							return loginAsyncDeferred.promise;
						};
					}(),
					//获取用户名
					getNickFromCookie: function getNickFromCookie() {
						var nick = '',
						   
	
						//PC与无线会统一使用_nk_ @水寒（去啊app内登录后，会将_nk_ || _w_tb_nick信息植入cookie）
						//h5.m.taobao.com（去啊app内登录后，会将_w_tb_nick信息植入cookie）
						wapnick = Util.getCookie('_w_tb_nick'),
						   
	
						//taobao.com
						tbnick = Util.getCookie('_nk_') || Util.getCookie('snk');
	
						if (wapnick && wapnick.length > 0 && wapnick != 'null') {
							// 中文会encode，需要decode
							nick = decodeURIComponent(wapnick);
						} else if (tbnick && tbnick.length > 0 && tbnick != 'null') {
							// todo: ECMAScript v3 已从标准中删除了 unescape() 函数，并反对使用它，因此应该用 decodeURI() 和 decodeURIComponent() 取而代之。
							nick = unescape(unescape(tbnick).replace(/\\u/g, '%u'));
						}
	
						return nick;
					},
					/**
	     * @description 新-获取用户名
	     * @returns {promise|*|defer.promise|Q.promise}
	     */
					getNick: function getNick() {
						var self = this,
						    deferred = _q2.default.defer();
	
						if (Util.container.isAlipay) {
							var _alipay_getConfig = function _alipay_getConfig() {
								//优先从cookie取（钱包9.5后有域cookie可用）
								var nick = self.getNickFromCookie();
								if (nick) {
									deferred.resolve(nick);
								} else {
									//钱包获取uuid，version >= 8.3
									AlipayJSBridge.call('getConfig', {
										configKeys: ['uuid']
									}, function (result) {
										try {
											deferred.resolve(result.data.uuid);
										} catch (e) {
											deferred.reject('AlipayJSBridge get uuid failed.');
										}
									});
								}
							};
							alipayCall(_alipay_getConfig);
						} else {
							var nick = '',
							   
	
							//h5.m.taobao.com
							wapnick = Util.getCookie('_w_tb_nick'),
							   
	
							//taobao.com
							tbnick = Util.getCookie('_nk_') || Util.getCookie('snk');
	
							if (wapnick && wapnick.length > 0 && wapnick != 'null') {
								// 中文会encode，需要decode
								nick = decodeURIComponent(wapnick);
							} else if (tbnick && tbnick.length > 0 && tbnick != 'null') {
								nick = unescape(unescape(tbnick).replace(/\\u/g, '%u'));
							}
	
							if (nick) {
								deferred.resolve(nick);
							} else {
								deferred.reject(null);
							}
						}
	
						return deferred.promise;
					},
					/**
	     * @method loginedRequest
	     * @param {Object} apiParam   mtop接口的入参
	     * @param {String} apiParam.api  对应的mtop api
	     * @param {String} apiParam.v    api版本
	     * @param {Object} apiParam.data   mtop接口的入参
	     * @param {Object} apiParam.extParam   额外的参数
	     * @param {Object} callback 回调对象
	     * @param {Function} callback.succ 成功的回调
	     * @param {Function} callback.fail 失败的回调
	     * @param {Function} callback.beforeLogin  跳到登录前的回调
	     * @see request
	     */
					loginedRequest: function loginedRequest(apiParam, succ, fail, beforeLogin) {
						if (succ && typeof succ !== 'function') {
							beforeLogin = succ.beforeLogin;
							fail = succ.fail;
							succ = succ.succ;
						}
	
						var popLogin = function popLogin() {
							if (apiParam.retryed) {
								fail.call(null, {
									errcode: "NOT_LOGINED",
									message: "该页面需要登录，请刷新重试!"
								});
							} else {
								beforeLogin && beforeLogin.call();
								Util.goLogin();
							}
						};
	
						apiParam.useNative = typeof apiParam.useNative === 'undefined' ? true : apiParam.useNative;
	
						//如果需要
						if (apiParam.useNative && Util.useNative(options)) {
							apiParam.needLogin = true;
						} else {
	
							if (!this.isLogin()) {
								popLogin();
								return;
							}
						}
	
						//等待mtop请求返回阀值(超时设置)，默认20秒。目前mtop平台接口超时设置为15秒
						apiParam.timeout = apiParam.timeout || 20000;
	
						Util.request(apiParam, succ, fail);
					},
					executeCall: function executeCall() {
						if (!requestQueue.length) {
							return;
						}
						var args = requestQueue.shift();
						Util.sendRequest.apply(Util, args);
					},
					goLogin: Util.goLogin,
					version: "0.2.3"
				};
	
				//默认同步一次登陆态
				mtop.isLoginAsync();
	
				module.exports = mtop;
	
				if (window.KISSY && KISSY.add) {
					KISSY.add('mtop/index', function () {
						return mtop;
					});
				}
	
				/***/
			},
			/* 1 */
			/***/function (module, exports) {
	
				module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
				/***/
			},
			/* 2 */
			/***/function (module, exports) {
	
				module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
				/***/
			},
			/* 3 */
			/***/function (module, exports) {
	
				module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
				/***/
			},
			/* 4 */
			/***/function (module, exports) {
	
				/*** IMPORTS FROM imports-loader ***/
				(function () {
	
					//pointman 2.0.0
					(function (global, undefined) {
						'use strict';
						// Avoid conflicting when `pointman.js` is loaded multiple times
	
						if (global.pointman) {
							return;
						}
	
						var pointman = global.pointman = {
							version: '2.0.0'
						};
	
						var data = pointman.data = {};
	
						/**
	      * util-lang.js - The minimal language enhancement
	      */
	
						function isType(type) {
							return function (obj) {
								return {}.toString.call(obj) == '[object ' + type + ']';
							};
						}
						/**
	      * Dispatch an event with props to el
	      */
						function dispatchEvent(el, eventType, props) {
							var event = document.createEvent('Events');
							var bubbles = true;
							if (props) {
								for (var name in props) {
									if ({}.hasOwnProperty.call(props, name)) {
										name === 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
									}
								}
							}
							event.initEvent(eventType, bubbles, true);
							el.dispatchEvent(event);
						}
	
						var isObject = isType('Object');
						var isString = isType('String');
						var isArray = Array.isArray || isType('Array');
						var isFunction = isType('Function');
	
						var _cid = 0;
	
						function cid() {
							return _cid++;
						}
	
						/**
	      * util-events.js - The minimal events support
	      */
	
						var events = data.events = {};
	
						// Bind event
						pointman.on = function (name, callback) {
							var list = events[name] || (events[name] = []);
							list.push(callback);
							return pointman;
						};
	
						// Remove event. If `callback` is undefined, remove all callbacks for the
						// event. If `event` and `callback` are both undefined, remove all callbacks
						// for all events
						pointman.off = function (name, callback) {
							// Remove *all* events
							if (!(name || callback)) {
								events = data.events = {};
								return pointman;
							}
	
							var list = events[name];
							if (list) {
								if (callback) {
									for (var i = list.length - 1; i >= 0; i--) {
										if (list[i] === callback) {
											list.splice(i, 1);
										}
									}
								} else {
									delete events[name];
								}
							}
	
							return pointman;
						};
	
						/**
	      * util-path.js - The utilities for operating path such as id, uri
	      */
	
						var DIRNAME_RE = /[^?#]*\//;
	
						var DOT_RE = /\/\.\//g;
						var DOUBLE_DOT_RE = /\/[^/]+\/\.\.\//;
						var MULTI_SLASH_RE = /([^:/])\/+\//g;
	
						// Extract the directory portion of a path
						// dirname('a/b/c.js?t=123#xx/zz') ==> 'a/b/'
						// ref: http://jsperf.com/regex-vs-split/2
						function dirname(path) {
							return path.match(DIRNAME_RE)[0];
						}
	
						// Canonicalize a path
						// realpath('http://test.com/a//./b/../c') ==> 'http://test.com/a/c'
						function realpath(path) {
							// /a/b/./c/./d ==> /a/b/c/d
							path = path.replace(DOT_RE, '/');
	
							/*
	        @author wh1100717
	        a//b/c ==> a/b/c
	        a///b/////c ==> a/b/c
	        DOUBLE_DOT_RE matches a/b/c//../d path correctly only if replace // with / first
	      */
							path = path.replace(MULTI_SLASH_RE, '$1/');
	
							// a/b/c/../../d  ==>  a/b/../d  ==>  a/d
							while (path.match(DOUBLE_DOT_RE)) {
								path = path.replace(DOUBLE_DOT_RE, '/');
							}
	
							return path;
						}
	
						// Normalize an id
						// normalize('path/to/a') ==> 'path/to/a.js'
						// NOTICE: substring is faster than negative slice and RegExp
						function normalize(path) {
							var last = path.length - 1;
							var lastC = path.charAt(last);
	
							// If the uri ends with `#`, just return it without '#'
							if (lastC === '#') {
								return path.substring(0, last);
							}
	
							return path.substring(last - 2) === '.js' || path.indexOf('?') > 0 || lastC === '/' ? path : path + '.js';
						}
	
						var PATHS_RE = /^([^/:]+)(\/.+)$/;
						var VARS_RE = /{([^{]+)}/g;
	
						function parseAlias(id) {
							var alias = data.alias;
							return alias && isString(alias[id]) ? alias[id] : id;
						}
	
						function parsePaths(id) {
							var paths = data.paths;
							var m;
	
							if (paths && (m = id.match(PATHS_RE)) && isString(paths[m[1]])) {
								id = paths[m[1]] + m[2];
							}
	
							return id;
						}
	
						function parseVars(id) {
							var vars = data.vars;
	
							if (vars && id.indexOf('{') > -1) {
								id = id.replace(VARS_RE, function (m, key) {
									return isString(vars[key]) ? vars[key] : m;
								});
							}
	
							return id;
						}
	
						function parseMap(uri) {
							var map = data.map;
							var ret = uri;
	
							if (map) {
								for (var i = 0, len = map.length; i < len; i++) {
									var rule = map[i];
	
									ret = isFunction(rule) ? rule(uri) || uri : uri.replace(rule[0], rule[1]);
	
									// Only apply the first matched rule
									if (ret !== uri) {
										break;
									}
								}
							}
	
							return ret;
						}
	
						var ABSOLUTE_RE = /^\/\/.|:\//;
						var ROOT_DIR_RE = /^.*?\/\/.*?\//;
	
						function addBase(id, refUri) {
							var ret;
							var first = id.charAt(0);
	
							// Absolute
							if (ABSOLUTE_RE.test(id)) {
								ret = id;
							}
							// Relative
							else if (first === '.') {
									ret = realpath((refUri ? dirname(refUri) : data.cwd) + id);
								}
								// Root
								else if (first === '/') {
										var m = data.cwd.match(ROOT_DIR_RE);
										ret = m ? m[0] + id.substring(1) : id;
									}
									// Top-level
									else {
											ret = data.base + id;
										}
	
							// Add default protocol when uri begins with '//'
							if (ret.indexOf('//') === 0) {
								ret = location.protocol + ret;
							}
	
							return ret;
						}
	
						function id2Uri(id, refUri) {
							if (!id) {
								return '';
							}
	
							id = parseAlias(id);
							id = parsePaths(id);
							id = parseVars(id);
							id = normalize(id);
	
							var uri = addBase(id, refUri);
							uri = parseMap(uri);
	
							return uri;
						}
	
						var doc = document;
						var cwd = !location.href || location.href.indexOf('about:') === 0 ? '' : dirname(location.href);
						var scripts = doc.scripts;
	
						// Recommend to add `pointmannode` id for the `sea.js` script element
						var loaderScript = doc.getElementById('pointmannode') || scripts[scripts.length - 1];
	
						function getScriptAbsoluteSrc(node) {
							return node.hasAttribute ? // non-IE6/7
							node.src :
							// see http://msdn.microsoft.com/en-us/library/ms536429(VS.85).aspx
							node.getAttribute('src', 4);
						}
	
						// When `sea.js` is inline, set loaderDir to current working directory
						var loaderDir = dirname(getScriptAbsoluteSrc(loaderScript) || cwd);
	
						// For Developers
						pointman.resolve = id2Uri;
	
						/**
	      * util-request.js - The utilities for requesting script and style files
	      * ref: tests/research/load-js-css/test.html
	      */
	
						var head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;
						var baseElement = head.getElementsByTagName('base')[0];
	
						var currentlyAddingScript;
						var interactiveScript;
	
						function request(url, callback, charset) {
							var node = doc.createElement('script');
	
							if (charset) {
								var cs = isFunction(charset) ? charset(url) : charset;
								if (cs) {
									node.charset = cs;
								}
							}
	
							addOnload(node, callback, url);
	
							node.async = true;
							node.src = url;
	
							// For some cache cases in IE 6-8, the script executes IMMEDIATELY after
							// the end of the insert execution, so use `currentlyAddingScript` to
							// hold current node, for deriving url in `define` call
							currentlyAddingScript = node;
	
							// ref: #185 & http://dev.jquery.com/ticket/2709
							baseElement ? head.insertBefore(node, baseElement) : head.appendChild(node);
	
							currentlyAddingScript = null;
						}
	
						function addOnload(node, callback, url) {
							var supportOnload = 'onload' in node;
	
							function onload() {
								// Ensure only run once and handle memory leak in IE
								node.onload = node.onerror = node.onreadystatechange = null;
	
								// Remove the script to reduce memory leak
								if (!data.debug) {
									head.removeChild(node);
								}
	
								// Dereference the node
								node = null;
	
								callback();
							}
	
							if (supportOnload) {
								node.onload = onload;
								node.onerror = function () {
									onload();
								};
							} else {
								node.onreadystatechange = function () {
									if (/loaded|complete/.test(node.readyState)) {
										onload();
									}
								};
							}
						}
	
						function getCurrentScript() {
							if (currentlyAddingScript) {
								return currentlyAddingScript;
							}
	
							// For IE6-9 browsers, the script onload event may not fire right
							// after the script is evaluated. Kris Zyp found that it
							// could query the script nodes and the one that is in 'interactive'
							// mode indicates the current script
							// ref: http://goo.gl/JHfFW
							if (interactiveScript && interactiveScript.readyState === 'interactive') {
								return interactiveScript;
							}
	
							var scripts = head.getElementsByTagName('script');
	
							for (var i = scripts.length - 1; i >= 0; i--) {
								var script = scripts[i];
								if (script.readyState === 'interactive') {
									interactiveScript = script;
									return interactiveScript;
								}
							}
						}
	
						// For Developers
						pointman.request = request;
	
						/**
	      * util-deps.js - The parser for dependencies
	      * ref: tests/research/parse-dependencies/test.html
	      */
	
						var REQUIRE_RE = /'(?:\\'|[^'])*'|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*([''])(.+?)\1\s*\)/g;
						var SLASH_RE = /\\\\/g;
	
						function parseDependencies(code) {
							var ret = [];
	
							code.replace(SLASH_RE, '').replace(REQUIRE_RE, function (m, m1, m2) {
								if (m2) {
									ret.push(m2);
								}
							});
	
							return ret;
						}
	
						/**
	      * module.js - The core of module loader
	      */
	
						var cachedMods = pointman.cache = {};
						var anonymousMeta;
	
						var fetchingList = {};
						var fetchedList = {};
						var callbackList = {};
	
						var STATUS = Module.STATUS = {
							// 1 - The `module.uri` is being fetched
							FETCHING: 1,
							// 2 - The meta data has been saved to cachedMods
							SAVED: 2,
							// 3 - The `module.dependencies` are being loaded
							LOADING: 3,
							// 4 - The module are ready to execute
							LOADED: 4,
							// 5 - The module is being executed
							EXECUTING: 5,
							// 6 - The `module.exports` is available
							EXECUTED: 6
						};
	
						function Module(uri, deps) {
							this.uri = uri;
							this.dependencies = deps || [];
							this.exports = null;
							this.status = 0;
	
							// Who depends on me
							this._waitings = {};
	
							// The number of unloaded dependencies
							this._remain = 0;
						}
	
						// Resolve module.dependencies
						Module.prototype.resolve = function () {
							var mod = this;
							var ids = mod.dependencies;
							var uris = [];
	
							for (var i = 0, len = ids.length; i < len; i++) {
								uris[i] = Module.resolve(ids[i], mod.uri);
							}
							return uris;
						};
	
						// Load module.dependencies and fire onload when all done
						Module.prototype.load = function () {
							var mod = this;
	
							// If the module is being loaded, just wait it onload call
							if (mod.status >= STATUS.LOADING) {
								return;
							}
	
							mod.status = STATUS.LOADING;
	
							// Emit `load` event for plugins such as combo plugin
							var uris = mod.resolve();
	
							var len = mod._remain = uris.length;
							var m;
	
							// Initialize modules and register waitings
							for (var i = 0; i < len; i++) {
								m = Module.get(uris[i]);
	
								if (m.status < STATUS.LOADED) {
									// Maybe duplicate: When module has dupliate dependency, it should be it's count, not 1
									m._waitings[mod.uri] = (m._waitings[mod.uri] || 0) + 1;
								} else {
									mod._remain--;
								}
							}
	
							if (mod._remain === 0) {
								mod.onload();
								return;
							}
	
							// Begin parallel loading
							var requestCache = {};
	
							for (i = 0; i < len; i++) {
								m = cachedMods[uris[i]];
	
								if (m.status < STATUS.FETCHING) {
									m.fetch(requestCache);
								} else if (m.status === STATUS.SAVED) {
									m.load();
								}
							}
	
							// Send all requests at last to avoid cache bug in IE6-9. Issues#808
							for (var requestUri in requestCache) {
								if (requestCache.hasOwnProperty(requestUri)) {
									requestCache[requestUri]();
								}
							}
						};
	
						// Call this method when module is loaded
						Module.prototype.onload = function () {
							var mod = this;
							mod.status = STATUS.LOADED;
	
							if (mod.callback) {
								mod.callback();
							}
	
							// Notify waiting modules to fire onload
							var waitings = mod._waitings;
							var uri, m;
	
							for (uri in waitings) {
								if (waitings.hasOwnProperty(uri)) {
									m = cachedMods[uri];
									m._remain -= waitings[uri];
									if (m._remain === 0) {
										m.onload();
									}
								}
							}
	
							// Reduce memory taken
							delete mod._waitings;
							delete mod._remain;
						};
	
						// Fetch a module
						Module.prototype.fetch = function (requestCache) {
							var mod = this;
							var uri = mod.uri;
	
							mod.status = STATUS.FETCHING;
	
							// Emit `fetch` event for plugins such as combo plugin
							var emitData = {
								uri: uri
							};
							var requestUri = emitData.requestUri || uri;
	
							// Empty uri or a non-CMD module
							if (!requestUri || fetchedList[requestUri]) {
								mod.load();
								return;
							}
	
							if (fetchingList[requestUri]) {
								callbackList[requestUri].push(mod);
								return;
							}
	
							fetchingList[requestUri] = true;
							callbackList[requestUri] = [mod];
	
							// Emit `request` event for plugins such as text plugin
							emitData = {
								uri: uri,
								requestUri: requestUri,
								onRequest: onRequest,
								charset: data.charset
							};
	
							if (!emitData.requested) {
								requestCache ? requestCache[emitData.requestUri] = sendRequest : sendRequest();
							}
	
							function sendRequest() {
								pointman.request(emitData.requestUri, emitData.onRequest, emitData.charset);
							}
	
							function onRequest() {
								delete fetchingList[requestUri];
								fetchedList[requestUri] = true;
	
								// Save meta data of anonymous module
								if (anonymousMeta) {
									Module.save(uri, anonymousMeta);
									anonymousMeta = null;
								}
	
								// Call callbacks
								var m,
								    mods = callbackList[requestUri];
								delete callbackList[requestUri];
								while (m = mods.shift()) {
									m.load();
								}
							}
						};
	
						// Execute a module
						Module.prototype.exec = function () {
							var mod = this;
	
							// When module is executed, DO NOT execute it again. When module
							// is being executed, just return `module.exports` too, for avoiding
							// circularly calling
							if (mod.status >= STATUS.EXECUTING) {
								return mod.exports;
							}
	
							mod.status = STATUS.EXECUTING;
							mod.config = data.modConfig && data.modConfig[mod.id];
	
							// Create require
							var uri = mod.uri;
	
							function require(id) {
								return Module.get(require.resolve(id)).exec();
							}
	
							require.resolve = function (id) {
								return Module.resolve(id, uri);
							};
	
							require.async = function (ids, callback) {
								Module.use(ids, callback, uri + '_async_' + cid());
								return require;
							};
	
							// Exec factory
							var factory = mod.factory;
	
							var exports = isFunction(factory) ? factory(require, mod.exports = {}, mod) : factory;
	
							if (exports === undefined) {
								exports = mod.exports;
							}
	
							// Reduce memory leak
							delete mod.factory;
	
							mod.exports = exports;
							mod.status = STATUS.EXECUTED;
	
							return exports;
						};
	
						// Resolve id to uri
						Module.resolve = function (id, refUri) {
							// Emit `resolve` event for plugins such as text plugin
							var emitData = {
								id: id,
								refUri: refUri
							};
							return emitData.uri || pointman.resolve(emitData.id, refUri);
						};
	
						// Define a module
						Module.define = function (id, deps, factory) {
							var argsLen = arguments.length;
	
							// define(factory)
							if (argsLen === 1) {
								factory = id;
								id = undefined;
							} else if (argsLen === 2) {
								factory = deps;
	
								// define(deps, factory)
								if (isArray(id)) {
									deps = id;
									id = undefined;
								}
								// define(id, factory)
								else {
										deps = undefined;
									}
							}
	
							// Parse dependencies according to the module factory code
							if (!isArray(deps) && isFunction(factory)) {
								deps = parseDependencies(factory.toString());
							}
	
							var meta = {
								id: id,
								uri: Module.resolve(id),
								deps: deps,
								factory: factory
							};
	
							// Try to derive uri in IE6-9 for anonymous modules
							if (!meta.uri && doc.attachEvent) {
								var script = getCurrentScript();
	
								if (script) {
									meta.uri = script.src;
								}
	
								// NOTE: If the id-deriving methods above is failed, then falls back
								// to use onload event to get the uri
							}
	
							// Emit `define` event, used in nocache plugin, pointman node version etc
							meta.uri ? Module.save(meta.uri, meta) :
							// Save information for 'saving' work in the script onload event
							anonymousMeta = meta;
						};
	
						// Save meta data to cachedMods
						Module.save = function (uri, meta) {
							var mod = Module.get(uri);
	
							// Do NOT override already saved modules
							if (mod.status < STATUS.SAVED) {
								mod.id = meta.id || uri;
								mod.dependencies = meta.deps || [];
								mod.factory = meta.factory;
								mod.status = STATUS.SAVED;
							};
						};
	
						// Get an existed module or create a new one
						Module.get = function (uri, deps) {
							return cachedMods[uri] || (cachedMods[uri] = new Module(uri, deps));
						};
	
						// Use function is equal to load a anonymous module
						Module.use = function (ids, callback, uri) {
							var mod = Module.get(uri, isArray(ids) ? ids : [ids]);
	
							mod.callback = function () {
								var exports = [];
								var uris = mod.resolve();
	
								for (var i = 0, len = uris.length; i < len; i++) {
									exports[i] = cachedMods[uris[i]].exec();
								}
	
								if (callback) {
									callback.apply(global, exports);
								}
	
								delete mod.callback;
							};
	
							mod.load();
						};
	
						// Public API
	
						pointman.use = function (ids, callback) {
							Module.use(ids, callback, data.cwd + '_use_' + cid());
							return pointman;
						};
	
						Module.define.cmd = {};
						pointman.define = Module.define;
	
						// For Developers
	
						pointman.Module = Module;
						data.fetchedList = fetchedList;
						data.cid = cid;
	
						pointman.require = function (id) {
							var mod = Module.get(Module.resolve(id));
							if (mod.status < STATUS.EXECUTING) {
								mod.onload();
								mod.exec();
							}
							return mod.exports;
						};
	
						/**
	      * config.js - The configuration for the loader
	      */
	
						// The root path to use for id2uri parsing
						data.base = loaderDir;
	
						// The loader directory
						data.dir = loaderDir;
	
						// The current working directory
						data.cwd = cwd;
	
						// The charset for requesting files
						data.charset = 'utf-8';
	
						//组件配置
						data.modConfig = {};
						//空闲时加载的组件列表
						var freeItem = [];
	
						function autoInitMod(modItems, callbackItem) {
							for (var i = 0; i < callbackItem.length; i++) {
								var mod = modItems[i];
								var configData = data.modConfig[mod];
	
								if (configData.config && callbackItem[i].init) {
									callbackItem[i].init(configData.config);
								}
							}
						}
	
						pointman.config = function (configData) {
							data.alias = configData.alias;
							data.base = configData.base;
	
							for (var k in configData.modules) {
								var loadAt = configData.modules[k].loadAt;
	
								data.modConfig[k] = configData.modules[k].config || {};
	
								//空闲时加载
								if (loadAt == 'free') {
									freeItem.push(k);
								}
							}
							if (freeItem.length > 0) {
								//window.load后加载freeItem中的文件
								if (window.addEventListener) {
									window.addEventListener('load', function (ev) {
										pointman.use(freeItem, function () {
											autoInitMod(freeItem, arguments);
										});
									}, false);
								} else {
									window.attachEvent('load', function (ev) {
										pointman.use(freeItem, function () {
											autoInitMod(freeItem, arguments);
										});
									});
								}
							}
						};
					})(this);
	
					(function () {
						pointman.config({
							modules: {
								sufei: {
									config: {
										app: 'tb-m',
										version: '2.0.0',
										style: '//g.alicdn.com/sd/pointman/app/mtop/sufei-tb-m.css'
									}
								}
							},
							base: '//g.alicdn.com/sd/pointman/js/'
						});
					})();
	
					pointman.define('mod/emit', function (require, exports, module) {
						'use strict';
	
						var emit = {};
						var events = {};
	
						// Bind event
						emit.on = function (name, callback) {
							var list = events[name] || (events[name] = []);
							list.push(callback);
							return emit;
						};
	
						// Remove event. If `callback` is undefined, remove all callbacks for the
						// event. If `event` and `callback` are both undefined, remove all callbacks
						// for all events
						emit.off = function (name, callback) {
							// Remove *all* events
							if (!(name || callback)) {
								events = {};
								return emit;
							}
	
							var list = events[name];
							if (list) {
								if (callback) {
									for (var i = list.length - 1; i >= 0; i--) {
										if (list[i] === callback) {
											list.splice(i, 1);
										}
									}
								} else {
									delete events[name];
								}
							}
	
							return emit;
						};
	
						// Emit event, firing all bound callbacks. Callbacks receive the same
						// arguments as `emit` does, apart from the event name
						emit.fire = function (name, data) {
							var list = events[name];
	
							if (list) {
								// Copy callback lists to prevent modification
								list = list.slice();
	
								// Execute event callbacks, use index because it's the faster.
								for (var i = 0, len = list.length; i < len; i++) {
									list[i](data);
								}
							}
	
							return emit;
						};
	
						module.exports = emit;
					});
	
					pointman.define('mod/messenger', function (require, exports, module) {
						'use strict';
						//消息分割符
	
						var msgSpliter = '@=_=@';
						//当前窗口
						var currentWin = null;
						//消息来源窗口
						var originWin = null;
						/*
	      * 消息从哪里发过来
	      * fromFrame: 消息从iframe发出
	      * fromParent: 消息从父窗口发出
	      */
						var msgTransfer = null;
						// 已注册事件
						var attachedEvents = [];
						var IE = {
							//Unique Id
							uid: 0,
							//Head Id 当前已处理到的 Id
							hid: -1,
							//发送消息队列
							q: [],
							//发送消息队列定时器
							tm: 0,
							/**
	       * 发送跨域消息
	       * @param {Object} target iframe.contentWindow|parent
	       * @param {String} jsonStr
	       */
							postMessage: function postMessage(target, jsonStr) {
								var uid = ++IE.uid;
								var q = IE.q;
								var item = {
									name: +new Date() + '' + uid + '^' + document.domain + '&' + jsonStr,
									uid: uid,
									target: target
								};
								q.push(item);
								if (!IE.tm) {
									IE.tm = setInterval(function () {
										var q = IE.q;
										if (q.length === 0 || q[0].uid <= IE.hid) {
											return;
										}
										var item = q[0];
										IE.hid = item.uid;
										item.target.name = item.name;
									}, 10);
								}
							},
							/**
	       * window.name 监听方式
	       * @param{Function}handler
	       */
							ListenerMessage: function ListenerMessage(win, handler) {
								var lastName = '';
								var reName = /^(\d+?)\^(.+?)&(.*?)$/;
	
								function onNameChanged() {
									if (!win) {
										return false;
									} else {
										var name = win.name; //=window.name
										//如果和上次不一样，则获取新数据
										if (name !== lastName) {
											// 出队列，
											IE.q.shift();
	
											lastName = name;
											var ms = reName.exec(name);
											if (!ms) {
												return;
											}
	
											//模拟 postMessage event 参数
											handler && handler({
												origin: ms[2],
												data: ms[3]
											});
										}
									}
								}
	
								setInterval(onNameChanged, 10);
							}
						};
	
						function messageHandler(ev) {
							try {
								var data = ev.data.split(msgSpliter);
								var eventType = data[0];
								var msgData = data[1];
								//激活事件
								for (var i = 0, len = attachedEvents.length; i < len; i++) {
									if (attachedEvents[i].event === eventType) {
										attachedEvents[i].callback(msgData);
									}
								}
							} catch (e) {}
						}
	
						module.exports = {
							/*
	       * 使用消息模块前需要先注册窗口，如果需要发送消息需要明确消息传递形式（obj.transfer）
	       * obj.currentWin
	       * obj.originWin
	       * obj.msgTransfer
	       */
							initListener: function initListener(obj) {
								//当前窗口
								currentWin = obj.currentWin;
								//消息来源窗口
								originWin = obj.originWin;
								//消息传递形式
								msgTransfer = obj.msgTransfer;
	
								if (currentWin && originWin && msgTransfer) {
									//在当前窗口上监听postmessage事件
									if (currentWin.postMessage) {
										if (currentWin.addEventListener) {
											currentWin.addEventListener('message', messageHandler, false);
										} else if (currentWin.attachEvent) {
											currentWin.attachEvent('onmessage', messageHandler);
										}
									} else {
										//始终确保在iframe上监听window.name变化
										if (msgTransfer == 'fromFrame') {
											//在父窗口中监听iframe发来的消息
											IE.ListenerMessage(originWin, messageHandler);
										} else {
											//在iframe中监听父窗口发送的消息
											IE.ListenerMessage(currentWin, messageHandler);
										}
									}
								}
							},
							//注册消息
							register: function register(event, callback) {
								attachedEvents.push({
									event: event,
									callback: callback
								});
							},
							/**
	       * 发送消息.
	       * @param {String} obj.type 消息类型.
	       * @param {string} obj.content 消息内容
	       */
							send: function send(obj) {
								//发给目标窗口的数据
								var postData = obj.type + msgSpliter + obj.content;
	
								if (currentWin && originWin && msgTransfer) {
									if (originWin.postMessage) {
										/*
	          * initListener方法注册的是监听函数
	          * 而发送消息与监听消息刚好相反，所以这里需要往originWin发送消息
	          * 支持postmessage时往目标窗口发送消息
	          */
										originWin.postMessage(postData, '*');
									} else {
										//始终确保写iframe的window.name
										if (msgTransfer == 'fromFrame') {
											//在父窗口中监听iframe发来的消息
											IE.postMessage(originWin, postData);
										} else {
											//在iframe中监听父窗口发送的消息
											IE.postMessage(currentWin, postData, '*');
										}
									}
								}
							}
						};
					});
	
					pointman.define('mod/sufei-kissymini-mtop', function (require, exports, module) {
						'use strict';
	
						var emit = require('mod/emit');
						var $ = null;
	
						function isType(type) {
							return function (obj) {
								return {}.toString.call(obj) == '[object ' + type + ']';
							};
						}
						var isObject = isType('Object');
						var isString = isType('String');
	
						var sufeiMtop = function sufeiMtop() {
							this.cache = {
								//状态：(0)拦截中 -> (100)验证中 ->  (200)验证通过
								status: 0,
								//当前正在验证的请求
								currentRequest: null,
								//被拦截的队列
								queue: []
							};
						};
	
						sufeiMtop.prototype = {
							init: function init() {
								var self = this;
	
								//事件：验证通过后重发送请求（mtop中重新发送请求由mtop来处理）
								emit.on('event:resendRequest@sufei', function (data) {
									// KISSY.one(document).fire('sufei:validateDone', [data]);
									dispatchEvent(document, 'sufei:validateDone', [data]);
								});
	
								//监听消息
								document.addEventListener('sufei:validateData', function (data) {
									// KISSY.one(document).on('sufei:validateData', function(data){
									var result = data[0];
									if (result && isObject(result) && typeof result.ret !== 'undefined' && result.ret.join('') == 'RGV587_ERROR::SM') {
										emit.fire('event:showDialog@sufei', result.data.url);
									} else {
										//不需要校验
										// KISSY.one(document).fire('sufei:noNeedToValidate', data);
										dispatchEvent(document, 'sufei:noNeedToValidate', data);
									}
								});
							}
						};
	
						module.exports = sufeiMtop;
					});
	
					pointman.define('sufei', function (require, exports, module) {
						'use strict';
						//var SubMod = require('mod/sufei-seajs-jquery');
	
						var SubMod = require('mod/sufei-kissymini-mtop');
						var messenger = require('mod/messenger');
						//消息模块是否初始化
						var messengerHasInit = false;
						var emit = require('mod/emit');
						var doc = document;
						var head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;
	
						var Sufei = function Sufei() {
							//可配置项
							this.config = {
								app: '',
								version: '',
								sufeiStyle: ''
							};
							//缓存
							this.cache = {
								//被拦截的请求队列
								queue: [],
								//dialog对象
								dialog: null
							};
						};
	
						Sufei.prototype = {
							init: function init() {
								var self = this;
								var configData = module.config;
	
								self.config.app = configData.app || '';
								self.config.version = configData.version || '';
								self.config.sufeiStyle = configData.style || '';
	
								//事件：显示验证对话框
								emit.on('event:showDialog@sufei', function (url) {
									if (!self.cache.dialog) {
										url += /\?/.test(url) ? '&' : '?';
										if (/tpl_redirect_url=http(s)?\:\/\/sec\.(([\w\d])*?\.)?taobao\.com\/query\.htm/.test(decodeURIComponent(url))) {
											url = url.replace('query.htm%3F', 'query.htm%3Fsufeiversion%3D' + self.config.version + '%26app%3D' + self.config.app + '%26');
										} else {
											url += 'sufeiversion=' + self.config.version + '&app=' + self.config.app;
										}
										//TODO 解决css版本问题
										self.loadCss(self.config.sufeiStyle, function () {
											self.createDialog(url);
										});
									} else {
										self.changeDialogStates({ state: 'visible' });
									}
								});
	
								new SubMod().init();
							},
	
							//加载CSS
							loadCss: function loadCss(url, callback) {
								var node = doc.createElement('link');
								node.chaarset = 'utf-8';
								node.rel = 'stylesheet';
								node.href = url;
	
								if ('onload' in node) {
									node.onload = function () {
										callback && callback();
									};
								} else {
									node.onreadystatechange = function () {
										if (/loaded|complete/.test(node.readyState)) {
											callback && callback();
										}
									};
								}
	
								head.appendChild(node);
							},
	
							//是否是ie6、7
							isOldBrower: function isOldBrower() {
								var b = doc.createElement('b');
								b.innerHTML = '<!--[if lte IE 7]><i></i><![endif]-->';
								return b.getElementsByTagName('i').length === 1;
							},
	
							//创建dialog
							createDialog: function createDialog(url) {
								var self = this;
								var dialog = document.createElement('div');
								var mask = null;
								var content = null;
								var maskIframe = null;
								var closeElement = null;
								//iframe窗口
								var frameWin = null;
	
								mask = doc.createElement('div');
								content = doc.createElement('div');
								closeElement = document.createElement('div');
								maskIframe = null;
	
								//可以通过sufeiStyle重定义dialog、mask风格
								if (self.config.app !== '') {
									dialog.className = 'sufei-dialog sufei-dialog-' + self.config.app;
								} else {
									dialog.className = 'sufei-dialog';
								}
	
								mask.className = 'sufei-dialog-mask';
								//IE6\7下为mask增加iframe
								if (self.isOldBrower()) {
									mask.innerHTML = '<iframe frameborder="none" src="javascript:\'\'"></iframe>';
								}
	
								//关闭按钮
								closeElement.className = 'sufei-dialog-close';
								closeElement.innerHTML = 'close';
	
								content.className = 'sufei-dialog-content';
								content.innerHTML = '<iframe id="sufei-dialog-content" frameborder="none" src="' + url + '""></iframe>';
	
								content.appendChild(closeElement);
								dialog.appendChild(mask);
								dialog.appendChild(content);
								doc.body.appendChild(dialog);
	
								frameWin = doc.getElementById('sufei-dialog-content').contentWindow;
								messenger.initListener({
									currentWin: window,
									originWin: frameWin,
									msgTransfer: 'fromFrame'
								});
								//标记消息模块已初始化
								messengerHasInit = true;
	
								//消息: 验证通过
								messenger.register('msg:validateSuccess@sufei', function (data) {
									//重新发送请求
									emit.fire('event:resendRequest@sufei', data);
									//隐藏dialog
									self.changeDialogStates({ state: 'hidden' });
									//消息: 重置验证码
									messenger.send({
										type: 'msg:resetCheckCode@sufei',
										content: ''
									});
								});
	
								//绑定关闭事件
								if (closeElement.addEventListener) {
									closeElement.addEventListener('click', function () {
										self.changeDialogStates({ state: 'hidden' });
									}, false);
								} else {
									closeElement.attachEvent('onclick', function () {
										self.changeDialogStates({ state: 'hidden' });
										return false;
									});
								}
	
								self.cache.dialog = dialog;
							},
	
							/*
	       * 改变dialog显示状态
	       * @param {string} obj.state hidden|visible
	       */
							changeDialogStates: function changeDialogStates(obj) {
								if (obj.state === 'hidden') {
									//清空拦截队列
									emit.fire('event:cleanHijackQueue@sufei', {});
									//隐藏dialog
									this.cache.dialog.style.display = 'none';
								} else {
									//显示dialog
									this.cache.dialog.style.display = 'block';
									//消息: 刷新验证码
									messengerHasInit && messenger.send({
										type: 'msg:refreshCheckCode@sufei',
										content: ''
									});
								}
							}
						};
	
						var sufeiMod = new Sufei();
	
						module.exports = {
							init: function init(config) {
								sufeiMod.init(config);
							}
						};
					});
	
					pointman.use('sufei', function (sufei) {
						sufei.init();
					});
				}).call(window);
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=index.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["q"] = factory();else root["q"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "/build/";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				/**
	    * @module q
	    **/
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var Q;
	
				/**
	    * @class Q
	    */
				function qFactory(exceptionHandler) {
	
					/**
	     * @returns {Deferred} Returns a new instance of deferred.
	     */
					var defer = function defer() {
						var pending = [],
						    value,
						    deferred;
	
						deferred = {
	
							resolve: function resolve(val) {
								if (pending) {
									var callbacks = pending;
									pending = undefined;
									value = ref(val);
	
									if (callbacks.length) {
										var callback;
										for (var i = 0, ii = callbacks.length; i < ii; i++) {
											callback = callbacks[i];
											value.then(callback[0], callback[1], callback[2]);
										}
									}
								}
							},
	
							reject: function reject(reason) {
								deferred.resolve(createInternalRejectedPromise(reason));
							},
	
							notify: function notify(progress) {
								if (pending) {
									var callbacks = pending;
	
									if (pending.length) {
										var callback;
										for (var i = 0, ii = callbacks.length; i < ii; i++) {
											callback = callbacks[i];
											callback[2](progress);
										}
									}
								}
							},
	
							promise: {
								then: function then(callback, errback, progressback) {
									var result = defer();
	
									var wrappedCallback = function wrappedCallback(value) {
										try {
											result.resolve((isFunction(callback) ? callback : defaultCallback)(value));
										} catch (e) {
											result.reject(e);
											exceptionHandler(e);
										}
									};
	
									var wrappedErrback = function wrappedErrback(reason) {
										try {
											result.resolve((isFunction(errback) ? errback : defaultErrback)(reason));
										} catch (e) {
											result.reject(e);
											exceptionHandler(e);
										}
									};
	
									var wrappedProgressback = function wrappedProgressback(progress) {
										try {
											result.notify((isFunction(progressback) ? progressback : defaultCallback)(progress));
										} catch (e) {
											exceptionHandler(e);
										}
									};
	
									if (pending) {
										pending.push([wrappedCallback, wrappedErrback, wrappedProgressback]);
									} else {
										value.then(wrappedCallback, wrappedErrback, wrappedProgressback);
									}
	
									return result.promise;
								},
	
								"catch": function _catch(callback) {
									return this.then(null, callback);
								},
	
								"finally": function _finally(callback) {
	
									function makePromise(value, resolved) {
										var result = defer();
										if (resolved) {
											result.resolve(value);
										} else {
											result.reject(value);
										}
										return result.promise;
									}
	
									function handleCallback(value, isResolved) {
										var callbackOutput = null;
										try {
											callbackOutput = (callback || defaultCallback)();
										} catch (e) {
											return makePromise(e, false);
										}
										if (callbackOutput && isFunction(callbackOutput.then)) {
											return callbackOutput.then(function () {
												return makePromise(value, isResolved);
											}, function (error) {
												return makePromise(error, false);
											});
										} else {
											return makePromise(value, isResolved);
										}
									}
	
									return this.then(function (value) {
										return handleCallback(value, true);
									}, function (error) {
										return handleCallback(error, false);
									});
								}
							}
						};
	
						return deferred;
					};
	
					var ref = function ref(value) {
						if (value && isFunction(value.then)) return value;
						return {
							then: function then(callback) {
								var result = defer();
								result.resolve(callback(value));
								return result.promise;
							}
						};
					};
	
					/**
	     * @param {*} reason Constant, message, exception or an object representing the rejection reason.
	     * @returns {Promise} Returns a promise that was already resolved as rejected with the `reason`.
	     */
					var reject = function reject(reason) {
						var result = defer();
						result.reject(reason);
						return result.promise;
					};
	
					var createInternalRejectedPromise = function createInternalRejectedPromise(reason) {
						return {
							then: function then(callback, errback) {
								var result = defer();
								try {
									result.resolve((isFunction(errback) ? errback : defaultErrback)(reason));
								} catch (e) {
									result.reject(e);
									exceptionHandler(e);
								}
								return result.promise;
							}
						};
					};
	
					/**
	     * @param {*} value Value or a promise
	     * @returns {Promise} Returns a promise of the passed value or promise
	     */
					var when = function when(value, callback, errback, progressback) {
						var result = defer(),
						    done;
	
						var wrappedCallback = function wrappedCallback(value) {
							try {
								return (isFunction(callback) ? callback : defaultCallback)(value);
							} catch (e) {
								exceptionHandler(e);
								return reject(e);
							}
						};
	
						var wrappedErrback = function wrappedErrback(reason) {
							try {
								return (isFunction(errback) ? errback : defaultErrback)(reason);
							} catch (e) {
								exceptionHandler(e);
								return reject(e);
							}
						};
	
						var wrappedProgressback = function wrappedProgressback(progress) {
							try {
								return (isFunction(progressback) ? progressback : defaultCallback)(progress);
							} catch (e) {
								exceptionHandler(e);
							}
						};
	
						ref(value).then(function (value) {
							if (done) return;
							done = true;
							result.resolve(ref(value).then(wrappedCallback, wrappedErrback, wrappedProgressback));
						}, function (reason) {
							if (done) return;
							done = true;
							result.resolve(wrappedErrback(reason));
						}, function (progress) {
							if (done) return;
							result.notify(wrappedProgressback(progress));
						});
	
						return result.promise;
					};
	
					function defaultCallback(value) {
						return value;
					}
	
					function defaultErrback(reason) {
						return reject(reason);
					}
	
					/**
	     * @param {Array.<Promise>|Object.<Promise>} promises An array or hash of promises.
	     * @returns {Promise} Returns a single promise that will be resolved with an array/hash of values,
	     *   each value corresponding to the promise at the same index/key in the `promises` array/hash.
	     *   If any of the promises is resolved with a rejection, this resulting promise will be rejected
	     *   with the same rejection value.
	     */
					function all(promises) {
						var deferred = defer(),
						    counter = 0,
						    results = isArray(promises) ? [] : {};
	
						promises.forEach(function (promise, key) {
							counter++;
							ref(promise).then(function (value) {
								if (results.hasOwnProperty(key)) return;
								results[key] = value;
								if (! --counter) deferred.resolve(results);
							}, function (reason) {
								if (results.hasOwnProperty(key)) return;
								deferred.reject(reason);
							});
						});
	
						if (counter === 0) {
							deferred.resolve(results);
						}
	
						return deferred.promise;
					}
	
					return {
						version: "0.1.0",
						defer: defer,
						reject: reject,
						when: when,
						all: all
					};
				}
	
				var isFunction = function isFunction(value) {
					return typeof value === 'function';
				},
				    isArray = Array.isArray;
	
				Q = qFactory(console.log);
	
				if (window.KISSY && KISSY.add) {
					KISSY.add('q/index', function () {
						return Q;
					});
				}
	
				exports.default = Q;
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=index.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(5), __webpack_require__(7));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["jsbridge"] = factory(require("q"), require("bridge"));else root["jsbridge"] = factory(root["q"], root["bridge"]);
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "/build/";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				/**
	    * @module JSBridge
	    **/
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _q = __webpack_require__(1);
	
				var _q2 = _interopRequireDefault(_q);
	
				var _bridge = __webpack_require__(2);
	
				var _bridge2 = _interopRequireDefault(_bridge);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
				var userAgent = navigator.userAgent;
				var isTB = !!(/WindVane/i.test(userAgent) && !/T-UA/i.test(userAgent));
				var isAlipay = !!/Alipay/ig.test(userAgent);
	
				/**
	    * @class JSBridge
	    * @constructor
	    */
	
				var JSBridge = function (_Bridge) {
					_inherits(JSBridge, _Bridge);
	
					function JSBridge() {
						_classCallCheck(this, JSBridge);
	
						return _possibleConstructorReturn(this, Object.getPrototypeOf(JSBridge).apply(this, arguments));
					}
	
					_createClass(JSBridge, [{
						key: 'getEnv',
	
						/**
	      * @description 获取环境变量
	      *
	      * @returns {promise|*|defer.promise|Q.promise}
	      */
						value: function getEnv() {
							var deferred = _q2.default.defer();
	
							//航旅IOS桥处理 version < 5.0
							if (this.platform === 'ios' && this.client.version < 5.0) {
								//daily 代表日常，prepare 代表预发，online 代表线上
								var map = {
									daily: 'waptest',
									prepare: 'wapa',
									online: 'm'
								};
								var successCallback = function successCallback(result) {
									deferred.resolve(map[JSON.parse(result).environment]);
								};
								this.pushBack('bridge:', 'getEnvironment', { successCallback: successCallback });
	
								//wap、手淘|航旅
							} else {
									var hostname = location.hostname;
									var env = /waptest/.test(hostname) ? 'waptest' : /wapa/.test(hostname) ? 'wapa' : 'm';
	
									deferred.resolve(env);
								}
	
							return deferred.promise;
						}
	
						/**
	      * @description 获取渠道ID
	      * @returns {promise|*|defer.promise|Q.promise}
	      */
	
					}, {
						key: 'getTTid',
						value: function getTTid() {
							var deferred = _q2.default.defer();
	
							//识别钱包新容器
							if (/AlipayClient/i.test(navigator.userAgent)) {
								//有域，ttid可以透传
								if (location.search.match(/ttid=([^=&]+)/)) {
									var match = location.search.match(/ttid=([^=&]+)/);
									ttid = match ? match[1] : '201300@travel_h5_3.1.0';
	
									deferred.resolve(ttid);
								} else {
									var readyCallback = function readyCallback() {
										try {
											var ttid = AlipayJSBridge.startupParams.ttid;
											deferred.resolve(ttid);
										} catch (e) {
											deferred.reject('AlipayJSBridge get ttid failed.');
										}
									};
	
									//针对钱包容器已经完成桥初始化的情况
									if (window.AlipayJSBridge && AlipayJSBridge.call) {
										readyCallback();
									} else {
										//钱包新容器（创建桥的方式是异步的）
										document.addEventListener('AlipayJSBridgeReady', readyCallback, false);
									}
								}
	
								//wap、手淘|航旅(有域，location可用)
							} else {
									var match = location.search.match(/ttid=([^=&]+)/) || location.hash.match(/ttid=([^=&]+)/);
	
									//默认为航旅H5渠道ID
									var ttid = match ? match[1] || '201300@travel_h5_3.1.0' : '201300@travel_h5_3.1.0';
	
									deferred.resolve(ttid);
								}
	
							return deferred.promise;
						}
	
						/**
	      * @description 设置标题
	      */
	
					}, {
						key: 'setTitle',
						value: function setTitle(title) {
							if (isTB) {
								window.WindVane.call('WebAppInterface', 'setCustomPageTitle', { 'title': title }, function (e) {}, function (e) {});
							} else if (isAlipay) {
								var readyCallback = function readyCallback() {
									AlipayJSBridge.call("setTitle", {
										title: title
									});
								};
	
								if (window.AlipayJSBridge && AlipayJSBridge.call) {
									readyCallback();
								} else {
									//钱包新容器（创建桥的方式是异步的）
									document.addEventListener('AlipayJSBridgeReady', readyCallback, false);
								}
							} else {
								_bridge2.default.Global.setTitle(title);
							}
						}
	
						/**
	      * @method
	      * @memberof JSBridge#
	      * @desc 唤起App
	      * @param scheme {string} App向系统注册的scheme
	      * @param packagename {string} App 包名
	      * @param path {string}
	      * @param query {object}
	      * @param isWebView {boolean} 是否webView(调试中大多app的webView ua信息包含chrome但不支持intent协议唤起)
	      */
	
					}, {
						key: 'routApp',
						value: function routApp(options) {
							var type = this.device.type;
	
							if (type === 'android' && /Chrome/i.test(navigator.userAgent) && !options.isWebView) {
								var intent = 'intent://' + (options.path || '') + (options.query ? '?' + options.query : '') + '#Intent;scheme=' + options.scheme + ';package=' + options.packagename + ';end';
								window.location.replace(intent);
							} else {
								var uriScheme = options.scheme + (options.path || '') + (options.query ? '?' + options.query : '');
								this.sendUriScheme(uriScheme, true, null, true);
							}
						}
	
						/**
	      * @description 在AlipayJSBridgeReady时执行回调方法，且回调仅执行一次。
	      * @param {function} fn 回调方法
	      */
	
					}, {
						key: 'alipayCall',
						value: function alipayCall(fn) {
							fn = fn || function () {};
							if (window.AlipayJSBridge && AlipayJSBridge.call) {
								fn();
							} else {
								var once = function once() {
									fn();
									document.removeEventListener('AlipayJSBridgeReady', once, false);
								};
								document.addEventListener('AlipayJSBridgeReady', once, false);
							}
						}
					}]);
	
					return JSBridge;
				}(_bridge2.default);
	
				// 表态挂载
	
				var _jsBridge = new JSBridge();
				for (var k in _jsBridge) {
					if (_jsBridge[k] === undefined) {
						continue;
					}
					JSBridge[k] = _jsBridge[k];
				}
				// 加上 extend 方法
				Object.getOwnPropertyNames(JSBridge.prototype).forEach(function (key) {
					JSBridge[key] = _jsBridge[key];
				});
	
				// version
				JSBridge.version = "0.1.2";
	
				// KISSY KMD 兼容
				if (window.KISSY && KISSY.add) {
					KISSY.add('jsbridge/index', function () {
						return JSBridge;
					});
				}
	
				exports.default = JSBridge;
	
				/***/
			},
			/* 1 */
			/***/function (module, exports) {
	
				module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
				/***/
			},
			/* 2 */
			/***/function (module, exports) {
	
				module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=index.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function webpackUniversalModuleDefinition(root,factory){if(( false?'undefined':_typeof2(exports))==='object'&&( false?'undefined':_typeof2(module))==='object')module.exports=factory();else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if((typeof exports==='undefined'?'undefined':_typeof2(exports))==='object')exports["bridge"]=factory();else root["bridge"]=factory();})(undefined,function(){return  (/******/function(modules){ // webpackBootstrap
	/******/ // The module cache
	/******/var installedModules={}; /******/ /******/ // The require function
	/******/function __webpack_require__(moduleId){ /******/ /******/ // Check if module is in cache
	/******/if(installedModules[moduleId]) /******/return installedModules[moduleId].exports; /******/ /******/ // Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId]={ /******/exports:{}, /******/id:moduleId, /******/loaded:false /******/}; /******/ /******/ // Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__); /******/ /******/ // Flag the module as loaded
	/******/module.loaded=true; /******/ /******/ // Return the exports of the module
	/******/return module.exports; /******/} /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m=modules; /******/ /******/ // expose the module cache
	/******/__webpack_require__.c=installedModules; /******/ /******/ // __webpack_public_path__
	/******/__webpack_require__.p="/build/"; /******/ /******/ // Load entry module and return exports
	/******/return __webpack_require__(0); /******/}( /************************************************************************/ /******/[ /* 0 */ /***/function(module,exports,__webpack_require__){'use strict';function _typeof(obj){return obj&&typeof Symbol!=="undefined"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);} /**
		 * Created by Guokai @benbencc on 13/7/24.
		 * Updated by xiaoguan, hongshu
		 * @fileoverview 去啊 H5 容器桥组件
		 * @author 孝瓘<meng.limeng@alibaba-inc.com>
		 * @author 弘树<tiehang.lth@alibaba-inc.com>
		 */ // ***面向`Android`和`IOS`的`Hybrid API`调用原理***
	// - `Android` 通过桥（客户端暴露在WebView全局对象下的一个对象，内挂各种API方法）
	// 的方式进行调用，如
	// ```
	// window['Android_Bridge']['method'](JSON)
	// ```
	// - iOS通过自定义`Scheme`，以协议的方式调用，如
	// ```
	// native://method?data=JSON
	// ```
	// 需要回调的接口需要将函数名称在调用时一并传给客户端，同时将回调函数通过唯一名称挂在全局，待客户端执行回调后移除该全局函数。
	/*
		 * Bridge (Hybrid api for h5 and alitrip app.)
		 * Created by Guokai @benbencc 2013-7-24
		 * Updated by xiaoguan
		 */ /**
		 * `Bridge`是为 H5 和客户端交互通讯而产生的一个中间件，即一个 JavaScript 的 SDK ，负责处理 H5 和客户端的方法调用、通信及 H5 页面自身的降级处理（非内嵌在客户端的情况）。
		 *
		 * @class Bridge
		 * @version {@link 0.3.0}
		 *
		 * @example
		 * var bridge = new Bridge('ali_trip_webview_bridge');
		 */var Bridge=function Bridge(){this.init.apply(this,arguments);};var ua=navigator.userAgent;Bridge.prototype={ // 版本号
	/**
		   * @memberof Bridge#
		   * @type {String}
		   * @desc 版本号
		   *
		   * @example
		   *
		   * var bridge = new Bridge();
		   * console.log(bridge.version); //0.3.0
		   */version:"0.3.0", //标记设备信息
	/**
		   * @memberof Bridge#
		   * @type {DeviceInfo}
		   * @desc 标记当前设备信息
		   * @see [DeviceInfo]{@link Bridge#DeviceInfo}
		   *
		   * @example
		   *
		   * var bridge = new Bridge();
		   * console.log(bridge.device); //{"type":"ios"}
		   *
		   */device:{}, /**
		   * @typedef {Object} DeviceInfo
		   * @memberof Bridge#
		   * @property {String} type 类型（`"ios"`|`"android"`|`"undefined"`)
		   * @property {String} version 系统版本号
		   */ //标记客户端信息
	/**
		   * @memberof Bridge#
		   * @type {ClientInfo}
		   * @property version {int} 版本号数字，如 `"5.8.1"` => `581`
		   * @property versionStr {String} 字符串型版本号，如 `"5.8.1"`
		   * @see [ClientInfo]{@link Bridge#ClientInfo}
		   * @desc 标记客户端信息，扩展自 [ClientInfo]{@link Bridge#ClientInfo}
		   *
		   * @example
		   *
		   * var bridge = new Bridge();
		   * console.log(bridge.client);
		   * // {"version":582,"versionStr":"5.8.2","push_token":"","client_type":"iphone","client_version":"5.8.2","utdid":"VFxg4pf3gRkDAGtHFjjszxxx","env":3,"device_id":"xxxrFIn8rYaIcWqyPPj11Ifk3O79mz3b6RS1k_Dx_SfT","ttid":"201200@travel_iphone_5.8.2","umidtoken":"4Pr54SWkw2KIJwDwPSEELztF7Uigrxxx"}
		   */client:{}, /**
		   * @typedef {Object} ClientInfo
		   * @memberof Bridge#
		   * @property env {String} 客户端环境
		   *   - `0`: 日常
		   *   - `1`: 预发
		   *   - `2`: 动态更新环境
		   *   - `3`: 线上
		   * @property ttid {String} ttid 值
		   * @property client_version {String} 客户端版本号 `"x.y.z"`
		   * @property client_type {String} 客户端类型 `"iphone"|"android"`
		   * @property device_id {String} 设备标识 id
		   * @property utdid {String} UT 埋点 id
		   * @property umidtoken {String} 标识用户登录信息
		   * @property push_token {String} 仅 iOS，发 push 用
		   */ //标记网络信息
	/**
		   * @ignore
		   * @memberof Bridge#
		   * @type {Object}
		   * @desc 标记网络信息
		   */connection:{}, // 桥初始化
	// - 初始化过程中，会主动探测UA，判断页面所属的生存环境。
	// - 如果是在客户端中，会
	// 	- 探测获取客户端的平台类型和版本号，初始化消息队列
	// 	- 主动探测网络类型
	// 	- 同所属环境主动握手交换双方所需的额外基础信息
	/**
		   * @private
		   * @ignore
		   * @memberof Bridge#
		   * @desc 初始化方法
		   * @param bridgeName {String} 自定义桥名称
		   */init:function init(bridgeName){var that=this;that.platform='h5';that.bridgeName=bridgeName||'ali_trip_webview_bridge';that.bridge=window[that.bridgeName];that.getDeviceInfo();that.getPlatform();that.messageQueueInit();that.getClientInfo();that.handShake.apply(this,arguments);that.notification.superthat=that;that.customShare.superthat=that;}, // 判断WindVane容器环境
	/**
		   * @memberof Bridge#
		   * @type {Boolean}
		   * @desc 是否在 WindVane 容器环境
		   */isWindVane:/WindVane[\/\s]([\d\.\_]+)/i.test(ua)&&window.WindVane&&window.WindVane.isAvailable, //判断手淘 API版本ios 5.0.1 安卓 5.1.3 以上
	/**
		   * @memberof Bridge#
		   * @type {Boolean}
		   * @desc 是否在手淘客户端内
		   */isInTBClient:function(){var match=ua.match(/TB[\s\/][\d\.]+/igm),version=match?parseInt(match[0].match(/[\d\.]+/igm)[0].split('.').join(''),10):0;if(window.WindVane){if(/Android/.test(ua)){return version>=513;}return version>=501;}return false;}(), // 去啊
	/**
		   * @memberof Bridge#
		   * @type {Boolean}
		   * @desc 是否在去啊客户端内
		   */isAlitrip:/AliTrip/i.test(ua), // 钱包
	/**
		   * @memberof Bridge#
		   * @type {Boolean}
		   * @desc 是否在钱包客户端内
		   */isAlipay:/AlipayClient/i.test(ua), // 手淘
	/**
		   * @memberof Bridge#
		   * @type {Boolean}
		   * @desc 是否在手淘客户端内
		   */isTaobao:/Aliapp\(TB/i.test(ua), // 天猫
	/**
		   * @memberof Bridge#
		   * @type {Boolean}
		   * @desc 是否在天猫客户端内
		   */isTmall:/AliApp\(TM/i.test(ua), // 旺信
	/**
		   * @memberof Bridge#
		   * @type {Boolean}
		   * @desc 是否在旺信客户端内
		   */isWX:/AliApp\(WX/i.test(ua), // 来往
	/**
		   * @memberof Bridge#
		   * @type {Boolean}
		   * @desc 是否在来往客户端内
		   */isAlilaiwang:/AliApp\(LW/i.test(ua), // UC
	/**
		   * @memberof Bridge#
		   * @type {Boolean}
		   * @desc 是否在 UC 浏览器内
		   */isUC:/UCBrowser/i.test(ua), // 微博
	/**
		   * @memberof Bridge#
		   * @type {Boolean}
		   * @desc 是否在微博客户端内
		   */isAliweibo:/Weibo/i.test(ua), // 消息队列初始化
	// - 针对iOS的实现机制单独做的处理，iOS会主动轮询消息队列中的操作，并批量取回处理。
	messageQueueInit:function messageQueueInit(){var that=this;if(that.platform==='ios'){ //ios 轮询队列
	window.messageQueue=window.messageQueue||[];window.messageQueueFetch=window.messageQueueFetch||function(){var response;response=window.messageQueue.length?JSON.stringify(window.messageQueue):'';window.messageQueue=[];if(response){return response;}};}}, /**
		   * @callback Bridge~hideTitleSuccessCallback
		   * @desc 隐藏标题栏成功回调
		   */ /**
		   * @callback Bridge~hideTitleFailureCallback
		   * @desc 隐藏标题栏失败回调
		   */ // 握手协议
	// - 用于页面同所属生存环境在首次初始化时进行基础信息交换。
	handShake:function handShake(callback){var that=this;var cb=function cb(){callback&&callback();};that.pushBack('bridge:','ready',{data:{},successCallback:cb,callbackCommand:cb});}, // 获取设备信息：IOS/Android
	// 2. 检测当前页面是否生存在淘宝旅行客户端内，如果在客户端内，则继续获取客户端的平台类型及版本号用于后续的操作。
	//
	// ***User-Agent Format***
	// - Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_2 like Mac OS X; zh-cn; AliTrip/2.8.0) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile Safari/528.16
	// - Mozilla/5.0 (Linux; U; Android 4.1.1; zh-cn; MI 2 Build/JRO03L; AliTrip/2.8.0) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile Safari/528.16
	// ***References***
	// - http://www.ietf.org/rfc/rfc2616.txt
	// - http://www.useragentstring.com/
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 获取设备信息
		   * @returns {Bridge#DeviceInfo} 设备信息
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#deviceInfo}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwNBiTgaVTMYQ6p1EQ9YosZqnbK0D6TXinofFTqUVz1V4w2EwsCyfVZnpRdz+YW/rc+hdRxycWqOdAaBcmaNiRtxeY2MfwiHc3ybjoMXim+HZZGKeGyblYylS5cXpXSUbJGhlrKtsFq+koi9qoKMlGOwrsGewq/LEqWpw6jBXcUFqLrJxx/NwcCq17aznLnS3XbYt52Ga9TdopjUH9i0AsrspOnH6xzv2J/K5RzRsOCB69y125afHQ7YKnzVlAZpm8LUv4CiJBiYewgUJk0N7AiP/f/Ggj17BfsoMc/cHZh7KgxpH/4Hw7qfLcypQzYc6zYJOmzJ0PZdrMIbDdQnyhegFRuATpPaRGj24z2uqiRYovjk1Ves1XzX/5rPqDdrWkUK49tXbNRXIiWK3SopJlubaYz7TqpJYLytTM2Y8iN9mVy5ZuUb13h+7zS3TsvZtT5Q1dunEizaBueSp+CLIpPZEg91q27NKsSZWUH5e9zDLzX8R4A7cUjDHx4cisOy1Gm9hj5cJUOXQeDDBpXdns8tXe2nY1bdf1jI9GnlYz4KcZHZawDlX59NvBrXccnpev+L2zUX/fLDHR7unes4pgLBay+dNxk/dG2Ngw55zpbcH/N4abehnltwZ1b6lQj1vY8RdeXCe0hppX5rgnHVbX2SaWhBVhBpuFJEAI2l/rVRifDCSmZho/wkWIYQwnasjhinPlVpV2M47D0Iz/DQcjim8teGCMDuLSXYrZSDiZkf51SMGRShb5I2lP9njciPpF2R+NcIl2oYz0cdneWPbdaEJpK9XXF3AWUknkic5l8qaTWu4YkpYeVlAeml7O51uLENDJYpbNlfgeYc/huOeQQRgKIHGvCcpko7+1OaWINuqT4oY+kjege5595Wmom/Lm2HiiAgqJqRMGWp5qqn7aJZBWPoqonmHFup+jOj5pq2sPdqpirb5SiNuu96EXZ653/7IHm05lFqfml3yutya0hZ4Z7Zarwlotto3qmV1OnJ60LH5g+skcQwrCVC6mWIb7E6nsEjpDuOBeBG+k9Vr6Lr78olrjnMUOK2Z0l/YprrQCFtjrds8mrK2ikwLZAn9byUegfHk+7NG4mhJoL5fn/WntwuFNSua1Hcv7KnAoCznCoMzuKavFaapM8LqOJmnzxt/mfKXOxlr8JmK3IolubA2mWjSyQPdrJ70iZ6gvnE/fG/W22XZ7Xqkh0uyvt3L+SutpMktc8pLHqnW12S2azLKiIzOdrZyt5hgZwO1qHey5K+oMN9/mWl0w1HcznHfVJENsH9FuC7w2j/M6rGK82iyGjCu5idv89ZhOfQ566KKPTnrppp+Oeuqqr856666/Dnvsss9Oe+22335AAQA7)
		   */getDeviceInfo:function _getDeviceInfo_(){ //设备类型
	if(/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(ua)){ // iOS: Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H321 AliApp(LX/5.8.1) AliTrip/5.8.1
	this.device.type='ios'; // iOS 版本号提取
	var iosVersion=/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/.exec(ua);if(iosVersion&&iosVersion[0]){this.device.version=iosVersion[0].replace(/_/g,'.');}}else if(/Android/i.test(ua)){this.device.type='android';var match=ua.match(/Android\s+([\d\.]+)/i);this.device.version=match&&match[1];}else {this.device.type=undefined;}return this.device;}, /**
		   * @method
		   * @memberof Bridge#
		   * @desc 获取设备平台信息（`"android"|"iOS"`）
		   * @returns {String}
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#platform}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwbBiTBmZgKVQ4kdDqtGPNUgFK6HZ7TFyf2WqobG5GGWkyV72UrhFoL2jcfbu/cHwlTDcH4ZdBKKfnlFjEAcgXYXgBGYg4p0jEuCgm+CD5V2m3x7k5SWjpaAnYSYGaGepQ2np4+kkZB3dGmzoqyxarWTtbq6vnwXp52zdqPAwLnHzsWpzbaszr1tb4GzyMK0w9TYx8DZo9uf0djukNPdZOO7irLY4dXwhuKm8ungfvPM5eD8Oyd/mC9Ts4j1zASAv1kfL1SKE/VdGwNHQEBmI/bv8J0/G7c3HfM4oZAU4MWVFdHZMGO7Z0NRBNt5X4YBK0eTInTZQSdrJ0CRTnS58kU9S0VtKdLSATjhYcqQwU04j+kEJN18ZGtavWapY7V7VjUYT/kkbNWfJjWZE4x4paZxbrza0L6CpNC1InOKt1d2Jky/GDV3R33678mzKwNL1wn/aliVipUxHlKteL2fWeRLerIFr2KNbz3Dp4S3wu/Dhu5nX0oM1ESVQ06Idyw6ZcTDG2a7aHUKN+Pbt3bL7Ca0fmSbV4acGXtXDlbbE2Xeazy6iGrk75M8rNrVy/HX15PslnV9vtTmL6+LO/QzcGD3+Deofkja83ORnx4uO7HzP/cw7ff8HlxZ8krVmHnYAqTPbVLwK2lsd8J3ymn4PoFNdgckbJViFtDAJoAWchcojdd/VlSNaCJHZmW0y+SbVhf2N9yNqKWcXYnoaJaSYjjy3kF5RuYJm3lwlACnUVgm2Vt12Tpt20WlxKzndef/slyR5hF/YyIJJrPVljj0tByCVZEhKIpXRa/pTaW0OOQKaHaxrYHWZl5qVYmt+ppd0/zQBH44EaOVbajQ5NONydrzDpZ53IUecTn4qC1YyI8iXa5qL2NVrdoJBmqSZjJ255KGCPGgZqn3bKySZ/xGlwWqrujdqqqZuqGGaEoFZZqI8srNqniaQGZiiiuXJJa6/v/wGLppd0jilrfEF6eilaJT63Y62ZnpndtF3GqayZRVInLGO6WmkhZISGh+1g6HK6kV/rdguvt5VSm6ahlho5WqiHORmsD+5iSBrA6U41cLr/fhkwmJHaC5tsCa8gJMRdivflkelh6m5uEvf7Y8TvEdwptO9yW21T45J8LrcowyoyxnsqvPJ9+6oFrs0gzyqvtPTmTN+w/Vbsc8rtoufkxLppzG69Xr6E89ANMT3isU8HFbW5bl5bdbmucq00vlf/LJHXtvJ6sMHcWb1qoOPWJ3Ozcc4dbZ4Zi220jkMVHLR38948L18dg8izmJLSm6LF+vKYY4cCcbwZ5FpnujFR5S8SPXjJxj7s9NI7Mxz4VKKPTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577rQXAAA7)
		   */getPlatform:function getPlatform(){var match=ua.match(/AliTrip[\s\/][\d\.]+/igm);if(match){if(this.device.type){this.platform=this.device.type;}this.client.version=parseInt(match[0].match(/[\d\.]+/igm)[0].split('.').join(''),10);this.client.versionStr=match[0].match(/[\d\.]+/igm)[0];}return this.platform;}, //获取客户端信息：Alitrip
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 获取去啊客户端信息
		   *  - 桥协议: `bridge://client_info?params={"success_callback":"xxxxx"}`
		   * @param {Bridge~getClientInfoCallback} callback 回调函数
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#clientInfo}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwNBiTgaVTMYQ6p1EQ9YosZqnbK0D6TXinofFTqUVz1V4w2EwsCyfVZnpRdz+YW/rc+hdRxycWqOdAaBcmaNiRtxeY2MfwiHc3ybjoMXim+HZZGKeGyblYylS5cXpXSUbJGhlrKtsFq+koi9qoKMlGOwrsGewq/LEqWtyL0BbcUFqLnKpx/Ox7a7lW7PzLays3u0QKik0svcxdvqua6x2K+b4ODl1tzB69Sw8/jd5pjkHNTdw1fxXopbsWz89ALBISGVT3CuE+idg+hWs47iHFQ/+bIFYMRQyCQ34b3QGCc0/eMJICBaL0+O+lxpYrVSazB+ebTJo3bc6suRNHSJPnkFkkCOSox1bj5sFMqpQiU6Mgm8o45rTkx24+7enDehJaVgtge4ptBvQpWa/WkB7S1TXlW6scpk7Vtw3lV3ztRNjla1Pky70L5Y74WxhvxJxotVlT7FdmwJqEXTLkqkLyZLONNTLDnEJzYMqdSX5WFjObQoBa894t3ZrC59U41boGXPnk0EysM4wc7bhup7FVqW61fJFrPt0Zh7dV+1q5Lbgkdlt3fjxt8oPV2WYnh5soYshuL5TluDh8UcLL1x/2jh58YvGA20PumPJgdMbBz4L/XgGXfurxZ06AtjEHjoDzSbfdUtMdKJxhiNCVV1TlfafTZhatVdhuCp1AHSTGCdYhdh+ygFiBD5Y4xlzJZVYfXQayOJt2F+IX1W0JxtgifS++J6GL7YXY034rZggccuyx9JiP5+ESpJObEflkkfBBqWBWBEJYoXbdZTNjUP0VZBqXsl0W5mCNcagkkPelt6CLOT4nlZkkvilffDwRx2CX9SQpYnRyFtdbRCDyiOeSC3rYJICIrmlocULKSKGbkkL63W98bmgClepZyCORubn350+kgkpjX6MmeqaEghLaHJifwgZjlFbGpamXNtqZ2pDeFUpqWcAeaquwtS3667Ff/6IG552Xjhmshgje2Kif/iFl6rKV5ikip9DyRO2J/zHLYI3y8afnRNduKxqJYqbrW7IjwtrjhJJZWwO28mbZbFL67gjwjDpC9e+6ss77H7FiKqOiao3a16lm/sFrrqexlapmwkSh6i3EJVxobH4ONohwlThiBLDBDQscqcZ/isuyy3wyfOXLdI5qKmvtYnpyn7SSxlm5EvMM5cwDMnmraB73zB2d5vppso/fGB2wGTDXPKjNPidtNcpt2svq1SSDi13M41Vr6dY5l30kbFFr3XTQ14kMXMxfiqvlikY6DG243XpNb5rI8t3w1IAXdRrbVRtX+LRdB6f00Sm3rK1ebjAPHe3kGDpeb4oZk10yr1CNTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577rqzXgAAOw==)
		   */getClientInfo:function getClientInfo(callback){var that=this;if(that.platform==='h5'){callback&&callback({platform:'h5'});return;}var _callback=function _callback(client_info){client_info=typeof client_info==='string'?JSON.parse(client_info||'{}'):client_info||{}; //ttid,utdid, push_token, device_id, client_version, client_type
	extend(that.client,client_info);callback&&callback(that.client);};that.pushBack('bridge:','client_info',{successCallback:_callback});}, /**
		   * @callback Bridge~getClientInfoCallback
		   * @param clientInfo {ClientInfo} 客户端信息
		   * @see [ClientInfo]{@link Bridge#ClientInfo}
		   * @desc 获取客户端信息回调
		   */ // 获取用户信息
	// - @param {fn} callback 入参为object:{userName:'*', userId:'*'}
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 获取用户信息
		   * @param {Bridge~getUserInfoCallback} callback 回调函数
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#user_info}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFgTBaRyqHCaYAimlRhqEplYona5tMaBU+3ySv5GD4DusrvOu1Wiz1SSB2OD6DHb/08L3XnILhByCAYKLanxZiQ2Ge4EIkx6fjnB6m4ZJnZ14j5aXdZqFmWZ/GYSvbpddqhyuVKAcu2xdomS9q5VzlYCot1awoKAlwamptGy4n4u0n8YdyJDB3n7Kl8KU2tW/tIHcn7XOvmfVx8/Z2M2Tzc0G4+jb77rC45nh3riw3dWv2a7tw/Pu0WHdIWUF60UQcVhsPHBxXDe/y6SbD3UF+5Cv+9uGnoCEigtYrr3k3cuFCOQIwrWzpUefICTJfCaoZ8CdNMzps2+9G8qTKHwVkQlwGZMBRp0WtHiWrkuJQeyRgZ4/lDKS5LvqslZU6UxjViPqsJh4JUOhUsLorkttZbxUlnsIa9/NX9yQ4iHbgU7w7z2zPsXlt0Y+bVB5in26kWB3oUexgeUJFxu2awh9KkVMk+EX+lnPJx4sgIcWKu7HgeZ6Oi8baNkBTg086vW+McifYs1NkseX++zcxw7RF236ZNSPYvU9Qkins+vrnsWtaWdWU9Ddn5GWGcm4M2u5xg6diddcsGF3X44ZFVx7LADl4q7uCzuQs/77789LU90bv/q/5ReGpFxw9846VnglEDxoNVaew5mMJqxs1E2HqFMZYghBaSRqFy9eXXgoTPdViFeiZG6FJvBha4n4eZZWhait8dOKJxL5agoowK+XedjcyhCBxt9D023z7keRfkithp5teRxOGlJGhMGiaYatLVGOOOk2kpJI4Tlpifghpm1SCGHPSo1YZisiifLEviN1BB4SWn3X0rrFhkfEGBWAOeQ/LJ4Vwb2hDfiQGyiaZ65oniW5vzPOhooVayaehlNK7ZHZya5faboj52uehFVNpJHnVqQmnnboxyCp2nzwWWKpySiodlRr0VqYKpctb6261/3jmnmy2W+umuuc7oIqA5/74q6oehCZvsoIpxSOSvSPJYLIL6MQubXoeG5RydX5LY6aR6ZquGuOk2JBd/i9lXIbnEmhkijcndaFulMhi7WKaQlRkqkHmC+e+P2Xl75kz9vYuar9tWa+lOXTLYMKqRxsrqdtNSfHCSAmLcLFpTNrqrv68FvGrIF/JLq8lhgtwtveuAG9WsA8ssEYHwbgrozRqnlrDOW/IsbV9Xkvmk0A+z2/OvewLdWLjWGgzxzfUqzTK+ANJa9aMMx4lwe0696SXWvWo78rIoU4LczO5C/fU277UNNM1mSk3t3DiLqK7PBF8tcsUEnjs4wiecxXe/NR8Nc9BPOwl24Wnmay5fkC+L+DTlKT1uOLTq2kx1U6KPTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577rEXAAA7)
		   */getUserInfo:function getUserInfo(callback){this.pushBack('bridge:','user_info',{successCallback:function successCallback(obj){callback(obj);}},true);}, /**
		   * @callback Bridge~getUserInfoCallback
		   * @param user {Object} 当前登录用户信息
		   * @param user.userName {String} 当前登录用户名
		   * @param user.userId {String} 当前登录用户 id
		   * @desc 获取用户信息回调
		   */ // 获取定位信息
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 获取定位信息
		   * @param {Bridge~getGPSInfoSuccessCallback} successCallback 成功回调函数
		   * @param {Bridge~getGPSInfoFailCallback} failCallback 失败回调函数
		   *
		   * @example
		   * var bridge = new Bridge();
		   * bridge.getGPSInfo(function (result) {
		   *   console.log(result); // {"city": "北京", "latitude": 39.90337950036208, "longtitude": 116.4737188005154}
		   * });
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#getGPSInfo}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwNBiTgaVTMYQ6p1EQ9YosZqnbK0D6TXinofFTqUVz1V4w2EwsCyfV5lztZtQbzC39/rH3UEcI6KdniBgnluggyPHIB1gYhhCJN5hm2ShZ6UHJdLnpybhoV0l5eNqlKYoB2spZ2pmKuWoLa+p6kVvrKHvqKzxJvKT6WRyaHIuKZdupSvbc0VvMqrtsPL0wrH0bmN2t3Lz2DY17Zk4dbl0qra4hzixHPv6Wvkshj00KyU5+z1u+PwDZzLMCLM+oPhLedSNID6I7TQTtoet3DhxGRf8BB07kFy3hLIRwQF4MWfDbPjj0SrZT+fLhSYMlW7pEiXMmzJQuTdl4p/DaOIZAIAAduRBfuqIRjo7qyIzojFxCRXLLljPYS5QeJWqtR7EhVp0Wn9KMeJZmV64xx8KjOuIRUV9Gb26Te1AEXp8669a826gs2qT96Gb6+zZwXmT8qhVWzBMy23JS40X9F5Ss5Itt0mqE+3WvQsM7qwoM+xm1X8cZ5m7dxrjyr8aqxfItjdTm7dWYX6EmvVafs69QN5o93jn0a73DXXvLOHno4rjNfy/liDS5Q6u+n3c/Bju3Z1HBK9YWnhL81ccm15NwagG41b2k1Q82rf0yZWDSjb//h9zTNfhNR5iALNBnF3FqKWVcfyoI9lF5+cjm1wkQEibhfOdVaMKFpsWn4W62tYCgf9lZB5Z3O1FIHXtdgRYdih8eCCB3nG2m3G2sdajfaASWBeONKepmIHI/5hXkim7FtqSQ6gHZpJJDtuigkKKFd5yPU5awXXtO1SeekVv+d5qX1+E2W0ZJMtkel8t1KVt5h3k4WIk7ukcSnSQ9yWCcNpq3n4vLBVQkfJ6RmZ+g6SkCmqEKujkGn20y6pajLPrDHnSUqtgojpLeh+WEw032aZhyphmmfRHKOJ6ngJmIaYwiiukcqVb++d2ts8qqZaG9QSqrqCleKSWvLaqa2K6h/w564qLMOSupsGqGmBWZyJbIIZ7w9IrlBsRe2pOwAWKnkZbiJkgLuqlalumhm7I0p7pZ1nCpr5yeVy+9G340Y4GbMpXvo1/iu29qiPnZ4KitQstjuEVmhiGKMq0QbpTXKiwws8COuDCxxVlq8Tqw2vroxYiZiyt6XlU5b8TloDwyL79+26OuFTNc7oLOdmrmzWVaODOOLDt2M7KM9cuz0fz+e5jSIA7bVs+ApgsrmK0FvaXVhDKN6rbsIh11krW+uuaeOmfF8sN9dZzy02BHRpui3Ppb8rEcu9zfufcmHLNX2Q4Yt95ja3v03YDfSfXgEHtbsclFazbrqYDC63WOlC7vo+mz41buc9Rqt8xU6KKPTnrppp+Oeuqqr856666/Dnvsss9Oe+2234777QUAADs=)
		   */getGPSInfo:function getGPSInfo(_successCallback,_failCallback){this.pushBack('lbs/locate',{successCallback:function successCallback(result){_successCallback&&_successCallback(result);},failCallback:function failCallback(){_failCallback&&_failCallback();}});}, /**
		   * @callback Bridge~getGPSInfoSuccessCallback
		   * @param gpsInfo {Object} 获取到的定位信息
		   * @param gpsInfo.city {String} 定位到的城市
		   * @param gpsInfo.longtitude {Number} 经度
		   * @param gpsInfo.latitude {Number} 纬度
		   * @desc 获取定位成功回调函数
		   */ /**
		   * @callback Bridge~getGPSInfoFailCallback
		   * @desc 获取定位失败回调函数
		   */ //获取网络信息 -- 主要恢复以前的功能
	getWifiInfo:function getWifiInfo(successCallback){var that=this;if(that.platform==='h5'){successCallback(navigator.connection||{});return;}that.pushBack('bridge:','networktype',{successCallback:successCallback});}, //获取网络信息
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 获取当前连接的网络状态
		   *  - 桥协议: `bridge://networktype?params={"success_callback":"xxxxx"}`
		   * @param successCallback {Bridge~getNetworkInfoCallback} 获取成功回调函数
		   *
		   * @example
		   * var bridge = new Bridge();
		   * bridge.getNetworkInfo(function (result) {
		   *   console.log(result); //{"state":"wifi", "type": "2", "carrier": "china_telecom"}
		   * });
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#getNetworkInfo}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwNAyRRSbAmUQsE8aqNWTNEqFCJ/ep7IariqlUq8Wis1/v2Ay/UsXnNRlkhsS3Y7cjP8dXNwHIUdiwt+eHSFfWFEjY2HHIkEin+EAZELWYKWl4Kbf56Qi2EIU5aprK1ocXeqeqR/oG68cKi0qbYSmo2VmHu2rrqqpr6tErHOmbuyt8rDYcmzrbPK0J/Sj7ir1d7XndVkls/L2LoVxeWvhbzDj9BQ7qLU4uCFxqfSvqbqEe7147dO/u8aNG8F/CfAUpcCo2D540ZhLTbTvI8NRCh/8buWlEVuGhx4gGu9k5F3BkuWUQT4rc4DJay5QsVdZzKS3myp00eR7UCZLGwGtr4L0E8ufTsaICLyLdFwjgUXP4avSS56xnmpnjPP7sKOFqLaI8W9nsOrRrsqxY631FqHWe2CBOqaZtagfYUJIiRJrNCFSvUpQq/IoCrFNwUJkfDG+1S5grpJlMqeYc/LhyTYxjzU61WBUyWbicB1FGo7Zb6Yxt9YW767XhWq2uk8ZiPbY27ImSTdt2bA32bpPPUOcOp9u4aNz0sin/3FBqVr6znWeuW/vt0sglcB4/G5VtdO7ZR3i33Bst+e/WT5xnvFd8bPTzmYNmt25y/c7K8bv/TRFfSskF1dZf4f1H12Lr+Wbdef6ltoI/FKV3oIQlRQgWchQGg11YGdLTmE94WfgRDNtdd5t+lWn3YXXT9XOYiv2dFlphKGkWI4Mz2gRdczlCyCJt370FpAYrHljRcr0Bx16HvOxYJI/czUXkkJPAmOJvWLZ3IZXEjUYijjXKtqSTMG1pZoU3FkdgmWOC2CSCBpY4HlxTkeihnPLNOaB/ACU5m3p6ZtmnmjexyRuHgwramoyEWtkXZnNN+qKCh7ZJHwkBMhpnozo+mql5e+Y3n3DPYVbefk8uWmeq0gnYqn6Bdhqrb0HKhaqsJpwIX10nVinlm5ddqo2llLKqZIKv/wIraLFBarogk3TaxtxmotqjaKrVklqoqi7CGqqq/lDnJrSYOsifsaQCtalqI+Y4J2MF7thjSGwemSyniqIb7gz88irpvS2+8O+aod2Z5g0FgxnwuQl/+16uttL44IbusQvucMFWDB6G7Crmqnz64nklpt0i7HBMSdZ7QZhlIfruYwOSPGEEzl7oJ5QUX+tpgwbPi/GCiXom8GhAB00unMn6bHS6SAvt7tIi0se0UQklbe+lpR1rdcrjcmtkpVuP6nXRUHnbstgbOhbvuj/vqnbHEOKLa9PdxV13gNK222/UZwMN8mvwwhyiybqKVndwg6ec6N9Ou2044hJrG/bHtDl+JCazhw8bMbY5k7bztOYGdvnnvSJI+VOqr856666/Dnvsss9Oe+2234577rrvznvvvv8OfPC+FwAAOw==)
		   */getNetworkInfo:function getNetworkInfo(successCallback){var that=this;if(that.platform==='h5'){successCallback(navigator.connection||{});return;}that.pushBack('bridge:','networktype',{successCallback:successCallback});}, /**
		   * @callback Bridge~getNetworkInfoCallback
		   * @param networkInfo {Object} 获取到的网络状态信息
		   * @param networkInfo.type {String} 网络类型值
		   *   - `"0"`: unknown - 未知网络
		   *   - `"1"`: ethernet - 局域网
		   *   - `"2"`: wifi - wifi
		   *   - `"3"`: cell_2g - 2G网络
		   *   - `"4"`: cell_3g - 3G网络
		   *   - `"5"`: cell_4g - 4G网络
		   *   - `"6"`: cell - 普通蜂窝网络
		   *   - `"7"`: none - 无网络
		   * @param networkInfo.state {String} 网络类型字符串 `"wifi"|"2g"|"3g"|"4g"|"fail"`
		   * @param networkInfo.carrier {String} 运营商 `"china_mobile"|"china_unicom"|"china_telecom"|"other"`
		   * @desc 获取网络状态信息成功回调函数
		   */ // 比较版本，当前客户端版本和传人的版本比较大小。比如说，你的功能需要在5.5.0以上才能使用，这个时候，你要和
	// 5.5.0相比较（relVersion='5.5.0'），如果返回0（客户端版本为5.5.0）或1（客户端版本为5.5.1）说明功能可用
	// - @param {string} relVersion 要比较的版本 'x.y.z'
	// 	- 客户端版本小于relVersion时，返回-1
	// 	- 客户端版本等于relVersion时，返回0
	// 	- 客户端版本大于relVersion时，返回1
	// - @param {number} digit 比较版本段数，默认值3
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 比较当前客户端版本号与目标版本号
		   * @param relVersion {String} - 待比较的版本号
		   * @param {int} [digit=3] - 比较版本位数
		   * @returns {int} 比较结果: `-1|0|1`
		   *   - 客户端版本 < `relVersion` ，返回 `-1`
		   *   - 客户端版本 = `relVersion` ，返回 `0`
		   *   - 客户端版本 > `relVersion` ，返回 `1`
		   *
		   * @example
		   * var bridge = new Bridge();
		   * console.log(bridge.client.client_version);   //"5.8.2"
		   * console.log(bridge.compareVersion("5.8.1")); // 1
		   * console.log(bridge.compareVersion("5.8.3")); // -1
		   * console.log(bridge.compareVersion("5.8.2")); // 0
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#compareVersion}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwNAyRRSbAmUQsE8aqNWTNEqFCJ/ep7IariqlUq8Wis1/v2Ay/UsXnNRlkhsTBdfciWtY0x6dH55H3sBfIh1jX2DY48agx+UfXqMgAOIhpmOjJsRfVeWe5NeaXGSAquAq6wXrqSvjWuqiKe6lbWokRq/pVObqbSlwr23vxazzbEOv8Gol6DNyxzMi8CGlaiO09TBu6C+6nfQwdbt5MnW093prcN20an8sbnXFd/umNXs/MZt6hd8jwqRNmSxNAOes+xNvnKKG8WaSKpVN4MZ9Baf/0JFqsOO+hQHcZ1d3yGFKiPUkbLdhhuDJlP5kfX4pkabPgzIYxeS7MeVMCUJ0Wi9I8ShFoDlLX1gRrCYTjtqH6ouI8+U0pu5Ivnm2dSpCczGo+ZQ3MitZr2YBlwYZTe9YtOHts6bZbC5UCyI4ZEaaFB4rpXViB8W2aeBANRME740rlZDjyX6KPkzYmuVesZaMNOdvcdjYzYLSeC+/8fA6PSoI1T9+1mya1CLiVsQaF/PZ1XpesMXY7jFN0bq4aSfvmB1zo6sudRzCeixLxWJjUiTuOeK8UusSxLZMl8Xx0cul4s2tWwXY7ctOLR6tfkf64g8Nkz9c2EZ/b+uHtKev/nx3WYEj5oxhGtJVQVXMT/WMHgcYFESBznDmYn1y7gXehfN/hVhwMt/23IXYddpUhiAKK6EuJhJlXoHfLPWXWdDFCyGJ3TnF044IMoVddjjm2Rl+EPHYHGm51/STcgaHtKJtt1bXGnZKYMbmZgS3CFmVvCArJoYwAujYjhpNhBaUaYH6Y4phdlvdlmV+i5mJOTg4HXZgjiSPnVnDCOCef8i3ZoJ4v9Wkkl/+ZSaF4WuaXIJkp+HWkTo3KCKmKykgWqVqMGurolsQxaNKdkYaqIJrztQRqZeExtxdEK3YDq6qm2Vcqe/gh+aRsmeJ6ZnTXNcWrn1WySamlVxXrX52a/y7KqWpE3qdgf6Ry56qzFd5Zba388TOhcy1Oi62otp4KppiJskrleDD+2CRJ5/YXpJ3Y7dkunu+Kq129c7I7rA2TxuljdOri8C9VWnb6Q8EGF4kijUOtu1uCmpla3MOCWoesW9mKaTHAERs6sbFpHktsnPt+i6OvlHzcq5rzDqqhyiNGgOVXhQZqoryv2qytsIxBjDPFyrmcpHtrGuyfuTwXnbSuSJ/4a67a0trTwG0567Nu2VHrJbfhzjwqvlT/xDDXDoF84qrL0nmwt0SnPWuPWkt59tsSii03upKKTDPLCB+NKsrRfj3y0H83zOCmffEN7qH6Ov2p4H6Z2TGthDjq+GDjgMJp+c1mjyd031RpvJ9wZRNuVeqqr856666/Dnvsss9Oe+2234577rrvznvvvv8O/O4FAAA7)
		   */compareVersion:function compareVersion(relVersion,digit){var version=this.client.versionStr;if(!version){return -1;}var v=version.split('.'), //客户端版本
	r=relVersion.split('.'), //传入版本
	d=digit||v.length,i=-1;while(++i<d){var _v=Number(v[i])||0,_r=Number(r[i])||0;if(_v>_r){ // 客户端版本大于relVersion
	return 1;}else if(_v<_r){ //客户端版本小于relVersion
	return -1;}}return 0;}, // 主要API，用于页面同客户端的协议回调，通过URI SCHEME进行H5与Native的通信
	// - `name` scheme name，协议默认为`native:`，可以省略不传
	// - `path` 为协议约定的访问路径，如`app/beep`，
	// - `params` 对应scheme的query参数部分，为调用时传递给客户端的所需数据对象，对象内可包含`successCallback`和`failCallback`
	//
	// ***鉴于iOS回调的实现机制***，`newProxy`参数是为了避免在iOS下多次连续回调造成的消息丢失，当设为`true`时，每次均会创建一个新的`iframe`进行发送。
	pushBack:function pushBack(name,path,params,newProxy,enableH5,events,callbackIsAlwaysAvailable){var that=this;var uri=(name||'native:')+'//'+path+'?params=';var callbackName;var args=[].slice.call(arguments);if(typeof name!=='string'||typeof path!=='string'){name='native:';path=args[0];params=args[1];newProxy=args[2];uri=(name||'native:')+'//'+path+'?params=';}if(that.platform==='h5'&&!enableH5){return;}params=params||{};if(params.successCallback){params.callbackCommand=params.successCallback;}for(var i in params){if(params.hasOwnProperty(i)){if(typeof params[i]==='function'){callbackName=buildCallback(params[i],callbackIsAlwaysAvailable);params[i]=callbackName;}if(_typeof(params[i])==='object'&&params[i].hasOwnProperty('length')){for(var j=0;j<params[i].length;j++){if(typeof params[i][j]==='function'){callbackName=buildCallback(params[i][j]);params[i][j]=callbackName;}}}var formattedKey=i.replace(/([A-Z])/g,"_$1").toLowerCase();if(i!==formattedKey){params[formattedKey]=params[i];delete params[i];}}}uri+=encodeURIComponent(JSON.stringify(params));this.sendUriScheme(uri,newProxy,events);}, // 发送uri scheme
	// - @param {string} uri
	// - @param newProxy|events 同pushBack,可忽略不配置
	// - @param isRoutApp 常用于唤起其他app
	sendUriScheme:function sendUriScheme(uri,newProxy,events,isRoutApp){ //去啊内
	if(this.platform==='android'&&!isRoutApp){prompt('alitrip-android://'+uri);return this;}if(this.platform==='ios'&&!isRoutApp){messageQueue.push(uri);return this;} //hack ios9&safari的smartbanner
	if((/^taobaotravel:\/\/smartbanner/i.test(uri)||isRoutApp)&&isIos9AndSafari(this.device)){window.location.href=uri;return;} //非去啊内，iframe
	var proxy=this.mClientProxy;if(newProxy){buildProxy(uri,events);return this;}if(proxy||(proxy=document.querySelector('#J_MClientProxy'))){proxy.setAttribute('src',uri);}else {proxy=buildProxy(uri);}this.mClientProxy=proxy;return this;}, //显示titlebar
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 显示标题栏
		   *  - 桥协议: `bridge://set_ui?params={ "titlebar_display":"show","success_callback":"xxx","fail_callback":"xxx"}`
		   * @param sCallback {Bridge~showTitleSuccessCallback} 显示成功回调
		   * @param fCallback {Bridge~showTitleFailureCallback} 显示失败回调
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#showTitle}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFgTAqRS8OQmVQ8E8oqMWTNQrMAqNeplDYR3Cq2HAWXv4FpO0wdb9FuT/3hzo/13fiVceQ3ccdB2MDHhuhnqEbIuPCIESmolrgn14hJViTWFzFpwRf45nl4aWXqqUg698cKIspZiXdqBnhqqQr3+hHrCuo72pmbOwpaEYw7C6m5KkzJa8trVysbrclGnFkKnazLXVj9q8wM7mw9vCx9TOGdfQuevhnfLb5K/W2MDZ0q36++i90ge+T+OXC0b14xawIlCASGblurc98G0svwMGGrTv/uAFZ0qPFCxosbFxH8eI0kvw509KGkqC3lRDRnWsL0GPMmKZsqQ/EkpzMo0J89W/jiqMXjMyAQjppEpTQiU1r5mtGM6sqG050MrVZNU67kNKw1xa7zOjNrvXHmxJWVuO0e1qULUdZ9G3blQa903o3lapdlQoRFl6U92zax3HAXCVtEusawZMB+NzheK4/wUopcxOLzhxPz08spO8PthVa0wsnScl6lDCvpX4Og20ld3PCT7JG0kd0uONny7pCr84r8HXi2hs3AYcs8nQqxSxLMk08nS1V618I+1T6fJ9Q7ZJfXRVTf6hfiV7ODiUtCjp418a3la+PT7FavevZsewf/eZ1WegG1x1Zu5gEYV3OIRZdfDH2NpuCAjW1n4Hsv8ZUaYOrRBRJ3Fsbk2Vzz7dLdCTqFWJpU47kHj4nwScjghF9VF6AJ58EIzyPekNbaCDeCpaOKInrXUQn0ndSjc5xlSB6Lj522I4lQDkVkgxxiZCWSUipJJY8UOvnhkDFeieWF4vnYpZAaqlnmXSkseeaacbaJnZENjslmgop9GWeFuq2X3ZYr7lmgmn42dWeOgkJIaJH2CVYlkBj2p+iMBB7qW6T16VnZlGBBpsKPuOFYjqNPuQhVqRIeCehfpHVaZpKHZUkpl4nVhqmqnzLKKpwC3qoXdbLhmiawKZpJZmyp/xKLLJO01vjfsvoVm9mznKJJ6KPHIppctcbihWKQrRq0n3we2pZtsHWSO6J1YP4JK367gtcuT9oK1625skJX6YPF4SXuoOJuaNO9MozUpKR95nkDwnwmHONUDheq8MDvxlqwnhMnfOKbRM3KnWlygujxTyBbpF2tuZbYIbSuReactyu32PK1xUVJMbtzLuekqd/5e2V8qFmaL70Up2xvcMpCS/DRq36s9NBM1/vw0yZH/ZnNQnOrM4reAkxqssZ9za9xM98cNsPa+koVrGGOHNq/vFprtNdLax2hjCn/uvXdcH8X73C18ne2f4avq9rJ6ipHJ7w0x5y4xhkazLLjZkIbmneSASub9N8WR+rm2Nh2vmC/zo67+H0Ze34pcqFTPlXsss9Oe+2234577rrvznvvvv8OfPDCD0988cYfj3zwBQAAOw==)
		   */showTitle:function showTitle(sCallback,fCallback){this.setUI({titlebar_display:'show',success_callback:sCallback||function(){},fail_callback:fCallback||function(){}});}, /**
		   * @callback Bridge~showTitleSuccessCallback
		   * @desc 显示标题栏成功回调
		   */ /**
		   * @callback Bridge~showTitleFailureCallback
		   * @desc 显示标题栏失败回调
		   */ //隐藏titlebar
	/**
		   *
		   * @method
		   * @memberof Bridge#
		   * @desc 隐藏titlebar
		   *  - 桥协议: `bridge://set_ui?params={ "titlebar_display":"hide","success_callback":"xxx","fail_callback":"xxx"}`
		   *
		   * @param {Bridge~hideTitleSuccessCallback} sCallback 隐藏标题栏成功回调
		   * @param {Bridge~hideTitleFailureCallback} fCallback 隐藏标题栏失败回调
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#hideTitle}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEolExPBwTSWZRaRQio9QnqIqVOgFQ4pS7bQaq32w0ZCZvu+JuWTumvtPtTt0hzsOXcXCf7rUmcbdByKDnh4jIBgjnNuhoF4m3V5lo1cfY+DVhmKGI6ak5Nyq4ABqYeWXJJ2rAV/o36Ym6uHp59jpJGsY6u6uL2wr86ZvqKnv8i8tpqqb6UWsJ8Xxni2BtfO0hzfxQvfyIHR487MetPR2sifwcKw5+Likcqp7cLtcrDx2Plu7NLx+lXONSwROIrELCdfoW3kNYb18Dh5AkHloG6xudWP8OKUboiBETtY3l7I20WKzRtZX2WAJUaXAezIMvW9qsCRMlhpw3afpkGJDeph0ZobGL6A4IhaLZsByNqbRi0znmktJwKS6rM55aT5ETgRVoV5ozxV7c57FTT7NGt+YcawputJAoUU0kxlTgXajo0Ip0Swvv34c6SxZOycur0L17mxZN3Jcq0smHG/9zPLgQ3aqUU3bDzFcDaM7KQn+knJegP9Mn1Zo2x/gsiccVXQcuHVvx7My1pQrGLTv4XIDNgrZmSzr1u3lyww7smnyw3VvN1z5Hjlq6sdWgc/fTWNckeO50vUM8fFtu8b7dhX+/rpttbvabtQOPX3DqWTPk/Tr/1Vedf/opxt8to9m3TVyGrdeQXtQBuKCCyTxVFn5pKVRehAUlxpNqbp3Q3oQSRveWe8REBt5n54X401UnalhhagNeOAI+pQGynIgbyieDjbf9KN5AQFYm2os6QgZhW0L+RqNrJw1pGXEpMmkkhv5xWJ+UOyrJIGGrdQlbg1q2OJ9hTQoHXUSSjQmUjWvuduM/OU6no1UDwklnPDN2ZuZX6sm0XZ+LARaolyNWWSR6hToJY5B7spbocUf2VqejX9HGgZsaMlqplo+eueR9WApF4pv78ZbpeVGStSKCqFpFn6hJqkhqllGCWtyQj+Y4qnKbMsejoVvSuaqguaK6U5BP/x07aKjLEkqkBQkSmAWrtbK5ZZcocilmmJ16W2a2D3KbX7VtZodtgF8ay66Fas6qEpKpXvusu7J+S1K50VKq56uFhlghrz0aueuU4cW5bwqaDkuwvwjnsDCZpx5MLKBD6Yvpn8K6lPEFHa4Z8cTOwZpowIKGTO193ax7moDxGjytwGAhquTHMCv7awkguXzxrThPqrOc5772s50vByF0UOkFa3TPJqw89NLkNo2jwklLXbC+9RZIbrL0Mm2pp+hS+LPXW/+WptgI06qxlWd/jR9Hi4pctsdXJw3mu0Cb2rXdcEMdd6PN+pyu35zK3SytpUq4raSIP35yq1DhiuZ48EMmfpnkdxp4NNek9UqzzF7HaC6+PIs+cX9VE5anq4P7lnBUss9Oe+2234577rrvznvvvv8OfPDCD0988cYfj3zytxcAADs=)
		   */hideTitle:function hideTitle(sCallback,fCallback){this.setUI({titlebar_display:'hide',success_callback:sCallback||function(){},fail_callback:fCallback||function(){}});},getRequestParam:function getRequestParam(uri,param,isEscape){var value;var that=this;if(!param||param&&typeof param=='boolean'){isEscape=param;param=uri;uri=window.location.href;}uri=uri||window.location.href;value=uri.match(new RegExp('[\?\&]'+param+'=([^\&]*)(\&?)','i'));value=value?decodeURIComponent(value[1]):value;return isEscape?that.escapeHtml(value):value;},getRequestParams:function getRequestParams(uri,isEscape){var that=this;var search=location.search.substring(1);uri=uri||window.location.href;if(typeof uri=='boolean'){isEscape=uri;}else {search=uri&&uri.indexOf('?')>-1?uri.split('?')[1]:search;}return search?JSON.parse('{"'+search.replace(/&/g,'","').replace(/=/g,'":"')+'"}',function(key,value){var val;if(key!=''){val=decodeURIComponent(value);val=isEscape?that.escapeHtml(val):val;}else {val=value;}return val;}):{};},escapeHtml:function escapeHtml(str){var that=this;if(!str){return '';}var reverseEntities={'&':'&amp;','>':'&gt;','<':'&lt;','`':'&#x60;','/':'&#x2F;','"':'&quot;',"'":'&#x27;'};return (str+'').replace(/(&|>|<|`|\/|\"|\')/g,function(m){return reverseEntities[m];});}, // 获取URL和客户端传递的所有参数，会优先获取URL中的参数
	getParams:function getParams(isEscape){var that=this;var params=that.getRequestParams(isEscape);var client=that.client;for(var i in client){if(client.hasOwnProperty(i)&&params.hasOwnProperty(i)){params[i]=client[i];}}return params;}, /**
		   * @memberof Bridge#
		   * @namespace
		   * @type {Object}
		   * @desc 通知交互集合
		   */notification:{ // `alert`弹框
	// - 对于浏览器的生存环境，仅`message`参数有效
	// - 但对于客户端类生存环境，则可以接收回调，以及弹出框的标题和按钮文案，回调中客户端会回传用户相应点击的按钮的索引值。
	/**
		     * @method
		     * @memberof Bridge#notification
		     * @desc alert 弹框
		     *  - 桥协议: `bridge://alert?params={"success_callback":"xxx"，"message":"xxx","title":"xxxx","button_names":["xxx","xxx"]}`
		     * @param message {String} 提示消息
		     * @param alertCallback {Bridge#notification~alertCallback|Bridge#notification~alertCallback[]} 消息提示回调函数
		     * @param title {String} 提示标题
		     * @param buttonLabels {String|String[]} 按钮标签
		     * @example
		     * var bridge = new Bridge();
		     * bridge.notification.alert('Hi, alert is ok.');
		     * bridge.notification.alert('Hi, more button is ok.', [
		     *   function () {
		    *     alert(1);
		    *   },
		     *   function () {
		    *     alert(2);
		    *   }
		     * ], 'bridge title', ['ok', 'cancel']);
		     *
		     * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#alert}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwRBYVSUMzYHwqAcyodQm6aoXTqdTJBVPFx8QXur2G0mqxN4x4yq3VcZwdXcMhc/vbfnZWF7j3IKhxuNA3CEfox1B29+iQiFFp1liIRtSFOck4eSmpB0jnBom12bbZyXrqqpoqWtEXmWi71br4WiurudHL+Qr6h1t6rJuZN9wRvBsrTKkZ2fC8OkvhrFz860lsuE3m+4mobMxNPuopam0K66GNvO5e18oXDv0Mbz4OSu3NTJq8fPj2HTs3b5miguAGXuuWAds7XhARLnQIsV6WjP8A1U2UpK9jSIGkJjiylxClx5HVOFrAo7AdxpnJDsJ0SetmNJk1e1K0eZOUTpo/fcKSOTSHsXir0AHJuXMcTH84n/65Ko4N1XQwgjntuPUWv4E1JUrwmvUkKi0tgapE+wFu04DoxLoNCLdk2opSp+l86zcq13JA7ebdyxZvYJbNxhoeG9adWpAM4y5OVRZzUZGOJWu2HIrez39HA2dODI2EI9LxNH5EmiurCnaVXUtkXdks4Xtk16psO3nyCdq9L/5eG9z0xmjfCBL9CNxzzKovP2N1bvR2bOx0GzNPiTg79TRfoS8/vvLyYMqhBbcdXptze+3fU3c3Dxq90eu8V8f/xw/MZ7AFlRBj9h0IX30DTlXgf0tRF6CC+Azln3vIQcYCeQ3O91951a1n0FzcsadfeJZASJiIKvbTEGkmofjhSA9JmA5Tyo2oGovsHYafje15OIJF5eFWY2c0AilCcsVdN+NptvUFYjY3GvighaUdKVuW+cmHXpU8aekkmMvN6CN/iq03YIJkGsmjcL6NBiNUaxYGpWslXmnmlhfJxReHNHrZp157YtijehW29qaezQkJlok7GvlekFNOWtxjdBZZX44/nrnffYBiqltElD5ZaZ+IDhqlqHfh6Wib0tnJ6XlaLjihgK82+lqcJM1a63SrDnkjYKmGqKOMhFqErGhB/9zKanqCpQlnpiY0uZmzfK56qlDBVtvci2jmpmt/2zbb7VkuGTuslFg6G126AHJ734mXnvYlghcSuMKp+vZKXFIZQhptvS5uqKFVV/rrHI958uDjnFW2a1XD0s0JcQoUdohrwUxinOTFdwq7opWhRogwfZH52emyqQp8LB4LR6upt+Jh67KY1obbkMzVXlvwwAfjvOuISl78rMfxegfspgn/hRiD73Kwr9JEf+r0yOom3WWgiSrMpaxCO6i1cTDnfPSHWHsaNqkvs+s1tT9PvTHKNgvqtsRa8Sq3vR3Pu/PURZf6d4I6i01u2Rqj7S7ZEdiVcr/KMu41b5EW/vThhT4mLlDJ4P6d7K+4aosvumX2Le3TJDNNOdW9rm21wa6/Dnvsss9Oe+2234577rrvznvvvv8OfPDCD0988TIUAAA7)
		     */alert:function(_alert){function alert(_x,_x2,_x3,_x4){return _alert.apply(this,arguments);}alert.toString=function(){return _alert.toString();};return alert;}(function(message,alertCallback,title,buttonLabels){var that=this;var callback=function callback(ret){var buttonIndex=ret.buttonIndex;if(Array.isArray(alertCallback)){alertCallback[buttonIndex]&&alertCallback[buttonIndex].apply(this,arguments);return;}alertCallback&&alertCallback();};if(that.superthat.platform==='h5'){alert.apply(null,arguments);return;}if(typeof buttonLabels==='string'){buttonLabels=[buttonLabels];}that.superthat.pushBack('bridge:','alert',{message:message,successCallback:callback,title:title,buttonNames:buttonLabels});}), /**
		     * @callback Bridge#notification~alertCallback
		     * @desc 消息提示回调函数
		     */ // `confirm`确认对话框
	// - 对于浏览器的生存环境，仅`message`和`confirmCallback`参数有效
	// - 但对于客户端类生存环境，则可以接收回调，以及弹出框的标题和按钮文案，回调中客户端会回传用户相应点击的按钮的索引值。
	/**
		     * @method
		     * @memberof Bridge#notification
		     * @desc `confirm` 确认对话框
		     *  - 桥协议: `bridge://confirm?params={"success_callback":"xxx"，"message":"xxx","title":"xxxx","button_names":["xxx","xxx"]}`
		     * @param message {String} 确认消息
		     * @param confirmCallback {Bridge#notification~confirmCallback|Bridge#notification~confirmCallback[]} 消息确认回调函数
		     * @param title {String} 确认消息标题
		     * @param buttonLabels {String|String[]} 按钮标签
		     *
		     * @example
		     * var bridge = new Bridge();
		     * bridge.notification.confirm('Hi, confirm is ok?', [
		     *   function (result) {
		    *     bridge.notification.toast('Yes');
		    *   },
		     *   function () {
		    *     bridge.notification.toast('No');
		    *   },
		     *   function () {
		    *     bridge.notification.toast('Btn1 callback.');
		    *   },
		     *   function () {
		    *     _bridge.notification.toast('Btn2 callback.');
		    *   }
		     * ], 'bridge title', ['Yes', 'No', 'Btn1', 'Btn2']);
		     *
		     * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#confirm}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwRAoVSYPxmGgGpMqnlRi6apdO7tRbrV6ZXmp3a82i0+dwtLwlA9yINftjduSl/CJkDzfXJpG3UcgAKPilCKUHNrhI9/fIcbiQSNfYgAlpKafGeGc5GminlSlKaVjqB/mJyGr6hDrr2tFXGwmr+Loomxqa63mB24grl2hMqdkJDCrWqisNzXumXO27HHsMUhzNXRdNDU7dO2ZbuR1Yvoss3v4WfP1s/R27qZ2Lj+2Nhb4qz15AbJLq+XPET10wehHIoWMW7uAkgvDwqKrIKSIpif8PhkVkOLHgNIP7PIrcB+rXwmYrpYF7qfJihpjrWNK6adOgqZS/cLqs+bNlv504zlEw2g9IBaMTkN5T2vROVGFPb2wcJxUjTaz6/mm4qjPrJYVouEI0eVTmULHmtobtOjIdXIdBzb4bK1QhCaY5P7Is2xHoWopyzwL1SRQhYra39D4kexfmQbBxPQwWOdhw3slqD3dzHDdzZMECUXoVgVZjvqmY75aUaRn2rowhH3NEmBpDbpLxWNtODTF2S1qS2fnNRnVgL4YZ5/1d/VYy7c/Dn282TtwZ7+N7GSMvHq95Z+Us+KrmXB15W8JJy3t3ml7zSesn6GoGHNpz/rmyZ+r/vx+Hba0lxB9hAA2YTID7DejObbtNRZl9ApnXHl4P6uZaXwkOJN92DaoQnIb5iEYgduH1x9yIpMGF4ISl9WaChOhxZdp5lwkY438vfjdegzcuOAJdH7613FIZ2ogiMfoNyWOJGN7mY5IWCHkih9ApCWWVFzaknXqzqZglkvEt2VhyJp4XpYFE4lhZmc55aSGYHsG3Xn2gVZidLGfa8COe1iUWIg19VpUnoEfy6eJ1fa0Hn59tWoQeeHVpdcp2HZZwjaRUBtUooac9ySSTgT6oKZlyhVrlnp9Supia/hG4kaPzKSZiet1FqqCo7+24IYiJmmccsJbqGCZPVrI4LLJw/8q45au+4VWjoa7OeuuzRR4nrbUpANcjpfhxOy2W4s34GzA0Kdvsl04uS2yn54aZbpzrvrlhpu/CK6Wv4TbZK4zQeliUlPidGeGhMoBL4WjseQqpSjT6O260VcX7mp5rYntlweQ9CpDDF/sEMsQT55vWvv3yq/Cluu5rpMlg2uWgWLGaeiAhL0eXssIVU/vVnaaenCbMb6Zo5mlAawlZ0aj5bGu5CyeXbZBMQ9gfqTvq+zDHqQbGcrItDOpysavKy/PSxzJ4McIrBlpt2hl3OZF0Bpud9bhDcy232HTb7Kq7YA/sXthx/8o04CuAOziuipNI8ZMeTwp5i2tcW3bLjzGXuq7QOlck3OUroi1mwk9DRXrppp+Oeuqqr856666/Dnvsss9Oe+2234577rrvrnsBADs=)
		     */confirm:function(_confirm){function confirm(_x5,_x6,_x7,_x8){return _confirm.apply(this,arguments);}confirm.toString=function(){return _confirm.toString();};return confirm;}(function(message,confirmCallback,title,buttonLabels){var that=this;if(that.superthat.platform==='h5'){if(confirm.apply(null,arguments)){if(Array.isArray(confirmCallback)){confirmCallback[0](true);}else {confirmCallback&&confirmCallback(true);}}else {if(Array.isArray(confirmCallback)){confirmCallback[1](false);}else {confirmCallback&&confirmCallback(false);}}return;}if(typeof buttonLabels==='string'){buttonLabels=[buttonLabels];}that.superthat.pushBack('bridge:','confirm',{message:message,title:title,successCallback:confirmCallback,buttonNames:buttonLabels});}), /**
		     * @callback Bridge#notification~confirmCallback
		     * @param result {Boolean} 是否确认
		     * @desc 消息确认回调函数
		     */ // `prompt`提示对话框
	// - 对于浏览器的生存环境，仅`message`、`defaultValue`和`promptCallback`参数有效
	// - 但对于客户端类生存环境，则可以接收回调，以及弹出框的标题和按钮文案，回调中客户端会回传用户相应点击的按钮的索引值。
	/**
		     * @method
		     * @membeof Bridge#notification
		     * @desc `prompt`提示对话框
		     * @param message {String} 提示消息
		     * @param defaultValue {String} 默认值（经测试目前(`5.8.2`)在客户端无效）
		     * @param promptCallback {Bridge#notification~promptCallback} 对话框提交回调函数
		     * @param title {String} 提示标题
		     * @param buttonLabels {String[]} 确认按钮标签
		     *
		     * @example
		     * var bridge = new Bridge();
		     * bridge.notification.prompt('Hi, bridge, how old are u?', 'default value', [
		     *   function (v) {
		    *     console.log(v);
		    *   },
		     *   function (v) {
		    *     console.log(v);
		    *   }
		     * ], 'title', ['ok', 'cancel']);
		     *
		     * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#prompt}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwNAyRRabxqVgmntTkp4oVOqUBrjVLjGqnYGqobFY21YDtuIsWt8no9fUN8abh4QdX/sc2EchB2KAHxWZId2jnNIjXsbiA+OXIMGn1KDGJUWlHiNiYiCAqeMpnOXe3WrVZ+pa592rK59ZnC/KJGxobCUtK69s6rHpWDIqMC3iZ61DriuqxCz1LpymNOXxbO61cHXzd3IlKva37fX5BDjwqTMpeYU68ahGf3V6+dw9Jb+z5y502etzUeavn59eufr0I4hPIqp+cWwwVquPHj1PAgf8TFW2kNO7ix46s6oB7h1Kfw1QmERZqeVJlSmfgYB6DuTImTZE5cbqc0ZAkxYHYgOSx6LKhrHBGEyZFyuynx2U1Fk4NKnPqzH/5WErNYNUr1p3+eA519i5jhLDRutY0qxVfWBJtR9VldDXZ073dRtwFiQUimFeE46L1aw3w37T7oIpbeZAr163NKJc5G1nv2bFz8ZIdbDgzL2WFyWL2PE+V2qNMoxYM7Nmu48O0Nyx+/Povu6J9a2u4DSx14t0hIT9ENzr5a4kq2zofiZxtuq8khZdVnkI1z6KCp88rLdqya6eb9fYGL0lz1uDQP5M2vJSuetO4ycM3bzA2Ytj03fr/RO/VaUFkMRNjJgGoHXX7PWecewceF2BoJhDHVxz6KdYeRPIpSJtNF463Toa/taeUhV3JxqGGE863moDWVZfYhjrZU1xuswF304zy1JgXVQ62SAFnIgJmY08+SuejbTcOCSN/nTkooJJ7AchakQY2+aSUIPbGW34nctQck0EipWOE/n1F4ZX7belllw1SuR536SWXJoRVEjWdii/RSaKXzGF4XXzRvfeMnxqhiV+SdoYY6Hbz3WkmcHJG1KOB54EZaYwSivBdmNitRaiklQ3a2of3VXjZhWOJNimCj/ao22xw0sifnuWhCtqXHYpJq3j2sXeko0a2OqevheK65HWW//K6o5GzlhjssMICCWmsHK56arWGUiqWrJiWNhmml3JrLaTgvkrkeje5+imD4Xabqq4HsfsWn58WWe6aEErWGDxktiQUDrlGNfCmUe5QMLAJT0rsDQnjW9xS1DbroZkF4hnvuDICvKnGsPY7a44cW6wuxrl6zOmQ9dpaqcGebvhnlvv2KyjJ3Gqr7LePyQylvvCeGy2/PoG8YqMNuin00O+u2/KuQbOotL8pjmi0mvKKKyzOTP/8sqnp9tcwys0u1/XVX6/868RnE+20i4kCzfO8TXNJ6K1023tCp/1ZbXebbxf9Z3dVy0Wg12oHfKzWc//LVM1yg3rttH7XOvPUFTo92PbHjWetc8o4AQ1xtHx7zaqJQmJumeNNrc56666/Dnvsss9Oe+2234577rrvznvvvv8OfPDCD18AADs=)
		     */prompt:function(_prompt){function prompt(_x9,_x10,_x11,_x12,_x13){return _prompt.apply(this,arguments);}prompt.toString=function(){return _prompt.toString();};return prompt;}(function(message,defaultValue,promptCallback,title,buttonLabels){var that=this;if(that.superthat.platform==='h5'){prompt.apply(null,arguments);return;}if(typeof buttonLabels==='string'){buttonLabels=[buttonLabels];}that.superthat.pushBack('bridge:','prompt',{message:message,value:defaultValue,successCallback:promptCallback,title:title,buttonNames:buttonLabels});}), /**
		     * @callback Bridge#notification~promptCallback
		     * @desc 提示消息确认回调函数
		     */ // 弱提示
	// - 用于调用客户端的弱提示进行些许文案的提示。
	/**
		     * @method
		     * @membeof Bridge#notification
		     * @desc 弱提示
		     *  - 桥协议: `bridge://toast?params={"message":"xxx"}`
		     * @param message {String} 提示消息
		     * @param milliseconds {int} 延迟消失的毫秒数
		     * @param callback {Bridge#notification~toastCallback} 回调函数
		     *
		     * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#toast}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwRBaVAGbS8EREo06jlRi6arFQYbXZBQeOYcXUm9iqs2ot8/sOn8XxMVravrLpD2r6DsdAhic2N+HHgdigWPbHtTBYZyjBmFFpBuiI+biJOGnH53B5MTdYeXqXpyqp1/hRuuS6uZiq2sZqVecB+4gaimvr5ioMuvf16ZlJaKocOdxaDMKL3Kx8XBvqHA3K/Ksxja0r69jdWV0IPWoBjt7Obt5Om41dLk0fu92tXQ95fh1vzx0+Xv/giSM0S85Aa98Y9hO4JZAohwkjqKtw8Vkeif/yDlHUFNAjRGLaKkLIuG1XsF7hNOJ6qXGlN0syW+azSQ3gzZp7ZMLc+TPnv1s4CFJapXAmEEH3lJJbk3QpBaMWkXL76MJXQabzIA5tSuzgBq1JySKMWnbhRpCvHL7jWlFfOqtiG+qUmysm1Il3wWLFkJNd4L0dXaZ1SrMvy4h6GfMNCs3YYX4+2VI1ixKj37w7bcVtWhfoCMFqv3KGvLhwypBwn3YN/bkrypJ2VXM0XFXnbb6Zc9tGe3b143FXEe8ea5X2MtCuiXb2F9C5con7VgKD3nZt8ZNqkwW7/pq18HXYTYe1jI/Ep8QmJxNGz2m0TfZszUeG35v8TM/Ed6v/816dcaS4lRyB8Y1X32HtZSePdAZ6x51s6fXXwXmiFUfSXng1+FeF913IH4bdMfdQfoB9OJhjDi7mi4kesogTXY3htR6FImw4I4qbvSWci/pdtuOEz3GWYXhBlOZeajZG+N+H6iEpIpHzaXYgPD5SmWKRsPUhpJUdJjKikrkpB6SRV04VZo28ddnYQWo+CaOYTLI5pJtTMqhggmPW5JgNPG5ZIp8WzvDnklwJOqgMiYIopFlbbQccoFjSmeKCdkoZp6V2kRnjgY7mCWmokqIpp2sGtUYqaqP+eKd/lH6pKm49tRpprcGJFCuCJZRZ5qO9EjedfF4BR9lcw154nAm8/5LI46890inZmqfZmiWtgQpIn7QBQpijblxWKR6H04qKm5ZHgZsYt7quSCOiEmJ7rrotGtsuoqdmJ++D9Kbp7r1+3hmiq/uRmIOaAVNrYLI0GCwjuesSHJ11xHYam2rOzvrdxIpVjOrFEWccqlDwWcwsrKmey/Fynuo4cKl4+jZyc+cEKO6qVOIas8oANqqvty+bi2ySc46kock4R5mraUPb57JKRG8M7HvXMv3mi74aHVp+/KjQLNY2ag0l15vZrCfZIXudLdDiLnr10y10jdjB11YLr9WgNqnd2p0Ge+OX+a48LnhsK+s3dtu++jTfcB4NnpctMw2DoJdymrjUnzWCyVPUgXfrXNZoHyrxs5sPKfflUp2Oeuqqr856666/Dnvsss9Oe+2234577rrvznvvvt9eAAA7)
		     */toast:function toast(message,milliseconds,callback){var that=this;if(that.superthat.platform==='h5'){return;}that.superthat.pushBack('bridge:','toast',{message:message,milliseconds:milliseconds,successCallback:callback});}, /**
		     * @callback Bridge#notification~toastCallback
		     * @desc 弱提示回调函数
		     */ // 蜂鸣
	// - 调用客户端的蜂鸣器按照指定的次数进行蜂鸣。
	/**
		     * method
		     * @membeof Bridge#notification
		     * @desc 调用客户端的蜂鸣器按照指定的次数进行蜂鸣
		     *  - 桥协议: `bridge://beep?params={}`
		     * @param times {int} 蜂鸣次数
		     *
		     * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#beep}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwZCQDxqZQMYQ6p1EQ9YosNpZXohTw7S49YmfWq9QayuBEFcEed96QN31tftzhan47srcRmPa3N1X3RGiYCMhI5qjHuNiE+BcGyYS5palhl5dpSbhJ6SZpWnjKxZnhSQpaOSr3iodae6YaytGKC6vYdwZMGwzKa5Xat4t8jOY3OPt8KGxcW0ysTP1L69x6ex2SzAzOrZ1tnTssfvq9PL4g6/w1iv4Jf5Fu65tb7ycvbd7+CFu4Ve9WxRPlL9qzgBO2fapUDWCkc50MlqL4z2Izb/8JNQ5jKMGhK4gcoXn0FzCOuo74TLZsp5JZSpXzXq50WbNbnHUxbfrMybJmzBy4JJoTWg7IRHAfyfmUpdRB0Zs6kcqswdQpTExZcTpt6nJfha4KjZK9Wc0qz6pa0XJdBvQoSpZi7T3Mp/BgxoH63vIlkRfvXX5t/1681JIn1Itd+u0169foWsb03Ap0fG8qRpAbXW29jDAslq8mJpW1zNad5cakRdSVyq7cvoKJ5354jXk0YdhXve6eXFEgbZJ9ay+cRhz3xFiVPZ9kpTFwcObOq5+YPRg6RtZ7wSrOfri13kmIvdv+PjL0Yt9g04YvwT1377jtS+oFnLTw6/jnW6//xz+ffs/xd1xnqamwHoHUDZfPgaVRFRRdskUGXiObzQGhb/fcJ+CFvF2X4Wc6kUdZehQop0tsO4U2om5WoSiIimw41iIV41UIYI0zstghg90pRWJnEU0Imlw6BKnjan6l9p8MSHao1nuaodcLexEWaMFnMFqI3U9SZpilkh5i0KSGS16pXZSuqVilZDwaWBiNGAoXHWohEXRNgs/dSaeHIvJJXY1ypljklBJud+aPqgV4G1z+laRncYI2+GCheYo56IaUwocno6aFmOiTBW45qIO/PSrpl6meiuV0m3JopKiQrWremnyJlJyjoj2Vn61dwYrYWZb2ieCliPrZnJZi/5K6lItvujdqnbyOaZcYVTKZaK1xlUlmGdeiCmuXanJGHLBQNrviCvsRuWCvSdrIwrq9iSRdsN5GBe6hBEbKbLyQyjgYv3s6+W+f0glMLaFDocqtePm2ymlP2JoYaIn0pdCTrvW++nC/YSbs5q7twruoqeQu15/IgpF8I6MxggzmoSNvrLKtk0Is7LYZh8zZacdOrPPOxgHns3x/7rowxD03967JV/6q3sBtMn2ukS2PG3XCgMapr7HyYV1yyt0SK7PFm0JraMQ3Q2212bFSWGSOXNfs9NuGwdm2zVvvRq+7Vdfq8XvfWimktAd3CtzgIdPctOCOK0wTmisPGffj6DPtSLi91pUddsRJ89yjnXlri2/ppp+Oeuqqr856666/Dnvsss9Oe+2234577rrvzjsPBQAAOw==)
		     */beep:function beep(times){var that=this;that.superthat.pushBack('bridge:','beep',{times:times});}, // 震动
	// - 进行设备的震动，持续指定的毫秒时长。
	/**
		     * method
		     * @membeof Bridge#notification
		     * @desc 震动
		     *  - 桥协议: `bridge://vibrate?params={}`
		     * @param milliseconds {int} 持续的毫秒时长
		     *
		     * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#vibrate}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFgHDaUBmYgKVQ4kdDqtGPNUpPLaNP7hErB2ywXZK6Wi13Adk0cuxNpMZr8cKq/83Af3nblNyG4UcigZzfIJ3foJ+goFxJJB7a3iAmIyFb5l4fHkXiWyXdUqij6xrj6yEkaaokKemmmipnKSgtqGDsKKWtli3vba/rK26ebvMtqq+kwrDxZ7Dos2dnIjBANPL3s29t2ve0qntt99238GyfBDsEN7gmrXj1b/jlPSVzffqwhat09f/AGFvwGxxoWbePGsQto8Nw8cx/2OcPW7FQ/h//h3DG8YDEjOYSdIOrr+G9BSEJ1BJLkJwxlvJYrPdKMF/MlTok3JwLsKTOoTqE5e+Z4V1LLplFAbDbUeCkbwaYHn7YKttSYDZMJhZp0WRRlWJ8ZuEL1Sk3e2Iv8akYwe3VmWrA8xdYli+EhPpgapdYSqfelh8BI2w5syTYwW2R+Ixo+STPxYbv0KMKNKpFjP2Vuqy5dexay5KFpng3WJnez48JfgXW2qRWjStSUA6127C32SIqaWU7lu3sE5uCzySqEtvf4a+SkpfXN/Dl0a8HpxtK9mtOy0ri1FzZHhx168a7+nItw5PJveObPrls9bdxe6efs6buX7c22ann7Lsv/552Ocq59NJJ6Uplmwn3cbQTbdgfSd4KCnBFInm7t7RWhg3f11iBe+ahg4IayrWShUymE+BiHb2FoYgmsJUfhh9LdxpRwNBZW1lww7pehaBCKZMF0L9Z4Hm0+jpdUeWgdmV6MvgGYEmFE/ZgilYxFR5xV5sEF2nrwWbejiosBKV6Jld2l25DvkQmcmVc+liaNa0a5JIgEKniQmU3+NmZFd/5XwXAXEtnnl/kclyeL6wnK5ps4jmikZwvqZyd1dFpaKJpGLhckZeh1lxKY8fFZHZYqIpakgEdm2umo2u0Xp1r4AeZki3OmNpx5o80Jn1H21fkrg3DWChJQwqY2aLKh//Xo66LAOnusjh7m6OqsK07Lq3iVQtlZt39immCk1kr6pIyhljqptqZamWod2VJLXnbmIlhcs6zmJa289RX4rb2NyqDYsjMK+yAQAae7IJdJUnXwhPxtSiy1zaoXq8M7rWAsrGk1pqSs5xYJVIUbt9vxdZzii62mpA4bGZZu/pQyy59qPB+SXqIrKYqiomrzy/AK/LGUWCXs7r9nItzfZDVnjCi6uq5L9MMhG+0oeEI33aai+hqKtKfbzdzlq/kBrerTxCncc8TmbnmTyEwqTe/YXdO8Z6yjoS032y1HLWawJ19bLr8l3yjto1l6F3i8VPo3dJ9/v3u3fEMKidu4MDtPXHm9Vo9sMwkZ73ro5gRb7ufUryQ9NLJQU8V6666/Dnvsss9Oe+2234577rrvznvvvv8OfPDCDy98AQA7)
		     */vibrate:function vibrate(milliseconds){var that=this;that.superthat.pushBack('bridge:','vibrate',{milliseconds:milliseconds});}}, // 新开浏览器页面
	// - 浏览器生存环境下打开新的标签页
	// - 客户端生存环境下则调用系统浏览器打开相应新的页面。
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 打开系统内置浏览器，访问指定 url
		   * @param url {String} 待访问的 url
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#openBrowser}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwRAqVACbTeEwkpdBqMWTNLg3TQPe79Wq7TuoYij2juWFwk/0WnxVkuJqYjkPckzrC/xRWFgGoUbjAJ3G4eGXWJ9hxSNcG6cCoZ+Yn6QjiFiU3GedZNZgICheIh9pJuXb615r6aUrbOlu5Mar6WmpLuvpaK/rLG+m7q/s4vLwXa9dYzKErvAnLDNxADV1dMe0sxw1smv1tNejhfY2Iy5D8oI3MnpF+zkl43Kxujm28fItpTVmqfL1chROoSJ4ydwHFKbSH7mFDQ9ugFaxnSWI3jf/8LvzTVI5jtFx3KuoLeTKlLDV5SqK86FBlTJcASdKUGexlzII0c+xbd3NlTSAZXYXq+WwX0XtGM7kU6hNfUoZHicHDSLXfwKlSgf682jGrtK5fLTo1iHLcTJEblbZVmzML1kr/SHyyUNfemLkA84q4+/YbT6t0C8cbOo9lWLPR4MIr63bsnMWRQaqDCU7L1g93+FoOxXew3KR2GZM7/BliO8aO2VIAXFRs6tiGQ4+AfVp27XesBXeMWNkk1LV9j30UbgK2X8ibRR8/fEI58szQSevVzPUyK8SXlsvzu/lSae7fCWu31ro60PGnc0/v7ps6xvn94I9ubBj82ebJTWf/148fWuSh5lpikQkFoGUAhudfENitZ91EoEWIV4E2/TShfKpNhFtCiI2H4XXBDcjfaxaaOJmGcR2Uzmwh/qWYimK1999u1B2EQWcRzriaP8Q4d+JC+UkEmXf3iVbihUN+mN1wK/5IXJIUjVhNke89iCSF27l3IG8EkthjliXYh+OODYoXZX8Ddkibj2BC+CSTktEno0kK9iYgm2UiNJKZX1ZFpZ1nBuklnc+V+KKVXfY5p4h0ZpioceUtmgek8dF4o40vSgljcTgR1KSIejYI3F4eMqieqRJS1hKWhfr5GJ4ZPupRjKDWmaqrAc56201HwkpWsG7uGZiveDJkZKxy/yppbKBuogptqJ1uGqajrzKKmQqq3ppttdjuxMK213YLZ5WX9pqSjnFGi95T3gIH5H3IToegrrRWmG6M86pX76+r0iBMv5EuymZUOBkLKJdLBVyjv6NSuh1SuMLlJHO/qSnxoRdnOqxOKyAM7HkVm3dvpaeGzKmimBY8JZ8aqwgoj+ui67Kgz/b4sqUQGzjysuM2DPK3jXJc8s8cN3suZ5KK3FbMSFO8pbRQx4UZWEUVXbOAhnrMMMzeEnu11El3TTap4Crdcb5pi5mgzdEtzTbJKFMmM7xi30x0mrgmrGWnfHJpcZvSvWk3U/moaq7Dk5psuJeIE6krmmhnvDjOcjbPDCeI7jJK5pV48zrt5pI7nevnGy6Feuqqr856666/Dnvsss9Oe+2234577rrvznvvvv/uewEAOw==)
		   */openBrowser:function openBrowser(url){var that=this;if(that.platform==='h5'){window.open(url);return;}that.pushBack('bridge:','open_system_browser',{url:url});}, // ***针对IOS***，跳转并打开AppStore的相应地址，对于浏览器而言则在新标签中打开对应的应用地址。
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc ***针对IOS***，跳转并打开AppStore的相应地址，对于浏览器而言则在新标签中打开对应的应用地址。
		   * @param url {String} app store 中对应 url
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#jumpAppStore}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwtBwNyUQz8EQap9MQ9UqUApRFreIZZWKx1vHVW1lChV+2eOs0U8vwSBhxlqjR6/q98acRuDCYZ9cV5+fWNzGI4ZgIOKeHiLcItggByaVY9daWFZmIKUeqpbaZdjnJOJr56dpZ2nlamUpBivrad9drO7sq+1vnkTvMZ6hL9uYrHNr6YfxsyjwsrdxcO727cR2MzIodXgnuCV0crFxuBtq4600LAl+ubcin+Z5+LK+/Hc87ph0lYrAA+qPjzlmyb7ESOuRH0AE8dQW1PTwUsRs3Bv8T952rlpHjRkIjHwE7WJAaNJUsT95K6JJeSoYraXZcFs2lzZ3/WvbUGTKGT1D2Zj4DMlCmJZzrSiIVWDMiO1EGcxTqN+8BUIWs7nW4yjUsPp31ulb8OjKrwU1by5rzKuIl2KkfSf4Um0Ju2lJwofrcY0Jv0Fl9qf4lB5EuxapUJTkrHJUEYZBNpTqNqtLvZZNyLBrNprUf5MwQ4b50TNSjZ4ynMZreHNqyuWaCW499HfSiW9y1YWcQ1znWUJCLAdelc9P4wrvLV0NG52/y0uJYPSr3rero2bWiG4r8p1l7ieuygaceTDO8bc6gp1vLJ16peuwXjK9WO7wubcTH0cb/p/yZdTxBtVtjie2FEnd3ybddUf1xsF908JHG2FLOeRfEhO+Vlx6AFnp4ngoRShNig/yR+N169Wn42HeoBTjbOLJJxuKFH9pVGXAUqngbhvZtp5RiMhI4QoSV4XbRj+79lxOHzHX44Hy5EUcfJyViBqVgNp7HY3bt3behks0ZViV78F2pI38F6gcljeIZ6SFdXGbZ5oFTPpimhMHpoORoYf7JFA59AhlnQFQGSsNyDr6Io3Ab2tilXXlq6aKjekJapkQyLlppo0uaByKhv52opoE3XgnmgqJq9Gapp5qKaYL5IVdjbIyiWqiqUZaWIqBSOjZrqOMhmOevveq6ZZHE//pKJpPUOSmioZJWl+Cc4CUVmLRoSjuXatgOi2iqY05b7bfQ3XSriXpu9aWdboFFZIXsmrXrqOu62q6885LHg5jUxutni3zi+y+soqI4sLMFv8rwkcqSpS6DWM4I43OCAIWkUcbeiHCkwJ6UcWTNttdxpj26Zuux0gVMIXS6dWqtnAd72+TLnsas7czl1nxokN2JTO67Qz68Zn7PfhzWuAj1rHHFTQd9qNK8Ksgyix4vFi1eeJL6lpnXZqh1t05eTfMJ+NVKrtiHMelm0Whbi/TaHmfnNrQqLysrvWb7RjKdrd7b9QqUcuw3nAoOCq7NwVYobs6CY5yrv2M7Dq+d0jEVC3PU9FbeZEyREzw5opw/RXrppp+Oeuqqr856666/Dnvsss9Oe+2234577rrvfnsBADs=)
		   */openAppStore:function openAppStore(url){var that=this;if(that.platform==='h5'){window.open(url);return;}that.pushBack('bridge:','open_app_store',{url:url});}, // 打开客户端页面
	// - 客户端生存环境中直接打开
	// - 浏览器生存环境下唤起客户端并打开指定页面
	// - @param {string} pagename 页面名称
	// - @param {object} data 传递数据，入参
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 打开指定客户端页面
		   * @param pagename {String} 客户端页面名称
		   * @param data {Object} 传递数据
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#nativeFlightSearch}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gu7wEzX9n3Q040b/J+bBQGKn7FWOSqHu6VPqXsSpUUokGK9BqIR6NBLDSOyvKRQwk2fFz32Wo0UV6fdNdr+gDMZ7fl+a/Pnd0dH2ESnxxeoiPi2CFiYwAUxWddYJgaXaPn1uPlnJMgp1bZZiueg6ekYCdkZ54rFenr5Kpo6u1ormQtbSdn7SYoKqkV7a2pMjHt5zAs7CEmb3ErtfPgqLL0cu+2ri8yaLS7bDC6H7ma+y1y8rp0XTN59G33dQD3Objj8vZ9u71y7TPL+AWuFj5uqagoL/op20AxCRgnXQXym7yFGfv/YOAaEBpDgkYgeLZHJJ9KdypQiT3Jj5JIdym4za8Z8qS7mSprzbMp06CQGSW8a6bXEKdTDwqK/FiZFsbQhQ4ssmt6cSFSqLYobxxSUOEcnzEcfmaKy+g5p14xBw5Lt2mdtuqhYwY4dGQ+T16lbcwpUKhUMs7hGeYLce6+DWSsHCaPt69YfiVDPCEPup83x2c11L1BG/Bb01MTeLhYuiuGzvopoSWvmK/fQY66GnfaLvPO1ZZOcK7qzXbpyz16RUQ/uTRv4NM4+W4fOq5ql6NW06wk/PFu2lp19o+81XRz593LeM+vafRppefGAD1MXbV6v4Pcn0K+Xz/z8dsxqFT//5z/aXwCyFaB7Glwj2HL+GAffVwAyeNdvyiyoX2cNpoUhhH79hFdwWVHFG4UiolfdddzB1d+HjYU23ygbnjheYaz9d2F4BvoWoXQfaXcjfQ+maOKPIvKI221zsQjkcRlWSGSQHjoHGwcKfkaik90J6KF1PLqW5IEC0QUeeROGOQKCDsaYWlDZQfXlmVpyNKV6gU0Y31BkJlchg4tRiaWeWpVzpV44bqhgOBYuJlGVF1qTX5TAwaihj0qaiR2SHGa3ZoiRJkicldK9Zmii8xDoXaA22thiBlzeNKNB94klZZ9XtWqobi6FUOqRh2ZxqpEvhmRBruntyth1jzoZKXQ0/2ZK6H4q+lqkjGKy6mmWedXaaKjTwnqZtQMNC6W2W95araKQWlqnZ+wNKCSMpmGaZ5e69vrhTIOKG6eFJYIbr2TAiishhmm6uiyN2Po7HbT7wpltjt++F67C6gx8MK3XGjuqr4omK+23nBaoXMPN6vswwx1CGXKBrXJ8J54nN5pytPQObCvCFnc8KKUBi1opfsTCc/GTw4FISM1AJ4yzyz51G3SqRzNKbMBkvDlxuyhiBfVQdH1sV73iIXpU1GFP/W/VSt4bdrTHen1S1ze/2ynSa18lqItvxzZ3mz3TzfIGKA9N9tkLC/X3pbwqi7W8JhQudVsOtxzsrGPrfd+OaeTHhnjgWwPuLLyGR1k0ubWNaTWan8ZNNeSN96wlpcKC3ZGLTmcsN1CJ3+52044bdvPmuA+eM+lC7217oHS3B3HcNRNovOSxCny5t/mmfLx/0POu66aoAws7x2CerrLJzLZOu+4+n9vj1eNzX77HwjM/r/jbd+z9mYWnKzuTmJddlqwvg26+vP0udnbiGdPAt6JiETBokRuSy1LHLbsx0IASy42c2ratw3nLcqZD2swmmEDNGUxH7LuRsFS3KDWNEHsdPOCzJPiUGMpwhjSsoQ1viMMc6nCHPOyhD38IxCAKcYgKKAAAOw==)
		   */openAppPage:function openAppPage(pagename,data){pagename=pagename||'home'; //非客户端内，通过router功能处理
	this.router({type:'page',action:pagename,data:data});}, // 唤醒客户端，并打开指定页面
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 唤起客户端，打开客户端内指定页面
		   * @param options {Object} 配置项
		   * @param options.type="page" {String} 类型
		   * @param options.action="home" {String} 页面名（Navtie Page|H5 Page)
		   * @param options.data {Object} 额外参数
		   * @returns {boolean|null}
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#smartbanner}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwRAqVAKbTYEwmpIio9Qi6apdQboAK9oajCipzS86irc+v+N3sxt3pqve8JobMj3G7fCcHgWU3NxjIwefgJ8igqAioN4XYAKlhucBIV4mIiWfYGOF5MUb4CPdpihqqefXXUVr0usm61da6SqcKmgi3G3lrWzuHS8wW6hErScs82pzLaSz9qzYtOzwLjN2X64oM63v9LH1I/p3ZfcycHL7sTKhdWB5c51yhrBmNecobjw8Nzpo7SpOWxctWkB61D/bOWdjFj96EhhMJout3Txy8bf/ruGHMQJGivnb+AC6yiCFPvXTmxkkcplKkqJgDWxZ76VIOzY8pd7LEeZOjT5QvvI3bmYookEgLhwqUCcTovzVJeRYlqVOjuqpBdZlUtger15obxzYVGzGr1Ydo1Rnl+lPtLLDVFpbLpxbN3E5a12Zc6VfuOaSD+dYMC7ji4YIq9/KyO0KqxbTyCtvM8+mE5I+UcQLFLLjE5mgHOX6mGhox3sqFOv+l7JphX9KMDYMU59lhwNWOYyuGbTsy7oSWi70TZtak6slfZ6d2hHy0ibK5xypUqjev8oBMnXe8OC80ZNaIuy/+Xhq8eO/p2T12u508dIGZdaPfDZ9s8/eJ59P/DRJdX6vxM1591qWQ3YEKxibdRf/BsFlZvtVm0F8Q5idhcCfVwVZgIkQ43HfHcWjhdKAtKFZ4yVV4VIjLaWHggx7BxV9Vmp14Fou0rQgciaIxt5ZTOfYoo2ycYSfkeRnS95yRO44k5HU1rqfjJSEm+Ft8iklJwpJvSVBgiS16+JphX8503m2XVfnjkaih2ZuALtpXnn/IqUignGxC1ZObWM5YnJ77KHXjU/GBaKifhLIwFUIrxrgVhTk0ah+iNtpJJilApucUjY5xuuiW84Hqk6eWkVqnevLxGCCMpxK36ouIWkqlcSxRV1erCULUFpNj8klBY9oB9t+Qt87Zy5St/7UT5oZ4huoeqVPxBqizdAqnLKSu3mdtt8B2KGWR2o5ImKrRwqQnlAZCKay53KGrn6K+sntiezJ0leS8ki6Fb5Lr7htVXKy+iauChZZLKZpeCqxCp/CGFCmKLTU8VLihnpljCxAn2q55f7JW8AYb0/gxyciK+y6cw3ZMYcnwdsnsfoOyyGup1yZ7qYgnXykoTY6e+2ig8ppn8rbfghnzmmqe9q+qRzud38/V9stmdSInbTXSSr88NbQqBz1mzsWyV6vX4A7LJdpcS0x0k6k2WLOtvuap74cX3220hh/PnKqKd0UN696bViOqwoCDfGelZnuE8OAOHo4yt+417ia9Si+mCCvMNnM7M9yYx7pU6KKPTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577hsUAAA7)
		   */smartbanner:function smartbanner(options){var that=this;var type=options.type||'page',action=decodeURIComponent(options.action)||'home',isWapPage=/^http(s)?/i.test(action),params; //alitrip客户端内，直接webview打开页面
	if(/AliTrip/i.test(ua)){options.page_name=isWapPage?'act_webview':action;options.data=isWapPage?{url:action}:options.data;this._goto(options);return true;} //page 参数
	if(options.data){params=extend({},options.data||{});} //线上h5地址url->http...
	//pagename->page://pagename?params=
	var _params={url:isWapPage?action:type+'://'+action+(params?'?params='+encodeURIComponent(JSON.stringify(params)):''), //smartbanner的标志符
	sb:'1234'};extend(_params,options); //打点
	(function(){ //打点用
	var gokey=location.search?location.search.replace('?',''):'';gokey+='&deviceType='+that.device.type+'_'+that.device.version;try{window.goldlog&&goldlog.record('/tbtrip.2000.6','',gokey,'H46836991');}catch(e){}})(); //解决android下chrome内核唤起
	//fix WindVane [ua直接append在系统UA后面]
	if(this.device.type==='android'&&/Chrome/i.test(ua)&&!this.isWindVane&&!this.isAlipay&&!this.isAliweibo&&!this.isAlilaiwang){window.location.replace('intent://smartbanner?params='+encodeURIComponent(JSON.stringify(_params))+'#Intent;scheme=taobaotravel;package=com.taobao.trip;end');}else {this.pushBack("taobaotravel:","smartbanner",_params,true,true,options.events);}}, // 将外部用户导向客户端
	// 1. 未安装：导向 IOS AppStore或 Android 下载页，下载安装
	// 2. 已安装：直接唤起客户端并打开指定页面
	// - @param {object} options：
	//	```
	//	{
	// 		type:type,	// page|native
	//		action: action,	// pagename|scan
	//		data: data	//暂未实现：anime_type 页面打开的动画类型，-1->没有动画，0->city guide, 1->present, 2->slide, 3->fade, 4->zoom out
	//	}
	//	```
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 将外部用户导向去啊客户端
		   *   1. 未安装：导向 IOS AppStore或 Android 下载页，下载安装
		   *   2. 已安装：直接唤起客户端并打开指定页面
		   * @param options {Object} 配置项
		   * @param [options.type="page"] 跳转类型
		   * @param [options.action="home"] 跳转到的页面
		   * @param [options.alipayDownload=true] 钱包下是否下载旅客，主要用于钱包下默认不自动下载旅客场景
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#router_home}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEonEyVCQNxmWgKVRCp04P9YqMJpzTQ3d7/X7CYkiVqX1CvWsw+Qg6O+RsgLlYr3PTeQld87cQGKiXtkfUh0DoFrKoyMf4AKdmh4ZoKVUZ4VhxOMmJaSn2iRdJSappZdhGmaUZVvha+ijblKhai+oai+oJ2So6C7obfAlMCxtKe6ucOPq74Wss91abyXzszDrst2rbXPycqkz9K33Y6K0ryco7e20qnp4rDO026W4MvxzuPZ+PLRO+fvpMafuWrcOwc/7AIWtHzp4giRgWqqtnjUEyfv8J51C8YJHetIYTqewLOa8auogZj610eVFlSpUtX9okeZPmRws6cx78yfKgTiAGNW6LSTTOTnnFko5ZelRkjnJSCeZbx/HkThJUYwEkiDVg0Bddm1oFi3Gf1nErXgLlOEjiwFPvjBbk4HYsXLl875axy20TybeEiz5k+7dkYFdD79XdOxJxTJ8jepqDCDkvTISacTU+HLdqR4Y1tyoc7JgzatBRvcrojLY026tpzcaATVd1S4FYWC6Odlk27uGTH0vjGlzo6sKZMR+vnNz3cr1rEz9/Knm2Q7W2XSuuffifYbFZu5tnvfs88OwNHFF93zesehbXeWv/Ljrnb+ii7TP/RqrXXDDUl9p/+eH0mGfReSSbcpb1Rd56ZTH4FmmfrYWcX1A1KN2D9+GWoXUQ2kWbSJrtl8FG5IVW4lejmYadiB+OmFsv4EUISG8vZifgecRxKMJGE7roXzw0gpijSQ7Bd5d3zFUIo4TB9SiYhgi1N2WCSllJ5R1callejVGCZBxmBtrnXpZNnmalg0x6COYMc+lXJpxm1jAnglfG9iAPJ2KUGDZIUoBiN+nl1iKJRt7H05iNHmrjnmEOSkwQAE5aZ55frikmo2w6uWSmovIIZqBbgrrjm2qiGV+cZJJRYqShaeogd3i9ESugpTqn55BsCkkTkalNSGBHuBhIJ6TT/zXHHn/I9rraoMUWSqGhWMm3mZeoUltdcc1CJqiusNJ3qYwYhhpZNS1cZ+6i4aaLq1OIFsjOprMuaIOmadrb6rf5juqlqjO2ueWF2/m4qruxhRjseAiT+q2FjlrbcJjbJgzuws4a+qRtsi7b5akcU0fvvJ2u6Cp2lf7IbmuATfyqi/u2PLDEumUo84Y0YwnvuMZ+etbP4Xncb66R4Rz0tPjWazOlSebcH7pn8rnssUlf+u7UnWIr3skHb6Zv0UzfCLTXQpNWJH4Bk32riSB7m3bcLx8tcpWs3oxu0zC3XanRzH0sqQooDetyqt6GXEKfUi9ebcaOzyQT476WdO7jBSpXTOzSlCtsubyefw566KKPTnrppp+Oeuqqr856666/Dnvsss9Oe+0lFAAAOw==)
		   */router:function router(options){var that=this;var _options={type:'page',action:'home',alipayDownload:true};extend(_options,options); //钱包、手淘内部可以直接拿到alitrip安装状态
	var alitrip={scheme:'taobaotravel://',packagename:'com.taobao.trip'}; //打点用
	var gokey=location.search?location.search.replace('?',''):'';gokey+='&deviceType='+that.device.type+'_'+that.device.version;if(this.isAlipay){ //console.log('alipay');
	alipayCall(function(){AlipayJSBridge.call('isInstalledApp',alitrip,function(result){if(result.installed){ //已安装，直接smartbanner
	//console.log('smartbanner');
	that.smartbanner(_options); //打点，a-黄金串 区别点,b-空,c-业务参数,d-校验码，防滥用
	//唤起一个点，下载一个点
	(function(){try{window.goldlog&&goldlog.record('/tbtrip.2000.2','',gokey,'H46836987');}catch(e){}})();}else {if(_options.alipayDownload){console.log('download');that.download(_options.downloadUrl,_options.androidUrl);} //打点
	(function(){try{window.goldlog&&goldlog.record('/tbtrip.2000.1','',gokey,'H46836965');}catch(e){}})();}});});return;} //手淘依赖windvane.js
	if(this.isWindVane&&window.WindVane){ //console.log('windvane');
	window.WindVane.call('Base','isInstall',{ios:alitrip.scheme,android:alitrip.packagename},function(e){ //已安装，直接smartbanner
	that.smartbanner(_options); //console.log('smartbanner');
	//打点
	(function(){try{window.goldlog&&goldlog.record('/tbtrip.2000.4','',gokey,'H46836989');}catch(e){}})();},function(e){ //未安装，download
	that.download(_options.downloadUrl,_options.androidUrl); //console.log('download');
	//打点
	(function(){try{window.goldlog&&goldlog.record('/tbtrip.2000.3','',gokey,'H46836988');}catch(e){}})();});return;}var dType=that.device.type, // ios <=800ms检测时长
	// android <=2000ms检测时长
	openAppTime=dType==='ios'?800:2000,beginTime=Date.now(),isOpen=true; //配置android 4.1 iframe onload事件
	_options.events={onload:function onload(){isOpen=false;}}; //ios 唤起运行时停止的方案
	if(dType==='ios'&&!_options.onlydown){ //alitrip内部打开页面
	if(this.smartbanner(_options)){return;}} //设置时间阈值，在设定时间内未唤起App时，去下载App
	var sid=function(beginTime){return setTimeout(function(){ // 间隔时间大于时间阈值，说明已唤起客户端
	var endTime=Date.now(); //已唤起app，避免用户返回到该跳转页后去下载。200ms延迟是对消息队列执行性能问题的兼容
	if(dType==='ios'&&endTime-beginTime<openAppTime+200){that.download(_options.downloadUrl);} // android
	if(dType==='android'){ //阻止自动下载
	return;var version=that.device.version.replace(/\./g,'').slice(0,2); // ≥v4.2 唤起app后，浏览器脚本运行 hold on
	if(version>=42&&endTime-beginTime<openAppTime+20){that.download(_options.downloadUrl,_options.androidUrl);} // <v4.2
	if(version<42&&(!isOpen||endTime-beginTime<openAppTime+200)){that.download(_options.downloadUrl,_options.androidUrl);}}},openAppTime);}(beginTime); //当App被成功唤起时，清除下载操作(防止已经打开native，有些浏览器还执行下载)
	(function(sid){ //标准事件
	// ios:safari
	window.addEventListener('pagehide',function __clearDownload(e){console.log('pagehide');clearTimeout(sid);sid=null;},false); //android:部分默认浏览器(三星)、uc、chrome
	document.addEventListener('webkitvisibilitychange',function __clearDownload(e){console.log('webkitvisibilitychange');clearTimeout(sid);sid=null;window.removeEventListener('webkitvisibilitychange',__clearDownload);},false); //android:chrome
	document.addEventListener('visibilitychange',function __clearDownload(e){console.log('visibilitychange');clearTimeout(sid);sid=null;window.removeEventListener('visibilitychange',__clearDownload);},false); //windVane
	document.addEventListener('WV.Event.APP.Background',function __clearDownload(e){console.log('WV.Event.APP.Background');clearTimeout(sid);sid=null;window.removeEventListener('WV.Event.APP.Background',__clearDownload);},false);document.addEventListener('WV.Event.APP.Active',function __clearDownload(e){console.log('WV.Event.APP.Active');clearTimeout(sid);sid=null;window.removeEventListener('WV.Event.APP.Active',__clearDownload);},false); //android:部分系统默认浏览器、百度浏览器、钱包
	window.addEventListener('blur',function __clearDownload(e){console.log('blur');clearTimeout(sid);sid=null;window.removeEventListener('blur',__clearDownload);},false);})(sid); //android 事件监听事件方案
	if(dType==='android'){this.smartbanner(_options);}}, // 引导去下载客户端
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 引导用户跳转去下载去啊客户端
		   * @param downloadUrl {String} 下载 url
		   * @param androidUrl {String} Android 可指定渠道包 URL
		   */download:function download(downloadUrl,androidUrl){var that=this; //打点
	(function(){ //打点用
	var gokey=location.search?location.search.replace('?',''):'';gokey+='&deviceType='+that.device.type+'_'+that.device.version;try{window.goldlog&&goldlog.record('/tbtrip.2000.5','',gokey,'H46836990');}catch(e){}})();var url; //自定义下载页
	if(downloadUrl){url=downloadUrl;}else {var appUrls={ios:'https://itunes.apple.com/cn/app/tao-bao-lu-xing-ji-piao-jiu/id453691481?mt=8',android:'https://trip.taobao.com/go/act/other/tripdownloadh5.php'};if(this.device.type==='ios'){url=appUrls.ios;}else { //android 可指定渠道包
	url=androidUrl||appUrls.android;}}window.location.href=decodeURIComponent(url);}, // 客户端生存环境下设置WebView顶部的标题显示文案
	// - 对于浏览器则直接更改页面的标题文案
	// - 子标题为可选参数，只适用在客户端内嵌的情况。
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 设置 WebView 顶部的标题显示文案
		   *  - 桥协议: `bridge://set_webview_title?params={"title":"xxx","subtitle":"xxx"}`
		   * @param title {String} 标题
		   * @param subtitle {String} 子标题
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#setTitle}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwTBiHyOVSwVQ6p9EP9dokQp3ZK2D7lXqfoDHXkERMu1gx2KwtCyfV+hxdbKTfd3UfUuUR+GAXFlA46Be3sIdnCPjXkajXV8j2KDbpmKjJGMmBmOfIt0hKaWg5uil6+LkRush55lnqptqKWjnbiQGbqtgI7Hr766uLCXqcBgtJldX8vBo7nGGce80rvUwdjXv5K6jMykzY5l1+/X0cYt192Z197lC8y33RfvtObC9/Cl+P7JW4aci2pUMHbR+ZfpL4udPmMNMnegEZxKtwMR/Eiv/zWP07GCEjnYgMcQVrJgukSJES4Bj8CFNhTJMuOfaqSXFmTpkbvbDDuY6nvJ1DB8LJAc6WMI5rgFBIqsiUxVlOQwalJZXWSRnkaNYqqnLc1ZdKt1YbqK7gWLRCyUaV9hOb0Ylr5Ya1+xAsS6sgP6ZM6NVtXsEN+yr8i7Dn1cFibd5bfJiuY70AwWTdO3Jh06dz1d71CXfE5s2Z01qO7Cy0iNFUW3Y+TTm117gzSeGEfQpxScyJweYG6hmlZMaTMdb9DRT31K9QeXf03NWf688ACVuRHH15adQGrYeDzvb59tjdG5MA/Tylbr/hOzkXvhB5VuL6Zmt8u9qcfInByzb/hprXd/WZdRlw+9kXRHseoWMNegV+dZ6CEC7XoH781acCa/1pZR6DJClXgoYgmnbffMYVV5h17lXmIYpYsRBMPESlRRp3H6Y4XG/N1QRbjQkyx8+MisVno4s3GSZeW2awt2F5RvIVoHZKjsFkj//dCNhKxw1JkW5OZtjhUviUZEGXWApEkG2vlXhilTCGSWJgkD1G3ZNn4bWRmpOpd+WEZMqBp5zg+Umckyva2aZqPvoIooZmvSdleq0tBRiTh0IKZYuPLvgifoyqFuGeFlLam6XUEIhjmvzxSaSgO24Y5Z0qTurgkPQpFeuRs7Zaq6tzrsdmfqruRmt1dZlJKKBC/wqq54ASxnmCW6xO+6yiaworLUm7AuhfoHFl6+K2c1rprbJhajmss6LWSduFeQYLLYU84grog96tGqSB9F43aJwyTqpnr5iGyKKYo26a7A0i4isbhu4CsbDBDYP6cLT6+gavvP0KBWZyU5bJKbgtAHdXrho/aLKw4y06LpecuqnydPFizCGVkaJ658rFIkkjwKiF6u+pnRFFMrf8Bs3U0Fv6avOfR7/rdIUluyzbwDoWLPWlL1PcqdWeYq20n58iKJ3TRyJtaqszO9z1mUkyW6S4TWIXHtBQZ/1ryHkT5HXZER91X4x7Zxdzpvj1rDbDwB5e2HiFLqmp3kkj+nalgULPKymvQlOOHOBMF700whZ7/DnoOm1tdqqeg940smVXBXvsss9Oe+2234577rrvznvvvv8OfPDCD0988cYfj3wABQAAOw==)
		   */setTitle:function setTitle(title,subtitle){var that=this;if(that.platform==='h5'){document.title=title;return;}that.pushBack('bridge:','set_webview_title',{title:title,subtitle:subtitle});}, // 配置Native 标题栏左右button。
	// - `isLeft`可选，默认`false`，是否为左侧button，只适用在客户端内嵌的情况。
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 设置标题栏按钮
		   *  - 桥协议(左侧 button): `bridge://set_webview_right_button?params={"title":"xxx","click_callback":"xxx","img":"xxx"}`
		   *  - 桥协议(右侧 button): `bridge://set_webview_left_button?params={"title":"xxx","click_callback":"xxx"}`
		   * @param title {String} 标题
		   * @param clickCallback {Bridge~setTitleButtonClickCallback} 点击回调函数
		   * @param isLeft {Boolean} 是否是左侧按钮
		   * @param img {String} base64 图片内容，仅对右侧标题有效
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#setTitleRightButton}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gu7wEzX9n3giR7Q+T37AYS8BvBYjCCXQUOyZxMSo84mFAhhLita5HS4o16/vir4+lR0j1xr1s14lhG8+fd9xrfzD3tcLBVWE0gH+Mfn4KcnoahmOCY4p5gmONGYaOVlRkioCbmwtrVpVge3iCYmaaqKNQoayubqeWmUGfs5adv66QhbejZr2qf7i0eJS5y823lLe0ima/zIDJzK1AtdjTisXcx9zHpHekvtbakcHvnICr46LdssjNltjehZ/s47vg2/6/xKb5CrbNj20colECDBgUrkKdwn7iHAdto4cdtzLmDEgv8T86XTNw8jI2UbKx2iSC3jHl8V+6V0CRNZwFArfb2UefOjTnRrasLKGS3mzpYyWcbopyUbwl7/jo6cGU9UIXv5nKo0GPUeQ1T8Snxk6rBpUqTr3FEl+tTi1IMOlQblutTkVLUXt5ac+y3qQrx8bz5lZxahHHJbBV/DmvAvSXVnBy8rHPgw3KodNTIGmxgxR7U0ETdNC/FZ6L5koWYuWs8D4K6rN5d2e3bv54aWJTrm+Esr6oSz79Z6zDUiW3+S6Wo4htlw7eG5CYPcgJyxcuFhszrv7XPs2rZyfecFHteC0cugt3f9rTt89uKjT3mfl96sT7/S6wXjfT11d7vw3zL/t04cfuDpR9pz/RH1X4D3rTYdZLFdsOBi5t3V2YT1BYhBhLVRd1qFFPbEnzQCtkZecBc6ptx90HlUloIt7iUegSue9qGLHfJ03nfGxUhje5r9yJduGX1FQXNofReedg2aKIKROyYnn2dvcYhdkfZNiWSUkwmI2XtOxXfjgyApyWKPXuUXJm6R2Yged02iqV5MsL0X3VUFtonglVLtiFIHcR6Ij2m3nVRdjnY+WSKJWw5a2W/rGSrko12GaM6MdUZq5YBcEnpkBpjCmCGcWFpoII+KEmlbmUDlaWaVVPrnpqJqshqooxDqSV+qrcJKq4933rociDhxiuqrkLpZF5MV/xYLZIJehliekSpSqhenz5Yq2qIv+uqhXLJaC62u2tV6oqqv6RjurOOeax6mQ4kl43HOiTica8OOSdkHnxJbqL1DTYrCvpXVu9+9S4ZwKntMgopvY7zayqOxKK7555LMYhvSaOsuDCRna+aKKJ4Et9sio+NxLJGk2c55obrCXorswP2W63CaUrKZrGKdJvhvwXyWPPOQo/L8sM/Uhjmyzh6zVm3DEANMZ8xPryynryJr2TPGh1J977UMZ32xSBkH+bHOSRatNb9IKwzzrjUvmy/NUGoKr9tzk2mm2imKeqzdNGvYAt6Cl02qy3mPMLhUE9cMscAISwb32oxn6zjJXeb8vOffQ/P6Z5aXH+3uy1hLGLLmGOpdKN6z1ii2e96mvjndQasm9cjOOrj41Bz0ZjvsO/Ot+4yy+b4qyw2f7GppF5vzbtOwTRtxs8QLhSOqLIU9NvSB1rk92lDLa9rSxp8C/e274yj+zXaWP/354Vet7aZknz5/1tE2vTf93f8ebKfJsv825ykvdhwq3a9SRrnamUtZ6POTAvtmQJSRazfJQ+DYGvfA3smvcvQSXQAzRxsNbq2DnzuesITGNP9xzXOqM52r+pS2dFllhjSsoQ1viMMc6nCHPOyhD38IxCAKcYhEJGIBAAA7)
		   */setTitleButton:function setTitleButton(title,clickCallback,isLeft,img){if(this.platform==='h5'){return;}var host=isLeft?'set_webview_left_button':'set_webview_right_button',params={title:title,click_callback:clickCallback};if(!isLeft&&img){params.img=img;}this.pushBack('bridge:',host,params,null,true,null,true);}, /**
		   * @callback Bridge~setTitleButtonClickCallback
		   * @desc 设置标题栏按钮点击回调
		   */ // 使用去啊app代理发送mtop请求
	sendMTop:function sendMTop(options){var protocal=options.needLogin?'biz/mtop_ecode_sign':'biz/mtop_normal_sign'; //向客户端发送协议
	this.pushBack('native:',protocal,options);}, //设置UI
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 动态修改容器 UI
		   *  - 桥协议(修改标题栏颜色): `bridge://set_ui?params={"title_bar_color":"#00ff00"}`
		   * @param options {Object} 配置项
		   * @param options.title_bar_color {String} 标题栏颜色值
		   * @param options.titlebar_display {String} 是否显示标题栏 `"show"|"hide"`
		   */setUI:function setUI(options){ //向客户端发送协议
	this.pushBack('bridge:','set_ui',options);}, // 跳转到相应的客户端页面，如果有额外的数据则通过`data`参数传递给客户端。
	// - `animeType`：1->由下向上,2->由右向左,3->渐显
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 跳转到指定客户端页面
		   * @param {String} pagename 客户端页面名称
		   * @param {Object} data={} 附带传递给客户端的参数
		   * @param {Bridge~openCallback} successCallback=function(){}  跳转成功回调函数
		   * @param {int} naviType=0 导航跳转方式，决定是正向动画还是反向动画
		   *   - `0`: push
		   *   - `1`: pop
		   * @param {int} animeType=4 页面跳转时的动画类型
		   *   - `1`|`4`|`6`: 由下向上
		   *   - `0`|`2`|`5`: 由右向左
		   *   - `3`: 渐现
		   *   - `7`: zoom out
		   *   - 其他值: 无动画
		   * @param {String} trigger=""
		   * @see {@link http://work.taobao.net/issues/16898#航旅App-功能入口-list}
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#nativeUserHome}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwVCQNR6YQaXwmloiotfm5aqUBKhTwpYqtSm54i/Wgr98y2Elsw9Nw97oY8j7G7y6+zkBX9TfYB6HHgdjAd9anOGc2RSgX8Zhh6UaJZSnYmCmBecG3GbnAScgI6OfIxaaq1kr2GljqqZq6qimbCzKKWitpGIxLHMsaRQl7THqcPGxsawoNGTebaMysK1xYXC3dTI2r3NjtzD29egqe/ru94eutjqg+0Z3di92+OGltvr/uileWfPGAsdtGDxS6gKEsNPR3y6AdfRHd0bJ4SWKwf/8Qv90T+LCfhpACP5Xcs6ucQowY7iCrqC0mzIouSa6suTAnQJ3acLIU5ZPnTJBCiQbNMY/iQXn8gBwq9THgRG9OK0FVKvUZ1RrwyBGUeRDsx54aHX4Nd9ZoNHvoyP40u4xg16FR0yaN+3bcRUEJlyo1N9YE060nC3ktiPAqYhWD73JEu3ij1o7vFDPcAvaxUTTR8lhOiXmoZniXCes999Jv5MImSYM2PSJr2L1NG/JtK1KE7E6QTf5zbM3myF2dtQJ3cHsdZaA7tWh++pZz79yVm8tebhil8+msO7BN7Vs79NKBS8xF3rS42sm5hWfEO95gcsB/JQdJ+1t+bdyzu/v/rz7VYerlt1qA1DD2GV7nxVcge/2dcJdr8N1UH2oDsmCbYlNFSFwF7p32XHAdqvYhdYKVdZyAxqW3Egx1pSZddiRqyF0LLzKzm1z7KVgWCTe2kyOPhEkIYWge6beGW/MdyORA2x2JkUtK7rgWi+9d1+SGrx12HI49UqBSYV1aGaKMC+LTHH2JTQgmkm75WFSKNH0pY2v4oYnlg01yCFt/eZZIIG96+pngYCp+49mTBlooIngO/kmnhyjiVCWMQFopaKIMxuglYkTSlpd3k9ZUaaeHLgonm+fFqGZ5cv7HXKWljsinOI2Gd42qdhnZaoWvAtoSf4bWSBdWIxapXHuX/w6p03fAxnorqKcWu1qeAGZpXz1uZntRZrHdWWeL3XKLqGjfsokrdGVmmOa5UzrKaLy13oGqqNbx6qCsKyaZr73vCpqcrTMqii0NPnFJK6Zk4nAwZEEOC0TDAweM5LPaHjVnqJvp2O4KQTVL56pbmqjbx2+KS6ilyd6n8XfrmjzuoCCKl/HLGJcrs78onxnuxMfW7C537I75Mb0kX6sadkv6XPTKmgo9KtFNG2kxzUlTK6XV9eJctZkjb8wvelEuvJ6ThzqLL85b26nxzl+/erLXa/L89NVld8SzwKaeKKS3/uUt7LLIXrx2tGIHWSbS6vbb89AJj922VS0naPOmVD7GrIzE5SFcLbjYVad5hZyHCXCkzIXeIGqlxZ1uVa6/Dnvsss9Oe+2234577rrvznvvvv8OfPDCD0988cMXAAA7)
		   */open:function open(pagename,data,successCallback,naviType,animeType,trigger){var params={page_name:pagename,data:data||{},successCallback:successCallback||function(){},naviType:naviType||0,animeType:typeof animeType!=='undefined'?animeType:4,trigger:trigger||''};this.pushBack('page:','goto',params);}, /**
		   * @callback Bridge~openCallback
		   * @desc 跳转成功回调函数
		   */ // 打开一个新的窗口，以栈的方式来管理窗口
	// - {string|object} options	打开新窗口的参数，如果为字符串的话表示需要打开窗口的URL
	// - {function} callback	调用后的回调函数，会有调用是否成功的信息
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 打开一个新的窗口，以栈的方式来管理窗口
		   *  - 桥协议: `page://goto?params={"page_name":"act_webview","url":"xxx","title":"xxx","right_btn_type":"xxx","successCallback":"xxx"}`
		   * @param options {Object} 配置项
		   * @param options.href {String} 要打开的页面 url
		   * @param options.title {String} 新开页面的标题
		   * @param options.rightBtnType {int}
		   * @param {int} [options.animeType=2] 动画类型
		   * @param callback {Bridge~pushWindowCallback} 新开窗口回调函数
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#pushWindow}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwNBiTgaVTMYQ6p1EQ9YosZqnbK0D6TXinofFTqUVz1V4w2EwsCyfV5hlRb+TFafxcsscRqPdnt+T2MMhWuEXH2KG4UEfGF+YQydQI+ChYSGn41hdqiQiqpmnIFIkxeRf4OUpo2Trr6cq5QavKCVuJaVsb3NW3eqFLDJzpe0vKQDscd2qVjBys7LdmegkM/TxtXd2Nu3govS1M7v1xHK2Nilrs7sydTr9O3f7Kay8Lof4ZrwI7de/MxTtoD+C4DAHNiWsWQSE6eefkQOy3rJ2jcv/aCCZayApkpVENse2aWLLkJjj5ErpE+fJhm28sYxq02fFlzYsadv7D+RMmOJY5emGLdZMjkJXXCqbSKWqpvzuloMGjWoPdQwta5w112vXe13o8K5LD+HTiVY2Q8G0V6NarVYdJVVLQxzZtSnwnq56lKxapyahm9YYbmdGpB7yMCaOdSbGx2rYth0osZTQo5KY9DxvmiPft0bpY/orVXDoy331CNzvubFlkzthlp+b1SDHX6tpJRXMljNuubd9ySefdGBqwcKbVOOcufk5iXxPSXz+XJNs1aNm6tytFHDF76ssjnCf/fH5t2F+8GVo/Dxls3LSKAS9+z1pmfvAncdf/D0zWQPuhl5pgzpEgYGXXJBhfYqapwOBumPlUVn/cUWbUWr9B1OBdF7qXzYTt+UXgiNAhWCB/H8oXIlwmAjhYexZyuBt8WAXBGkIKDthhgi1IZltY6t3oI3WekRjcePMNOdZp/ICnYUbT0afiji8yN9loWko25YLzHWhMjZ7t9J+OTKJIW5c1lSleayt6mOaYa9pH55ZL0nTkiQ7GyF6R2F0ZnnfDecXlQjOyZ9GUaAlGXIyN/nefUAY+SWWlGT6YQlCTZjnjo5jiKOmeSVrpaaVoavqpn7JkNiCkYVZ2ZpVglohkqxgCBZyEH7WoGo2Abhilqb2RNddsqB33TbBe/7pJqnFMLgensrkyu96Xuoow66pt1iojTqe+6eiu3A462wnZErotlHVK++tKxc5KIacULkrZu9bpl02hY9DbSZPwzqscwH8WhV+c3wkbLhDmiXnwwsjq4DC+y/YJbkg+BYsckXK2CxuZw8LJKqzrliewf7uGjOoKe/k7rbb7QncusO6atqzLHcaK7YfV3mbonAN/GqloNr5sbLx55kwbixJDZbTJMJJnJ9ERXjxyv0LfqeVGLpML7WPMFEsiuYzCXHFhUEfs4tbiVp02sR/DsemoQpKc9NtmxE1pp0bWXW6A0+6MN8daz8wn0zuHzG93gxdOrbW8Ipos4VfzfWjLejv263GvTYeKsKuY+6xv5scmjidRAW/OOdpSrc56666/Dnvsss9Oe+2234577rrvznvvvv8OfPDCD29AAQA7)
		   */pushWindow:function pushWindow(options,callback){this.open('act_webview',{url:options.href,title:options.title,right_btn_type:options.rightBtnType},callback,0,options.animeType||2,options.trigger);}, /**
		   * @callback Bridge~pushWindowCallback
		   * @desc 新开窗口回调函数
		   */ // 把栈顶的窗口关闭，以栈的方式来管理窗口
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 把栈顶的窗口关闭，以栈的方式来管理窗口
		   *  - 桥协议: `bridge://back?params={"callback_command":"xxx"}`
		   * @param callback {Bridge~popWindowCallback} 关闭窗口回调函数
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#popWindow}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEohFyTAwVyYBxqXxKi6GpVYikRgFMrVPavYJB4mmWGA5Dv091GU3GStZnd9vQpOPlET3H3wDI4Cd2kMdniPggmMGYNqfIZrYHx/bYF7mxNmkJyUX5VtmU+Cnp5XixOdaJWRp6WElKClvFx4mKoPqqS2i7ilvBexp561squ0hsTBvn+qt8x9p7PAg9O0z9t4xtp4ucm7l1WZytuS0avjAK6hVozY5eriEcP7FuGludTe/dfF3vadq9S9/I1ZKn7hyjhVfGpSPYARilfwwRFhI30dNBe/8K01XkVPAhxg+7AEozFtKZypQlD7bMeHIlzH4xKb5xuSulzpkoeap8qUNiwjL/gGAQ2u1ZPqMaj96El2NaUag+ydF0iPCEVKr4WCq9OhKpv7DYaF7sChMrjIFpyS79ZidpVq4e2LLCWtHdUpD6xJ7Jq2/qUL0C2/UVSRKa3Y8971bl1rZE4beRBYONycyxZMWGwVmErJlfY7/J9nbOvBNzw8dzE5t+fdlsx2j0VNy7DTq1aNrnbD9VbTK15dWeBdf9vRuuz7jwcP9EHAz5bOU1t+zeita1WuvvPCc/HJxuxO6TIWbn6z23eG37GhuPDGuxUuauMzu32Xq4ydojDK7//94Kf9Vlh9N+p00XUG/LrVegfw4IaBVx221GVGVuARiKXtQ1OF9p+sUnoVtruQcfiaF9pZ5mvslUnIgj4Qdjifn1ZyJ22MWIT2zQpeJRivpp6OJgC4rAGIv0AdaiikOS1gphJv4YWJATMlnHi1zdyF17RkaZHmWNdAdlkvQJxyWOx2l5JJhZTghkl1Q2RWBzq+BX0pspCEjngXWiF5WCbs4p5547rnCWfdJZsaFTM1pQKGgZBnrZl4tGh+iVs4HI26QemsDnkH/pOVmRdjrpZaTglZelqINSKt+WDwIaZ449RnMmhLMiyeaSehYY5phWJmmjn4lKautnpc5KnWyv/5HgYKPGVvnqc5qyZ2ilSl47rFfTmpNpnq5mayGwnTGL4IAf1ljWb++xh6OO8bh7Hax2Kdouuu/aGy+tDMrQaYCcHbssDv1+qmWrWNIwcGmh3qomtTkl6KWvA57FYYX+RrxmkBQ3AxTBQt3H2rzzDAqvj6k+uS+RJONr8p/fprwRnAu/7PKwImsXaLK7wmzpK+BKWm/B5I2bsazWjsqlg+viCZ63qI1ltG6jEQ2c0yjjHLWuLLZ67tGr8iitslID3LXSNIbNcsBdauvx1fTmLCPIa7PWNs1vZ32ivnkri4vZ7MKp7aNCGn0zuYsGW2ebgrfw8dCJJ60uC4KaKSO0ZDWay/HDeOvcGuK51qc5egeb5+7PTJ2Oeuqqr856666/Dnvsss9Oe+2234577rrvznvvvtNeAAA7)
		   */popWindow:function popWindow(callback){this.pushBack('bridge:','back',{callbackCommand:function callbackCommand(){callback();}});}, /**
		   * @callback Bridge~popWindowCallback
		   * @desc 关闭窗口回调函数
		   */ // goto page
	// - {string} page_name	页面名称
	// - {object} data	页面参数
	// - {object} data	页面参数
	// - {string} trigger	触发源
	_goto:function _goto(options){var _options={page_name:'home',data:{},naviType:0,animeType:4,trigger:''};extend(_options,options);this.pushBack('page:','goto',_options);}, /*
		   * 通过window切换页面
		   * noUseWV 手淘中不用windvane做跳转
		   * noUseTripBridge 去啊中不用brige做跳转
		   */ /**
		   * @method
		   * @memberof Bridge#
		   * @desc （新开窗口）跳转到指定页面
		   * @param options {String|Object} 跳转 URL|配置项
		   * @param {String} options.href="" 【配置项为 `Object`】跳转 URL
		   * @param {String} options.title="" 【配置项为 `Object`】跳转页面标题
		   * @param {Function} options.callback=function(){} 【配置项为 `Object`】回调函数
		   * @param {int} options.rightBtnType=2 【配置项为 `Object`】
		   * @param {HTMLElement} options.triggerNode 【配置项为 `Object`】跳转触发 DOM 节点
		   * @param noUseWV {Boolean} 手淘内是否不使用 windvane `openWindow` 跳转
		   * @param noUseTripBridge {Boolean} 去啊内是否不使用桥 `pushWindow` 跳转
		   */goTo:function goTo(options,noUseWV,noUseTripBridge){if(typeof options==='string'){options={href:options};}var href=options.href||'',callback=options.callback||function(){},title=options.title||'',rightBtnType=options.rightBtnType||2,triggerNode=options.triggerNode;if(window.MT&&window.MT.Tracker&&triggerNode){var elementSpm=window.MT.Tracker.getEelementABCDForStr(triggerNode);var urlArr=href.split('#');var oUrl=urlArr[0].split('?'); //去除url带的spm，主要是有的业务线是写死的
	if(oUrl.length>1){var oParams=oUrl[1];oUrl[1]=oParams.replace(/&{0,1}spm\=[0-9A-Za-z\.]+&?/gi,'');}urlArr[0]=oUrl.length>1&&oUrl[1]?oUrl.join('?'):oUrl[0]; //给href的url上加上spm，这里需要注意hash的情况
	var connetStr=urlArr[0].indexOf('?')==-1?'?':'&';var spmSearch='spm='+elementSpm;urlArr[0]=urlArr[0]+connetStr+spmSearch; //href带上埋点信息
	if(urlArr[0].indexOf('ttid')==-1){var ttid=this.getRequestParam(window.location.search,'ttid')||'';var ttidSearch='ttid='+ttid;if((this.isTmall||this.isTaobao)&&urlArr[0].indexOf('/item.htm')!=-1){ttidSearch+='&track_params='+encodeURIComponent('{"ttid":"'+ttid+'"}');}connetStr=urlArr[0].indexOf('?')==-1?'?':'&';urlArr[0]=urlArr[0]+connetStr+ttidSearch;}href=urlArr.join('#');} //去啊
	if(this.isAlitrip&&!noUseTripBridge){options.href=getAbsoultePath(href);this.pushWindow(options,callback); //钱包
	}else if(this.isAlipay&&window.AlipayJSBridge){href=getAbsoultePath(href);AlipayJSBridge.call('pushWindow',{url:href,param:{ // 是否读取页面中的title标签内容
	readTitle:true, // 显示/隐藏顶部标题栏
	showTitleBar:true, // 显示/隐藏底部工具栏
	showToolBar:false, // 显示/隐藏loading
	showLoading:false, // 返回
	backBehavior:'back'}}); //手淘
	}else if(this.isInTBClient&&!noUseWV){href=getAbsoultePath(href);var params={ // 要打开的页面地址
	url:href};window.WindVane.call('Base','openWindow',params,function(e){},function(e){window.location.href=href;}); //browser
	}else {window.location.href=href;}}, // 返回上一页
	// - 对于浏览器而言，直接调用`history.back`返回上一个历史记录
	// - 对于客户端而言则通过协议调用返回上一个WebView打开的相应页面。
	// - 因windVane对push/po window支持不友好，增加noUseWV参数
	/**
		   * @method
		   * @membeof Bridge#
		   * @desc 返回到上一页
		   * @param pagename {String} 未用到
		   * @param params {Object} 传递的附加参数
		   * @param noUseWV {Boolean} 手淘下是否不使用 windvane 原生 `pop`
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#back}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwhBwNxqZQkUw4p8QQ9Yp8PpaBa1WqRXin1nEzC1AW0V5omG2OfuTqNDP+ZtDBX3HesccR2CCH9+dmt8CFNjGo4agYZphIeHjXxygBiVHolOmXCEnG99kZ6nlZdnqWStoayQpaKkkbu3lhyhVoWhk7u/qra5mRu/Y6Crt4KVoL13drUfxcqwxaXf3rzAsivd2FmmxsPeyNDF3R3bwlfv6KGMw+zEkdT6lX30iu/m0rj0s/zV44YJr0EeQnTOCGdvx6faqTMFtBhY/8ybp3ECK+Y/8WH3ZgyCzjun4HQXakMKncPpUlV6akSOylxIYcW9rUZkbVpJksebpMmePaPmfwMAGJIFQkwp/YjvbaNXQZU3E2pOFU+k7qTa0eaS6FOW9VOqyuvvoMmNUsN4BXu6aNWNNbURLIHGoNeVWuO65754Cz+xXv3Y0Xx5EV9BdjW8WD0ZYl2lcVInM/IcMqStmoCKhUzlp+CzAzw7CTwfXkezkuFtQtRjfmrFGgXq+tTxpOGhu0bNuS0a0u/PTPbNe5y2Z2y3hgQribqap2THtkcJLMdQoPXXni9OWE6dYbW9f49d3Q03oPCD5xYdh8ZiP3ix575+TsDb8n7lvzXNavx0///5xCU15xR1540dnHXxDOrffdeAaGZFWAFnEmGHD9gSWdCdBQaJB5F8aEIWIhcghTfXnx9piEYhlSR2lj6CbgeSfOB4iDOYnni4ozGuhhYL9hhmI0QeYTH0kADthgiPmVQCBzuKEW4z9KhpWeTfUR2JtyUdVYHmnPyYhRdSO5t+SXI0DY3ZhbCmnlkEj9VqGJybm4WGrwHUeffxkOVGePC8HZYV8bGjQWYNaVaCONhj6H5pQiVrjjhHr6iKh+Zy7YVRwt4ihglCK6SCKoC145aaZuLkopne2pRyp5PeLHpagFJvokg66meOB5EVaUI5Irtmlpc0U+OupUwMLK5q4g/9a6a6GX/trsjbnOmeevYKYKpbQmjWjstaLJJ2aseyr7kW2QrmokupqysC2qM5oKFLvmBqpll5S24ZSgxuKLIJ9HtRqpZp1iugPAFybVqAovWdsYkc76Wlu8amH7ZpGnrbCwZTyGKd9MCs97GLm3/cjpqXtuOq2vjfILo8niVnwfWxy/WC2y45pWKo5ALnyYBw/LaevOGUe2FrRbxrkvzz2Xa/SxMr/M0qBLs1nnzwQHbSbULrcM3bfcbjUxYDbbiefEG5udJtrB+txx1mdjqe+wGratMt2qqn23p3862iqJ0SpKdMpewlzyrHLfm7OFn2pXuKwak5zy2LLyS+bI6TbWXekJQ0OsJo1R06srizXFVrbI7+WLeuqqr856666/Dnvsss9Oe+2234577rrvznvvvv/eQwEAOw==)
		   */back:function back(pagename,params,noUseWV){ //去啊
	if(this.isAlitrip){this.pushBack('bridge:','back',params); //钱包
	}else if(this.isAlipay&&window.AlipayJSBridge){AlipayJSBridge.call('popWindow',params); //手淘
	}else if(this.isInTBClient&&!noUseWV){window.WindVane.call('WebAppInterface','pop',params||{},function(e){},function(e){history.back();}); //browser & other
	}else {history.back();}}, // 关闭当前的客户端页面，如果有额外的数据则通过`ext`参数传递给客户端。
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 关闭当前页面
		   * @param ext {Object} 额外传递给客户端的参数
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#close}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwZAwbycVSaYxGQ9IqEVlkCrVXKIBrlVLDVWzXufU+0V81OQtaQ9ZNRT1xD9DTev7c3yH3sHdmB8cm2NemaDaRuPHoZRapSJlH2ChBiUHY1MlHlol4aLhYZrB58Xm2OimGCohwyubKGgsJ+soIa2slWponOptqsYqJd3i8WxkmnDvFO2aqm+j57PyGXavsYXyN3KvNGxpdzhwe92w9zf47fgv+x74uvf29zP2+yCVv354+L9m9fOf6DVIncF8geLTiSdJH8BLDUvU0xbKEEJ0sUv/mDH4g5m4ZRYj3ao2MAJLCG2oDW/7D53JloYUyNSq76RJbzYmqduJ8+VMcTJ8Kb1Rb6YgnkKRFZTJdShNYM4tFcxwlOiwjsYhalVa4ihXa0GAORZqb1e1iWJYBZzY0O5bjx4Rg1foi2VSuv5Qc1tXNe/fcXzC6Tvi1+/ewW7KC9QL8eVUoY8JinT6OaVeyYwfkGotNa1NuUH3Fpnqe3BOwTsQJpVZ9CBdt1LKtwNGz7fUsa7e4VOtezNb10454pWUNfPst49qcczM9Dr0k7c3M+V2ubDr5yeUZPYKeCxxwZ4xtDTuXFxk3cobVR/BFn1n9cesFUzAnbznu69OmzZf/J75RTavtF5YK97G304CU5ecfd+J1B2AG80VIk4PCkUZhasm9p1JhZZmEIVwSBpdhb/glGCJ90X1mH3VYgdhcW97wZoKDPsGoIluyBSFdjAvqiFloL1UkImyurTjgaEX21SN9RwIJFIlDERlSe7GhWN+S2s0W4Hai7TZea24MyWWVEHYpX3ZijkImeKX1ghpKYGJJJVUzMvkgUSRwmOWObz4poHsIwtlkiFvlVKKgBNJVaJ9KKclnb5TBeGKbXka5n3H92bnZSTimmel1fh7Eoo/q/RgqeJ091+mHKYJqYJD5HZrqXh5m+d1vNya6JKA7xvmVrEjxyteuAUZqKpps/5qJXalh5omskxlu6Zk/vvY46oi+LQvgiomtae11SQpb66vHDotrheSOW26652Zjronr6trqu6giicOv6H6q5ZlW3cqgueTxa4O+8NrrqrLAaojlhAp39d+UvMobaLXdzusopg02LKVmzUJ6XmrDuVupRKWyW2eyJt8756IyhuwdqfyW/OXJ9NKobbgSK6vgxXqycOdvnt7MrLGxvqxxwgdCu2+LSHu89LPF+sulw1FDrNjIC2st5dVIZ00VwRoE3avSu818ZracQByStFcSuq1i0cLmcMxvW+n13G/ZXfSgbrOM89rtDnyqkQkDrvfQySpuoeExrqpuxWvdijjMoDEZO7nNbKpd44t4FchpYFCNTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577rrv7kABADs=)
		   */close:function close(ext){var that=this;if(that.platform==='h5'){window.close();return;}that.pushBack('page:','close',ext);}, // 客户端极简支付，如果有额外的数据则通过`data`参数传递给客户端。
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 客户端极简支付
		   *  - 桥协议: `bridge://minipay?params={"alipay_id":"***","success_callback":"xxx","fail_callback":"xxx"}`
		   * @param alipayId {String} alipay id
		   * @param h5AlipayUrl {String} 在浏览器端跳转到的支付宝 url
		   * @param data {Object} 额外传递参数。若传入{orderInfo:"service=\"mobile.securitypay.pay\"&_input_charset=\"utf-8\"&app_name=\"tb\"&appenv=\"appid=taobao^system=null^version=null\"&partner=\"PARTNER_TAOBAO_ORDER\"&biz_type=\"trade\"&trade_no=\"2015101521001001640094948162\"&sign_date=\"2015-10-15 11:01:26\"&extern_token=\"2c3617e8330a859bbf27fd69a28446db\"&sign=\"_n_cy_w_tt_z%2F_tk_f_k_lx_jkt4_u_pbiz%2B1_xl9_xtxs_c_q_qt432a_ddpse0_aim_q48_eg%3D%3D\"&sign_type=\"DSA\""}，首参alipayId会失效，以orderInfo为准
		   * @param successCallback {Bridge~minipaySuccessCallback} 成功回调
		   * @param failCallback {Bridge~minipayFailureCallback} 失败回调
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#minipay}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwNAyRQsiS8VwYp9QQ9UpkZpVNLsDZlYYV2LK1fNVG12NoGxElo6ug+IP9TeDt8KI8H4A3wbdB6AbIt/em9iboNbioYSiG2BiWRJl4uQkI1tmhuBXIOef3eIj5xyg6iRHqOFpqGtuQdrgK6/HKiVuqVUtH2Vv5ybFLDFz8exobukzrhdl6cfysesssPQtrC/1RzXwtnL1djhxtfkasfd4nugofjt2cXkda7x3v7iw/Ts8aKQM4b5reoVvH6849gMokBRQHkdwUcan6JVMHqWE+if8VCc6yplCjq4d6AhYcRvGjxXm6ZOHjltBju2No1LmMCXMmzp03SVromfNZUIlCgYrE0fNPLiD2XCqNybSprKfteBScKoGmSagcVRqz5DTrwo5Fiw1safZmxmGTlsok21Rfxm7d5JbE0oIfhZoHr27Fy0Lv3GB1DyYrvILvW57TMhH2lUKxXsFiAf9DTELywrKNqbJTjJauz8lgOxO9C1egmZXu9Pk92rofZoeWG5NOa9CB29mqGYqeaHheasr+Qo819/mv3dj/PNk87hu58uD+UoMUobk21+Z3r3P2+Rz45ZelwXrvCjt8cvG7vbr9nh7U9tcdh+o2qqI9bsT2D6v/jTxfeeKVdd4+/wURzEUhvceaZzxlliBLqGxXoIM6xfdThMVNWFV3lbFToXz7eRXRRtU9ZlleAtpmXkgo9UUigCPmViKLCEU3oIxUZRjWeDjaZxqPO1aQFIw/PtggbUPudWB2IJ6WGIr8GdUfahSa8NuUVF7oX4cIsreagUARyGGIQibJ3ItKWjlmXGhex9tabBb5zZUb+vjVjHRiJBt0bJGHG5kmnqCfmljJlBKXgQV4o1YMwYnkoCPEWaaRzrHZZZCFaOjJWRJy5xiNk3K6oJ8uYsqhpmv6SGWBQe5JHVp/tilprRZqqeqlrOLH2qsHLrfpjQqeeGFbYb4GobCf/wpK3KyQiponsL1GOtyxAiabU33TRWBsj2YSCai2Gvk67q9vMvmopR7eOeytGuZKaIy75ibusNbJUO0cS7q62Q75ghbrtMpix6uJhzr6JKJYFkwfirMmzGCdtDYMZqPWKloCuc6WmqOY9pLam5zzdgpyvmrKWtnG96WIKrH3nokneq71C2qri1pcLM23IQxysobqHC7QtOZnqsJpopcleDK7GbPRzz5Ms64vg4uzoE8buZ7IU6P7c6Acu0uv0Ftr7fC6XYJ9EnWUwvxbifti7Z7Y8o6EIbJQun3uvPCuLPLMXvJbN2QS9622nd0OxnKedGY9p9J6O66e4IyLSS7AUSpOLJ2ejh8aVeeefw566KKPTnrppp+Oeuqqr856666/Dnvsss9Oe+0OFAAAOw==)
		   */minipay:function minipay(alipayId,h5AlipayUrl,data,successCallback,failCallback){var that=this;var payResult;var callback=function callback(ret){try{if(typeof ret==='string'){payResult=JSON.parse(ret);}else {payResult=ret||{};}}catch(e){ /* iOS客户端3.5版本返回的JSON格式有误，解析会出问题*/if(ret.match(/"ResultStatus":"9000"/igm)){payResult={ResultStatus:'9000'};}} /* iOS SDK返回的字段名首字母是大写，暂时兼容处理*/if(that.platform==='ios'){payResult.resultStatus=payResult.ResultStatus;}if(payResult.resultStatus==='9000'){successCallback&&successCallback(payResult);return;}failCallback&&failCallback(payResult);};var params={data:data||{},failCallback:failCallback,successCallback:callback}; //orderInfo优先
	if(data&&data.orderInfo){params.order_info=data.orderInfo;}else {params.alipay_id=alipayId;}if(that.platform==='h5'&&h5AlipayUrl){window.location.href=h5AlipayUrl;return;}that.pushBack('bridge:','minipay',params);}, /**
		   * @callback Bridge~minipaySuccessCallback
		   * @desc 客户端极简支付成功回调
		   */ /**
		   * @callback Bridge~minipayFailureCallback
		   * @desc 客户端极简支付失败回调
		   */ // 客户端旺信调用接口
	// - 如果没有装旺信客户端且未传failCallback，客户端会自行降级跳转到WAP旺旺处理。
	// - 如果传递有failCallback，则客户端会回调failCallback将逻辑交还给页面自行处理逻辑。
	// - 客户端3.7.0中新加接口，3.7.0以下版本默认调用failCallback
	// - {string} sellerName 商户名称
	// - {string} itemid 宝贝id
	// - {string} orderid 订单id
	wangxin:function wangxin(sellerName,itemId,orderId,failCallback){var that=this;if(that.platform==='h5'){failCallback&&failCallback();return;}that.pushBack('bridge:','open_wangwang',{sellerName:sellerName,itemId:itemId,orderId:orderId,failCallback:failCallback&&failCallback});}, /**
		   * 唤起旺信的新方法
		   * 客户端open_wangwang协议从5.4版本修改，参数http://docs.alibaba-inc.com:8090/pages/viewpage.action?pageId=243739271
		   * {
		   *  'seller_name' : '',
		   *  'custom_info' : {
		   *    // custom_info内部的参数请参见上面链接
		   *  }
		   * }
		   *
		   */ /**
		   * @method
		   * @memberof Bridge#
		   * @desc 客户端调用旺信
		   * @param params {Object} 传递配置项参数
		   * @param {String} params.seller_name 对方旺旺 nickname
		   * @param {Object} params.custom_info 自定义卡片信息
		   * @param {String} params.custom_info.view_type 自定义卡片类型
		   *   - `"item"`: 商品通用模板
		   *   - `"hotel"`: 专为酒店定制的商品模板
		   *   - `"order"`: 通用订单模板
		   * @param {String} params.custom_info.icon_url 商品图片 url 地址
		   * @param {String} params.custom_info.title 商品标题
		   * @param {Number} params.custom_info.low_price 商品价格区间的低价
		   * @param {Number} params.custom_info.high_price 商品价格区间的高价
		   * @param {Number} params.custom_info.sell_count 商品最近售出件数
		   * @param {String} params.custom_info.item_url 商品 url
		   * @param {String} params.custom_info.room_type 【酒店商品】房型
		   * @param {String} params.custom_info.checkin_date 【酒店商品】入住时间
		   * @param {String} params.custom_info.checkout_date 【酒店商品】离店时间
		   * @param {String} params.custom_info.order_id 【订单】订单 id
		   * @param failCallback {Bridge~openWangxinFailCallback}
		   * @see {@link http://docs.alibaba-inc.com:8090/pages/viewpage.action?pageId=243739271}
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#open_wangxin_item}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gu7wEzX9q3Qh57cvr2bBX3D3O/ImyCXRkCxt8QZkscnIlqlYH9N63DrnArFRHITnJSkH9TxQhpYX91yL6N+d6v1bDp/XmMHKEgIFRaB15DYZZYX2Pjmd8josGhY0VYWJxlFeQZ06WiVtTmJyAla+sUUGqlZqApJakk5i4rkaQgHm7n6GKt02wvpO1zaKUpmbGsKkQlnXCwp/doKLTythX0YrZz6zOrqO8pFfMpdDuz8/UdK3rycTmst/6fIDp/+XrsNm3yML9gvOe5ktcsGcKC9SgvF9Wm2Dp0mZv5a7YH47x5Ghv8Sr01EGBFTw1wOtXXE57HiIJNoEMaTuM8gTJktNzqqGRPYy5w7vaERWXOmTpdEhfZMCKYFOIXVkI70OS9GSWa7oD51alOqRmpcdaXSWBVF1KFMc77zGDatPpMCx8kUtDTuwV9dLYxdynNu3YIJP9G9oNZow0QE1wJ6mVJDYLMWG2MFWzRxhsVvMzrm65asZKB5m96di9frT5+cKz92vFV0ZmrI+rI1zfdzPqaFg65mGfAf2q8Pa/sNq/Jm7qkoeXP0LRq4OYGb6dE2Dnn2b+jLe4O0KhQu6KvRka9kfv20uuW1x06Xjvp4eIqXt2dV/3e8/Id+U7vWvCVzaI4eyg//vnVWfqTRdJV5/Kmm23A4DYjfewZ29198sYUXHHbeKQfhRoFRNl91wnkGIG7x3SYeY99FNOFJ713k32z7YagShq1tsKF7+lF34ocZPqgjgoeFeJ990e3IXY7yIaZggZEVJyGO9LUn2EfZJaiiXC4WSdKF/Zhmn5V1kQiUjEymeFRS6XUI3ogMmvljlKwZRxiWH8b5HC4+ImmnkRWSVB+UVG1Dp3dCnoOiXskx+aaGcCq5op4+apfnbk2RSIuBkrbI46POFdpkozeCOGmYEcZomKVjupdpm10yyuFF/Iz23VFD9lgiYIZilWJnnM5aq123LhhrUbvSitlrvb6a6Kd//ypalmJbHtigpMky2CearmIXEoFSWrlftalq6qh4HHaj6qF1YiAms9Ju6mGQFgIpKrMZUiosrdO6m22beMJ4rYjFWlvSXoDKadk5M55ZMHu4Ehwwi+HwSSi7rmgJapY2PukremiOW+qtkFbKMHkUUqutoCJf6SDBFAc4ZbkNB9spmMbqumaEdK4aM8kZI6stLzjerHO3tmrMccuQJtoapir/uqibCQ+MxcdOviw0WT4THVSz+i6dcpTL8mzkpQLujDG38HJ5stl5lgat2vS23CLShvWrtIreTr1w1me3lTaid+Ktd9J4U3ne21WfF/jeKvCbd672Ovets2puHfWZ6fPKLBbgWUOML8vobv732uY2Z3XQXAOr7Nzvat2ZyZyymXqoja+3pMb95ou52+D+CzTfEbv8KpmojlowxrjrzHKNKPfOOZWkv655lYkzXnY9nt6L8/T/0m19xtuXrP3k3EvJ68rjDwq8sQrfjbWn5F6dqZftkv4+4cUj//v65n7ZrsVdN08c8s3pWXtynf/Ypj/K8Q9gYWMUAB9IKtktMHsE7N/L0Fc464gPchVkIMI+eKz9jU9+4Rpg5Y40vOtZ7mceM1hLjibCofHqgP4am+u+B61q0VArPOyhD38IxCAKcYhELKIRj4jEJCpxiUxsohNDUAAAOw==)
		   */openWangxin:function openWangxin(params,failCallback){var that=this;if(that.platform==='h5'||that.client.version<540){failCallback&&failCallback();return;}that.pushBack('bridge:','open_wangwang',params);}, /**
		   * @callback Bridge~openWangxinFailCallback
		   * @desc 客户端调用旺信失败回调
		   */ // 显示客户端Loading
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 显示客户端 Loading 框
		   *  - 桥协议: `bridge://open_loading_view?params={}`
		   * @param {Object} params 其他参数
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#open_loading}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEorFxrAyRQqbxmfxAp0TnUtlkXBfUbqhLtWYpW0U5AZ5+x5DtOQA2sw3ucR0weW/0Wvsc7oX2d3dAKMGXgSiHRzcYiPBmCMg4mfe35/dUmJl22af5cBeleCFatEnZWXUI1cZ52kjpYbpaGatqCepAKzn7WitJyvU7molaLNvBaxyLarEMzDyJvJba2oxtS0YMqw3tDPKdDQ7paJ1GTq42rsx9vggveB7H7n2t7TvfHWkeP/3IT1+0ZByEpbv16KAGg/UwEXSyiF65hxgY4mtHcRhBXP/ypHjSWE1VMGkj32WDJjGfSJIsTdpziTIhxpUwW6qzeZLmRxjUHCoEgmVgQWlAS+3bycolD4sx0SGsdexXxG7VckXVeTUgralQwyGdmHVl2I1Hu/4zG5Lo05sCubr9tC5I2bcvr9K1C/feiZ4TS+Ltaw5RyhRxkQnjK5hqTrQjCpc9PLfh2o6T5eoy/BXxxyhsLQYd6yrM04B0m3LGCDoUQL31NIusOjrzal0KXXMscfps6ciAM25VnVFl4OFtWysGWxmiidzMH6vV/emvchFMWYOMLfolZtpeg8vL7Y9mZ+fcPXrvDVmgRHFnwaOmDF1jL+M1i7f/6hO++/ik9bf/ZE9Cf/HtRlaBbP0VVwsC/obcddtc9txe/SwmoD+5uKbghNppaGFSGHb3IX9S+WcgfYmdF1SItmm4IHHTCScUhf+xSGOBJ0pYInrunLhdczHixiF2Y/FIno/zURfkfeodl5qSWkXYGHHprXfckQji956O593m40+VebaQlLI5NeBiYigF4mwdlqmll1qCmUgntbmY149n7pdWdhUm9x1vdzIZ5ZZ0yjejfVxZ2V1od/VZH4OHQmmeooyeOZ6hjCI6FJoX1TWpmcD9iWKWe3La24Gf1glnRc+1aCNOu2xmXYBiZrcmnsCxl2oET5JZK6C6Fglpfm/GaiKWhC6paT7S/6lKZoKdOhmsUZZKS2V5V+ppbFLLUjvbfj36OZOvrJr6qm9iSZaptzWS++Klagaqbo5+nXpstUuNaS+94UXrwpTvljsdpjzh+2+7DQrM7WvwXVsSgw1n+6B4C3/J23bk2honVhOL+KPFnrKprLbPdrmxswcTm7FVI1eZpMmV5mqwwR43OKe1MjKWspDoLnqyvOfSLOo91eF8pGksh6qykm7yzO7Ng20qrGOCKqw0s0yHiezS2EmNscy+Wq0z1O5ia/OvrSItctWbzsz20Qx/LW2Tu75tH8kcd/2g3IO2PRCrAGYpqYOVXrw3yiGb7XXdrtINc9qB96p4fQTinbHEYjqTqrXaJjderuU30hfatznmySWsmvrbt9tFrc56666/Dnvsss9Oe+2234577rrvznvvvv8OfPDCD18AADs=)
		   */openLoadingView:function openLoadingView(params){params=params||{};this.pushBack('bridge:','open_loading_view',params);}, // 隐藏客户端的Loading
	// - 默认在domready时关闭，在未加载bridge的时候会在onload时关闭。
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 隐藏客户端 Loading 框
		   *  - 桥协议: `bridge://close_loading_view?params={}`
		   * @param {Bridge~closeLoadingViewCallback} callback  回调函数
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#close_loading}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFgPCaGyGRSwVw6p9EP9dqkQoXZK2D7lXqfoLGzexajtWqxmRiqQqrThtygXOSzkzvHb8eFl6YniLDnZsgnAajRWBgWUMfgh3hYBNan2EFH+JjnFRjZOWo4Kbn5Z+qZurZmuYhaOvu6GulBCto6CMd7mskbm4sZXGarS1ssC7ysLCrMest5TNxsTcqM/aAtixxH3XttGwud7MB9+ogxHF5Z/ZmqrszOjQte7ztOGb97aZ7eb909ff7w+WP2bF60b9LO9ZPXbeA/gnMCXoBIro3Ddv8LFTZMaMXiwX0fE83y5lFTyQxvUIqbCLNcrTEMWxJEdzMnTJsrBfKMmTLoy3I8cyCjh8UkRiAFwc38lS8c0whHJUKNKLUGu5lclVbL9o7fSZEVtkZF2jAUSVfOPC5VyRYrWjBXiVJ0S/aimbhdm9Jsay3u27J7o9L9ejZpYMAuayq2dLUoY7EGNxiEHDbrUI1oq/bUa46v4dEjF2+WG20w1btYD49Nyxrn39YmLttECNg1WNifVYVOzKZ0RkjufptmOFyy8Nwmd+P2bVtzRd67AZI5Po0jb9Wmiz+VONyedt2EqXN+3FEEPM2yYW2jzDp8dlHe8Up/vz0+c9/0xdr/vb8RedgNeIJZL0H0Rn+v2WCggQrWRZp7LjToFH5qEVdhELfhJ9N+EK7Wm2UbBijUehJOV+CIIMn2YF6QpGicYFY9NKN5qIXoiH60HUhIdT3ax1158u3YGY2vYXakiyJep+CQLjlon2ghMUlSZRHqVB+RiE154pUrPZnhf1IuuWJh3fnnk5gjrPfdeBoNiWKUaxrZZnTPwSVnCY1xKFRffX0YJIhWvtgncK7NtdacboLYoV/FecZmbVteKGVk4FWpZHaP/rijn0AaGShLkypWKaeIYoijqDFaaGaRxmUJJ2ixonqhq8mhuRx/+7UYnK2T2TireD+lV+pOWG5JwrC9/8JnI4VJprqksnt2WmJmnnLpYnRdEkrimdBSsG2j18bZLazGAOicV98SWCi7FjhrorWk8Urpm/N5Ge+i2yoLkngyAmjdmOrWm+sM8Eq7IKbrwnCwtAJT20PD/M7bXAoTezuopfpmCt2Im656o4CDJjvsrYseyqy4FmcbppcoaxcpxP4y0rKW+V0nIZRT4gnxtLUimydyhv7q4811orcwuJd6W7TICAeb47MmN13xjQnuem/IeZ5aZsLlcsyn1jwai261ZZ82s9jOjnue110LrbZO01mnbc1wB9zuy2tXHW7Uf8rNKs7y+vVw2uT+F/PHSPab9eGffhkbqR6C3a3jY0InzuziiWLbUpv04qoz1KoqR7DnbT8cKs0/mU7rqGQzPlXsss9Oe+2234577rrvznvvvv8OfPDCD0988cYfjzzyBQAAOw==)
		   */closeLoadingView:function closeLoadingView(callback){this.pushBack('bridge:','close_loading_view',{commonCallback:callback});}, /**
		   * @callback Bridge~closeLoadingViewCallback
		   * @desc 隐藏客户端 Loading 框回调函数
		   */ // 分享
	// - title_content	分享标题
	// - text_content	分享内容
	// - url_content	需要分享的URL
	// - image_url		需要分享的图片地址
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 唤起客户端分享
		   * @param data {Object} 分享数据
		   * @param data.title_content {String} 分享标题
		   * @param data.text_content {String} 分享内容
		   * @param data.url_content {String} 待分享链接 URL
		   * @param data.image_url {String} 待分享图片 URL
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#share}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFgPBqGyGIToGAuhdGk1Qm6aqlT7fMpDYS/3erWGjpfwehyNzx2i7kIdfsTd+SVdeyCTzYHJQeRt2HIsOfHNvi3KAdHVyjZgejYyGhmCQhJZ2mW5nmniJkoarcVuEZYecpHOtmIeqY6SskRmRS4ayo769Wpy4rr6pd7fLsqqJlcTMRL7Cu8/ObM/DzMSS34envonJtZXcpt3IzdJ91N/q1u7o6uvd4AOx6eBX7KiEw+3wtqTx8+ePfKxXtkEBo0fgU9fErAUGDCBw/TTahYAWMwf/8T9Xj7J0HjxY+X9knUBjCCSJEhfxV8eTKmNJNqQrmcGawWzm0wb9p0qTNozqE8b7KTEfFoOlrjgGTMp5TmOpZOk8Zi2tHGJqjXUk61VRMiSQxbCZ6r1xErqpQOSVoVi05n0rkIqcaSC7UnVnoyaZLQm1fmXpBFzUbVANhwYmV8d74VsZao1LqCJXodi9iO0KWp4OLdeflwhsiFrzEmyjE0jK/Att3NhrCx3XZ0D4reLE5lbBOsla203LRl3FatfVOGZ7pzYbRti4NFK+/XZ7bEjU+LjhwuaX7Uo/0e7hq2T8IoB35nLh4o+d142Hf1DJ/zrMa5/55VXj+4RfHJ+2H/Hn1fa/llJVl6x9nnX1jyvbdfeA6e5mBz1sl2zmTZEbhgCmq5dWBAtnHXy2wXbKgUdhbmVh6GKrC2GYS1+cWfhu/0BGODJKY2DIIgluZhaNbhGCFxKFqjX0NPgdcfgkNeyJGIKmrnXmZMEpkWcBSkWOMJ6ummIIW2qSbjfMINdgmQRpaw5VX4hfgOmEG0udF/Rl3IQ5NUerldlDTYSSebYj55A41QIklRYFOC56RwuPV45IlFdohmX4Pa9eKjiP7XaHyR3hafoEFG0x1kmHYq6afthGqTBZ6eqSVXMS7HHp8Mrujqg5URWiVo+tFq2EK3luXpgDrKqZyJcX455qgA/+LqKIaLWellq8x6uGOLYI00rarX5khtrXO6qOeRsvrZm6Fp7lodnJ/eOOO3l2bbAoTNDliWsDXI222C6NkY7gv4GoTdvtONMOfAJZF63a0KpftntZoeu6q6P0l3LH0Ij5urkopOamh/rFqqMZdJ5usxtCATrCwp5b47oZ8Lg8oorCXe6XK+QDZXo8P8Zrtyy6L2WvF6PLerYKIeAb1uqage/fGmOXPoGNTaIrvCY/UW2CC2TYfss5rT4PmrsjjHfN4dYEf9dZhPcwqwnj7/G/JrO59tcdtpV51yhdzaXTdp8ead4Mv/1mb0sluqHKu5Zu9dOMdFB3i13WRGLiHFtire/ZnfjIvtVOeefw566KKPTnrppp+Oeuqqr856666/Dnvsss9Oe+0MFAAAOw==)
		   */share:function share(data){this.pushBack('page:','goto',{page_name:'share',data:data||{}},true);}, /**
		   * @memberof Bridge#
		   * @namespace
		   * @type {Object}
		   * @since {@link 5.8.2}
		   * @desc 自定义分享
		   *
		   * @example
		   * var bridge = new Bridge();
		   * bridge.customShare.prepare({
		   *   title: 'test',
		   *   content: 'test content',
		   *   h5_url: 'http://h5.m.taobao.com',
		   *   img_url: 'http://img.alicdn.com/tps/i3/TB1DSMNJXXXXXazXFXXwSQn2VXX-1080-547.jpg_640x640q75.jpg'
		   * }, function (channels) {
		   *   bridge.notification.confirm('选择待分享渠道', function (ret) {
		   *     bridge.customShare.exec(channels[ret.button_index], function (ret) {
		   *       console.log(ret);
		   *     });
		   *   }, '自定义分享', channels);
		   * });
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#customShare}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwRAqVRGbS8EREo06jtQm6arGB6RJarAKYCu84sU2H0lsy+NwNv83lbxwuZlM7e0c/f1VnJeh2N/GngbigqGcHiPdWqEiY5fjA2Ch4hGZHJzF5YbZpyAm52NnIJhkYWQmnVRjLIJrKSno3CmpBy9Wny1srdwvb+gGM+qo2K0yMazlsq1txnFzdrImcK7w6WOxBzX1dCj73TH77nc2MLCbr3H1qei5NMc9eXo0NTyml3vu8wV4+fO5ULZPnz5MxgAfDmdtWahfDeGsm8uOlrwG9fv+mNFoM9ZGjQ4Rc+B0K6S5gMIUs70Eb+HJlxZUwW9Z0aVOmK50vufksljNYjo0e/xklCgQdBm1HUSZNOW1d044yMFmLBjFmQqkGRboq+ghjRIL4mHaFmsFqWH8XuWLVY9KEVbEczzYEupVqiblsxynzgzNvC75XSdqliLcw0pMlEz/Sp3Ak2sg7H97cV9alZG9jlS5s3DOzYaltjYLlLEJc3bdqHfvVm3GE6rWFT4deDfs1idmi6ZYumLXo4ksT6aZ63Pttu87p9BrPJJo20+VeP9s2+7cZT9+oZ6oeFRv377vvBv+lHh69a8TlWRwGrzt+9dbt91oej/u7ZtT6c6f/vd+ZL9DNB2B+Bc4U123SFSjgaKANF0GD1wX32nFkxQOhRCRNCBpkA8InXgoSkgeih3BdmN4L7wXmnGXYmcaciOetRx9y71Dm2QkrXmabjdodKJtbDk7mFIYh8fYZd/XVGFWHFRa5lJDhMVkPhQb6t9uMVx5mInAwmdfGQTwJR1qAUFaG2ZZadsnffvZt2KaTN35opQ0jelZicmHWx8OdDRJmIZ81BDUVmXCqWRuK3SXC4ouGJtiVozFyQKiS6uGZnZSTqqSYkHmyB8F0NJ7JGG2mflKkqLdlSFynU32a4KOjfqmiLSleKauCirqA5Ke9lompnCr8KiexNt2aZaKI/5b6JIwRkhqlsqc+66CqoUILkrR6MrvsoqCiuSCWYnpK04PYXvuqrU2+WK654mpIDaytstsukDcoSWyPZgpbVV+4khdrYqzK5a+NAeco8LnzCrWrteMe+ty76zIs6JJHZkUoWpxuhzGwuf5kscRVvkslm3MeOqXCgJFc3MXw9JfrwPquPLPJMD+sMaOughypm9RxLDK3P142NJHp7ikzicol/LLPFwKdrI8t8/ttdT+rrKHULVJ98J9Ov6n1x6hunXLQnIYtH8iGVop1k2iHSKB/RUfnnmBx+umyqkhGPXbZx87KpYwsD/k0iyPtTfDgfhsO+JqCQ+0t3jR13TaiczEjHGy4IJasM+SYSz5m5JU/RXrppp+Oeuqqr856666/Dnvsss9Oe+2234577rrv/kMBADs=)
		   */customShare:{ /**
		     * 自定义分享第一步，准备数据，获取可分享渠道
		     *
		     * @method
		     * @memberof Bridge#customShare
		     * @param shareData {Object} 待分享数据
		     * @param shareData.title {String} 待分享标题
		     * @param shareData.content {String} 待分享内容文本
		     * @param shareData.h5_url {String} 待分享链接 URL
		     * @param shareData.img_url {String} 待分享图片 URL
		     * @param successCallback {Bridge#customShare~prepareSuccessCallback} 回调函数
		     */prepare:function prepare(shareData,_successCallback2){this.superthat.pushBack('native:','share/preload_share',{data:{share_data:shareData},successCallback:function successCallback(ret){_successCallback2(ret.channels||[]);}},true);}, /**
		     * 自定义分享准备阶段成功回调函数
		     *
		     * @callback Bridge#customShare~prepareSuccessCallback
		     */ /**
		     * 自定义分享第二步，执行分享
		     *
		     * @param channel {String} 待分享渠道 {`"weibo"`|"laiwang"|...}
		     * @param successCallback {Bridge#customShare~execSuccessCallback} 回调函数
		     */exec:function exec(channel,successCallback){this.superthat.pushBack('native:','share/execute_share',{data:{channel:channel||'sms'},successCallback:successCallback},true);} /**
		     * 自定义分享执行阶段成功回调函数
		     *
		     * @callback Bridge#customShare~execSuccessCallback
		     */}, /**
		   * @method
		   * @memberof Bridge#
		   * @desc 保存页面图片到系统相册
		   *  - 桥协议 `bridge://save_image_to_album?params={"url":"http://img.alicdn.com/tps/i3/TB16kmbJpXXXXbwXXXXwSQn2VXX-1080-547.jpg","success_callback":"xxx","fail_callback":"xxx"}`
		   * @since {@link 5.8.2}
		   * @param imageUrl {String} 图片 url
		   * @param callback {Bridge~saveImageToAlbumCallback} 回调函数
		   * @example
		   * var bridge = new Bridge();
		   * bridge.saveImageToAlbum('http://img.alicdn.com/tps/i3/TB1hPLWIVXXXXcmapXXSutbFXXX.jpg', function (result) {
		   *   result ? alert('Save success!') : alert('Save fail!');
		   * });
		   *
		   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#saveImage}
	    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFgTAqRS8OQmVQ8E8oqMWTNQrMAqNeplDYR3Cq2HAWXv4FpO0wdb9FuT/3hPsa7ajHfoUcmhzfIcQc4Fsh2eOjHWNjQqCG5kFfkx5bJoNgnQYlhmfb255io1Tm6aPpnhmq3GkgZe5qKGqoq+nkROku6xwtXK3xrG6xrAXxVzLqKuQxBPNp7xpzb/LyHC30tfenakRwtXjjuW8ndKvxaPb3J7SxoDh/+Dg7rrZ79HQ8fiW4MadI9Zfn47dNUcN7AaOsmHNtGMF05hwEzPDxYoVe7Yf8V+9mT5w4kBY34JnrquItOyX/VtGHjqPIixZgsXcK0SW8NCJomb77syROli5xzrPgTBeQku5U6zyFNCrFoTk7xqM5IJpXl1IpY93X98FXiwKwEFUYkN3Zn2m5nl7q1uoxhXKEqZD56y9QjW4Qw7KLF21bvxqt0vS7Mq69qvRIbuSCU65Ot2LImGtO6+1jrZXwnLBs13DLx1rYyMwIUmU6wUKqQS488fRRuwWOsF7ueOfgX58R8dZtrXRjZX1yyv8Y+nVsE5rmUDe4l9FnyYmpmyR4tCnFy8nXLnc+MqiYs1+Cmm3f/Dh17+OkYDe2eTb498bWy4ltEM//3X8chjbP/oJOfak2V4lZf+DEnIH9O+cfYYfqhdmAEsoHXIGB6kTWhb/eJ1NB65o03IHS39QYWcrAh2F+E+Y34mjXRlVOfSmZl6J6LkwWYYogw0biBeAV6eBdQ7/nI4nUe4ijdg0J++ONzJTZJ5JCI7TjckVY+WVwwBJK4IZLUZPmUYqGpNSaPKYVpXY5cgqIZhx+ph4iFOQbJFJgkMDjje2mKSVRId65lZJLHMUlSc2sKV6aD2bHnXGoaVlYTkKtNGaijYnYWqaAiMroiiEUqdeFPJiYaGG+gUWdqo4pe6aOAoXaZKk6jInneqSkA6Jtn3bUqqZtY0oJhm9WxumoQKvYKY5VU/5JqJqIM1urklvK9dCibpCmbmaHE+gqcr9Y+i+2V0iYkWrg1osennuLOeSy554Kaq7rRsqvjp3GiGyyE2qZbr311yaugpWDau8LAo9KpL8H/7huwluteemtQcIL74onu/snTxIAiWyxkmGa8LZz57ukxpN4yR5uDuDolMpnoWponyCw/3KGExVYaVIwtP0mysoXmTFO1AskJH5RAAy00rJoWrfHREk/77tJ9RqazmulBXV7PRPf0Ko0lK31jr7LqOyiFCqvqYtIjl6vkxsp1zCm9u+7nNqpSx72gw5E1fXagFBJoJ2gCg2j33/EybBuw7fWN9eKKow24lGSTGTTHiDhXzCzhJleepMFpozhzhZyvHHmpy/oNVeqqr856666/Dnvsss9Oe+2234577rrvznvvvv8OfPAFAAA7)
		   */saveImageToAlbum:function saveImageToAlbum(imageUrl,callback){if(this.platform!='h5'){imageUrl=getAbsoultePath(imageUrl);var cbFn=function cbFn(result){return function(){callback(result);};};this.pushBack('bridge:','save_image_to_album',{url:imageUrl,successCallback:cbFn(true),failCallback:cbFn(false)});}}, /**
		   * @callback Bridge~saveImageToAlbumCallback
		   * @desc 保存图片到系统相册回调
		   * @param result {Boolean} 是否保存成功
		   */ //截屏分享
	/**
		   * @method
		   * @memberof Bridge#
		   * @desc 截屏分享
		   *  - 桥协议: `bridge://screenCapture_share?params={"origin_x":"xxx","origin_y":"xxx","width":"xxx","height":"xxx"}`
		   * @param params {Object} 传递参数
		   * @param {Number} [params.origin_x=0] 待截图片所处屏幕的原点 X 坐标
		   * @param {Number} [params.origin_y=0] 待截图片所处屏幕的原点 Y 坐标
		   * @param {Number} [params.width=document.documentElement.offsetWidth] 待截图片宽度
		   * @param {Number} [params.height=document.documentElement.offsetHeight] 待截图片高度
		   */screenCaptureShare:function screenCaptureShare(params){var docElement=document.documentElement;this.pushBack('bridge:','screenCapture_share',extend({origin_x:0,origin_y:0,width:docElement.offsetWidth,height:docElement.offsetHeight},params));}}; //extend
	function extend(oa,ob){for(var k in ob){if(ob.hasOwnProperty(k)&&ob[k]!==undefined){oa[k]=ob[k];}}return oa;} // 客户端回调生成器
	// - 客户端目前只能支持挂载到全局下的callback，为防止污染global环境，需要有callback生成机制。
	// - @param {function}fn 实际要执行的回调方法
	// - @param {boolean}isAlwaysAvailable 是否一直可用。因为在有些事件绑定机制下，生成的callback需要持久可用，不能销毁。
	// - @return {string} callback name，挂载到window上的。
	function buildCallback(fn,isAlwaysAvailable){var guid=buildRandom(),callbackName='Bridge_Callbacks_'+(isAlwaysAvailable?'always_':'')+guid;window[callbackName]=function(cb,callbackName){return function(){cb.apply(this,arguments);!isAlwaysAvailable&&delete window[callbackName];};}(fn,callbackName);return callbackName;} //唯一标志符生成器
	function buildRandom(){var random=new Date().getTime()+'_'+parseInt(Math.random()*1000000);return random;} // 创建代理发起uri请求
	// - 基于平台基础协议，系统自动拦截请求并作出预置响应。比如：唤起客户端
	function buildProxy(uri,events){var guid=buildRandom();var proxy=document.createElement('iframe');proxy.id='J_MClientProxy_'+guid;proxy.src=uri;proxy.className='hidden mclient-proxy';proxy.style.cssText='width:0;height:0;opacity:0;display:none;'; //绑定事件
	if(events){for(var k in events){if(events.hasOwnProperty(k)){proxy[k]=events[k];}}}document.body.appendChild(proxy);return proxy;} //获取绝对地址
	function getAbsoultePath(href){var link=document.createElement('a');link.href=href;return link.protocol+'//'+link.host+link.pathname+link.search+link.hash;} //处理钱包下桥可用
	function alipayCall(fn){fn=fn||function(){};if(window.AlipayJSBridge&&AlipayJSBridge.call){fn();}else {var once=function once(){fn();document.removeEventListener('AlipayJSBridgeReady',once,false);};document.addEventListener('AlipayJSBridgeReady',once,false);}} //判断是否ios9且safari
	function isIos9AndSafari(device){var result=false;try{result=device.type==='ios'&&device.version.split('.')[0]>=9&&/safari/i.test(window.navigator.userAgent);}catch(e){}return result;} // 提供全局Global桥
	/**
		 * @membeof Bridge.
		 * @property Global
		 * @type {Bridge}
		 */var GlobalBridge=new Bridge();Bridge.Global=GlobalBridge; // 监听domready事件
	document.addEventListener('DOMContentLoaded',function(){GlobalBridge.closeLoadingView();},false); // 保证错过domready事件后能够在onload时关闭
	window.addEventListener('load',function(){GlobalBridge.closeLoadingView();},false); // 检查如果已经是complete时直接关闭
	if(document.readyState==='complete'){GlobalBridge.closeLoadingView();} // 非 WindVane 容器环境，将 `window.WindVane` 置为 `null`
	if(!GlobalBridge.isWindVane){Object.defineProperty(window,'WindVane',{enumerable:true,configurable:false,writable:false,value:null});} // 挂载到 global
	window.Bridge=Bridge; // 兼容 KISSY
	if(window.KISSY&&KISSY.add){KISSY.add('bridge/index',function(){return Bridge;});}module.exports=Bridge; /***/} /******/]));});; //# sourceMappingURL=index.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["tracker"] = factory();else root["tracker"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "/build/";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				/**
	    * 数据埋点
	    * @module tracker
	    * @author lanmeng.bhy & shuke.cl
	    * @date 2015-01-20
	    */
	
				/**
	    * 数据发送说明
	    * 1. 为保证性能sendLogs() 方法在onload 50ms之后可以立即发送，在这之前的所有数据只采集，不发送
	    */
				"use strict";
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var Tracker = function (document) {
	
					var WIN = window;
					var UA = navigator.userAgent;
					var PERFORMANCE_INFO = {};
					/*var IS_ALI_TRIP = (/AliTrip/i).test(UA);
	    var IS_TB = !!((UA.match(/WindVane/i) && !UA.match(/T-UA/i)));
	    var IS_TMALL = UA.match(/AliApp\(TM\//igm);
	    var IS_ALITRIP = !!UA.match(/Alipay/ig);
	     var android = UA.match(/(Android);?[\s\/]+([\d.]+)?/);
	    var ipad = UA.match(/(iPad).*OS\s([\d_]+)/);
	    var ipod = UA.match(/(iPod)(.*OS\s([\d_]+))?/);
	    var iphone = !ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/);*/
	
					WIN.trackerPerformanceTime = WIN.trackerPerformanceTime || { trip_startTime: new Date().getTime() }; //开发模式下可能没有头部时间戳
					var PROTOCOL = location.protocol == 'https:' ? 'https:' : 'http:';
					var LOG_HOST = PROTOCOL + '//wgo.mmstat.com/';
					var MAX_GET_REQUEST_LEN = 4000; //最大请求长度,用于拆分请求 http://wapp.m.taobao.com/market/trip/test-request-get-maxlength.html?host=h5.m.taobao.com
					var PAGE_START_TIME = window.trackerPerformanceTime.trip_startTime || new Date().getTime(); //进入页面时的时间
					var CUSTOM_PREFIX = "_";
	
					var _sendIndex = 0; //timelines被发送的次数
					var _cacheErr = {}; //缓存错误类型
					var _hiddenTime = null; //统计WEBVIEW被隐藏的耗时
					var _hiddenTimes = [];
	
					var BASE_GOLD_KEY = {
						/*performance: {
	         key      : 'tbtrip.1000.1',
	         checkCode: 'H46836965'
	     },*/
	
						/**
	      * 性能统计专用埋点
	      */
						timeline: {
							key: 'tbtrip.1000.8',
							checkCode: 'H46836993'
						},
						/*
	     customPerformance: {
	         key      : 'tbtrip.1000.5',
	         checkCode: 'H46836990'
	     },*/
						/**
	      * 自动监测的JS报错提示埋点
	      */
						/*normalError: {
	         key      : 'tbtrip.1000.2',
	         checkCode: 'H46836987'
	     },*/
						/**
	      * 自定错误埋点
	      */
						/*customError: {
	         key      : 'tbtrip.1000.3',
	         checkCode: 'H46836988'
	     },*/
	
						/*leavePage: {
	         key      : 'tbtrip.1000.4', //停留时长
	         checkCode: 'H46836989'
	     },*/
	
						userAction: {
							key: 'tbtrip.2001.1.1',
							checkCode: 'H46896547'
						}
					};
	
					/**
	     * 转换为数字
	     * @param s
	     * @returns {Number}
	     */
					var numberify = function numberify(s) {
						var c = 0;
						/* convert '1.2.3.4' to 1.234 */
						return parseFloat(s.replace(/\./g, function () {
							return c++ === 0 ? '.' : '';
						}));
					};
					/**
	     * 对象拷贝,不支持深拷贝
	     * @param r 源对象
	     * @param s 被拷贝对象
	     * @param o 是否强制覆盖,默认false
	     * @param prefix 属性是否增加同意前缀
	     * @param isOwn 必须为自己私有属性
	     * @returns {*}
	     */
					var mix = function mix(r, s, o, prefix, isOwn) {
						isOwn = typeof isOwn !== 'undefined' ? isOwn : true;
						prefix = prefix || '';
						if (r && s) {
							for (var k in s) {
								isOwn = isOwn ? s.hasOwnProperty(k) : true;
								if (isOwn && (o || typeof r[k] === 'undefined')) {
									r[prefix + k] = s[k];
								}
							}
						}
	
						return r;
					};
					var contains = function contains(contentBox, subElement) {
						return contentBox.contains ? contentBox != subElement && contentBox.contains(subElement) : !!(contentBox.compareDocumentPosition(subElement) & 16);
					};
					/**
	     * 判断是否为对象
	     * @param obj
	     * @returns {boolean}
	     */
					var isObject = function isObject(obj) {
						var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
						return type === 'function' || type === 'object' && !!obj;
					};
					/**
	     * 取得 cookie 中对应 key 的值
	     * @param key {String}
	     */
					var getCookie = function getCookie(key) {
						var cookie_val = document.cookie.match(new RegExp("\\b" + key + "=([^;]+)"));
						return cookie_val ? cookie_val[1] : "";
					};
	
					/**
	     * 定义Tracker类
	     * @param config
	     * @constructor
	     */
					function Tracker(config) {
						this._init();
						//this.recordPerformance();
						//this._addErrorMonitor();
						//this.recordVisibileTime();
					}
	
					Tracker.prototype = {
						version: "0.5.1",
						_init: function _init() {
	
							var self = this;
							self.markObj = {};
							self._timelineMap = {};
							self._timelines = [];
							self._isInteractCompleted = false;
							self._isRenderCompleted = false;
							PERFORMANCE_INFO.pushVersion = self._getPushVersion();
							self._saveNetstat();
							self._bind();
						},
						/**
	      * 调试工具
	      * @private
	      */
						_debugTouchEvent: function _debugTouchEvent() {
							var screenWidth = screen.width;
							var screenHeight = screen.height;
							var isDev = false;
							//兼容android
							if (/Android/i.test(navigator.userAgent) && WIN.innerWidth) {
								screenWidth = WIN.innerWidth;
								screenHeight = WIN.innerHeight;
							}
							if (WIN.MT && WIN.MT.trackerDev) {
								isDev = true;
							}
	
							//TODO tracker 在base中构建时路径中的反斜线有bug
							var s = '/';
							var regx = /@/g;
							var jsPath = '@@g.alicdn.com@mpi@tracker-tool@index-min.js?t='.replace(regx, s) + Date.now();
							var cssPath = '@@g.alicdn.com@mpi@tracker-tool@index-min.css?t='.replace(regx, s) + Date.now();
							var insertTools = function insertTools() {
								//js
								var head = document.querySelector('head');
								var _script = document.createElement('script');
								_script.src = jsPath;
								_script.defer = true;
								head.appendChild(_script);
								//css
								var styleSheet = document.createElement("link");
								styleSheet.rel = "stylesheet";
								styleSheet.href = cssPath;
								head.appendChild(styleSheet);
	
								document.removeEventListener('touchmove', _hanlder);
							};
							var _hanlder = function _hanlder(e) {
								if (!e.touches) {
									return;
								}
								if (e.touches.length > 2) {
									// 第一个手指在屏幕左上角，第二个手指在屏幕左下角触发，第三个手指在品目右下角触发
									/*alert('device:' + window.devicePixelRatio +'\n\r' +
	              'screen:' + screenWidth + '-' + screenHeight + '\n\r'+
	              'touche' + e.touches[1].screenX + '-' +  e.touches[1].screenY);*/
									if (e.touches[0].screenX < screenWidth / 4 && e.touches[0].screenY < screenHeight / 4 && e.touches[1].screenX < screenWidth / 4 && e.touches[1].screenY > screenHeight * 0.75 && e.touches[2].screenX > screenWidth * 0.75 && e.touches[2].screenY > screenHeight * 0.75) {
										insertTools();
									}
								}
							};
							if (location.search.indexOf('enableTrackerTool') > -1) {
								insertTools();
							} else {
								document.addEventListener('touchmove', _hanlder);
							}
						},
						_bind: function _bind() {
							WIN.addEventListener('beforeunload', this._beforeunloadHanlder.bind(this));
							WIN.addEventListener('error', this._errorHandler.bind(this));
							WIN.addEventListener('DOMContentLoaded', this._domContentLoadedHandler.bind(this));
							document.addEventListener('visibilitychange', this._visibilitychangeHandler.bind(this));
							this._watch(WIN, 'Bridge,AlipayJSBridge,WindVane', this._watchGlobalHandler.bind(this));
							//兼容页面已经onload之后tarcker才被初始化的情况 http://work.taobao.net/issues/38828#note-14
							if (document.readyState === 'complete') {
								this._loadHandler();
							} else {
								WIN.addEventListener('load', this._loadHandler.bind(this));
							}
							try {
								this._debugTouchEvent();
							} catch (e) {}
						},
						_domContentLoadedHandler: function _domContentLoadedHandler() {
							WIN.trackerPerformanceTime.readyTime = new Date().getTime();
							//this.log('domComplete'   , null, null, 'domComplete');
						},
						_watchGlobalHandler: function _watchGlobalHandler(val, prop) {
							this._saveNetstat();
						},
						/**
	      * 对window下的全局变量进行监听
	      * @private
	      */
						_watch: function _watch(obj, props, fn) {
							props.split(',').forEach(function (prop) {
								if (typeof obj[prop] === 'undefined') {
									Object.defineProperty(obj, prop, {
										enumerable: true,
										configurable: true,
										set: function (val) {
											//hack 先干掉针对该属性的setter/getter,恢复其存储功能
											delete obj[prop];
											obj[prop] = val;
											fn.call(this, val, prop);
										}.bind(this)
									});
								}
							});
						},
						_loadHandler: function _loadHandler() {
							var self = this;
							WIN.trackerPerformanceTime.loadTime = WIN.trackerPerformanceTime.loadTime || new Date().getTime();
							//this.log('loadComplete'  , null, null, 'loadComplete');
							setTimeout(function () {
								if (!self._isInteractCompleted) {
									self.sendLogs(true);
									self._autoSendLog();
								}
							}, 50);
						},
						_visibilitychangeHandler: function _visibilitychangeHandler(e) {
							if (document.visibilityState == 'visible') {
								//可见时计算隐藏了多少时间
								if (_hiddenTime) {
									_hiddenTimes.push(new Date().getTime() - _hiddenTime);
								}
							} else {
								//隐藏时立马发送数据
								_hiddenTime = new Date().getTime();
								this.sendLogs(true);
							}
						},
						_beforeunloadHanlder: function _beforeunloadHanlder(e) {
							var t = new Date().getTime();
							var ht = 0;
							if (_hiddenTimes.length > 0) {
								_hiddenTimes.forEach(function (time) {
									ht += time;
								});
								t = t - ht;
							}
							this.log('unloadComplete', null, t, 'unloadComplete'); //停留时间
							this.sendLogs(true); //页面卸载强制发送
	
							//test
							/*var confirmationMessage = "确认要离开?";
	      (e || window.event).returnValue = confirmationMessage;     //Gecko + IE
	      return confirmationMessage;*/
						},
						_errorHandler: function _errorHandler(e) {
							//同样的错误日志只存储一次
							if (typeof _cacheErr[e.message + e.lineno.toString()] !== 'undefined') {
								return;
							}
							var extra = {
								lineNo: e.lineno,
								fileName: e.filename
							};
							_cacheErr[e.message + e.lineno.toString()] = true;
							this.log(e.message, extra, null, 'jsErr');
						},
						/**
	      * 用于统计时间轴的启动函数
	      * @param name 该timeline的描述文字,必须和timelineEnd保持一致
	      */
						timelineStart: function timelineStart(name) {
							if (typeof this._timelineMap[name] === 'undefined') {
								this._timelineMap[name] = new Date().getTime();
							} else {
								console.warn('重复定义"' + name + '"的时间统计.');
							}
						},
						/**
	      * 用于统计时间轴的截止函数，统计完截止时间后算出spending时间，然后发送请求
	      * @param name 该时间点的描述
	      * @param status 用于描述当前时间点产生的结果状态，success:成功  failure:失败  timeout:超时
	      * @param extra 需要额外传递的参数
	      * @param type 日志分类  cstTimeline:自定义时间轴,cstTimepoint:自定义时间点,timeline:系统时间轴,timepoint:系统时间点,jsErr:JS错误日志。mtop:MTOP数据采集
	      * @return this
	      **/
						timelineEnd: function timelineEnd(name, status, extra, type) {
							var cfg;
							if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) == 'object') {
								cfg = name;
							} else {
								cfg = {
									name: name,
									status: status,
									extra: extra,
									type: type || 'cstTimeline'
								};
							}
							cfg.status = cfg.status || 'success';
							if (typeof this._timelineMap[cfg.name] === 'undefined') {
								console.warn('没有"' + cfg.name + '"时间点的定义');
								return this;
							}
							var _endTime = new Date().getTime();
							var timeline = {
								"name": cfg.name, //本次打点的描述
								"sta": cfg.status, //
								"st": this._timelineMap[cfg.name] - PAGE_START_TIME, //开始时间点
								"et": _endTime - PAGE_START_TIME, //结束时间点
								"sp": _endTime - this._timelineMap[cfg.name], //花费时间
								"tp": cfg.type
							};
							if (isObject(cfg.extra)) {
								//修改策略，附加数据放入独立字段
								timeline.extra = mix({}, cfg.extra, true);
							}
							delete this._timelineMap[name];
							this.addLog(timeline); //压入队列,等待一次性发送出去
							return this;
						},
						/**
	      * 事件打点工具,用于记录某一个时间点发生的事情
	      * @param name 时间名称
	      * @param logTime 日志产生的系统时间 new Date().getTime();
	      * @param extra 额外数据
	      * @param type 额外数据
	      * @returns {Tracker}
	      */
						log: function log(name, extra, logTime, type) {
							logTime = logTime || new Date().getTime();
							type = type || 'cstLog';
							var timeline = {
								"name": name, //本次打点的描述
								"st": logTime - PAGE_START_TIME, //开始时间点
								"tp": type
							};
							//额外数据放入extra属性，之前是加"_"作为标识
							if (isObject(extra)) {
								timeline.extra = mix({}, extra, true);
							}
	
							this._saveNetstat(); //每次打日志检测是否有网络环境,没有就获取并存储
							this.addLog(timeline);
							return this;
						},
	
						/**
	      * 页面首次渲染完成之后的打点,用于记录页面加载到可用时所花费的时间,加载完成之后会发送timelines
	      * @param renderCompletedTime
	      * @param extra
	      * @returns {Tracker}
	      */
						renderCompleted: function renderCompleted(renderCompletedTime, extra) {
							extra = extra || null;
							var self = this;
							if (self._isRenderCompleted) {
								return this;
							}
							var _endTime = renderCompletedTime || new Date().getTime();
							this.log("renderComplete", extra, _endTime, "renderComplete");
							self._isRenderCompleted = true;
							console.log('RenderComplete Point Compelete!');
							return this;
						},
						/**
	      * 页面可交互时调用方法,统计可交互时间
	      * @param interactCompletedTime
	      * @param extra
	      * @returns {Tracker}
	      */
						interactCompleted: function interactCompleted(interactCompletedTime, extra) {
							extra = extra || null;
							var self = this;
							if (self._isInteractCompleted) {
								return this;
							}
							var _endTime = interactCompletedTime || new Date().getTime();
							this.log("interactComplete", extra, _endTime, "interactComplete");
							self._isInteractCompleted = true; //必须设置为true之后才能发送
							//this.sendLogs();
							console.log('InteractComplete Point Compelete!');
							return this;
						},
						/**
	      * 交互可用后每10秒发送一次logs
	      * @private
	      */
						_autoSendLog: function _autoSendLog() {
							var self = this;
							this._autoSendTimer = setInterval(function () {
								self.sendLogs();
							}, 5000);
						},
						/**
	      * 添加一个timeline对象
	      * @param timeline
	      */
						addLog: function addLog(timeline) {
							this._timelines.push(timeline);
							this.onLog && this.onLog(timeline); //用于调试工具调用
							return this;
						},
						/**
	      * 清空队列的埋点数据
	      * @private
	      */
						_clearTimelines: function _clearTimelines() {
							this._timelines = [];
						},
						/**
	      * 获取要发送对象的总长度
	      * @param obj
	      * @returns {Number}
	      * @private
	      */
						_jsonLen: function _jsonLen(obj) {
							return encodeURIComponent(JSON.stringify(obj)).length;
						},
						/**
	      * 获取环境数据
	      * @private
	      */
						_getEnvData: function _getEnvData(reserver) {
							reserver.spm = this.getPageAB();
							reserver.isOff = this.isOffline();
							reserver.keepword = 1;
							reserver.guid = PAGE_START_TIME;
							reserver.nickName = getCookie('tracknick') || getCookie('cna');
							reserver.tracVer = this.version;
							reserver.projVer = this._getSrcVersion();
							reserver.gitRepos = this._getGitRepos();
							reserver.netstat = PERFORMANCE_INFO.netstat;
							reserver.dpr = typeof WIN.devicePixelRatio !== 'undefined' ? WIN.devicePixelRatio : '';
							reserver.sendTime = new Date().getTime();
							reserver.sendIndex = _sendIndex;
							reserver.pushVer = PERFORMANCE_INFO.pushVersion;
							return reserver;
						},
						/**
	      * 加载网络状态并存储到变量
	      * @private
	      */
						_saveNetstat: function _saveNetstat() {
							if (!PERFORMANCE_INFO.netstat) {
								this._getNetstat(function (netstat) {
									PERFORMANCE_INFO.netstat = netstat;
								});
							}
						},
						/**
	      * 将数组里面的timeline一次性发送出去,renderCompleted之前不能发送
	      * @param immediately 是否强制发送
	      * @return {Tracker}
	      **/
						sendLogs: function sendLogs(immediately) {
							var self = this;
							var sendObj = {};
							var trackerPerformanceTime = WIN.trackerPerformanceTime;
							immediately = typeof immediately === 'undefined' ? false : immediately;
	
							//_isInteractCompleted之前，sendLogs不允许被调用
							if (!self._isInteractCompleted && !immediately) {
								return this;
							}
							this._getEnvData(sendObj); //每一个请求都带上基础环境数据
	
							// 以下数据确保只发送一次
							if (trackerPerformanceTime.trip_headerTime > 0) {
								//白屏时间统计
								var _tripHeaderTime = trackerPerformanceTime.trip_headerTime;
								trackerPerformanceTime.trip_headerTime = 0;
								this.log('headerComplete', null, _tripHeaderTime, 'headerComplete');
							}
							//domReady
							if (trackerPerformanceTime.readyTime > 0) {
								var _readyTime = trackerPerformanceTime.readyTime;
								trackerPerformanceTime.readyTime = 0;
								this.log('domComplete', null, _readyTime, 'domComplete');
							}
							//onload
							if (trackerPerformanceTime.loadTime > 0) {
								//onload之后才能采集performance埋点onload之后才能采集performance埋点，只采集一次
								if (_sendIndex == 0) {
									sendObj.perf = JSON.stringify(this.getPerformance());
								}
	
								var _loadTime = trackerPerformanceTime.loadTime;
								trackerPerformanceTime.loadTime = 0;
								this.log('loadComplete', null, _loadTime, 'loadComplete');
	
								//抽样10%统计 resourceTiming
								/*if (Math.random() * 100 <= 400) {
	           if (WIN.performance && WIN.performance.getEntries) {
	               setTimeout(function (){
	                   var _resources = self.getResourceTiming();
	                   self.sendLogs();
	                   self.log("resourceTiming",{"request" : _resources ? JSON.stringify(_resources) : ""});
	                   console.log(_resources);
	                   self.sendLogs(true);
	               },5000)
	           }
	       }*/
							}
							if (_sendIndex > 0 && this._timelines.length < 1) {
								//为空时不发送
								return this;
							}
							this._sendLogs(this._timelines, sendObj);
							this._clearTimelines(); //防止数据被重复发送,推送完后立即清空
							return this;
						},
						/**
	      * 分片发送日志数据
	      * @param logs
	      * @param sendObj
	      * @private
	      */
						_sendLogs: function _sendLogs(logs, sendObj) {
							var _envLen = this._jsonLen(sendObj); //基础数据的长度
							var _readySendLogs = logs.concat();
							var _sendLogs = [];
							var self = this;
							var _send = function _send(_sendLogs, sendObj) {
								sendObj.logs = JSON.stringify(_sendLogs);
								console.log(sendObj);
								self.sendGoldLog(BASE_GOLD_KEY.timeline.key, BASE_GOLD_KEY.timeline.checkCode, sendObj);
								_sendIndex++;
								_sendLogs.length = 0;
							};
							//数据分片发送
							while (_readySendLogs.length > 0) {
								_sendLogs.push(_readySendLogs.shift());
								if (this._jsonLen(_sendLogs) + _envLen >= MAX_GET_REQUEST_LEN) {
									_send(_sendLogs, sendObj);
								}
							}
							if (_sendLogs.length > 0) {
								_send(_sendLogs, sendObj);
							}
						},
						/**
	      * 提供一种通用的CLICK自定义黄金令箭埋点统计方案,指定可以数组,数组对象包含节点,黄金令箭信息,这些节点上出发的CLICK事件会进行黄金令箭埋点
	      * @param golgLogList 是一个数组[{node: 'xx', goldCode: 'xx', checkCodeNum: 'xx', gokey: 'xx'}, {}, {}]
	      */
						addGoldLogList: function addGoldLogList(golgLogList) {
							var self = this;
							var body = document.body;
							var meta = document.querySelector('meta[name="aplus-touch"]');
							var metaVal = meta ? meta.getAttribute('content') : 0;
							var eventType = metaVal == 1 ? 'touchstart' : 'click';
	
							for (var i = 0, len = golgLogList.length; i < len; i++) {
								var item = golgLogList[i];
	
								(function (item) {
									body.addEventListener(eventType, function () {
										var matches = document.querySelectorAll(item.node);
										if (!matches.length) return;
	
										var e = arguments[0] || window.event;
										var currentTarget = e.srcElement ? e.srcElement : e.target;
										for (var i = 0, len = matches.length; i < len; i++) {
											if (matches[i] == currentTarget || contains(matches[i], currentTarget)) {
												self.sendGoldLog(item.goldCode, item.checkCodeNum, item.gokey);
												break;
											}
										}
									});
								})(item);
							}
						},
						/**
	      * 解决OAOP页面需要统计各个关键流程的PVUV时调用,先到SPM申请B点,
	      * @param newPageId 页面的B点.
	      */
						sendPageLog: function sendPageLog(newPageId) {
							if (newPageId) {
								document.querySelector('meta[name="data-spm"]').setAttribute('data-spm', '181.' + newPageId);
							}
							goldlog && goldlog.sendPV(); //暂时不考虑单页面应用
						},
						/**
	      * 记录用户行为点
	      * @param displayName 用户行为名称
	      * @param gokey 业务埋点数据;string:xxx=xxx; 或者{xx:xx,xx:xx}
	      */
						sendUserActionLog: function sendUserActionLog(displayName, gokey) {
							var self = this;
							var userAction = BASE_GOLD_KEY.userAction;
	
							if ((typeof gokey === 'undefined' ? 'undefined' : _typeof(gokey)) == "object") {
								gokey.displayName = displayName;
							} else {
								var displayNameStr = 'displayName=' + displayName;
								gokey = gokey ? gokey + '&' + displayNameStr : displayNameStr;
							}
							self.sendGoldLog(userAction.key, userAction.checkCode, gokey);
						},
						/**
	      * 发送黄金令箭埋点
	      * @param goldCode 申请的环境令箭串
	      * @param checkCodeNum 环境令箭串校验码
	      * @param gokey 业务埋点数据;string:xxx=xxx; 或者{xx:xx,xx:xx}
	      */
						sendGoldLog: function sendGoldLog(goldCode, checkCodeNum, gokey) {
							var self = this;
							gokey = gokey || {};
							if ((typeof gokey === 'undefined' ? 'undefined' : _typeof(gokey)) == "object") {
								if (window._prism_lk) {
									gokey._prism_lk = JSON.stringify(window._prism_lk);
								}
								var gokeyStr = [];
	
								for (var key in gokey) {
									if (gokey.hasOwnProperty(key)) {
										var item = typeof gokey[key] !== 'undefined' ? gokey[key].toString() : '';
										gokeyStr.push(key + '=' + encodeURIComponent(item));
									}
								}
								gokey = gokeyStr.join('&');
							}
							gokey += '&spm-cnt=' + self._getPageSPM();
	
							self._goldlog(goldCode, gokey);
						},
						/**
	      * 黄金令箭数据推送的基础方法
	      * @param goldCode
	      * @param gokey
	      * @private
	      */
						_goldlog: function _goldlog(goldCode, gokey) {
							var imgObj = new Image();
							var src = LOG_HOST + goldCode + '?';
							var query = ["cache=" + new Date().getTime(), "gmkey=", "gokey=" + encodeURIComponent(gokey)];
	
							imgObj.src = src + query.join('&');
							imgObj = null;
						},
						/**
	      * 获取performance对象内容
	      * 字段定义:http://www.w3.org/TR/2012/REC-navigation-timing-20121217/timing-overview.png
	      * @returns {object}
	      */
						getPerformance: function getPerformance() {
							if (!WIN.performance || !WIN.performance.timing) {
								return '';
							}
							var timing = WIN.performance.timing;
							var perf = {
								"redirect": timing.redirectEnd - timing.redirectStart,
								"appCache": timing.domainLookupStart - timing.fetchStart,
								"dns": timing.domainLookupEnd - timing.domainLookupStart,
								"tcp": timing.connectEnd - timing.connectStart,
								"request": timing.responseStart - timing.requestStart,
								"response": timing.responseEnd - timing.responseStart,
								"processing": timing.domComplete - timing.domLoading,
								"onLoad": timing.loadEventEnd - timing.loadEventStart,
								"fetchStart": timing.fetchStart,
								"domLoading": timing.domLoading,
								"_domReady": timing.domInteractive - timing.domLoading,
								"_loaded": timing.loadEventEnd - timing.domLoading,
								"_network": timing.responseEnd - timing.fetchStart
							};
							if (WIN.performance.memory) {
								mix(perf, WIN.performance.memory, true, "", false);
							}
							return perf;
						},
						/**
	      * 获取请求书,请求时长等数据
	      */
						getResourceTiming: function getResourceTiming() {
							var result = {};
							if (WIN.performance && WIN.performance.getEntries) {
								result.resources = WIN.performance.getEntries().map(function (req) {
									return {
										name: req.name,
										sp: Math.round(req.responseEnd - req.startTime)
									};
								});
								result.count = result.resources.length;
								return result;
							} else {
								return "";
							}
						},
						/**
	      * 获取网络环境信息
	      * @private
	      */
						_getNetstat: function _getNetstat(cb) {
							var self = this;
							if (window.Bridge) {
								self.tripBridge = new window.Bridge();
	
								if (self.tripBridge.isAlitrip) {
									//去啊
									self.tripBridge.getWifiInfo(function (result) {
										if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && result.state) {
											//5.8.1之后支持获取网络环境
											cb(result.state.toLowerCase());
											return this;
										} else {
											cb('fail');
											return this;
										}
									});
								} else if (window.AlipayJSBridge) {
									var _aliplayNs = UA.match(/AlipayDefined\(nt\:(\d?.?\d?[A-Za-z|]+)\,/i); //支付宝在ua已经存在ns
									if (_aliplayNs && _aliplayNs.length >= 2) {
										cb(_aliplayNs[1].toLowerCase());
										return this;
									} else {
										cb('fail');
										return this;
									}
								} else if (self.tripBridge.isWindVane && window.WindVane) {
									//淘宝 http://h5.alibaba-inc.com/api/WindVane-API.html#网络检测_WVNetwork
									window.WindVane.call('WVNetwork', 'getNetworkType', {}, function (result) {
										if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && result.type) {
											cb(result.type.toLowerCase());
											return this;
										} else {
											cb('fail');
											return this;
										}
									});
								} else {
									cb('fail');
									return this;
								}
							} else {
								cb('fail');
								return this;
							}
						},
	
						/**
	      * 获取页面SPMID
	      */
						_getPageSPM: function _getPageSPM() {
							var self = this;
	
							//spm 值
							return self.getPageAB() + '.0.0';
						},
						/**
	      *  获取KISSY版本号
	      */
						_getSrcVersion: function _getSrcVersion() {
							if (window.KISSY && KISSY.Config) {
								return KISSY.Config.version || "";
							}
							return "";
						},
						/**
	      * 获取信鸽推送的活动页面版本号 <meta name="alitrip-push-verison" content="2015.1015.1010" />
	      * @private
	      */
						_getPushVersion: function _getPushVersion() {
							var metaNode = document.querySelector('meta[name="alitrip-push-version"]');
							if (metaNode) {
								return metaNode.getAttribute('content');
							} else {
								return "";
							}
						},
						/**
	      * 获取页面所在Project的GIT仓库NAME
	      * @private
	      */
						_getGitRepos: function _getGitRepos() {
							/**
	       * 去KISSY的packages获取GIT仓库的名称，H5有一个统一规范 "h5-xxx"
	       * @returns {string}
	       */
							var getGitReposByPackages = function getGitReposByPackages() {
								var result = "";
								var packages = "";
								if (WIN.KISSY && WIN.KISSY.Config && WIN.KISSY.Config.packages) {
									Object.keys(KISSY.Config.packages).some(function (name) {
										packages = KISSY.Config.packages[name];
										//匹配 http://g.alicdn.com/trip/h5-home/0.2.97/
										if (packages.uri) {
											var _matchResult = packages.uri.match(/.[com|cn]\/trip\/(h5\-[A-Za-z_-]+)/);
											if (_matchResult && _matchResult.length > 1) {
												result = _matchResult[1];
												return true;
											}
										}
									});
								}
								return result;
							};
							if (WIN.KISSY && KISSY.Config) {
								return KISSY.Config.gitReposName || getGitReposByPackages();
							}
						},
						getPageAB: function getPageAB() {
							var self = this;
							if (WIN.goldlog) {
								return WIN.goldlog.spm_ab.join('.');
							}
							var meta = document.querySelector('meta[name="data-spm"]');
							var metaCompatible = document.querySelector('meta[name="spm-id"]');
							if (meta) {
								var spmAB = meta.getAttribute('content');
								if (spmAB.indexOf('.') < 0) {
									spmAB = spmAB + '.' + (document.body.getAttribute('data-spm') || '');
								}
								return spmAB;
							} else if (metaCompatible) {
								spmAB = metaCompatible.getAttribute('content');
								if (spmAB.indexOf('.') < 0) {
									spmAB = spmAB + '.' + (document.body.getAttribute('data-spm') || '');
								}
								return spmAB;
							}
	
							return '0.0';
						},
	
						getEelementABCD: function getEelementABCD(element) {
							var elementABCD = { a: "0", b: "0", c: "0", d: "0" };
	
							if (WIN.g_SPM) {
								elementABCD = WIN.g_SPM.getParam(element);
							}
	
							if (element.tagName != 'A') {
								var locaid;
								var spmClick = element.getAttribute('data-spm-click');
								spmClick = spmClick ? spmClick.split(';')[1] : '';
								locaid = spmClick ? spmClick.split('=d')[1] : 0;
								elementABCD.d = locaid;
							}
	
							return elementABCD;
							//return {a: "0", b: "0", c: "0", d: "0"}
						},
	
						getEelementABCDForStr: function getEelementABCDForStr(element) {
							var self = this;
							var elementABCD = self.getEelementABCD(element);
							return [elementABCD.a, elementABCD.b, elementABCD.c, elementABCD.d].join('.');
						},
						/**
	      * 判断是否为离线包
	      * @returns {boolean}
	      */
						isOffline: function isOffline() {
							if (typeof WIN._$isOffline$_ !== 'undefined') {
								return WIN._$isOffline$_ / 1;
							}
	
							var meta = document.querySelector('meta[name="alitrip-offline"]');
							var metaVal = meta ? meta.getAttribute('content') : 0;
							return metaVal / 1;
						},
	
						/**
	      * 统计错误埋点日志,主要记录js报错的错误日志
	      * @param errorInfo 是{}，包含信息{errorName: , errorMessage: ,errorDetail}
	      */
						sendErrorLog: function sendErrorLog(errorInfo) {
							/*var self = this;
	       !errorInfo && (errorInfo = {});
	      errorInfo.keepword = 1;
	       self.sendGoldLog(BASE_GOLD_KEY.normalError.key, BASE_GOLD_KEY.normalError.checkCode, errorInfo);*/
						},
						/**
	      * 发错自定义错误日志,Mtop可能用于排查问题,此错误客户端会劫持
	      * @param errorInfo 是{}，包含信息{errorName: , errorMesage: ,errorDetail}
	      */
						sendCustomErrorLog: function sendCustomErrorLog(errorInfo) {
							/*
	      var self = this;
	      !errorInfo && (errorInfo = {});
	      errorInfo.keepword = 1;
	      errorInfo.netstat = PERFORMANCE_INFO.netstat;
	      errorInfo.srcVersion = PERFORMANCE_INFO.srcVersion;
	      errorInfo.pageId = PERFORMANCE_INFO.pageId;
	      self.sendGoldLog(BASE_GOLD_KEY.customError.key, BASE_GOLD_KEY.customError.checkCode, errorInfo);
	      */
						},
	
						/**
	      * 监听页面JS报错并进行打点
	      */
						_addErrorMonitor: function _addErrorMonitor() {
							/*var self = this;
	      self.oldErrorMessage = [];
	       WIN.addEventListener("error", function (e) {
	          var oldError = self.oldErrorMessage;
	           for (var i in oldError) { //如果有当前的报错在之前的报错中也有，则不触发报错；一共保留5个最新的报错
	              if (e.message == oldError[i]) return;
	          };
	           if(oldError.length > 5){ 
	              oldError.splice(0,1);
	          }
	          oldError.push(e.message);
	          
	          self.sendErrorLog({
	              errorName  : 'JS ERROR',
	              errorMesage: e.message,
	              errorDetail: e.lineno + ";" + e.filename
	          });
	      });*/
						},
						/**
	      * 发错自定义性能数据
	      * @param performanceInfo  是{}，包含信息{loadTime}
	      */
						sendCustomPerformanceLog: function sendCustomPerformanceLog(performanceInfo) {
							/*var self = this;
	      var customPerformance = mix({
	          keepword: 1
	      }, performanceInfo, true);
	       var performanceObj = mix({}, customPerformance, true);
	      self.sendGoldLog(BASE_GOLD_KEY.customPerformance.key, BASE_GOLD_KEY.customPerformance.checkCode, mix(performanceObj, PERFORMANCE_INFO, true));*/
						},
						/**
	      * 发送性能数据，单页面应用没有好办法
	      */
						recordPerformance: function recordPerformance() {
							/*var self = this;
	      self._collectionPerformanceInfo();*/
	
						},
						/**
	      * 收集性能数据
	      * @private
	      */
						_collectionPerformanceInfo: function _collectionPerformanceInfo() {
							/*var self = this;
	      self._getUtdid();
	       //像素密度
	      if (WIN.devicePixelRatio) {
	          PERFORMANCE_INFO.pixelRatio = WIN.devicePixelRatio;
	      }
	       //PERFORMANCE_INFO.url = location.href;
	      PERFORMANCE_INFO.ttid = WIN.ttid || self._getUrlParam("ttid") || "181";
	      PERFORMANCE_INFO.pageId = self._getPageId();
	      //PERFORMANCE_INFO.UA = UA;
	      PERFORMANCE_INFO.displayName = document.title;
	       //domReady 时间
	      if (!window.trackerPerformanceTime) return;
	      if (window.trackerPerformanceTime && window.trackerPerformanceTime.readyTime) {
	          PERFORMANCE_INFO.readyTime = window.trackerPerformanceTime.readyTime - PAGE_START_TIME;
	      } else {
	          window.addEventListener("DOMContentLoaded", function () {
	              PERFORMANCE_INFO.readyTime = new Date().getTime() - PAGE_START_TIME;
	          }, false);
	      }
	       //网络状态
	      self._getNetstat(function (netStatStr) {
	          self.getNetStatAttr = true;
	          PERFORMANCE_INFO.netstat = netStatStr;
	          self._sendCustomPerformance();
	      });
	       if (window.trackerPerformanceTime && window.trackerPerformanceTime.loadTime) {
	          PERFORMANCE_INFO.loadTime = window.trackerPerformanceTime.loadTime - PAGE_START_TIME;
	          PERFORMANCE_INFO.keepword = 1;
	           self._getLoadPerformance();
	          self.getLoadPerformanceAttr = true;
	          self._sendCustomPerformance();
	      } else {
	          WIN.addEventListener("load", function () {
	              PERFORMANCE_INFO.loadTime = new Date().getTime() - PAGE_START_TIME;
	              PERFORMANCE_INFO.keepword = 1;
	               self._getLoadPerformance();
	              self.getLoadPerformanceAttr = true;
	              self._sendCustomPerformance();
	          }, false);
	      }
	      */
						},
						/**
	      * 获取页面加载性能数据
	      * @private
	      */
						_getLoadPerformance: function _getLoadPerformance() {
							/*var self = this;
	      PERFORMANCE_INFO.SPM = self._getPageSPM();
	      PERFORMANCE_INFO.headerTime = WIN.trackerPerformanceTime.trip_headerTime - PAGE_START_TIME;
	      PERFORMANCE_INFO.dpi = self._getDPI(); //获取DPI
	       if (!IS_ALI_TRIP) {
	          navigator.connection && (PERFORMANCE_INFO.network = navigator.connection.type);
	           if (IS_TB) {
	              PERFORMANCE_INFO.clientType = 'TaoBao';
	          } else if (IS_TMALL) {
	              PERFORMANCE_INFO.clientType = 'Tmall';
	          } else if (IS_ALITRIP) {
	              PERFORMANCE_INFO.clientType = 'AliPay';
	          } else {
	              PERFORMANCE_INFO.clientType = 'H5';
	          }
	            if (android) {
	              PERFORMANCE_INFO.deviceType = "Android";
	              PERFORMANCE_INFO.clientVersion = numberify(android[2]);
	           } else if (ipad || ipod || iphone) {
	              PERFORMANCE_INFO.deviceType = "IOS";
	               if (ipad) {
	                  PERFORMANCE_INFO.clientVersion = numberify(ipad[2].replace(/_/g, '.'));
	              }
	              if (ipod) {
	                  PERFORMANCE_INFO.clientVersion = numberify(ipod[3] ? ipod[3].replace(/_/g, '.') : true);
	              }
	              if (iphone && !ipod) {
	                  PERFORMANCE_INFO.clientVersion = numberify(iphone[2].replace(/_/g, '.'));
	              }
	           } else {
	              PERFORMANCE_INFO.deviceType = "other";
	          }
	        } else if (WIN.Bridge) {
	          var bridge = new Bridge();
	          PERFORMANCE_INFO.network = bridge.connection.type;
	           PERFORMANCE_INFO.clientType = 'AliTrip';
	          PERFORMANCE_INFO.clientVersion = bridge.client.version;
	          PERFORMANCE_INFO.deviceType = bridge.device.type;
	      }*/
						},
						/**
	      * 发送自动定义性能信息
	      */
						_sendCustomPerformance: function _sendCustomPerformance() {
							/*var self = this;
	       if(!self.getNetStatAttr || !self.getLoadPerformanceAttr) {
	          return;
	      }
	       //非离线包 或者 离线包并且版本代码加载完成以后
	      if (!self.isOffline() || self.loadOffline) {
	          self.sendCustomPerformance();
	      }*/
						},
						/**
	      * 发送自定义性能信息
	      * @param {isOffline} 是否离线包
	      */
						sendCustomPerformance: function sendCustomPerformance(isOffline) {
							/*var self = this;
	      self.loadOffline = isOffline;
	       PERFORMANCE_INFO.srcVersion = self._getSrcVersion();
	      PERFORMANCE_INFO.loadTime && self.sendGoldLog(BASE_GOLD_KEY.performance.key, BASE_GOLD_KEY.performance.checkCode, PERFORMANCE_INFO);
	      */
						},
						/**
	      * 获取屏幕分辨率
	      */
						_getDPI: function _getDPI() {
							/*var DPI = {};
	      if (WIN.screen.deviceXDPI != undefined) {
	          DPIXY.x = WIN.screen.deviceXDPI;
	          DPIXY.y = WIN.screen.deviceYDPI;
	      }
	      else {
	          var dpiNode = document.createElement("DIV");
	          dpiNode.style.cssText = "width: 1in;height: 1in;position:absolute;left:0px;top:0px;zIndex:99;visibility:hidden";
	          document.body.appendChild(dpiNode);
	          DPI.x = parseInt(dpiNode.offsetWidth);
	          DPI.y = parseInt(dpiNode.offsetHeight);
	          dpiNode.parentNode.removeChild(dpiNode);
	      }
	      return DPI.x * DPI.y;
	      */
						},
	
						/**
	      * 获取页面ID,主要用于区分是否离线包,不再建议使用
	      * @private
	      */
						_getPageId: function _getPageId() {
							/*var hash = location.hash.substring(1);
	      var meta = document.querySelector('meta[name="pageid"]');
	      var pageId;
	       if (meta) {
	          pageId = meta.getAttribute('content');
	      } else {
	          //区分线上&离线包
	          if (location.protocol === 'file:' || (WIN.MT_CONFIG && MT_CONFIG.offline)) {
	              pageId = "off181.nopage";
	          } else {
	              pageId = "on181.nopage";
	          }
	      }
	        //获取hash里的html路径，如果有，则说明是transition的页面
	      //如：/searchlist/index.html
	      if (!pageId.match(/nopage/) && (hashPage = hash.match(/[^\.\#]*\.htm[l]{0,1}/))) {
	          hashPage = hashPage[0];
	          if (hashPage.substring(0, 1) !== '/') {
	              hashPage = '/' + hashPage;
	          }
	           //针对transition页面进行优化
	          if (!this._pageId.match(hashPage)) {
	              var reg = new RegExp(hashPage.replace(/\/[^\/]*!/g, '\\/[^\\/]*') + '\\.htm[l]{0,1}');
	              pageId = pageId.replace(reg, hashPage);
	          }
	      }
	       return pageId;*/
						},
	
						_getUtdid: function _getUtdid() {
							/*var self = this;
	       if (WIN.Bridge) {
	          var bridge = new Bridge();
	           bridge.pushBack('bridge:', 'client_info', {
	              successCallback: function (client_info) {
	                  if (typeof client_info == 'string') {
	                      client_info = JSON.parse(client_info || '{}');
	                  }
	                  PERFORMANCE_INFO.utdid = client_info.utdid;
	              }
	          });
	      }*/
	
						},
	
						_getUrlParam: function _getUrlParam(param, uri) {
							var value;
	
							uri = uri || WIN.location.href;
							uri = uri.match('#') ? uri.split('#')[1] : uri; // fixed by liuhuo.gk
							value = uri.match(new RegExp('[\?\&]' + param + '=([^\&\#]*)([\&\#]?)', 'i'));
	
							return value ? decodeURIComponent(value[1]) : value;
						},
	
						//记录用户在页面的停留时间
						recordVisibileTime: function recordVisibileTime() {
							this.log('recordVisibileTime Deprecated ', null, null, 'trac');
							console.warn('废弃方法');
							/*var self = this;
	      var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
	       self.inPageTime = WIN.trackerPerformanceTime ? PAGE_START_TIME : Date.now();
	      if (!hiddenProperty) {
	          WIN.addEventListener('unonload', function () {
	              var nowTime = new Date().getTime();
	              self.sendGoldLog(BASE_GOLD_KEY.leavePage.key, BASE_GOLD_KEY.leavePage.checkCode, mix(PERFORMANCE_INFO, {
	                  stayTime: nowTime - self.inPageTime,
	                  keepword: 1
	              }, true));
	              self.inPageTime = nowTime;
	          });
	      } else {
	          var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
	          document.addEventListener(visibilityChangeEvent, function () {
	              if (hiddenProperty == 'hidden') {
	                  var webkitVisibilityState = hiddenProperty.replace(/hidden/i, 'visibilityState');
	              } else {
	                  var webkitVisibilityState = hiddenProperty.replace(/hidden/i, 'VisibilityState');
	              }
	              if (document[webkitVisibilityState] == 'visible') return;
	               var nowTime = new Date().getTime();
	              self.sendGoldLog(BASE_GOLD_KEY.leavePage.key, BASE_GOLD_KEY.leavePage.checkCode, mix(PERFORMANCE_INFO, {
	                  stayTime: nowTime - self.inPageTime,
	                  keepword: 1
	              }, true));
	              self.inPageTime = nowTime;
	          });
	      }*/
						},
						/**
	      * 废弃方法,机票还在使用
	      * @param gokey
	      */
						send: function send(gokey) {
							this.sendGoldLog('tbjipiao.100.1', 'H46866756', gokey);
						},
	
						/**
	      * 废弃方法,机票还在使用
	      * @param gokey
	      */
						sendButton: function sendButton(gokey) {
							this.log('sendButton Deprecated ', null, null, 'trac');
							console.warn('sendButton Deprecated');
							this.sendGoldLog('tbjipiao.100.1', 'H46866756', gokey);
						},
	
						/**
	      * 废弃方法,机票还在使用
	      * @param gokey
	      */
						sendPoint: function sendPoint(gokey) {
							this.sendGoldLog('tbjipiao.100.1', 'H46866756', gokey);
						},
	
						sendWindVane: function sendWindVane() {
							console.log('Deprecated');
						},
	
						sendAplus: function sendAplus() {
							console.log('Deprecated');
						},
	
						sendBridge: function sendBridge() {
							console.log('Deprecated');
						},
	
						performance: function performance() {
							console.log('Deprecated');
						},
	
						mtopError: function mtopError(option) {
							this.sendCustomErrorLog(option);
						},
						/**
	      * 不推荐使用,统计开始时间
	      * @param name
	      */
						startMark: function startMark(name) {
							/*var self = this;
	      self.markObj[name] = {
	          beign: new Date().getTime()
	      }*/
	
						},
						/**
	      * 不推荐使用 统计结束时间
	      * @param name
	      */
						endMark: function endMark(name) {
							/*var self = this;
	      var markTime = self.markObj[name];
	       if (markTime) {
	          markTime.end = new Date().getTime()
	      }*/
						},
						/**
	      * 不推荐使用,测量 markStar 和 markEnd 的时间差
	      * @param name
	      * @returns {number}
	      */
						measure: function measure(name) {
							/*var self = this;
	      var markTime = self.markObj[name];
	       if (markTime) {
	          var beginTime = markTime.beginTime || 0;
	          var endTime = markTime.endTime || 0;
	          return endTime - beginTime;
	      }
	      return 0;*/
	
						},
						/**
	      * 不推荐使用,清空mark的打点数据
	      * @param name
	      */
						clearMark: function clearMark(name) {
							/*var self = this;
	       if (name) {
	          self.markObj[name] = null;
	      } else {
	          self.markObj = {};
	      }*/
						}
					};
	
					if (!window.MT) {
						window.MT = {};
					}
					window.MT.Tracker = new Tracker();
					window.MT.Aplus = function (gokey) {
						window.MT.Tracker.send(gokey);
					};
	
					return window.MT.Tracker;
				}(document);
	
				window.KISSY && KISSY.add('tracker/index', function () {
					return window.MT.Tracker;
				});
	
				exports.default = Tracker;
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=index.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * 获得页面项目版本号,并放入queryString,以便做日志的区分
	 */
	(function (win, doc, loc) {
	    var Util = {
	        /**
	         * 查询参数转换为Object
	         * @param string
	         * @returns {{}}
	         */
	        parseQueryString    : function (string) {
	            var parsed = {};
	            string = (string !== undefined) ? string : loc.search;
	            if (typeof string === "string" && string.length > 0) {
	                if (string[0] === '?') {
	                    string = string.substring(1);
	                }
	
	                string = string.split('&');
	
	                for (var i = 0, length = string.length; i < length; i++) {
	                    var element = string[i],
	                        eqPos = element.indexOf('='),
	                        keyValue, elValue;
	
	                    if (eqPos >= 0) {
	                        keyValue = element.substr(0, eqPos);
	                        elValue = element.substr(eqPos + 1);
	                    }
	                    else {
	                        keyValue = element;
	                        elValue = '';
	                    }
	
	                    elValue = decodeURIComponent(elValue);
	
	                    if (parsed[keyValue] === undefined) {
	                        parsed[keyValue] = elValue;
	                    }
	                    else if (parsed[keyValue] instanceof Array) {
	                        parsed[keyValue].push(elValue);
	                    }
	                    else {
	                        parsed[keyValue] = [parsed[keyValue], elValue];
	                    }
	                }
	            }
	
	            return parsed;
	        },
	        /**
	         * 对象转换为查询参数
	         * @param obj
	         * @returns {string}
	         */
	        stringifyQueryString: function (obj) {
	            var string = [];
	            if (!!obj && obj.constructor === Object) {
	                Object.keys(obj).forEach(function (prop) {
	                    if (Array.isArray(obj[prop])) {
	                        for (var i = 0, length = obj[prop].length; i < length; i++) {
	                            string.push([encodeURIComponent(prop), encodeURIComponent(obj[prop][i])].join('='));
	                        }
	                    }
	                    else {
	                        string.push([encodeURIComponent(prop), encodeURIComponent(obj[prop])].join('='));
	                    }
	                })
	            }
	
	            return string.join('&');
	        },
	        /**
	         * 设置url里的查询参数,如果已有,则覆盖
	         * @param qs
	         * @param kvObject
	         * @returns {*|string}
	         */
	        setQuery : function (qs, kvObject) {
	            var kv = this.parseQueryString(qs);
	            Object.keys(kvObject).forEach(function (key){
	                kv[key] = kvObject[key];
	                if (!kvObject[key]) {
	                    delete kv[key]
	                }
	            });
	            return this.stringifyQueryString(kv);
	        },
	        /**
	         * 读写cookie
	         */
	        cookie : {
	            set  : function (name, value, expires) {
	                var domain = loc.hostname,
	                    now = new Date();
	                expires = expires || 1;//默认1小时后失效
	                now.setTime(now.getTime() + expires  * 60 * 60 * 1000);
	                doc.cookie = name + '=' + encodeURIComponent(value) + ';path=../;domain=' + domain + ';expires=' + now.toGMTString();
	            },
	            get  : function (name) {
	                var nameEQ = name + "=";
	                var ca = doc.cookie.split(';');
	                for (var i = 0; i < ca.length; i++) {
	                    var c = ca[i];
	                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
	                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	                }
	                return null;
	            },
	            clear: function (name) {
	                this.set(name, "", -1);
	            }
	        }
	    };
	    /*
	     * 是否是淘宝IPAD
	     */
	    var isTBiPad = function (){
	        var ua = navigator.userAgent;
	        return /iPad/.test(ua) && /AliApp\(TB-PD/.test(ua);
	    }
	
	    var updateTrackerQuery = function () {
	
	        if(isTBiPad()){//IPAD下history.replaceState有BUG,详见http://h5.m.taobao.com/trip/test-ipad-back.html?spm=0.0.0.0.qoqNg3
	            return;
	        }
	        var $abtest = win._$abtest$_, abtestName, abtestBucket;
	        var verNode = doc.querySelector('meta[name="alitrip-project-version"]');
	        if(!verNode){return;}
	        var projectVersion = verNode.getAttribute('content') || '';
	        var cookie = Util.cookie;
	        var _cookieAbtestName = cookie.get('_abtest'),_cookieAbtestBucket = cookie.get('_abtestBucket');
	        var _query;
	        if ($abtest) {//ab处理方式
	            abtestName = $abtest.name;
	            abtestBucket = $abtest.bucket;
	            cookie.set('_abtest', abtestName);
	            cookie.set('_abtestBucket', abtestBucket);
	        }else if(_cookieAbtestName &&_cookieAbtestBucket ){
	            abtestName = _cookieAbtestName;
	            abtestBucket = _cookieAbtestBucket;
	        }
	        try {
	            _query = Util.setQuery(loc.search,{
	                "_abtest"       : abtestName,
	                "_abtestBucket" : abtestBucket,
	                "_projVer"      : projectVersion
	            });
	            history.replaceState({}, doc.title, "?" + _query + loc.hash);
	        } catch (e) {}
	    };
	    updateTrackerQuery();
	})(window, document, location);

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * 统一埋点脚本 WAP 版
	 * @author jizha.wyj <jizha.wyj@taobao.com>
	 *
	 * 这个文件是专为无线版准备的
	 *
	 **/
	
	(function () {
	
	    var win = window,
	        doc = document,
	        _k = "g_tb_aplus_loaded",
	        _launch = "g_tb_aplus_launch";
	
	    /**
	     * 如果当前脚本位于 head 节点中，则稍后再执行
	     * 因为 spm 埋点需要读取 <body> 标签中的属性
	     */
	    if (!doc.getElementsByTagName("body").length) {
	        setTimeout(arguments.callee, 50);
	        return;
	    }
	
	    if (win[_k]) return; // 防止本段脚本重复执行
	    win[_k] = 1;
	
	    var url_g_alicdn = '//g.alicdn.com';
	    //var js_fdc_lsproxy = "//g.alicdn.com/alilog/wlog/@@VERSION/lsproxy.js";
	
	    /**
	     * 涉及到固定 key 的东东都在此管理，如对外的输出对象、window.name 值等等
	     * 由于波及到全局，为了防止冲突，一般以 'ap' 作为前缀
	     */
	    var KEY = {
	        // 沿袭老的命名
	        NAME_STORAGE: {
	            REFERRER: 'wm_referrer',
	            REFERRER_PV_ID: 'refer_pv_id'
	        }
	    };
	
	    var VERSION = "9"; // 当前 js 版本号，字符串形式
	    var loc = location;
	    var is_https = "https:" == loc.protocol;
	    var is_in_iframe = parent !== self;
	    var pathname = loc.pathname; // 当前路径，注意，这个值不包含 url 后面的参数
	    //var hostsname = loc.hostname;
	    //var isOffline = getMetaOffline();
	    var isForbidPost = getMetaForbidPost();
	
	    // 打点图片地址
	    var use_protocol = is_https ? "https://" : "http://";
	    var tblog_beacon_base = (use_protocol) + "log.mmstat.com/";
	    var tblog_beacon_url = tblog_beacon_base + "m.gif";
	    var tblog_data = [
	        ["logtype", is_in_iframe ? 0 : 1] // 庞都 2012-06-18 需求
	    ];
	
	    var page_url = loc.href; // 当前页面的 url
	    var page_url_constant = page_url.replace(/[\?#].*/g, "");
	    var pvid = makePVId(); // 当前页面的 pv id
	    var loc_hash = loc.hash;
	    var s_goldlog = "goldlog";
	    var ua = navigator.userAgent;
	
	    // for windvane
	    // see also http://gitlab.alibaba-inc.com/mtb/lib-windvane/blob/publish/1.4.2/build/windvane.debug.js
	    var lib = win['lib'] || (win['lib'] = {});
	    var isIOS = (/iPhone|iPad|iPod/i).test(ua);
	    var isAndroid = (/Android/i).test(ua);
	    var isWindVane = (/WindVane/i).test(ua);
	
	    // 根据集团对于客户端的ua判读是否是在webview中
	    // see also http://velocity.alibaba-inc.com/projects/cross-end-web/wiki/App-ua
	    var osVersion = ua.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i);
	    var wvVersion = ua.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/);
	    var WindVane = {};
	    var WindVane_Native = win.WindVane_Native;
	    var callbackMap = {};
	    var inc = 1;
	    var iframePool = [];
	    var iframeLimit = 3;
	    var LOCAL_PROTOCOL = 'hybrid';
	    var WV_PROTOCOL = 'wv_hybrid';
	    var IFRAME_PREFIX = 'iframe_';
	    var SUCCESS_PREFIX = 'suc_';
	    var FAILURE_PREFIX = 'err_';
	    var DEFERRED_PREFIX = 'defer_';
	    var PARAM_PREFIX = 'param_';
	    var page_referrer = doc.referrer; // 页面来源
	    // 是否在登录页面上
	    var is_login_page = is_https && (
	            page_url.indexOf("login.m.taobao.com") >= 0
	            || page_url.indexOf("login.m.tmall.com") >= 0
	        );
	    var atta = !!doc.attachEvent; // 当前浏览器是否为 IE（是否支持 document.attachEvent）
	    var s_attachEvent = "attachEvent";
	    var s_addEventListener = "addEventListener";
	    var onevent = atta ? s_attachEvent : s_addEventListener;
	    var s_false = false;
	    var s_true = true;
	    var is_launched = s_false; // 当前页面是否已发送过日志
	    var s_plain_obj = "::-plain-::"; // 一个特殊的字符串，用于标识无需编码的键值
	    var refer_pv_id; // 上一个页面的 pv id
	    var _head_node; // 用于保存页面的 head Node
	    var _meta_nodes; // 用于保存页面 head 中的 meta 节点集合
	    var acookie_cna = getCookie("cna");
	    var cookie_unb = getCookie("unb");
	    //var proxy_iframes = [];
	    var is_use_LS_proxy = s_false;
	    var s_SPM_ATTR_NAME = "data-spm";
	    var s_SPM_DATA_PROTOCOL = "data-spm-protocol";
	    var wh_in_page = s_false; // 页面上是否有无痕埋点
	    var default_ab = "0.0";
	    var page_global_spm_id_origin; // 页面的全局 spm-id，无论是不是旺铺都存在这个值
	    var spm_protocol; // SPM 发送协议
	    var spm_a = win["_SPM_a"];
	    var spm_b = win["_SPM_b"];
	    var spm_ab;
	    var _microscope_data = {}; // objcet，用于保存页面上的显微镜的数据
	    var _atp_beacon_data = {}; // object，用于保存页面上的 atp-beacon 的数据
	    var _atp_beacon_data_params; // _atp_beacon_data 的 a=1&b=2 这样的形式，字符串
	    var waitingMeta = getMetaWaiting();
	    var goldlog;
	
	    var is_ali_app;
	    var is_ali_app_tb;
	    var matched;
	    if ((matched = ua.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i))) {
	        // 判断方式参考：http://gitlab.alibaba-inc.com/mtb/lib-env/blob/master/src/app.js
	        is_ali_app = true;
	        //appname = matched[1];
	        is_ali_app_tb = matched[1] == "TB";
	    }
	
	    /**
	     * nameStorage 的实现拷贝
	     *
	     * http://gitlab.alibaba-inc.com/codev/name-storage/tree/master
	     */
	    var nameStorage = (function () {
	
	        var win = window;
	
	        if (win['nameStorage']) {
	            return win['nameStorage'];
	        }
	
	        var SCHEME = "nameStorage:";
	        //var RE_NAMES = /^nameStorage:([^?]*)(?:\?(?:([^=]+)=([^&]*))*)?/g;
	        var RE_PAIR = /^([^=]+)(?:=(.*))?$/;
	        var Q = "?";
	        var EQ = "=";
	        var AND = "&";
	
	        var encode = encodeURIComponent;
	        var decode = decodeURIComponent;
	
	        var STORAGE = {};
	        var ORIGIN_NAME;
	
	        var nameStorage = {};
	
	        // 解析并初始化 name 数据。
	        // 标准的 nameStorage 数据格式为 `nameStorage:origin-name?key=value`
	        // @param {String} name.
	        (function parse(name) {
	
	            if (name && name.indexOf(SCHEME) === 0) {
	
	                var match = name.split(/[:?]/);
	
	                match.shift(); // scheme: match[0];
	                ORIGIN_NAME = decode(match.shift()) || ""; // match[1]
	
	                var params = match.join(""); // match[2,...]
	
	                var pairs = params.split(AND);
	                for (var i = 0, pair, key, value, l = pairs.length; i < l; i++) {
	                    pair = pairs[i].match(RE_PAIR);
	                    if (!pair || !pair[1]) {
	                        continue;
	                    }
	
	                    key = decode(pair[1]);
	                    value = decode(pair[2]) || "";
	
	                    STORAGE[key] = value;
	                }
	
	            } else {
	
	                ORIGIN_NAME = name || "";
	
	            }
	
	        })(win.name);
	
	        // 写入数据。
	        // @param {String} key, 键名。
	        // @param {String} value, 键值。
	        nameStorage.setItem = function (key, value) {
	            if (!key || "undefined" === typeof value) {
	                return;
	            }
	            STORAGE[key] = String(value);
	            save();
	        };
	
	        // 读取数据。
	        // @param {String} key, 键名。
	        // @return {String} 键值。如果不存在，则返回 `null`。
	        nameStorage.getItem = function (key) {
	            return STORAGE.hasOwnProperty(key) ? STORAGE[key] : null;
	        };
	
	        // 移除数据。
	        // @param {String} key, 键名。
	        nameStorage.removeItem = function (key) {
	            if (!STORAGE.hasOwnProperty(key)) {
	                return;
	            }
	            STORAGE[key] = null;
	            delete STORAGE[key];
	            save();
	        };
	
	        // 清空 nameStorage。
	        nameStorage.clear = function () {
	            STORAGE = {};
	            save();
	        };
	
	        nameStorage.valueOf = function () {
	            return STORAGE;
	        };
	
	        nameStorage.toString = function () {
	            var name = win.name;
	            return name.indexOf(SCHEME) === 0 ? name : SCHEME + name;
	        };
	
	        // 保存数据到 window.name
	        // 如果没有存储数据，则恢复原始窗口名称(window.name)。
	        function save() {
	            var pairs = [];
	            var empty = true;
	            var value;
	
	            for (var key in STORAGE) {
	                if (!STORAGE.hasOwnProperty(key)) {
	                    continue;
	                }
	                empty = false;
	
	                value = STORAGE[key] || "";
	                pairs.push(encode(key) + EQ + encode(value));
	
	            }
	
	            win.name = empty ? ORIGIN_NAME : SCHEME + encode(ORIGIN_NAME) + Q + pairs.join(AND);
	        }
	
	        // addEventLister implementation
	        // @param {HTMLElement} element.
	        // @param {String} eventName.
	        // @param {Function} handler.
	        function addEventListener(element, eventName, handler) {
	            if (!element) {
	                return;
	            }
	
	            if (element.addEventListener) {
	                element.addEventListener(eventName, handler, false);
	            } else if (element.attachEvent) {
	                element.attachEvent('on' + eventName, function (evt) {
	                    handler.call(element, evt);
	                });
	            }
	        }
	
	        // Save the last data for the next page.
	        addEventListener(win, 'beforeunload', function () {
	            save()
	        });
	
	        return nameStorage;
	
	    })();
	
	    /**
	     * 读 referrer
	     *
	     * 背景：由于从 https 页面转到 http 页面后，页面的 document.referrer 属性会为空，
	     * 造成部分页面的来源丢失。
	     * 未登录用户点击了需要登录后才能操作的链接，如在首页点击了“我的淘宝”，
	     * 会先跳到登录页面（https），然后再跳回目标页面（http）
	     *
	     * 因此，这儿会使用 window.name 作为辅助
	     * window.name 的读写 API 和 name 值的规范定义都采用 nameStorage
	     * http://gitlab.alibaba-inc.com/codev/name-storage/tree/master
	     *
	     * 关于 window.name 的说明，可参见：http://www.planabc.net/2008/09/01/window_name_transport/
	     *
	     * 另外，本 js 里的 recordValInWindowName() 方法用于 写 referrer
	     */
	    /**
	     * 取 document.referrer，没有则从当前的 nameStorage 获取
	     * 老代码下同时还取了 refer_pv_id，但是并没有拿来作什么用
	     */
	    page_referrer = doc.referrer || nameStorage.getItem(KEY['NAME_STORAGE']['REFERRER']) || '';
	
	    /**
	     * 判断字符串 s1 是否以字符串 s2 开头
	     * @param s1 {String}
	     * @param s2 {String}
	     */
	    function isStartWith(s1, s2) {
	        return s1.indexOf(s2) == 0;
	    }
	
	    /**
	     * 判断字符串 s1 是滞以字符串 s2 结尾
	     * @param s1 {String}
	     * @param s2 {String}
	     */
	    function isEndWith(s1, s2) {
	        var l1 = s1.length, l2 = s2.length;
	        return l1 >= l2 && s1.indexOf(s2) == (l1 - l2);
	    }
	
	    /**
	     * 去掉字符串 s 前后的空格
	     * @param s {String}
	     */
	    function trim(s) {
	        return isString(s) ? s.replace(/^\s+|\s+$/g, "") : "";
	    }
	
	    function tryToDecodeURIComponent(val, default_val) {
	        var v = default_val || "";
	        if (val) {
	            try {
	                v = decodeURIComponent(val);
	            } catch (e) {
	            }
	        }
	        return v;
	    }
	
	
	    /**
	     * object to param
	     * 将一个简单对象转化为 url 参数的形式
	     * 参见 arr2param() 方法
	     * @param obj {Object}
	     *
	     */
	    function obj2param(obj) {
	        var a = [], k, v;
	        for (k in obj)
	            if (obj.hasOwnProperty(k)) {
	                v = "" + obj[k];
	//				a.push(k == s_plain_obj ? v : (k + "=" + encodeURIComponent(v)));
	                a.push(isStartWith(k, s_plain_obj) ? v : (k + "=" + encodeURIComponent(v)));
	            }
	        return a.join("&");
	    }
	
	    /**
	     * param to array
	     * 将一个简单的形如 a=1&b=2&c=3 这样的参数转化为简单的 array 格式，如：
	     * [["a", "1"], ["b", "2"], ["c", "3"]]
	     *
	     * @param params {String}
	     */
	    //function param2arr(params) {
	    //	var a = params.split("&"),
	    //		i = 0, l = a.length,
	    //		item,
	    //		arr = [];
	    //	for (; i < l; i++) {
	    //		item = a[i].split("=");
	    //		arr.push([item.shift(), item.join("=")]);
	    //	}
	    //
	    //	return arr;
	    //}
	
	    /**
	     * array to param
	     * 将一个简单的数组转化为 url 参数的形式，
	     * 其中数组为
	     *        [[k1, v1], [k2, v2], [k3, v3], ...]
	     * 的形式。
	     * 与 obj2param 相比，这个方法的好处是可以保证最后参数的顺序
	     * @param arr {Array}
	     * @return {String}
	     */
	    function arr2param(arr) {
	        var a = [], k, v,
	            i, len = arr.length;
	
	        for (i = 0; i < len; i++) {
	            k = arr[i][0];
	            v = arr[i][1];
	            a.push(isStartWith(k, s_plain_obj) ? v : (k + "=" + encodeURIComponent(v)));
	        }
	        return a.join("&");
	    }
	
	    function arr2obj(arr) {
	        var ret = {}, k, v,
	            i, len = arr.length;
	
	        for (i = 0; i < len; i++) {
	            k = arr[i][0];
	            v = arr[i][1];
	            ret[k] = v;
	        }
	        return ret;
	    }
	
	
	    /**
	     * 根据 obj2，更新 obj1 中的属性
	     * 如果一个属性在 obj2 中存在，则将它复制到 obj1 中，（这可能会覆盖掉 obj1 中的同名属性的值）
	     * 注意，不会删除 obj1 中存在而 obj2 中不存在的属性
	     * 执行完成之后，obj1 将会发生改变
	     * @param obj1 {Object}
	     * @param obj2 {Object}
	     */
	    //function objUpdate(obj1, obj2) {
	    //	for (var k in obj2) {
	    //		if (obj2.hasOwnProperty(k))
	    //			obj1[k] = obj2[k];
	    //	}
	    //	return obj1;
	    //}
	
	    /**
	     * param to object
	     * 将一个简单的形如 a=1&b=2&c=3 这样的参数转化为简单的 object 格式，如：
	     * {
		 *	 a: "1",
		 *	 b: "2",
		 *	 c: "3"
		 * }
	     * @param params {String}
	     */
	    //function param2obj(params) {
	    //	var a = params.split("&"),
	    //		i = 0, l = a.length,
	    //		item,
	    //		obj = {};
	    //
	    //	for (; i < l; i++) {
	    //		item = a[i].split("=");
	    //		obj[item[0]] = tryToDecodeURIComponent(item[1]);
	    //	}
	    //
	    //	return obj;
	    //}
	
	    /**
	     * 判断字符串 s1 是否包含字符串 s2
	     * @param s1 {String}
	     * @param s2 {String}
	     */
	    function isContain(s1, s2) {
	        return s1.indexOf(s2) > -1;
	    }
	
	    function isNumber(v) {
	        return typeof v == "number";
	    }
	
	    function isUnDefined(v) {
	        return typeof v == "undefined";
	    }
	
	    function isString(v) {
	        return typeof v == "string";
	    }
	
	    function isArray(o) {
	        return Object.prototype.toString.call(o) === "[object Array]";
	    }
	
	    function tryToGetAttribute(element, attr_name) {
	        return element && element.getAttribute ? (element.getAttribute(attr_name) || "") : "";
	    }
	
	    function tryToGetHref(anchor) {
	        /**
	         * 这儿之所以要 try 一下，是因为如果 href 格式有误时，在 IE8/9 下 href 将无效，
	         * 读取 anchor.href 时会直接出错。
	         *
	         * 例如，如果：
	         *         <a href="http://shop64102844.taobao.com/search=y% 3D">测试</a>
	         * 注意它缺少“?”，并且在“%”后多了一个空格
	         * 在 IE8/9 下用 js 访问这个链接的 href 属性时会直接报错
	         */
	        var href;
	        try {
	            href = trim(anchor.getAttribute("href", 2));
	        } catch (e) {
	        }
	
	        return href || "";
	    }
	
	    // 取得额外的引用当前 js 时在 src 后面添加的参数
	    function getExParams() {
	        var current_node = doc.getElementById("tb-beacon-aplus");
	        return tryToGetAttribute(current_node, "exparams").replace(/&amp;/g, "&").replace(/\buserid=/, "uidaplus=");
	    }
	
	    /**
	     * 取得页面上 head 中的所有 meta 元素
	     */
	    function getMetaTags() {
	        _head_node = _head_node || doc.getElementsByTagName("head")[0];
	
	        return _meta_nodes || (_head_node ? (_meta_nodes = _head_node.getElementsByTagName("meta")) : []);
	    }
	
	    /**
	     * 解析 meta 的内容，meta 的内容形如："pageId=123; siteId=456"
	     * @param s
	     * @param dict
	     */
	    function parseMetaContent(s, dict) {
	        var a = s.split(";"),
	            j, a_len = a.length,
	            a2, key;
	
	        for (j = 0; j < a_len; j++) {
	            a2 = a[j].split("=");
	            key = trim(a2[0]);
	            if (key)
	                dict[key] = tryToDecodeURIComponent(trim(a2[1]));
	        }
	    }
	
	    /**
	     * 取得 cookie 中对应 key 的值
	     * @param key {String}
	     */
	    function getCookie(key) {
	        var cookie_val = doc.cookie.match(
	            new RegExp("\\b" + key + "=([^;]+)")
	        );
	        return cookie_val ? cookie_val[1] : "";
	    }
	
	    /**
	     * 从 url 中取出对应的 spm 参数
	     * @param url {String}
	     * @return {String} spm a.b.c.d.pvid，一共五位
	     */
	    function getSPMFromUrl(url) {
	        var m = url.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*]+)")),
	            spm;
	        //return (m && (spm = m[1]) && spm.split(".").length == 5) ? spm : null;
	        return (m && (spm = m[1]) && spm.split(".").length == 4) ? spm : null;
	    }
	
	    /**
	     * 生成一个用于避免缓存的随机数
	     * 为了减少 url 长度，这个随机数据的长度定为 7 位，
	     * 为了减少碰撞，使用 16 进制数字
	     *
	     * 268435456 = 2 ^ 28 = 0xfffffff + 1
	     */
	    function makeCacheNum() {
	        return Math.floor(Math.random() * 268435456).toString(16);
	    }
	
	    /**
	     * 处理页面上的 pv id
	     */
	    function makePVId() {
	
	        /**
	         * 生成本页的 pv id
	         * pv id 只需要当前用户会话唯一即可，这儿使用一个 6 位的 16 进制数字
	         */
	        var key = "g_aplus_pv_id",
	            rnd_strs = "",
	            chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	        if (!win[key]) {
	//			win[key] = Math.floor(Math.random() * 16777216).toString(16);
	            while (rnd_strs.length < 6) {
	                rnd_strs += chars.substr(Math.floor(Math.random() * 62), 1);
	            }
	            win[key] = rnd_strs;
	        }
	
	        return win[key];
	    }
	
	    /**
	     * 取得 head / meta 中的 atp-beacon 的数据
	     * 形如：
	     * <meta name="atp-beacon" content="on=1; chksum=112233" />
	     */
	    function getMetaAtpData() {
	        var i, meta,
	            meta_nodes = getMetaTags(),
	            l = meta_nodes.length,
	            content;
	
	        for (i = 0; i < l; i++) {
	            meta = meta_nodes[i];
	            if (tryToGetAttribute(meta, "name") == "atp-beacon") {
	                content = tryToGetAttribute(meta, "content");
	                parseMetaContent(content, _atp_beacon_data);
	            }
	        }
	
	        _atp_beacon_data_params = obj2param(_atp_beacon_data);
	    }
	
	    /**
	     * 确定 head / meta 中的 aplus-waiting 的数据
	     * 形如：
	     * <meta name="aplus-waiting" content="1" />
	     */
	    function getMetaWaiting() {
	        var i, meta,
	            meta_nodes = getMetaTags(),
	            l = meta_nodes.length,
	            content;
	
	        for (i = 0; i < l; i++) {
	            meta = meta_nodes[i];
	            if (tryToGetAttribute(meta, "name") == "aplus-waiting") {
	                content = tryToGetAttribute(meta, "content");
	                break;
	            }
	        }
	        return content;
	    }
	
	    /**
	     * 确定 head / meta 中的 isonepage 的数据
	     * 形如：
	     * <meta name="isonepage" content="0" /> 表示不是onepage
	     * <meta name="isonepage" content="1|http://h5.m.taobao.com/we/index.htm#detail" /> 表示是onepage
	     */
	    function isOnePage() {
	        var i, meta,
	            meta_nodes = getMetaTags(),
	            l = meta_nodes.length,
	            content = "-1";
	
	        for (i = 0; i < l; i++) {
	            meta = meta_nodes[i];
	            if (tryToGetAttribute(meta, "name") == "isonepage") {
	                content = tryToGetAttribute(meta, "content");
	                break;
	            }
	        }
	        return content;
	    }
	
	    /**
	     * 取得 head / meta 中的 aplus-offline
	     * 形如：
	     * <meta name="aplus-offline" content="1">
	     */
	    function getMetaOffline() {
	        var i, meta,
	            meta_nodes = getMetaTags(),
	            l = meta_nodes.length,
	            content;
	
	        for (i = 0; i < l; i++) {
	            meta = meta_nodes[i];
	            if (tryToGetAttribute(meta, "name") == "aplus-offline") {
	                content = tryToGetAttribute(meta, "content");
	                break;
	            }
	        }
	
	        return content;
	    }
	
	    /**
	     * 主动禁止lsproxy方案
	     * 形如：
	     * <meta name="aplus-offline" content="1">
	     */
	    function getMetaForbidPost() {
	        var i, meta,
	            meta_nodes = getMetaTags(),
	            l = meta_nodes.length,
	            content;
	
	        for (i = 0; i < l; i++) {
	            meta = meta_nodes[i];
	            if (tryToGetAttribute(meta, "name") == "aplus-forbidpost") {
	                content = tryToGetAttribute(meta, "content");
	                break;
	            }
	        }
	
	        return content;
	    }
	
	    /**
	     * 生成一个 url 的 chk_sum
	     * @param url
	     */
	    function makeChkSum(url) {
	        url = (url || "").split("#")[0].split("?")[0];
	
	        var len = url.length,
	            hash = function (s) {
	                var i, l = s.length, key = 0;
	                for (i = 0; i < l; i++) {
	                    key = key * 31 + s.charCodeAt(i);
	                }
	                return key;
	            };
	
	        return len ? hash(len + "#" + url.charCodeAt(len - 1)) : -1;
	    }
	
	    /**
	     * DOMReady 方法，
	     */
	    function onDOMReady(f) {
	
	        var kissy = win["KISSY"];
	        if (kissy) {
	            // 如果页面上有 KISSY，使用 KISSY 的方法
	            kissy.ready(f);
	
	        } else if (win.jQuery) {
	            // 如果页面上存在 jQuery，使用 jQuery 的方法
	            jQuery(doc).ready(f);
	
	        } else {
	
	            // 判断页面是否已经加载完成
	            if (doc.readyState === "complete") {
	                // 如果页面已经加载完成，直接执行函数 f
	                f();
	
	            } else {
	                // 使用 window 的 onload 事件
	                addEventListener(win, "load", f);
	            }
	
	        }
	    }
	
	    /**
	     * 写 referrer
	     *
	     * 在 window.name 中记录当前页面的 url，以便下一个页面读取
	     * window.name 的读写 API 和 name 值的规范定义都采用 nameStorage
	     * http://gitlab.alibaba-inc.com/codev/name-storage/tree/master
	     */
	    function recordValInWindowName() {
	
	        var referrer,
	            referrer_pv_id;
	
	        // 仅在 top 页面才做这个操作
	        // 仅在 https 页面在 window.name 中记录下 referrer 的值
	        if (is_in_iframe || !is_https) {
	            return;
	        }
	
	        /**
	         * 如果是在登录页面上，并且已经记录了一个 referrer，则这儿去掉 referrer 参数
	         * 因为，如果用户是从 A 页面点击到 B 页面，中间经过了登录页面，
	         * 后台在还原路径时，只需要知道 A -> B，而不需要知道 A -> login -> B
	         */
	        if (is_login_page && page_referrer) {
	            referrer = page_referrer;
	            referrer_pv_id = nameStorage.getItem(KEY['NAME_STORAGE']['REFERRER_PV_ID']);
	        } else {
	            referrer = page_url;
	            referrer_pv_id = pvid;
	        }
	
	        nameStorage.setItem(KEY['NAME_STORAGE']['REFERRER'], referrer);
	        nameStorage.setItem(KEY['NAME_STORAGE']['REFERRER_PV_ID'], referrer_pv_id);
	
	    }
	
	
	    /**
	     * 绑定事件
	     * @param obj {Element} DOM 元素
	     * @param event_type
	     * @param f
	     */
	    function addEventListener(obj, event_type, f) {
	
	        // 绑定 document 的 mousedown 事件
	        obj[onevent](
	            (atta ? "on" : "") + event_type,
	            function (e) {
	                e = e || win.event;
	                var el = e.target || e.srcElement;
	
	                f(e, el);
	            },
	            s_false
	        );
	
	    }
	
	    function atp_inIframeException() {
	
	        var i, l,
	            atp_count_paths = [ // wap 版去掉白名单
	            ];
	
	        for (i = 0, l = atp_count_paths.length; i < l; i++) {
	            if (pathname.indexOf(atp_count_paths[i]) != -1)
	                return s_true;
	        }
	
	        // 如果来源页面不是 taobao 页面，则：
	        var re = /^https?:\/\/[\w\.]+\.(taobao|tmall|etao|tao123|juhuasuan)\.com/i;
	        return !re.test(page_referrer);
	    }
	
	    /**
	     * 清理打点参数
	     * 将所有值为空的参数去掉（aplus除外）；
	     * 如果有重复的参数，只保留最后一个
	     * @param data {Array}
	     */
	    function cleanParams(data) {
	        var new_params = [],
	            i,
	            item,
	            keys = {},
	            k, v;
	
	        for (i = data.length - 1; i >= 0; i--) {
	            item = data[i];
	            k = item[0];
	            if (k != s_plain_obj && keys.hasOwnProperty(k)) continue;
	            v = item[1];
	            if (k == "aplus" || v != "") {
	                new_params.unshift([k, v]);
	                keys[k] = 1;
	            }
	        }
	
	        return new_params;
	    }
	
	    /**
	     * 清理windvane打点参数，去除：
	     * logtype
	     * cache
	     * scr
	     * ::-plain-xxx
	     * spm-cnt
	     * @param data
	     */
	    function cleanParamsForWindvane(data) {
	        var new_params = [],
	            i,
	            item,
	            k, v,
	            excludeParms = {
	                "logtype": true,
	                "cache": true,
	                "scr": true,
	                "spm-cnt": true
	            };
	
	        for (i = data.length - 1; i >= 0; i--) {
	            item = data[i];
	            k = item[0];
	            v = item[1];
	            if (isStartWith(k, s_plain_obj) || excludeParms[k]) {
	                continue;
	            }
	            new_params.unshift([k, v]);
	        }
	        return new_params;
	    }
	
	    /**
	     * 发送打点数据
	     * @param url {String}
	     * @param data {Object|Array}
	     * @return {*}
	     */
	    function tblogSend(url, data) {
	
	        var beacon_url, obj, new_data;
	        if (!data) return;
	
	        data = cleanParams(data);
	
	        // if AliApp use windVane
	        if (isWindVane) {
	            new_data = cleanParamsForWindvane(data);
	            var windVaneData = {};
	            var spm_url = getSPMFromUrl(page_url), // 当前访问页面的 url 里的 spm
	                spm_pre = getSPMFromUrl(page_referrer),
	                extendargs; // 来源地址里的 spm
	
	            var content = isOnePage(),
	                arr_content = content.split("|"),
	                isonepage = arr_content[0],
	                urlpagename = arr_content[1] ? arr_content[1] : "";
	
	            try {
	                obj = arr2obj(new_data);
	                extendargs = JSON.stringify(obj);
	                if (extendargs == "{}") {
	                    extendargs = "";
	                }
	            } catch (e) {
	                extendargs = "";
	            }
	
	            windVaneData["functype"] = "2001";
	            windVaneData["urlpagename"] = urlpagename;
	            windVaneData["url"] = loc.href;
	            windVaneData["spmcnt"] = (spm_ab || "0.0") + ".0.0";
	            windVaneData["spmpre"] = spm_pre || "";
	            windVaneData["lzsid"] = "";
	            windVaneData["cna"] = acookie_cna || "";
	            windVaneData["extendargs"] = extendargs;
	            windVaneData["isonepage"] = isonepage;
	
	            WindVane.call("WVTBUserTrack", "toUT", windVaneData);
	
	            win[s_goldlog]['windVaneData'] = windVaneData;
	
	        }
	
	        if (!isWindVane || !is_ali_app_tb) {
	            // 非 WindVane 或不是 AliApp(TB 时发送 h5 日志
	            beacon_url = goldlog.send(url, data);
	        }
	
	        return beacon_url;
	    }
	
	    function mkPlainKey() {
	        return s_plain_obj + Math.random();
	    }
	
	    /**
	     * 在当前页面添加一个 js
	     * @param src
	     * @param [https_src]
	     */
	    function addScript(src, https_src) {
	        var s = "script";
	        var t = doc.createElement(s);
	        t.type = "text/javascript";
	        t.async = true;
	        t.src = is_https ? (https_src || src) : src;
	        var m = doc.getElementsByTagName(s)[0];
	        //doc.getElementsByTagName("head")[0].appendChild(t);
	        m.parentNode.insertBefore(t, m);
	    }
	
	    //function createIframe(src, name) {
	    //	var iframe = document.createElement("iframe");
	    //	iframe.style.width = "1px";
	    //	iframe.style.height = "1px";
	    //	iframe.style.position = "absolute";
	    //	iframe.style.display = "none";
	    //	iframe.src = src;
	    //	if (name) iframe.name = name;
	    //
	    //	var body = document.getElementsByTagName("body")[0];
	    //	body.appendChild(iframe);
	    //
	    //	return iframe;
	    //}
	
	    /**
	     * 检测localStorage是否可用，修复IOS7下的bug
	     * #详见 http://stackoverflow.com/questions/21159301/quotaexceedederror-dom-exception-22-an-attempt-was-made-to-add-something-to-st
	     */
	    function checkLS() {
	        var isOK = false;
	        if ('localStorage' in win && win['localStorage'] != null) {
	            try {
	                localStorage.setItem("test", "test");
	                localStorage.removeItem("test");
	
	                isOK = true;
	            } catch (e) {
	            }
	        }
	        return isOK;
	    }
	
	    /**
	     * 是否使用localStorage代理
	     * @return {Boolean}
	     */
	    function isUseLSProxy() {
	        // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.26.17 (KHTML, like Gecko) Version/6.0.2 Safari/536.26.17
	
	        if (is_https || is_ali_app) return false;
	
	        var a = ua.split(" Safari/");
	        if (a.length != 2) return false;
	        a[1] = trim(a[1]);
	
	//		return true; // 仅用于测试
	        return !isForbidPost &&
	            checkLS() &&
	            win.postMessage && !a[1].match(/[\d\.]+?\s+.+/) &&  // 排除ua后带有自定义参数的，如 Mozilla/5.0 (Linux; U; Android 4.1.1; zh-cn; MI 2 Build/JRO03L) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 WindVane/2.6.0 TBANDROID/600000@taobao_android_3.9.5
	            ua.indexOf("AppleWebKit") > -1 &&
	            ua.match(/\bVersion\/\d+/) && !ua.match(/\bChrome\/\d+/) && !ua.match(/TencentTraveler|QQBrowser/) && // 排除qq浏览器
	            !ua.match(/UCBrowser|UCWEB/); // 排除uc浏览器
	    }
	
	    /**
	     * 使用localStorage代理
	     * 调用这个方法时，一定是新浏览器，一定支持addEventListener等方法
	     */
	    //function useLSProxy(data) {
	    //	var src = "//mmstat.alicdn.com/aplus-proxy.html?v=20130115";
	    //	var iframe = createIframe(src, JSON.stringify(data));
	    //	proxy_iframes.push(iframe);
	    //}
	
	    /**
	     * 根据url以及参数，拼装一个更长的url
	     //* @param url {String}
	     //* @param data {Object|Array}
	     */
	    //function makeUrl(url, data) {
	    //	var link_char = url.indexOf("?") == -1 ? "?" : "&",
	    //		param_data = data ? (
	    //			isArray(data) ? arr2param(data) : obj2param(data)
	    //		) : "";
	    //
	    //	return param_data ? (url + link_char + param_data) : url;
	    //}
	
	    function getSPMProtocolFromMeta() {
	
	        var metas = getMetaTags(),
	            i, l,
	            meta,
	            meta_name;
	
	        for (i = 0, l = metas.length; i < l; i++) {
	            meta = metas[i];
	            meta_name = tryToGetAttribute(meta, "name");
	            if (meta_name == s_SPM_ATTR_NAME) {
	                spm_protocol = tryToGetAttribute(meta, s_SPM_DATA_PROTOCOL);
	//				spm_protocol = spm_protocol == "i" ? "i" : "u";
	            }
	        }
	
	    }
	
	    function getMetaSPMData(key) {
	        var metas = getMetaTags(),
	            i, l, a,
	            meta, meta_name,
	            tmp;
	
	        if (metas) {
	            for (i = 0, l = metas.length; i < l; i++) {
	                meta = metas[i];
	                meta_name = tryToGetAttribute(meta, "name");
	                if (meta_name == key) {
	                    page_global_spm_id_origin = tryToGetAttribute(meta, "content");
	
	                    // 处理 spm 协议
	                    if (page_global_spm_id_origin.indexOf(":") >= 0) {
	                        a = page_global_spm_id_origin.split(":");
	                        spm_protocol = a[0] == "i" ? "i" : "u";
	                        page_global_spm_id_origin = a[1];
	                    }
	                    tmp = tryToGetAttribute(meta, s_SPM_DATA_PROTOCOL);
	                    if (tmp) {
	                        spm_protocol = (tmp == "i" ? "i" : "u");
	                    }
	
	                    spm_ab = page_global_spm_id_origin;
	
	                    return s_true;
	                }
	            }
	        }
	
	        return s_false;
	    }
	
	    /**
	     * 如果 value ，则将 value 添加到 data 中
	     * @param data {Array}
	     * @param key_value_pairs {Array}
	     */
	    function ifAdd(data, key_value_pairs) {
	        var i, l = key_value_pairs.length,
	            item,
	            k, v;
	
	        for (i = 0; i < l; i++) {
	            item = key_value_pairs[i];
	            k = item[0];
	            v = item[1];
	            if (v) {
	                data.push([k, v]);
	            }
	        }
	    }
	
	    // for windvane
	    // see also http://gitlab.alibaba-inc.com/mtb/lib-windvane/blob/publish/1.4.2/build/windvane.debug.js
	    function compareVersion(v1, v2) {
	        v1 = v1.toString().split('.');
	        v2 = v2.toString().split('.');
	
	        for (var i = 0; i < v1.length || i < v2.length; i++) {
	            var n1 = parseInt(v1[i], 10), n2 = parseInt(v2[i], 10);
	
	            if (window.isNaN(n1)) {
	                n1 = 0;
	            }
	            if (window.isNaN(n2)) {
	                n2 = 0;
	            }
	            if (n1 < n2) {
	                return -1;
	            }
	            else if (n1 > n2) {
	                return 1;
	            }
	        }
	        return 0;
	    }
	
	    function callback(func, result) {
	        if (isAndroid && compareVersion(osVersion, '2.4.0') < 0) { //判断在android且2.3.x下，使用延时执行
	            setTimeout(function () {
	                func && func(result);
	            }, 1);
	        } else {
	            func && func(result);
	        }
	    }
	
	    if (osVersion) {
	        osVersion = (osVersion[1] || '0.0.0').replace(/\_/g, '.');
	    } else {
	        osVersion = '0.0.0';
	    }
	
	    if (wvVersion) {
	        wvVersion = (wvVersion[1] || '0.0.0').replace(/\_/g, '.');
	    } else {
	        wvVersion = '0.0.0';
	    }
	
	    /**
	     * 取得全局 spm id
	     * 以 init_ 开头的函数是页面加载时就会执行的
	     * 步骤如下：
	     * 1、如果页面上存在无痕埋点，则使用无痕埋点数据
	     *        spm_a = window._SPM_a;
	     *        spm_b = window._SPM_b;
	     *        spm_protocol 从 head meta 中取
	     *
	     * 2、在 head 中查找
	     *         <meta name="spm-id" content="[Protocol:]xx.xx" />
	     *        或：<meta name="spm-id" content="[Protocol:]xx" />
	     *        或：<meta name="data-spm" content="[Protocol:]xx" />
	     * 如果找到，则；
	     *        如果其内容不以“110”开头，则使用；
	     *        否则，返回空（旺铺页面没有全局 spm-id） 2012-02-13 补庵、大渡需求
	     *
	     * 3、在 body 标签中查找 spm id 的第 2 位，如果找到，则使用（2012-06-06）
	     * @see: http://baike.corp.taobao.com/index.php/Spm%E5%9F%8B%E7%82%B9
	     *
	     * 4、否则，返回“0.0”
	     */
	    function init_getGlobalSPMId() {
	
	        if (!isUnDefined(spm_ab)) return spm_ab;
	
	        if (spm_a && spm_b) {
	            // 如果页面上存在 _SPM_a、_SPM_b，表示页面上有无痕埋点
	            spm_a = spm_a.replace(/^{(\w+)}$/g, "$1");
	            spm_b = spm_b.replace(/^{(\w+)}$/g, "$1");
	            wh_in_page = s_true;
	            spm_ab = spm_a + "." + spm_b;
	            getSPMProtocolFromMeta();
	
	            goldlog.spm_ab = [spm_a, spm_b];
	
	            return spm_ab;
	        }
	
	        var head = doc.getElementsByTagName("head")[0],
	            a;
	
	        getMetaSPMData(s_SPM_ATTR_NAME) || getMetaSPMData("spm-id");
	
	        // 不存在对应的 meta
	        spm_ab = spm_ab || default_ab;
	        /**
	         * 如果页面上不存在 spm id 的第一位，则返回空值
	         */
	        if (!spm_ab) return spm_ab;
	
	        /**
	         * 从 body 标签中获取第二位
	         * 形如：<body data-spm="1000484">...</body>
	         */
	        var body = doc.getElementsByTagName("body");
	        var spm_b_val;
	        a = spm_ab.split(".");
	        goldlog.spm_ab = a;
	        body = body && body.length ? body[0] : null;
	        if (body) {
	            spm_b_val = tryToGetAttribute(body, s_SPM_ATTR_NAME);
	            if (spm_b_val) {
	                // body 标签中存在 spm 第二位
	                spm_ab = a[0] + "." + spm_b_val;
	                goldlog.spm_ab = [a[0], spm_b_val];
	            } else if (a.length == 1) {
	                // 如果没有指定第二位，则a、b都取0
	                spm_ab = default_ab;
	            }
	        }
	
	
	        return spm_ab;
	    }
	
	    function init_loadScripts() {
	
	        // 添加 laiwang 埋点脚本
	        var lwhost = "laiwang",
	            lwlog_path = "/ilw/a/lwlog.js?v=140709";
	        if (isContain(loc.href.split("?")[0], lwhost)) {
	            addScript(url_g_alicdn + lwlog_path);
	        }
	
	    }
	
	    // see also http://gitlab.alibaba-inc.com/mtb/lib-windvane/blob/publish/1.4.2/build/windvane.debug.js
	    function init_windVane() {
	
	        var WV_Core = {
	            call: function (obj, method, param, successCallback, failureCallback, timeout) {
	                var sid;
	                var deferred;
	
	                if (lib.promise) {
	                    deferred = lib.promise.deferred();
	                }
	
	                if (timeout > 0) {
	                    sid = setTimeout(function () {
	                        WV_Core.onFailure(sid, {ret: 'TIMEOUT'});
	                    }, timeout);
	                } else {
	                    sid = WV_Private.getSid();
	                }
	                // 让windvane可以取得sid
	                param["sid"] = sid;
	
	                WV_Private.registerCall(sid, successCallback, failureCallback, deferred);
	
	                if (isAndroid) {
	                    if (compareVersion(wvVersion, '2.7.0') >= 0) {   // android下，windvane的版本大于2.7.0，则用prompt的方式
	                        WV_Private.callMethodByPrompt(obj, method, WV_Private.buildParam(param), sid + '');
	                    } else if (WindVane_Native && WindVane_Native.callMethod) { // 向下兼容，调用注册的JS对象方法
	                        WindVane_Native.callMethod(obj, method, WV_Private.buildParam(param), sid + '');
	                    }
	                } else if (isIOS) { // iOS用iframe的协议发送
	                    WV_Private.callMethodByIframe(obj, method, WV_Private.buildParam(param), sid + '');
	                }
	
	                if (deferred) {
	                    return deferred.promise();
	                }
	            },
	
	            fireEvent: function (eventname, eventparam) {
	                // 当native需要通知js的时候（通信），用触发事件的方式进行
	                var ev = doc.createEvent('HTMLEvents');
	                ev.initEvent(eventname, false, true);
	                ev.param = WV_Private.parseParam(eventparam);
	                doc.dispatchEvent(ev);
	            },
	
	            getParam: function (sid) {
	                // 因为ios下iframe协议，对于url长度有限制，所以增加一个参数的map。
	                return WV_Private.params[PARAM_PREFIX + sid] || '';
	            },
	
	            // {ret:'SUCCESS', value:{'a':1}}
	            onSuccess: function (sid, msg) {
	                // native代码处理成功后，调用该方法来通知js
	                clearTimeout(sid);
	                var call = WV_Private.unregisterCall(sid);
	                var success = call.success;
	                var deferred = call.deferred;
	                var param = WV_Private.parseParam(msg);
	
	                callback(function (value) {
	                    success && success(value);
	                    deferred && deferred.resolve(value);
	                }, param.value || param);
	                WV_Private.onComplete(sid);
	            },
	
	
	            // {ret:'ERROR'}
	            onFailure: function (sid, msg) {
	                // native代码处理成功后，调用该方法来通知js
	                clearTimeout(sid);
	                var call = WV_Private.unregisterCall(sid);
	                var failure = call.failure;
	                var deferred = call.deferred;
	                var param = WV_Private.parseParam(msg);
	
	                callback(function (value) {
	                    failure && failure(value);
	                    deferred && deferred.reject(value);
	                }, param);
	                WV_Private.onComplete(sid);
	            }
	        };
	
	        var WV_Private = {
	            params: {},
	
	            buildParam: function (obj) {
	                if (obj && typeof obj === 'object') {
	                    //obj.bridgeVersion = VERSION;
	                    return JSON.stringify(obj);
	                } else {
	                    return obj || '';
	                }
	            },
	
	            parseParam: function (str) {
	                var obj;
	                if (str && typeof str === 'string') {
	                    try {
	                        obj = JSON.parse(str);
	                    } catch (e) {
	                        obj = eval('(' + str + ')');
	                    }
	                } else {
	                    obj = str || {};
	                }
	
	                return obj;
	            },
	
	            getSid: function () {
	                return Math.floor(Math.random() * (1 << 50)) + '' + inc++;
	            },
	
	            registerCall: function (sid, successCallback, failedCallback, deferred) {
	                if (successCallback) {
	                    callbackMap[SUCCESS_PREFIX + sid] = successCallback;
	                }
	
	                if (failedCallback) {
	                    callbackMap[FAILURE_PREFIX + sid] = failedCallback;
	                }
	
	                if (deferred) {
	                    callbackMap[DEFERRED_PREFIX + sid] = deferred;
	                }
	            },
	
	            unregisterCall: function (sid) {
	                var sucId = SUCCESS_PREFIX + sid;
	                var failId = FAILURE_PREFIX + sid;
	                var defId = DEFERRED_PREFIX + sid;
	                var call = {
	                    success: callbackMap[sucId],
	                    failure: callbackMap[failId],
	                    deferred: callbackMap[defId]
	                };
	
	                delete callbackMap[sucId];
	                delete callbackMap[failId];
	                if (call.deferred) {
	                    delete callbackMap[defId];
	                }
	                return call;
	            },
	
	            useIframe: function (sid, url) {
	                //this.ifUseIframe || (this.ifUseIframe = true);
	
	                var iframeid = IFRAME_PREFIX + sid;
	                var iframe = iframePool.pop();
	
	                if (!iframe) {
	                    iframe = doc.createElement('iframe');
	                    iframe.setAttribute('frameborder', '0');
	                    iframe.style.cssText = 'width:0;height:0;border:0;display:none;';
	                }
	
	                iframe.setAttribute('id', iframeid);
	                iframe.setAttribute('src', url);
	
	                if (!iframe.parentNode) {
	                    setTimeout(function () {
	                        doc.body.appendChild(iframe);
	                    }, 5);
	                }
	            },
	
	            retrieveIframe: function (sid) {
	                //if (!this.ifUseIframe) return;
	                var iframeid = IFRAME_PREFIX + sid;
	                var iframe = doc.querySelector('#' + iframeid);
	
	                if (iframePool.length >= iframeLimit) {
	                    doc.body.removeChild(iframe);
	                } else {
	                    iframePool.push(iframe);
	                }
	            },
	
	            callMethodByIframe: function (obj, method, param, sid) {
	                // [for protocol] hybrid://objectName:sid/methodName
	                var p = {"selfParam=1": 1, "sid": this.parseParam(param)["sid"]};
	                p = this.buildParam(p);
	                var src = LOCAL_PROTOCOL + '://' + obj + ':' + sid + '/' + method + '?' + p;
	                this.params[PARAM_PREFIX + sid] = param;
	                this.useIframe(sid, src);
	            },
	
	            callMethodByPrompt: function (obj, method, param, sid) {
	                var title = LOCAL_PROTOCOL + '://' + obj + ':' + sid + '/' + method + '?' + param;
	                var val = WV_PROTOCOL + ':';
	                this.params[PARAM_PREFIX + sid] = param;
	                window.prompt(title, val);
	            },
	
	            onComplete: function (sid) {
	                if (isIOS) {    //iOS下回收iframe
	                    this.retrieveIframe(sid);
	                }
	                delete this.params[PARAM_PREFIX + sid];
	            }
	        };
	
	        for (var key in WV_Core) {
	            // 在goldlog中对外暴露windvane接口
	            win[s_goldlog][key] = WindVane[key] = WV_Core[key];
	        }
	    }
	
	    /**
	     * 记录日志的基本方法
	     */
	    goldlog = {
	
	        version: VERSION,
	        referrer: page_referrer,
	        _d: {}, // 页面上可能会用到的临时数据
	        _microscope_data: _microscope_data,
	
	        getCookie: getCookie,
	        tryToGetAttribute: tryToGetAttribute,
	        tryToGetHref: tryToGetHref,
	        isNumber: isNumber,
	
	        /**
	         * 由于一些原因，这里暴露出 nameStorage
	         */
	        nameStorage: nameStorage,
	
	        /**
	         * 发送打点
	         * @param data
	         */
	        launch: function (data) {
	
	            if (win[_launch]) return;
	            win[_launch] = s_true;
	
	            var k, v,
	                isbeta,
	                exparams = getExParams(),
	                hasMeta = (waitingMeta == 1);
	
	            // 2014-01-10 庞都需求，根据不同发送方式指定版本号
	            if (data && data.isWait && hasMeta) {
	                isbeta = 7;
	                delete data.isWait;
	            } else if (hasMeta) {
	                isbeta = 8;
	            } else if (!hasMeta) {
	                isbeta = 5;
	            }
	
	            for (k in data) {
	                if (data.hasOwnProperty(k) && (v = data[k])) {
	                    tblog_data.push([k, v]);
	                }
	            }
	            // 2014-01-10 庞都需求，根据不同发送方式指定版本号
	            tblog_data.push(["isbeta", isbeta]);
	
	            // 2012-08-21 一啸需求，保证 exParams 参数在最后
	            tblog_data.push([mkPlainKey(), !!exparams ? exparams : "aplus"]);
	
	            ifAdd(tblog_data, [
	                ["urlokey", loc_hash],
	                ["aunbid", cookie_unb]
	            ]);
	
	            /**
	             * 这儿将 atp 请求的 src 放到了一个全局变量中，以便某些特殊需求使用，
	             * 例如某些动态加载的页面需要算一个 PV，这时可以修改下这个地址的 cache 值，再发送一次
	             */
				win["g_aplus_pv_req"] = tblogSend(tblog_beacon_url,tblog_data); 
	        },
			/**
			 *
			 * @param url {String}
			 * @param data {Object|Array}
			 * @return {String}
			 */
			send: function (url, data) {
	
				var img = new Image(),
					rnd_id = "_img_" + Math.random(),
					link_char = url.indexOf("?") == -1 ? "?" : "&",
					src,
					param_data = data ? (
						isArray(data) ? arr2param(data) : obj2param(data)
						) : "";
	
				// 在全局变量中引用 img，防止 img 被垃圾回收机制过早回收造成请求发送失败
				// 参考：http://hi.baidu.com/meizz/blog/item/a0f4fc0ae9d8be1694ca6b05.html
				win[rnd_id] = img;
	
				img.onload = img.onerror = function () {
					win[rnd_id] = null;
				};
	
				img.src = src = param_data ? (url + link_char + param_data) : url;
				img = null; // 删除临时变量的引用
	
				return src;
			},
	
			/**
			 * 黄金令箭的方法
			 * @param logkey {String} 令箭 ID （如 /tmallac.1.1，必须以“/”开头）或图片地址（如 1.gif），曝光日志的 logkey 为ac，
			 * 		常规日志的 logkey 是 *.gif，黄金令箭的 logkey 开头一定是“/”
			 * @param gmkey {String}
			 * @param gokey {String} 形如 a=1&b=2&c=ccc
			 * @param chksum {Number}
			 */
			record: function (logkey, gmkey, gokey, chksum) {
	
				//----------------- 航旅独有的埋点逻辑 start -----------------
				if(window._prism_lk){
					var _prism_lk = encodeURIComponent(JSON.stringify(window._prism_lk));
					if(gokey){
						gokey = gokey + ('&_prism_lk=' + _prism_lk);
					}
				}
				//----------------- 航旅独有的埋点逻辑 end -------------------
	
				chksum = arguments[3] || "";
				var url, link_char = "?", ignore_chksum = s_false,
					log_type,
					wgo_url = "//wgo.mmstat.com/",
					wgm_url = "//wgm.mmstat.com/",
	                cacheNum = makeCacheNum();
	
	            var hjlj_params = "",
	                spm_cnt = (spm_ab || "0.0") + ".0.0";
	
	            if (logkey == "ac") {
	                // 曝光日志
	                url = "//ac.mmstat.com/1.gif";
	                ignore_chksum = isStartWith(chksum, "A") && (chksum.substring(1) == makeChkSum(gmkey));
	
	            } else if (isStartWith(logkey, "/")) {
	                // 黄金令箭
	                ignore_chksum = isStartWith(chksum, "H") && (chksum.substring(1) == makeChkSum(logkey));
	                url = wgo_url + logkey.substring(1);
	                log_type = 2;
	                hjlj_params += "&spm-cnt=" + spm_cnt;
	
	            } else if (isEndWith(logkey, ".gif")) {
	                // 常规日志
	                url = tblog_beacon_base + logkey;
	
	            } else if (logkey == "aplus") {
	                // 庞都 2013-11-21 需求
	                url = wgm_url + "mx.gif";
	                log_type = 1;
	
	            } else {
	                // 不合法的 code
	                return s_false;
	            }
	
				if (!ignore_chksum && chksum != "%" && makeChkSum(page_url_constant) != chksum) {
					// chksum 不合法
					return s_false;
				}
				//--------- 航旅独有 在黄金令箭打点日志带上URL的查询参数 start --------
	
				var urlParams = location.search.slice(1);
				//--------- 航旅独有 在黄金令箭打点日志带上URL的查询参数 end ----------
	
	            gokey = (gokey || "")
	                + (urlParams ? "&_h5params=" + encodeURIComponent(urlParams) : "") //航旅独有
	                + (loc_hash ? "&urlokey=" + encodeURIComponent(loc_hash) : "")
	                + (cookie_unb ? "&aunbid=" + encodeURIComponent(cookie_unb) : "");
	            if (gokey.indexOf("&") == 0)
	                gokey = gokey.substr(1);
	
				url += link_char + "cache=" + cacheNum
					+ "&gmkey=" + encodeURIComponent(gmkey)
					+ "&gokey=" + encodeURIComponent(gokey)
					+ "&cna=" + acookie_cna // 一啸 2012-08-20 需求
					+ "&isbeta=" + VERSION
	                + hjlj_params
	            ;
	
	            if (log_type) {
	                url += "&logtype=" + log_type; // 庞都 2012-07-30 需求
	            }
	
	            // if AliApp use windVane
	            if (isWindVane) {
	                var windVaneData = {},
	                    data = {
	                        gmkey: gmkey,
	                        gokey: gokey,
	                        isbeta: VERSION
	                    },
	                    logkeyargs;
	
	                var content = isOnePage(),
	                    arr_content = content.split("|"),
	                    isonepage = arr_content[0],
	                    urlpagename = arr_content[1] ? arr_content[1] : "";
	
	                try {
	                    logkeyargs = JSON.stringify(data);
	                    if (logkeyargs == "{}") {
	                        logkeyargs = "";
	                    }
	                } catch (err) {
	                    logkeyargs = "";
	                }
	
	                windVaneData["functype"] = "2101";
	                windVaneData["logkey"] = logkey;
	                windVaneData["logkeyargs"] = logkeyargs;
	                windVaneData["urlpagename"] = urlpagename;
	                windVaneData["url"] = loc.href;
	                windVaneData["cna"] = acookie_cna || "";
	                windVaneData["extendargs"] = "";
	                windVaneData["isonepage"] = isonepage;
	
	                WindVane.call("WVTBUserTrack", "toUT", windVaneData);
	            }
	
	            return goldlog.send(url);
	        },
	
	        sendPV: function () {
	
	            // 需要将tblog之前的数据清空
	            tblog_data = [
	                ["logtype", is_in_iframe ? 0 : 1] // 庞都 2012-06-18 需求
	            ];
	
	            // spm_ab 必须清空， 否则init_getGlobalSPMId中会不再去取
	            spm_ab = undefined;
	            spm_ab = init_getGlobalSPMId();
	
	            sendPV(false);
			}
		};
	    win[s_goldlog] = goldlog;
	
	    // 初始化加载脚本
	    init_getGlobalSPMId();
	    init_loadScripts();
	    // 2014-05-07 webview需求
	    // 排除Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D201 AliApp(AP/8.1.0.042401) AlipayClient/8.1.0.042401
	    if (isWindVane) {
	        init_windVane();
	    }
	
	
	    /**
	     * 取得打点参数
	     */
	    function sendPV(auto) {
	
	        var data,
	            spm_url = getSPMFromUrl(page_url), // 当前访问页面的 url 里的 spm
	            spm_pre = getSPMFromUrl(page_referrer), // 来源地址里的 spm
	            tracknick = getCookie("tracknick"),
	            isbeta,
	            exparams = getExParams();
	
	        is_use_LS_proxy = isUseLSProxy();
	        loc_hash = loc.hash;
	
	        if (loc_hash && loc_hash.indexOf("#") == 0) {
	            loc_hash = loc_hash.substr(1);
	        }
	
	
	        // 监听子iframe的消息
	//		if (is_use_LS_proxy && win.addEventListener && win.JSON) {
	//			win.addEventListener("message", function (event) {
	//				var data = event.data;
	//
	//				function getRootDomain() {
	//					var a = hostsname.split(".");
	//					var len = a.length;
	//					if (len > 1) {
	//						return a[len-2] + "." + a[len-1];
	//					} else {
	//						return hostsname;
	//					}
	//				}
	//
	//				// todo 删除临时的 iframe
	////				setTimeout(function () {
	////					var ifr = proxy_iframes.shift();
	////					if (ifr)
	////						doc.removeChild(ifr);
	////				}, 200);
	//
	//				try {
	//					data = JSON.parse(data);
	//				} catch (e) {
	//					return;
	//				}
	//
	//				var item, cookie, k;
	//				for (var i = 0, l = data.length; i < l; i ++) {
	//					item = data[i];
	//					k = item.k;
	//					cookie = encodeURIComponent(k) + "="
	//						// 历史原因，cna这个cookie不编码
	//						+ (k == "cna" ? item.v : encodeURIComponent(item.v))
	////						+ item.v
	////						+ encodeURIComponent(item.v)
	//						+ "; domain=." + getRootDomain()
	//						+ "; path=/"
	//						+ "; expires=" + (new Date(item.t)).toGMTString();
	//					doc.cookie = cookie;
	//				}
	//			});
	//		}
	
	        if (!is_in_iframe || atp_inIframeException()) { // 不在框架中 or 包含指定路径
	
	            if (waitingMeta == 1) {
	                isbeta = 7;
	            } else {
	                isbeta = VERSION;
	            }
	
	            // 记录相关参数
	            data = [
	                [mkPlainKey(), "title=" + escape(doc.title)],
	                ["pre", page_referrer],
	
	                ["cache", makeCacheNum()],
	                ["scr", screen.width + "x" + screen.height],
	                ["isbeta", isbeta]
	//				ul_chk: url_chk_sum // 发送 ul_chk 验证码
	
	            ];
	
	            if (acookie_cna) {
	                data.push([mkPlainKey(), "cna=" + acookie_cna]);
	            }
	            if (tracknick) {
	                data.push([mkPlainKey(), "nick=" + tracknick]);
	            }
	            //data.push(["spm-cnt", (spm_ab || "0.0") + ".0.0." + pvid]);
	            data.push(["spm-cnt", (spm_ab || "0.0") + ".0.0"]);
	            ifAdd(data, [
	                ["spm-url", spm_url],
	                ["spm-pre", spm_pre]
	            ]);
	
	            tblog_data = tblog_data.concat(data);
	
	            /**
	             * 这儿将 atp 请求的 src 放到了一个全局变量中，以便某些特殊需求使用，
	             * 例如某些动态加载的页面需要算一个 PV，这时可以修改下这个地址的 cache 值，再发送一次
	             */
	            if (isbeta == 7) {
	                setTimeout(function () {
	                    goldlog.launch({isWait: true});
	                }, 6000);
	            } else {
	                // 2012-08-21 一啸需求，保证 exParams 参数在最后
	                // 如果有exparams参数，直接使用，没有则直接用aplus间隔参数
	                tblog_data.push([mkPlainKey(), !!exparams ? exparams : "aplus"]);
	
	                ifAdd(tblog_data, [
	                    ["urlokey", loc_hash],
	                    ["aunbid", cookie_unb]
	                ]);
	
	                // add params
	                if (!auto) {
	                    //var autoArr = [["auto", "0"]];
	                    ifAdd(tblog_data, [
	                        ["auto", "0"]
	                    ]);
	//					if (typeof params == "string") {
	//						ifAdd(tblog_data, param2arr(params).concat(autoArr));
	//					} else if (typeof params == "object") {
	//						ifAdd(tblog_data, param2arr(obj2param(params)).concat(autoArr));
	//					}
	                }
	
	                win["g_aplus_pv_req"] = tblogSend(tblog_beacon_url, tblog_data);
	            }
	        }
	
	        if (is_in_iframe) {
	            /**
	             * 满足开启规则的 iframe 向 http://ac.mmstat.com/1.gif 增加一个打点（不影响原来的白名单规则）
	             *
	             */
	            getMetaAtpData();
	
	            /**
	             * iframe 例外
	             */
	            var chksum,
	                on = _atp_beacon_data["on"],
	                url = (on == "1" ? "//ac.mmstat.com/y.gif" : tblog_beacon_url);
	            if (
	                (on == "1" || on == "2")
	                && (chksum = _atp_beacon_data["chksum"])
	                && chksum === makeChkSum(page_url).toString()
	            ) {
	                tblogSend(url, tblog_data);
	            }
	        }
	
	        addEventListener(win, "beforeunload", function () {
	            recordValInWindowName();
	        });
	    }
	
	    sendPV(true);
	
	})();
	


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * author: 季札 <jizha.wyj@taobao.com>
	 *
	 * SPM 埋点脚本 for wap
	 * 本脚本完全独立，不赖其它 js，可单独使用
	 *
	 * @see http://wiki.ued.taobao.net/doku.php?id=tms:spm%E5%9F%8B%E7%82%B9%E6%96%B9%E6%A1%88
	 */
	
	(function () {
	
		var win = window;
		var doc = document;
		var loc = location;
		var s_true = true;
		var s_false = false;
	
		var page_url = loc.href; // 当前页面的 url
		var loc_protocol = loc.protocol;
		var is_https = "https:" == loc_protocol;
		//var isOffline = getMetaOffline();
		var isTouchEnabled = getMetaTouch();
		var use_protocol = is_https ? "https:" : "http:";
	
		/**
		 * 2013-07-22
		 * 这儿不用 // 相对协议，是因为：
		 * 由校：是云OS浏览器的首页~ 浏览器首页需要马上加载出来，所以用file协议
		 *        浏览器在启动的时候会加载一个本地的html页面作为浏览器首页
		 *
		 * 2013-09-18
		 * 非 https 页面改用 gm.mmstat.com 域名，
		 * https 页面继续使用 log.mmstat.com ，因为 gm.mmstat.com 的证书目前还有问题
		 *
		 * 2015-06-03
		 * https 页面同样使用 wgo.mmstat.com
		 */
		var hjlj_beacon_base = (use_protocol) + "//wgo.mmstat.com/";
	
	
	
		var is_dom_ready = s_false;
		var is_in_iframe = parent !== self;
	
		var spm_a, spm_b, spm_ab;
		var spm_d_for_ad = {}; // 用于广告的spm_d位
		var page_global_spm_id_origin;
		var page_global_is_wangpu;
		var default_ab = "0.0";
		var is_use_default_ab = false;
		var s_plain_obj = "::-plain-::"; // 一个特殊的字符串，用于标识无需编码的键值
		var s_HTML = "HTML";
		var s_BODY = "BODY";
	
		var pvid;
	
		// 当前浏览器是否为 IE（是否支持 document.attachEvent）
		var atta = !!doc.attachEvent;
		var s_attachEvent = "attachEvent";
		var s_addEventListener = "addEventListener";
		var onevent = atta ? s_attachEvent : s_addEventListener;
	
		var _head_node;
		var _meta_nodes;
	
		var wh_in_page = s_false; // 页面上是否有无痕埋点
		var wh_spm_data = {}; // 无痕 SPM 数据，key 为 xpath
		var wh_spm_initialized = s_false;
	
		var spm_protocol;
	
		var s_SPM_ATTR_NAME = "data-spm";
		var s_SPM_DATA_PROTOCOL = "data-spm-protocol";
		var s_SPM_SRC = "data-spm-src";
		var s_SPM_CLICK = "data-spm-click";
		var s_AUTO_SPMD = "data-auto-spmd"; // @see http://gitlab.alibaba-inc.com/alilog/kb/issues/125
		var s_SPM_MAX_IDX = "data-spm-max-idx";
		var s_AUTO_SPMD_MAX_IDX = "data-auto-spmd-max-idx";
	
		var spm_prefix = ""; // 如果当前在iframe中，并且iframe有spm参数，则这个前缀不为空
		var spm_current_anchor;
	
		var s_DATA_SPM_WANGPU_MODULE_ID = "data-spm-wangpu-module-id";
		var s_DATA_SPM_ANCHOR_ID = "data-spm-anchor-id";
	
	
		/**
		 * 将一个 node list 转为数组
		 * @param nodes {NodeList}
		 * 参见：http://www.planabc.net/2010/01/06/arguments_to_array/
		 */
		function nodeListToArray(nodes) {
			var arr, length;
	
			try {
				// works in every browser except IE
				arr = [].slice.call(nodes);
				return arr;
			} catch (err) {
				// slower, but works in IE
				arr = [];
				length = nodes.length;
	
				for (var i = 0; i < length; i++) {
					arr.push(nodes[i]);
				}
	
				return arr;
			}
		}
	
		function tryToGetAttribute(element, attr_name) {
			return element && element.getAttribute ? (element.getAttribute(attr_name) || "") : "";
		}
	
		function tryToSetAttribute(element, attr_name, attr_value) {
			if (element && element.setAttribute) {
				try {
					element.setAttribute(attr_name, attr_value);
				} catch (e) {
				}
			}
		}
	
		function tryToRemoveAttribute(element, attr_name) {
			if (element && element.removeAttribute) {
				try {
					element.removeAttribute(attr_name);
				} catch (e) {
					tryToSetAttribute(element, attr_name, "");
				}
			}
		}
	
		/**
		 * 判断字符串 s1 是否以字符串 s2 开头
		 * @param s1 {String}
		 * @param s2 {String}
		 */
		function isStartWith(s1, s2) {
			return s1.indexOf(s2) == 0;
		}
	
		/**
		 * 判断字符串 s1 是否以黑名单中的字符串开头
		 * @param s1
		 */
		function isStartWithProtocol(s1) {
			var blacklist = ["javascript:", "tel:", "sms:", "mailto:", "tmall://"];
			for (var i = 0, l = blacklist.length; i < l; i++) {
				if (isStartWith(s1, blacklist[i])) {
					return true;
				}
			}
		}
	
		function isString(v) {
			return typeof v == "string";
		}
	
		function isArray(o) {
			return Object.prototype.toString.call(o) === "[object Array]";
		}
	
		function isNumber(v) {
			return typeof v == "number";
		}
	
		function hasString(s0, s1) {
			return s0.indexOf(s1) >= 0;
		}
	
		/**
		 * 判断字符串 s1 是否包含字符串 s2
		 * @param s1 {String}
		 * @param s2 {String}
		 */
		function isContain(s1, s2) {
			return s1.indexOf(s2) > -1;
		}
	
		function isContain2(s1, arr) {
			for (var i = 0, l = arr.length; i < l; i++) {
				if (isContain(s1, arr[i])) return s_true;
			}
			return s_false;
		}
	
		/**
		 * 去掉字符串 s 前后的空格
		 * @param s {String}
		 */
		function trim(s) {
			return isString(s) ? s.replace(/^\s+|\s+$/g, "") : "";
		}
	
		function isUnDefined(v) {
			return typeof v == "undefined";
		}
	
		function tryToDecodeURIComponent(val, default_val) {
			var v = default_val || "";
			if (val) {
				try {
					v = decodeURIComponent(val);
				} catch (e) {
				}
			}
			return v;
		}
	
		/**
		 * 取得页面上 head 中的所有 meta 元素
		 */
		function getMetaTags() {
			_head_node = _head_node || doc.getElementsByTagName("head")[0];
	
			return _meta_nodes || (_head_node ? (_meta_nodes = _head_node.getElementsByTagName("meta")) : []);
		}
	
		/**
		 * 解析 meta 的内容，meta 的内容形如："pageId=123; siteId=456"
		 * @param s {String}
		 * @param dict {Object}
		 */
		function parseMetaContent(s, dict) {
			var a = s.split(";"),
				j, a_len = a.length,
				a2;
	
			for (j = 0; j < a_len; j++) {
				a2 = a[j].split("=");
				dict[trim(a2[0]) || s_plain_obj] = tryToDecodeURIComponent(trim(a2.slice(1).join("=")));
			}
		}
	
	
		function getSPMProtocolFromMeta() {
	
			var metas = getMetaTags(),
				i, l,
				meta,
				meta_name;
	
			for (i = 0, l = metas.length; i < l; i++) {
				meta = metas[i];
				meta_name = tryToGetAttribute(meta, "name");
				if (meta_name == s_SPM_ATTR_NAME) {
					spm_protocol = tryToGetAttribute(meta, s_SPM_DATA_PROTOCOL);
	//				spm_protocol = spm_protocol == "i" ? "i" : "u";
				}
			}
	
		}
	
		function getMetaSPMData(key) {
			var metas = getMetaTags(),
				i, l, a,
				meta, meta_name,
				tmp;
	
			if (metas) {
				for (i = 0, l = metas.length; i < l; i++) {
					meta = metas[i];
					meta_name = tryToGetAttribute(meta, "name");
					if (meta_name == key) {
						page_global_spm_id_origin = tryToGetAttribute(meta, "content");
	
						// 处理 spm 协议
						if (page_global_spm_id_origin.indexOf(":") >= 0) {
							a = page_global_spm_id_origin.split(":");
							spm_protocol = a[0] == "i" ? "i" : "u";
							page_global_spm_id_origin = a[1];
						}
						tmp = tryToGetAttribute(meta, s_SPM_DATA_PROTOCOL);
						if (tmp) {
							spm_protocol = (tmp == "i" ? "i" : "u");
						}
	
						// 旺铺页面全局 spm-id 无效
						page_global_is_wangpu = isStartWith(page_global_spm_id_origin, "110");
						spm_ab = (page_global_is_wangpu ? default_ab : page_global_spm_id_origin);
	
						return s_true;
					}
				}
			}
	
			return s_false;
		}
	
		/**
		 * 取得 head / meta 中的 aplus-offline
		 * 形如：
		 * <meta name="aplus-offline" content="1">
		 */
		//function getMetaOffline() {
		//	var i, meta,
		//		meta_nodes = getMetaTags(),
		//		l = meta_nodes.length,
		//		content;
		//
		//	for (i = 0; i < l; i++) {
		//		meta = meta_nodes[i];
		//		if (tryToGetAttribute(meta, "name") == "aplus-offline") {
		//			content = tryToGetAttribute(meta, "content");
		//			break;
		//		}
		//	}
		//
		//	return content;
		//}
	
		/**
		 * 取得 head / meta 中的 aplus-touch
		 * 形如：
		 * <meta name="aplus-touch" content="1">
		 */
		function getMetaTouch() {
			var i, meta,
				meta_nodes = getMetaTags(),
				l = meta_nodes.length,
				content;
	
			for (i = 0; i < l; i++) {
				meta = meta_nodes[i];
				if (tryToGetAttribute(meta, "name") == "aplus-touch") {
					content = tryToGetAttribute(meta, "content");
					break;
				}
			}
	
			return content;
		}
	
		/**
	     * 取得 head / meta 中的 aplus-offline
	     * 形如：
	     * <meta name="aplus-offline" content="1">
	     */
	    function getMetaOffline() {
	        var i, meta,
	            meta_nodes = getMetaTags(),
	            l = meta_nodes.length,
	            content;
	
	        for (i = 0; i < l; i++) {
	            meta = meta_nodes[i];
	            if (tryToGetAttribute(meta, "name") == "aplus-offline") {
	                content = tryToGetAttribute(meta, "content");
	                break;
	            }
	        }
	
	        return content;
	    }
	
	
		/**
		 * 生成一个用于避免缓存的随机数
		 * 为了减少 url 长度，这个随机数据的长度定为 7 位，
		 * 为了减少碰撞，使用 16 进制数字
		 *
		 * 268435456 = 2 ^ 28 = 0xfffffff + 1
		 */
		function makeCacheNum() {
			return Math.floor(Math.random() * 268435456).toString(16);
		}
	
		/**
		 * object to param
		 * 将一个简单对象转化为 url 参数的形式
		 * 参见 arr2param() 方法
		 * @param obj {Object}
		 *
		 */
		function obj2param(obj) {
			var a = [], k, v;
			for (k in obj)
				if (obj.hasOwnProperty(k)) {
					v = "" + obj[k];
	//				a.push(k == s_plain_obj ? v : (k + "=" + encodeURIComponent(v)));
					a.push(isStartWith(k, s_plain_obj) ? v : (k + "=" + encodeURIComponent(v)));
				}
			return a.join("&");
		}
	
	
		/**
		 * array to param
		 * 将一个简单的数组转化为 url 参数的形式，
		 * 其中数组为
		 *        [[k1, v1], [k2, v2], [k3, v3], ...]
		 * 的形式。
		 * 与 obj2param 相比，这个方法的好处是可以保证最后参数的顺序
		 * @param arr {Array}
		 * @return {String}
		 */
		function arr2param(arr) {
			var a = [], k, v,
				i, len = arr.length;
	
			for (i = 0; i < len; i++) {
				k = arr[i][0];
				v = arr[i][1];
				a.push(isStartWith(k, s_plain_obj) ? v : (k + "=" + encodeURIComponent(v)));
			}
			return a.join("&");
		}
	
		function tryToGetHref(anchor) {
			/**
			 * 这儿之所以要 try 一下，是因为如果 href 格式有误时，在 IE8/9 下 href 将无效，
			 * 读取 anchor.href 时会直接出错。
			 *
			 * 例如，如果：
			 *         <a href="http://shop64102844.taobao.com/search=y% 3D">测试</a>
			 * 注意它缺少“?”，并且在“%”后多了一个空格
			 * 在 IE8/9 下用 js 访问这个链接的 href 属性时会直接报错
			 */
			var href;
			try {
				href = trim(anchor.getAttribute("href", 2));
			} catch (e) {
			}
	
			return href || "";
		}
	
	
		/**
		 * 绑定事件
		 * @param obj {Element|Document|Window} DOM 元素
		 * @param event_type
		 * @param f
		 */
		function addEventListener(obj, event_type, f) {
	
			if (event_type == 'tap') {
				tapEventBind(obj, f);
				return;
			}
	
			// 绑定 document 的 mousedown 事件
			obj[onevent](
				(atta ? "on" : "") + event_type,
				function (e) {
					e = e || win.event;
					var el = e.target || e.srcElement;
	
					f(el);
				},
				s_false
			);
	
		}
	
		/**
		 * tap methods
		 * thx to @灵玉
		 */
		function tapEventBind(element, fn) {
			var isTouch = "ontouchend" in document.createElement("div"),
				tstart = isTouch ? "touchstart" : "mousedown";
	
			// KISSY mini
			var KISSY = win.KISSY;
			if (KISSY && KISSY.__touchModAdded && KISSY.one && isTouch) {
	
				KISSY.one(element).on('tap', function (e) {
					fn && fn(e.target);
				});
			} else {
	
				addEventListener(element, tstart, function (el) {
					fn && fn(el);
				});
			}
		}
	
	//    function tapEventBind(element, fn) {
	//        var isTouch = "ontouchend" in document.createElement("div"),
	//            tstart = isTouch ? "touchstart" : "mousedown",
	//            tmove = isTouch ? "touchmove" : "mousemove",
	//            tend = isTouch ? "touchend" : "mouseup",
	//            i = {};
	//        addEventListener(element, tstart, function(e) {
	//            var p = "touches" in e ? e.touches[0] : (isTouch ? window.event.touches[0] : window.event);
	//            i.startX = p.clientX;
	//            i.startY = p.clientY;
	//            i.endX = p.clientX;
	//            i.endY = p.clientY;
	//            i.startTime = +new Date();
	//        });
	//        addEventListener(element, tmove, function(e) {
	//            var p = "touches" in e ? e.touches[0] : (isTouch ? window.event.touches[0] : window.event);
	//            i.endX = p.clientX;
	//            i.endY = p.clientY;
	//        });
	//        addEventListener(element, tend, function(e) {
	//            if ((+new Date()) - i.startTime < 300 &&
	//                Math.abs(i.endX - i.startX) + Math.abs(i.endY - i.startY) < 20) {
	//                fn && fn(e);
	//            }
	//            i = {};
	//        });
	//    }
	
	
		/**
		 * DOMReady 方法，
		 */
		function onDOMReady(f) {
	
			var kissy = win["KISSY"];
			if (kissy) {
				// 如果页面上有 KISSY，使用 KISSY 的方法
				kissy.ready(f);
	
			} else if (win.jQuery) {
				// 如果页面上存在 jQuery，使用 jQuery 的方法
				jQuery(doc).ready(f);
	
			} else {
	
				// 判断页面是否已经加载完成
				if (doc.readyState === "complete") {
					// 如果页面已经加载完成，直接执行函数 f
					f();
	
				} else {
					// 使用 window 的 onload 事件
					addEventListener(win, "load", f);
				}
	
			}
		}
	
		/**
		 *
		 * @param url {String}
		 * @param [data] {Object|Array}
		 * @return {String}
		 */
		function sendData(url, data) {
	
			var img = new Image(),
				rnd_id = "_img_" + Math.random(),
				link_char = url.indexOf("?") == -1 ? "?" : "&",
				src,
				param_data = data ? (
					isArray(data) ? arr2param(data) : obj2param(data)
				) : "";
	
			// 在全局变量中引用 img，防止 img 被垃圾回收机制过早回收造成请求发送失败
			// 参考：http://oldj.net/article/one-thing-to-notice-about-new-image/
			win[rnd_id] = img;
	
			img.onload = img.onerror = function () {
				win[rnd_id] = null;
			};
	
			img.src = src = param_data ? (url + link_char + param_data) : url;
			img = null; // 删除临时变量的引用
	
			return src;
		}
	
		/**
		 * 取得全局 spm id
		 * 以 init_ 开头的函数是页面加载时就会执行的
		 * 步骤如下：
		 * 1、如果页面上存在无痕埋点，则使用无痕埋点数据
		 *         spm_a = window._SPM_a;
		 *         spm_b = window._SPM_b;
		 *         spm_protocol 从 head meta 中取
		 *
		 * 2、在 head 中查找
		 *         <meta name="spm-id" content="[Protocol:]xx.xx" />
		 *        或：<meta name="spm-id" content="[Protocol:]xx" />
		 *        或：<meta name="data-spm" content="[Protocol:]xx" />
		 * 如果找到，则；
		 *         如果其内容不以“110”开头，则使用；
		 *         否则，返回空（旺铺页面没有全局 spm-id） 2012-02-13 补庵、大渡需求
		 *
		 * 3、在 body 标签中查找 spm id 的第 2 位，如果找到，则使用（2012-06-06）
		 * @see: http://baike.corp.taobao.com/index.php/Spm%E5%9F%8B%E7%82%B9
		 *
		 * 4、否则，返回“0.0”
		 */
		function init_getGlobalSPMId() {
	
			var spm_in_current_url;
			if (is_in_iframe && !spm_prefix) {
				// 从当前iframe的url中获取spm前缀
				spm_in_current_url = page_url.match(/^[^?]+\?[^?]*spm=([^&#?]+)/);
				if (spm_in_current_url) {
					spm_prefix = spm_in_current_url[1] + "_";
				}
			}
	
			if (!isUnDefined(spm_ab)) return spm_ab;
	
			/** @namespace win._SPM_a */
			/** @namespace win._SPM_b */
			if (win._SPM_a && win._SPM_b) {
				// 如果页面上存在 _SPM_a、_SPM_b，表示页面上有无痕埋点
				spm_a = win._SPM_a.replace(/^{(\w+)}$/g, "$1");
				spm_b = win._SPM_b.replace(/^{(\w+)}$/g, "$1");
				wh_in_page = s_true;
				spm_ab = spm_a + "." + spm_b;
				getSPMProtocolFromMeta();
	
	//			goldlog.spm_ab = [spm_a, spm_b];
	
				return spm_ab;
			}
	
	//		var head = doc.getElementsByTagName("head")[0],
	//			a;
	
			getMetaSPMData(s_SPM_ATTR_NAME) || getMetaSPMData("spm-id");
	
			/**
			 * 如果页面上不存在 spm id 的第一位，则返回默认值“0.0”
			 */
			if (!spm_ab) {
				is_use_default_ab = true;
				spm_ab = default_ab;
				return default_ab;
			}
	
			/**
			 * 尝试从 body 标签中获取第二位
			 * 形如：<body data-spm="1000484">...</body>
			 */
			var spm_b_val;
			var a;
			var body = doc.getElementsByTagName("body");
			body = body && body.length ? body[0] : null;
			if (body) {
				spm_b_val = tryToGetAttribute(body, s_SPM_ATTR_NAME);
				if (spm_b_val) {
					// body 标签中存在 spm 第二位
					a = spm_ab.split(".");
					spm_ab = a[0] + "." + spm_b_val;
	//				goldlog.spm_ab = [a[0], spm_b_val];
				}
			}
			if (!isContain(spm_ab, ".")) {
				// 没有指定b位
				is_use_default_ab = true;
				spm_ab = default_ab;
			}
	
			return spm_ab;
		}
	
	
		function wh_getXPath(el) {
	
			var all_nodes = doc.getElementsByTagName("*"),
				segs, i, sib, unique_id_count,
				node, el_id;
	
			for (segs = []; el && el.nodeType == 1; el = el.parentNode) {
				if (el_id = el.id) {
					unique_id_count = 0;
					for (i = 0; i < all_nodes.length; i++) {
						node = all_nodes[i];
						if (node.id == el_id) {
							unique_id_count++;
							break;
						}
					}
					segs.unshift(el.tagName.toLowerCase() + "[@id=\"" + el_id + "\"]");
					if (unique_id_count == 1) {
						segs.unshift("/");
						return segs.join("/");
					}
	
				} else {
					for (i = 1, sib = el.previousSibling; sib; sib = sib.previousSibling) {
						if (sib.tagName == el.tagName)  i++;
					}
					segs.unshift(el.tagName.toLowerCase() + "[" + i + "]");
				}
	
			}
	
			return segs.length ? "/" + segs.join("/") : null;
	
		}
	
		function wh_isModule(el) {
			var data = wh_spm_data[wh_getXPath(el)];
	
			return data ? data.spmc : "";
		}
	
		/**
		 * 取得当前模块中的所有 a/area 元素，但是跳过子模块中的 a/area 元素
		 * @param el {Element}
		 * @param [is_auto_spmd] {Boolean} 是为带 data-auto-spmd 属性的元素
		 *          需求见 http://gitlab.alibaba-inc.com/alilog/kb/issues/125
		 * @return {Array}
		 */
		function spm_getModuleLinks(el, is_auto_spmd) {
	
			var els_a, els_area,
				anchor,
				anchors, tmp_el, arr = [],
				is_in_child_module,
				i, l;
	
			var auto_spmd;
			els_a = nodeListToArray(el.getElementsByTagName("a"));
			els_area = nodeListToArray(el.getElementsByTagName("area"));
			anchors = els_a.concat(els_area);
	
			for (i = 0, l = anchors.length; i < l; i++) {
				is_in_child_module = false;
				tmp_el = anchor = anchors[i];
				while (tmp_el = tmp_el.parentNode) {
					if (tmp_el == el) break;
					if (tryToGetAttribute(tmp_el, s_SPM_ATTR_NAME)) {
						// 如果当前链接是在另一个模块中
						is_in_child_module = true;
						break;
					}
				}
				if (!is_in_child_module) {
					auto_spmd = tryToGetAttribute(anchor, s_AUTO_SPMD);
					if (!is_auto_spmd && auto_spmd != "t") {
						arr.push(anchor);
					} else if (is_auto_spmd && auto_spmd == "t") {
						arr.push(anchor);
					}
				}
			}
	
			return arr;
		}
	
	
		/**
		 * 初始化一个 spm 模块
		 * 为其中的所有 a/area 元素（href 不为空）（跳过子模块）添加一个 data-spm-id 属性，同时添加相应的 url params
		 *
		 * 上面的跳过子模块的意思是：
		 * 如果一个容器中嵌套了另外的子容器，则编号时跳过这些子容器中的链接
		 *
		 * @param module {Element} 要初始化的 dom 节点
		 * @param spm_c {String} 可选，模块的 c 位值
		 * @param is_not_change_href {Boolean} 是否修改链接的 href
		 * @param [is_auto_spmd] {Boolean} 是否初始化 auto_spmd 链接
		 */
		function spm_initSPMModule(module, spm_c, is_not_change_href, is_auto_spmd) {
	
			var anchors, anchor, ids, ids0, anchor_idx,
				href, a_spm_id,
				spm_d,
				page_g_spm_id,
				length, i, j,
				is_in_wangpu_module, // 是否为旺铺模块，旺铺的 spm id 以 110 开头
				wangpu_module_id,
	//			wangpu_module_id_arr,
				current_module_max_spmid;
	
			if (tryToGetAttribute(module, "data-spm-delay")) {
				module.setAttribute("data-spm-delay", "");
				return;
			}
	
			spm_c = spm_c || module.getAttribute(s_SPM_ATTR_NAME) || "";
			if (!spm_c) return;
			anchors = spm_getModuleLinks(module, is_auto_spmd);
			if (anchors.length === 0) return;
	
			ids = spm_c.split(".");
			is_in_wangpu_module = (isStartWith(spm_c, "110") && ids.length == 3);
			if (is_in_wangpu_module) {
				wangpu_module_id = ids[2];
				ids[2] = "w" + (wangpu_module_id || "0"); // 补庵 2013-04-26 需求，SPM 参数采用完整的值
				spm_c = ids.join(".");
			}
	
			/*
			 * 在页面上查找全局的 meta spm 变量
			 * 并将它作为 spm_id 的前 n 位（n 为 1 或 2）
			 *
			 */
			if (
				isString(page_g_spm_id = init_getGlobalSPMId()) &&
				page_g_spm_id.match(/^[\w\-\*]+(\.[\w\-\*]+)?$/) // 格式为 xx.xx 或 xx 的形式
			) {
				if (!hasString(spm_c, ".")) {
					/**
					 * module 中只有第三位，则使用全局的前两位拼接
					 * @see: http://baike.corp.taobao.com/index.php/Spm%E5%9F%8B%E7%82%B9
					 */
					if (!hasString(page_g_spm_id, ".")) {
						// 容错处理，如果 meta 、module 中都只有一位，但是 body 中没有填写，则使用 0 代替
						page_g_spm_id += ".0";
					}
					spm_c = page_g_spm_id + "." + spm_c;
	
				} else if (!isStartWith(spm_c, page_g_spm_id)) {
					ids0 = page_g_spm_id.split(".");
					ids = spm_c.split(".");
	
					for (i = 0, length = ids0.length; i < length; i++) {
						ids[i] = ids0[i];
					}
					spm_c = ids.join(".");
	
	//					if (ids.length == 3) {
	//						spm_id = page_g_spm_id + "." + ids[2];
	//					}
				}
			}
	
			// 判断当前 spm_id 是否合法
			if (!spm_c.match || !spm_c.match(/^[\w\-\*]+\.[\w\-\*]+\.[\w\-\*]+$/)) return;
	
			var max_id_attr = is_auto_spmd ? s_AUTO_SPMD_MAX_IDX : s_SPM_MAX_IDX;
			// 取得当前 module 的 data-spm-max-id 的值
			current_module_max_spmid = parseInt(tryToGetAttribute(module, max_id_attr)) || 0;
	
			for (j = 0, anchor_idx = current_module_max_spmid, length = anchors.length; j < length; j++) {
				anchor = anchors[j];
				href = tryToGetHref(anchor);
	
				// 忽略没有 href 的 anchor（这一般是书签）
				if (!is_auto_spmd && !href) continue;
	
				if (is_in_wangpu_module) {
					anchor.setAttribute(s_DATA_SPM_WANGPU_MODULE_ID, wangpu_module_id);
				}
	
				// 如果当前 a 元素已经有 spm id
				if (a_spm_id = anchor.getAttribute(s_DATA_SPM_ANCHOR_ID)) {
	
					// 再次确保当前 a 元素的 spm id 为 a_spm_id
					spm_anchorEnsureSPMId_inHref(anchor, a_spm_id, is_not_change_href);
					continue;
				}
	
				anchor_idx++;
	//			anchor.href = hostname + "?spm=" + spm_id + "." + anchor_idx + search + hash;
				spm_d = (spm_getAnchor4thId_spm_d(anchor) || anchor_idx);
				if (is_auto_spmd) {
					spm_d = "at" + ((isNumber(spm_d) ? 1000 : "") + spm_d);
				}
	
				a_spm_id = spm_c + "." + spm_d;
				spm_anchorEnsureSPMId_inHref(anchor, a_spm_id, is_not_change_href);
	
			}
	
			// 记录下当前 module 的最大 anchor 索引
			module.setAttribute(max_id_attr, anchor_idx);
	
		}
	
		/**
		 * 判断当前 url 是否广告链接
		 * 广告链接黑名单
		 * @param url {String}
		 */
		function spm_isAdLink(url) {
	
			var ad_links = [
				"mclick.simba.taobao.com", // 无线点击
				"click.simba.taobao.com", // kgb的点击
				"click.tanx.com", // tanx的点击
				"click.mz.simba.taobao.com", // mama的点击
				"click.tz.simba.taobao.com", // mama的点击
				"redirect.simba.taobao.com", // redirect点击
				"rdstat.tanx.com", // redirect地址
				"stat.simba.taobao.com", // 隐樵 2012-5-20
				"s.click.taobao.com" // 隐樵 2012-5-20
			], i, len = ad_links.length;
	
			for (i = 0; i < len; i++) {
				if (url.indexOf(ad_links[i]) != -1) return true;
			}
	
			return false;
		}
	
		function spm_isAlipayUrl(url) {
	
			return url ?
				(!!url.match(/^[^\?]*\balipay\.(?:com|net)\b/i))
				: s_false;
		}
	
		/**
		 * 判断是不是 alipay 的签名链接
		 * 这种链接中的参数已经过签名，不能再添加 spm 参数，否则会出错
		 * @param url {String}
		 *
		 * 这种链接形如：
		 * http://tbapi.alipay.net/cooperate/gateway.do?_input_charset=GBK&amp;customer_email=twork_yexue06%40taobao.net&amp;is_account_read_only=true&amp;partner=2088001159940003&amp;return_url=http%3A%2F%2Ffenxiao.daily.taobao.net%2Fdistributor%2Fapply%2FsetdefaultPayway_callback.htm&amp;service=customer_sign&amp;type_code=TBFX100021000302&amp;sign_type=DSA&amp;sign=_f2_j_i%2B_ds_h_w_sfr_a_ld_s_z_iq_w_q5_uw_xb9xz_nf_na_fi3pc_gafcrpm_k_sm9_m_w_t_gg%3D%3D
		 *
		 * 特征为：
		 *     1、域名中包含 alipay.net 或 alipay.com；
		 *     2、参数中包含 /\bsign=.+/
		 */
		function spm_isAlipaySignedUrl(url) {
			return url ?
				(!!url.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i))
				: s_false;
		}
	
		/**
		 * 递归取得某个链接的父元素的 data-spm-protocol 的值
		 * @param el {HTMLElement|Node}
		 * @return {String}
		 */
		function spm_getModuleProtocol(el) {
			var tmp;
			while ((el = el.parentNode) && el.tagName != s_BODY) {
				tmp = tryToGetAttribute(el, s_SPM_DATA_PROTOCOL);
				if (tmp) return tmp;
			}
			return "";
		}
	
		/**
		 * 在给定的 href 中间插入 spm 参数，如果原来 href 中已有 spm，则将其更新
		 * @param href {String}
		 * @param spm_id {String}
		 */
		function spm_updateHrefWithSPMId(href, spm_id) {
	
			// 去掉现有的 href 中的 spm 参数
			if (href && /&?\bspm=[^&#]*/.test(href)) {
				href = href.replace(/&?\bspm=[^&#]*/g, "")
					.replace(/&{2,}/g, "&")
					.replace(/\?&/, "?")
					.replace(/\?$/, "")
				;
			}
	
			if (!spm_id) return href;
	
			// 在 href 中插入新的 spm 参数
			var search, hash, a,
				and_char = "&",
				query_split,
				query_count,
				filename,
				file_ext;
	
			if (href.indexOf("#") != -1) {
				a = href.split("#");
				href = a.shift();
				hash = a.join("#"); // 取第一个 # 后的部分
			}
			query_split = href.split("?");
			query_count = query_split.length - 1;
	
			// 下面处理形如“http://www.taobao.com”这样的末尾不带“/”的链接
			// 这种链接对应的filename为空
			a = query_split[0].split("//");
			a = a[a.length - 1].split("/");
			filename = a.length > 1 ? a.pop() : "";
	
			if (query_count > 0) {
				/**
				 * 由于存在类似 http://ju.atpanel.com/?scm=1005.10.1.703&url=http://www.tmall.com/go/act/tmall/mymx-ym.php?spm=1.1000386.222017.20&ad_id=&am_id=&cm_id=&pm_id=150100827263368085f8
				 * 这样的链接，注意其中有两个“?”，
				 * 这是一种跳转链接，其中 spm 参数需要加在后面一个 ? 之后，
				 * 经与梵易商量（2012-03-30），决定统一将 spm 参数加到 href 的最后一个 ? 之后
				 */
	//			a = href.split("?");
				search = query_split.pop(); // 取最后一个 ? 后的部分
				href = query_split.join("?"); // 最后一个 ? 之前的部分
			}
	
			if (search &&
				query_count > 1 && // # 只对两个及以上的“?”的 url 执行这样的检测
				search.indexOf("&") == -1 &&
	//			search.indexOf("=") == -1 &&
				search.indexOf("%") != -1) {
				/**
				 * 有一些页面，如 http://login.taobao.com/member/logout.jhtml?f=top&redirectURL=http://login.tmall.com/?spm=1007.100361.0.180%26redirect_url=http%253A%252F%252Ftemai.tmall.com%252F%253Fspm%253D3.1000473.197562.2%2526prt%253D1336367425196%2526prc%253D4
				 * spm 参数加在第二个 ? 之后，但是第二个 ? 之后的 & 都已经做了规范的转码，所以新添加的 spm 后面的 & 也要进行转码
				 */
				and_char = "%26";
			}
	
			href = href + "?spm=" + spm_prefix + spm_id
				+ (search ? (and_char + search) : "")
				+ (hash ? ("#" + hash) : "")
			;
	
			/**
			 * 添加文件名额外参数
			 * 由于在IE下，如果加了spm参数可能会引起文件后缀名被修改，
			 *
			 * 比如：
			 * 原始下载链接：
			 * http://download.alipay.com/sec/edit/aliedit.exe
			 *
			 * 加了spm参数之后：
			 * http://download.alipay.com/sec/edit/aliedit.exe?spm=a2107.1.1000341.10（有问题，IE下后缀名被修改为“.10”）
			 *
			 * 加了file参数之后：
			 * http://download.alipay.com/sec/edit/aliedit.exe?spm=a2107.1.1000341.10&file=aliedit.exe（没有问题）
			 *
			 * 因此，这儿会对形如文件下载的链接添加一个额外参数
			 */
			file_ext = isContain(filename, ".") ? filename.split(".").pop().toLowerCase() : "";
			if (file_ext) {
				if (({
						"png": 1,
						"jpg": 1,
						"jpeg": 1,
						"gif": 1,
						"bmp": 1,
						"swf": 1
					}).hasOwnProperty(file_ext)) {
					// 以图片后缀名结尾的链接不加 spm 参数
					return 0;
				}
	
				if (!search && query_count <= 1) {
					if (!hash && !({
							"htm": 1,
							"html": 1,
							"php": 1
						}).hasOwnProperty(file_ext)) {
						// 认为当前文件是一个下载文件，添加额外参数
						href += "&file=" + filename;
					}
				}
			}
	
			return href;
		}
	
	
		/**
		 * 判断当前 href 与当前页面的 page_url 之间除了“#”之后的内容是否完全相同
		 * @param href
		 */
		function spm_isHref_a_BookMark(href) {
			return href && (page_url.split("#")[0] == href.split("#")[0]);
		}
	
	
		/**
		 * 为一个 a 元素 的 href 添加 spm_id
		 * @param anchor {Element} a 元素
		 * @param a_spm_id {String} 完整的 spm_id，值为 a.b.c.d 四位，不包含最后的 pvid(logid)
		 * @param is_not_change_href {Boolean} 是否修改链接的 href
		 */
		function spm_anchorEnsureSPMId_inHref(anchor, a_spm_id, is_not_change_href) {
	
			anchor.setAttribute(s_DATA_SPM_ANCHOR_ID, a_spm_id);
	
			// 如果当前链接同时存在黄金令箭埋点，则退出，不执行 SPM 埋点
			if (is_not_change_href || tryToGetAttribute(anchor, s_SPM_CLICK)) return;
	
			// spm_id 末位加上 pvid
	
			// 取得 pvid 的值
	//		pvid = win["g_aplus_pv_id"];
	//		if (pvid) {
	//			a_spm_id += "." + pvid;
	//		}
	//		if (!pvid && (!spm_ab || spm_ab == default_ab)) {
	//			// 如果页面上没有指定pvid，同时没有指定spm A、B，那么不添加spm打点。
	//			return;
	//		}
	
			var href = tryToGetHref(anchor);
			var is_i_protocol = (
					tryToGetAttribute(anchor, s_SPM_DATA_PROTOCOL)
					|| spm_getModuleProtocol(anchor)
					|| spm_protocol
				) == "i";
	
			var i_protocol_beacon_url = hjlj_beacon_base + "tbspm.1.1?logtype=2&spm=";
	
			/**
			 * 如果链接的 href 为一个“#bookmark”的形式，
			 * 或链接为 <a href="javascript:..." 的形式，
			 * 或者为广告链接 （2012-05-18）
			 * 则跳过
			 */
			if (!href || spm_isAdLink(href)) return;
			if (!is_i_protocol && (
					isStartWith(href, "#")
					|| spm_isHref_a_BookMark(href)
					|| isStartWithProtocol(href.toLowerCase())
					|| spm_isAlipayUrl(href) // 2012-07-06 俊庭需求，
					/**
					 * 上面一行说明如下：
					 * 形如 http://download.alipay.com/sec/edit/aliedit.exe?spm=a2107.1.1000341.10 的链接，
					 * 在 IE 下载时，会下载为 aliedit.10，即将最后的“.10”当作文件后缀名了...
					 * 因此哲别需求：暂时对所有 alipay 链接都不加 spm 参数。
					 */
					|| spm_isAlipaySignedUrl(href)
				)) return;
	
			if (is_i_protocol) {
				/**
				 * 采用 i 协议
				 * 不修改链接地址，绑定 mousedown 事件，点击时发送额外打点请求
				 * /tbspm.1.1?spm=[.*]&url=[.*]，加cache缓存
				 */
				i_protocol_beacon_url += a_spm_id + "&url=" + encodeURIComponent(href) + "&cache=" + makeCacheNum();
				if (spm_current_anchor == anchor) {
					sendData(i_protocol_beacon_url);
				}
	
			} else if (!is_not_change_href) {
				/**
				 * 修改链接地址
				 */
				(href = spm_updateHrefWithSPMId(href, a_spm_id)) && spm_writeHref(anchor, href);
			}
	
		}
	
		/**
		 * 写链接 anchor 的 href 的值
		 * @param anchor {Element}
		 * @param href {String}
		 */
		function spm_writeHref(anchor, href) {
	
	//			anchor.href = " " + href;
			/**
			 * 说明，这儿在 a 的 href 前面加了一个空格，
			 * 因为在 IE6/7/8 下，如果 a 链接的 innerHTML 中包含“@”字符，或者以“www.*”开头，则
			 * 在修改 href 属性时，innerHTML 也会跟着变。（这是一个 IE 的 bug）
			 * 参见：http://oldj.net/article/ie-bug-at-href-innerHTML/
			 *
			 * 同时，这儿的 innerHTML 可能是 <img> 等节点，并且可能已经绑定事件，如果先记下 innerHTML
			 * 迟些再写回去可能会造成已绑定的事件丢失，所以用了最简单的在前面加个空格的方法。
			 *
			 */
	
			/**
			 * 说明：
			 * 在 href 前面加一个空格的方式副作用太多，
			 * 这儿尝试使用加一个空 <b></b> 节点然后再删除的方法。
			 * 见：http://oldj.net/article/ie-bug-at-href-innerHTML/
			 *
			 * 参考：https://github.com/kissyteam/kissy/blob/master/src/dom/src/attr.js#L215
			 */
			var b,
				inner_html = anchor.innerHTML;
	
			if (inner_html && inner_html.indexOf("<") == -1) {
				b = doc.createElement("b");
				b.style.display = "none";
				anchor.appendChild(b);
			}
			anchor.href = href;
	
			if (b) {
				anchor.removeChild(b);
			}
		}
	
	
		/**
		 * 某些 a 链接可能指定了 SPM 第四位参数的值，对这些链接，需要使用指定的值
		 * @param el
		 */
		function spm_getAnchor4thId_spm_d(el) {
			var spm_d, xpath, data;
	
			if (is_use_default_ab) {
				spm_d = "0";
			} else if (wh_in_page) {
				xpath = wh_getXPath(el);
				data = wh_spm_data[xpath];
				if (data) {
					spm_d = data["spmd"];
				}
	
	
			} else {
				spm_d = tryToGetAttribute(el, s_SPM_ATTR_NAME);
				if (!spm_d || !spm_d.match(/^d\w+$/)) {
					spm_d = "";
				}
			}
	
			return spm_d;
		}
	
	
		/**
		 * 取得 el 元素的父元素的 spm_id，如果存在的话。
		 * el 一定是 a 的父元素，不会是 a 链接
		 * 就近原则：
		 *     如果 el 有多个父元素带 data-spm 属性，则只取离它最近的那一层。
		 * @param el {HTMLElement|Node}
		 */
		function spm_spmGetParentSPMId(el) {
			var spm_c,
				tmp_val, spm_el = el;
	
			while (el
			&& el.tagName != s_HTML // 如果 el 是 HTML 节点，则下一句 el.getAttribute 在 IE 下会直接报错
			&& el.tagName != s_BODY // body 中的 data-spm 属性的含义为第二位，模块的 data-spm 属性不能放在 body 标签上
			&& el.getAttribute
				) {
	
				if (!wh_in_page) {
					tmp_val = el.getAttribute(s_SPM_ATTR_NAME);
				} else {
					// 在无痕列表中查找当前模块的数据
					tmp_val = wh_isModule(el);
				}
				if (tmp_val) {
					spm_c = tmp_val;
					spm_el = el;
					break;
				}
	
				if (!(el = el.parentNode)) break;
			}
	
			// 如果 spm_c 不合法，则将它置 0
			if (spm_c && !/^[\w\-\.]+$/.test(spm_c)) {
				spm_c = "0";
			}
	
			return {
				spm_c: spm_c,
				el: spm_el
			};
		}
	
		function spm_getSPMIdFromHref(href) {
			var m;
			return (href && (m = href.match(/&?\bspm=([^&#]*)/))) ? m[1] : "";
		}
	
		/**
		 * 处理非 spm 模块的链接（即未指定 c 位）
		 * @param el_a {Element}
		 * @param is_not_change_href {Boolean} 是否修改链接的 href
		 */
		function spm_dealNoneSPMLink(el_a, is_not_change_href) {
	
			var href = tryToGetHref(el_a),
				spm_in_href = spm_getSPMIdFromHref(href),
				a_spm = null,
				meta_spm_is_valid = spm_ab && spm_ab.split(".").length == 2;
	
			if (meta_spm_is_valid) {
	
				// 使用 meta 中的前 2 位做 spm 的前 2 位，第 3 位固定取 0，第 4 位为指定的值或 0
				a_spm = [spm_ab, 0, spm_getAnchor4thId_spm_d(el_a) || 0];
				spm_anchorEnsureSPMId_inHref(el_a, a_spm.join("."), is_not_change_href);
				return;
			}
	
			// 其它情况下，清除 href 中的 spm
			if (href && spm_in_href) {
				href = href.replace(/&?\bspm=[^&#]*/g, "")
					.replace(/&{2,}/g, "&")
					.replace(/\?&/, "?")
					.replace(/\?$/, "")
					.replace(/\?#/, "#")
				;
				spm_writeHref(el_a, href);
			}
		}
	
	
		/**
		 * 点到了一个 a/area 元素上，检查当前 a/area 元素是否需要记录 spm 打点
		 * @param el_a {Element}
		 * @param is_not_change_href {Boolean} 是否不修改链接的 href 属性
		 *         此项如果为 true，则本次操作只写该链接的 data-* 属性，但不修改 href
		 */
		function spm_spmAnchorChk(el_a, is_not_change_href) {
	
			spm_current_anchor = el_a;
	
			var a_spm_id = tryToGetAttribute(el_a, s_DATA_SPM_ANCHOR_ID),
				spm_data,
				spm_c;
	
			if (!a_spm_id) {
				/**
				 * 当前链接没有 spm_id
				 * 递归检查它的祖先元素是否为 spm 打点元素
				 */
	
				spm_data = spm_spmGetParentSPMId(el_a.parentNode);
				spm_c = spm_data.spm_c;
				if (!spm_c) {
					spm_dealNoneSPMLink(el_a, is_not_change_href);
	
					return;
				}
				if (is_use_default_ab) spm_c = "0";
	
				// 是 spm 模块，但是没有初始化，下面将其初始化
				spm_initSPMModule(spm_data.el, spm_c, is_not_change_href);
				spm_initSPMModule(spm_data.el, spm_c, is_not_change_href, true);
	
				// 初始化之后，链接 a 元素应该具备 data-spm-anchor-id 属性
	//				a_spm_id = tryToGetAttribute(el_a, s_DATA_SPM_ANCHOR_ID);
	
			} else {
				// 确保当前 a 元素有 spm_id 内容
				/**
				 * 这个操作主要是保证本 js 设置的值不会被老的 spm 打点 js 覆盖
				 * 老 spm js：http://a.tbcdn.cn/apps/tms/js/spm.js
				 * 将来可以将下面这行删除，以便节省资源。
				 */
				spm_anchorEnsureSPMId_inHref(el_a, a_spm_id, is_not_change_href);
			}
	
		}
	
	
		/**
		 * 清除一个 module 的所有编号数据
		 * 执行完这个方法后，再点击该模块时，该模块将重新编号
		 * @param el {Element}
		 */
		function spm_resetModule(el) {
	
			if (!el || el.nodeType != 1) return;
	
			tryToRemoveAttribute(el, s_SPM_MAX_IDX);
			tryToRemoveAttribute(el, s_AUTO_SPMD_MAX_IDX);
	
			var els_a = nodeListToArray(el.getElementsByTagName("a")),
				els_area = nodeListToArray(el.getElementsByTagName("area")),
				anchors = els_a.concat(els_area),
				i, len = anchors.length;
	
			for (i = 0; i < len; i++) {
				tryToRemoveAttribute(anchors[i], s_DATA_SPM_ANCHOR_ID);
			}
	
		}
	
	
		/**
		 * 取得用于广告的spm id
		 * @param el {Element} 非A/AREA元素
		 * @return {String}
		 */
		function spm_getParamForAD(el) {
			var parent_node = el.parentNode;
			if (!parent_node) return "";
	
			var spm_d = el.getAttribute(s_SPM_ATTR_NAME);
			var parent_obj = spm_spmGetParentSPMId(parent_node);
			var spm_c = parent_obj.spm_c || 0;
	
			if (spm_c && spm_c.indexOf(".") != -1) {
				// 处理a.b.c这样的情况
				spm_c = spm_c.split(".");
				spm_c = spm_c[spm_c.length - 1];
			}
	
			var spm_abc = spm_ab + "." + spm_c;
			var spm_d_idx = spm_d_for_ad[spm_abc] || 0;
	
			spm_d_idx++;
			spm_d_for_ad[spm_abc] = spm_d_idx;
	
			spm_d = spm_d || spm_d_idx;
	
			// 注意这儿d位有一个“i”前缀，表示广告iframe
			return spm_abc + ".i" + spm_d;
		}
	
	
		/**
		 * 返回指定元素的 SPM 参数值
		 * @param el {Element}
		 * @return {Object}
		 */
		function spm_getSPMParam(el) {
	
			var tag_name = el.tagName;
			var anchor_id;
	
			pvid = win["g_aplus_pv_id"];
	
			if (tag_name != "A" && tag_name != "AREA") {
				anchor_id = spm_getParamForAD(el);
			} else {
				spm_spmAnchorChk(el, s_true);
				anchor_id = tryToGetAttribute(el, s_DATA_SPM_ANCHOR_ID);
			}
			anchor_id = (anchor_id || "0.0.0.0").split(".");
	
			return {
				a: anchor_id[0],
				b: anchor_id[1],
				c: anchor_id[2],
				d: anchor_id[3]
			};
		}
	
		/**
		 * 返回指定元素的 SPM 参数值
		 * @param el {Element}
		 * @return {String}
		 */
		function spm_forwap(el) {
			var spm_obj = spm_getSPMParam(el);
			return spm_obj["a"] + "." + spm_obj["b"] + "." + spm_obj["c"] + "." + spm_obj["d"];
		}
	
		/**
		 * 无痕SPM打点初始化
		 */
		function init_wh() {
			if (wh_spm_initialized) return;
	
			if (!win["spmData"]) {
				if (!is_dom_ready) {
					setTimeout(init_wh, 100);
				}
				return;
			}
			wh_spm_initialized = s_true;
	
			/** spmData 数据格式形如：
			 *
			 * {'data': [
			 *         {
			 *             "spmc": "1000891",
			 *             "spmd": "",
			 *             "xpath": "/html[1]/body[1]/table[2]/tbody[1]/tr[1]/td[2]/div[1]/div[3]"
			 *         }
			 * ]};
			 */
	
			var data = win["spmData"]["data"],
				i, l,
				idata,
				xpath;
	
			if (!data || !isArray(data)) return;
	
			for (i = 0, l = data.length; i < l; i++) {
				idata = data[i];
				xpath = idata.xpath;
				wh_spm_data[xpath] = {
					spmc: idata.spmc,
					spmd: idata.spmd
				};
			}
		}
	
		/**
		 * 监视带data-spm-src属性的iframe
		 * 查找并更新它们的src
		 */
		function watchSPMIframe() {
			var iframes = doc.getElementsByTagName("iframe");
			var ifr;
			var i;
			var l = iframes.length;
			var spm_src;
			var spm_id;
	
			for (i = 0; i < l; i++) {
				ifr = iframes[i];
				if (ifr.src || !(spm_src = tryToGetAttribute(ifr, s_SPM_SRC))) continue;
				spm_id = spm_getSPMParam(ifr);
				if (spm_id) {
					spm_id = [
						spm_id["a"], spm_id["b"], spm_id["c"], spm_id["d"], spm_id["e"]
					].join(".");
					ifr.src = spm_updateHrefWithSPMId(spm_src, spm_id);
				} else {
					ifr.src = spm_src;
				}
			}
		}
	
		function init_watchSPMIframe() {
			var count = 0;
			var sleep_time = 500;
	
			function f() {
				count++;
				if (count > 10) sleep_time = 3000;
				watchSPMIframe();
				setTimeout(f, sleep_time);
			}
	
			f();
		}
	
		/**
		 * 航旅独有:在无痕埋点中加入gokey用于传递额外参数
		 * @returns {string}
	     */
		function createPrismKey(){
			if(window._prism_lk){
				return "_prism_lk=" + encodeURIComponent(JSON.stringify(window._prism_lk));
			}
			return "";
		}
	
		function onSPMClick(el, data) {
			// <div data-spm-click="..."> .. </div>
			// data 形如：gostr=/tbdetail;locaid=d1;unknowkey=123;k1=v1&k2=v2&k3=v3
	
			var name_gostr = "gostr";
			var name_locaid = "locaid";
			var gostr;
			var locaid;
			var dict = {};
			parseMetaContent(data, dict);
	
	
	
			gostr = dict[name_gostr];
			locaid = dict[name_locaid];
	
			// 参数不完整，退出
			if (!gostr || !locaid) return;
			if (isStartWith(gostr, "/")) gostr = gostr.substr(1);
	
			var spm_params = spm_getSPMParam(el);
			var spm_id = [
				spm_params.a,
				spm_params.b,
				spm_params.c,
				locaid
			].join(".");
			var req_path = gostr + "." + spm_id;
	
			var params = [
				"logtype=2",
				"cache=" + Math.random(),
				"autosend=1",
				"spm-cnt="+ [spm_params.a,spm_params.b,0,0].join('.'),
				createPrismKey()//航旅独有
			];
			var k;
			for (k in dict) {
				if (!dict.hasOwnProperty(k)) continue;
				if (k != name_gostr && k != name_locaid) {
					params.push(k + "=" + dict[k]);
				}
			}
			if (params.length > 0) {
				req_path += "?" + params.join("&");
			}
	
			// 同步到 UT
	
			//------------- 航旅私有 追加当前页面的URL查询参数到无痕打点日志 start --------------
			var urlParams = location.search.slice(1);
			var urlHash = location.hash.slice(1);
			params.push("_h5params=" + encodeURIComponent(urlParams));
			params.push("_h5hash="   + encodeURIComponent(urlHash));
			//------------- 航旅私有 追加当前页面的URL查询参数到无痕打点日志 end --------------
			var windVaneData,
				logkeyargs = {
					gmkey: '',
					gokey: params.length > 0 ? params.join('&') : ''
				};
	
			if (win.goldlog && win.goldlog.call && (windVaneData = win.goldlog.windVaneData)) {
	
				try {
					logkeyargs = JSON.stringify(logkeyargs);
					if (logkeyargs == "{}") {
						logkeyargs = "";
					}
				} catch (err) {
					logkeyargs = "";
				}
	
				windVaneData["functype"] = "2101";
				windVaneData["logkey"] = '/' + gostr + '.' + spm_id;
				windVaneData["logkeyargs"] = logkeyargs;
				windVaneData["extendargs"] = "";
	
				delete windVaneData["spmcnt"];
				delete windVaneData["spmpre"];
				delete windVaneData["lzsid"];
	
				win.goldlog.call("WVTBUserTrack", "toUT", windVaneData);
			}
	
			sendData(hjlj_beacon_base + req_path);
			el.setAttribute(s_DATA_SPM_ANCHOR_ID, spm_id);
		}
	
		function hjlj_spmClick(el) {
	
			var val;
			while (el && el.tagName != s_HTML) {
				val = tryToGetAttribute(el, s_SPM_CLICK);
				if (!val) {
					el = el.parentNode;
					continue;
				}
	
				onSPMClick(el, val);
				break;
			}
		}
	
		function init_hjlj_spmClick() {
			if (isTouchEnabled) {
				addEventListener(doc, "tap", hjlj_spmClick);
			} else {
				addEventListener(doc, "mousedown", hjlj_spmClick);
			}
		}
	
		function doTrace(el) {
			var tag_name;
			while (el && (tag_name = el.tagName)) {
				if (tag_name == "A" || tag_name == "AREA") {
					// 点到了链接上
					spm_spmAnchorChk(el, s_false);
					break;
				} else if (tag_name == s_BODY || tag_name == s_HTML) break;
	
				el = el.parentNode;
			}
		}
	
	
		// ----------
		// 以上都是各种定义，下面开始是 SPM 执行方法
	
		if (isContain2(page_url, [ // spm 黑名单
				"xiaobai.com",
				"admin.taobao.org"
			])) return;
	
		onDOMReady(function () {
			is_dom_ready = s_true;
		});
		init_getGlobalSPMId();
		init_wh(); // 无痕初始化
		init_watchSPMIframe();
		init_hjlj_spmClick();
	
		/**
		 * 绑定 document 的 mousedown 事件，当元素被点击时判断它是否为链接，并检查是否需要更新其 spm_id
		 */
		if (isTouchEnabled) {
			addEventListener(doc, "tap", doTrace);
		} else {
			addEventListener(doc, "mousedown", doTrace);
			addEventListener(doc, "keydown", doTrace);
		}
	
	
		/**
		 * 全局 SPM 方法
		 * @see http://wiki.ued.taobao.net/doku.php?id=team:udc:f2e:unified-beacon:spm-openapi
		 * @type {Object}
		 */
		win.g_SPM = {
			resetModule: spm_resetModule,
			anchorBeacon: spm_spmAnchorChk,
			getParam: spm_getSPMParam,
			// 2014-06-04 梵易需求,配合无线端
			spm: spm_forwap
		};
	
	})();


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * User: 胡伯 <hubo.hb@taobao.com>,勇智 <yongzhi.wyz@taobao.com>
	 * 为广告点击加入spm.依赖spm.js
	 */
	
	;(function () {
	    var win = window,
	        doc = document,
	        loc = location,
	        page_url = loc.href,
	        sw = win._alimm_spmact_on_;
	    //spmact是否开启状态，默认为开启
	    if(typeof sw == "undefined"){
	        sw = 1;
	//        var p1 = Math.floor(Math.random()*100+1),
	//            p2 = 50;
	//        sw = ((p1 <= p2) ? 1 : 0);
	    }
	    if(sw == 1){
	        sw = 1;
	    }
	    if(sw == 0){
	        sw = 0;
	    }
	
	
	    if(!sw){
	        return;
	    }
	    try{
	        //在CRM中诡异的报错：getParam undefined
	        var spmapi = win.g_SPM.getParam;
	    }catch(e){
	        spmapi = function(){
	            return {
	                a:0,b:0,c:0,d:0,e:0
	            }
	        };
	    }
	    var bInIframe = true;
	    try {
	        bInIframe = (self.location != top.location);
	    } catch (e) {
	    }
	    var sATTR_DATA_SPM_ACT_ID = "data-spm-act-id";
	    var ad_links = [
	        "mclick.simba.taobao.com", // 无线点击
	        "click.simba.taobao.com", // kgb的点击
	        "click.tanx.com", // tanx的点击
	        "click.mz.simba.taobao.com", // mama的点击
	        "click.tz.simba.taobao.com", // mama的点击
	        "redirect.simba.taobao.com", // redirect点击
	        "rdstat.tanx.com", // redirect地址
	        "stat.simba.taobao.com", // 隐樵 2012-5-20
	        "s.click.taobao.com" // 隐樵 2012-5-20
	    ]
	    /**
	     * 绑定事件
	     * @param obj {Element} DOM 元素
	     * @param event_type
	     * @param f
	     */
	    // 当前浏览器是否为 IE（是否支持 document.attachEvent）
	    var atta = !!doc.attachEvent;
	    var s_attachEvent = "attachEvent";
	    var s_addEventListener = "addEventListener";
	    var onevent = atta ? s_attachEvent : s_addEventListener;
	
	    function addEventListener(obj, event_type, f) {
	        obj[onevent](
	            (atta ? "on" : "") + event_type,
	            function (e) {
	                e = e || win.event;
	                var el = e.target || e.srcElement;
	                f(e, el);
	            },
	            false
	        );
	    }
	    function fnCurrentURLSpm() {
	        if (/&?\bspm=[^&#]*/.test(location.href)) {
	            return location.href.match(/&?\bspm=[^&#]*/ig)[0].split("=")[1]
	        }
	        return "";
	    }
	    function fnUpdateHrefWithSPMId(href, spm_id) {
	        // 去掉现有的 href 中的 spm 参数
	        if (href && /&?\bspm=[^&#]*/.test(href)) {
	            href = href.replace(/&?\bspm=[^&#]*/g, "")
	                .replace(/&{2,}/g, "&")
	                .replace(/\?&/, "?")
	                .replace(/\?$/, "")
	            ;
	        }
	
	        if (!spm_id) return href;
	
	        // 在 href 中插入新的 spm 参数
	        var search, hash, a,
	            and_char = "&",
	            query_split,
	            query_count,
	            filename,
	            file_ext;
	
	        if (href.indexOf("#") != -1) {
	            a = href.split("#");
	            href = a.shift();
	            hash = a.join("#"); // 取第一个 # 后的部分
	        }
	        query_split = href.split("?");
	        query_count = query_split.length - 1;
	
	        // 下面处理形如“http://www.taobao.com”这样的末尾不带“/”的链接
	        // 这种链接对应的filename为空
	        a = query_split[0].split("//");
	        a = a[a.length - 1].split("/");
	        filename = a.length > 1 ? a.pop() : "";
	
	        if (query_count > 0) {
	            /**
	             * 由于存在类似 http://ju.atpanel.com/?scm=1005.10.1.703&url=http://www.tmall.com/go/act/tmall/mymx-ym.php?spm=1.1000386.222017.20&ad_id=&am_id=&cm_id=&pm_id=150100827263368085f8
	             * 这样的链接，注意其中有两个“?”，
	             * 这是一种跳转链接，其中 spm 参数需要加在后面一个 ? 之后，
	             * 经与梵易商量（2012-03-30），决定统一将 spm 参数加到 href 的最后一个 ? 之后
	             */
	//			a = href.split("?");
	            search = query_split.pop(); // 取最后一个 ? 后的部分
	            href = query_split.join("?"); // 最后一个 ? 之前的部分
	        }
	
	        if (search &&
	            query_count > 1 && // # 只对两个及以上的“?”的 url 执行这样的检测
	            search.indexOf("&") == -1 &&
	//			search.indexOf("=") == -1 &&
	            search.indexOf("%") != -1) {
	            /**
	             * 有一些页面，如 http://login.taobao.com/member/logout.jhtml?f=top&redirectURL=http://login.tmall.com/?spm=1007.100361.0.180%26redirect_url=http%253A%252F%252Ftemai.tmall.com%252F%253Fspm%253D3.1000473.197562.2%2526prt%253D1336367425196%2526prc%253D4
	             * spm 参数加在第二个 ? 之后，但是第二个 ? 之后的 & 都已经做了规范的转码，所以新添加的 spm 后面的 & 也要进行转码
	             */
	            and_char = "%26";
	        }
	
	        href = href + "?spm=" + spm_id
	            + (search ? (and_char + search) : "")
	            + (hash ? ("#" + hash) : "")
	        ;
	
	        /**
	         * 添加文件名额外参数
	         * 由于在IE下，如果加了spm参数可能会引起文件后缀名被修改，
	         *
	         * 比如：
	         * 原始下载链接：
	         * http://download.alipay.com/sec/edit/aliedit.exe
	         *
	         * 加了spm参数之后：
	         * http://download.alipay.com/sec/edit/aliedit.exe?spm=a2107.1.1000341.10（有问题，IE下后缀名被修改为“.10”）
	         *
	         * 加了file参数之后：
	         * http://download.alipay.com/sec/edit/aliedit.exe?spm=a2107.1.1000341.10&file=aliedit.exe（没有问题）
	         *
	         * 因此，这儿会对形如文件下载的链接添加一个额外参数
	         */
	        file_ext = filename.indexOf(".") > -1 ? filename.split(".").pop().toLowerCase() : "";
	        if (file_ext) {
	            if (({
	                "png":1,
	                "jpg":1,
	                "jpeg":1,
	                "gif":1,
	                "bmp":1,
	                "swf":1
	            }).hasOwnProperty(file_ext)) {
	                // 以图片后缀名结尾的链接不加 spm 参数
	                return 0;
	            }
	
	            if (!search && query_count <= 1) {
	                if (!hash && !({
	                    "htm":1,
	                    "html":1,
	                    "php":1
	                }).hasOwnProperty(file_ext)) {
	                    // 认为当前文件是一个下载文件，添加额外参数
	                    href += "&file=" + filename;
	                }
	            }
	        }
	        return href;
	    };
	    function fnReplacePid(url) {
	        //http://cb.alimama.cn/js/replace_pid.js
	        var str = window.location.href;
	        var pid = str.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/i);
	        var pvid = str.match(/[&\?](pvid=[^&]*)/i);
	        var reg_26 = new RegExp("%3Dmm_\\d+_\\d+_\\d+", "ig");
	        var reg = new RegExp("mm_\\d+_\\d+_\\d+", "ig");
	
	        function replace_refpos(href) {
	            href = href.replace(/refpos[=(%3D)]\w*/ig, refpos).replace(reg_26,
	                "%3D" + pid + "%26" + pvid.replace("=", "%3D")).replace(
	                reg, pid);
	            if (pvid.length > 0) {
	                href += "&" + pvid;
	            }
	            return href;
	        }
	
	        if (pvid && pvid[1]) {
	            pvid = pvid[1];
	        } else {
	            pvid = "";
	        }
	        var refpos = str
	            .match(/(refpos=(\d{0,24}_\d{0,24}_\d{0,24})?(,[a-z]+)?)(,[a-z]+)?/i);
	        if (refpos && refpos[0]) {
	            refpos = refpos[0];
	        } else {
	            refpos = "";
	        }
	        if (pid) {
	            pid = pid[0];
	            return replace_refpos(url);
	            //不明需求，从http://cb.alimama.cn/js/replace_pid.min.js中移植过来
	//        var w = str.match(/w=mmp4ptest[^&]{0,}/i);
	//        if (w) {
	//            var wreg = new RegExp("w=mmp4ptest[^&]{0,}", "gmi");
	//            for ( var i = 0; i < as.length; i++) {
	//                as[i].href = as[i].href.replace(wreg, w[0]);
	//            }
	//            for ( var i = 0; i < iframe.length; i++) {
	//                iframe[i].src = iframe[i].src.replace(wreg, w[0]);
	//            }
	//        }
	        }
	        return url;
	    };
	    function domReady(f) {
	        var kissy = win["KISSY"];
	        if (kissy) {
	            kissy.ready(f);
	        } else if (win.jQuery) {
	            jQuery(doc).ready(f);
	        } else {
	            if (doc.readyState === "complete") {
	                f();
	            } else {
	                addEventListener(win, "load", f);
	            }
	        }
	    };
	
	    function tryToGetAttribute(element, attr_name) {
	        return element && element.getAttribute ? (element.getAttribute(attr_name) || "") : "";
	    }
	
	    /**
	     * 判断当前 url 是否广告链接
	     * @param url {String}
	     */
	    function spm_isAdLink(url) {
	        if (!url)return;
	        var i, len = ad_links.length;
	
	        for (i = 0; i < len; i++) {
	            if (url.indexOf(ad_links[i]) > -1) return true;
	        }
	
	        return false;
	    }
	
	    //替换现有url中的spm参数，同spm.js中spm_updateHrefWithSPMId参数
	    function spm_updateHrefWithSPMId(href, spm_id) {
	        // 去掉现有的 href 中的 spm 参数
	        if (href && /&?\bspm=[^&#]*/.test(href)) {
	            href = href.replace(/&?\bspm=[^&#]*/g, "")
	                .replace(/&{2,}/g, "&")
	                .replace(/\?&/, "?")
	                .replace(/\?$/, "")
	            ;
	        }
	
	        if (!spm_id) return href;
	
	        // 在 href 中插入新的 spm 参数
	        var search, hash, a,
	            and_char = "&",
	            query_split,
	            query_count,
	            filename,
	            file_ext;
	
	        if (href.indexOf("#") != -1) {
	            a = href.split("#");
	            href = a.shift();
	            hash = a.join("#"); // 取第一个 # 后的部分
	        }
	        query_split = href.split("?");
	        query_count = query_split.length - 1;
	
	        // 下面处理形如“http://www.taobao.com”这样的末尾不带“/”的链接
	        // 这种链接对应的filename为空
	        a = query_split[0].split("//");
	        a = a[a.length - 1].split("/");
	        filename = a.length > 1 ? a.pop() : "";
	
	        if (query_count > 0) {
	            /**
	             * 由于存在类似 http://ju.atpanel.com/?scm=1005.10.1.703&url=http://www.tmall.com/go/act/tmall/mymx-ym.php?spm=1.1000386.222017.20&ad_id=&am_id=&cm_id=&pm_id=150100827263368085f8
	             * 这样的链接，注意其中有两个“?”，
	             * 这是一种跳转链接，其中 spm 参数需要加在后面一个 ? 之后，
	             * 经与梵易商量（2012-03-30），决定统一将 spm 参数加到 href 的最后一个 ? 之后
	             */
	//			a = href.split("?");
	            search = query_split.pop(); // 取最后一个 ? 后的部分
	            href = query_split.join("?"); // 最后一个 ? 之前的部分
	        }
	
	        if (search &&
	            query_count > 1 && // # 只对两个及以上的“?”的 url 执行这样的检测
	            search.indexOf("&") == -1 &&
	//			search.indexOf("=") == -1 &&
	            search.indexOf("%") != -1) {
	            /**
	             * 有一些页面，如 http://login.taobao.com/member/logout.jhtml?f=top&redirectURL=http://login.tmall.com/?spm=1007.100361.0.180%26redirect_url=http%253A%252F%252Ftemai.tmall.com%252F%253Fspm%253D3.1000473.197562.2%2526prt%253D1336367425196%2526prc%253D4
	             * spm 参数加在第二个 ? 之后，但是第二个 ? 之后的 & 都已经做了规范的转码，所以新添加的 spm 后面的 & 也要进行转码
	             */
	            and_char = "%26";
	        }
	
	        href = href + "?spm=" + spm_id
	            + (search ? (and_char + search) : "")
	            + (hash ? ("#" + hash) : "")
	        ;
	
	        file_ext = filename.indexOf(".") > -1 ? filename.split(".").pop().toLowerCase() : "";
	        if (file_ext) {
	            if (({
	                "png":1,
	                "jpg":1,
	                "jpeg":1,
	                "gif":1,
	                "bmp":1,
	                "swf":1
	            }).hasOwnProperty(file_ext)) {
	                // 以图片后缀名结尾的链接不加 spm 参数
	                return 0;
	            }
	
	            if (!search && query_count <= 1) {
	                if (!hash && !({
	                    "htm":1,
	                    "html":1,
	                    "php":1
	                }).hasOwnProperty(file_ext)) {
	                    // 认为当前文件是一个下载文件，添加额外参数
	                    href += "&__file=" + filename;
	                }
	            }
	        }
	
	        return href;
	    }
	
	    function spm_spmAnchor(el) {
	        if (spm_isAdLink(el.href)) {
	            var a_spm_id = tryToGetAttribute(el, sATTR_DATA_SPM_ACT_ID);
	            if (!a_spm_id) {
	                /**
	                 * 当前链接没有 spm_id
	                 * 递归检查它的祖先元素是否为 spm 打点元素
	                 */
	                if (!spmapi)return;
	                var oaspm = spmapi(el), saspm = [oaspm.a, oaspm.b, oaspm.c, oaspm.d, oaspm.e].join(".");
	                if (bInIframe) {
	                    //在iframe里时，链接上的spm要带上ifram上的spm同时，e位是没有必要的
	                    //如果父级的spm为空的，那么取0.0.0.0.0
	                    saspm = [oaspm.a || '0', oaspm.b || '0', oaspm.c || '0', oaspm.d || '0'].join(".");
	                    saspm = ( fnCurrentURLSpm() || '0.0.0.0.0' ) + "_" + saspm;
	                }
	                var spmhref = spm_updateHrefWithSPMId(el.href, saspm);
	                el.href = spmhref;
	                el.setAttribute(sATTR_DATA_SPM_ACT_ID, saspm);
	            }
	        }
	        el = undefined;
	    };
	
	    addEventListener(doc, "mousedown", function (e, el) {
	        var tag_name, i = 0;
	        while (el && (tag_name = el.tagName) && i < 5) {
	            if (tag_name == "A" || tag_name == "AREA") {
	                // 点到了链接上
	                spm_spmAnchor(el);
	                break;
	            } else if (tag_name == "BODY" || tag_name == "HTML") break;
	
	            el = el.parentNode;
	            i++;
	        }
	    });
	
	    /**
	     * 处理iframe
	     */
	    domReady(function () {
	        var iframe = document.getElementsByTagName("iframe");
	        var src, worked;
	        for (var i = 0; i < iframe.length; i++) {
	            src = tryToGetAttribute(iframe[i], "mmsrc");
	            worked = tryToGetAttribute(iframe[i], "mmworked");
	            var oifrspm = spmapi(iframe[i]);
	            var sifrspm = [oifrspm.a || '0', oifrspm.b || '0', oifrspm.c || '0', oifrspm.d || '0', oifrspm.e || '0'].join(".");
	
	            if (src && !worked) {
	                if (bInIframe) {
	                    //在iframe里时，第二段的spm值里的e位要去掉
	                    sifrspm = [oifrspm.a || '0', oifrspm.b || '0', oifrspm.c || '0', oifrspm.d || '0'].join(".");
	                    sifrspm = fnCurrentURLSpm() + "_" + sifrspm;
	                }
	
	                iframe[i].src = fnUpdateHrefWithSPMId(fnReplacePid(src), sifrspm);
	                iframe[i].setAttribute("mmworked", "mmworked");
	            }else{
	                //为了保持d位序列的延续，没有加入mmsrc的也要产生编号
	                iframe[i].setAttribute(sATTR_DATA_SPM_ACT_ID, sifrspm);
	            }
	        }
	    });
	
	})();


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * 旅行独有埋点逻辑实现 WAP 版
	 * @author shuke.cl <shuke.cl@taobao.com>
	 *
	 *
	 **/
	
	(function () {
	
	    var win = window,
	        doc = document;
	    /**
	     * 简单的AOP实现
	     * @param obj
	     * @param method
	     * @param fn
	     */
	    function before(obj,method,fn){
	        obj["$$_" + method] = obj[method];
	        obj[method] = function(){
	            fn.apply(obj,arguments);
	            obj["$$_" + method].apply(obj,arguments);
	        }
	    }
	
	    /**
	     * 引入 js 文件
	     * @param src
	     */
	    function importScript (src) {
	        var d = doc.createElement("script");
	        d.type = "text/javascript";
	        d.async = true;
	        d.src = src;
	        doc.getElementsByTagName("head")[0].appendChild(d);
	    }
	
	    /**
	     * 引入安全拦截脚本 @踊跃 @佳宸
	     * @param n
	     */
	    (function () {
	        if (doc.readyState === "complete") {
	            // 如果页面已经加载完成，直接执行函数
	            importScript("//g.alicdn.com/secdev/sufei_data/index.js");
	        }
	        else {
	            win.addEventListener("load", function () {
	                importScript("//g.alicdn.com/secdev/sufei_data/index.js");
	            }, false);
	        }
	    })();
	
	})();


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * Vue.js v1.0.17
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	
	if (false) {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      ("production") !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
	var reservedTagRE = /^(slot|partial|component)$/;
	
	var isUnknownElement = undefined;
	if (false) {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (false) {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function assertProp(prop, value) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    ("production") !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      ("production") !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      ("production") !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    ("production") !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  ("production") !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (false) {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        ("production") !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (false) {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        ("production") !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}
	
	/**
	 * Assert asset exists
	 */
	
	function assertAsset(val, type, id) {
	  if (!val) {
	    ("production") !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		initProp: initProp,
		assertProp: assertProp,
		coerceProp: coerceProp,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    if (false) {
	      this._runtimeData = options.data;
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (false) {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (false) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (false) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    ("production") !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    ("production") !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    ("production") !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (devtools) {
	    devtools.emit('flush');
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (false) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = Object.create(null);
	  this.newDeps = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep;
	    if (!this.deps[id]) {
	      this.deps[id] = dep;
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (false) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (false) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      ("production") !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDeps = Object.create(null);
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var ids = Object.keys(this.deps);
	  var i = ids.length;
	  while (i--) {
	    var id = ids[i];
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (false) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (false) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps);
	  var i = depIds.length;
	  while (i--) {
	    this.deps[depIds[i]].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var depIds = Object.keys(this.deps);
	    var i = depIds.length;
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var FOR = 2000;
	var IF = 2000;
	var SLOT = 2100;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      ("production") !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value;
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    defineReactive(scope, alias, value);
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        ("production") !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          ("production") !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      ("production") !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (false) {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}
	
	var vIf = {
	
	  priority: IF,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseFactory = new FragmentFactory(next._context || this.vm, next);
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	      this.factory = new FragmentFactory(this.vm, el);
	    } else {
	      ("production") !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseFactory && !this.elseFrag) {
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      ("production") !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      ("production") !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      ("production") !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        ("production") !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (false) {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    ("production") !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i]);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (key && (!value || !contains(value, key))) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	function contains(value, key) {
	  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      ("production") !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id;
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (false) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (false) {
	      if (current) current._inactive = true;
	      target._inactive = false;
	    }
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (false) {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true;
	  var self = this;
	  setTimeout(function () {
	    self.justEntered = false;
	  }, 17);
	
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (false) {
	      warn('Do not use $data as prop.');
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      ("production") !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (false) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (false) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (false) {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.');
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, getDefault(vm, options));
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === '' ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    ("production") !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// terminal directives
	var terminalDirectives = ['for', 'if'];
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (true) {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (false) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (false) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    value = el.getAttribute('v-' + dirName);
	    if (value != null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    // #2366 or custom terminal directive
	    def: def || resolveAsset(options, 'directives', dirName)
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (false) {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName);
	
	              if (false) {
	                assertAsset(dirDef, 'directive', dirName);
	              }
	
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        ("production") !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    ("production") !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value)) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function scanSlots(template, content, vm) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = {};
	  var slots = template.querySelectorAll('slot');
	  if (slots.length) {
	    var hasDefault, slot, name;
	    for (var i = 0, l = slots.length; i < l; i++) {
	      slot = slots[i];
	      /* eslint-disable no-cond-assign */
	      if (name = slot.getAttribute('name')) {
	        select(slot, name);
	      } else if (false) {
	        warn('<slot :name="' + name + '">: slot names cannot be dynamic.');
	      } else {
	        // default slot
	        hasDefault = true;
	      }
	      /* eslint-enable no-cond-assign */
	    }
	    if (hasDefault) {
	      contents['default'] = extractFragment(content.childNodes, content);
	    }
	  }
	
	  function select(slot, name) {
	    // named slot
	    var selector = '[slot="' + name + '"]';
	    var nodes = content.querySelectorAll(selector);
	    if (nodes.length) {
	      contents[name] = extractFragment(nodes, content);
	    }
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (node.parentNode === parent) {
	      if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	        parent.removeChild(node);
	        node = parseTemplate(node);
	      }
	      frag.appendChild(node);
	    }
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		terminalDirectives: terminalDirectives,
		transclude: transclude,
		scanSlots: scanSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      ("production") !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var propsData = this._data;
	    var optionsDataFn = this.$options.data;
	    var optionsData = optionsDataFn && optionsDataFn();
	    var runtimeData;
	    if (false) {
	      runtimeData = (typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData) || {};
	      this._runtimeData = null;
	    }
	    if (optionsData) {
	      this._data = optionsData;
	      for (var prop in propsData) {
	        if (false) {
	          warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
	        }
	        if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
	          set(optionsData, prop, propsData[prop]);
	        }
	      }
	    }
	    var data = this._data;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      this._proxy(key);
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        if (typeof handler === 'function') {
	          handler._fromParent = true;
	          vm.$on(name.replace(eventRE), handler);
	        } else if (false) {
	          warn('v-on:' + name + '="' + attrs[i].value + '"' + (vm.$options.name ? ' on component <' + vm.$options.name + '>' : '') + ' expects a function value, got ' + handler);
	        }
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        ("production") !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (false) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = params[i];
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (false) {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (false) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // scan for slot distribution before compiling the content
	    // so that it's decoupeld from slot/directive compilation order
	    scanSlots(el, options._content, this);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (false) {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (id, cb) {
	    var factory = resolveAsset(this.$options, 'components', id);
	    if (false) {
	      assertAsset(factory, 'component', id);
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          ("production") !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      for (var key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      ("production") !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (false) {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains$1(item.$key, search) || contains$1(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains$1(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains$1(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains$1(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains$1(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (false) {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (false) {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.17';
	
	// devtools global hook
	/* istanbul ignore next */
	if (devtools) {
	  devtools.emit('init', Vue);
	} else if (false) {
	  console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	;(function () {
	
	  var vueTouch = {}
	  var Hammer =  true
	    ? __webpack_require__(16)
	    : window.Hammer
	  var gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe']
	  var directions = ['up', 'down', 'left', 'right', 'horizontal', 'vertical']
	  var customeEvents = {}
	
	  if (!Hammer) {
	    throw new Error('[vue-touch] cannot locate Hammer.js.')
	  }
	
	  // exposed global options
	  vueTouch.config = {}
	
	  vueTouch.install = function (Vue) {
	
	    Vue.directive('touch', {
	
	      isFn: true,
	      acceptStatement: true,
	      priority: Vue.directive('on').priority,
	
	      bind: function () {
	        if (!this.el.hammer) {
	          this.el.hammer = new Hammer.Manager(this.el)
	        }
	        var mc = this.mc = this.el.hammer
	        // determine event type
	        var event = this.arg
	        if (!event) {
	          console.warn('[vue-touch] event type argument is required.')
	        }
	        var recognizerType, recognizer
	
	        if (customeEvents[event]) {
	          // custom event
	          var custom = customeEvents[event]
	          recognizerType = custom.type
	          recognizer = new Hammer[capitalize(recognizerType)](custom)
	          recognizer.recognizeWith(mc.recognizers)
	          mc.add(recognizer)
	        } else {
	          // built-in event
	          for (var i = 0; i < gestures.length; i++) {
	            if (event.indexOf(gestures[i]) === 0) {
	              recognizerType = gestures[i]
	              break
	            }
	          }
	          if (!recognizerType) {
	            console.warn('[vue-touch] invalid event type: ' + event)
	            return
	          }
	          recognizer = mc.get(recognizerType)
	          if (!recognizer) {
	            // add recognizer
	            recognizer = new Hammer[capitalize(recognizerType)]()
	            // make sure multiple recognizers work together...
	            recognizer.recognizeWith(mc.recognizers)
	            mc.add(recognizer)
	          }
	          // apply global options
	          var globalOptions = vueTouch.config[recognizerType]
	          if (globalOptions) {
	            guardDirections(globalOptions)
	            recognizer.set(globalOptions)
	          }
	          // apply local options
	          var localOptions =
	            this.el.hammerOptions &&
	            this.el.hammerOptions[recognizerType]
	          if (localOptions) {
	            guardDirections(localOptions)
	            recognizer.set(localOptions)
	          }
	        }
	        this.recognizer = recognizer
	      },
	
	      update: function (fn) {
	        var mc = this.mc
	        var vm = this.vm
	        var event = this.arg
	        // teardown old handler
	        if (this.handler) {
	          mc.off(event, this.handler)
	        }
	        if (typeof fn !== 'function') {
	          console.warn(
	            '[vue-touch] invalid handler function for v-touch: ' +
	            this.arg + '="' + this.descriptor.raw
	          )
	        } else {
	          mc.on(event, fn)
	        }
	      },
	
	      unbind: function () {
	        this.mc.off(this.arg, this.handler)
	        if (!Object.keys(this.mc.handlers).length) {
	          this.mc.destroy()
	          this.el.hammer = null
	        }
	      }
	    })
	
	    Vue.directive('touch-options', {
	      priority: Vue.directive('on').priority + 1,
	      update: function (options) {
	        var opts = this.el.hammerOptions || (this.el.hammerOptions = {})
	        if (!this.arg) {
	          console.warn('[vue-touch] recognizer type argument for v-touch-options is required.')
	        } else {
	          opts[this.arg] = options
	        }
	      }
	    })
	  }
	
	  /**
	   * Register a custom event.
	   *
	   * @param {String} event
	   * @param {Object} options - a Hammer.js recognizer option object.
	   *                           required fields:
	   *                           - type: the base recognizer to use for this event
	   */
	
	  vueTouch.registerCustomEvent = function (event, options) {
	    options.event = event
	    customeEvents[event] = options
	  }
	
	  function capitalize (str) {
	    return str.charAt(0).toUpperCase() + str.slice(1)
	  }
	
	  function guardDirections (options) {
	    var dir = options.direction
	    if (typeof dir === 'string') {
	      if (directions.indexOf(dir) > -1) {
	        options.direction = Hammer['DIRECTION_' + dir.toUpperCase()]
	      } else {
	        console.warn('[vue-touch] invalid direction: ' + dir)
	      }
	    }
	  }
	
	  if (true) {
	    module.exports = vueTouch
	  } else if (typeof define == "function" && define.amd) {
	    define([], function(){ return vueTouch })
	  } else if (window.Vue) {
	    window.VueTouch = vueTouch
	    Vue.use(vueTouch)
	  }
	
	})()


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.6 - 2015-12-23
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2015 Jorik Tangelder;
	 * Licensed under the  license */
	(function(window, document, exportName, undefined) {
	  'use strict';
	
	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');
	
	var TYPE_FUNCTION = 'function';
	
	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;
	
	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}
	
	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}
	
	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;
	
	    if (!obj) {
	        return;
	    }
	
	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}
	
	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
	
	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	
	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean=false} [merge]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');
	
	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');
	
	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;
	
	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;
	
	    if (properties) {
	        assign(childP, properties);
	    }
	}
	
	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}
	
	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}
	
	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}
	
	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}
	
	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}
	
	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}
	
	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}
	
	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}
	
	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}
	
	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}
	
	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;
	
	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }
	
	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }
	
	    return results;
	}
	
	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);
	
	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;
	
	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}
	
	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}
	
	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}
	
	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
	
	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
	
	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';
	
	var COMPUTE_INTERVAL = 25;
	
	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;
	
	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;
	
	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
	
	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];
	
	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;
	
	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };
	
	    this.init();
	
	}
	
	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },
	
	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },
	
	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};
	
	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;
	
	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}
	
	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
	
	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;
	
	    if (isFirst) {
	        manager.session = {};
	    }
	
	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;
	
	    // compute scale, rotation etc
	    computeInputData(manager, input);
	
	    // emit secret event
	    manager.emit('hammer.input', input);
	
	    manager.recognize(input);
	    manager.session.prevInput = input;
	}
	
	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;
	
	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }
	
	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }
	
	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
	
	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;
	
	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);
	
	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
	
	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
	
	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
	
	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
	
	    computeIntervalInputData(session, input);
	
	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}
	
	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};
	
	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };
	
	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }
	
	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}
	
	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;
	
	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;
	
	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);
	
	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }
	
	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}
	
	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }
	
	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}
	
	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;
	
	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }
	
	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }
	
	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}
	
	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}
	
	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }
	
	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}
	
	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	
	    return Math.sqrt((x * x) + (y * y));
	}
	
	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}
	
	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}
	
	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}
	
	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};
	
	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
	
	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;
	
	    this.allow = true; // used by Input.TouchMouse to disable mouse events
	    this.pressed = false; // mousedown state
	
	    Input.apply(this, arguments);
	}
	
	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];
	
	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }
	
	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }
	
	        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
	        if (!this.pressed || !this.allow) {
	            return;
	        }
	
	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }
	
	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});
	
	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};
	
	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};
	
	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
	
	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}
	
	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;
	
	    Input.apply(this, arguments);
	
	    this.store = (this.manager.session.pointerEvents = []);
	}
	
	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;
	
	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
	
	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);
	
	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
	
	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }
	
	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }
	
	        // update the event in the store
	        store[storeIndex] = ev;
	
	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });
	
	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});
	
	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;
	
	    Input.apply(this, arguments);
	}
	
	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
	
	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }
	
	        if (!this.started) {
	            return;
	        }
	
	        var touches = normalizeSingleTouches.call(this, ev, type);
	
	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);
	
	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }
	
	    return [all, changed];
	}
	
	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};
	
	    Input.apply(this, arguments);
	}
	
	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;
	
	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }
	
	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;
	
	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });
	
	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }
	
	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }
	
	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }
	
	    if (!changedTargetTouches.length) {
	        return;
	    }
	
	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}
	
	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */
	function TouchMouseInput() {
	    Input.apply(this, arguments);
	
	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);
	}
	
	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
	
	        // when we're in a touch event, so  block all upcoming mouse events
	        // most mobile browser also emit mouseevents, right after touchstart
	        if (isTouch) {
	            this.mouse.allow = false;
	        } else if (isMouse && !this.mouse.allow) {
	            return;
	        }
	
	        // reset the allowMouse when we're done
	        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
	            this.mouse.allow = true;
	        }
	
	        this.callback(manager, inputEvent, inputData);
	    },
	
	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});
	
	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
	
	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	
	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}
	
	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }
	
	        if (NATIVE_TOUCH_ACTION && this.manager.element.style) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },
	
	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },
	
	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },
	
	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        // not needed with native support for the touchAction property
	        if (NATIVE_TOUCH_ACTION) {
	            return;
	        }
	
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;
	
	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }
	
	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	
	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture
	
	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;
	
	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }
	
	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }
	
	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },
	
	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};
	
	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	
	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }
	
	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }
	
	    return TOUCH_ACTION_AUTO;
	}
	
	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;
	
	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});
	
	    this.id = uniqueId();
	
	    this.manager = null;
	
	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);
	
	    this.state = STATE_POSSIBLE;
	
	    this.simultaneous = {};
	    this.requireFail = [];
	}
	
	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},
	
	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },
	
	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }
	
	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },
	
	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }
	
	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },
	
	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },
	
	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },
	
	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;
	
	        function emit(event) {
	            self.manager.emit(event, input);
	        }
	
	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	
	        emit(self.options.event); // simple 'eventName' events
	
	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }
	
	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },
	
	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },
	
	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },
	
	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);
	
	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }
	
	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }
	
	        this.state = this.process(inputDataClone);
	
	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },
	
	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line
	
	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },
	
	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};
	
	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}
	
	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}
	
	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}
	
	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}
	
	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },
	
	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },
	
	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;
	
	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);
	
	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});
	
	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	
	    this.pX = null;
	    this.pY = null;
	}
	
	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },
	
	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },
	
	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;
	
	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },
	
	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },
	
	    emit: function(input) {
	
	        this.pX = input.deltaX;
	        this.pY = input.deltaY;
	
	        var direction = directionStr(input.direction);
	
	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },
	
	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    this._timer = null;
	    this._input = null;
	}
	
	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },
	
	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;
	
	        this._input = input;
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }
	
	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});
	
	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },
	
	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },
	
	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;
	
	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }
	
	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },
	
	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }
	
	        this.manager.emit(this.options.event, input);
	    }
	});
	
	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;
	
	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}
	
	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },
	
	    process: function(input) {
	        var options = this.options;
	
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;
	
	        this.reset();
	
	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }
	
	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
	
	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;
	
	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }
	
	            this._input = input;
	
	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },
	
	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}
	
	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.6';
	
	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,
	
	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,
	
	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,
	
	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,
	
	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,
	
	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],
	
	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',
	
	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',
	
	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',
	
	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',
	
	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',
	
	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};
	
	var STOP = 1;
	var FORCED_STOP = 2;
	
	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});
	
	    this.options.inputTarget = this.options.inputTarget || element;
	
	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	
	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);
	
	    toggleCssProps(this, true);
	
	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}
	
	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },
	
	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },
	
	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }
	
	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);
	
	        var recognizer;
	        var recognizers = this.recognizers;
	
	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;
	
	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }
	
	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];
	
	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }
	
	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },
	
	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }
	
	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },
	
	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }
	
	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }
	
	        this.recognizers.push(recognizer);
	        recognizer.manager = this;
	
	        this.touchAction.update();
	        return recognizer;
	    },
	
	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }
	
	        recognizer = this.get(recognizer);
	
	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);
	
	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }
	
	        return this;
	    },
	
	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },
	
	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },
	
	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }
	
	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }
	
	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };
	
	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },
	
	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);
	
	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};
	
	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    each(manager.options.cssProps, function(value, name) {
	        element.style[prefixed(element.style, name)] = add ? value : '';
	    });
	}
	
	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}
	
	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,
	
	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,
	
	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,
	
	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,
	
	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,
	
	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,
	
	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});
	
	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;
	
	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}
	
	})(window, document, 'Hammer');


/***/ }
/******/ ])
});
;
//# sourceMappingURL=seed-vue-wlog-wv.js.map