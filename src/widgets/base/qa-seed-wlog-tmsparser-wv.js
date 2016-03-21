!function(a,b){function c(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d)return-1;if(d>e)return 1}return 0}var d=a.Promise,e=a.document,f=a.navigator.userAgent,g=/Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(f)||/Windows\sNT\s[\d\.]+/i.test(f),h=g&&a.WindVane_Win_Private&&a.WindVane_Win_Private.call,i=/iPhone|iPad|iPod/i.test(f),j=/Android/i.test(f),k=f.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),l=Object.prototype.hasOwnProperty,m=b.windvane=a.WindVane||(a.WindVane={}),n=(a.WindVane_Native,1),o=[],p=3,q="hybrid",r="wv_hybrid",s="iframe_",t="suc_",u="err_",v="defer_",w="param_",x="chunk_",y=6e5,z=6e5,A=6e4;k=k?(k[1]||"0.0.0").replace(/\_/g,"."):"0.0.0";var B={isAvailable:1===c(k,"0"),call:function(a,b,c,e,f,g){var h,i;return"number"==typeof arguments[arguments.length-1]&&(g=arguments[arguments.length-1]),"function"!=typeof e&&(e=null),"function"!=typeof f&&(f=null),d&&(i={},i.promise=new d(function(a,b){i.resolve=a,i.reject=b})),h=g>0?setTimeout(function(){B.onFailure(h,{ret:"HY_TIMEOUT"})},g):C.getSid(),C.registerCall(h,e,f,i),C.registerGC(h,g),B.isAvailable?C.callMethod(a,b,c,h):B.onFailure(h,{ret:"HY_NOT_IN_WINDVANE"}),i?i.promise:void 0},fireEvent:function(a,b,c){var d=e.createEvent("HTMLEvents");d.initEvent(a,!1,!0),d.param=C.parseData(b||C.getData(c)),e.dispatchEvent(d)},getParam:function(a){return C.getParam(a)},setData:function(a,b){C.setData(a,b)},onSuccess:function(a,b){C.onComplete(a,b,"success")},onFailure:function(a,b){C.onComplete(a,b,"failure")}},C={params:{},chunks:{},calls:{},getSid:function(){return Math.floor(Math.random()*(1<<50))+""+n++},buildParam:function(a){return a&&"object"==typeof a?JSON.stringify(a):a||""},getParam:function(a){return this.params[w+a]||""},setParam:function(a,b){this.params[w+a]=b},parseData:function(a){var b;if(a&&"string"==typeof a)try{b=JSON.parse(a)}catch(c){b={ret:["WV_ERR::PARAM_PARSE_ERROR"]}}else b=a||{};return b},setData:function(){this.chunks[x+sid]=this.chunks[x+sid]||[],this.chunks[x+sid].push(chunk)},getData:function(a){return this.chunks[x+a]?this.chunks[x+a].join(""):""},registerCall:function(a,b,c,d){b&&(this.calls[t+a]=b),c&&(this.calls[u+a]=c),d&&(this.calls[v+a]=d)},unregisterCall:function(a){var b=t+a,c=u+a,d=v+a,e={};return this.calls[b]&&(e.success=this.calls[b],delete this.calls[b]),this.calls[c]&&(e.failure=this.calls[c],delete this.calls[c]),this.calls[d]&&(e.deferred=this.calls[d],delete this.calls[d]),e},useIframe:function(a,b){var c=s+a,d=o.pop();d||(d=e.createElement("iframe"),d.setAttribute("frameborder","0"),d.style.cssText="width:0;height:0;border:0;display:none;"),d.setAttribute("id",c),d.setAttribute("src",b),d.parentNode||setTimeout(function(){e.body.appendChild(d)},5)},retrieveIframe:function(a){var b=s+a,c=e.querySelector("#"+b);o.length>=p?e.body.removeChild(c):o.push(c)},callMethod:function(b,c,d,e){if(d=C.buildParam(d),g)h?a.WindVane_Win_Private.call(b,c,e,d):this.onComplete(e,{ret:"HY_NO_HANDLER_ON_WP"},"failure");else{var f=q+"://"+b+":"+e+"/"+c+"?"+d;if(i)this.setParam(e,d),this.useIframe(e,f);else if(j){var k=r+":";window.prompt(f,k)}else this.onComplete(e,{ret:"HY_NOT_SUPPORT_DEVICE"},"failure")}},registerGC:function(a,b){var c=this,d=Math.max(b||0,y),e=Math.max(b||0,A),f=Math.max(b||0,z);setTimeout(function(){c.unregisterCall(a)},d),i?setTimeout(function(){c.params[w+a]&&delete c.params[w+a]},e):j&&setTimeout(function(){c.chunks[x+a]&&delete c.chunks[x+a]},f)},onComplete:function(a,b,c){clearTimeout(a);var d=this.unregisterCall(a),e=d.success,f=d.failure,g=d.deferred;b=b?b:this.getData(a),b=this.parseData(b);var h=b.ret;"string"==typeof h&&(b=b.value||b,b.ret||(b.ret=[h])),"success"===c?(e&&e(b),g&&g.resolve(b)):"failure"===c&&(f&&f(b),g&&g.reject(b)),i?(this.retrieveIframe(a),this.params[w+a]&&delete this.params[w+a]):j&&this.chunks[x+a]&&delete this.chunks[x+a]}};for(var D in B)l.call(m,D)||(m[D]=B[D])}(window,window.lib||(window.lib={}));;// ## KISSY MINI
//
// KISSY MINI 是面向移动终端的KISSY瘦身版，在保持API和KISSY一致的情况下，着重优化、精简核心模块代码，保证高可用的同时做到身材苗条。
//
// KISSY MINI 提供`mini.js`、`mini-full.js`、`mini-all.js`三个种子，其中
// - **[mini.js](../build/mini.js)**(8k)：`core`、`node`、`event`、`io`
// - **[mini-full.js](../build/mini-full.js)**(13k)：`core`、`node`、`event`、`io`、`loader`
// - **[mini-all.js](../build/mini-all.js)**(34k)：全部模块
//
// KISSY MINI 提供的官方模块有
//
//| 模块名                 | 内置 				| 说明			|
//| --------------------     |:--------------------:|:--------------------:|
//| core             | YES                  | 构造KISSY全局对象  |
//| node			| YES			|Node模块   |
//| io		| YES			|Ajax模块   |
//| event			| YES			|Event 模块   |
//| loader			| YES<br/>(`mini-full.js`)			|简版的loader	|
//| base			|			|<a href="http://docs.kissyui.com/1.4/docs/html/guideline/base.html">KISSY Base 模块</a>   |
//| ua			|			|浏览器嗅探模块   |
//| uri			|			|KISSY URI 模块   |
//| anim			|			|动画模块   |
//| lang			|			|语言工具方法集合   |
//| juicer			|			|Juicer模版渲染引擎   |
//| form			|			|Form表单处理   |
//|              |&nbsp;                | &nbsp;            |
//
// 在使用**mini-full.js**时，可以通过`KISSY.use('ua')`来拉取非内置的官方模块。
//
// ## Core 模块
/*
 * KISSY MINI
 * by: @kissyteam
 * created: 2014-02-12
 * contains: core node event io
 * license: MIT
 **/
;(function(root) {

var S = {
    version: '0.3.12',
    Env: {
        host: root
    }
};

var arrayProto = Array.prototype,
    class2type = {},
    doc = document;

// **S.map(els,function(items){...})**
//
// 遍历数组，数组结果是在对每个原数组元素调用fn的返回值.
// - els:需要遍历的数组
// - fn:能够根据原数组当前元素返回新数组元素的函数.
//
//	```
//	S.map(["foot", "goose", "moose"],function(single){
//		return single.replace(/o/g, "e");
//	}); // =>  ["feet", "geese", "meese"]
//	```
S.map = function(els, cb) {
    var val,
        key,
        ret = [];

    if (!S.isObject(els)) {
        arrayProto.forEach.call(els, function(el, index) {
            val = cb(el, index);
            if (val !== null) {
                ret.push(val);
            }
        });
    } else {
        for (key in els) {
            val = cb(els[key], key);
            if (val !== null) {
                ret.push(val);
            }
        }
    }

    return ret.length > 0 ? arrayProto.concat.apply([], ret) : ret;
};

// **S.each(collection, function(index, item){ ... },ctx)**
//
// 遍历数组中的每一项, 执行回调函数中的方法
// - collection:需要遍历的数组或者对象
// - fn:回调函数，回传三个参数
// 	1. 当前项的值
// 	2. 索引（index）或者键值（key）
// 	3. 数组或者对象
// - ctx: fn的上下文对象，默认为`window`
//
//
//		S.each(['a', 'b', 'c'], function(index, item){
//  		console.log('item %d is: %s', index, item)
//		})
//
//		var hash = { name: 'kissy.js', size: 'micro' }
//		S.each(hash, function(key, value){
//			console.log('%s: %s', key, value)
//		})
//
S.each = function(obj, iterator, context) {
    var keys, i, len;
    if (!obj) {
        return obj;
    }
    if (obj.forEach === arrayProto.forEach) {
        obj.forEach(iterator, context);
    } else if (S.isArray(obj)) {
        for (i = 0, len = obj.length; i < len; i++) {
            if (iterator.call(context, obj[i], i, obj) === false) {
                return;
            }
        }
    } else {
        keys = Object.keys(obj);
        for (i = 0, len = keys.length; i < len; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj) === false) {
                return;
            }
        }
    }
    return obj;
};

// **S.mix(receiver , supplier)**
//
// 将 supplier 对象的成员复制到 receiver 对象上.
// - receiver: 属性接受者对象.
// - supplier: 属性来源对象.
function mix(obj) {
    var k;
    S.each(arrayProto.slice.call(arguments, 1), function(source) {
        if (source) {
            for (var prop in source) {
                if((k = source[prop]) !== undefined) {
                    obj[prop] = k;
                }
            }
        }
    });
    return obj;
}

S.mix = mix;

// **S.makeArray(list)**
//
// 把list(任何可以迭代的对象)转换成一个数组，在转换 arguments 对象时非常有用。
//
// 	(function(){
// 		return S.toArray(arguments).slice(1);
// 	})(1, 2, 3, 4); // => [2, 3, 4]
//
S.makeArray = function (o) {
	if (o == null) {
		return [];
	}
	if (S.isArray(o)) {
		return o;
	}
	var lengthType = typeof o.length,
		oType = typeof o;
	if (lengthType !== 'number' ||
			o.alert ||
			oType === 'string' ||
			/* https://github.com/ariya/phantomjs/issues/11478 */
			(oType === 'function' && !( 'item' in o && lengthType === 'number'))) {
				return [o];
			}
	var ret = [];
	for (var i = 0, l = o.length; i < l; i++) {
		ret[i] = o[i];
	}
	return ret;
};

// **S.augment (r, s1, [wl])**
//
// 类的扩充，将 `s1` 的 `prototype` 属性的成员复制到 `r.prototype` 上。`Base` 使用。
// - r: 将要扩充的函数
// - s1: 扩充来源函数或对象. 非函数对象时复制的就是 s 的成员.
// - wl: 属性来源对象的属性白名单, 仅在名单中的属性进行复制.
S.augment = function (r, o, wl) {
	if(o instanceof Function){
		S.mix(r.prototype, o.prototype);
	}
	if(o instanceof Object){
		S.mix(r.prototype, o);
	}
	if(wl instanceof Object){
		S.mix(r.prototype, wl);
	}
	return r;
};

// **S.filter(list, iterator, [context])**
//
// 遍历list中的每个值，返回包含所有通过iterator真值检测的元素值。默认使用原生的filter方法。`Base`使用
//
// 	var evens = S.filter([1, 2, 3, 4, 5, 6], function(num){
// 		return num % 2 == 0;
// 	}); // => [2, 4, 6]
S.filter = function (arr, fn, context) {
	return Array.prototype.filter.call(arr, fn, context || this);
} ;

// **S.clone(input,[filter])**
//
// 创建一个 普通对象 或数组的深拷贝, 并且返回新对象，Base 使用。
// - input: 待深拷贝的对象或数组.
// - filter: 过滤函数, 返回 false 不拷贝该元素. 传入参数为:
// 	1. 待克隆值为数组, 参数同 `S.filter()`, 上下文对象为全局 `window`
// 	2. 待克隆值为普通对象, 参数为对象的每个键, 每个键对应的值, 当前对象, 上下文对象为当前对象.
S.clone = function (input, filter) {
	var destination = input;

	if(!input) return destination;

	var constructor = input.constructor;
	if (S.inArray(constructor, [Boolean, String, Number, Date, RegExp])) {
		destination = input.valueOf();
	}
	/* ImageData , File, Blob , FileList .. etc */
	else if (S.isArray(input)) {
		destination = filter ? S.filter(input, filter) : input.concat();
	} else if (S.isPlainObject(input)) {
		destination = {};
	}

	if(S.isArray(input)){
		for (var i = 0; i < destination.length; i++) {
			destination[i] = S.clone(destination[i], filter);
		}
	} else if (S.isPlainObject(input)){
		for (k in input) {
			if (!filter || (filter.call(input, input[k], k, input) !== false)){
				destination[k] = S.clone(input[k], filter);
			}
		}
	}
	return destination;
};

// **S.ucfirst(string)**
//
// 将字符串首字母大写，Base使用
S.ucfirst= function (s) {
	s += '';
	return s.charAt(0).toUpperCase() + s.substring(1);
};

// **S.trim(string)**
//
// 去除字符串两端的空白字符. Base使用
S.trim = function (str) {
	return str == null ? '' : String.prototype.trim.call(str);
};

// **S.now()**
//
// 返回当前日期时间，Base 使用
S.now = Date.now;

// **S.reduce(arr,fn,[initialValue])**
//
// 从左向右对每个数组元素调用给定函数，并把返回值累积起来，返回这个累加值，Base使用
// - arr: 需要遍历的数组.
// - fn: 在每个数组元素上执行的函数.
// - initialValue: 对象类型，初次执行 fn 时的第一个参数值，如果不指定则为第一个元素值，后续从第二个元素开始遍历
//
// ```
// S.reduce([0,1,2,3,4],function(p, c, index){
// 	return p + c;
// });
// // 首次调用
// p = 0, c = 1, index = 1
// //第二次调用
// p = 1, c = 2, index = 2
// // 第三次调用
// p = 3, c= 3, index = 3
// // 第四次调用
// p = 6, c = 4, index = 4
// // 最终返回：10
// ```
S.reduce = function (arr, callback, initialValue) {
	var len = arr.length;
	if (typeof callback !== 'function') {
		throw new TypeError('callback is not function!');
	}

	/* 如果初始值是空数组，则无返回值，报错 */
	if (len === 0 && arguments.length == 2) {
		throw new TypeError('arguments invalid');
	}

	var k = 0;
	var accumulator;
	if (arguments.length >= 3) {
		accumulator = arguments[2];
	}
	else {
		do {
			if (k in arr) {
				accumulator = arr[k++];
				break;
			}

			/* 如果初始值是空数组，则无返回值，报错 */
			k += 1;
			if (k >= len) {
				throw new TypeError();
			}
		}
		while (TRUE);
	}

	while (k < len) {
		if (k in arr) {
			accumulator = callback.call(undefined, accumulator, arr[k], k, arr);
		}
		k++;
	}

	return accumulator;
};

// **S.substitute(str,o)**
//
// 将字符串中的占位符替换为对应的键值。`Base`使用
//
// ```
// str = '{name} is {prop_1} and {prop_2}.',
// obj = {name: 'Jack Bauer',
// 			prop_1: 'our lord',
// 			prop_2: 'savior'};
//
// S.substitute(str, obj);
// 		// => 'Jack Bauer is our lord and savior.'
// ```
S.substitute =  function (str, o, regexp) {
	if (typeof str != 'string' || !o) {
		return str;
	}

	return str.replace(regexp || /\\?\{([^{}]+)\}/g, function (match, name) {
		if (match.charAt(0) === '\\') {
			return match.slice(1);
		}
		return (o[name] === undefined) ? '': o[name];
	});
};

// **S.indexOf (elem,arr)**
//
// 返回元素 elem 在数组 arr 中的序号.
S.indexOf = function(item, arr) {
	return Array.prototype.indexOf.call(arr, item);
};

// **S.inArray (elem,arr)**
//
// 判断元素 elem 是否在数组 arr 中.
S.inArray = function(item, arr) {
	return S.indexOf(item, arr) > - 1;
};

// **S.merge (s1,s2[,...])**
//
// 将多个对象的成员合并到一个新对象上. 参数中, 后面的对象成员会覆盖前面的.
//
// ```
// a = { a: 'a' },
// b = { b: 'b' },
// c = { b: 'b2', c: 'c' };
//
// var o = S.merge(a, b, c);
// S.log(o.a); // => 'a'
// S.log(o.b); // => 'b2'
// S.log(o.c); // => 'c'
// ```
S.merge = function() {
	var args = arrayProto.slice.call(arguments, 0);
    return mix.apply(null, [{}].concat(args));
};

// **S.extend (r,s[,px,sx])**
//
// 让函数对象 r 继承函数对象 s
// - r: 将要继承的子类函数
// - supplier: 继承自的父类函数
// - px: 需要添加/覆盖的原型成员
// - sx: 需要添加/覆盖的静态成员.
S.extend = function(receiver, supplier, protoPros, staticProps) {
    var supplierProto = supplier.prototype,
        receiverProto;

    supplierProto.constructor = supplier;

    receiverProto = Object.create(supplierProto);
    receiverProto.constructor = receiver;
    receiver.prototype = S.mix(receiverProto, receiver.prototype);
    receiver.superclass = supplierProto;

    if (protoPros) {
        S.mix(receiverProto, protoPros);
    }

    if (staticProps) {
        S.mix(receiver, staticProps);
    }

    return receiver;
};

// **S.type(object)**
//
// 返回`object`的类型，如果要判断是否是plainObject（普通对象）需要使用`S.isPlainObject()`方法
//
// ```
// S.type(S.one('div')) // => 'array'
// S.type(Number(2)) // => 'number'
// S.type(S.Node)  // => 'function'
// ```
//
// 如果需要验证是否是Node节点类型，使用**S.Node.isNode()**
S.type = function(obj) {
    return obj == null ?
		String(obj) : class2type[{}.toString.call(obj)] || 'object';
};

// **S.unique (arr)**
//
// 返回一个新数组, 仅包含 arr 去重后的值
//
// ```
// KISSY.unique(['a', 'b', 'a']) => ['a', 'b']
// ```
S.unique = function(array) {
    return arrayProto.filter.call(array, function(item, index) {
        return array.indexOf(item) == index;
    });
};

// **S.isWindow (o)**
//
// 判断参数是否为浏览器 window
S.isWindow = function(obj) {
    return obj && obj == obj.window;
};

// **S.isPlainObject(obj)**
//
// 判断是否是普通对象, 通过 {} 或 new FunctionClass/Object() 创建的, 不包括内置对象以及宿主对象.
//
// ```
// S.isPlainObject({}); // => true
// S.isPlainObject(new Date()); // => false
// S.isPlainObject(document.body); // => false
// ```
S.isPlainObject = function(obj) {
    return S.isObject(obj) && !S.isWindow(obj)
		&& Object.getPrototypeOf(obj) == Object.prototype;
};

// 类型诊断函数
//
// **S.isBoolean()**
//
// **S.isNumber()**
//
// **S.isString()**
//
// **S.isFunction()**
//
// **S.isArray()**
//
// **S.isDate()**
//
// **S.isRegExp()**
//
// **S.isObject()**
//
// **S.isError()**
//
// **S.isUndefined()**
//
// **S.isNull()**
['Boolean', 'Number', 'String', 'Function',
	'Array', 'Date', 'RegExp', 'Object',
	'Error'].forEach(function(name) {
    var name2lc = name.toLowerCase();

    class2type['[object ' + name + ']'] = name2lc;

    S['is' + name] = function(obj) {
        return S.type(obj) === name2lc;
    };
});

S.isUndefined = function(o){
	return o === undefined;
};

S.isNull = function(o){
	return o === null;
};

S.isArray = Array.isArray || S.isArray;

// **S.startsWith (str,prefix)**
//
// 判断 str 是否以 prefix 开头
S.startsWith = function(str, prefix) {
    return str.lastIndexOf(prefix, 0) === 0;
};

// **S.endsWith(str,suffix)**
//
// 判断 str 是否以 suffix 结尾
S.endsWith   = function(str, suffix) {
    var ind = str.length - suffix.length;
    return ind >= 0 && str.indexOf(suffix, ind) === ind;
};

var guid = 0;

// **S.guid (prefix)**
//
// 返回全局唯一 id.
S.guid = function(pre) {
    return (pre || '') + guid++;
};

// **S.ready(function(S){...})**
//
// DOM Ready 事件，Ready 后再监听会立即执行回调
//
// 与 DOMContentLoaded 事件此类似的事件还有 avaiable 和 contentready，在 PC 端产品多使用这两个方法来监听某个节点是否可用以及节点内的结构是否构造完整，这两个事件在无线端不常用，这里不提供，只提供 `ready()` 方法
//
// ```
// KISSY.ready(function(S){
//		var $ = S.all;
// });
// ```
S.ready = function(fn){
    if (/complete|loaded|interactive/.test(doc.readyState) && doc.body) fn(S);
    else doc.addEventListener('DOMContentLoaded', function(){ fn(S); }, false);
    return this;
};

(function (S, undefined) {
    /* ios Function.prototype.bind === undefined */
    function bindFn(r, fn, obj) {
        function FNOP() {
        }

        var slice = [].slice,
            args = slice.call(arguments, 3),
            bound = function () {
                var inArgs = slice.call(arguments);
                return fn.apply(
                    this instanceof FNOP ? this :
                        /* fix: y.x=S.bind(fn); */
                        obj || this,
                    (r ? inArgs.concat(args) : args.concat(inArgs))
                );
            };
        FNOP.prototype = fn.prototype;
        bound.prototype = new FNOP();
        return bound;
    }

    S.mix(S, {

		// **S.noop()**
		//
		// 空函数
        noop: function () {
        },

		// **S.bind (fn , context)**
		//
		// 创建一个新函数，该函数可以在固定的上下文以及传递部分固定参数放在用户参数前面给原函数并执行
		// - fn: 需要固定上下文以及固定部分参数的函数
		// - context: 执行 fn 时的 this 值. 如果新函数用于构造器则该参数无用.
        bind: bindFn(0, bindFn, null, 0),
        rbind: bindFn(0, bindFn, null, 1)
    });
})(S);

/**
 * @ignore
 * script/css load across browser
 * @author yiminghe@gmail.com
 */

/**
 * Normal ua is like below:
 * 
 * Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 
   (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25
 * Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19
   (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19
 *  
 * But we need [\/]{0,1} here, because some mobile's user agent is like below:
 * 
 * Xiaomi_2013061_TD/V1 Linux/3.4.5 Android/4.2.1 Release/09.18.2013
   Browser/AppleWebKit534.30 Mobile Safari/534.30 MBBMS/2.2 System/Android 4.2.1
   XiaoMi/MiuiBrowser/1.0
 * ZTE U970_TD/1.0 Linux/2.6.39 Android/4.0 Release/2.21.2012 Browser/AppleWebKit534.30
 * LenovoA658t_TD/1.0 Android 4.0.3 Release/10.01.2012 Browser/WAP2.0 appleWebkit/534.30 AliApp(AP/8.2.0.071702) AlipayClient/8.2.0.071702
 * 
 * @bugfix http://k3.alibaba-inc.com/issue/5108586?versionId=1030999
 * @bugfix http://k3.alibaba-inc.com/issue/5184999?stat=1.5.0&toPage=1&versionId=1035887
 * @bugfix http://k3.alibaba-inc.com/issue/5123513?stat=1.5.1&toPage=1&versionId=1035887
 */

//版本号前带斜杠：AppleWebKit/535.19
//版本号前不带斜杠：AppleWebKit534.30
//字母大小写：appleWebKit/534.30
//拼写错误：ApplelWebkit/534.30
//Android开头：AndroidWebkit/534.30
//匹配不到的话返回NaN，默认使用poll
var webkit = +navigator.userAgent.replace(/.*Web[kK]it[\/]{0,1}(\d+)\..*/, "$1");
var isOldWebKit = !webkit || webkit < 536;

var /* central poll for link node */
    cssTimer = 0,
    /* node.id:{callback:callback,node:node} */
    monitors = {},
    monitorLen = 0;

function startCssTimer() {
    if (!cssTimer) {
        cssPoll();
    }
}

function isCssLoaded(node, url) {
    var sheet = node.sheet,
        loaded;

    if (isOldWebKit) {
        /* http://www.w3.org/TR/Dom-Level-2-Style/stylesheets.html */
        if (node.sheet) {
            loaded = 1;
        }
    } else if (node.sheet) {
        try {
            var cssRules = node.sheet.cssRules;
            if (cssRules) {
                loaded = 1;
            }
        } catch (ex) {
            /* http://www.w3.org/TR/dom/#dom-domexception-code */
            if (ex.name === 'NS_ERROR_DOM_SECURITY_ERR') {
            /* for old firefox */
                loaded = 1;
            }
        }
    }
    return loaded;
}

function cssPoll() {
    for (var url in monitors) {
        var callbackObj = monitors[url],
            node = callbackObj.node;
        if (isCssLoaded(node, url)) {
            if (callbackObj.callback) {
                callbackObj.callback.call(node);
            }
            delete monitors[url];
            monitorLen--;
        }
    }

    cssTimer = monitorLen ? setTimeout(cssPoll, 30) : 0;
}

/* refer : http://lifesinger.org/lab/2011/load-js-css/css-preload.html */
function pollCss(node, callback) {
    var href = node.href,
        arr;
    arr = monitors[href] = {};
    arr.node = node;
    arr.callback = callback;
    monitorLen++;
    startCssTimer();
}

/*
 References:
 - http://unixpapa.com/js/dyna.html
 - http://www.blaze.io/technical/ies-premature-execution-problem/

 `onload` event is supported in WebKit since 535.23
 - https://bugs.webkit.org/show_activity.cgi?id=38995
 `onload/onerror` event is supported since Firefox 9.0
 - https://bugzilla.mozilla.org/show_bug.cgi?id=185236
 - https://developer.mozilla.org/en/HTML/Element/link#Stylesheet_load_events

 monitor css onload across browsers.issue about 404 failure.
 - firefox not ok（4 is wrong）：
 - http://yearofmoo.com/2011/03/cross-browser-stylesheet-preloading/
 - all is ok
 - http://lifesinger.org/lab/2011/load-js-css/css-preload.html
 - others
 - http://www.zachleat.com/web/load-css-dynamically/
 */

/**
 * @ignore
 * getScript support for css and js callback after load
 * @author yiminghe@gmail.com
 */

var jsCssCallbacks = {},
    headNode = doc.getElementsByTagName('head')[0] || doc.documentElement;

/**
 * Load a javascript/css file from the server using a GET HTTP request,
 * then execute it.
 *
 * for example:
 *      @example
 *      getScript(url, success, charset);
 *      // or
 *      getScript(url, {
 *          charset: string
 *          success: fn,
 *          error: fn,
 *          timeout: number
 *      });
 *
 * Note 404/500 status in ie<9 will trigger success callback.
 * If you want a jsonp operation, please use {@link KISSY.IO} instead.
 *
 * @param {String} url resource's url
 * @param {Function|Object} [success] success callback or config
 * @param {Function} [success.success] success callback
 * @param {Function} [success.error] error callback
 * @param {Number} [success.timeout] timeout (s)
 * @param {String} [success.charset] charset of current resource
 * @param {String} [charset] charset of current resource
 * @return {HTMLElement} script/style node
 * @member KISSY
 */
var getScript = function (url, success, charset) {
    /* can not use KISSY.Uri, url can not be encoded for some url */
    /* eg: /??dom.js,event.js , ? , should not be encoded */
    var config = success,
        css = 0,
        error,
        timeout,
        attrs,
        callbacks,
        timer;

    if (S.endsWith(url.toLowerCase(), '.css')) {
        css = 1;
    }

    if (S.isObject(config)) {
        success = config.success;
        error   = config.error;
        timeout = config.timeout;
        charset = config.charset;
        attrs   = config.attrs;
    }

    callbacks = jsCssCallbacks[url] = jsCssCallbacks[url] || [];

    callbacks.push([success, error]);

    if (callbacks.length > 1) {
        return callbacks.node;
    }

    var node = doc.createElement(css ? 'link' : 'script'),
        clearTimer = function () {
            if (timer) {
                clearTimeout(timer);
                timer = undefined;
            }
        };

    if (attrs) {
        S.each(attrs, function (v, n) {
            node.setAttribute(n, v);
        });
    }

    if (charset) {
        node.charset = charset;
    }

    if (css) {
        node.href = url;
        node.rel = 'stylesheet';
    } else {
        node.src = url;
        node.async = true;
    }

    callbacks.node = node;

    var end = function (error) {
        var index = error,
            fn;
        clearTimer();
        S.each(jsCssCallbacks[url], function (callback) {
            if ((fn = callback[index])) {
                fn.call(node);
            }
        });
        delete jsCssCallbacks[url];
    };

    var useNative = 'onload' in node;
    /*
        onload for webkit 535.23  Firefox 9.0
        https://bugs.webkit.org/show_activity.cgi?id=38995
        https://bugzilla.mozilla.org/show_bug.cgi?id=185236
        https://developer.mozilla.org/en/HTML/Element/link#Stylesheet_load_events
        phantomjs 1.7 == webkit 534.34
    */
    var forceCssPoll = S.Config.forceCssPoll || (isOldWebKit);

    if (css && forceCssPoll && useNative) {
        useNative = false;
    }

    function onload() {
        var readyState = node.readyState;
        if (!readyState ||
            readyState === 'loaded' ||
            readyState === 'complete') {
            node.onreadystatechange = node.onload = null;
            end(0);
        }
    }

    /* 标准浏览器 css and all script */
    if (useNative) {
        node.onload = onload;
        node.onerror = function () {
            node.onerror = null;
            end(1);
        };
    } else if (css) {
        /* old chrome/firefox for css */
        pollCss(node, function () {
            end(0);
        });
    } else {
        node.onreadystatechange = onload;
    }

    if (timeout) {
        timer = setTimeout(function () {
            end(1);
        }, timeout * 1000);
    }

    if (css) {
        /* css order matters so can not use css in head */
        headNode.appendChild(node);
    } else {
        /* can use js in head */
        headNode.insertBefore(node, headNode.firstChild);
    }
    return node;
};

/*
 yiminghe@gmail.com refactor@2012-03-29
 - 考虑连续重复请求单个 script 的情况，内部排队

 yiminghe@gmail.com 2012-03-13
 - getScript
 - 404 in ie<9 trigger success , others trigger error
 - syntax error in all trigger success
 */

mix(S, {
    getScript: getScript
});

var fns    = {},
    config = {
        debug : false,
        fns   : fns
    };

S.Config = config;

// **S.config(configName,configValue)**
//
// 设置或获取 KISSY 配置参数，有三种用法
//
// ```
// config(configJSON) //⇒ void
// config(name,value) //⇒ void，name：参数名，value：参数值
// config(name) //⇒ data，返回参数名的值
// ```
//
// 其中`S.config(configJSON)`的用法参照：
//
//		KISSY.config({
//			// 开启自动 combo 模式
//			combine:true,
//			// kissy 库内置模块的时间戳
//			tag:'2012',
//			// kissy 的基准路径
//			base:'http://x.com/a',
//			packages:{},
//			modules:{}
//		})
//
// 完整参数可以参照[KISSY1.4的loader用法](http://docs.kissyui.com/1.4/docs/html/guideline/loader.html)的config部分
//
// [mini.js](../mini.js)支持完整的KISSY模块规范（KMD），[规范详情移步这里](http://docs.kissyui.com/1.4/docs/html/guideline/kmd.html)
//
// ```
// // 判断是否引用mini版本
// var isMini = S.config('mini');
// ```
S.config = function (configName, configValue) {
    var cfg,
        r,
        self = this,
        fn,
        Config = S.Config,
        configFns = Config.fns;
    if (S.isObject(configName)) {
        S.each(configName, function (configValue, p) {
            fn = configFns[p];
            if (fn) {
                fn.call(self, configValue);
            } else {
                Config[p] = configValue;
            }
        });
    } else {
        cfg = configFns[configName];
        if (configValue === undefined) {
            if (cfg) {
                r = cfg.call(self);
            } else {
                r = Config[configName];
            }
        } else {
            if (cfg) {
                r = cfg.call(self, configValue);
            } else {
                Config[configName] = configValue;
            }
        }
    }
    return r;
};

S.config('mini',true);

var modules = {};

var isString   = S.isString,
    isFunction = S.isFunction;

var RE_DIRNAME = /[^?#]*\//,
    RE_DOT = /\/\.\//g,
    RE_DOUBLE_DOT = /\/[^/]+\/\.\.\//,
    RE_DOUBLE_SLASH = /([^:/])\/\//g;

function parseDirName(name) {
    var mat = name.match(RE_DIRNAME);
    return name ? mat[0] : name + '/';
}

function parseRelativeName(name, refName) {
    if (refName && /^[\.\/]/.test(name)) {
        name = parseDirName(refName) + name;
        /* /a/b/./c/./d ==> /a/b/c/d */
        name = name.replace(RE_DOT, '/');

        /* a/b/c/../../d  ==>  a/b/../d  ==>  a/d */
        while (name.match(RE_DOUBLE_DOT)) {
            name = name.replace(RE_DOUBLE_DOT, '/');
        }

        /* a//b/c  ==>  a/b/c  */
        name = name.replace(RE_DOUBLE_SLASH, '$1/');
    }
    return name;
}

function parseModuleName(name, refName) {
    if (name.charAt(name.length - 1) === '/') {
        name += 'index';
    } else if (/.js$/.test(name)) {
        name = name.slice(0, -3);
    }

    return parseRelativeName(name, refName);
}

function execFnWithModules(fn, modNames, refName)  {
    var args = S.map(modNames || [], function(modName) {
        return S.require(modName, refName);
    });
    return isFunction(fn) ? fn.apply(S, [S].concat(args)) : undefined;
}

function execFnWithCJS(fn) {
    return isFunction(fn) ? fn.apply(S, [S, S.require]) : undefined;
}

// **S.add(name,fn,[cfg])**
//
// KISSY 添加模块/逻辑片段的函数，`config`为配置对象，包括`config.requires`，给出当前模块的依赖模块。模块返回一个对象，通过引用它的时候来调用到。
// - name (string) – 模块名。可选。
// - fn (function) – 模块定义函数
// - config (object) – 模块的一些格外属性, 是JSON对象，包含属性：
// - requires (Array) – 模块的一些依赖
//
// core中的`S.add()`只有基本功能，只支持上面三个参数
//
// 在[mini-full.js](../mini-full.js)中，包含完整的KMD规范的实现的loader。
//
// ```
// // package/a.js
// KISSY.add('a',function(S){
//	 return ObjA;
// },{
// 	 // 当前逻辑依赖一个包内的文件b，一个全局模块base
// 	 requires:['b','base']
// });
// ```
//
// `add()`方法符合基本的KMD规范，可以参照[KISSY 1.4 Loader的文档](http://docs.kissyui.com/1.4/docs/html/guideline/loader.html)

S.add = function(name, factory, config) {
    if (isString(name)) {
        name = parseModuleName(name);
        modules[name] = {
            factory  : factory,
            requires : config && config.requires
        };
    }
    return S;
};

// **S.require(name,[refName])**
//
// 如果模块已经载入，则可以通过`S.require()`方法来调用这个模块，通常如果use()的模块过多，回调参数需要和模块列表一一对应，最简单的办法就是使用`S.require()`方法
//
// 比如这段代码：
// ```
// // use 的模块太多，用肉眼来对应模块名称？
// S.use('a,b,c,d,e,f,g',function(S,A,B,C,D,E,F,G){
//     // Your code...
// });
//
// // 可以简写为这样
// S.use('a,b,c,d,e,f,g',function(S){
//     var A = S.require('a');
//     var B = S.require('b');
//     var C = S.require('c');
//     // Your code...
// });
// ```
S.require = function(name, refName) {
    var mod;
    if (isString(name)) {
        name = parseModuleName(name, refName);
        mod  = modules[name];
        if (mod) {
            if (!mod.exports) {
                mod.exports = isFunction(mod.factory) ?
                    mod.requires ?
                        execFnWithModules(mod.factory, mod.requires, name) :
                        execFnWithCJS(mod.factory)
                    :
                    mod.factory;
            }
            return mod.exports;
        }
    }
};

// **S.use(names, callback)**
//
// 载入并运行模块,和add一起使用，详细用法参照[KISSY模块规范](http://docs.kissyui.com/1.4/docs/html/kmd.html)（KMD），fn 类型是functio。参数说明：
// - modNames (String) – 以逗号（,）分割的模块名称,例如 `S.use("custommod,custommod2")`
// - callback (function|Object) – 当 modNames 中所有模块载入并执行完毕后执行的函数或者对象描述
//
// 当callback类型为Object时，可传入两个属性：
//
// 1. success (function) : 当 modNames 中所有模块加载完毕后执行的函数
// 2. error (function) : 当前 use 失败时调用的函数，参数为失败的模块对象
//
S.use = function(names, success) {
    /* assign callback functions */
    if (S.isObject(success)) {
        success = success.success;
    }
    /* parse string to array */
    if (isString(names)) {
        names = names.replace(/\s+/g, '').split(',');
    }

    execFnWithModules(success, names);

    return S;
};


// **S.log(msg,[cat,type])**
//
// 输出调试信息
// - msg : 试信息
// - cat : 调试信息类别. 可以取 info, warn, error, dir, time 等 console 对象的方法名, 默认为 log.
// - src : 调试代码所在的源信息
S.log = function(msg, cat, type) {
    var logger = console;
    cat = cat && logger[cat] ? cat : 'log';
    logger[cat](type ? type + ': ' + msg : msg);
};

// **S.error(msg)**
//
// 抛出错误异常
S.error = function(msg) {
    if (S.config('debug')) {
        throw msg instanceof Error ? msg : new Error(msg);
    }
};

root.KISSY = S;


}(this));
// <style>pre{-moz-tab-size:4;-webkit-tab-size:4;tab-size:4;}</style>
// <style>td {border-top:1px solid #ccc} table {border-collapse: collapse;}</style>

// Loader API
// ==========
//
// ### How to use
// ---
// 用法同KISSY Seed
//
//     //定義模塊
//     KISSY.add('pkg/mod1', function(S, Dep) {
//         return {
//             name: 'mod1'
//         };
//     }, {
//         requires: [
//             'dep1'
//         ]
//     })
//
//     //使用模塊
//     KISSY.use('pkg/mod1', function(S, Mod1) {
//         alert(Mod1.name);
//     });
//
// ### API Delete
// ---
//
// **未列出的API與KISSY保持用法一致 (包括 CMD, Combo, download CSS, etc. )**
//
// | API                  | KISSY                | KISSY-MINI           |
// | -------------------- |:--------------------:|:--------------------:|
// | getScript            | YES                  | NO                   |
// | importStyle          | YES                  | NO                   |
//
//
//
// ### API Differences
// ---
// － package config不支持 **group** 參數
//
// － package config不支持 **suffix** 參數

;(function(root) {

/* cache KISSY object */
var S = root.KISSY;

var Env      = S.Env,
    Config   = S.Config,
    config   = S.config,
    log      = S.log;

var mix        = S.mix,
    map        = S.map,
    each       = S.each,
    isObject   = S.isObject,
    isArray    = S.isArray,
    isString   = S.isString,
    isFunction = S.isFunction,
    startsWith = S.startsWith,
    endsWith   = S.endsWith,
    getScript  = S.getScript;

/* cache native object */
var doc      = root.document,
    ua       = root.navigator.userAgent,
    loc      = root.location,
    href     = loc.href,
    protocol = loc.protocol;

var substring     = function(str, start, end) {
    return str.substring(start, end);
},  indexOf    = function(str, value, index) {
    return str.indexOf(value, index);
},  slice      = function(str, start, end) {
    return str.slice(start, end);
},  charAt     = function(str, index) {
    return str.charAt(index);
},  split      = function(str, flag) {
    return str.split(flag);
},  replace    = function(str, reg, val) {
    return str.replace(reg, val);
},  toLowerCase = function(str) {
    return str.toLowerCase();
};


var now = Date.now,
    keys = Object.keys,
    reduce = function(arr, fn, initialVal) {
        return arr.reduce(fn, initialVal);
    },
    filter = function(arr, fn) {
        return arr.filter(fn);
    },
    indexOf = function(arr, val) {
        return arr.indexOf(val);
    },
    setImmediate = function(fn)  {
        setTimeout(fn, 0);
    };

var noop  = function() {},
    TRUE  = !0,
    FALSE = !1;

/* Remove .. and . in path array */
function normalizeArray(parts, allowAboveRoot) {
    /* level above root */
    var up = 0,
        i = parts.length - 1,
        newParts = [],
        last;

    for (; i >= 0; i--) {
        last = parts[i];
        if (last !== '.') {
            if (last === '..') {
                up++;
            } else if (up) {
                up--;
            } else {
                newParts[newParts.length] = last;
            }
        }
    }

    /* if allow above root, has to add .. */
    if (allowAboveRoot) {
        for (; up--; up) {
            newParts[newParts.length] = '..';
        }
    }

    newParts = newParts.reverse();

    return newParts;
}

/* Extract the directory portion of a path
* dirname("a/b/c.js?t=123#xx/zz") ==> "a/b/"
* ref: http://jsperf.com/regex-vs-split/2
*/
var RE_DIRNAME = /[^?#]*\//;

function pathGetDirName(path) {
    var mat = path.match(RE_DIRNAME);
    return mat ? mat[0] : '.';
}

function pathRemoveExt(path) {
    return path.replace(/\.[^\/]+$/, '');
}

var RE_DOT = /\/\.\//g,
    RE_DOUBLE_DOT = /\/[^/]+\/\.\.\//,
    RE_DOUBLE_SLASH = /([^:/])\/\//g;

/* Canonicalize a path */
/* realpath("http://test.com/a//./b/../c") ==> "http://test.com/a/c" */
function pathParseRelative(path) {
    /* /a/b/./c/./d ==> /a/b/c/d */
    path = path.replace(RE_DOT, "/");

    /* a/b/c/../../d  ==>  a/b/../d  ==>  a/d */
    while (path.match(RE_DOUBLE_DOT)) {
        path = path.replace(RE_DOUBLE_DOT, "/");
    }

    /* a//b/c  ==>  a/b/c */
    path = path.replace(RE_DOUBLE_SLASH, "$1/");

    return path;
}

function pathResolveRelative(from, to) {
    var resolvedPath = '',
        resolvedPathStr,
        i,
        args = (arguments),
        path,
        absolute = 0;

    for (i = args.length - 1; i >= 0 && !absolute; i--) {
        path = args[i];
        if (!isString(path) || !path) {
            continue;
        }
        resolvedPath = path + '/' + resolvedPath;
        absolute = charAt(path, 0) === '/';
    }

    resolvedPathStr = normalizeArray(filter(split(resolvedPath, '/'), function (p) {
        return !!p;
    }), !absolute).join('/');

    return ((absolute ? '/' : '') + resolvedPathStr) || '.';
}

function pathGetRelative(from, to) {
    from = pathParseRelative(from);
    to = pathParseRelative(to);

    var fromParts = filter(split(from, '/'), function (p) {
            return !!p;
        }),
        path = [],
        sameIndex,
        sameIndex2,
        toParts = filter(split(to, '/'), function (p) {
            return !!p;
        }), commonLength = Math.min(fromParts.length, toParts.length);

    for (sameIndex = 0; sameIndex < commonLength; sameIndex++) {
        if (fromParts[sameIndex] !== toParts[sameIndex]) {
            break;
        }
    }

    sameIndex2 = sameIndex;

    while (sameIndex < fromParts.length) {
        path.push('..');
        sameIndex++;
    }

    path = path.concat(slice(toParts, sameIndex2));

    path = path.join('/');

    return /**@type String  @ignore*/path;
}

/* Normalize an id
*  normalize("path/to/a") ==> "path/to/a.js"
* NOTICE: substring is faster than negative slice and RegExp
*/
function pathNormalizeName(id) {
    var last = id.length - 1,
        lastC = charAt(id, last);

    /* If the uri ends with `#`, just return it without '#' */
    if (lastC === "#") {
        return id.substring(0, last);
    }

    return (endsWith(id, '.js')  ||
            endsWith(id, '.css') ||
            indexOf(id, '?') > 0 ||
            lastC === '/' ) ? id :
                              id + '.js';
}


var RE_ABSOLUTE = /^\/\/.|:\//,
    RE_ROOT_DIR = /^.*?\/\/.*?\//;

function pathNormalizeBase(base) {
    if (!base) { return loaderDir; }
    base = base.replace(/\\/g, '/');
    if (!endsWith(base, '/')) {
        base += '/';
    }

    return pathAddBase(base);
}

function pathAddBase(id, base) {
    var result, baseDir, mat;
        firstC = charAt(id, 0);

    baseDir = base ? pathGetDirName(base) : workDir;

    /* Absolute */
    if (RE_ABSOLUTE.test(id)) {
        result = id;
    }
    /* Relative */
    else if (firstC === ".") {
        result  = pathParseRelative(baseDir + id);
    }
    /* Root */
    else if (firstC === "/") {
        mat = baseDir.match(RE_ROOT_DIR);
        result = mat ? mat[0] + substring(id, 1) : id;
    }
    /* Top-level */
    else {
        result = baseDir + id;
    }

    /* Add default protocol when uri begins with "//" */
    if (startsWith(result, '//')) {
        result = protocol + result;
    }

    return result;
}

function pathAddQuery(path, key, value) {
    return path + ( indexOf(path, '?') > -1 ? '&' : '?' ) + key + '=' + value;
}

var workDir   = pathGetDirName(doc.URL);
var loaderDir = (function() {
    var src = getMiniSrc();
    return src ? pathGetDirName(src) : workDir;
}());

/**
 * @ignore
 * setup data structure for kissy loader
 * @author yiminghe@gmail.com
 */

var Loader = S.Loader = {};

    /** error */
var ERROR = -1,
    /** init */
    INIT  = 0,
    /** loading */
    LOADING = 1,
    /** loaded */
    LOADED = 2,
    /**dependencies are loaded or attached*/
    READY_TO_ATTACH = 3,
    /** attaching */
    ATTACHING = 4,
    /** attached */
    ATTACHED = 5;

/**
 * Loader Status Enum
 * @enum {Number} KISSY.Loader.Status
 */
Loader.Status = {
    /** error */
    ERROR: ERROR,
    /** init */
    INIT: INIT,
    /** loading */
    LOADING: LOADING,
    /** loaded */
    LOADED: LOADED,
    /**dependencies are loaded or attached*/
    READY_TO_ATTACH: READY_TO_ATTACH,
    /** attaching */
    ATTACHING: ATTACHING,
    /** attached */
    ATTACHED: ATTACHED
};

/**
 * @ignore
 * Utils for kissy loader
 * @author yiminghe@gmail.com
 */

/**
 * @class KISSY.Loader.Utils
 * Utils for KISSY Loader
 * @singleton
 * @private
 */

/* http://wiki.commonjs.org/wiki/Packages/Mappings/A */
/* 如果模块名以 / 结尾，自动加 index */
function addIndexAndRemoveJsExt(s) {
    if (isString(s)) {
        return addIndexAndRemoveJsExtFromName(s);
    } else {
        var ret = [],
            i = 0,
            l = s.length;
        for (; i < l; i++) {
            ret[i] = addIndexAndRemoveJsExtFromName(s[i]);
        }
        return ret;
    }
}

function addIndexAndRemoveJsExtFromName(name) {
    /* 'x/' 'x/y/z/' */
    if (charAt(name, name.length - 1) === '/') {
        name += 'index';
    }
    if (endsWith(name, '.js')) {
        name = slice(name, 0, -3);
    }
    return name;
}

function pluginAlias(runtime, name) {
    var index = indexOf(name, '!');
    if (index !== -1) {
        var pluginName = substring(name, 0, index);
        name = substring(name, index + 1);
        S.use(pluginName, {
            sync: true,
            success: function (S, Plugin) {
                if (Plugin.alias) {
                    /* noinspection JSReferencingMutableVariableFromClosure */
                    name = Plugin.alias(runtime, name, pluginName);
                }
            }
        });
    }
    return name;
}



/**
 * Get absolute path of dep module.similar to {@link KISSY.Path#resolve}
 * @param {String} moduleName current module 's name
 * @param {String|String[]} depName dependency module 's name
 * @return {String|String[]} normalized dependency module 's name
 */
function normalDepModuleName(moduleName, depName) {
    var i = 0, l;

    if (!depName) {
        return depName;
    }

    if (isString(depName)) {
        if (startsWith(depName, '../') || startsWith(depName, './')) {
            /* x/y/z -> x/y/ */
            return pathResolveRelative(pathGetDirName(moduleName), depName);
        }

        return pathParseRelative(depName);
    }

    for (l = depName.length; i < l; i++) {
        depName[i] = normalDepModuleName(moduleName, depName[i]);
    }
    return depName;
}

/**
 * create modules info
 * @param runtime Module container, such as KISSY
 * @param {String[]} modNames to be created module names
 */
function createModulesInfo(runtime, modNames) {
    each(modNames, function (m) {
        createModuleInfo(runtime, m);
    });
}

/**
 * create single module info
 * @param runtime Module container, such as KISSY
 * @param {String} modName to be created module name
 * @param {Object} [cfg] module config
 * @return {KISSY.Loader.Module}
 */
function createModuleInfo(runtime, modName, cfg) {
    modName = addIndexAndRemoveJsExtFromName(modName);

    var mods = runtime.Env.mods,
        module = mods[modName];

    if (module) {
        return module;
    }

    /* 防止 cfg 里有 tag，构建 fullpath 需要 */
    mods[modName] = module = new Module(mix({
        name: modName,
        runtime: runtime
    }, cfg));

    return module;
}

/**
 * Get modules exports
 * @param runtime Module container, such as KISSY
 * @param {String[]} modNames module names
 * @return {Array} modules exports
 */
function getModules(runtime, modNames) {
    var mods = [runtime], module,
        unaliasArr,
        allOk,
        m,
        runtimeMods = runtime.Env.mods;

    each(modNames, function (modName) {
        module = runtimeMods[modName];
        if (!module || module.getType() !== 'css') {
            unaliasArr = unalias(runtime, modName);
            allOk = reduce(unaliasArr, function (a, n) {
                m = runtimeMods[n];
                /* allow partial module (circular dependency) */
                return a && m && m.status >= ATTACHING;
            }, true);
            if (allOk) {
                mods.push(runtimeMods[unaliasArr[0]].exports);
            } else {
                mods.push(null);
            }
        } else {
            mods.push(undefined);
        }
    });

    return mods;
}

/**
 * attach modules and their dependency modules recursively
 * @param {String[]} modNames module names
 * @param runtime Module container, such as KISSY
 */
function attachModsRecursively(modNames, runtime) {
    var i,
        l = modNames.length;
    for (i = 0; i < l; i++) {
        attachModRecursively(modNames[i], runtime);
    }
}

function checkModsLoadRecursively(modNames, runtime, stack, errorList, cache) {
    /* for debug. prevent circular dependency */
    stack = stack || [];
    /* for efficiency. avoid duplicate non-attach check */
    cache = cache || {};
    var i,
        s = 1,
        l = modNames.length,
        stackDepth = stack.length;
    for (i = 0; i < l; i++) {
        s = s && checkModLoadRecursively(modNames[i], runtime, stack, errorList, cache);
        stack.length = stackDepth;
    }
    return !!s;
}

function checkModLoadRecursively(modName, runtime, stack, errorList, cache) {
    var mods = runtime.Env.mods,
        status,
        m = mods[modName];
    if (modName in cache) {
        return cache[modName];
    }
    if (!m) {
        cache[modName] = FALSE;
        return FALSE;
    }
    status = m.status;
    if (status === ERROR) {
        errorList.push(m);
        cache[modName] = FALSE;
        return FALSE;
    }
    if (status >= READY_TO_ATTACH) {
        cache[modName] = TRUE;
        return TRUE;
    }
    if (status !== LOADED) {
        cache[modName] = FALSE;
        return FALSE;
    }

    if (indexOf(stack, modName) > -1) {
        /*'find cyclic dependency between mods */
        cache[modName] = TRUE;
        return TRUE;
    }
    stack.push(modName);

    if (checkModsLoadRecursively(m.getNormalizedRequires(),
        runtime, stack, errorList, cache)) {
        m.status = READY_TO_ATTACH;
        cache[modName] = TRUE;
        return TRUE;
    }

    cache[modName] = FALSE;
    return FALSE;
}

/**
 * attach module and its dependency modules recursively
 * @param {String} modName module name
 * @param runtime Module container, such as KISSY
 */
function attachModRecursively(modName, runtime) {
    var mods = runtime.Env.mods,
        status,
        m = mods[modName];
    status = m.status;
    /* attached or circular dependency */
    if (status >= ATTACHING) {
        return;
    }
    m.status = ATTACHING;
    if (m.cjs) {
        /* commonjs format will call require in module code again */
        attachMod(runtime, m);
    } else {
        attachModsRecursively(m.getNormalizedRequires(), runtime);
        attachMod(runtime, m);
    }
}

/**
 * Attach specified module.
 * @param runtime Module container, such as KISSY
 * @param {KISSY.Loader.Module} module module instance
 */
function attachMod(runtime, module) {
    var factory = module.factory,
        exports;

    if (isFunction(factory)) {
        /* compatible and efficiency */
        /* KISSY.add(function(S,undefined){}) */
        var require;
        if (module.requires && module.requires.length) {
            require = function() {
                return module.require.apply(module, arguments);
            };
        }
        /* 需要解开 index，相对路径 */
        /* 但是需要保留 alias，防止值不对应 */
        /* noinspection JSUnresolvedFunction */
        exports = factory.apply(module,
            /* KISSY.add(function(S){module.require}) lazy initialize */
            (module.cjs ? [runtime, require, module.exports, module] : getModules(runtime, module.getRequiresWithAlias())));
        if (exports !== undefined) {
            /* noinspection JSUndefinedPropertyAssignment */
            module.exports = exports;
        }
    } else {
        /* noinspection JSUndefinedPropertyAssignment */
        module.exports = factory;
    }

    module.status = ATTACHED;
}

/**
 * Get module names as array.
 * @param {String|String[]} modNames module names array or  module names string separated by ','
 * @return {String[]}
 */
function getModNamesAsArray(modNames) {
    if (isString(modNames)) {
        modNames = split(replace(modNames, /\s+/g, ''), ',');
    }
    return modNames;
}

/**
 * normalize module names
 * 1. add index : / => /index
 * 2. unalias : core => dom,event,ua
 * 3. relative to absolute : ./x => y/x
 * @param {KISSY} runtime Global KISSY instance
 * @param {String|String[]} modNames Array of module names
 *  or module names string separated by comma
 * @param {String} [refModName]
 * @return {String[]} normalized module names
 */
function normalizeModNames(runtime, modNames, refModName) {
    return unalias(runtime,
        normalizeModNamesWithAlias(runtime, modNames, refModName));
}

/**
 * unalias module name.
 * @param runtime Module container, such as KISSY
 * @param {String|String[]} names moduleNames
 * @return {String[]} unalias module names
 */
function unalias(runtime, names) {
    var ret = [].concat(names),
        i,
        m,
        alias,
        ok = 0,
        j;
    while (!ok) {
        ok = 1;
        for (i = ret.length - 1; i >= 0; i--) {
            if ((m = createModuleInfo(runtime, ret[i])) && ((alias = m.getAlias()) !== undefined)) {
                ok = 0;
                if (typeof alias === 'string') {
                    alias = [alias];
                }
                for (j = alias.length - 1; j >= 0; j--) {
                    if (!alias[j]) {
                        alias.splice(j, 1);
                    }
                }
                ret.splice.apply(ret, [i, 1].concat(addIndexAndRemoveJsExt(alias)));
            }
        }
    }
    return ret;
}

/**
 * normalize module names with alias
 * @param runtime Module container, such as KISSY
 * @param {String[]} modNames module names
 * @param [refModName] module to be referred if module name path is relative
 * @return {String[]} normalize module names with alias
 */
function normalizeModNamesWithAlias(runtime, modNames, refModName) {
    var ret = [], i, l;
    if (modNames) {
        /* 1. index map */
        for (i = 0, l = modNames.length; i < l; i++) {
            if (modNames[i]) {
                ret.push(pluginAlias(runtime, addIndexAndRemoveJsExt(modNames[i])));
            }
        }
    }
    /* 2. relative to absolute (optional) */
    if (refModName) {
        ret = normalDepModuleName(refModName, ret);
    }
    return ret;
}

/**
 * register module with factory
 * @param runtime Module container, such as KISSY
 * @param {String} name module name
 * @param {Function|*} factory module's factory or exports
 * @param [config] module config, such as dependency
 */
function registerModule(runtime, name, factory, config) {
    name = addIndexAndRemoveJsExtFromName(name);

    var mods = runtime.Env.mods,
        module = mods[name];

    if (module && module.factory !== undefined) {
        return;
    }

    /* 没有 use，静态载入的 add 可能执行 */
    createModuleInfo(runtime, name);

    module = mods[name];

    /* 注意：通过 S.add(name[, factory[, config]]) 注册的代码，无论是页面中的代码， */
    /* 还是 js 文件里的代码，add 执行时，都意味着该模块已经 LOADED */
    mix(module, {
        name    : name,
        status  : LOADED,
        factory : factory
    });

    mix(module, config);
}

/**
 * Returns hash code of a string djb2 algorithm
 * @param {String} str
 * @returns {String} hash code
 */
function getHash(str) {
    var hash = 5381,
        i;
    for (i = str.length; --i > -1;) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
        /* hash * 33 + char */
    }
    return hash + '';
}

function getRequiresFromFn(fn) {
    var requires = [];
    fn.toString()
        .replace(commentRegExp, '')
        .replace(requireRegExp, function (match, dep) {
            requires.push(getRequireVal(dep));
        });
    return requires;
}


var commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
    requireRegExp = /[^.'"]\s*require\s*\(([^)]+)\)/g;

function getRequireVal(str) {
    var m = str.match(/^\s*["']([^'"\s]+)["']\s*$/);
    return m ? m[1] : '';
}

function forwardSystemPackage(self, property) {
    return property in self ?
        self[property] :
        self.runtime.Config[property];
}

/**
 * @class KISSY.Loader.Package
 * @private
 * This class should not be instantiated manually.
 */
function Package(cfg) {
    mix(this, cfg);
}

Package.prototype = {
    constructor: Package,

    reset: function (cfg) {
        mix(this, cfg);
    },

    /**
     * Tag for package.
     * tag can not contain ".", eg: Math.random() !
     * @return {String}
     */
    getTag: function () {
        return forwardSystemPackage(this, 'tag');
    },

    /**
     * Get package name.
     * @return {String}
     */
    getName: function () {
        return this.name;
    },

    getPath: function () {
        return this.path || (this.path = this.getUri());
    },

    /**
     * get package uri
     */
    getUri: function () {
        return this.uri;
    },

    /**
     * Whether is debug for this package.
     * @return {Boolean}
     */
    isDebug: function () {
        return forwardSystemPackage(this, 'debug');
    },

    /**
     * Get charset for package.
     * @return {String}
     */
    getCharset: function () {
        return forwardSystemPackage(this, 'charset');
    },

    /**
     * Whether modules are combined for this package.
     * @return {Boolean}
     */
    isCombine: function () {
        return forwardSystemPackage(this, 'combine');
    },

    /**
     * Get package group (for combo).
     * @returns {String}
     */
    getGroup: function () {
        return forwardSystemPackage(this, 'group');
    }
};

Loader.Package = Package;

var systemPackage = new Package({
    name: '',
    runtime: S
});

systemPackage.getUri = function () {
    return this.runtime.Config.baseUri;
};

function getPackage(self, modName) {
    var packages = self.Config.packages || {},
        modNameSlash = modName + '/',
        pName = '',
        p;
    for (p in packages) {
        if (startsWith(modNameSlash, p + '/') && p.length > pName.length) {
            pName = p;
        }
    }
    return packages[pName] || systemPackage;
}


/**
 * @class KISSY.Loader.Module
 * @private
 * This class should not be instantiated manually.
 */
function Module(cfg) {
    /**
     * exports of this module
     */
    this.exports = {};

    /**
     * status of current modules
     */
    this.status = INIT;

    /**
     * name of this module
     */
    this.name = undefined;

    /**
     * factory of this module
     */
    this.factory = undefined;

    /**
     * lazy initialize and commonjs module format
     */
    this.cjs = 1;
    mix(this, cfg);
    this.waitedCallbacks = [];
}

Module.prototype = {
    kissy: 1,

    constructor: Module,

    /**
     * resolve module by name.
     * @param {String|String[]} relativeName relative module's name
     * @param {Function|Object} fn KISSY.use callback
     * @returns {String} resolved module name
     */
    use: function (relativeName, fn) {
        relativeName = getModNamesAsArray(relativeName);
        return S.use(normalDepModuleName(this.name, relativeName), fn);
    },

    /**
     * resolve path
     * @param {String} relativePath relative path
     * @returns {KISSY.Uri} resolve uri
     */
    resolve: function (relativePath) {
        return pathAddBase(relativePath, this.getUri());
    },

    /* use by xtemplate include */
    resolveByName: function (relativeName) {
        return normalDepModuleName(this.name, relativeName);
    },

    /**
     * require other modules from current modules
     * @param {String} moduleName name of module to be required
     * @returns {*} required module exports
     */
    require: function (moduleName) {
        return S.require(moduleName, this.name);
    },

    wait: function (callback) {
        this.waitedCallbacks.push(callback);
    },

    notifyAll: function () {
        var callback;
        var len = this.waitedCallbacks.length,
            i = 0;
        for (; i < len; i++) {
            callback = this.waitedCallbacks[i];
            try {
                callback(this);
            } catch (e) {
                /*jshint loopfunc:true*/
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }
        this.waitedCallbacks = [];
    },

    /**
     * Get the type if current Module
     * @return {String} css or js
     */
    getType: function () {
        var v = this.type;
        if (!v) {
            if (endsWith(toLowerCase(this.name), '.css')) {
                v = 'css';
            } else {
                v = 'js';
            }
            this.type = v;
        }
        return v;
    },

    getAlias: function () {
        var name = this.name,
            aliasFn,
            packageInfo,
            alias = this.alias;
        if (!('alias' in this)) {
            packageInfo = this.getPackage();
            if (packageInfo.alias) {
                alias = packageInfo.alias(name);
            }
            if (!alias && (aliasFn = this.runtime.Config.alias)) {
                alias = aliasFn(name);
            }
        }
        return alias;
    },

    /**
     * Get the path uri of current module if load dynamically
     * @return String
     */
    getUri: function () {
        var uri;
        if (!this.uri) {
            /* path can be specified */
            if (this.path) {
                uri = this.path;
            } else {
                var name        = this.name,
                    packageInfo = this.getPackage(),
                    packageUri  = packageInfo.getUri(),
                    packageName = packageInfo.getName(),
                    extname     = '.' + this.getType(),
                    tag         = this.getTag(),
                    min         = '-min', subPath;
                /* name = Path.join(Path.dirname(name), Path.basename(name, extname)); */
                if (packageInfo.isDebug()) {
                    min = '';
                }
                subPath = pathRemoveExt(name) + min + extname;
                if (packageName) {
                    subPath = pathGetRelative(packageName, subPath);
                }
                uri = pathAddBase(subPath, packageUri);

                if (tag) {
                    uri = pathAddQuery(uri, 't', tag + extname);
                }
            }
            this.uri = uri;
        }
        return this.uri;
    },

    /**
     * Get the path of current module if load dynamically
     * @return {String}
     */
    getPath: function () {
        return this.path || (this.path = this.getUri());
    },

    /**
     * Get the name of current module
     * @return {String}
     */
    getName: function () {
        return this.name;
    },

    /**
     * Get the package which current module belongs to.
     * @return {KISSY.Loader.Package}
     */
    getPackage: function () {
        return this.packageInfo ||
            (this.packageInfo = getPackage(this.runtime, this.name));
    },

    /**
     * Get the tag of current module.
     * tag can not contain ".", eg: Math.random() !
     * @return {String}
     */
    getTag: function () {
        return this.tag || this.getPackage().getTag();
    },

    /**
     * Get the charset of current module
     * @return {String}
     */
    getCharset: function () {
        return this.charset || this.getPackage().getCharset();
    },

    /**
     * get alias required module names
     * @returns {String[]} alias required module names
     */
    getRequiresWithAlias: function () {
        var requiresWithAlias = this.requiresWithAlias,
            requires = this.requires;
        if (!requires || !requires.length) {
            return requires || [];
        } else if (!requiresWithAlias) {
            this.requiresWithAlias = requiresWithAlias =
                normalizeModNamesWithAlias(this.runtime, requires, this.name);
        }
        return requiresWithAlias;
    },

    /**
     * Get module objects required by this module
     * @return {KISSY.Loader.Module[]}
     */
    getRequiredMods: function () {
        var runtime = this.runtime;
        return map(this.getNormalizedRequires(), function (r) {
            return createModuleInfo(runtime, r);
        });
    },

    /**
     * Get module names required by this module
     * @return {String[]}
     */
    getNormalizedRequires: function () {
        var normalizedRequires,
            normalizedRequiresStatus = this.normalizedRequiresStatus,
            status = this.status,
            requires = this.requires;
        if (!requires || !requires.length) {
            return requires || [];
        } else if ((normalizedRequires = this.normalizedRequires) &&
            /* 事先声明的依赖不能当做 loaded 状态下真正的依赖 */
            (normalizedRequiresStatus === status)) {
            return normalizedRequires;
        } else {
            this.normalizedRequiresStatus = status;
            this.normalizedRequires = normalizeModNames(this.runtime, requires, this.name);
            return this.normalizedRequires;
        }
    }
};

Loader.Module = Module;

/**
 * @ignore
 * Declare config info for KISSY.
 * @author yiminghe@gmail.com
 */

var PACKAGE_MEMBERS = ['alias', 'debug', 'tag', 'group', 'combine', 'charset'];
mix(Config.fns, {
    packages : function (config) {
        var name,
            Config = this.Config,
            ps = Config.packages = Config.packages || {};
        if (config) {
            each(config, function (cfg, key) {
                /* 兼容数组方式 */
                name = cfg.name || key;
                var path = cfg.base || cfg.path;
                var newConfig = {
                    runtime: S,
                    name: name
                };
                each(PACKAGE_MEMBERS, function (m) {
                    if (m in cfg) {
                        newConfig[m] = cfg[m];
                    }
                });
                if (path) {
                    if (!endsWith(path, '/')) {
                        path += '/';
                    }
                    if (!cfg.ignorePackageNameInUri) {
                        path += name + '/';
                    }
                    newConfig.uri = normalizeBase(path);
                }
                if (ps[name]) {
                    ps[name].reset(newConfig);
                } else {
                    ps[name] = new Package(newConfig);
                }
            });
            return undefined;
        } else if (config === false) {
            Config.packages = {};
            return undefined;
        } else {
            return ps;
        }
    },
    modules: function (modules) {
        var self = this;
        if (modules) {
            each(modules, function (modCfg, modName) {
                var mod = createModuleInfo(self, modName, modCfg);
                if (mod.status === INIT) {
                    mix(mod, modCfg);
                }
            });
        }
    },
    base: function (base) {
        if (!base) {
            return Config.baseUri;
        } else {
            Config.baseUri = normalizeBase(base);
            return undefined;
        }
    }
});


function normalizeBase(base) {

    base = replace(base, /\\/g, '/');
    if (charAt(base, base.length - 1) !== '/') {
        base += '/';
    }
    return pathAddBase(base);
}

/**
 * combo loader for KISSY. using combo to load module files.
 * @ignore
 * @author yiminghe@gmail.com
 */

/* ie11 is a new one! */

function loadScripts(runtime, rss, callback, charset, timeout) {
    var count = rss && rss.length,
        errorList = [],
        successList = [];

    function complete() {
        if (!(--count)) {
            callback(successList, errorList);
        }
    }

    each(rss, function (rs) {
        var mod;
        var config = {
            timeout: timeout,
            success: function () {
                successList.push(rs);
                if (mod && currentMod) {
                    /* standard browser(except ie9) fire load after KISSY.add immediately */
                    registerModule(runtime, mod.name, currentMod.factory, currentMod.config);
                    currentMod = undefined;
                }
                complete();
            },
            error: function () {
                errorList.push(rs);
                complete();
            },
            charset: charset
        };
        if (!rs.combine) {
            mod = rs.mods[0];
            if (mod.getType() === 'css') {
                mod = undefined;
            }
        }

        getScript(rs.path, config);
    });
}




/**
 * @class KISSY.Loader.ComboLoader
 * using combo to load module files
 * @param runtime KISSY
 * @param waitingModules
 * @private
 */
function ComboLoader(runtime, waitingModules) {
    this.runtime = runtime;
    this.waitingModules = waitingModules;
}


var currentMod,
    startLoadModName,
    startLoadModTime,
    groupTag = now();

ComboLoader.groupTag = groupTag;

function checkKISSYRequire(config, factory) {
    /* use require primitive statement */
    /* function(S,require){require('node')} */
    if (!config && isFunction(factory) && factory.length > 1) {
        var requires = getRequiresFromFn(factory);
        if (requires.length) {
            config = config || {};
            config.requires = requires;
        }
    } else {
        /* KISSY.add(function(){},{requires:[]}) */
        if (config && config.requires && !config.cjs) {
            config.cjs = 0;
        }
    }
    return config;
}

ComboLoader.add = function (name, factory, config, runtime, argsLen) {
    /* KISSY.add('xx',[],function(){}); */
    if (argsLen === 3 && isArray(factory)) {
        var tmp = factory;
        factory = config;
        config = {
            requires: tmp,
            cjs: 1
        };
    }
    /* KISSY.add(function(){}), KISSY.add('a'), KISSY.add(function(){},{requires:[]}) */
    if (isFunction(name) || argsLen === 1) {
        config = factory;
        factory = name;
        config = checkKISSYRequire(config, factory);
        /* 其他浏览器 onload 时，关联模块名与模块定义 */
        currentMod = {
            factory: factory,
            config: config
        };
    } else {
        currentMod = undefined;
        config = checkKISSYRequire(config, factory);
        registerModule(runtime, name, factory, config);
    }
};

function getCommonPrefix(str1, str2) {
    str1 = split(str1, /\//);
    str2 = split(str2, /\//);
    var l = Math.min(str1.length, str2.length);
    for (var i = 0; i < l; i++) {
        if (str1[i] !== str2[i]) {
            break;
        }
    }
    return slice(str1, 0, i).join('/') + '/';
}

ComboLoader.prototype = {
    /**
     * load modules asynchronously
     */
    use: function (normalizedModNames) {
        var self = this,
            allModNames,
            comboUrls,
            timeout = Config.timeout,
            runtime = self.runtime;

        allModNames = keys(self.calculate(normalizedModNames));

        createModulesInfo(runtime, allModNames);

        comboUrls = self.getComboUrls(allModNames);

        /* load css first to avoid page blink */
        each(comboUrls.css, function (cssOne) {
            loadScripts(runtime, cssOne, function (success, error) {

                each(success, function (one) {
                    each(one.mods, function (mod) {
                        registerModule(runtime, mod.name, noop);
                        mod.notifyAll();
                    });
                });

                each(error, function (one) {
                    each(one.mods, function (mod) {
                        mod.status = ERROR;
                        mod.notifyAll();
                    });
                });
            }, cssOne.charset, timeout);
        });

        /* jss css download in parallel */
        each(comboUrls.js, function (jsOne) {
            loadScripts(runtime, jsOne, function (success) {

                each(jsOne, function (one) {
                    each(one.mods, function (mod) {
                        if (!mod.factory) {
                            mod.status = ERROR;
                        }
                        mod.notifyAll();
                    });
                });
            }, jsOne.charset, timeout);
        });
    },

    /**
     * calculate dependency
     */
    calculate: function (modNames, cache, ret) {
        var i,
            m,
            mod,
            modStatus,
            self = this,
            waitingModules = self.waitingModules,
            runtime = self.runtime;

        ret = ret || {};
        cache = cache || {};

        for (i = 0; i < modNames.length; i++) {
            m = modNames[i];
            if (cache[m]) {
                continue;
            }
            cache[m] = 1;
            mod = createModuleInfo(runtime, m);
            modStatus = mod.status;
            if (modStatus >= READY_TO_ATTACH) {
                continue;
            }
            if (modStatus !== LOADED) {
                if (!waitingModules.contains(m)) {
                    if (modStatus !== LOADING) {
                        mod.status = LOADING;
                        ret[m] = 1;
                    }
                    /*jshint loopfunc:true*/
                    mod.wait(function (mod) {
                        waitingModules.remove(mod.name);
                        /* notify current loader instance */
                        waitingModules.notifyAll();
                    });
                    waitingModules.add(m);
                }
            }
            self.calculate(mod.getNormalizedRequires(), cache, ret);
        }

        return ret;
    },

    /**
     * get combo mods for modNames
     */
    getComboMods: function (modNames, comboPrefixes) {
        var comboMods = {},
            runtime = this.runtime,

            packageUri, mod, packageInfo, type, typedCombos, mods,
            tag, charset, comboName, packageName;

        each(modNames, function(modName) {
            mod = createModuleInfo(runtime, modName);
            type = mod.getType();

            packageInfo = mod.getPackage();
            packageName = packageInfo.name;
            charset = packageInfo.getCharset();
            tag = packageInfo.getTag();

            packageUri = packageInfo.getUri();
            comboName = packageName;

            /* remove group feature, leave the origin definition code here */
            mod.canBeCombined = packageInfo.isCombine();

            comboPrefixes[packageName] = packageUri;

            typedCombos = comboMods[type] = comboMods[type] || {};
            if (!(mods = typedCombos[comboName])) {
                mods = typedCombos[comboName] = [];
                mods.charset = charset;
                mods.tags = [tag];
            } else {
                if (!(mods.tags.length === 1 && mods.tags[0] === tag)) {
                    mods.tags.push(tag);
                }
            }
            mods.push(mod);
        });

        return comboMods;
    },

    /**
     * Get combo urls
     */
    getComboUrls: function (modNames) {
        var runtime = this.runtime,
            Config = runtime.Config,
            comboPrefix = Config.comboPrefix,
            comboSep = Config.comboSep,
            maxFileNum = Config.comboMaxFileNum,
            maxUrlLength = Config.comboMaxUrlLength;

        var comboPrefixes = {};
        /* {type, {comboName, [modInfo]}}} */
        var comboMods = this.getComboMods(modNames, comboPrefixes);
        /* {type, {comboName, [url]}}} */
        var comboRes = {};

        /* generate combo urls */
        for (var type in comboMods) {
            comboRes[type] = {};
            for (var comboName in comboMods[type]) {
                var currentComboUrls = [];
                var currentComboMods = [];
                var mods = comboMods[type][comboName];
                var tags = mods.tags;
                var tag = tags.length > 1 ? getHash(tags.join('')) : tags[0];

                var suffix = (tag ? '?t=' + encodeURIComponent(tag) + '.' + type : ''),
                    suffixLength = suffix.length,
                    basePrefix = comboPrefixes[comboName].toString(),
                    baseLen = basePrefix.length,
                    prefix = basePrefix + comboPrefix,
                    res = comboRes[type][comboName] = [];

                var l = prefix.length;
                res.charset = mods.charset;
                res.mods = [];

                /*jshint loopfunc:true*/
                var pushComboUrl = function () {
                    res.push({
                        combine: 1,
                        path: prefix + currentComboUrls.join(comboSep) + suffix,
                        mods: currentComboMods
                    });
                };

                for (var i = 0; i < mods.length; i++) {
                    var currentMod = mods[i];
                    res.mods.push(currentMod);
                    var path = currentMod.getPath();
                    if (!currentMod.canBeCombined) {
                        res.push({
                            combine: 0,
                            path: path,
                            mods: [currentMod]
                        });
                        continue;
                    }
                    /* ignore query parameter */
                    var subPath = path.slice(baseLen).replace(/\?.*$/, '');
                    currentComboUrls.push(subPath);
                    currentComboMods.push(currentMod);

                    if (currentComboUrls.length > maxFileNum ||
                        (l + currentComboUrls.join(comboSep).length + suffixLength > maxUrlLength)) {
                        currentComboUrls.pop();
                        currentComboMods.pop();
                        pushComboUrl();
                        currentComboUrls = [];
                        currentComboMods = [];
                        i--;
                    }
                }
                if (currentComboUrls.length) {
                    pushComboUrl();
                }
            }
        }
        return comboRes;
    }
};

Loader.ComboLoader = ComboLoader;

/*
 2013-09-11
 - union simple loader and combo loader

 2013-07-25 阿古, yiminghe
 - support group combo for packages

 2013-06-04 yiminghe@gmail.com
 - refactor merge combo loader and simple loader
 - support error callback

 2012-02-20 yiminghe note:
 - three status
 0: initialized
 LOADED: load into page
 ATTACHED: factory executed
 */

/**
 * @ignore
 * mix loader into KISSY and infer KISSY baseUrl if not set
 * @author yiminghe@gmail.com
 */

function WaitingModules(fn) {
    this.fn = fn;
    this.waitMods = {};
    this.waitModsNum = 0;
}

WaitingModules.prototype = {
    constructor: WaitingModules,

    notifyAll: function () {
        var fn = this.fn;
        if (fn && !this.waitModsNum) {
            this.fn = null;
            fn();
        }
    },

    add: function (modName) {
        this.waitMods[modName] = 1;
        this.waitModsNum++;
    },

    remove: function (modName) {
        delete this.waitMods[modName];
        this.waitModsNum--;
    },

    contains: function (modName) {
        return this.waitMods[modName];
    }
};

Loader.WaitingModules = WaitingModules;

mix(S, {
    /**
     * Registers a module with the KISSY global.
     * @param {String} name module name.
     * it must be set if combine is true in {@link KISSY#config}
     * @param {Function} factory module definition function that is used to return
     * exports of this module
     * @param {KISSY} factory.S KISSY global instance
     * @param {Object} [cfg] module optional config data
     * @param {String[]} cfg.requires this module's required module name list
     * @member KISSY
     *
     *
     *      // dom module's definition
     *      KISSY.add('dom', function(S, xx){
     *          return {css: function(el, name, val){}};
     *      },{
     *          requires:['xx']
     *      });
     */
    add: function (name, factory, cfg) {
        ComboLoader.add(name, factory, cfg, S, arguments.length);
    },
    /**
     * Attached one or more modules to global KISSY instance.
     * @param {String|String[]} modNames moduleNames. 1-n modules to bind(use comma to separate)
     * @param {Function} success callback function executed
     * when KISSY has the required functionality.
     * @param {KISSY} success.S KISSY instance
     * @param success.x... modules exports
     * @member KISSY
     *
     *
     *      // loads and attached overlay,dd and its dependencies
     *      KISSY.use('overlay,dd', function(S, Overlay){});
     */
    use: function (modNames, success) {
        var normalizedModNames,
            loader,
            error,
            sync,
            tryCount = 0,
            finalSuccess,
            waitingModules = new WaitingModules(loadReady);

        if (isObject(success)) {
            sync = success.sync;
            error = success.error;
            success = success.success;
        }

        finalSuccess = function () {
            success.apply(S, getModules(S, modNames));
        };

        modNames = getModNamesAsArray(modNames);
        modNames = normalizeModNamesWithAlias(S, modNames);

        normalizedModNames = unalias(S, modNames);

        function loadReady() {
            ++tryCount;
            var errorList = [],
                start = now(),
                ret;
            ret = checkModsLoadRecursively(normalizedModNames, S, undefined, errorList);

            if (ret) {
                attachModsRecursively(normalizedModNames, S);
                if (success) {
                    if (sync) {
                        finalSuccess();
                    } else {
                        /* standalone error trace */
                        setImmediate(finalSuccess);
                    }
                }
            } else if (errorList.length) {
                if (error) {
                    if (sync) {
                        error.apply(S, errorList);
                    } else {
                        setImmediate(function () {
                            error.apply(S, errorList);
                        });
                    }
                }
            } else {

                waitingModules.fn = loadReady;
                loader.use(normalizedModNames);
            }
        }

        loader = new ComboLoader(S, waitingModules);

        /*  in case modules is loaded statically
            synchronous check
            but always async for loader
        */
        if (sync) {
            waitingModules.notifyAll();
        } else {
            setImmediate(function () {
                waitingModules.notifyAll();
            });
        }
        return S;
    },

    /**
     * get module exports from KISSY module cache
     * @param {String} moduleName module name
     * @param {String} refName internal usage
     * @member KISSY
     * @return {*} exports of specified module
     */
    require: function (moduleName, refName) {
        if (moduleName) {
            var moduleNames = unalias(S, normalizeModNamesWithAlias(S, [moduleName], refName));
            attachModsRecursively(moduleNames, S);
            return getModules(S, moduleNames)[1];
        }
    }
});

Env.mods = {}; /* all added mods */


/*
 2013-06-04 yiminghe@gmail.com
 - refactor merge combo loader and simple loader
 - support error callback
 */

/**
 * @ignore
 * init loader, set config
 */

//get mini.js src
function getMiniSrc() {
    
    //cache
    if (getMiniSrc.miniSrc) { return getMiniSrc.miniSrc; }
    
    var scripts      = doc.scripts,
        len          = scripts.length,
        baseTestReg  = /(mini|mini-full|mini-all)(?:-min)?\.js/i,
        src          = len ? scripts[len - 1].src : '';
    
    while (len-- > 0) {
        if (baseTestReg.test(scripts[len].src)) {
            src = scripts[len].src;
            break;
        }
    }
    
    return (getMiniSrc.miniSrc = src);
}

// 获取kissy mini目录
// relative: ../../kissy/build/mini-full.js -> ../../kissy/build/
// uncombo: http://g.tbcdn.cn/kissy/m/0.2.8/mini-full.js -> http://g.tbcdn.cn/kissy/m/0.2.8/
// combo: http://g.tbcdn.cn/kissy/??m/0.2.8/mini-full.js -> http://g.tbcdn.cn/kissy/m/0.2.8/
// combo: http://g.tbcdn.cn/??a.js,kissy/m/0.2.8/mini-full.js,b.js -> http://g.tbcdn.cn/kissy/m/0.2.8/
function getBaseDir() {
    var src = getMiniSrc() || doc.URL;
    
    try {
        src = src.match(/.*(mini|mini-full|mini-all)(?:-min)?\.js/i)[0].replace(/(\?\?.*,|\?\?)/, '');
    } catch (err) {}
    
    return src.match(/[^?#]*\//)[0];
}

/* will transform base to absolute path */
config({
    debug       : false,
    base        : getBaseDir(),
    comboPrefix : '??',
    comboSep    : ',',
    charset     : 'utf-8',
    lang        : 'zh-cn',
    comboMaxUrlLength: 2000,
    comboMaxFileNum: 40
});

(function(){

	var S = KISSY;
	var prefix = /http(s)?/.test(location.protocol) ? '' : 'http:';
	S.config({
		base: prefix + '//g.alicdn.com/kissy/k/1.4.5',
		packages:[
			{
				name: "gallery",
				path: prefix + '//g.alicdn.com/kg/',
				charset: "utf-8",
				ignorePackageNameInUri:true
			},
			{
				name:"m",
				path: getBaseDir(),
				charset:"utf-8",
				ignorePackageNameInUri:true
			}
		],
		modules:{
			'core':{
				alias:[
					'm/anim',
					'm/touch',
					'm/lang',
					'm/base',
					'm/ua',
					'm/uri',
					'm/juicer',
					'm/form'
				]
			},
			'anim':{
				alias:['m/anim']
			},
			'touch':{
				alias:['m/touch']
			},
			'lang':{
				alias:['m/lang']
			},
			'base':{
				alias:['m/base']
			},
			'ua':{
				alias:['m/ua']
			},
			'uri':{
				alias:['m/uri']
			},
			'form':{
				alias:['m/form']
			},
			'juicer':{
				alias:['m/juicer']
			}
		}
	});
})();


}(this));
// <style>td {border-top:1px solid #ccc} table {border-collapse: collapse;}</style>

// ### API Delete
// ---

// | API                  | KISSY                | KISSY-MINI           |
// |:-------------------- |:--------------------:|:--------------------:|
// | test                 | √                    | ╳                    |
// | replaceClass         | √                    | ╳                    |
// | style                | √                    | ╳                    |
// | innerWidth           | √                    | ╳                    |
// | innerHeight          | √                    | ╳                    |
// | outerWidth           | √                    | ╳                    |
// | outerHeight          | √                    | ╳                    |
// | addStyleSheet        | √                    | ╳                    |
// | docHeight            | √                    | ╳                    |
// | docWidth             | √                    | ╳                    |
// | viewportHeight       | √                    | ╳                    |
// | viewportWidth        | √                    | ╳                    |
// | scrollIntoView       | √                    | ╳                    |
// | unselectable         | √                    | ╳                    |
// | nodeName             | √                    | ╳                    |
// | outerHTML            | √                    | ╳                    |

// ### API TODO
// ---

// | API                  | KISSY                | KISSY-MINI           |
// |:-------------------- |:--------------------:|:--------------------:|
// | data                 | √                    | ╳                    |
// | removeData           | √                    | ╳                    |
// | hasData              | √                    | ╳                    |

// ### KISSY VS KISSY-MINI
// ---

// | KISSY                | KISSY-MINI           | Note                 |
// |:-------------------- |:--------------------:|:--------------------:|
// | S.DOM.css(el, name)  | S.all(el).css(name)  | 只支持链式写法         |
// | S.DOM.parent(el, 2)  | ╳                    | 不支持指定层级         |
// | S.DOM.clone()        |                      | 只支持元素复制         |

;(function(global, S) {

/**
 * @ignore
 * @file util
 * @author 莫争 <gaoli.gl@taobao.com>
 */

var win   = window,
    doc   = document,
    docEl = doc.documentElement;

var emptyArray = [],
    some       = emptyArray.some,
    every      = emptyArray.every,
    slice      = emptyArray.slice,
    filter     = emptyArray.filter,
    concat     = emptyArray.concat,
    indexOf    = emptyArray.indexOf,
    forEach    = emptyArray.forEach;

function mix(target, source) {
    for (var key in source) {
        target[key] = source[key];
    }
}

function map(els, cb) {
    var val,
        ret = [];

    els && forEach.call(els, function(el, index) {
        val = cb(el, index);
        if (val !== null) {
            ret.push(val);
        }
    });

    return ret.length ? concat.apply([], ret) : ret;
}

function each(els, callback) {
    els && forEach.call(els, callback);
    return els;
}

function isWindow(node) {
    return node && node == node.window;
}

function isDocument(node) {
    return node && node.nodeType === 9;
}

function isElement(node) {
    return node && node.nodeType === 1;
}

function likeArray(nodes) {
    return nodes && typeof nodes.length == 'number';
}

function unique(array) {
    return filter.call(array, function(item, index) {
        return array.indexOf(item) == index;
    });
}

function getScript(url) {
    var script = doc.createElement('script'),
        head   = doc.getElementsByTagName('head')[0] || docEl;

    script.src = url;
    head.insertBefore(script, head.firstChild);
}

function isType(type) {
    return function(obj) {
        return {}.toString.call(obj) == '[object ' + type + ']';
    }
}

var isNumber   = isType('Number'),
    isString   = isType('String'),
    isObject   = isType('Object'),
    isArray    = Array.isArray || isType('Array'),
    isFunction = isType('Function');

var isPlainObject = function(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
};
/**
 * @ignore
 * @file node
 * @author 莫争 <gaoli.gl@taobao.com>
 */

var node = {};

mix(node, {

    // ** .indexOf() **
    //
    // * .indexOf(el)
    //
    //   逻辑类似 `Array.prototype.indexOf`
    //
    //   查找 el 在 els（元素列表）中的位置，el 类型可以是 Node，也可以是原生节点
    indexOf: function(el) {
        return likeArray(el) ?
            indexOf.call(this, el[0]) :
            indexOf.apply(this, arguments);
    },

    // ** .each() **
    //
    // * .each(cb)
    //
    //  遍历数组中的每一项，执行指定方法，函数返回 false 则遍历结束
    //
    //  this 关键字指向当前 item（作为函数的第一个参数传递）
    each: function(cb) {
        every.call(this, function(el, index) {
            el = $(el);
            return cb.call(el, el, index) !== false;
        });
        return this;
    },

    // ** .slice() **
    //
    // * .slice(start[, end])
    //
    //  返回一个新的 Node 集合对象，提取包含从 start 到 end （不包括该元素）的元素
    slice: function() {
        return $(slice.apply(this, arguments));
    },

    // ** .end() **
    //
    // * .end()
    //
    //   得到上一次 S.one() / S.all() 操作前的 Node 对象
    //
    //   引入该方法是为了更好的支持链式操作( chaining )
    //
    //   可以在一个语句内对不同层次得节点集合进行不同的操作
    end: function() {
        return this.__parent || this;
    },

    // ** .getDOMNode() **
    //
    // * .getDOMNode()
    //
    //   得到该 Node 对象包含的第一个原生节点
    getDOMNode: function() {
        return this[0]
    }

});

// ** .all() **
//
// * .all(selector[, context])
//
//   通过执行 css 选择器包装 dom 节点，创建元素或者从一个 html 片段来创建一个 Node 对象
//
//   Node 集合是一个类似数组的对象，它具有链式方法来操作它指向的 dom ，文档对象中的所有方法都是集合方法
//
//   如果选择器中存在 content 参数（css 选择器，dom，或者 Node 集合对象），那么只在所给的节点背景下进行 css 选择器，这个功能有点像使用 `S.all(context).all(selector)`
//
//   可以通过一个 html 字符串片段来创建一个 dom 节点。也可以通过给定一组属性映射来创建节点。最快的创建元素，使用 `<div>` 或 `<div/>` 形式
//
// ```
// var $ = S.all;
//
// $('div');          //=> 获取所有 div 节点
// $('#foo');         //=> 获取 ID 为 'foo' 的节点
// $('<p>Hello</p>'); //=> 创建 p 节点
// $('<div />', {
//     text: 'ok',
//     css : {
//         color: 'red'
//     }
// }); //=> <div style="color:red">ok</div>
// ```
var $ = function(selector, context) {
    var ret = [];

    if (selector) {
        if (isString(selector)) {
            selector = selector.trim();

            if (selector[0] == '<' && /<([\w:]+)/.test(selector)) {
                ret = node.create(selector);
            } else if (context !== undefined) {
                ret = find(selector, $(context));
            } else {
                ret = query(selector, doc);
            }
        } else if ($.isNode(selector)) {
            return selector;
        } else {
            if (selector.nodeType || selector.setTimeout) {
                ret = [selector];
            } else if (isArray(selector)) {
                ret = [];
                each(selector, function(s) {
                    ret.push($.isNode(s) ? s[0] : s);
                });
            } else if (!selector.nodeType && !selector.setTimeout && selector.item) {
                ret = slice.call(selector);
            }
        }
    }

    return $.node(ret);
};

$.all = function(selector, context) {
    return $(selector, context);
};

// ** .one() **
//
// * .one(selector[, context])
//
//   返回一个节点，用法同 `.all()`
$.one = function(selector, context) {
    return $(selector, context).item(0);
};

// ** .node() **
//
// * .node(els)
//
//   把一个节点（数组）转换为 Node（集合）对象
//
// 这里 `$.node` 实际指的是 `S.Node.node`，Node 对象实例将会继承 `S.node` 里的方法
//
// `S.Node.node` 一般情况下可以使用 `S.all()` 来代替
$.node = function(els) {
    els = els || [];
    els.__proto__ = node;
    return els;
};

$.node.prototype = node;

// ** .isNode() **
//
// * .isNode(obj)
//
//   判断一个变量是否为 Node 对象
$.isNode = function(obj) {
    return obj instanceof $.node;
};
/**
 * @ignore
 * @file node-selector
 * @author 莫争 <gaoli.gl@taobao.com>
 */

var tempParent = document.createElement('div');

// ** .find() **
//
// * .find(selector, context)
//
//  内部方法，在 context 范围内查找节点（增强版）
function find(selector, context) {
    return context.length === 1 ?
        query(selector, context[0]) :
        unique(
            map(context, function(el) {
                return query(selector, el);
            })
        );
}

// ** .query() **
//
// * .query(selector, context)
//
//  内部方法，在 context 范围内查找节点
function query(selector, context) {
    var s        = selector.charAt(0), ret,
        maybeID  = s === '#',
        maybeCls = s === '.',
        nameOnly = maybeID || maybeCls ? selector.slice(1) : selector,
        isSimple = /^[\w-]*$/.test(nameOnly);

    context = context === undefined ? document : context;

    return $(
        isDocument(context) || isElement(context) ?
            isDocument(context) && maybeID && isSimple ?
                (ret = context.getElementById(nameOnly)) ? [ret] : [] :
                slice.call(
                    !maybeID && isSimple ?
                        maybeCls ?
                            context.getElementsByClassName(nameOnly) :
                            context.getElementsByTagName(selector) :
                        context.querySelectorAll(selector)
                )
            : []
    );
}

// ** .matches() **
//
// * .matches(el, selector)
//
//  内部方法，选择器匹配加速
function matches(el, selector) {
    if (!el || !selector || !isElement(el)) {
        return false;
    }

    var matchesSelector = el.webkitMatchesSelector ||
                          el.mozMatchesSelector ||
                          el.oMatchesSelector ||
                          el.matchesSelector;

    if (matchesSelector) {
        return matchesSelector.call(el, selector);
    } else {
        var parent    = el.parentNode,
            hasParent = !!parent,
            match;

        if (!hasParent) {
            parent = tempParent;
            parent.appendChild(el);
        }

        match = ~query(selector, parent).indexOf(el);
        !hasParent && parent.removeChild(el);

        return match;
    }
}

mix(S, {
    query: query
});

mix(node, {

    // ** .all() **
    //
    // * .all(selector)
    //
    //  给 `S.node` 参元类挂载 `.all()` 方法，推荐直接使用 `S.all()`
    all: function(selector) {
        var self = this,
            ret;

        ret = $(find(selector, self));
        ret.__parent = self;

        return ret;
    },

    // ** .one() **
    //
    // * .one(selector)
    //
    //  给 `S.node` 参元类挂载 `.one()` 方法，推荐直接使用 `S.one()`
    one: function(selector) {
        var self = this,
            ret;

        ret = self.all(selector);
        ret = ret.length ? ret.slice(0, 1) : null;

        if (ret) {
            ret.__parent = self;
        }

        return ret;
    },

    // ** .filter() **
    //
    // * .filter(selector)
    //
    //  给 `S.node` 参元类挂载 `.filter()` 方法，推荐直接使用 `els.filter()`
    filter: function(selector) {
        if (isFunction(selector)) {
            return $(filter.call(this, function(el) {
                return selector.call(el, el);
            }));
        } else {
            return $(filter.call(this, function(el) {
                return matches(el, selector);
            }));
        }
    }

});

/**
 * @ignore
 * @file node-class
 * @author 莫争 <gaoli.gl@taobao.com>
 */

var classCache = {};

function classRE(name) {
    return name in classCache ?
        classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'));
}

function className(el, val) {
    if (val === undefined) {
        return el.className;
    } else {
        el.className = val;
    }
}

function classSplit(names) {
    return names.split(/[\.\s]\s*\.?/);
}

mix(node, {

    // ** .addClass() **
    //
    // * .addClass(names)
    //
    //  给符合选择器的所有元素添加指定 class
    //
    //  多个 class 类名通过空格分隔
    addClass: function(names) {
        if (!names) return this;
        return each(this, function(el) {
            var $el       = $(el),
                cls       = className(el),
                classList = [];

            each(classSplit(names), function(name) {
                !$el.hasClass(name) && classList.push(name)
            });

            classList.length && className(el, cls + (cls ? ' ' : '') + classList.join(' '))
        });
    },

    // ** .removeClass() **
    //
    // * .removeClass()
    //
    //  给符合选择器的所有元素移除所有 class
    //
    // * .removeClass(names)
    //
    //  给符合选择器的所有元素移除指定 class
    //
    //  多个 class 类名通过空格分隔
    removeClass: function(names) {
        return each(this, function(el) {
            if (names === undefined) {
                return className(el, '');
            } else {
                var classList = className(el);

                each(classSplit(names), function(name) {
                    classList = classList.replace(classRE(name), ' ');
                });

                className(el, classList.trim());
            }
        });
    },

    // ** .toggleClass() **
    //
    // * .toggleClass(names[, when])
    //
    //  操作符合选择器的所有元素，如果存在值为 names 的 class，则移除掉，反之添加
    //
    //  如果 when 的值为真，这个功能类似于 `.addClass()` 方法，如果为假，这个功能类似与 `.removeClass()` 方法
    toggleClass: function(names, when) {
        if (!names) return this;
        return each(this, function(el) {
            var $el = $(el);

            each(classSplit(names), function(name) {
                (when === undefined ? !$el.hasClass(name) : when) ?
                    $el.addClass(name) : $el.removeClass(name);
            });
        });
    },

    // ** .hasClass() **
    //
    // * .hasClass(names)
    //
    //  判断符合选择器的所有元素中是否有某个元素含有特定 class
    hasClass: function(names) {
        if (!names) return false;
        return some.call(this, function(el) {
            return every.call(this, function(name) {
                return name ? classRE(name).test(className(el)) : true;
            });
        }, classSplit(names));
    }

});

/**
 * @ignore
 * @file node-attr
 * @author 莫争 <gaoli.gl@taobao.com>
 */

var RE_BOOLEAN = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;

var attrMethod = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
    propFixMap = {
        hidefocus      : 'hideFocus',
        tabindex       : 'tabIndex',
        readonly       : 'readOnly',
        'for'          : 'htmlFor',
        'class'        : 'className',
        maxlength      : 'maxLength',
        cellspacing    : 'cellSpacing',
        cellpadding    : 'cellPadding',
        rowspan        : 'rowSpan',
        colspan        : 'colSpan',
        usemap         : 'useMap',
        frameborder    : 'frameBorder',
        contenteditable: 'contentEditable'
    };

function pluck(els, property) {
    return map(els, function(el) {
        return el[property];
    });
}

function setAttribute(el, name, val) {
    val == null ? el.removeAttribute(name) : el.setAttribute(name, val)
}

mix(node, {

    // ** .attr() **
    //
    // * .attr(name)
    //
    //   获取符合选择器的第一个元素的属性值
    //
    // * .attr(name, val)
    //
    //   给符合选择器的所有元素设置属性值
    //
    // * .attr(kv)
    //
    //   给符合选择器的所有元素设置属性值
    //
    // `.attr()` 和 `.prop()` 的区别
    //
    // ```
    // el.attr('checked') // => "checked"
    // el.prop('checked') // => true
    // ```
    //
    // `.attr()` 和 `.prop()` 的使用
    //
    // 从中文意思看，两者分别是获取 / 设置 attributes 和 properties 的方法，分别在这两个场景中使用：具有 true 和 false 两个属性的属性，如 checked，selected 或者 disabled 使用 `.prop()`，其他的使用 `.attr()`
    attr: function(name, val) {
        var key,
            ret;

        if (isPlainObject(name)) {
            for (key in name) {
                node.attr.call(this, key, name[key]);
            }
            return this;
        }

        if (~attrMethod.indexOf(name)) {
            return $(this)[name](val);
        }

        if (val == undefined) {
            var el = this[0];

            if (el && isElement(el)) {
                if (RE_BOOLEAN.test(name)) {
                    ret = $(el).prop(name) ? name.toLowerCase() : undefined;
                } else if (name == 'value' && el.nodeName == 'INPUT') {
                    ret = this.val();
                } else {
                    ret = el.getAttribute(name);
                    ret = !ret && name in el ? el[name] : ret;
                }
            }
        } else {
            ret = each(this, function(el) {
                isElement(el) && setAttribute(el, name, val);
            });
        }

        return ret === null ? undefined : ret;
    },

    // ** .removeAttr() **
    //
    // * .removeAttr(name)
    //
    //   移除符合选择器的所有元素的指定属性
    removeAttr: function(name) {
        return each(this, function(el) {
            isElement(el) && setAttribute(el, name)
        });
    },

    // ** .hasAttr() **
    //
    // * .hasAttr(name)
    //
    //   判断符合选择器的所有元素中是否有某个元素含有特定属性
    hasAttr: function(name) {
        if (!name) return false;
        return some.call(this, function(el) {
            return isElement(el) && el.getAttribute(name);
        });
    },

    // ** .prop() **
    //
    // * .prop(name)
    //
    //   获取符合选择器的第一个元素的对应 property 值
    //
    // * .prop(name, val)
    //
    //   给符合选择器的所有元素设置 property 值
    //
    // * .prop(kv)
    //
    //   给符合选择器的所有元素设置 property 值
    prop: function(name, val) {
        name = propFixMap[name] || name;
        return val == undefined ?
            this[0] && this[0][name] :
            each(this, function(el) {
                el[name] = val;
            });
    },

    // ** .hasProp() **
    //
    // * .hasProp(name)
    //
    //  判断符合选择器的第一个元素是否含有特定 property 属性
    hasProp: function(name) {
        if (!name) return false;
        name = propFixMap[name] || name;
        return some.call(this, function(el) {
            return isElement(el) && el[name];
        });
    },

    // ** .val() **
    //
    // * .val()
    //
    //  获取符合选择器的第一个元素所的 value 值
    //
    // * .val(val)
    //
    //  给符合选择器的所有元素设置 value 值
    //
    // 如果是 `<select multiple>` 标签，则返回一个数组
    val: function(val) {
        var el = this[0];

        if (!el) return this;

        if (el.multiple) {
            var opts = $('option', el);

            return val == undefined ?
                slice.call(
                    pluck(
                        opts.filter(function(opt) {
                            return opt.selected;
                        }), 'value'
                    )
                ) :
                each(opts, function(opt) {
                    opt.selected = ~val.indexOf(opt.value);
                });
        } else {
            return val == undefined ?
                el.value :
                each(this, function(el) {
                    el.value = val;
                });
        }
    },

    // ** .text() **
    //
    // * .text()
    //
    //  获取符合选择器的第一个元素所包含的文本值
    //
    // * .val(text)
    //
    //  给符合选择器的所有元素设置文本值
    text: function(text) {
        return text === undefined ?
            this.length ?
                this[0].textContent : null
            :
            each(this, function(el) {
                el.textContent = (text === undefined) ? '' : '' + text
            });
    }

});

/**
 * @ignore
 * @file node-style
 * @author 莫争 <gaoli.gl@taobao.com>
 */

var cssNumber = {
        'column-count': 1,
        'columns'     : 1,
        'font-weight' : 1,
        'line-height' : 1,
        'opacity'     : 1,
        'z-index'     : 1,
        'zoom'        : 1
    },
    elDisplay = {};

function dasherize(str) {
    return str.replace(/::/g, '/')
              .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
              .replace(/([a-z\d])([A-Z])/g, '$1_$2')
              .replace(/_/g, '-')
              .toLowerCase();
}

// ** .camelCase() **
//
// * .camelCase(name)
//
//  内部方法，将一组字符串变成“骆驼”命名法的新字符串，如果该字符已经是“骆驼”命名法，则不变化
//
// ```
// .camelCase('abc-def'); //=> 'abcDef'
// .camelCase('abcDef');  //=> 'abcDef'
// ```
function camelCase(name) {
    return name.replace(/-+(.)?/g, function() {
        return arguments[1].toUpperCase();
    });
}

// ** .maybeAddPx() **
//
// * .maybeAddPx(name, val)
//
//  内部方法，根据情况将数字转换为带单位的值
//
// ```
// .maybeAddPx('width', 12); //=> '12px'
// ```
function maybeAddPx(name, val) {
    return isNumber(val) && !cssNumber[dasherize(name)] ? val + 'px' : val;
}

// ** .getComputedStyle() **
//
// * .getComputedStyle(el, name)
//
//  内部方法，获取元素所有最终使用的 CSS 属性值
function getComputedStyle(el, name) {
    return win.getComputedStyle(el, null).getPropertyValue(name);
}

// ** .getDefaultDisplay() **
//
// * .getDefaultDisplay(tagName)
//
//  内部方法，获取 tag 元素原始 display 属性
function getDefaultDisplay(tagName) {
    if (!elDisplay[tagName]) {
        var el = doc.createElement(tagName),
            display;

        doc.body.appendChild(el);
        display = getComputedStyle(el, 'display');
        el.parentNode.removeChild(el);
        display == 'none' && (display = 'block');
        elDisplay[tagName] = display;
    }

    return elDisplay[tagName];
}

mix(node, {

    // ** .css() **
    //
    // * .css(name)
    //
    //  获取符合选择器的第一个元素的样式值
    //
    // * .css(name, val)
    //
    //  给符合选择器的所有元素设置样式值
    //
    // * .css(kv)
    //
    //  给符合选择器的所有元素设置样式值
    //
    // ```
    // var el = $('h1');
    // el.css('background-color');         // 获取属性
    // el.css('background-color', '#369'); // 设置属性
    // el.css('background-color', '');     // 删除属性
    // // 设置多个属性
    // el.css({
    //     fontSize       : 28,
    //     backgroundColor: '#8EE'
    // });
    // ```
    css: function(name, val) {
        var key,
            cssProp,
            ret = '';

        if (val == undefined) {
            if (isString(name)) {
                var el = this[0];

                return el ? el.style[camelCase(name)] || getComputedStyle(el, name) : '';
            } else if (isObject(name)) {
                for (key in name) {
                    cssProp = dasherize(key);
                    if (!name[key] && name[key] !== 0) {
                        each(this, function(el) {
                            el.style.removeProperty(cssProp);
                        });
                    } else {
                        ret += cssProp + ':' + maybeAddPx(key, name[key]) + ';';
                    }
                }
            }
        } else {
            cssProp = dasherize(name);
            if (!val && val !== 0) {
                each(this, function(el) {
                    el.style.removeProperty(cssProp);
                });
            } else {
                ret = cssProp + ':' + maybeAddPx(name, val) + ';';
            }
        }

        return each(this, function(el) {
            el.style.cssText += ';' + ret;
        });
    },

    // ** .show() **
    //
    // * .show()
    //
    //  显示符合选择器的所有元素
    show: function() {
        return each(this, function(el) {
            el.style.display == 'none' && (el.style.display = '');
            if (getComputedStyle(el, 'display') == 'none') {
                el.style.display = getDefaultDisplay(el.nodeName);
            }
        });
    },

    // ** .hide() **
    //
    // * .hide()
    //
    //  隐藏符合选择器的所有元素
    hide: function() {
        return this.css('display', 'none');
    },

    // ** .toggle() **
    //
    // * .toggle()
    //
    //  将符合选择器的所有元素切换显示/隐藏两个状态
    toggle: function() {
        return each(this, function(el) {
            var $el = $(el);

            $el.css('display') == 'none' ? $el.show() : $el.hide();
        });
    }

});

// ** .width() **
//
// * .width()
//
//  获取符合选择器的第一个元素的宽度值
//
// * .width(val)
//
//  给符合选择器的所有元素设置宽度值
//
// `.width()` 和 `.css('width')` 的区别
//
// `.width()` 返回不带单位的纯数值，`.css('width')` 返回带单位的原始值（例如：400px），当需要数值计算时, 推荐该方法.
//
// 获取 `window` 和 `document` 的宽度
//
// ```
// // 获取当前可视区域的宽度值, 相当于 viewportWidth
// S.all(window).width();
//
// // 获取页面文档 document 的总宽度, 相当于 docWidth
// S.all(document).width();
// ```
//
// ** .height() **
//
// * .height()
//
//  获取符合选择器的第一个元素的高度值
//
// * .height(val)
//
//  给符合选择器的所有元素设置高度值
//
// 获取 `window` 和 `document` 的高度
//
// ```
// // 获取当前可视区域的高度值, 相当于 viewportHeight
// S.all(window).height();
//
// // 获取页面文档 document 的总高度, 相当于 docHeight
// S.all(document).height();
// ```
each(['width', 'height'], function(method) {
    node[method] = function(val) {
        var el = this[0];

        if (val) {
            return $(this).css(method, val);
        } else {
            return isWindow(el) ? el[camelCase('inner-' + method)] :
                isDocument(el) ? docEl[camelCase('scroll-' + method)] :
                    this.offset()[method];
        }
    };
});

/**
 * @ignore
 * @file node-traversal
 * @author 莫争 <gaoli.gl@taobao.com>
 */

function filtered(els, selector) {
    var $els = $(els);

    return selector !== undefined ?
        $els.filter(
            isArray(selector) ?
                function(el) {
                    return some.call(selector, function(filter) {
                        return matches(el, filter);
                    });
                } :
                selector
        ) :
        $els;
}

function children(el) {
    return 'children' in el ?
        slice.call(el.children) :
        map(el.childNodes, function(el) {
            if (isElement(el)) {
                return el;
            }
        });
}

function nth(el, filter, property, includeSelf) {
    var ret   = [],
        array = isArray(filter);

    el = includeSelf ? el : el[property];

    while (el) {
        if (el && !isDocument(el) && isElement(el) && ret.indexOf(el) < 0) {
            ret.push(el);
        }
        el = el[property];
    }

    if (array && !filter.length) {
        filter = undefined
    }

    ret = filtered(ret, filter);

    return array ?
        ret :
        ret.item(0);
}

mix(node, {

    // ** .item() **
    //
    // * .item(index)
    //
    //  获取包含当前节点列表 index 位置处的单个原生节点的新 NodeList 对象
    item: function(index) {
        var self = this;

        return isNumber(index) ?
            index >= self.length ?
                null :
                $(self[index]) :
            $(index);
    },

    // ** .first() **
    //
    // * .first([filter])
    //
    //  获取符合选择器的第一个元素的第一个子节点
    first: function(filter) {
        return nth(this[0] && this[0].firstChild, filter, 'nextElementSibling', true);
    },

    // ** .last() **
    //
    // * .last([filter])
    //
    //  获取符合选择器的第一个元素的最后一个子节点
    last: function(filter) {
        return nth(this[0] && this[0].lastChild, filter, 'previousElementSibling', true);
    },

    // ** .next() **
    //
    // * .next([filter])
    //
    //  获取符合选择器的第一个元素的下一个同级节点
    next: function(filter) {
        return nth(this[0], filter, 'nextElementSibling');
    },

    // ** .prev() **
    //
    // * .prev([filter])
    //
    //  获取符合选择器的第一个元素的上一个同级节点
    prev: function(filter) {
        return nth(this[0], filter, 'previousElementSibling');
    },

    // ** .parent() **
    //
    // * .parent([filter])
    //
    //  获取符合选择器的第一个元素的祖先元素
    parent: function(filter) {
        return nth(this[0], filter, 'parentNode');
    },

    // ** .children() **
    //
    // * .children([filter])
    //
    //  获取符合选择器的所有非文字节点的子节点
    children: function(selector) {
        var el = this[0];

        return el ?
            filtered(children(el), selector) :
            this;
    },

    // ** .siblings() **
    //
    // * .siblings([filter])
    //
    //  获取符合选择器的第一个元素的相应同级节点
    siblings: function(selector) {
        var el = this[0];

        return el ?
            filtered(
                filter.call(children(el.parentNode), function(child) {
                    return child !== el;
                })
            , selector) :
            this;
    },

    // ** .contents() **
    //
    // * .contents()
    //
    //  获取符合选择器的所有子节点（包括文字节点）
    contents: function() {
        var el = this[0];

        return el ?
            $(slice.call(el.childNodes)) :
            this;
    },

    // ** .contains() **
    //
    // * .contains(contained)
    //
    //  判断某一容器（container）是否包含另一（contained）节点
    contains: function(contained) {
        var container = this[0],
            contained = likeArray(contained) ? contained[0] : contained;

        return container && contained ?
            container !== contained && container.contains(contained) :
            false;
    }

});

/**
 * @ignore
 * @file node-insertion
 * @author 莫争 <gaoli.gl@taobao.com>
 */

// ** .filterScripts() **
//
// * .filterScripts(nodes, scripts)
//
//  内部方法，将 nodes 中的脚本节点过滤掉
function filterScripts(nodes, scripts) {
    var ret = [];

    each(nodes, function(node) {
        var name = node.nodeName,
            type = node.type,
            temp = [];

        if (name && name === 'SCRIPT' && (!type || type === 'text/javascript')) {
            node.parentNode && node.parentNode.removeChild(node);
            scripts && scripts.push(node);
        } else {
            if (isElement(node)) {
                each(node.getElementsByTagName('script'), function(el) {
                    temp.push(el);
                });
                filterScripts(temp, scripts);
            }
            ret.push(node);
        }
    });

    return ret;
}

// ** .nodeListToFragment() **
//
// * .nodeListToFragment(nodes)
//
//  内部方法，将 nodes 转换为文档片段，不会被添加到文档树中
function nodeListToFragment(nodes) {
    var ret = null;

    if (nodes && likeArray(nodes)) {
        ret = doc.createDocumentFragment();

        each(nodes, function(node) {
            ret.appendChild(node);
        });
    }

    return ret;
}

mix(node, {

    // ** .wrapAll() **
    //
    // * .wrapAll(wrapperNode)
    //
    //  在所有匹配元素外面包一层 HTML 结构
    //
    // ```
    // <div class="container">
    //     <div class="inner">Hello</div>
    //     <div class="inner">Goodbye</div>
    // </div>
    //
    // S.all('.inner').wrapAll('<div class="new" />'); //=>
    //
    // <div class="container">
    //     <div class="new">
    //         <div class="inner">Hello</div>
    //         <div class="inner">Goodbye</div>
    //     </div>
    // </div>
    // ```
    wrapAll: function(wrapperNode) {
        var el = this[0];

        if (el) {
            var $wrapperNode = $(wrapperNode),
                $wrapperChildren;

            $wrapperNode.insertBefore(el);

            while (($wrapperChildren = $wrapperNode.children()).length) {
                $wrapperNode = $wrapperNode.first();
            }

            $wrapperNode.append(this);
        }

        return this;
    },

    // ** .wrap() **
    //
    // * .wrap(wrapperNode)
    //
    //  在每个匹配的元素外层包上一个 HTML 元素
    //
    // ```
    // <div class="container">
    //     <div class="inner">Hello</div>
    //     <div class="inner">Goodbye</div>
    // </div>
    //
    // S.all('.inner').wrap('<div class="new" />'); //=>
    //
    // <div class="container">
    //     <div class="new">
    //         <div class="inner">Hello</div>
    //     </div>
    //     <div class="new">
    //         <div class="inner">Goodbye</div>
    //     </div>
    // </div>
    // ```
    wrap: function(wrapperNode) {
        var $wrapperNode = $(wrapperNode),
            wrapperClone = $wrapperNode[0].parentNode || this.length;

        return each(this, function(el) {
            $(el).wrapAll(
                wrapperClone ? $wrapperNode[0].cloneNode(true) : $wrapperNode[0]
            );
        });
    },

    // ** .unwrap() **
    //
    // * .unwrap()
    //
    //  移除集合中每个元素的直接父节点，并把他们的子元素保留在原来的位置
    //
    // ```
    // <div class="container">
    //     <div class="new">
    //         <div class="inner">Hello</div>
    //     </div>
    //     <div class="new">
    //         <div class="inner">Goodbye</div>
    //     </div>
    // </div>
    //
    // S.all('.inner').unwrap(); //=>
    //
    // <div class="container">
    //     <div class="inner">Hello</div>
    //     <div class="inner">Goodbye</div>
    // </div>
    // ```
    unwrap: function() {
        return each(this, function(el) {
            var $el     = $(el),
                $parent = $el.parent();

            $parent.replaceWith($parent.children());
        });
    },

    // ** .wrapInner() **
    //
    // * .wrapInner(wrapperNode)
    //
    //  将每个元素中的内容包裹在一个单独的结构中
    //
    // ```
    // <div class="container">
    //     <div class="inner">Hello</div>
    //     <div class="inner">Goodbye</div>
    // </div>
    //
    // S.all('.inner').wrapInner('<div class="new" />'); //=>
    //
    // <div class="container">
    //     <div class="inner">
    //         <div class="new">Hello</div>
    //     </div>
    //     <div class="inner">
    //         <div class="new">Goodbye</div>
    //     </div>
    // </div>
    // ```
    wrapInner: function(wrapperNode) {
        return each(this, function(el) {
            var $el       = $(el),
                $children = $el.children();

            if ($children.length) {
                $children.wrapAll(wrapperNode);
            } else {
                $el.append(wrapperNode);
            }
        });
    },

    // ** .replaceWith() **
    //
    // * .replaceWith(newNodes)
    //
    //  用给定的内容替换所有匹配的元素
    replaceWith: function(newNodes) {
        return this.before(newNodes).remove();
    }

});

// ** .after() **
//
// * .after(html)
//
//  在匹配元素集合中的每个元素后面插入内容，作为其兄弟节点
//
//  内容可以为 HTML字符串，DOM 元素，DOM元素数组
//
// ** .prepend() **
//
// * .prepend(html)
//
//  将内容插入到每个匹配元素的前面（元素内部）
//
//  内容可以为 HTML字符串，DOM 元素，DOM元素数组
//
// ** .before() **
//
// * .before(html)
//
//  在匹配元素的前面（元素外部）插入内容
//
//  内容可以为 HTML字符串，DOM 元素，DOM元素数组
//
// ** .append() **
//
// * .append(html)
//
//  在每个匹配元素里面的末尾处插入内容
//
//  内容可以为 HTML字符串，DOM 元素，DOM元素数组，包含DOM元素的数组，包含Node元素的数组

each(['after', 'prepend', 'before', 'append'], function(method, index) {
    var inside = index % 2;

    node[method] = function(html) {
        var nodes  = $.isNode(html) ? html : (isArray(html) ? $.all(html) : node.create(html + '')),
            isCopy = this.length > 1,
            scripts = [],
            parent,
            target;

        if (nodes.length) {
            nodes = nodeListToFragment(filterScripts(nodes, scripts));
        } else {
            return this;
        }

        return each(this, function(el) {
            parent = inside ? el : el.parentNode;

            switch (index) {
                case 0:
                    target = el.nextSibling;
                    break;
                case 1:
                    target = el.firstChild;
                    break;
                case 2:
                    target = el;
                    break;
                default:
                    target = null;
            }

            parent.insertBefore(isCopy ? nodes.cloneNode(true) : nodes, target);

            each(scripts, function(el) {
                if (el.src) {
                    getScript(el.src);
                } else {
                    win['eval'].call(win, el.innerHTML);
                }
            });
        });
    };

    // ** .insertAfter() **
    //
    // * .insertAfter(target)
    //
    //  将集合中的元素插入到指定的目标元素后面（外部插入）
    //
    // ** .prependTo() **
    //
    // * .prependTo(target)
    //
    //  将所有元素插入到目标前面（内部插入）
    //
    // ** .insertBefore() **
    //
    // * .insertBefore(target)
    //
    //  将集合中的元素插入到指定的目标元素前面（外部插入）
    //
    // ** .appendTo() **
    //
    // * .appendTo(target)
    //
    //  将匹配的元素插入到目标元素的末尾（内部插入）
    node[inside ? method + 'To' : 'insert' + (index ? 'Before' : 'After')] = function(target) {
        $(target)[method](this);
        return this;
    };
});

/**
 * @ignore
 * @file node-offset
 * @author 莫争 <gaoli.gl@taobao.com>
 */

mix(node, {

    // ** .offset() **
    //
    // * .offset()
    //
    //  获取符合选择器的第一个元素相对页面文档左上角的偏移值
    //
    // * .offset(coordinates)
    //
    //  给符合选择器的所有元素设置偏移值
    offset: function(coordinates) {
        var ret;

        if (this.length) {
            if (coordinates === undefined) {
                var obj = this[0].getBoundingClientRect();

                ret = {
                    left  : obj.left + win.pageXOffset,
                    top   : obj.top  + win.pageYOffset,
                    width : Math.round(obj.width),
                    height: Math.round(obj.height)
                }
            } else {
                each(this, function(el) {
                    var ret = {},
                        $el = $(el),
                        old = $el.offset(),
                        key,
                        current;

                    if ($el.css('position') === 'static') {
                        $el.css('position', 'relative');
                    }

                    for (key in coordinates) {
                        current  = parseFloat($el.css(key)) || 0;
                        ret[key] = current + coordinates[key] - old[key];
                    }

                    $el.css(ret);
                });

                return this;
            }
        }

        return ret;
    }

});

// ** .scrollTop() **
//
// * .scrollTop()
//
//  获取窗口或元素的 scrollTop 值
//
// * .scrollTop(val)
//
//  设置窗口或元素的 scrollTop 值
//
// ** .scrollLeft() **
//
// * .scrollLeft()
//
//  获取窗口或元素的 scrollLeft 值
//
// * .scrollLeft(val)
//
//  设置窗口或元素的 scrollLeft 值
each(['scrollTop', 'scrollLeft'], function(method, index) {

    node[method] = function(val) {
        var el        = this[0],
            hasScroll = method in el;

        return val === undefined ?
            hasScroll ?
                el[method] :
                el['page' + (index ? 'X' : 'Y') + 'Offset']
            :
            hasScroll ?
                each(this, function(el) {
                    el[method] = val;
                }) :
                each(this, function(el) {
                    if (index) {
                        el.scrollTo(val, el.scrollY);
                    } else {
                        el.scrollTo(el.scrollX, val);
                    }
                });
    }

});

/**
 * @ignore
 * @file node-create
 * @author 莫争 <gaoli.gl@taobao.com>
 */

var RE_TAG        = /<([\w:]+)/,
    RE_XHTML_TAG  = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    RE_SINGLE_TAG = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

var div        = doc.createElement('div'),
    table      = doc.createElement('table'),
    tableBody  = doc.createElement('tbody'),
    tableRow   = doc.createElement('tr'),
    containers = {
        '*'  : div,
        thead: table,
        tbody: table,
        tfoot: table,
        tr   : tableBody,
        th   : tableRow,
        td   : tableRow
    };

mix(node, {

    // ** .create() **
    //
    // * .create(html, props)
    //
    //  创建 dom 节点
    //
    // ```
    // S.node.create('<div>')
    // S.node.create('<div />')
    // S.node.create('<div></div>') //=> 创建 DIV 节点
    // ```
    // ```
    // S.node.create('<div></div>', {
    //     text: 'ok',
    //     css : {color: 'red'}
    // }); //=> 创建 DIV 节点，内容为'ok'，颜色为红色
    // ```
    create: function(html, props) {
        var key,
            ret = [],
            tag,
            container;

        if (!html || !isString(html)) {
            return ret;
        }

        if (RE_SINGLE_TAG.test(html)) {
            ret = $(doc.createElement(RegExp.$1));
        } else {
            html = html.replace(RE_XHTML_TAG, '<$1></$2>');
            tag  = RE_TAG.test(html) && RegExp.$1;

            container = containers[tag] || containers['*'];
            container.innerHTML = html;

            ret = each(slice.call(container.childNodes), function(el) {
                container.removeChild(el);
            });
        }

        if (isPlainObject(props)) {
            for (key in props) {
                ret.attr(key, props[key]);
            }
        }

        return ret;
    },

    // ** .html() **
    //
    // * .html()
    //
    //  获取符合选择器的第一个元素的 innerHTML
    //
    // * .html(html[, loadScripts])
    //
    //  给符合选择器的所有元素设置 innerHTML 值
    //
    //  loadScripts 表示是否执行 html 中的内嵌脚本，默认 false
    //
    // ```
    // var el   = S.node.create('<div id="J_check"></div>');
    // var html = [
    //     '<h3>This is the added part</h3>',
    //     '<script>alert(1)</script>'
    // ].join('');
    // el.html(html);
    // //=> 不会 alert(1)
    // el.html();
    // //=> <h3>This is the added part</h3>
    // el.html(html, true);
    // //=> alert(1)
    // ```
    html: function(html, loadScripts) {
        return html === undefined ?
            this.length ? this[0].innerHTML : null
            :
            each(this, function(el) {
                $(el).empty().append(html, loadScripts);
            });
    },

    // ** .remove() **
    //
    // * .remove()
    //
    //  将符合选择器的所有元素从 DOM 中移除
    remove: function() {
        var self = this;

        // 移除所有事件绑定
        self.detach && self.detach();

        return each(self, function(el) {
            el.parentNode && el.parentNode.removeChild(el)
        });
    },

    // ** .empty() **
    //
    // * .empty()
    //
    //  清除节点的所有子孙节点
    empty: function() {
        return each(this, function(el) {
            el.innerHTML = '';
        });
    },

    // ** .clone() **
    //
    // * .clone([deep])
    //
    //  获取符合选择器的第一个元素的克隆元素
    //
    //  deep 表示是否深度克隆（克隆节点的子孙节点），默认 false
    clone: function(deep) {
        return $(
            map(this, function(el) {
                return el.cloneNode(!!deep);
            })
        );
    }

});

/**
 * @ignore
 * @file ie
 * @author 莫争 <gaoli.gl@taobao.com>
 */

// IE10 及以下浏览器不支持 `__proto__` 继承，需重写 `.node()` 和 `.isNode()` 方法来兼容
if (!('__proto__' in {})) {
    mix($, {
        node: function(els) {
            els = els || [];
            mix(els, node);
            els.__node = true;
            return els;
        },
        isNode: function(obj) {
            return isArray(obj) && '__node' in obj;
        }
    });
}
/**
 * @ignore
 * @file output
 * @author 莫争 <gaoli.gl@taobao.com>
 */

// ** Node 模块提供的快捷方式 **
//
// ```
// mix(S, {
//     node    : node,  // 参元类
//     Node    : $,     // 构造器
//     NodeList: $,     // 构造器
//     one     : $.one, // 获取 / 创建一个 Node 对象
//     all     : $.all  // 获取 / 创建一批 Node 对象
// });
// ```
mix(S, {
    node    : node,
    Node    : $,
    NodeList: $,
    one     : $.one,
    all     : $.all
});

S.add && S.add('node', function (S) {
    return $;
});

}(this, KISSY));
// ## Event 模块
// 
// **Event 用法：**
//
// 1.直接使用
//
// ```
//	var $ = KISSY.Node.all;
//	$('body').on('click', function(ev){
//		console.log(ev)
//	});
// ```
//
// 2.普通对象的自定义事件
//
//	```
//	var a = {}, S = KISSY;
//	S.mix(a, S.Event.Target);
//	a.on('my_event', function(ev){
//		console.log(ev)
//	});
//	a.fire('my_event', {"data1": 1, "data2": 2});
//	```
// **未列出的Event API與KISSY保持用法一致**
//
//| API                      | KISSY                | KISSY-MINI           |
//| --------------------     |:--------------------:|:--------------------:|
//| Event.Object             | YES                  | NO                   |
//| Event.Target.publish     | YES                  | NO                   |
//| Event.Target.addTarget   | YES                  | NO                   |
//| Event.Target.removeTarget| YES                  | NO                   |
//| mouseenter               | YES                  | NO                   |
//| mouseleave               | YES                  | NO                   |
//| mousewheel               | YES                  | NO                   |
//| gestures                 | YES                  | `Import touch.js*`   |
//| &nbsp;|&nbsp;|&nbsp;| 
//
// **与 zeptojs 对比，有以下差异：**
//
// 1. 去除对鼠标兼容事件的支持，包括 mouseenter/mouseleave；
// 2. 提供对普通对象的自定义事件支持，需提前混入 S.Event.Target
//
// **与 KISSY 对比，有以下差异：**
//
// 1. 仅支持链式调用，不支持 Event.on 语法；
// 2. 自定义事件不支持冒泡等属性和方法；
// 3. 触控事件需额外引入 touch.js；
// 4. 回调返回的 event 对象是兼容处理后的原生事件对象，不再提供 ev.originalEvent

(function(S){

S.Event || (S.Event = {});
var $ = S.all,
    Node = S.node,
    _eid = 1,
    isFunction = function(obj){
        return typeof obj == 'function';
    },
    /* 简化 S.mix */
    mix = function(target, source) {
        for (var key in source) {
            target[key] = source[key];
        }
    },
    /* 简化 S.each */
    each = function(obj, iterator, context) {
        Object.keys(obj).map(function(name){
            iterator.call(context, obj[name], name, obj);
        });
    },
    slice = [].slice,
    handlers = [],
    focusinSupported = 'onfocusin' in window,
    /* 焦点事件代理 */
    focusEvent = {
        focus: 'focusin',
        blur: 'focusout'
    },
    specialEvents = {
        "click": "MouseEvent"
    },
    eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
    };

/**
 * 生成返回布尔值函数的方法
 * @param  {[type]} trueOrFalse [description]
 * @return {[type]}             [description]
 */
// returnBool(trueOrFalse)
//
// 内部方法，生成返回布尔值函数的方法
function returnBool(trueOrFalse) {
   return function(){ return trueOrFalse; };
}

/**
 * 生成和 DOM 绑定的唯一 id
 * @param  {[type]} element [description]
 * @return {[type]}         [description]
 */
// eid(element)
//
// 内部方法，生成和 DOM 绑定的唯一 id
function eid(element) {
    return element._eid || (element._eid = _eid++);
}

/**
 * 解析事件字符串
 * @param  {String} event 原始的事件类型字符串
 * @return {Object}       解析后得到的事件类型对象
 */
// parse(event)
//
// 内部方法，解析事件字符串
function parse(event) {
    var parts = event.split('.');
    return {
        e : parts[0],
        ns: parts.slice(1).join(' ')
    };
}

/**
 * 根据事件类型 ns 生成匹配正则，用于判断是否在同一个分组
 * @param  {String} ns [description]
 * @return {RegExp}    [description]
 */
// matcherFor(ns)
//
// 内部方法，根据事件类型 ns 生成匹配正则，用于判断是否在同一个分组
function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |S)');
}

/**
 * 获得指定的 Handler
 * @param  {[type]}   element  [description]
 * @param  {[type]}   event    [description]
 * @param  {Function} fn       [description]
 * @param  {[type]}   selector [description]
 * @return {[type]}            [description]
 */
// findHandlers(el,event,fn)
//
// 内部方法，获得指定的 Handler
function findHandlers(element, event, fn, selector, scope) {
    var evt = parse(event);
    if (evt.ns) var matcher = matcherFor(evt.ns);
    return (handlers[eid(element)] || []).filter(function(handler) {
        return handler &&
            (!evt.e || handler.e == evt.e) &&
            (!evt.ns || matcher.test(handler.ns)) &&
            (!fn || handler.fn === fn) &&
            (!selector || handler.sel == selector) &&
            (!scope || handler.scope === scope);
    });
}

/**
 * 获得是否捕获事件状态，焦点事件一律捕获
 * @param  {[type]}  handler        [description]
 * @param  {[type]}  captureSetting [description]
 * @return {Boolean}                [description]
 */
// isCapture(handler,capture)
//
// 内部方法，获得是否捕获事件状态，焦点事件一律捕获
function isCapture(handler, capture) {
    return handler.del &&
        (!focusinSupported && (handler.e in focusEvent)) || !!capture;
}

/**
 * 将焦点事件统一为真实事件，但 firefox 因为不支持 focusinout 所以不会被转换
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
// eventCvt(type)
//
// 内部方法，将焦点事件统一为真实事件，但 firefox 因为不支持 focusinout 所以不会被转换
function eventCvt(type) {
    return (focusinSupported && focusEvnet[type]) || type;
}

/**
 * 复制原事件对象，并作为原事件对象的代理
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
// createProxy(event)
//
// 内部方法，复制原事件对象，并作为原事件对象的代理
function createProxy(event) {
    var key, proxy = {
            originalEvent: event
        };
    for (key in event)
        if (event[key] !== undefined) proxy[key] = event[key];
    return compatible(proxy, event);
}
S.Event.createProxy = createProxy;

/**
 * 针对三个事件属性做兼容
 * @param  {[type]} event  [description]
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
// compatible(event,source)
//
// 内部方法，针对三个事件属性做兼容
function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
        source || (source = event);
        each(eventMethods, function(predicate,name) {
            var sourceMethod = source[name];
            event[name] = function() {
                this[predicate] = returnBool(true);
                return sourceMethod && sourceMethod.apply(source, arguments);
            };
            event[predicate] = returnBool(false);
        });

		event.halt = function(){
			this.preventDefault();
			this.stopPropagation();
		};

        if (source.defaultPrevented !== undefined ? source.defaultPrevented :
            'returnValue' in source ? source.returnValue === false :
            source.getPreventDefault && source.getPreventDefault())
            event.isDefaultPrevented = returnBool(true);
    }
    return event;
}

/**
 * 生成原生事件对象
 * @param  {[type]} type  [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
// createEvent(type,props)
//
// 内部方法，生成原生事件对象
function createEvent(type, props) {
    var event = document.createEvent(specialEvents[type] || 'Events'),
        bubbles = true;
    if (props) {
        for (var name in props) {
            name == 'bubbles' ? (bubbles = !!props[name]) : (event[name] = props[name]);
        }
    }
    event.initEvent(type, bubbles, true);
    return compatible(event);
}

/**
 * 添加事件绑定的主函数
 * @param {[type]}   element   [description]
 * @param {[type]}   events    [description]
 * @param {Function} fn        [description]
 * @param {[type]}   data      [description]
 * @param {[type]}   selector  [description]
 * @param {[type]}   delegator [description]
 * @param {[type]}   capture   [description]
 */
// add(el,event,fn)
//
// 内部方法，添加事件绑定的主函数
function add(element, events, fn, selector, delegator, scope) {
    var id = eid(element),
        set = (handlers[id] || (handlers[id] = []));
    if (events == 'ready') return S.ready(fn);
    events.split(/\s/).map(function(event) {
        var handler = parse(event);
        handler.fn = fn;
        handler.sel = selector;
        handler.del = delegator;
        handler.scope = scope;
        var callback = delegator || fn;
        handler.proxy = function(e) {
            e = compatible(e);
            if (e.isImmediatePropagationStopped && e.isImmediatePropagationStopped()) return;
            var result = callback.apply(scope || element, e._args == undefined ? [e] : [e].concat(e._args));
            if (result === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            return result;
        };
        handler.i = set.length;
        set.push(handler);
        element.addEventListener(eventCvt(handler.e), handler.proxy, isCapture(handler));
		/* 自定义 DOM 事件处理，初始化*/
		if(typeof event !== 'undefined' && event in S.Event.Special){
			S.Event.Special[event].setup.apply(S.one(element,[handler.scope]));
		}
    });
}

/**
 * 移除事件绑定的主函数
 * @param  {[type]}   element  [description]
 * @param  {[type]}   events   [description]
 * @param  {Function} fn       [description]
 * @param  {[type]}   selector [description]
 * @param  {[Object]} scope    [description]
 * @return {[type]}            [description]
 */
// remove(el,event,fn)
//
// 内部方法，移除事件绑定的主函数
function remove(element, events, fn, selector, scope) {
    var id = eid(element),
        removeHandlers = function(set) {
            set.map(function(handler){
                delete handlers[id][handler.i];
                element.removeEventListener(eventCvt(handler.e), handler.proxy, isCapture(handler));
                /* 自定义 DOM 事件处理，销毁*/
                if(typeof event !== 'undefined' && event in S.Event.Special){
                    S.Event.Special[event].teardown.apply(S.one(element));
                }
            });
        };
    if(events) {
        events.split(/\s/).map(function(event) {
            removeHandlers(findHandlers(element, event, fn, selector, scope));
        });
    }
    else removeHandlers(handlers[id] || []);
}

/**
 * 主要绑定函数，包括 delegate 的处理方法
 * @param  {[type]}   event    [description]
 * @param  {[type]}   selector [description]
 * @param  {Function} callback [description]
 * @param  {[type]}   scope    [description]
 * @return {[type]}            [description]
 */
// **S.Node.on(event,selector,callback,[scope])**
//
// 事件绑定
//
// ```
// S.Event.on('click','div',function(e){...})
// ```
//
// 可以使用`els.on('click',callback)`
//
// **el.on(eventType,callback)**
//
// 在元素上进行事件绑定，el也可以是Node列表，比如
//
// ```
// S.one('div').on('click',function(){
//		alert('ok');
// });
// ```
Node.on = function(event, selector, callback, scope) {
    var delegator, _this = this;

    /* selector 为空的情况，即非 delegator */
    if (isFunction(selector)) {
        scope = callback;
        callback = selector;
        selector = undefined;
    }

    /* 阻止默认事件，kissy 不支持此方式 */
    if (callback === false) callback = returnFalse;

    _this.each(function(element) {
        /* delegate 处理逻辑 */
        if (selector) delegator = function(e) {
            var evt, match, matches = element.all(selector);
            if(!matches || !matches.length) return;
            match = matches.filter(function(el){
                return (el == e.target) || ($(el).contains(e.target));
            })[0];
            if (match && match !== element[0]) {
                evt = createProxy(e);
                evt.currentTarget = match;
                evt.liveFired = element[0];
                return callback.apply(scope || match, [evt].concat(slice.call(arguments, 1)));
            }
        };

        add(element[0], event, callback, selector, delegator, scope);
    });

    return _this;
};

/**
 * 取消事件绑定的主函数
 * @param  {[type]}   event    [description]
 * @param  {[type]}   selector [description]
 * @param  {Function} callback [description]
 * @param  {[type]}   scope    [description]
 * @return {[type]}            [description]
 */
// **S.Node.detach(event,selector,callback,[scope])**
//
// 取消事件绑定，推荐直接调用**els.detach('click',callback)**
//
// **el.detach(eventType,callback)**
//
// 取消元素事件，el也可以是Node列表。
Node.detach = function(event, selector, callback, scope) {
    var _this = this;

    if (isFunction(selector)) {
        scope = callback;
        callback = selector;
        selector = undefined;
    }

    _this.each(function(element) {
        remove(element[0], event, callback, selector, scope);
    });

    return _this;
};

/**
 * delegate 主函数，只是 Node.on 的别名
 * @param  {[type]}   event    [description]
 * @param  {[type]}   selector [description]
 * @param  {Function} callback [description]
 * @param  {[type]}   scope    [description]
 * @return {[type]}            [description]
 */
// **S.Node.delegate(event,selector,function(){...},[scope])**
//
// 事件委托，推荐直接调用**el.delegate('event',selector,callback,scop)**
//
// **el.delegate(eventType,callback,scope)**
//
// 针对当前节点执行事件委托，scope 为委托的节点或选择器
Node.delegate = function(event, selector, callback, scope) {
    return this.on(event, selector, callback, scope);
};

/**
 * undelegate 主函数，只是 Node.detach 的别名
 * @param  {[type]}   event    [description]
 * @param  {[type]}   selector [description]
 * @param  {Function} callback [description]
 * @param  {[type]}   scope    [description]
 * @return {[type]}            [description]
 */
// **S.Node.undelegate(event,selector,function(){...},[scope])**
//
// 解除事件委托，是`Node.detach`的别名，推荐直接调用**el.undelegate()**
//
// **el.undelegate(eventType,selector,callback,scope)**
//
// 针对当前节点执行解除事件委托，scope 为委托的节点或选择器
Node.undelegate = function(event, selector, callback, scope) {
    return this.detach(event, selector, callback, scope);
};


/**
 * 执行符合匹配的 dom 节点的相应事件的事件处理器
 * @param  {String} events [description]
 * @param  {Object} props  模拟处理原生事件的一些信息
 * @return {[type]}       [description]
 */
// **S.Node.fire(event,props)**
//
// 执行符合匹配的 dom 节点的相应事件的事件处理器，推荐直接调用
//
// ```
// el.fire('click')
// ```
//
// **el.fire(eventType,props)**
//
// 触发节点元素的`eventType`事件，el.fire 函数继承自 `S.Node.fire(event,props)`
// - eventType: 事件类型
// - props：触发事件的时候传入的回传参数
//
// ```
// S.one('div').on('click',function(e){
//		alert(e.a);
// });
// S.one('div').fire('click',{
//		a:1
// });
// // => 弹出框，值为1
// ```
Node.fire = function(events, props) {
    var _this = this;
    events.split(/\s/).map(function(event){
        event = createEvent(event, props);
        _this.each(function(element) {
            if ('dispatchEvent' in element[0]) element[0].dispatchEvent(event);
            else element.fireHandler(events, props);
        });
    });
    return _this;
};

/**
 * 执行符合匹配的 dom 节点的相应事件的事件处理器，不会冒泡
 * @param  {[type]} event [description]
 * @param  {[type]} props  [description]
 * @return {[type]}       [description]
 */
// **S.Node.fireHandler(event,props)**
//
// 执行符合匹配的 dom 节点的相应事件的事件处理器，不会冒泡
//
// 推荐直接执行
//
// ```
// el.fireHandler('click',{...})
// ```
//
// **el.fireHandler(eventType,props)**
//
// 以非冒泡形式触发回调，由`el.fire()`函数调用，在单纯希望执行事件绑定函数时使用此方法
Node.fireHandler = function(events, props) {
    var e, result, _this = this;
    events.split(/\s/).map(function(event){
        _this.each(function(element) {
            e = createEvent(event);
            e.target = element[0];
			if(e.target === null){
				e = getCustomDOMEvent(e);
			}
			mix(e,props);
            findHandlers(element[0], event).map(function(handler, i) {
                result = handler.proxy(e);
                if (e.isImmediatePropagationStopped && e.isImmediatePropagationStopped()) return false;
            });
        });
    });
    return _this;
};

function getCustomDOMEvent(e){
	var eProxy = {};
	mix(eProxy,e);
	eProxy.__proto__ = e.__proto__;
	return eProxy;
}


S.Event || (S.Event = {});
/**
 * 将普通对象混入 Event.Target 后，即能拥有简单的自定义事件特性。
 * @type {Object}
 */
// **S.Event.Target**
//
// 简单自定义事件对象，将普通对象混入 `Event.Target` 后，即能拥有简单的自定义事件特性。
//
// 事件本身是一个抽象概念，和平台无关、和设备无关、更和浏览器无关，浏览器只是使用“事件”的方法来触发特定的行为，进而触发某段网页逻辑。而常见的DOM事件诸如click,dbclick是浏览器帮我们实现的“特定行为”。而这里的“特定行为”就是触发事件的时机，是可以被重新定义的，原理上，事件都是需要精确的定义的，比如下面这个例子，我们定义了一个新事件：“初始化1秒后”
//
// ```
// var EventFactory = function(){
// 		var that = this;
// 		setTimeout(function(){
// 			that.fire('afterOneSecond');
// 		},1000);
// };
// S.augment(EventFactory,S.Event.Target);
// var a = new EventFactory();
// a.on('afterOneSecond',function(){
// 		alert('1秒后');
// });
// // 1秒后弹框
// ```
//
// 这是一个很纯粹的自定义事件，它有事件名称`afterOneSecond`，有事件的触发条件`self.fire('afterOneSecond')`，有事件的绑定，`a.on('afterOneSecond')`。这样这个事件就能顺利的发生，并被成功监听。在代码组织层面，一般工厂类中实现了事件命名、定义和实现，属于内聚的功能实现。而绑定事件时可以是工厂类这段代码外的用户，他不会去关心事件的具体实现，只要关心工厂类"暴露了什么事件可以让我绑定"就可以了，这就是KISSY中使用自定义事件的用法。
// 
S.Event.Target = {
    /**
     * 用于存放绑定的事件信息
     * @type {Object}
     */
    _L: {
		/*
         "click": [
             {
                 E: "click touchstart",
                 F: fn1,
                 S: scope1
             },
             {
                 E: "click",
                 F: fn2,
                 S: scope2
             }
         ]
		 */
    },
    /**
     * 绑定事件
     * @param  {String}   eventType 必选，绑定的事件类型，以空格分隔
     * @param  {Function} fn        必选，触发事件后的回调方法
     * @param  {[type]}   scope     回调方法的 this 指针
     * @return {[type]}             返回对象本身
     */
    on: function(eventType, fn, scope) {
        var eventArr = s2a(eventType), T = this;
        eventArr.map(function(ev){
            var evt = ev in T._L ? T._L[ev] : (T._L[ev] = []);
            evt.push({
                E: eventType,
                F: fn,
                S: scope
            });
        });
        return T;
    },
    /**
     * 触发事件
     * @param  {String} eventType 必选，绑定的事件类型，以空格分隔
     * @param  {[type]} data      触发事件时传递给回调事件对象的信息，而 data 后面的参数会原封不动地传过去
     * @return {[type]}           返回对象本身
     */
	// on()
	//
	// Event.Target 的参元方法，绑定自定义事件
	//
	// fire(event,data)
	//
	// Event.Target 的参元方法，触发事件
    fire: function(eventType, data) {
        var eventArr = s2a(eventType), T = this;
        eventArr.map(function(ev){
            var evt = T._L[ev], 
                returnEv = S.mix(data || {}, {target: T, currentTarget: T});
            if(!evt) return;
            evt.map(function(group){
                group.F.apply(group.S || T, [returnEv].concat([].slice.call(arguments, 2)));
            });

        });
        return T;
    },

    /**
     * 解除绑定事件
     * @param  {String}   eventType 必选，绑定的事件类型，以空格分隔
     * @param  {Function} fn        如果需要指定解除某个回调，需要填写
     * @param  {[type]}   scope     同上，可以进一步区分某个回调
     * @return {[type]}             返回对象本身
     */
	// detach(event,fn)
	//
	// Event.Target 的参元方法，解除绑定事件
    detach: function(eventType, fn, scope) {
        var eventArr = s2a(eventType), T = this;
        eventArr.map(function(ev){
            /* 如果遇到相同事件，优先取消最新绑定的 */
            var evt = T._L[ev], group;
            if(!evt) return;
            if(!fn && (T._L[ev] = [])) return;
            for(var key=0; key < evt.length; key++) {
                group = evt[key];
                if(group.F == fn && group.S == scope) {
                    evt.splice(key, 1);
                    continue;
                }
                else if(group.F == fn) {
                    evt.splice(key, 1);
                    continue;
                }
            }
        });
        return T;
    }
};

S.Event.Special = {
	/*
	'myEvent':{
		setup:function(){

		},
		teardown:function(){

		}
	}
   */
};

/**
 * 把 event 字符串格式化为数组
 */
// s2a(str)
//
// 内部方法，把 event 字符串格式化为数组
function s2a(str) {
    return str.split(' ');
}

S.add('event',function(S){
	return S.Event;
});

})(KISSY);
/*
combined files : 

m/touch

*/
/**
 * @ignore
 * @file touch
 * @author 虎牙 <huya.nzb@alibaba-inc.com>
 */

!(function(S) {
    
    //预防重复绑定监听
    if (S.__touchModAdded) { return; }
    
    var TAP_MAX_TOUCH_TIME = 200, //KISSY为300ms
        TAP_MAX_DISTANCE = 10, //KISSY为5px
        TAP_HOLD_DELAY = 500, //KISSY为1000ms
        SINGLE_TAP_DELAY = 300, //KISSY为300ms，Zepto为250ms，太快无法触发doubleTap
        
        docElem = document.documentElement,
        hasTouch = !!('ontouchstart' in window),
        
        //桌面浏览器上用mousedown和mouseup模拟
        EVT_TOUCH_START = hasTouch ? 'touchstart' : 'mousedown',
        EVT_TOUCH_MOVE = hasTouch ? 'touchmove' : 'mousemove',
        EVT_TOUCH_END = hasTouch ? 'touchend' : 'mouseup',
        EVT_TOUCH_CANCEL = 'touchcancel',
        EVT_SCROLL = 'scroll',
        
        noop = function() {},
        
        tapHoldTimer = null,
        doubleTapTimmer = null,
        singleTouch = null,
        
        touches = [
        /*{
            startX:0,
            startY:0,
            endX:0,
            endY:0,
            startTime:0,
            endTime:0,
            deltaX:0,
            deltaY:0,
            distance:0,
            timeSpan:0,
       }*/
       ];
    
    //清除多余触摸
    function clearTouchArray() {
        if (touches.length > 2) {
            var tmpArray = [];
            for (var i = 1; i < touches.length; i++) {
                tmpArray[i - 1] = touches[i];
            }
            touches = tmpArray;
        }
    }

    //排除多次绑定中的单次点击的多次记录
    function shouldExcludeTouches() {
        
        clearTouchArray();
        
        if (touches.length == 0) {
            return false;
        }
        
        var duration = singleTouch.startTime - touches[touches.length - 1].startTime;
        
        //判断是否是同一次点击
        if (duration < 10) {
            return true;
        } else {
            return false;
        }
    }
    
    //检查是否是两次tap
    function checkDoubleTap() {
        
        clearTouchArray();
        
        if (touches.length == 1) {
            return false;
        }
        
        //检查两次tap的target是不是一致
        var sameTarget = touches[0].endEvent.target == touches[1].endEvent.target;
        var duration = touches[1].startTime - touches[0].startTime;
        
        if (sameTarget && duration < SINGLE_TAP_DELAY) {
            return true;
        } else {
            return false;
        }
    }
    
    //取消长按的延时器
    function cancelTapHoldTimer() {
        if (tapHoldTimer) {
            clearTimeout(tapHoldTimer);
            tapHoldTimer = null;
        }
    }
    
    //取消双击的延时器
    function cancelDoubleTapTimer() {
        if (doubleTapTimmer) {
            clearTimeout(doubleTapTimmer);
            doubleTapTimmer = null;
        }
    }
    
    //触摸开始回调
    function touchstartHandler(e) {
        
        //多指触摸
        if (e.touches && e.touches.length > 1) {
            singleTouch = null;
            cancelDoubleTapTimer();
            return;
        }
        
        var target = e.target,
            touch = e.changedTouches ? e.changedTouches[0] : e,
            startX = touch.pageX,
            startY = touch.pageY;
            
        singleTouch = {
            startX: startX,
            startY: startY,
            startEvent: e,
            startTime: new Date().getTime()
        };
        
        //长按延时器
        cancelTapHoldTimer();
        
        //设置长按延时
        tapHoldTimer = setTimeout(function() {
            
            cancelTapHoldTimer();
            
            if (singleTouch) {
                var eProxy = S.merge(e, {
                    type: 'tapHold',
                    pageX: startX,
                    pageY: startY,
                    originalEvent: e,
                    timeStamp: new Date().getTime()
                });
                
                S.one(target).fire('tapHold', eProxy);
            }
            
        }, TAP_HOLD_DELAY);
    }
    
    //触摸滑动回调
    function touchmoveHandler(e) {
        
        if (!singleTouch || !tapHoldTimer) { return; }
        
        var target = e.target,
            touch = e.changedTouches ? e.changedTouches[0] : e,
            endX = touch.pageX,
            endY = touch.pageY,
            deltaX = Math.abs(endX - singleTouch.startX), //滑过的水平距离
            deltaY = Math.abs(endY - singleTouch.startY), //滑过的垂直距离
            distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        //位移超过一定距离，取消tapHold事件    
        if (distance > TAP_MAX_DISTANCE) {
            cancelTapHoldTimer();
        }
    }
    
    //触摸结束回调
    function touchendHandler(e) {
        
        cancelTapHoldTimer();
        
        if (!singleTouch) {
            cancelDoubleTapTimer();
            return;
        }
        
        var eProxy, $target,
            target = e.target,
            touch = e.changedTouches ? e.changedTouches[0] : e,
            endX = touch.pageX,
            endY = touch.pageY,
            endTime = new Date().getTime(),
            deltaX = Math.abs(endX - singleTouch.startX), //滑过的水平距离
            deltaY = Math.abs(endY - singleTouch.startY); //滑过的垂直距离
            
        S.mix(singleTouch, {
            endX: endX,
            endY: endY,
            deltaX: deltaX,
            deltaY: deltaY,
            endTime: endTime,
            endEvent: e,
            distance: Math.sqrt(deltaX * deltaX + deltaY * deltaY),
            timeSpan: endTime - singleTouch.startTime
        });
        
        //触摸时间和移动距离超过最大值，则无效
        if (singleTouch.timeSpan > TAP_MAX_TOUCH_TIME || singleTouch.distance > TAP_MAX_DISTANCE) {
            singleTouch = null;
            cancelDoubleTapTimer();
            return;
        }
        
        //同时绑定singleTap和doubleTap时，一次点击push了两次singleTouch，应该只push一次
        if (!shouldExcludeTouches(singleTouch)) {
            touches.push(singleTouch);
        } else {
            cancelDoubleTapTimer();
            return;
        }
        
        clearTouchArray();
       
        fireTap(e, {
            type: 'tap',
            pageX: endX,
            pageY: endY,
            clientX: touch.clientX,
            clientY: touch.clientY,
            timeStamp: new Date().getTime(),
            originalEvent:e
        });
    }
    
    //触摸取消回调
    function touchcancelHandler(e) {
        singleTouch = null;
        clearTouchArray();
        cancelDoubleTapTimer();
        cancelTapHoldTimer();
    }
    
    //TODO
    //部分情况不可以发生tap事件，或者target有误，比如说-webkit-overflow-scrolling等
    //触发tap事件
    function fireTap(e, obj) {
        var  $target = S.one(e.target);
        
        eProxy = S.merge(e, obj || {});
        
        //防止点击穿透
        eProxy.preventDefault = function() {
            try { 
                this.constructor.prototype.preventDefault.call(this);   
                e.preventDefault(); 
            } catch(err) {}
        };
        
        //先触发tap，再触发doubleTap
        $target.fire('tap', eProxy);
        
        //doubleTap和singleTap互斥
        if (doubleTapTimmer) {
            cancelDoubleTapTimer();
            
            if (checkDoubleTap()) {
                S.mix(eProxy, {
                    type: 'doubleTap',
                    timeStamp: new Date().getTime()
                });
                
                $target.fire('doubleTap', eProxy);
            }
        } else {
            doubleTapTimmer = setTimeout(function() {
                clearTimeout(doubleTapTimmer);
                doubleTapTimmer = null;
                
                S.mix(eProxy, {
                    type: 'singleTap',
                    timeStamp: new Date().getTime()
                });
                
                $target.fire('singleTap', eProxy);
            }, SINGLE_TAP_DELAY);
        }
    }
    
    docElem.addEventListener(EVT_TOUCH_START, touchstartHandler, false);
    docElem.addEventListener(EVT_TOUCH_MOVE, touchmoveHandler, false);
    docElem.addEventListener(EVT_TOUCH_END, touchendHandler, false);
    docElem.addEventListener(EVT_TOUCH_CANCEL, touchcancelHandler, false);
    window.addEventListener(EVT_SCROLL, touchcancelHandler, false);
    
    //fix ios 的 touch 无法触发的问题
    if (hasTouch) {
        
        S.each(['tap', 'tapHold', 'singleTap', 'doubleTap'], function(item) {
            S.Event.Special[item] = {
                setup: function() {
                    var elem = this[0];
                    if (!elem.__fixTouchEvent) {
                        elem.addEventListener('touchstart', noop, false);
                        elem.__fixTouchEvent = true;
                    }
                }
            };
        });
        
        S.ready(function() {
            document.body.addEventListener('touchstart', noop, false);
        });
    }

    S.add && S.add('m/touch', function () {});
    
    S.__touchModAdded = true;

})(KISSY);

/**
 * 解决点击穿透的问题
 * [http://gitlab.alibaba-inc.com/mpi/fix-click-through](http://gitlab.alibaba-inc.com/mpi/fix-click-through)
 * @author huya.nzb@alibaba-inc.com
 * @date 2015-01-09
 */
!(function() {
    
    //TODO
    //解决点击穿透之后active和-webkit-tap-highlight-color无法取消的问题
    
    var docElem = document.documentElement,
    
        CLICK = 'click',
        MOUSE_DOWN = 'mousedown',
        MOUSE_UP = 'mouseup',
        RADIO_TYPE = 'radio',
        RESET_DELAY = 400,
        THRESHOLD = 10,
        
        ATTR_FIX_THROUGH = 'fix-through',
        ATTR_FIX_THROUGH_TAPPED = 'fix-through-tapped';
    
    (function () {
        
        if (document.getElementById('fix-click-through-style')) { return; }
        
        var stylesheet = document.createElement('style'),
            head = document.getElementsByTagName('head')[0];
            
        stylesheet.type = 'text/css';
        stylesheet.id = 'fix-click-through-style';
        head.insertBefore(stylesheet, head.firstChild);
        
        //默认样式为黑色
        stylesheet.appendChild(document.createTextNode(
            '[fix-through] input,' +
            '[fix-through] select,' +
            '[fix-through] textarea {pointer-events:none;}' +
            
            '[fix-through] input[type=button],' +
            '[fix-through] input[type=submit],' +
            '[fix-through] input[type=reset],' +
            '[fix-through] input[type=image],' +
            '[fix-through] input[type=file],' +
            '[fix-through] input[type=radio],' +
            '[fix-through] input[type=checkbox],' +
            '[fix-through] [fix-through-tapped] {pointer-events:auto;}'
        ));
    })();
    
    /**
     * 解决点击穿透
     * @class FixClickThrough
     * @static
     */    
    window.FixClickThrough = window.FixClickThrough || {
        
        /**
         * 事件绑定缓存
         * @property cache
         * @type Object
         */
        cache: {},
        
        /**
         * elementFromPoint是否相对于视窗
         * @property relativeToViewport
         * @type Boolean
         */
        relativeToViewport: null,
        
        /**
         * 判断elementFromPoint是否相对于视窗
         * @method isRelativeToViewport
         * @return {Boolean}
         */
        isRelativeToViewport: function() {
            if (this.relativeToViewport !== null) return this.relativeToViewport;
        
            var x = window.pageXOffset ? window.pageXOffset + window.innerWidth - 1 : 0;
            var y = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0;
            if (!x && !y) return true;
          
            // Test with a point larger than the viewport. If it returns an element,
            // then that means elementFromPoint takes page coordinates.
            return (this.relativeToViewport = !!document.elementFromPoint && !document.elementFromPoint(x, y));
        },
        
        /**
         * 根据坐标获取元素
         * [https://github.com/moll/js-element-from-point/](https://github.com/moll/js-element-from-point/)
         * @method elementFromPoint
         * @param {Number} x X轴值
         * @param {Number} y Y轴值
         * @return {HTMLElement}
         */
        elementFromPoint: function(x, y) {
            if (!this.isRelativeToViewport())  {
                x += window.pageXOffset;
                y += window.pageYOffset;
            }
            return document.elementFromPoint ? document.elementFromPoint(x, y) : null;
        },
        
        /**
         * 是否源自于label节点
         * @method fromLabel
         * @param {HTMLElement} elem 事件新节点
         * @param {HTMLElement} from 事件源自于哪个节点
         * @return {Boolean} 是否源自于label节点
         */
        fromLabel: function(elem, from) {
            if (!elem || !elem.nodeName.match(/(input|select|textarea)/i)) {
                return false;
            }
            
            var labels = this.getLabels(elem);
            
            for (var i = 0, l = labels.length; i < l; i++) {
                if (labels[i].contains(from)) {
                    return true;
                }
            }
            
            return false;
        },
        
        /**
         * 获取表单元素的label
         * @method getLabels
         * @param {HTMLElement} elem 表单元素
         * @return {Array} label数组
         */
        getLabels: function(elem) {
            var id = elem.id,
                labels = [],
                label = id ? document.querySelectorAll('label[for="' + id +'"]') : null;
            
            if (label && label.length) {
                labels = labels.concat(labels.slice.call(label, 0));
            }
            
            label = elem;
            
            while ((label = label.parentNode)) {
                if (label.nodeName.match(/label/i)) {
                    labels.push(label);
                }
            } 
            
            return labels;  
        },
        
        /**
         * 绑定点击穿透的事件
         * @method bind
         * @param {String} eventName 事件名称
         * @param {Function} filter 过滤事件
         */
        bind: function(eventName, filter) {
            
            var self = this;
            
            //如果已经解决过，则不再解决
            if (!filter && this.cache[eventName]) { return; }
            
            //监听冒泡事件
            document.addEventListener(eventName, function(e) {
                
                var target = e.target,
                    now = new Date().getTime(),
                    halt, detach, detached, checked, newTarget;
                
                if (filter && filter(e) === false) { return; }
                
                //防止无法收起键盘
                if (document.activeElement && 
                    document.activeElement.blur &&
                    document.activeElement !== target) {
                    
                    document.activeElement.blur();
                }
                
                // //防止点击输入框无法focus问题
                // if (target.focus && document.activeElement !== target) {
                    // target.focus();
                // }
                
                //如果当前位置的元素不是之前的元素，说明tap时发生了位移或者隐藏，直接阻止事件
                //但是还存在tap事件后延时发生位移和隐藏的元素，这个时候最好触发一下
                newTarget = this.elementFromPoint(e.clientX, e.clientY);
                
                if (newTarget && newTarget !== target) {
                    e.preventDefault && e.preventDefault();
                }
                
                //阻止事件穿透（click, focus, blur, focusin, focusout...）
                halt = function(evt) {
                    
                    newTarget = evt.target;
                    
                    if (newTarget !== target && !self.fromLabel(newTarget, target) &&
                        Math.abs(e.clientX - evt.clientX) < THRESHOLD &&
                        Math.abs(e.clientY - evt.clientY) < THRESHOLD) {
                        
                        //大部分情况下可以阻止穿透点击事件的触发
                        //某些浏览器和webview阻止了focus的触发，但浏览器依旧响应状态弹出键盘
                        e.preventDefault && e.preventDefault();
                        evt.preventDefault && evt.preventDefault();
                        evt.stopPropagation && evt.stopPropagation();
                        
                        //部分安卓2.x手机（小米1）不支持stopImmediatePropagation
                        if (evt.stopImmediatePropagation) {
                            evt.stopImmediatePropagation();
                        }
                        
                        //点击穿透到radio时，无法阻止选中的状态
                        if (newTarget.type === RADIO_TYPE) {
                            if (evt.type === MOUSE_DOWN) {
                                checked = newTarget.checked;
                            } else if (checked === false && evt.type === CLICK) {
                                newTarget.checked = false;
                            }
                        }
                        
                        //最后触发穿透后解除绑定
                        if (evt.type === CLICK) {
                            detach();
                        }
                    }
                };
                
                detach = function() {
                    if (detached) { return; }
                    
                    document.removeEventListener(CLICK, halt, true);
                    document.removeEventListener(MOUSE_DOWN, halt, true);
                    document.removeEventListener(MOUSE_UP, halt, true);
                    
                    //如果值和之前设置的不一样，那么说明有可能连续触发了两次tap，
                    //等待最后一次延时结束后移除attribute
                    if (target.getAttribute(ATTR_FIX_THROUGH_TAPPED) == now) {
                        target.removeAttribute(ATTR_FIX_THROUGH_TAPPED);
                    }
                    
                    if (docElem.getAttribute(ATTR_FIX_THROUGH) == now) {
                        docElem.removeAttribute(ATTR_FIX_THROUGH);
                    }
                    
                    detached = true;
                };
                
                document.addEventListener(CLICK, halt, true);
                document.addEventListener(MOUSE_DOWN, halt, true);
                document.addEventListener(MOUSE_UP, halt, true);
                
                target.setAttribute(ATTR_FIX_THROUGH_TAPPED, now);
                docElem.setAttribute(ATTR_FIX_THROUGH, now);
                
                //在部分机型下，包括ios，click事件有可能延时300+ms，400ms是比较稳妥的时间
                setTimeout(detach, RESET_DELAY);
                
            }, false);
            
            //没有过滤器的时候缓存
            if (!filter) {
                this.cache[eventName] = 1;
            }
        }
    };
    
    //解决tap事件穿透问题    
    FixClickThrough.bind('tap');
    
})();

// ## IO 模块
//
// **IO的配置項说明：**
//
// timeout 值的單位為秒，與KISSY保持一致。
//
// contentType配置，若未配置值，且滿足以下條件
// 1. data不為空
// 2. type不為get
//
// 此時默認
//
// ```
// Content-Type=application/x-www-form-urlencoded
// ```
//
// **KISSY MINI 删除的 API**
//
//| API                  | KISSY                | KISSY-MINI           |
//| -------------------- |:--------------------:|:--------------------:|
//| setupConfig          | YES                  | NO                   |
//| upload               | YES                  | NO                   |
//| serialize            | YES                  | NO                   |
//| getResponseHeader    | YES                  | NO                   |
//| Promise API          | YES                  | NO                   |
//|&nbsp;|&nbsp;|&nbsp;|
//
// 配置项：
//
//| Setting              | KISSY                | KISSY-MINI           |
//| -------------------- |:--------------------:|:--------------------:|
//| cfg.crossDomain      | YES                  | NO                   |
//| cfg.mimeType         | YES                  | NO                   |
//| cfg.password         | YES                  | NO                   |
//| cfg.username         | YES                  | NO                   |
//| cfg.xdr              | YES                  | NO                   |
//| cfg.xhrFields        | YES                  | NO                   |
//| cfg.form             | YES                  | NO                   |
//|&nbsp;|&nbsp;|&nbsp;|
//
//
// **KISSY VS KISSY-MINI，Ajax实现上的差异**
//
//| KISSY                | KISSY-MINI           | Note                 |
//|:-------------------- |:--------------------:|:--------------------:|
//| 回調函數的第二個參數支持更多的狀態  | 目前只支持  success/error/timeout/abort/parseerror | 更多的錯誤狀態可以通過getNativeXhr()得到原生的xhr對象來獲取。  |
//| jsonp返回多個數據源時，success回調得到的數據是一個包含所有數據源的數組 | 目前只取第一個數據源 | - |
//| IO的別名有S.Ajax/S.io/S.IO | 只有S.IO | - |
//| jsonpCallback支持函數返回全局函數名 | jsonpCallback只支持字符串 | - |
//| 對於url上的參數，會與data參數重新組合 | data附加在url上 | - |
//| cache增加的時間戳KISSY和KISSY MINI是不一致的 | - | - |
//|&nbsp;|&nbsp;|&nbsp;|
//
// 实例代码
//
// ```
// S.IO({
//		type: 'get',
//		url: 'http://www.taobao.com',
//		data: {...},
//		success: function(responseData,statusText,xhr){
//			//...
//		},
//		dataType:'json' // 可取值为'json'/'jsonp'
// });
// ```
//
// 快捷调用方法
// - S.IO.get(url,fn)
// - S.IO.post(url,fn)
// - S.IO.jsonp(url,fn)
// - S.IO.getJSON(url,fn)
// - S.IO.getScript(url,fn) 等同于 S.getScript(url,fn)
// - S.IO.jsonp(url,fn) 等同于 S.jsonp(url,fn)
//
// 具体用法参照[KISSY1.4.0 Ajax文档](http://docs.kissyui.com/1.4/docs/html/guideline/io.html)
;(function(global, S) {

var doc = global.document,
    location = global.location;

function mix(target, source) {
    var k, key;
    for (key in source) {
        if((k = source[key]) !== undefined) {
            target[key] = k;
        }
    }
    return target;
}

function merge(d, n) {
    return mix(mix({}, d), n);
}

function isType(type) {
    return function(obj) {
        return {}.toString.call(obj) == '[object ' + type + ']';
    }
}

var isObject   = isType('Object'),
    isArray    = Array.isArray || isType('Array'),
    isFunction = isType('Function');

function each(obj, iterator, context) {
    var keys = Object.keys(obj), i, len;
    for (i = 0, len = keys.length; i < len; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === false) {
            return;
        }
    }
}

var jsonpID = 1,
    TRUE = !0,
    FALSE = !TRUE,
    NULL = null,
    ABORT = "abort",
    SUCCESS = "success",
    ERROR = "error",
    EMPTY = "",
    getScript = S.getScript,
    noop = function() {};

var transports = {},
    def = {
        type: 'GET',
        async: TRUE,
        serializeArray: TRUE,
        /* whether data will be serialized as String */
        processData: TRUE,
		/* contentType: "application/x-www-form-urlencoded; charset=UTF-8" */
        /* Callback that is executed before request */
        beforeSend: noop,
        /* Callback that is executed if the request succeeds */
        success: noop,
        /* Callback that is executed the the server drops error */
        error: noop,
        /* Callback that is executed on request complete (both: error and success) */
        complete: noop,
        context: NULL,
        /* MIME types mapping */
        accepts: {
            script: 'text/javascript,application/javascript',
            json:   "application/json,text/json",
            xml:    'application/xml,text/xml',
            html:   "text/html",
            text:   'text/plain'
        },
        /* Default timeout */
        timeout: 0,
        cache: TRUE
    };

function presetConfig(cfg) {
    if(!cfg.url) {
        cfg.url = location.toString();
    }

    /* 序列化data參數 */
    if (cfg.processData && isObject(cfg.data)) {
        cfg.data = param(cfg.data, cfg.serializeArray)
    }

    cfg.type = cfg.type.toUpperCase();

    if (cfg.data && cfg.type == 'GET') {
        cfg.url = appendURL(cfg.url, cfg.data)
    }

    if (cfg.cache === FALSE) {
        cfg.url = appendURL(cfg.url, 't=' + Date.now());
    }

    var testURL = /^([\w-]+:)?\/\/([^\/]+)/.test(cfg.url),
        protocol = testURL ? RegExp.$1 : location.protocol;

    cfg.local = protocol == 'file:';

    /* KISSY默認的上下文是config而不是io實例*/
    cfg.context || (cfg.context = cfg);

    return cfg;
}

function fireEvent(type, io) {
    IO.fire(type, {io: io});
}

/**
 * IO異步請求對象
 * @param config
 * @returns IO instance
 * @constructor
 */
function IO(config) {
    var self = this;

    if (!(self instanceof IO)) {
        return new IO(config);
    }
    /* 所有的io類型都先進行數據預處理。 */
    var cfg = presetConfig(merge(def, config)),
        timeout = cfg.timeout;

    self.cfg = cfg;

    fireEvent('start', self);

    /* 根據dataType獲取對應的transport對象。 */
    /* 每個transport實現對應的send、abort方法。 */
    var dataType = cfg.dataType,
        Transport = transports[dataType] || transports[EMPTY];

    var transport = new Transport(self);

    self.transport = transport;

    /* beforeSend回調可以阻止異步請求的發送。*/
    var fnBeforeSend = cfg.beforeSend;
    if(fnBeforeSend && fnBeforeSend.call(cfg.context, self, cfg) === false) {
        self.abort();
        return self;
    }

    fireEvent('send', self);

    if(timeout > 0) {
        self._timer = setTimeout(function() {

            self.abort("timeout");

        }, timeout * 1000);
    }

    try {

        transport.send();

    }catch(ex) {
        self._complete(FALSE, ex.message);
    }

    return self;
}

mix(IO, S.Event.Target);

mix(IO.prototype, {
    abort: function(s) {
        this.transport.abort(s);
    },
    /* 一個IO請求，必然要調用success或者error方法中的一個。*/
    /* 最終都需要調用complete回調方法，在這裡統一控制。*/
    _complete: function(status, statusText) {
        var self = this,
            cfg = self.cfg,
            context = cfg.context,
            param = [self.responseData, statusText, self],
            TYPE = status ? SUCCESS : ERROR,
            COMPLETE = "complete";

        /* IO對象不允許重複執行。*/
        if(self._end) return;
        self._end = TRUE;

        clearTimeout(self._timer);

        cfg[TYPE].apply(context, param);
        fireEvent(TYPE, self);

        cfg[COMPLETE].apply(context, param);
        fireEvent(COMPLETE, self);
    }
});

function setTransport(name, fn) {
    transports[name] = fn;
}

function appendURL(url, query) {
    return (url + '&' + query).replace(/[&?]{1,2}/, '?');
}

var encode = encodeURIComponent;
function param(o, arr) {
    var rt = [];
    _serialize(rt, o, arr);
    return rt.join("&");
}

function _serialize(rt, o, arr, k) {
    var symbol = arr === true ? encode("[]") : EMPTY;

    each(o, function(val, key) {
        if(k) {
            key = k + symbol;
        }
        if(isArray(val)) {
            _serialize(rt, val, arr, key);
        }else{
            rt.push(key + "=" + encode(val));
        }
    });
}

var XHRNAME = "XMLHttpRequest",
    reBlank = /^\s*$/;

/* 標準的XMLHttpRequest對象 */
function createXHR() {
    return new global[XHRNAME]();
}

/**
 * 基於XMLHttpRequest對象的異步請求處理。
 * @constructor
 */
function xhrTransport(io) {
    this.io = io;
}

mix(xhrTransport.prototype, {
    _init: function() {
        var self = this,
            io = self.io,
            cfg = io.cfg,
            dataType = cfg.dataType,
            mime = cfg.accepts[dataType],
            baseHeaders = {},
            xhr = createXHR();

		/* io.xhr = xhr; */
        io.getNativeXhr = function() {
            return xhr;
        };

        /* 依照大部分庫的做法。 */
        if (!cfg.crossDomain) {
            baseHeaders['X-Requested-With'] = XHRNAME;
        }

        if (mime) {
            baseHeaders['Accept'] = mime;

            if(xhr.overrideMimeType) {
                if (mime.indexOf(',') > -1) {
                    mime = mime.split(',', 2)[0]
                }

                xhr.overrideMimeType(mime)
            }
        }

        /* 附加Content-Type */
        if (cfg.contentType || (cfg.data && cfg.type != 'GET')) {
            baseHeaders['Content-Type'] = cfg.contentType ||
				'application/x-www-form-urlencoded';
        }

        cfg.headers = merge(baseHeaders, cfg.headers || {})

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {

                var result, error = FALSE;

                if ((xhr.status >= 200 &&
                    xhr.status < 300) ||
                    xhr.status == 304 ||
                    (xhr.status == 0 && cfg.local)) {

                    /* 若dataType未設置，則取得結果的時候根據mime信息推斷dataType值，並進行對應的數據處理。*/
                    dataType = dataType || mimeToDataType(xhr.getResponseHeader('Content-Type'));

                    /* 利用xhr對象來獲取數據。*/
                    result = io.responseText = xhr.responseText;
                    io.responseXML = xhr.responseXML;

                    try {
                        if (dataType == 'script') {

                            (1,eval)(result);

                        }else if(dataType == 'xml') {

                            result = xhr.responseXML;

                        }else if (dataType == 'json') {

                            result = reBlank.test(result) ? NULL : parseJSON(result);

                        }
                    } catch (e) { error = e }

                    io.responseData = result;
                    if (error) {
                        io._complete(FALSE, 'parsererror')
                    }else {
                        io._complete(TRUE, SUCCESS);
                    }

                } else {
                    io._complete(FALSE, ERROR)
                }
            }
        };

        xhr.open(cfg.type, cfg.url, cfg.async);

        each(cfg.headers, function(v, k) {
            xhr.setRequestHeader(k, v);
        });

        xhr.send(cfg.data ? cfg.data : NULL);

    },
    abort: function(statusText) {
        var self = this,
            xhr = self.xhr,
            io = self.io;

        if(xhr) {
            xhr.onreadystatechange = noop;
            xhr.abort();
        }

        io._complete(FALSE, statusText || ABORT);
    },
    send: function() {
        this._init();
    }
});

setTransport(EMPTY, xhrTransport);

var regMimeType = /^(?:text|application)\/(json|javascript|xml|html)/i;
function mimeToDataType(mime) {
    var result = mime && regMimeType.test(mime),
        type = result ? RegExp.$1 : "text";

    return type === "javascript" ? "script" : type;
	/*
    return mime && ( mime == htmlType ? 'html' :
        reJsonType.test(mime) ? 'json' :
            reScriptType.test(mime) ? 'script' :
                reXMLType.test(mime) && 'xml' ) || 'text';
	*/
}

function parseJSON(text) {
    return JSON.parse(text);
}

/**
 * 基於script節點的異步請求處理，主要針對jsonp的場景
 * @param io io實例
 * @constructor
 */
function ScriptTransport(io) {
    this.io = io;
}

mix(ScriptTransport.prototype, {
    abort: function(statusText) {
        this._end(FALSE, statusText || ABORT)
    },
    /**
     * 完成請求以後的清理工作。
     * @param status
     * @param statusText
     * @private
     */
    _end: function(status, statusText) {
        var self = this,
            script = self.script,
            io = self.io,
            gvar = self._globalVar;
        /* 不直接刪除，避免有請求返回以後調用導致的報錯。 */
        global[gvar] = function() {
            delete global[gvar];
        };

        if(script) {
            script.src = NULL;
            script.onload = script.onerror = noop;

            script.parentNode.removeChild(script);
        }
        /* 調用io實例的方法，完成io請求狀態 */
        io._complete(status, statusText);
    },
    send: function() {
        var self = this,
            io = self.io,
            cfg = io.cfg,
            callbackName = cfg.jsonp || "callback",
            methodName = cfg.jsonpCallback || "jsonp"+jsonpID ++;

        /* methodName = (S.isFunction(methodName) ? methodName() : methodName) ||
		   "jsonp"+jsonpID ++; */

        self._globalVar = methodName;

        /* 添加jsonp的callback參數。 */
        var url = appendURL(cfg.url, callbackName + "=" + methodName);

        global[methodName] = function(data){
			/*
			r = data;
			*/
			/* 如果是多個數據的情況下，返回的數據是數組。*/
			/* 跟kissy保持一致。 */
			/*
			if(arguments.length >1) {
				r = makeArray(arguments);
			}
			*/
            io.responseData = data;

            self._end(TRUE, SUCCESS);
        };

        /* KISSY.getScript方法支持傳入指定的script節點元素。*/
        self.script = getScript(url, {
            charset: cfg.scriptCharset,
            error: function() {
                self._end(FALSE, ERROR);
            }
        });
    }
});

setTransport("jsonp", ScriptTransport);

function factory(t, dt) {
    return function(url, data, callback, dataType, type) {
        /* data 参数可省略 */
        if (isFunction(data)) {
            dataType = callback;
            callback = data;
            data = NULL;
        }

        return IO({
            type: t || type,
            url: url,
            data: data,
            success: callback,
            dataType: dt || dataType
        });
    };
}

/* 定義快捷方法 */
// Ajax API
//
// **S.IO.get(url,callback)**
//
// **S.IO.post(url,callback)**
//
// **S.IO.jsonp(url,callback)**
//
// **S.IO.getJSON(url,callback)**
//
// **S.IO.getScript(url,callback)** 同 **S.getScript(url,callback)**
mix(IO, {
    get: factory("get"),
    post: factory("post"),
    jsonp: factory(NULL, "jsonp"),
    getJSON: factory(NULL, "json"),
    getScript: getScript
});

// **S.IO.jsonp(url,callback)** 同 **S.jsonp()**
//
// **S.getScript (url , config)**
//
// 动态加载目标地址的资源文件，第二个参数可以是配置对象，也可以是回调函数
//
// 如果是配置对象，参数可以是：
// - charset：编码类型
// - success：成功的回调函数
// - error：失败的回调函数
//
// ```
// S.getScript(url , { success : success , charset : charset });
// S.getScript(url, function(){...});
//
// ```
mix(S, {
    IO: IO,
    jsonp: IO.jsonp
});

/* KMD封裝 */
S.add('io', function() {
    return IO;
});


})(this, KISSY);
// <style>td {border-top:1px solid #ccc} table {border-collapse: collapse;}</style>

/*
combined files : 

m/anim

*/
// 基于 Zepto.js 的动画实现，兼容KISSY动画API
KISSY.add('m/anim',function(S) {

	// 调用方法
	// ```
	// S.use('anim',function(S){
	//		S.one('#id').animate({
	//			width:100
	//		},2/*秒*/,'easeNone',function(){
	//			// 2 秒后触发回调
	//		});
	// });
	// ```
	//
	// 动画API参照 [KISSY Anim](http://docs.kissyui.com/1.4/docs/html/api/node/animate.html)
	//
	// ```
	// el.animate(properties, 
	// 		[duration, [easing, [function(){ 
	//			//...
	// 		}]]])  ⇒ self
	// el.animate(properties, 
	// 		{ 
	// 			duration: msec, 
	// 			easing: type, 
	// 			complete: fn })  ⇒ self
	// ```
	//
	// 代码差异
	//
	// ```
	// // 1.4.0，支持两种用法
	// S.Anim('div',to,duration/*秒*/,easing,function(){
	//}).run();
	//S.one('div').animate(to,duration/*秒*/,easing,function(){
	//});
	//```
	//
	// ```
	// // MINI，只支持一种用法，S.Anim不存在
	//S.one('div').animate(to,duration/*秒*/,easing,function(){
	//});
	// ```
	//
	// 特别注意CSS3动画的回调时机
	// CSS3动画的回调实例代码，同样效果的CSS3动画的实现差异：
	//
	//```
	// // 1.4.0
	//el.animate({
	//		'-webkit-transition-duration':'2s'
	//},0.001,easing,function(){
	//		// 0.001 秒后触发回调	
	//});
	//setTimeout(function(){
	//		// 2秒后触发回调
	//},2000);
	//
	// // MINI
	//el.animate({
	//		'-webkit-transition-duration':'2s'
	//},2,easing,function(){
	//		// 2 秒后触发回调	
	//});
	//```
		
	var $ = S.one;
	var prefix = '',
	eventPrefix, endEventName, endAnimationName, vendors = {
		Webkit: 'webkit',
		Moz: '',
		O: 'o'
	},
	document = window.document,
	testEl = document.createElement('div'),
	supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
	transform,
	transitionProperty,
	transitionDuration,
	transitionTiming,
	transitionDelay,
	animationName,
	animationDuration,
	animationTiming,
	animationDelay,
	cssReset = {}

	function dasherize(str) {
		return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase()
	}
	function normalizeEvent(name) {
		return eventPrefix ? eventPrefix + name: name.toLowerCase()
	}

	S.each(vendors, function(event, vendor) {
		if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
			prefix = '-' + vendor.toLowerCase() + '-'
			eventPrefix = event
			return false
		}
	})

	transform = prefix + 'transform'
	cssReset[transitionProperty = prefix + 'transition-property'] = cssReset[transitionDuration = prefix + 'transition-duration'] = cssReset[transitionDelay = prefix + 'transition-delay'] = cssReset[transitionTiming = prefix + 'transition-timing-function'] = cssReset[animationName = prefix + 'animation-name'] = cssReset[animationDuration = prefix + 'animation-duration'] = cssReset[animationDelay = prefix + 'animation-delay'] = cssReset[animationTiming = prefix + 'animation-timing-function'] = ''

	S.mix(S,{
		_fx : {
			off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
			speeds: {
				_default: 400,
				fast: 200,
				slow: 600
			},
			cssPrefix: prefix,
			transitionEnd: normalizeEvent('TransitionEnd'),
			animationEnd: normalizeEvent('AnimationEnd')
		}
	});

	function animate(properties, duration, ease, callback, delay) {
		if (S.isFunction(duration)) callback = duration,
		ease = undefined,
		duration = undefined
		if (S.isFunction(ease)) callback = ease,
		ease = undefined
		if (S.isPlainObject(duration)) ease = duration.easing,
		callback = duration.complete,
		delay = duration.delay,
		duration = duration.duration
		if (duration) duration = (typeof duration == 'number' ? duration: (S._fx.speeds[duration] || S._fx.speeds._default)) / 1000
		if (delay) delay = parseFloat(delay) / 1000 ;
		return this.anim(properties, duration, ease, callback, delay)
	}

	function anim(properties, duration, ease, callback, delay) {
		/* KISSY Anim 默认以秒为单位 */
		duration *= 1000;
		var key, cssValues = {},
		cssProperties, transforms = '',
		that = this,
		wrappedCallback, endEvent = S._fx.transitionEnd,
		fired = false

		if (duration === undefined) duration = S._fx.speeds._default / 1000
		if (delay === undefined) delay = 0
		if (S._fx.off) duration = 0

		if (typeof properties == 'string') {
			/* keyframe animation */
			cssValues[animationName] = properties
			cssValues[animationDuration] = duration + 's'
			cssValues[animationDelay] = delay + 's'
			cssValues[animationTiming] = (ease || 'linear')
			endEvent = S._fx.animationEnd
		} else {
			cssProperties = []
			/* CSS transitions */
			for (key in properties)
			if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
			else cssValues[key] = properties[key],
			cssProperties.push(dasherize(key))

			if (transforms) cssValues[transform] = transforms,
			cssProperties.push(transform)
			if (duration > 0 && typeof properties === 'object') {
				cssValues[transitionProperty] = cssProperties.join(', ')
				cssValues[transitionDuration] = duration + 's'
				cssValues[transitionDelay] = delay + 's'
				cssValues[transitionTiming] = (ease || 'linear')
			}
		}

		wrappedCallback = function(event) {
			if (typeof event !== 'undefined') {
				if (event.target !== event.currentTarget) return ;
				$(event.target).detach(endEvent, wrappedCallback)
			} else $(this).detach(endEvent, wrappedCallback) ;
			fired = true
			$(this).css(cssReset)
			callback && callback.call(this)
		}
		if (duration > 0) {
			$(this).on(endEvent, wrappedCallback)
			/* transitionEnd is not always firing on older Android phones
			so make sure it gets fired */
			setTimeout(function() {
				if (fired) return ;
				wrappedCallback.call(that)
			},
			(duration * 1000) + 25)
		}

		this.length && this[0].clientLeft

		this.css(cssValues)

		if (duration <= 0) setTimeout(function() {
			that.each(function() {
				wrappedCallback.call(this)
			})
		},
		0)

		return this
	}

	testEl = null;

	S.mix(S.node, {
		anim:anim,
		animate:animate
	});

});



/*
combined files : 

m/lang

*/
KISSY.add('m/lang',function(S) {

    var TRUE = true,
        FALSE = false,
        Obj = Object,
        guid = 0,
        class2type = {},
        htmlEntities = {
            '&amp;': '&',
            '&gt;': '>',
            '&lt;': '<',
            '&#x60;': '`',
            '&#x2F;': '/',
            '&quot;': '"',
            /*jshint quotmark:false*/
            '&#x27;': "'"
        },
        reverseEntities = {},
        escapeReg,
        unEscapeReg,
    // - # $ ^ * ( ) + [ ] { } | \ , . ?
        escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;

    //function.js
    // ios Function.prototype.bind === undefined
    function bindFn(r, fn, obj) {
        function FNOP() {}

        var slice = [].slice,
        args = slice.call(arguments, 3),
        bound = function() {
            var inArgs = slice.call(arguments);
            return fn.apply(
            this instanceof FNOP ? this:
            // fix: y.x=S.bind(fn);
            obj || this, (r ? inArgs.concat(args) : args.concat(inArgs)));
        };
        FNOP.prototype = fn.prototype;
        bound.prototype = new FNOP();
        return bound;
    }

    ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'].forEach(function(name) {
        var name2lc = name.toLowerCase();

        class2type['[object ' + name + ']'] = name2lc;

        S['is' + name] = function(obj) {
            return S.type(obj) === name2lc;
        };
    });

    (function () {
        for (var k in htmlEntities) {
            reverseEntities[htmlEntities[k]] = k;
        }
    })();

    function getEscapeReg() {
        if (escapeReg) {
            return escapeReg;
        }
        var str = '';
        S.each(htmlEntities, function (entity) {
            str += entity + '|';
        });
        str = str.slice(0, -1);
        escapeReg = new RegExp(str, 'g');
        return escapeReg;
    }

    function getUnEscapeReg() {
        if (unEscapeReg) {
            return unEscapeReg;
        }
        var str = '';
        S.each(reverseEntities, function (entity) {
            str += entity + '|';
        });
        str += '&#(\\d{1,5});';
        unEscapeReg = new RegExp(str, 'g');
        return unEscapeReg;
    }

    S.mix(S, {
        escapeHtml: function (str) {
            return (str + '').replace(getEscapeReg(), function (m) {
                return reverseEntities[m];
            });
        },
        unEscapeHtml: function (str) {
            return str.replace(getUnEscapeReg(), function (m, n) {
                return htmlEntities[m] || String.fromCharCode(+n);
            });
        },
        fromUnicode: function (str) {
            return str.replace(/\\u([a-f\d]{4})/ig, function (m, u) {
                return  String.fromCharCode(parseInt(u, 16));
            });
        },
        // array.js
        inArray: function(item, arr) {
            return S.indexOf(item, arr) > - 1;
        },
        indexOf: function(item, arr) {
            return Array.prototype.indexOf.call(arr, item);
        },
        forEach:function(){
            return S.each.apply(this,arguments);
        },
        each: function(object, fn, context) {
            if (object) {
                var key, val, keys, i = 0,
                length = object && object.length,
                // do not use typeof obj == 'function': bug in phantomjs
                isObj = length === undefined || S.type(object) === 'function';

                context = context || null;

                if (isObj) {
                    keys = S.keys(object);
                    for (; i < keys.length; i++) {
                        key = keys[i];
                        // can not use hasOwnProperty
                        if (fn.call(context, object[key], key, object) === FALSE) {
                            break;
                        }
                    }
                } else {
                    for (val = object[0];
                    i < length; val = object[++i]) {
                        if (fn.call(context, val, i, object) === FALSE) {
                            break;
                        }
                    }
                }
            }
            return object;
        },

        /**
         * Returns the index of the last item in the array
         * that contains the specified value, -1 if the
         * value isn't found.
         * @method
         * @param item individual item to be searched
         * @param {Array} arr the array of items where item will be search
         * @return {number} item's last index in array
         * @member KISSY
         */
        lastIndexOf: function(item, arr) {
            return Array.prototype.lastIndexOf.call(arr, item);
        },

        /**
         * Returns a copy of the array with the duplicate entries removed
         * @param a {Array} the array to find the subset of unique for
         * @param [override] {Boolean} if override is TRUE, S.unique([a, b, a]) => [b, a].
         * if override is FALSE, S.unique([a, b, a]) => [a, b]
         * @return {Array} a copy of the array with duplicate entries removed
         * @member KISSY
         */
        unique: function(a, override) {
            var b = a.slice();
            if (override) {
                b.reverse();
            }
            var i = 0,
            n, item;

            while (i < b.length) {
                item = b[i];
                while ((n = S.lastIndexOf(item, b)) !== i) {
                    b.splice(n, 1);
                }
                i += 1;
            }

            if (override) {
                b.reverse();
            }
            return b;
        },

        /**
         * Executes the supplied function on each item in the array.
         * Returns a new array containing the items that the supplied
         * function returned TRUE for.
         * @member KISSY
         * @method
         * @param arr {Array} the array to iterate
         * @param fn {Function} the function to execute on each item
         * @param [context] {Object} optional context object
         * @return {Array} The items on which the supplied function returned TRUE.
         * If no items matched an empty array is returned.
         */
        filter: function(arr, fn, context) {
            return Array.prototype.filter.call(arr, fn, context || this);
        },

        /**
         * Executes the supplied function on each item in the array.
         * Returns a new array containing the items that the supplied
         * function returned for.
         * @method
         * @param arr {Array} the array to iterate
         * @param fn {Function} the function to execute on each item
         * @param [context] {Object} optional context object
         * refer: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map
         * @return {Array} The items on which the supplied function returned
         * @member KISSY
         */
        map: function(arr, fn, context) {
            return Array.prototype.map.call(arr, fn, context || this);
        },

        /**
         * Executes the supplied function on each item in the array.
         * Returns a value which is accumulation of the value that the supplied
         * function returned.
         *
         * @param arr {Array} the array to iterate
         * @param callback {Function} the function to execute on each item
         * @param initialValue {number} optional context object
         * refer: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/reduce
         * @return {Array} The items on which the supplied function returned
         * @member KISSY
         */
        reduce: function(arr, callback, initialValue) {
            var len = arr.length;
            if (typeof callback !== 'function') {
                throw new TypeError('callback is not function!');
            }

            // no value to return if no initial value and an empty array
            if (len === 0 && arguments.length === 2) {
                throw new TypeError('arguments invalid');
            }

            var k = 0;
            var accumulator;
            if (arguments.length >= 3) {
                accumulator = initialValue;
            } else {
                do {
                    if (k in arr) {
                        accumulator = arr[k++];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    k += 1;
                    if (k >= len) {
                        throw new TypeError();
                    }
                }
                while (TRUE);
            }

            while (k < len) {
                if (k in arr) {
                    accumulator = callback.call(undefined, accumulator, arr[k], k, arr);
                }
                k++;
            }

            return accumulator;
        },

        /**
         * Tests whether all elements in the array pass the test implemented by the provided function.
         * @method
         * @param arr {Array} the array to iterate
         * @param callback {Function} the function to execute on each item
         * @param [context] {Object} optional context object
         * @member KISSY
         * @return {Boolean} whether all elements in the array pass the test implemented by the provided function.
         */
        every: function(arr, fn, context) {
            return Array.prototype.every.call(arr, fn, context || this);
        },

        /**
         * Tests whether some element in the array passes the test implemented by the provided function.
         * @method
         * @param arr {Array} the array to iterate
         * @param callback {Function} the function to execute on each item
         * @param [context] {Object} optional context object
         * @member KISSY
         * @return {Boolean} whether some element in the array passes the test implemented by the provided function.
         */
        some: function(arr, fn, context) {
            return Array.prototype.some.call(arr, fn, context || this);
        },
        /**
         * Converts object to a TRUE array.
         * // do not pass form.elements to this function ie678 bug
         * @param o {object|Array} array like object or array
         * @return {Array} native Array
         * @member KISSY
         */
        makeArray: function(o) {
            if (o == null) {
                return [];
            }
            if (S.isArray(o)) {
                return o;
            }
            var lengthType = typeof o.length,
            oType = typeof o;
            // The strings and functions also have 'length'
            if (lengthType !== 'number' ||
            // select element
            // https://github.com/kissyteam/kissy/issues/537
            typeof o.nodeName === 'string' ||
            // window
            /*jshint eqeqeq:false*/
            (o != null && o == o.window) || oType === 'string' ||
            // https://github.com/ariya/phantomjs/issues/11478
            (oType === 'function' && ! ('item' in o && lengthType === 'number'))) {
                return [o];
            }
            var ret = [];
            for (var i = 0, l = o.length; i < l; i++) {
                ret[i] = o[i];
            }
            return ret;
        },
        toArray: function(o) {
            return S.makeArray(o);
        },
        // escape.js
        /**
         * Creates a serialized string of an array or object.
         *
         * for example:
         *     @example
         *     {foo: 1, bar: 2}    // -> 'foo=1&bar=2'
         *     {foo: 1, bar: [2, 3]}    // -> 'foo=1&bar=2&bar=3'
         *     {foo: '', bar: 2}    // -> 'foo=&bar=2'
         *     {foo: undefined, bar: 2}    // -> 'foo=undefined&bar=2'
         *     {foo: TRUE, bar: 2}    // -> 'foo=TRUE&bar=2'
         *
         * @param {Object} o json data
         * @param {String} [sep='&'] separator between each pair of data
         * @param {String} [eq='='] separator between key and value of data
         * @param {Boolean} [serializeArray=true] whether add '[]' to array key of data
         * @return {String}
         * @member KISSY
         */
        param: function(o, sep, eq, serializeArray) {
            sep = sep || '&';
            eq = eq || '=';
            if (serializeArray === undefined) {
                serializeArray = TRUE;
            }
            var buf = [],
            key,
            i,
            v,
            len,
            val;

            var encode = function(str) {
                return encodeURIComponent(String(str));
            }, isValidParamValue = function(val) {
                var t = typeof val;
                return val == null || (t !== 'object' && t !== 'function');
            };

            for (key in o) {

                val = o[key];
                key = encode(key);


                // val is valid non-array value
                if (isValidParamValue(val)) {
                    buf.push(key);
                    if (val !== undefined) {
                        buf.push(eq, encode(val + ''));
                    }
                    buf.push(sep);
                } else if (S.isArray(val) && val.length) {
                    // val is not empty array
                    for (i = 0, len = val.length; i < len; ++i) {
                        v = val[i];
                        if (isValidParamValue(v)) {
                            buf.push(key, (serializeArray ? encode('[]') : ''));
                            if (v !== undefined) {
                                buf.push(eq, encode(v + ''));
                            }
                            buf.push(sep);
                        }
                    }
                }
                // ignore other cases, including empty array, Function, RegExp, Date etc.
            }
            buf.pop();
            return buf.join('');
        },

        /**
         * Parses a URI-like query string and returns an object composed of parameter/value pairs.
         *
         * for example:
         *      @example
         *      'section=blog&id=45'        // -> {section: 'blog', id: '45'}
         *      'section=blog&tag=js&tag=doc' // -> {section: 'blog', tag: ['js', 'doc']}
         *      'tag=ruby%20on%20rails'        // -> {tag: 'ruby on rails'}
         *      'id=45&raw'        // -> {id: '45', raw: ''}
         * @param {String} str param string
         * @param {String} [sep='&'] separator between each pair of data
         * @param {String} [eq='='] separator between key and value of data
         * @return {Object} json data
         * @member KISSY
         */
        unparam: function(str, sep, eq) {
            if (typeof str !== 'string' || ! (str = S.trim(str))) {
                return {};
            }
            sep = sep || '&';
            eq = eq || '=';
            var ret = {},
            eqIndex,
            pairs = str.split(sep),
            key,
            val,
            i = 0,
            len = pairs.length;

            var decode = function(str) {
                return decodeURIComponent(str.replace(/\+/g, ' '));
            };

            for (; i < len; ++i) {
                eqIndex = pairs[i].indexOf(eq);
                if (eqIndex === - 1) {
                    key = decode(pairs[i]);
                    val = undefined;
                } else {
                    // remember to decode key!
                    key = decode(pairs[i].substring(0, eqIndex));
                    val = pairs[i].substring(eqIndex + 1);
                    try {
                        val = decode(val);
                    } catch(e) {}
                    if (S.endsWith(key, '[]')) {
                        key = key.substring(0, key.length - 2);
                    }
                }
                if (key in ret) {
                    if (S.isArray(ret[key])) {
                        ret[key].push(val);
                    } else {
                        ret[key] = [ret[key], val];
                    }
                } else {
                    ret[key] = val;
                }
            }
            return ret;
        },
        /**
         * empty function
         * @member KISSY
         */
        noop: function() {},
        /**
         * Creates a new function that, when called, itself calls this function in the context of the provided this value,
         * with a given sequence of arguments preceding any provided when the new function was called.
         * refer: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
         * @param {Function} fn internal called function
         * @param {Object} obj context in which fn runs
         * @param {*...} var_args extra arguments
         * @member KISSY
         * @return {Function} new function with context and arguments
         */
        bind: bindFn(0, bindFn, null, 0),

        /**
         * Creates a new function that, when called, itself calls this function in the context of the provided this value,
         * with a given sequence of arguments preceding any provided when the new function was called.
         * refer: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
         * @param {Function} fn internal called function
         * @param {Object} obj context in which fn runs
         * @param {*...} var_args extra arguments
         * @member KISSY
         * @return {Function} new function with context and arguments
         */
        rbind: bindFn(0, bindFn, null, 1),
        // lang.js
        /**
         * Creates a deep copy of a plain object or array. Others are returned untouched.
         * @param input
         * @member KISSY
         * @param {Function} [filter] filter function
         * @return {Object} the new cloned object
         * refer: http://www.w3.org/TR/html5/common-dom-interfaces.html#safe-passing-of-structured-data
         */
        clone: function(input, filter) {
            var destination = input;

            if(!input) return destination;

            var constructor = input.constructor;
            if (S.inArray(constructor, [Boolean, String, Number, Date, RegExp])) {
                destination = input.valueOf();
            }
            // ImageData , File, Blob , FileList .. etc
            else if (S.isArray(input)) {
                destination = filter ? S.filter(input, filter) : input.concat();
            } else if (S.isPlainObject(input)) {
                destination = {};
            }

            // clone it
            if(S.isArray(input)){
                for (var i = 0; i < destination.length; i++) {
                    destination[i] = S.clone(destination[i], filter);
                }
            } else if (S.isPlainObject(input)){
                for (k in input) {
                    if (!filter || (filter.call(input, input[k], k, input) !== false)){
                        destination[k] = S.clone(input[k], filter);
                    }
                }
            }
            return destination;
        },

        /**
         * Gets current date in milliseconds.
         * @method
         * refer:  https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now
         * http://j-query.blogspot.com/2011/02/timing-ecmascript-5-datenow-function.html
         * http://kangax.github.com/es5-compat-table/
         * @member KISSY
         * @return {Number} current time
         */
        now: Date.now,
        /**
         * Get all the property names of o as array
         * @param {Object} o
         * @return {Array}
         * @member KISSY
         */
        keys: Obj.keys,

        /**
         * Copies all the properties of s to r.
         * @method
         * @param {Object} r the augmented object
         * @param {Object} s the object need to augment
         * @param {Boolean|Object} [ov=TRUE] whether overwrite existing property or config.
         * @param {Boolean} [ov.overwrite=TRUE] whether overwrite existing property.
         * @param {String[]|Function} [ov.whitelist] array of white-list properties
         * @param {Boolean}[ov.deep=false] whether recursive mix if encounter object.
         * @param {String[]|Function} [wl] array of white-list properties
         * @param [deep=false] {Boolean} whether recursive mix if encounter object.
         * @return {Object} the augmented object
         * @member KISSY
         *
         * for example:
         *     @example
         *     var t = {};
         *     S.mix({x: {y: 2, z: 4}}, {x: {y: 3, a: t}}, {deep: TRUE}) => {x: {y: 3, z: 4, a: {}}}, a !== t
         *     S.mix({x: {y: 2, z: 4}}, {x: {y: 3, a: t}}, {deep: TRUE, overwrite: false}) => {x: {y: 2, z: 4, a: {}}}, a !== t
         *     S.mix({x: {y: 2, z: 4}}, {x: {y: 3, a: t}}, 1) => {x: {y: 3, a: t}}
         */
        mix: function(r, s, ov, wl, deep) {
            var k;
            Array.prototype.slice.call(arguments, 1).forEach(function(source) {
                if (source) {
                    for (var prop in source) {
                        if ((k = source[prop]) !== undefined) {
                            r[prop] = k;
                        }
                    }
                }
            });
            return r;
        },

        /**
         * Returns a new object containing all of the properties of
         * all the supplied objects. The properties from later objects
         * will overwrite those in earlier objects. Passing in a
         * single object will create a shallow copy of it.
         * @param {...Object} varArgs objects need to be merged
         * @return {Object} the new merged object
         * @member KISSY
         */
        merge: function() {
            var args = Array.prototype.slice.call(arguments, 0);
            return S.mix.apply(null, [{}].concat(args));
        },

        /**
         * Applies prototype properties from the supplier to the receiver.
         * @param   {Object} r received object
         * @param   {...Object} varArgs object need to  augment
         *          {Boolean} [ov=TRUE] whether overwrite existing property
         *          {String[]} [wl] array of white-list properties
         * @return  {Object} the augmented object
         * @member KISSY
         */
        augment: function(r, o, wl) {
            if (o instanceof Function) {
                S.mix(r.prototype, o.prototype);
            }
            if (o instanceof Object) {
                S.mix(r.prototype, o);
            }
            if (wl instanceof Object) {
                S.mix(r.prototype, wl);
            }
            return r;
        },

        /**
         * Utility to set up the prototype, constructor and superclass properties to
         * support an inheritance strategy that can chain constructors and methods.
         * Static members will not be inherited.
         * @param r {Function} the object to modify
         * @param s {Function} the object to inherit
         * @param {Object} [px] prototype properties to add/override
         * @param {Object} [sx] static properties to add/override
         * @return r {Object}
         * @member KISSY
         */
        extend: function(receiver, supplier, protoPros, staticProps) {
            var supplierProto = supplier.prototype,
            receiverProto;

            // in case parent does not set constructor
            // eg: parent.prototype={};
            supplierProto.constructor = supplier;

            // add prototype chain
            receiverProto = Object.create(supplierProto);
            receiverProto.constructor = receiver;
            receiver.prototype = S.mix(receiverProto, receiver.prototype);
            receiver.superclass = supplierProto;

            // add prototype overrides
            if (protoPros) {
                S.mix(receiverProto, protoPros);
            }

            // add object overrides
            if (staticProps) {
                S.mix(receiver, staticProps);
            }

            return receiver;
        },

        type: function(obj) {
            return obj == null ? String(obj) : class2type[{}.toString.call(obj)] || 'object';
        },

        unique: function(array) {
            return Array.prototype.filter.call(array, function(item, index) {
                return array.indexOf(item) == index;
            });
        },

        isWindow: function(obj) {
            return obj && obj == obj.window;
        },

        isPlainObject: function(obj) {
            return S.isObject(obj) && ! S.isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
        },

        isArray: Array.isArray || S.isArray,

        startsWith: function(str, prefix) {
            return str.lastIndexOf(prefix, 0) === 0;
        },

        endsWith: function(str, suffix) {
            var ind = str.length - suffix.length;
            return ind >= 0 && str.indexOf(suffix, ind) === ind;
        },

        // string.js
        ucfirst: function(s) {
            s += '';
            return s.charAt(0).toUpperCase() + s.substring(1);
        },

        trim: function(str) {
            return str == null ? '': String.prototype.trim.call(str);
        },
        substitute: function(str, o, regexp) {
            if (typeof str != 'string' || ! o) {
                return str;
            }

            return str.replace(regexp || /\\?\{([^{}]+)\}/g, function(match, name) {
                if (match.charAt(0) === '\\') {
                    return match.slice(1);
                }
                return (o[name] === undefined) ? '': o[name];
            });
        },

        guid: function (pre) {
            return (pre || '' ) + guid++;
        },

        stamp: function (o, readOnly, marker) {
            marker = marker || '__~ks_stamped';
            var guid = o[marker];
            if (guid) {
                return guid;
            } else if (!readOnly) {
                try {
                    guid = o[marker] = S.guid(marker);
                }
                catch (e) {
                    guid = undefined;
                }
            }
            return guid;
        }

    });

});



/*
combined files : 

m/base

*/
/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 6 15:30
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 base
*/

KISSY.add("m/base", ["attribute"], function(S, require) {
  var Attribute = require("attribute");
  var ucfirst = S.ucfirst, ON_SET = "_onSet", noop = S.noop;
  function __getHook(method, reverse) {
    return function(origFn) {
      return function wrap() {
        var self = this;
        if(reverse) {
          origFn.apply(self, arguments)
        }else {
          self.callSuper.apply(self, arguments)
        }
        var extensions = arguments.callee.__owner__.__extensions__ || [];
        if(reverse) {
          extensions.reverse()
        }
        callExtensionsMethod(self, extensions, method, arguments);
        if(reverse) {
          self.callSuper.apply(self, arguments)
        }else {
          origFn.apply(self, arguments)
        }
      }
    }
  }
  var Base = Attribute.extend({constructor:function() {
    var self = this;
    self.callSuper.apply(self, arguments);
    var listeners = self.get("listeners");
    for(var n in listeners) {
      self.on(n, listeners[n])
    }
    self.initializer();
    constructPlugins(self);
    callPluginsMethod.call(self, "pluginInitializer");
    self.bindInternal();
    self.syncInternal()
  }, initializer:noop, __getHook:__getHook, __callPluginsMethod:callPluginsMethod, bindInternal:function() {
    var self = this, attrs = self.getAttrs(), attr, m;
    for(attr in attrs) {
      m = ON_SET + ucfirst(attr);
      if(self[m]) {
        self.on("after" + ucfirst(attr) + "Change", onSetAttrChange)
      }
    }
  }, syncInternal:function() {
    var self = this, cs = [], i, c = self.constructor, attrs = self.getAttrs();
    while(c) {
      cs.push(c);
      c = c.superclass && c.superclass.constructor
    }
    cs.reverse();
    for(i = 0;i < cs.length;i++) {
      var ATTRS = cs[i].ATTRS || {};
      for(var attributeName in ATTRS) {
        if(attributeName in attrs) {
          var attributeValue, onSetMethod;
          var onSetMethodName = ON_SET + ucfirst(attributeName);
          if((onSetMethod = self[onSetMethodName]) && attrs[attributeName].sync !== 0 && (attributeValue = self.get(attributeName)) !== undefined) {
            onSetMethod.call(self, attributeValue)
          }
        }
      }
    }
  }, plug:function(plugin) {
    var self = this;
    if(typeof plugin === "function") {
      var Plugin = plugin;
      plugin = new Plugin
    }
    if(plugin.pluginInitializer) {
      plugin.pluginInitializer(self)
    }
    self.get("plugins").push(plugin);
    return self
  }, unplug:function(plugin) {
    var plugins = [], self = this, isString = typeof plugin === "string";
    S.each(self.get("plugins"), function(p) {
      var keep = 0, pluginId;
      if(plugin) {
        if(isString) {
          pluginId = p.get && p.get("pluginId") || p.pluginId;
          if(pluginId !== plugin) {
            plugins.push(p);
            keep = 1
          }
        }else {
          if(p !== plugin) {
            plugins.push(p);
            keep = 1
          }
        }
      }
      if(!keep) {
        p.pluginDestructor(self)
      }
    });
    self.setInternal("plugins", plugins);
    return self
  }, getPlugin:function(id) {
    var plugin = null;
    S.each(this.get("plugins"), function(p) {
      var pluginId = p.get && p.get("pluginId") || p.pluginId;
      if(pluginId === id) {
        plugin = p;
        return false
      }
      return undefined
    });
    return plugin
  }, destructor:S.noop, destroy:function() {
    var self = this;
    if(!self.get("destroyed")) {
      callPluginsMethod.call(self, "pluginDestructor");
      self.destructor();
      self.set("destroyed", true);
      self.fire("destroy");
      self.detach()
    }
  }});
  S.mix(Base, {__hooks__:{initializer:__getHook(), destructor:__getHook("__destructor", true)}, ATTRS:{plugins:{value:[]}, destroyed:{value:false}, listeners:{value:[]}}, extend:function extend(extensions, px, sx) {
    if(!S.isArray(extensions)) {
      sx = px;
      px = extensions;
      extensions = []
    }
    sx = sx || {};
    px = px || {};
    var SubClass = Attribute.extend.call(this, px, sx);
    SubClass.__extensions__ = extensions;
    baseAddMembers.call(SubClass, {});
    if(extensions.length) {
      var attrs = {}, prototype = {};
      S.each(extensions.concat(SubClass), function(ext) {
        if(ext) {
          S.each(ext.ATTRS, function(v, name) {
            var av = attrs[name] = attrs[name] || {};
            S.mix(av, v)
          });
          var exp = ext.prototype, p;
          for(p in exp) {
            if(exp.hasOwnProperty(p)) {
              prototype[p] = exp[p]
            }
          }
        }
      });
      SubClass.ATTRS = attrs;
      prototype.constructor = SubClass;
      S.augment(SubClass, prototype)
    }
    SubClass.extend = sx.extend || extend;
    SubClass.addMembers = baseAddMembers;
    return SubClass
  }});
  var addMembers = Base.addMembers;
  function baseAddMembers(px) {
    var SubClass = this;
    var extensions = SubClass.__extensions__, hooks = SubClass.__hooks__, proto = SubClass.prototype;
    if(extensions.length && hooks) {
      for(var h in hooks) {
        if(proto.hasOwnProperty(h) && !px.hasOwnProperty(h)) {
          continue
        }
        px[h] = px[h] || noop
      }
    }
    return addMembers.call(SubClass, px)
  }
  function onSetAttrChange(e) {
    var self = this, method;
    if(e.target === self) {
      method = self[ON_SET + e.type.slice(5).slice(0, -6)];
      method.call(self, e.newVal, e)
    }
  }
  function constructPlugins(self) {
    var plugins = self.get("plugins"), Plugin;
    S.each(plugins, function(plugin, i) {
      if(typeof plugin === "function") {
        Plugin = plugin;
        plugins[i] = new Plugin
      }
    })
  }
  function callPluginsMethod(method) {
    var len, self = this, plugins = self.get("plugins");
    if(len = plugins.length) {
      for(var i = 0;i < len;i++) {
        if(plugins[i][method]) {
          plugins[i][method](self)
        }
      }
    }
  }
  function callExtensionsMethod(self, extensions, method, args) {
    var len;
    if(len = extensions && extensions.length) {
      for(var i = 0;i < len;i++) {
        var fn = extensions[i] && (!method ? extensions[i] : extensions[i].prototype[method]);
        if(fn) {
          fn.apply(self, args || [])
        }
      }
    }
  }
  S.Base = Base;
  return Base
});

/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:04
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 attribute
*/

KISSY.add("attribute", ["event/custom"], function(S, require, exports, module) {
  var RE_DASH = /(?:^|-)([a-z])/ig;
  var CustomEvent = require("event/custom");
  module.exports = Attribute;
  var bind = S.bind;
  function replaceToUpper() {
    return arguments[1].toUpperCase()
  }
  function camelCase(name) {
    return name.replace(RE_DASH, replaceToUpper)
  }
  var INVALID = {};
  var FALSE = false;
  function normalFn(host, method) {
    if(typeof method === "string") {
      return host[method]
    }
    return method
  }
  function getAttrVals(self) {
    return self.__attrVals || (self.__attrVals = {})
  }
  function whenAttrChangeEventName(when, name) {
    return when + S.ucfirst(name) + "Change"
  }
  function __fireAttrChange(self, when, name, prevVal, newVal, subAttrName, attrName, data) {
    attrName = attrName || name;
    return self.fire(whenAttrChangeEventName(when, name), S.mix({attrName:attrName, subAttrName:subAttrName, prevVal:prevVal, newVal:newVal}, data))
  }
  function ensureNonEmpty(obj, name, doNotCreate) {
    var ret = obj[name];
    if(!doNotCreate && !ret) {
      obj[name] = ret = {}
    }
    return ret || {}
  }
  function getValueByPath(o, path) {
    for(var i = 0, len = path.length;o !== undefined && i < len;i++) {
      o = o[path[i]]
    }
    return o
  }
  function setValueByPath(o, path, val) {
    var len = path.length - 1, s = o;
    if(len >= 0) {
      for(var i = 0;i < len;i++) {
        o = o[path[i]]
      }
      if(o !== undefined) {
        o[path[i]] = val
      }else {
        s = undefined
      }
    }
    return s
  }
  function getPathNamePair(name) {
    var path;
    if(name.indexOf(".") !== -1) {
      path = name.split(".");
      name = path.shift()
    }
    return{path:path, name:name}
  }
  function getValueBySubValue(prevVal, path, value) {
    var tmp = value;
    if(path) {
      if(prevVal === undefined) {
        tmp = {}
      }else {
        tmp = S.clone(prevVal)
      }
      setValueByPath(tmp, path, value)
    }
    return tmp
  }
  function prepareDefaultSetFn(self, name) {
    var defaultBeforeFns = ensureNonEmpty(self, "__defaultBeforeFns");
    if(defaultBeforeFns[name]) {
      return
    }
    defaultBeforeFns[name] = 1;
    var beforeChangeEventName = whenAttrChangeEventName("before", name);
    self.publish(beforeChangeEventName, {defaultFn:defaultSetFn})
  }
  function setInternal(self, name, value, opts, attrs) {
    var path, subVal, prevVal, pathNamePair = getPathNamePair(name), fullName = name;
    name = pathNamePair.name;
    path = pathNamePair.path;
    prevVal = self.get(name);
    prepareDefaultSetFn(self, name);
    if(path) {
      subVal = getValueByPath(prevVal, path)
    }
    if(!opts.force) {
      if(!path && prevVal === value) {
        return undefined
      }else {
        if(path && subVal === value) {
          return undefined
        }
      }
    }
    value = getValueBySubValue(prevVal, path, value);
    var beforeEventObject = S.mix({attrName:name, subAttrName:fullName, prevVal:prevVal, newVal:value, _opts:opts, _attrs:attrs, target:self}, opts.data);
    if(opts.silent) {
      if(FALSE === defaultSetFn.call(self, beforeEventObject)) {
        return FALSE
      }
    }else {
      if(FALSE === self.fire(whenAttrChangeEventName("before", name), beforeEventObject)) {
        return FALSE
      }
    }
    return self
  }
  function defaultSetFn(e) {
    if(e.target !== this) {
      return undefined
    }
    var self = this, value = e.newVal, prevVal = e.prevVal, name = e.attrName, fullName = e.subAttrName, attrs = e._attrs, opts = e._opts;
    var ret = self.setInternal(name, value);
    if(ret === FALSE) {
      return ret
    }
    if(!opts.silent) {
      value = getAttrVals(self)[name];
      __fireAttrChange(self, "after", name, prevVal, value, fullName, null, opts.data);
      if(attrs) {
        attrs.push({prevVal:prevVal, newVal:value, attrName:name, subAttrName:fullName})
      }else {
        __fireAttrChange(self, "", "*", [prevVal], [value], [fullName], [name], opts.data)
      }
    }
    return undefined
  }
  function Attribute(config) {
    var self = this, c = self.constructor;
    self.userConfig = config;
    while(c) {
      addAttrs(self, c.ATTRS);
      c = c.superclass ? c.superclass.constructor : null
    }
    initAttrs(self, config)
  }
  function wrapProtoForSuper(px, SubClass) {
    var hooks = SubClass.__hooks__ || {};
    for(var p in hooks) {
      if(p in px) {
        px[p] = hooks[p](px[p])
      }
    }
    S.each(px, function(v, p) {
      if(typeof v === "function") {
        var wrapped = 0;
        if(v.__owner__) {
          var originalOwner = v.__owner__;
          delete v.__owner__;
          delete v.__name__;
          wrapped = v.__wrapped__ = 1;
          var newV = bind(v);
          newV.__owner__ = originalOwner;
          newV.__name__ = p;
          originalOwner.prototype[p] = newV
        }else {
          if(v.__wrapped__) {
            wrapped = 1
          }
        }
        if(wrapped) {
          px[p] = v = bind(v)
        }
        v.__owner__ = SubClass;
        v.__name__ = p
      }
    })
  }
  function addMembers(px) {
    var SubClass = this;
    wrapProtoForSuper(px, SubClass);
    S.mix(SubClass.prototype, px)
  }
  Attribute.extend = function extend(px, sx) {
    var SubClass, SuperClass = this;
    sx = sx || {};
    px = px || {};
    var hooks, sxHooks = sx.__hooks__;
    if(hooks = SuperClass.__hooks__) {
      sxHooks = sx.__hooks__ = sx.__hooks__ || {};
      S.mix(sxHooks, hooks, false)
    }
    var name = sx.name || "AttributeDerived";
    if(px.hasOwnProperty("constructor")) {
      SubClass = px.constructor
    }else {
      if("@DEBUG@") {
        SubClass = (new Function("return function " + camelCase(name) + "(){ " + "this.callSuper.apply(this, arguments);" + "}"))()
      }else {
        SubClass = function() {
          this.callSuper.apply(this, arguments)
        }
      }
    }
    px.constructor = SubClass;
    SubClass.__hooks__ = sxHooks;
    wrapProtoForSuper(px, SubClass);
    var inheritedStatics, sxInheritedStatics = sx.inheritedStatics;
    if(inheritedStatics = SuperClass.inheritedStatics) {
      sxInheritedStatics = sx.inheritedStatics = sx.inheritedStatics || {};
      S.mix(sxInheritedStatics, inheritedStatics, false)
    }
    S.extend(SubClass, SuperClass, px, sx);
    if(sxInheritedStatics) {
      S.mix(SubClass, sxInheritedStatics)
    }
    SubClass.extend = sx.extend || extend;
    SubClass.addMembers = addMembers;
    return SubClass
  };
  function addAttrs(host, attrs) {
    if(attrs) {
      for(var attr in attrs) {
        host.addAttr(attr, attrs[attr], false)
      }
    }
  }
  function initAttrs(host, config) {
    if(config) {
      for(var attr in config) {
        host.setInternal(attr, config[attr])
      }
    }
  }
  S.augment(Attribute, CustomEvent.Target, {INVALID:INVALID, callSuper:function() {
    var method, obj, self = this, args = arguments;
    if(typeof self === "function" && self.__name__) {
      method = self;
      obj = args[0];
      args = Array.prototype.slice.call(args, 1)
    }else {
      method = arguments.callee.caller;
      if(method.__wrapped__) {
        method = method.caller
      }
      obj = self
    }
    var name = method.__name__;
    if(!name) {
      return undefined
    }
    var member = method.__owner__.superclass[name];
    if(!member) {
      return undefined
    }
    return member.apply(obj, args || [])
  }, getAttrs:function() {
    return this.__attrs || (this.__attrs = {})
  }, getAttrVals:function() {
    var self = this, o = {}, a, attrs = self.getAttrs();
    for(a in attrs) {
      o[a] = self.get(a)
    }
    return o
  }, addAttr:function(name, attrConfig, override) {
    var self = this, attrs = self.getAttrs(), attr, cfg = S.clone(attrConfig);
    if(attr = attrs[name]) {
      S.mix(attr, cfg, override)
    }else {
      attrs[name] = cfg
    }
    return self
  }, addAttrs:function(attrConfigs, initialValues) {
    var self = this;
    S.each(attrConfigs, function(attrConfig, name) {
      self.addAttr(name, attrConfig)
    });
    if(initialValues) {
      self.set(initialValues)
    }
    return self
  }, hasAttr:function(name) {
    return this.getAttrs().hasOwnProperty(name)
  }, removeAttr:function(name) {
    var self = this;
    var __attrVals = getAttrVals(self);
    var __attrs = self.getAttrs();
    if(self.hasAttr(name)) {
      delete __attrs[name];
      delete __attrVals[name]
    }
    return self
  }, set:function(name, value, opts) {
    var self = this, e;
    if(S.isPlainObject(name)) {
      opts = value;
      opts = opts || {};
      var all = Object(name), attrs = [], errors = [];
      for(name in all) {
        if((e = validate(self, name, all[name], all)) !== undefined) {
          errors.push(e)
        }
      }
      if(errors.length) {
        if(opts.error) {
          opts.error(errors)
        }
        return FALSE
      }
      for(name in all) {
        setInternal(self, name, all[name], opts, attrs)
      }
      var attrNames = [], prevVals = [], newVals = [], subAttrNames = [];
      S.each(attrs, function(attr) {
        prevVals.push(attr.prevVal);
        newVals.push(attr.newVal);
        attrNames.push(attr.attrName);
        subAttrNames.push(attr.subAttrName)
      });
      if(attrNames.length) {
        __fireAttrChange(self, "", "*", prevVals, newVals, subAttrNames, attrNames, opts.data)
      }
      return self
    }
    opts = opts || {};
    e = validate(self, name, value);
    if(e !== undefined) {
      if(opts.error) {
        opts.error(e)
      }
      return FALSE
    }
    return setInternal(self, name, value, opts)
  }, setInternal:function(name, value) {
    var self = this, setValue, attrConfig = ensureNonEmpty(self.getAttrs(), name), setter = attrConfig.setter;
    if(setter && (setter = normalFn(self, setter))) {
      setValue = setter.call(self, value, name)
    }
    if(setValue === INVALID) {
      return FALSE
    }
    if(setValue !== undefined) {
      value = setValue
    }
    getAttrVals(self)[name] = value;
    return undefined
  }, get:function(name) {
    var self = this, dot = ".", path, attrVals = getAttrVals(self), attrConfig, getter, ret;
    if(name.indexOf(dot) !== -1) {
      path = name.split(dot);
      name = path.shift()
    }
    attrConfig = ensureNonEmpty(self.getAttrs(), name, 1);
    getter = attrConfig.getter;
    ret = name in attrVals ? attrVals[name] : getDefAttrVal(self, name);
    if(getter && (getter = normalFn(self, getter))) {
      ret = getter.call(self, ret, name)
    }
    if(!(name in attrVals) && ret !== undefined) {
      attrVals[name] = ret
    }
    if(path) {
      ret = getValueByPath(ret, path)
    }
    return ret
  }, reset:function(name, opts) {
    var self = this;
    if(typeof name === "string") {
      if(self.hasAttr(name)) {
        return self.set(name, getDefAttrVal(self, name), opts)
      }else {
        return self
      }
    }
    opts = name;
    var attrs = self.getAttrs(), values = {};
    for(name in attrs) {
      values[name] = getDefAttrVal(self, name)
    }
    self.set(values, opts);
    return self
  }});
  function getDefAttrVal(self, name) {
    var attrs = self.getAttrs(), attrConfig = ensureNonEmpty(attrs, name, 1), valFn = attrConfig.valueFn, val;
    if(valFn && (valFn = normalFn(self, valFn))) {
      val = valFn.call(self);
      if(val !== undefined) {
        attrConfig.value = val
      }
      delete attrConfig.valueFn;
      attrs[name] = attrConfig
    }
    return attrConfig.value
  }
  function validate(self, name, value, all) {
    var path, prevVal, pathNamePair;
    pathNamePair = getPathNamePair(name);
    name = pathNamePair.name;
    path = pathNamePair.path;
    if(path) {
      prevVal = self.get(name);
      value = getValueBySubValue(prevVal, path, value)
    }
    var attrConfig = ensureNonEmpty(self.getAttrs(), name), e, validator = attrConfig.validator;
    if(validator && (validator = normalFn(self, validator))) {
      e = validator.call(self, value, name, all);
      if(e !== undefined && e !== true) {
        return e
      }
    }
    return undefined
  }
});

/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:15
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 event/custom/observer
 event/custom/object
 event/custom/observable
 event/custom/target
 event/custom
*/

KISSY.add("event/custom/observer", ["event/base"], function(S, require) {
  var BaseEvent = require("event/base");
  function CustomEventObserver() {
    CustomEventObserver.superclass.constructor.apply(this, arguments)
  }
  S.extend(CustomEventObserver, BaseEvent.Observer, {keys:["fn", "context", "groups"]});
  return CustomEventObserver
});
KISSY.add("event/custom/object", ["event/base"], function(S, require) {
  var BaseEvent = require("event/base");
  function CustomEventObject(data) {
    CustomEventObject.superclass.constructor.call(this);
    S.mix(this, data)
  }
  S.extend(CustomEventObject, BaseEvent.Object);
  return CustomEventObject
});
KISSY.add("event/custom/observable", ["event/base", "./observer", "./object"], function(S, require) {
  var BaseEvent = require("event/base");
  var CustomEventObserver = require("./observer");
  var CustomEventObject = require("./object");
  var Utils = BaseEvent.Utils;
  function CustomEventObservable() {
    var self = this;
    CustomEventObservable.superclass.constructor.apply(self, arguments);
    self.defaultFn = null;
    self.defaultTargetOnly = false;
    self.bubbles = true
  }
  S.extend(CustomEventObservable, BaseEvent.Observable, {on:function(cfg) {
    var observer = new CustomEventObserver(cfg);
    if(S.Config.debug) {
      if(!observer.fn) {
        S.error("lack event handler for " + this.type)
      }
    }
    if(this.findObserver(observer) === -1) {
      this.observers.push(observer)
    }
  }, fire:function(eventData) {
    eventData = eventData || {};
    var self = this, bubbles = self.bubbles, currentTarget = self.currentTarget, parents, parentsLen, type = self.type, defaultFn = self.defaultFn, i, customEventObject = eventData, gRet, ret;
    eventData.type = type;
    if(!(customEventObject instanceof CustomEventObject)) {
      customEventObject.target = currentTarget;
      customEventObject = new CustomEventObject(customEventObject)
    }
    customEventObject.currentTarget = currentTarget;
    ret = self.notify(customEventObject);
    if(gRet !== false && ret !== undefined) {
      gRet = ret
    }
    if(bubbles && !customEventObject.isPropagationStopped()) {
      parents = currentTarget.getTargets();
      parentsLen = parents && parents.length || 0;
      for(i = 0;i < parentsLen && !customEventObject.isPropagationStopped();i++) {
        ret = parents[i].fire(type, customEventObject);
        if(gRet !== false && ret !== undefined) {
          gRet = ret
        }
      }
    }
    if(defaultFn && !customEventObject.isDefaultPrevented()) {
      var target = customEventObject.target, lowestCustomEventObservable = target.getCustomEventObservable(customEventObject.type);
      if(!self.defaultTargetOnly && !lowestCustomEventObservable.defaultTargetOnly || currentTarget === target) {
        gRet = defaultFn.call(currentTarget, customEventObject)
      }
    }
    return gRet
  }, notify:function(event) {
    var observers = [].concat(this.observers), ret, gRet, len = observers.length, i;
    for(i = 0;i < len && !event.isImmediatePropagationStopped();i++) {
      ret = observers[i].notify(event, this);
      if(gRet !== false && ret !== undefined) {
        gRet = ret
      }
    }
    return gRet
  }, detach:function(cfg) {
    var groupsRe, self = this, fn = cfg.fn, context = cfg.context, currentTarget = self.currentTarget, observers = self.observers, groups = cfg.groups;
    if(!observers.length) {
      return
    }
    if(groups) {
      groupsRe = Utils.getGroupsRe(groups)
    }
    var i, j, t, observer, observerContext, len = observers.length;
    if(fn || groupsRe) {
      context = context || currentTarget;
      for(i = 0, j = 0, t = [];i < len;++i) {
        observer = observers[i];
        observerContext = observer.context || currentTarget;
        if(context !== observerContext || fn && fn !== observer.fn || groupsRe && !observer.groups.match(groupsRe)) {
          t[j++] = observer
        }
      }
      self.observers = t
    }else {
      self.reset()
    }
  }});
  return CustomEventObservable
});
KISSY.add("event/custom/target", ["event/base", "./observable"], function(S, require) {
  var BaseEvent = require("event/base");
  var CustomEventObservable = require("./observable");
  var Utils = BaseEvent.Utils, splitAndRun = Utils.splitAndRun, KS_BUBBLE_TARGETS = "__~ks_bubble_targets";
  var KS_CUSTOM_EVENTS = "__~ks_custom_events";
  return{isTarget:1, getCustomEventObservable:function(type, create) {
    var target = this, customEvent, customEventObservables = target.getCustomEvents();
    customEvent = customEventObservables && customEventObservables[type];
    if(!customEvent && create) {
      customEvent = customEventObservables[type] = new CustomEventObservable({currentTarget:target, type:type})
    }
    return customEvent
  }, fire:function(type, eventData) {
    var self = this, ret, targets = self.getTargets(), hasTargets = targets && targets.length;
    eventData = eventData || {};
    splitAndRun(type, function(type) {
      var r2, customEventObservable;
      Utils.fillGroupsForEvent(type, eventData);
      type = eventData.type;
      customEventObservable = self.getCustomEventObservable(type);
      if(!customEventObservable && !hasTargets) {
        return
      }
      if(customEventObservable) {
        if(!customEventObservable.hasObserver() && !customEventObservable.defaultFn) {
          if(customEventObservable.bubbles && !hasTargets || !customEventObservable.bubbles) {
            return
          }
        }
      }else {
        customEventObservable = new CustomEventObservable({currentTarget:self, type:type})
      }
      r2 = customEventObservable.fire(eventData);
      if(ret !== false && r2 !== undefined) {
        ret = r2
      }
    });
    return ret
  }, publish:function(type, cfg) {
    var customEventObservable, self = this;
    splitAndRun(type, function(t) {
      customEventObservable = self.getCustomEventObservable(t, true);
      S.mix(customEventObservable, cfg)
    });
    return self
  }, addTarget:function(anotherTarget) {
    var self = this, targets = self.getTargets();
    if(!S.inArray(anotherTarget, targets)) {
      targets.push(anotherTarget)
    }
    return self
  }, removeTarget:function(anotherTarget) {
    var self = this, targets = self.getTargets(), index = S.indexOf(anotherTarget, targets);
    if(index !== -1) {
      targets.splice(index, 1)
    }
    return self
  }, getTargets:function() {
    return this[KS_BUBBLE_TARGETS] || (this[KS_BUBBLE_TARGETS] = [])
  }, getCustomEvents:function() {
    return this[KS_CUSTOM_EVENTS] || (this[KS_CUSTOM_EVENTS] = {})
  }, on:function(type, fn, context) {
    var self = this;
    Utils.batchForType(function(type, fn, context) {
      var cfg = Utils.normalizeParam(type, fn, context), customEvent;
      type = cfg.type;
      customEvent = self.getCustomEventObservable(type, true);
      if(customEvent) {
        customEvent.on(cfg)
      }
    }, 0, type, fn, context);
    return self
  }, detach:function(type, fn, context) {
    var self = this;
    Utils.batchForType(function(type, fn, context) {
      var cfg = Utils.normalizeParam(type, fn, context), customEvents, customEvent;
      type = cfg.type;
      if(type) {
        customEvent = self.getCustomEventObservable(type, true);
        if(customEvent) {
          customEvent.detach(cfg)
        }
      }else {
        customEvents = self.getCustomEvents();
        S.each(customEvents, function(customEvent) {
          customEvent.detach(cfg)
        })
      }
    }, 0, type, fn, context);
    return self
  }}
});
KISSY.add("event/custom", ["./custom/target"], function(S, require) {
  var Target = require("./custom/target");
  return{Target:Target, global:S.mix({}, Target)}
});

/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:15
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 event/base/utils
 event/base/object
 event/base/observer
 event/base/observable
 event/base
*/

KISSY.add("event/base/utils", [], function(S) {
  var splitAndRun, getGroupsRe;
  function getTypedGroups(type) {
    if(type.indexOf(".") < 0) {
      return[type, ""]
    }
    var m = type.match(/([^.]+)?(\..+)?$/), t = m[1], ret = [t], gs = m[2];
    if(gs) {
      gs = gs.split(".").sort();
      ret.push(gs.join("."))
    }else {
      ret.push("")
    }
    return ret
  }
  return{splitAndRun:splitAndRun = function(type, fn) {
    if(S.isArray(type)) {
      S.each(type, fn);
      return
    }
    type = S.trim(type);
    if(type.indexOf(" ") === -1) {
      fn(type)
    }else {
      S.each(type.split(/\s+/), fn)
    }
  }, normalizeParam:function(type, fn, context) {
    var cfg = fn || {};
    if(typeof fn === "function") {
      cfg = {fn:fn, context:context}
    }else {
      cfg = S.merge(cfg)
    }
    var typedGroups = getTypedGroups(type);
    type = typedGroups[0];
    cfg.groups = typedGroups[1];
    cfg.type = type;
    return cfg
  }, batchForType:function(fn, num) {
    var args = S.makeArray(arguments), types = args[2 + num];
    if(types && typeof types === "object") {
      S.each(types, function(value, type) {
        var args2 = [].concat(args);
        args2.splice(0, 2);
        args2[num] = type;
        args2[num + 1] = value;
        fn.apply(null, args2)
      })
    }else {
      splitAndRun(types, function(type) {
        var args2 = [].concat(args);
        args2.splice(0, 2);
        args2[num] = type;
        fn.apply(null, args2)
      })
    }
  }, fillGroupsForEvent:function(type, eventData) {
    var typedGroups = getTypedGroups(type), _ksGroups = typedGroups[1];
    if(_ksGroups) {
      _ksGroups = getGroupsRe(_ksGroups);
      eventData._ksGroups = _ksGroups
    }
    eventData.type = typedGroups[0]
  }, getGroupsRe:getGroupsRe = function(groups) {
    return new RegExp(groups.split(".").join(".*\\.") + "(?:\\.|$)")
  }}
});
KISSY.add("event/base/object", [], function(S, undefined) {
  var returnFalse = function() {
    return false
  }, returnTrue = function() {
    return true
  };
  function EventObject() {
    var self = this;
    self.timeStamp = S.now();
    self.target = undefined;
    self.currentTarget = undefined
  }
  EventObject.prototype = {constructor:EventObject, isDefaultPrevented:returnFalse, isPropagationStopped:returnFalse, isImmediatePropagationStopped:returnFalse, preventDefault:function() {
    this.isDefaultPrevented = returnTrue
  }, stopPropagation:function() {
    this.isPropagationStopped = returnTrue
  }, stopImmediatePropagation:function() {
    var self = this;
    self.isImmediatePropagationStopped = returnTrue;
    self.stopPropagation()
  }, halt:function(immediate) {
    var self = this;
    if(immediate) {
      self.stopImmediatePropagation()
    }else {
      self.stopPropagation()
    }
    self.preventDefault()
  }};
  return EventObject
});
KISSY.add("event/base/observer", [], function(S, undefined) {
  function Observer(cfg) {
    S.mix(this, cfg)
  }
  Observer.prototype = {constructor:Observer, equals:function(s2) {
    var s1 = this;
    return!!S.reduce(s1.keys, function(v, k) {
      return v && s1[k] === s2[k]
    }, 1)
  }, simpleNotify:function(event, ce) {
    var ret, self = this;
    ret = self.fn.call(self.context || ce.currentTarget, event, self.data);
    if(self.once) {
      ce.removeObserver(self)
    }
    return ret
  }, notifyInternal:function(event, ce) {
    var ret = this.simpleNotify(event, ce);
    if(ret === false) {
      event.halt()
    }
    return ret
  }, notify:function(event, ce) {
    var self = this, _ksGroups = event._ksGroups;
    if(_ksGroups && (!self.groups || !self.groups.match(_ksGroups))) {
      return undefined
    }
    return self.notifyInternal(event, ce)
  }};
  return Observer
});
KISSY.add("event/base/observable", [], function(S) {
  function Observable(cfg) {
    var self = this;
    self.currentTarget = null;
    S.mix(self, cfg);
    self.reset()
  }
  Observable.prototype = {constructor:Observable, hasObserver:function() {
    return!!this.observers.length
  }, reset:function() {
    var self = this;
    self.observers = []
  }, removeObserver:function(observer) {
    var self = this, i, observers = self.observers, len = observers.length;
    for(i = 0;i < len;i++) {
      if(observers[i] === observer) {
        observers.splice(i, 1);
        break
      }
    }
    self.checkMemory()
  }, checkMemory:function() {
  }, findObserver:function(observer) {
    var observers = this.observers, i;
    for(i = observers.length - 1;i >= 0;--i) {
      if(observer.equals(observers[i])) {
        return i
      }
    }
    return-1
  }};
  return Observable
});
KISSY.add("event/base", ["./base/utils", "./base/object", "./base/observer", "./base/observable"], function(S, require) {
  var Utils = require("./base/utils");
  var Object = require("./base/object");
  var Observer = require("./base/observer");
  var Observable = require("./base/observable");
  return{Utils:Utils, Object:Object, Observer:Observer, Observable:Observable}
});



/*
combined files : 

m/ua

*/
// ## UA 模块
//
// 硬件设备探测模块，API 兼容KISSY，但去除了对IE老版本的支持。新增对kindle、touchpad、blackberry等设备的探测，这样来引入模块：
// 
// ```
// KISSY.use('ua',function(S,UA){
// 		// S.UA.xx 或者 UA.xx 来获取设备探测字段
// });
// ```
//
// 使用方法
// ```
// // 通用探测
// S.UA.webkit //webkit内核版本
// S.UA.trident // IE 内核版本，支持不全
// S.UA.gecko // Firefox 内核版本
// S.UA.presto // Opera 内核版本
// S.UA.chrome // Cheome 版本
// S.UA.safari // Safari 版本
// S.UA.firefox // Firefox 版本
// S.UA.ie // IE 版本，支持不全
// S.UA.opera // Opera 版本
// S.UA.core // 内核类型，返回webkit或者trident等
// S.UA.shell // 外壳版本，返回ie,chrome,firefox等
//
// // 移动设备探测
// S.UA.phantomjs // PhantomJS 版本号
// S.UA.os // 操作系统类型，取值linux、windows、ios、android等
// S.UA.ipad // ipad 版本
// S.UA.iphone // iphone 版本
// S.UA.ipod // ipod 版本
// S.UA.ios // ios 操作系统版本
// S.UA.touchpad // touchpad 版本
// S.UA.kindle // kindle 版本
// S.UA.android // android 版本
// S.UA.webos // webos版本
// S.UA.blackberry // 黑莓版本
// S.UA.bb10 // 老版本黑莓版本探测
// S.UA.rimtabletos // 平板电脑版本
// S.UA.tablet // 平板电脑版本
// S.UA.slik // Slik 版本
// S.UA.playbook // PlayBook版本
// ```
//
// 具体用法参照[KISSY1.4.0 UA文档](http://docs.kissyui.com/1.4/docs/html/guideline/ua.html)
KISSY.add('m/ua',function(S) {
	var ua = navigator.userAgent,m,core,shell,
	UA = S.UA = {
		/**
		 * webkit version
		 * @type undefined|Number
		 * @member KISSY.UA
		 */
		webkit: undefined,
		/**
		 * trident version
		 * @type undefined|Number
		 * @member KISSY.UA
		 */
		trident: undefined,
		/**
		 * gecko version
		 * @type undefined|Number
		 * @member KISSY.UA
		 */
		gecko: undefined,
		/**
		 * presto version
		 * @type undefined|Number
		 * @member KISSY.UA
		 */
		presto: undefined,
		/**
		 * chrome version
		 * @type undefined|Number
		 * @member KISSY.UA
		 */
		chrome: undefined,
		/**
		 * safari version
		 * @type undefined|Number
		 * @member KISSY.UA
		 */
		safari: undefined,
		/**
		 * firefox version
		 * @type undefined|Number
		 * @member KISSY.UA
		 */
		firefox: undefined,
		/**
		 * ie version
		 * @type undefined|Number
		 * @member KISSY.UA
		 */
		ie: undefined,
		/**
		 * opera version
		 * @type undefined|Number
		 * @member KISSY.UA
		 */
		opera: undefined,
		/**
		 * mobile browser. apple, android.
		 * @type String
		 * @member KISSY.UA
		 */
		/*mobile: undefined,*/
		/**
		 * browser render engine name. webkit, trident
		 * @type String
		 * @member KISSY.UA
		 */
		core: undefined,
		/**
		 * browser shell name. ie, chrome, firefox
		 * @type String
		 * @member KISSY.UA
		 */
		shell: undefined,

		/**
		 * PhantomJS version number
		 * @type undefined|Number
		 * @member KISSY.UA
		 */
		phantomjs: undefined,

		/**
		 * operating system. android, ios, linux, windows
		 * @type string
		 * @member KISSY.UA
		 */
		os: undefined,

		/**
		 * ipad ios version
		 * @type Number
		 * @member KISSY.UA
		 */
		ipad: undefined,
		/**
		 * iphone ios version
		 * @type Number
		 * @member KISSY.UA
		 */
		iphone: undefined,
		/**
		 * ipod ios
		 * @type Number
		 * @member KISSY.UA
		 */
		ipod: undefined,
		/**
		 * ios version
		 * @type Number
		 * @member KISSY.UA
		 */
		ios: undefined,
		touchpad:undefined,
		kindle:undefined,

		/**
		 * android version
		 * @type Number
		 * @member KISSY.UA
		 */
		android: undefined,
		webos:undefined,
		blackberry:undefined,
		bb10:undefined,
		rimtabletos:undefined,
		tablet:undefined,

		slik:undefined,
		playbook:undefined
	};
	function numberify(s) {
		var c = 0;
		/* convert '1.2.3.4' to 1.234 */
		return parseFloat(s.replace(/\./g, function() {
			return (c++ === 0) ? '.': '';
		}));
	}

	var os = /*S.UA.os =*/ {},
	browser = /*this.browser =*/ {},
	webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
	android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
	ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
	iphone = ! ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
	touchpad = webos && ua.match(/TouchPad/),
	kindle = ua.match(/Kindle\/([\d.]+)/),
	silk = ua.match(/Silk\/([\d._]+)/),
	blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
	bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
	rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
	playbook = ua.match(/PlayBook/),
	chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
	firefox = ua.match(/Firefox\/([\d.]+)/),
	ie = ua.match(/MSIE\s([\d.]+)/),
	safari = webkit && ua.match(/Mobile\//) && ! chrome,
	webview = ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && ! chrome;

	/*
	Todo: clean this up with a better OS/browser seperation:
	- discern (more) between multiple browsers on android
	- decide if kindle fire in silk mode is android or not
	- Firefox on Android doesn't specify the Android version
	- possibly devide in os, device and browser hashes
	*/
	if (browser.webkit = !! webkit) {
		browser.webkit = numberify(webkit[1]);
	}

	if (android){
		os.android = numberify(android[2]);
		UA.os = 'android';
	}
	if (iphone && ! ipod){
		os.ios = os.iphone = numberify(iphone[2].replace(/_/g, '.'));
		UA.os = 'ios';
	}
	if (ipad){
		os.ios = os.ipad = numberify(ipad[2].replace(/_/g, '.'));
		UA.os = 'ios';
	}
	if (ipod){
		os.ios = os.ipod = numberify(ipod[3] ? ipod[3].replace(/_/g, '.') : true);
		UA.os = 'ios';
	}
	if (webos){
		os.webos = numberify(webos[2]);
		UA.os = 'webos';
	}
	if (touchpad){
		os.touchpad = true;
		UA.os = 'touchpad';
	}
	if (blackberry){
		os.blackberry = numberify(blackberry[2]);
		UA.os = 'blackberry';
	}
	if (bb10){
		os.bb10 = numberify(bb10[2]);
		UA.os = 'bb10';
	}
	if (rimtabletos){
		os.rimtabletos = numberify(rimtabletos[2]);
		UA.os = 'rimtabletos';
	}
	if (playbook) {
		browser.playbook = true;
		shell = 'playbook';
	}
	if (kindle) {
		os.kindle = numberify(kindle[1]);
		UA.os = 'kindle';
	}
	if (silk) {
		browser.silk = numberify(silk[1])
	}
	if (!silk && os.android && ua.match(/Kindle Fire/)){
		browser.silk = true;
		shell = 'silk';
	}
	if (chrome) {
		browser.chrome = numberify(chrome[1]);
		shell = 'chrome';
	}
	if (firefox) {
		browser.firefox = numberify(firefox[1]);
		shell = 'firefox';
	}
	if (ie) {
		browser.ie = numberify(ie[1]);
		shell = 'ie';
	}
	if (safari && (ua.match(/Safari/) || !! os.ios)){
		browser.safari = true;
		shell = 'safari';
	}
	if (webview){
		browser.webview = true;
		shell = 'webview';
	}

	if ((m = ua.match(/AppleWebKit\/([\d.]*)/)) && m[1]) {
		core = 'webkit';

		if ((m = ua.match(/OPR\/(\d+\.\d+)/)) && m[1]) {
			UA[shell = 'opera'] = numberify(m[1]);
		}
		if ((m = ua.match(/PhantomJS\/([^\s]*)/)) && m[1]) {
			UA.phantomjs = numberify(m[1]);
		}
	}
	/* NOT WebKit */
	else {
		/* 
		Presto
		ref: http://www.useragentstring.com/pages/useragentstring.php
		*/
        if ((m = ua.match(/Trident\/([\d.]*)/)) && m[1]) {
            UA[core = 'trident'] = numberify(m[1]);
        }
		else if ((m = ua.match(/Presto\/([\d.]*)/)) && m[1]) {
			UA[core = 'presto'] = numberify(m[1]);

			/* Opera */
			if ((m = ua.match(/Opera\/([\d.]*)/)) && m[1]) {
				UA[shell = 'opera'] = numberify(m[1]); // Opera detected, look for revision
				if ((m = ua.match(/Opera\/.* Version\/([\d.]*)/)) && m[1]) {
					UA[shell] = numberify(m[1]);
				}

			}

			/* NOT WebKit or Presto */
		} else if ((m = ua.match(/Gecko/))) {
			UA[core = 'gecko'] = 0.1; // Gecko detected, look for revision
			if ((m = ua.match(/rv:([\d.]*)/)) && m[1]) {
				UA[core] = numberify(m[1]);
			}
		}
	}

	S.mix(S.UA,{
		tablet : !! (ipad || playbook || (android && ! ua.match(/Mobile/)) || 
					 (firefox && ua.match(/Tablet/)) || (ie && ! ua.match(/Phone/) && ua.match(/Touch/))),
		phone : !! (!os.tablet && ! os.ipod && 
				(android || iphone || webos || blackberry || bb10 || (chrome && ua.match(/Android/)) || 
				 (chrome && ua.match(/CriOS\/([\d.]+)/)) || (firefox && ua.match(/Mobile/)) || 
				 (ie && ua.match(/Touch/))))
	});

	S.mix(S.UA,browser);
	S.mix(S.UA,os);

	if(!UA.os){
		if ((/windows|win32/i).test(ua)) {
			UA.os = 'windows';
		} else if ((/macintosh|mac_powerpc/i).test(ua)) {
			UA.os  = 'macintosh';
		} else if ((/linux/i).test(ua)) {
			UA.os = 'linux';
		} else if ((/rhino/i).test(ua)) {
			UA.os = 'rhino';
		}
	}

	if(!UA.core){
		UA.core = core;
	}
	if(!UA.shell){
		UA.shell = shell;
	}

	return UA;
});


/*
 NOTES:
 2013.07.08 yiminghe@gmail.com
 - support ie11 and opera(using blink)

 2013.01.17 yiminghe@gmail.com
 - expose getDescriptorFromUserAgent for analysis tool in nodejs

 2012.11.27 yiminghe@gmail.com
 - moved to seed for conditional loading and better code share

 2012.11.21 yiminghe@gmail.com
 - touch and os support

 2011.11.08 gonghaocn@gmail.com
 - ie < 10 使用条件注释判断内核，更精确

 2010.03
 - jQuery, YUI 等类库都推荐用特性探测替代浏览器嗅探。特性探测的好处是能自动适应未来设备和未知设备，比如
 if(document.addEventListener) 假设 IE9 支持标准事件，则代码不用修改，就自适应了“未来浏览器”。
 对于未知浏览器也是如此。但是，这并不意味着浏览器嗅探就得彻底抛弃。当代码很明确就是针对已知特定浏览器的，
 同时并非是某个特性探测可以解决时，用浏览器嗅探反而能带来代码的简洁，同时也也不会有什么后患。总之，一切
 皆权衡。
 - UA.ie && UA.ie < 8 并不意味着浏览器就不是 IE8, 有可能是 IE8 的兼容模式。进一步的判断需要使用 documentMode.
 */



/*
combined files : 

m/uri

*/
/**
 * @ignore
 * Uri class for KISSY.
 * @author yiminghe@gmail.com
 */
KISSY.add('m/uri',function(S) {
    // cacheMethods from KISSY Core
    var log = S.log, error = S.error;

    // cache native methods
    var isArray = Array.isArray, keys = Object.keys,
        trim = function(str) {
            return str.trim();
        },
        eachArray = function(arr, fn) {
            arr.forEach(fn);
        };

    // cache common tools
    var startsWith = function(str, prefix) {
        return str.lastIndexOf(prefix, 0) === 0;
    },  endsWith = function(str, suffix) {
        var ind = str.length - suffix.length;
        return ind >= 0 && str.indexOf(suffix, ind) === ind;
    },  eachObject = function(obj, fn) {
        for (var prop in obj) {
            fn(obj[prop], prop);
        }
    };

    var reDisallowedInSchemeOrUserInfo = /[#\/\?@]/g,
        reDisallowedInPathName = /[#\?]/g,
    // ?? combo of taobao
        reDisallowedInQuery = /[#@]/g,
        reDisallowedInFragment = /#/g,

        URI_SPLIT_REG = new RegExp(
            '^' +
                /*
                 Scheme names consist of a sequence of characters beginning with a
                 letter and followed by any combination of letters, digits, plus
                 ('+'), period ('.'), or hyphen ('-').
                 */
                '(?:([\\w\\d+.-]+):)?' + // scheme

                '(?://' +
                /*
                 The authority component is preceded by a double slash ('//') and is
                 terminated by the next slash ('/'), question mark ('?'), or number
                 sign ('#') character, or by the end of the URI.
                 */
                '(?:([^/?#@]*)@)?' + // userInfo

                '(' +
                '[\\w\\d\\-\\u0100-\\uffff.+%]*' +
                '|' +
                // ipv6
                '\\[[^\\]]+\\]' +
                ')' + // hostname - restrict to letters,
                // digits, dashes, dots, percent
                // escapes, and unicode characters.
                '(?::([0-9]+))?' + // port
                ')?' +
                /*
                 The path is terminated
                 by the first question mark ('?') or number sign ('#') character, or
                 by the end of the URI.
                 */
                '([^?#]+)?' + // path. hierarchical part
                /*
                 The query component is indicated by the first question
                 mark ('?') character and terminated by a number sign ('#') character
                 or by the end of the URI.
                 */
                '(?:\\?([^#]*))?' + // query. non-hierarchical data
                /*
                 The fragment identifier component of a URI allows indirect
                 identification of a secondary resource by reference to a primary
                 resource and additional identifying information.

                 A
                 fragment identifier component is indicated by the presence of a
                 number sign ('#') character and terminated by the end of the URI.
                 */
                '(?:#(.*))?' + // fragment
                '$'),


        REG_INFO = {
            scheme: 1,
            userInfo: 2,
            hostname: 3,
            port: 4,
            path: 5,
            query: 6,
            fragment: 7
        };

    function eachRegInfo(fn) {
        eachObject(REG_INFO, fn);
    }

    function parseQuery(self) {
        if (!self._queryMap) {
            self._queryMap = unparam(self._query);
        }
    }

    // Canonicalize a path
    // realpath("http://test.com/a//./b/../c") ==> "http://test.com/a/c"
    function normalize(path) {

    var DOT_RE = /\/\.\//g,
        DOUBLE_DOT_RE = /\/[^/]+\/\.\.\//,
        DOUBLE_SLASH_RE = /([^:/])\/\//g;

      // /a/b/./c/./d ==> /a/b/c/d
      path = path.replace(DOT_RE, "/");

      // a/b/c/../../d  ==>  a/b/../d  ==>  a/d
      while (path.match(DOUBLE_DOT_RE)) {
        path = path.replace(DOUBLE_DOT_RE, "/");
      }

      // a//b/c  ==>  a/b/c
      path = path.replace(DOUBLE_SLASH_RE, "$1/");

      return path;
    }

    function urlEncode(str) {
        return encodeURIComponent(String(str));
    }

    function urlDecode(str) {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    }

    function isValidParamValue(val) {
        var t = typeof val;
        // If the type of val is null, undefined, number, string, boolean, return TRUE.
        return val === null || val === undefined || (t !== 'object' && t !== 'function');
    }


    function param(o, sep, eq, serializeArray) {
        sep = sep || '&';
        eq = eq || '=';
        if (serializeArray === undefined) {
            serializeArray = true;
        }
        var buf = [], key, i, v, len, val;

        for (key in o) {

            val = o[key];
            key = urlEncode(key);

            // val is valid non-array value
            if (isValidParamValue(val)) {
                buf.push(key);
                if (val !== undefined) {
                    buf.push(eq, urlEncode(val + ''));
                }
                buf.push(sep);
            }
            // val is not empty array
            else if (isArray(val) && val.length) {
                for (i = 0, len = val.length; i < len; ++i) {
                    v = val[i];
                    if (isValidParamValue(v)) {
                        buf.push(key, (serializeArray ? urlEncode('[]') : ''));
                        if (v !== undefined) {
                            buf.push(eq, urlEncode(v + ''));
                        }
                        buf.push(sep);
                    }
                }
            }
            // ignore other cases, including empty array, Function, RegExp, Date etc.

        }
        buf.pop();
        return buf.join('');
    }

    function unparam (str, sep, eq) {
        if (typeof str !== 'string' || !(str = trim(str))) {
            return {};
        }
        sep = sep || '&';
        eq = eq || '=';
        var ret = {},
            eqIndex,
            pairs = str.split(sep),
            key, val,
            i = 0, len = pairs.length;

        for (; i < len; ++i) {
            eqIndex = pairs[i].indexOf(eq);
            if (eqIndex === -1) {
                key = urlDecode(pairs[i]);
                val = undefined;
            } else {
                // remember to decode key!
                key = urlDecode(pairs[i].substring(0, eqIndex));
                val = pairs[i].substring(eqIndex + 1);
                try {
                    val = urlDecode(val);
                } catch (e) {
                    error('decodeURIComponent error : ' + val);
                    error(e);
                }
                if (endsWith(key, '[]')) {
                    key = key.substring(0, key.length - 2);
                }
            }
            if (key in ret) {
                if (isArray(ret[key])) {
                    ret[key].push(val);
                } else {
                    ret[key] = [ret[key], val];
                }
            } else {
                ret[key] = val;
            }
        }
        return ret;
    }

    /**
     * @class KISSY.Uri.Query
     * Query data structure.
     * @param {String} [query] encoded query string(without question mask).
     */
    function Query(query) {
        this._query = query || '';
    }


    Query.prototype = {
        constructor: Query,

        /**
         * Cloned new instance.
         * @return {KISSY.Uri.Query}
         */
        clone: function () {
            return new Query(this.toString());
        },


        /**
         * reset to a new query string
         * @param {String} query
         * @chainable
         */
        reset: function (query) {
            var self = this;
            self._query = query || '';
            self._queryMap = null;
            return self;
        },

        /**
         * Parameter count.
         * @return {Number}
         */
        count: function () {
            var self = this,
                count = 0,
                _queryMap,
                k;
            parseQuery(self);
            _queryMap = self._queryMap;
            for (k in _queryMap) {

                if (isArray(_queryMap[k])) {
                    count += _queryMap[k].length;
                } else {
                    count++;
                }

            }
            return count;
        },

        /**
         * judge whether has query parameter
         * @param {String} [key]
         */
        has: function (key) {
            var self = this, _queryMap;
            parseQuery(self);
            _queryMap = self._queryMap;
            if (key) {
                return key in _queryMap;
            } else {
                for (var prop in _queryMap) {
                    if (p !== undefined) {
                        return true; // _query has any defined data
                    }
                }
                return false; //_queryMap is an empty object
            }
        },

        /**
         * Return parameter value corresponding to current key
         * @param {String} [key]
         */
        get: function (key) {
            var self = this, _queryMap;
            parseQuery(self);
            _queryMap = self._queryMap;
            if (key) {
                return _queryMap[key];
            } else {
                return _queryMap;
            }
        },

        /**
         * Parameter names.
         * @return {String[]}
         */
        keys: function () {
            var self = this;
            parseQuery(self);
            return keys(self._queryMap);
        },

        /**
         * Set parameter value corresponding to current key
         * @param {String} key
         * @param value
         * @chainable
         */
        set: function (key, value) {
            var self = this, _queryMap;
            parseQuery(self);
            _queryMap = self._queryMap;
            if (typeof key === 'string') {
                self._queryMap[key] = value;
            } else if (typeof key === 'object') {
                if (key instanceof Query) {
                    key = key.get();
                }
                eachObject(key, function (v, k) {
                    _queryMap[k] = v;
                });
            }
            return self;
        },

        /**
         * Remove parameter with specified name.
         * @param {String} key
         * @chainable
         */
        remove: function (key) {
            var self = this;
            parseQuery(self);
            if (key) {
                delete self._queryMap[key];
            } else {
                self._queryMap = {};
            }
            return self;

        },

        /**
         * Add parameter value corresponding to current key
         * @param {String} key
         * @param value
         * @chainable
         */
        add: function (key, value) {
            var self = this,
                _queryMap,
                currentValue;
            if (typeof key === 'object') {
                if (key instanceof Query) {
                    key = key.get();
                }
                eachObject(key, function (v, k) {
                    self.add(k, v);
                });
            } else {
                parseQuery(self);
                _queryMap = self._queryMap;
                currentValue = _queryMap[key];
                if (currentValue === undefined) {
                    currentValue = value;
                } else {
                    currentValue = [].concat(currentValue).concat(value);
                }
                _queryMap[key] = currentValue;
            }
            return self;
        },

        /**
         * Serialize query to string.
         * @param {Boolean} [serializeArray=true]
         * whether append [] to key name when value 's type is array
         */
        toString: function (serializeArray) {
            var self = this;
            parseQuery(self);
            return param(self._queryMap, undefined, undefined, serializeArray);
        }
    };

    function padding2(str) {
        return str.length == 1 ? '0' + str : str;
    }

    function equalsIgnoreCase(str1, str2) {
        return str1.toLowerCase() == str2.toLowerCase();
    }

    // www.ta#bao.com // => www.ta.com/#bao.com
    // www.ta%23bao.com
    // Percent-Encoding
    function encodeSpecialChars(str, specialCharsReg) {
        // encodeURI( ) is intended to encode complete URIs,
        // the following ASCII punctuation characters,
        // which have special meaning in URIs, are not escaped either:
        // ; / ? : @ & = + $ , #
        return encodeURI(str).replace(specialCharsReg, function (m) {
            return '%' + padding2(m.charCodeAt(0).toString(16));
        });
    }


    /**
     * @class KISSY.Uri
     * Uri class for KISSY.
     * Most of its interfaces are same with window.location.
     * @param {String|KISSY.Uri} [uriStr] Encoded uri string.
     */
    function Uri(uriStr) {

        if (uriStr instanceof  Uri) {
            return uriStr['clone']();
        }

        var components, self = this;

        /**
         * scheme such as 'http:'. aka protocol without colon
         * @type {String}
         */
        self.scheme = '';

        /**
         * User credentials such as 'yiminghe:gmail'
         * @type {String}
         */
        self.userInfo = '';

        /**
         * Port such as '8080'
         * @type {String}
         */
        self.hostname = '';

        /**
         * path such as '/index.htm'. aka pathname
         * @type {String}
         */
        self.prot = '';

        /**
         * Query object for search string. aka search
         * @type {KISSY.Uri.Query}
         */
        self.path = '';

        /**
         * fragment such as '#!/test/2'. aka hash
         */
        self.query = '';

        /**
         * fragment such as '#!/test/2'. aka hash
         */
        self.fragment = '';

        components = Uri.getComponents(uriStr);

        eachObject(components, function (v, key) {
            v = v || '';
            if (key == 'query') {
                // need encoded content
                self.query = new Query(v);
            } else {
                // https://github.com/kissyteam/kissy/issues/298
                try {
                    v = urlDecode(v);
                } catch (e) {
                    log(e + 'urlDecode error : ' + v, 'error');
                }
                // need to decode to get data structure in memory
                self[key] = v;
            }
        });

        return self;
    }

    Uri.prototype = {

        constructor: Uri,

        /**
         * Return a cloned new instance.
         * @return {KISSY.Uri}
         */
        clone: function () {
            var uri = new Uri(), self = this;
            eachRegInfo(function (index, key) {
                uri[key] = self[key];
            });
            uri.query = uri.query.clone();
            return uri;
        },


        /**
         * The reference resolution algorithm.rfc 5.2
         * return a resolved uri corresponding to current uri
         * @param {KISSY.Uri|String} relativeUri
         *
         * for example:
         *      @example
         *      this: 'http://y/yy/z.com?t=1#v=2'
         *      'https:/y/' => 'https:/y/'
         *      '//foo' => 'http://foo'
         *      'foo' => 'http://y/yy/foo'
         *      '/foo' => 'http://y/foo'
         *      '?foo' => 'http://y/yy/z.com?foo'
         *      '#foo' => http://y/yy/z.com?t=1#foo'
         *
         * @return {KISSY.Uri}
         */
        resolve: function (relativeUri) {

            if (typeof relativeUri == 'string') {
                relativeUri = new Uri(relativeUri);
            }

            var self = this,
                override = 0,
                lastSlashIndex,
                order = ['scheme', 'userInfo', 'hostname', 'port', 'path', 'query', 'fragment'],
                target = self.clone();

            eachArray(order, function (o) {
                if (o == 'path') {
                    // relativeUri does not set for scheme/userInfo/hostname/port
                    if (override) {
                        target[o] = relativeUri[o];
                    } else {
                        var path = relativeUri['path'];
                        if (path) {
                            // force to override target 's query with relative
                            override = 1;
                            if (!startsWith(path, '/')) {
                                if (target.hostname && !target.path) {
                                    // RFC 3986, section 5.2.3, case 1
                                    path = '/' + path;
                                } else if (target.path) {
                                    // RFC 3986, section 5.2.3, case 2
                                    lastSlashIndex = target.path.lastIndexOf('/');
                                    if (lastSlashIndex != -1) {
                                        path = target.path.slice(0, lastSlashIndex + 1) + path;
                                    }
                                }
                            }
                            // remove .. / .  as part of the resolution process
                            target.path = normalize(path);
                        }
                    }
                } else if (o == 'query') {
                    if (override || relativeUri['query'].toString()) {
                        target.query = relativeUri['query'].clone();
                        override = 1;
                    }
                } else if (override || relativeUri[o]) {
                    target[o] = relativeUri[o];
                    override = 1;
                }
            });

            return target;

        },

        /**
         * Get scheme part
         */
        getScheme: function () {
            return this.scheme;
        },

        /**
         * Set scheme part
         * @param {String} scheme
         * @chainable
         */
        setScheme: function (scheme) {
            this.scheme = scheme;
            return this;
        },

        /**
         * Return hostname
         * @return {String}
         */
        getHostname: function () {
            return this.hostname;
        },

        /**
         * Set hostname
         * @param {String} hostname
         * @chainable
         */
        setHostname: function (hostname) {
            this.hostname = hostname;
            return this;
        },

        /**
         * Set user info
         * @param {String} userInfo
         * @chainable
         */
        'setUserInfo': function (userInfo) {
            this.userInfo = userInfo;
            return this;
        },

        /**
         * Get user info
         * @return {String}
         */
        getUserInfo: function () {
            return this.userInfo;
        },

        /**
         * Set port
         * @param {String} port
         * @chainable
         */
        'setPort': function (port) {
            this.port = port;
            return this;
        },

        /**
         * Get port
         * @return {String}
         */
        'getPort': function () {
            return this.port;
        },

        /**
         * Set path
         * @param {string} path
         * @chainable
         */
        setPath: function (path) {
            this.path = path;
            return this;
        },

        /**
         * Get path
         * @return {String}
         */
        getPath: function () {
            return this.path;
        },

        /**
         * Set query
         * @param {String|KISSY.Uri.Query} query
         * @chainable
         */
        'setQuery': function (query) {
            if (typeof query == 'string') {
                if (startsWith(query, '?')) {
                    query = query.slice(1);
                }
                query = new Query(encodeSpecialChars(query, reDisallowedInQuery));
            }
            this.query = query;
            return this;
        },

        /**
         * Get query
         * @return {KISSY.Uri.Query}
         */
        getQuery: function () {
            return this.query;
        },

        /**
         * Get fragment
         * @return {String}
         */
        getFragment: function () {
            return this.fragment;
        },

        /**
         * Set fragment
         * @param {String} fragment
         * @chainable
         */
        'setFragment': function (fragment) {
            var self = this;
            if (startsWith(fragment, '#')) {
                fragment = fragment.slice(1);
            }
            self.fragment = fragment;
            return self;
        },

        /**
         * Judge whether two uri has same domain.
         * @param {KISSY.Uri} other
         * @return {Boolean}
         */
        isSameOriginAs: function (other) {
            var self = this;
            // port and hostname has to be same
            return equalsIgnoreCase(self.hostname, other['hostname']) &&
                equalsIgnoreCase(self.scheme, other['scheme']) &&
                equalsIgnoreCase(self.port, other['port']);
        },

        /**
         * Serialize to string.
         * See rfc 5.3 Component Recomposition.
         * But kissy does not differentiate between undefined and empty.
         * @param {Boolean} [serializeArray=true]
         * whether append [] to key name when value 's type is array
         * @return {String}
         */
        toString: function (serializeArray) {

            var out = [],
                self = this,
                scheme,
                hostname,
                path,
                port,
                fragment,
                query,
                userInfo;

            if (scheme = self.scheme) {
                out.push(encodeSpecialChars(scheme, reDisallowedInSchemeOrUserInfo));
                out.push(':');
            }

            if (hostname = self.hostname) {
                out.push('//');
                if (userInfo = self.userInfo) {
                    out.push(encodeSpecialChars(userInfo, reDisallowedInSchemeOrUserInfo));
                    out.push('@');
                }

                out.push(encodeURIComponent(hostname));

                port = self.port;
                if (port) {
                    out.push(':');
                    out.push(port);
                }
            }

            path = self.path;
            if (path) {
                if (hostname && !startsWith(path, '/')) {
                    path = '/' + path;
                }
                path = normalize(path);
                out.push(encodeSpecialChars(path, reDisallowedInPathName));
            }

            query = ( self.query.toString.call(self.query, serializeArray));
            if (query) {
                out.push('?');
                out.push(query);
            }

            fragment = self.fragment;
            if (fragment) {
                out.push('#');
                out.push(encodeSpecialChars(fragment, reDisallowedInFragment));
            }

            return out.join('');
        }
    };

    Uri.Query = Query;

    Uri.getComponents = function (url) {
        url = url || "";
        var m = url.match(URI_SPLIT_REG) || [],
            ret = {};

        eachRegInfo(function (index, key) {
            ret[key] = m[index];
        });
        return ret;
    };

    // add Uri module to KISSY hoster
    S.Uri = Uri;

	return Uri;
});
/*
 Refer
 - application/x-www-form-urlencoded
 - http://www.ietf.org/rfc/rfc3986.txt
 - http://en.wikipedia.org/wiki/URI_scheme
 - http://unixpapa.com/js/querystring.html
 - http://code.stephenmorley.org/javascript/parsing-query-strings-for-get-data/
 - same origin: http://tools.ietf.org/html/rfc6454
 */


/*
combined files : 

m/form

*/
// alias from zepto.form
// TODO：补充测试用例
KISSY.add('m/form',function(S) {
	var $ = S.one;
	function serializeArray() {
		var result = [],
		el
		$([].slice.call(this)).each(function() {
			el = $(this);
			var type = el.attr('type');
			if (this.nodeName.toLowerCase() != 'fieldset' && ! this.disabled && type != 'submit' && type != 'reset' && type != 'button' && ((type != 'radio' && type != 'checkbox') || this.checked)) result.push({
				name: el.attr('name'),
				value: el.val()
			});
		});
		return result;
	}

	function serialize() {
		var result = [];
		this.serializeArray().each(function(elm) {
			result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
		});
		return result.join('&');
	}

	function submit(callback) {
		if (callback) this.on('submit', callback)
		else if (this.length) {
			var event = $.Event('submit');
			this.submit();
		}
		return this;
	}

	S.mix(S.node, {
		submit:submit,
		serializeArray:serializeArray,
		serialize:serialize
	});
});



/*
combined files : 

m/juicer

*/
/*
    ********** Juicer **********
    ${A Fast template engine}
    Project Home: http://juicer.name

    Author: Guokai
    Gtalk: badkaikai@gmail.com
    Blog: http://benben.cc
    Licence: MIT License
    Version: 0.6.5-stable
*/

KISSY.add('m/juicer',function(S) {

    // This is the main function for not only compiling but also rendering.
    // there's at least two parameters need to be provided, one is the tpl, 
    // another is the data, the tpl can either be a string, or an id like #id.
    // if only tpl was given, it'll return the compiled reusable function.
    // if tpl and data were given at the same time, it'll return the rendered 
    // result immediately.

    var juicer = function() {
        var args = [].slice.call(arguments);

        args.push(juicer.options);

        if(args[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)) {
            args[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm, function($, $id) {
                var _document = document;
                var elem = _document && _document.getElementById($id);
                args[0] = elem ? (elem.value || elem.innerHTML) : $;
            });
        }
        
        if(arguments.length == 1) {
            return juicer.compile.apply(juicer, args);
        }
        
        if(arguments.length >= 2) {
            return juicer.to_html.apply(juicer, args);
        }
    };

    var __escapehtml = {
        escapehash: {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2f;'
        },
        escapereplace: function(k) {
            return __escapehtml.escapehash[k];
        },
        escaping: function(str) {
            return typeof(str) !== 'string' ? str : str.replace(/[&<>"]/igm, this.escapereplace);
        },
        detection: function(data) {
            return typeof(data) === 'undefined' ? '' : data;
        }
    };
    
    var __throw = function(error) {
        if(typeof(console) !== 'undefined') {
            if(console.warn) {
                console.warn(error);
                return;
            }

            if(console.log) {
                console.log(error);
                return;
            }
        }
        
        throw(error);
    };

    var __creator = function(o, proto) {
        o = o !== Object(o) ? {} : o;

        if(o.__proto__) {
            o.__proto__ = proto;
            return o;
        }

        var empty = function() {};
        var n = Object.create ? 
            Object.create(proto) : 
            new(empty.prototype = proto, empty);

        for(var i in o) {
            if(o.hasOwnProperty(i)) {
                n[i] = o[i];
            }
        }

        return n;
    };

    juicer.__cache = {};
    juicer.version = '0.6.5-stable';
    juicer.settings = {};

    juicer.tags = {
        operationOpen: '{@',
        operationClose: '}',
        interpolateOpen: '\\${',
        interpolateClose: '}',
        noneencodeOpen: '\\$\\${',
        noneencodeClose: '}',
        commentOpen: '\\{#',
        commentClose: '\\}'
    };

    juicer.options = {
        cache: true,
        strip: true,
        errorhandling: true,
        detection: true,
        _method: __creator({
            __escapehtml: __escapehtml,
            __throw: __throw,
            __juicer: juicer
        }, {})
    };

    juicer.tagInit = function() {
        var forstart = juicer.tags.operationOpen + 'each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?' + juicer.tags.operationClose;
        var forend = juicer.tags.operationOpen + '\\/each' + juicer.tags.operationClose;
        var ifstart = juicer.tags.operationOpen + 'if\\s*([^}]*?)' + juicer.tags.operationClose;
        var ifend = juicer.tags.operationOpen + '\\/if' + juicer.tags.operationClose;
        var elsestart = juicer.tags.operationOpen + 'else' + juicer.tags.operationClose;
        var elseifstart = juicer.tags.operationOpen + 'else if\\s*([^}]*?)' + juicer.tags.operationClose;
        var interpolate = juicer.tags.interpolateOpen + '([\\s\\S]+?)' + juicer.tags.interpolateClose;
        var noneencode = juicer.tags.noneencodeOpen + '([\\s\\S]+?)' + juicer.tags.noneencodeClose;
        var inlinecomment = juicer.tags.commentOpen + '[^}]*?' + juicer.tags.commentClose;
        var rangestart = juicer.tags.operationOpen + 'each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)' + juicer.tags.operationClose;
        var include = juicer.tags.operationOpen + 'include\\s*([^}]*?)\\s*,\\s*([^}]*?)' + juicer.tags.operationClose;

        juicer.settings.forstart = new RegExp(forstart, 'igm');
        juicer.settings.forend = new RegExp(forend, 'igm');
        juicer.settings.ifstart = new RegExp(ifstart, 'igm');
        juicer.settings.ifend = new RegExp(ifend, 'igm');
        juicer.settings.elsestart = new RegExp(elsestart, 'igm');
        juicer.settings.elseifstart = new RegExp(elseifstart, 'igm');
        juicer.settings.interpolate = new RegExp(interpolate, 'igm');
        juicer.settings.noneencode = new RegExp(noneencode, 'igm');
        juicer.settings.inlinecomment = new RegExp(inlinecomment, 'igm');
        juicer.settings.rangestart = new RegExp(rangestart, 'igm');
        juicer.settings.include = new RegExp(include, 'igm');
    };

    juicer.tagInit();

    // Using this method to set the options by given conf-name and conf-value,
    // you can also provide more than one key-value pair wrapped by an object.
    // this interface also used to custom the template tag delimater, for this
    // situation, the conf-name must begin with tag::, for example: juicer.set
    // ('tag::operationOpen', '{@').

    juicer.set = function(conf, value) {
        var that = this;

        var escapePattern = function(v) {
            return v.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm, function($) {
                return '\\' + $;
            });
        };

        var set = function(conf, value) {
            var tag = conf.match(/^tag::(.*)$/i);

            if(tag) {
                that.tags[tag[1]] = escapePattern(value);
                that.tagInit();
                return;
            }

            that.options[conf] = value;
        };

        if(arguments.length === 2) {
            set(conf, value);
            return;
        }
        
        if(conf === Object(conf)) {
            for(var i in conf) {
                if(conf.hasOwnProperty(i)) {
                    set(i, conf[i]);
                }
            }
        }
    };

    // Before you're using custom functions in your template like ${name | fnName},
    // you need to register this fn by juicer.register('fnName', fn).

    juicer.register = function(fname, fn) {
        var _method = this.options._method;

        if(_method.hasOwnProperty(fname)) {
            return false;
        }

        return _method[fname] = fn;
    };

    // remove the registered function in the memory by the provided function name.
    // for example: juicer.unregister('fnName').

    juicer.unregister = function(fname) {
        var _method = this.options._method;

        if(_method.hasOwnProperty(fname)) {
            return delete _method[fname];
        }
    };

    juicer.template = function(options) {
        var that = this;

        this.options = options;

        this.__interpolate = function(_name, _escape, options) {
            var _define = _name.split('|'), _fn = _define[0] || '', _cluster;

            if(_define.length > 1) {
                _name = _define.shift();
                _cluster = _define.shift().split(',');
                _fn = '_method.' + _cluster.shift() + '.call({}, ' + [_name].concat(_cluster) + ')';
            }

            return '<%= ' + (_escape ? '_method.__escapehtml.escaping' : '') + '(' +
                        (!options || options.detection !== false ? '_method.__escapehtml.detection' : '') + '(' +
                            _fn +
                        ')' +
                    ')' +
                ' %>';
        };

        this.__removeShell = function(tpl, options) {
            var _counter = 0;
            
            tpl = tpl
                // for expression
                .replace(juicer.settings.forstart, function($, _name, alias, key) {
                    var alias = alias || 'value', key = key && key.substr(1);
                    var _iterate = 'i' + _counter++;
                    return '<% ~function() {' +
                                'for(var ' + _iterate + ' in ' + _name + ') {' +
                                    'if(' + _name + '.hasOwnProperty(' + _iterate + ')) {' +
                                        'var ' + alias + '=' + _name + '[' + _iterate + '];' +
                                        (key ? ('var ' + key + '=' + _iterate + ';') : '') +
                            ' %>';
                })
                .replace(juicer.settings.forend, '<% }}}(); %>')

                // if expression
                .replace(juicer.settings.ifstart, function($, condition) {
                    return '<% if(' + condition + ') { %>';
                })
                .replace(juicer.settings.ifend, '<% } %>')

                // else expression
                .replace(juicer.settings.elsestart, function($) {
                    return '<% } else { %>';
                })

                // else if expression
                .replace(juicer.settings.elseifstart, function($, condition) {
                    return '<% } else if(' + condition + ') { %>';
                })

                // interpolate without escape
                .replace(juicer.settings.noneencode, function($, _name) {
                    return that.__interpolate(_name, false, options);
                })

                // interpolate with escape
                .replace(juicer.settings.interpolate, function($, _name) {
                    return that.__interpolate(_name, true, options);
                })

                // clean up comments
                .replace(juicer.settings.inlinecomment, '')

                // range expression
                .replace(juicer.settings.rangestart, function($, _name, start, end) {
                    var _iterate = 'j' + _counter++;
                    return '<% ~function() {' +
                                'for(var ' + _iterate + '=' + start + ';' + _iterate + '<' + end + ';' + _iterate + '++) {{' +
                                    'var ' + _name + '=' + _iterate + ';' +
                            ' %>';
                })

                // include sub-template
                .replace(juicer.settings.include, function($, tpl, data) {
                    return '<%= _method.__juicer(' + tpl + ', ' + data + '); %>';
                });

            // exception handling
            if(!options || options.errorhandling !== false) {
                tpl = '<% try { %>' + tpl;
                tpl += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';
            }

            return tpl;
        };

        this.__toNative = function(tpl, options) {
            return this.__convert(tpl, !options || options.strip);
        };

        this.__lexicalAnalyze = function(tpl) {
            var buffer = [];
            var method = [];
            var prefix = '';
            var reserved = [
                'if', 'each', '_', '_method', 'console', 
                'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do', 
                'finally', 'for', 'function', 'in', 'instanceof', 'new', 'return', 'switch', 
                'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'null', 'typeof', 
                'class', 'enum', 'export', 'extends', 'import', 'super', 'implements', 'interface', 
                'let', 'package', 'private', 'protected', 'public', 'static', 'yield', 'const', 'arguments', 
                'true', 'false', 'undefined', 'NaN'
            ];

            var indexOf = function(array, item) {
                if (Array.prototype.indexOf && array.indexOf === Array.prototype.indexOf) {
                    return array.indexOf(item);
                }
                
                for(var i=0; i < array.length; i++) {
                    if(array[i] === item) return i;
                }
                
                return -1;
            };

            var variableAnalyze = function($, statement) {
                statement = statement.match(/\w+/igm)[0];
                
                if(indexOf(buffer, statement) === -1 && indexOf(reserved, statement) === -1 && indexOf(method, statement) === -1) {
                    
                    // avoid re-declare native function, if not do this, template 
                    // `{@if encodeURIComponent(name)}` could be throw undefined.
                    
                    if(typeof(window) !== 'undefined' && typeof(window[statement]) === 'function' && window[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
                        return $;
                    }

                    // compatible for node.js
                    if(typeof(global) !== 'undefined' && typeof(global[statement]) === 'function' && global[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
                        return $;
                    }

                    // avoid re-declare registered function, if not do this, template 
                    // `{@if registered_func(name)}` could be throw undefined.

                    if(typeof(juicer.options._method[statement]) === 'function' || juicer.options._method.hasOwnProperty(statement)) {
                        method.push(statement);
                        return $;
                    }

                    buffer.push(statement); // fuck ie
                }

                return $;
            };

            tpl.replace(juicer.settings.forstart, variableAnalyze).
                replace(juicer.settings.interpolate, variableAnalyze).
                replace(juicer.settings.ifstart, variableAnalyze).
                replace(juicer.settings.elseifstart, variableAnalyze).
                replace(juicer.settings.include, variableAnalyze).
                replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/igm, variableAnalyze);

            for(var i = 0;i < buffer.length; i++) {
                prefix += 'var ' + buffer[i] + '=_.' + buffer[i] + ';';
            }

            for(var i = 0;i < method.length; i++) {
                prefix += 'var ' + method[i] + '=_method.' + method[i] + ';';
            }

            return '<% ' + prefix + ' %>';
        };
        
        this.__convert=function(tpl, strip) {
            var buffer = [].join('');

            buffer += "'use strict';"; // use strict mode
            buffer += "var _=_||{};";
            buffer += "var _out='';_out+='";

            if(strip !== false) {
                buffer += tpl
                    .replace(/\\/g, "\\\\")
                    .replace(/[\r\t\n]/g, " ")
                    .replace(/'(?=[^%]*%>)/g, "\t")
                    .split("'").join("\\'")
                    .split("\t").join("'")
                    .replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='")
                    .split("<%").join("';")
                    .split("%>").join("_out+='")+
                    "';return _out;";

                return buffer;
            }

            buffer += tpl
                    .replace(/\\/g, "\\\\")
                    .replace(/[\r]/g, "\\r")
                    .replace(/[\t]/g, "\\t")
                    .replace(/[\n]/g, "\\n")
                    .replace(/'(?=[^%]*%>)/g, "\t")
                    .split("'").join("\\'")
                    .split("\t").join("'")
                    .replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='")
                    .split("<%").join("';")
                    .split("%>").join("_out+='")+
                    "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";
                    
            return buffer;
        };

        this.parse = function(tpl, options) {
            var _that = this;

            if(!options || options.loose !== false) {
                tpl = this.__lexicalAnalyze(tpl) + tpl;
            }
            
            tpl = this.__removeShell(tpl, options);
            tpl = this.__toNative(tpl, options);

            this._render = new Function('_, _method', tpl);

            this.render = function(_, _method) {
                if(!_method || _method !== that.options._method) {
                    _method = __creator(_method, that.options._method);
                }

                return _that._render.call(this, _, _method);
            };

            return this;
        };
    };

    juicer.compile = function(tpl, options) {
        if(!options || options !== this.options) {
            options = __creator(options, this.options);
        }

        try {
            var engine = this.__cache[tpl] ? 
                this.__cache[tpl] : 
                new this.template(this.options).parse(tpl, options);
            
            if(!options || options.cache !== false) {
                this.__cache[tpl] = engine;
            }
            
            return engine;

        } catch(e) {
            __throw('Juicer Compile Exception: ' + e.message);
            
            return {
                render: function() {} // noop
            };
        }
    };

    juicer.to_html = function(tpl, data, options) {
        if(!options || options !== this.options) {
            options = __creator(options, this.options);
        }

        return this.compile(tpl, options).render(data, options._method);
    };

	return juicer;
});

;/**
 * Created by menglimeng on 14-10-31.
 */
KISSY.config({
	modules:{
		'q':{
			alias:['q/index']
		},
		'bridge':{
			alias:['bridge/index']
		},
		'jsbridge':{
			alias:['jsbridge/index']
		},
		'mtop':{
			alias:['mtop/index']
		},
		'tms-offline-parser':{
			alias:['tms-offline-parser/index']
		},
		'angular':{
			alias:['angular/index']
		},
		'ui.router':{
			alias:['angular-ui-router/index']
		},
		'tracker':{
			alias:['tracker/index']
		}
	}
});;//pointman 2.0.0
(function(global, undefined) {
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
        return function(obj) {
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
            (name === 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name]);
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
    pointman.on = function(name, callback) {
        var list = events[name] || (events[name] = []);
        list.push(callback);
        return pointman;
    };

    // Remove event. If `callback` is undefined, remove all callbacks for the
    // event. If `event` and `callback` are both undefined, remove all callbacks
    // for all events
    pointman.off = function(name, callback) {
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

        return (path.substring(last - 2) === '.js' ||
            path.indexOf('?') > 0 ||
            lastC === '/') ? path : path + '.js';
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
            id = id.replace(VARS_RE, function(m, key) {
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

                ret = isFunction(rule) ?
                    (rule(uri) || uri) :
                    uri.replace(rule[0], rule[1]);

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
    var cwd = (!location.href || location.href.indexOf('about:') === 0) ? '' : dirname(location.href);
    var scripts = doc.scripts;

    // Recommend to add `pointmannode` id for the `sea.js` script element
    var loaderScript = doc.getElementById('pointmannode') ||
        scripts[scripts.length - 1];

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
        baseElement ?
            head.insertBefore(node, baseElement) :
            head.appendChild(node);

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
            node.onerror = function() {
                onload();
            };
        } else {
            node.onreadystatechange = function() {
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

        code.replace(SLASH_RE, '')
            .replace(REQUIRE_RE, function(m, m1, m2) {
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
    Module.prototype.resolve = function() {
        var mod = this;
        var ids = mod.dependencies;
        var uris = [];

        for (var i = 0, len = ids.length; i < len; i++) {
            uris[i] = Module.resolve(ids[i], mod.uri);
        }
        return uris;
    };

    // Load module.dependencies and fire onload when all done
    Module.prototype.load = function() {
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
    Module.prototype.onload = function() {
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
    Module.prototype.fetch = function(requestCache) {
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
            requestCache ?
                requestCache[emitData.requestUri] = sendRequest :
                sendRequest();
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
            var m, mods = callbackList[requestUri];
            delete callbackList[requestUri];
            while ((m = mods.shift())) {
                m.load();
            }
        }
    };

    // Execute a module
    Module.prototype.exec = function() {
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

        require.resolve = function(id) {
            return Module.resolve(id, uri);
        };

        require.async = function(ids, callback) {
            Module.use(ids, callback, uri + '_async_' + cid());
            return require;
        };

        // Exec factory
        var factory = mod.factory;

        var exports = isFunction(factory) ?
            factory(require, mod.exports = {}, mod) :
            factory;

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
    Module.resolve = function(id, refUri) {
        // Emit `resolve` event for plugins such as text plugin
        var emitData = {
            id: id,
            refUri: refUri
        };
        return emitData.uri || pointman.resolve(emitData.id, refUri);
    };

    // Define a module
    Module.define = function(id, deps, factory) {
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
    Module.save = function(uri, meta) {
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
    Module.get = function(uri, deps) {
        return cachedMods[uri] || (cachedMods[uri] = new Module(uri, deps));
    };

    // Use function is equal to load a anonymous module
    Module.use = function(ids, callback, uri) {
        var mod = Module.get(uri, isArray(ids) ? ids : [ids]);

        mod.callback = function() {
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

    pointman.use = function(ids, callback) {
        Module.use(ids, callback, data.cwd + '_use_' + cid());
        return pointman;
    };

    Module.define.cmd = {};
    pointman.define = Module.define;

    // For Developers

    pointman.Module = Module;
    data.fetchedList = fetchedList;
    data.cid = cid;

    pointman.require = function(id) {
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

    pointman.config = function(configData) {
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
                window.addEventListener('load', function(ev) {
                    pointman.use(freeItem, function() {
                        autoInitMod(freeItem, arguments);
                    });
                }, false);
            } else {
                window.attachEvent('load', function(ev) {
                    pointman.use(freeItem, function() {
                        autoInitMod(freeItem, arguments);
                    });
                });
            }
        }
    };
})(this);

(function() {
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

pointman.define('mod/emit', function(require, exports, module) {
    'use strict';
    var emit = {};
    var events = {};

    // Bind event
    emit.on = function(name, callback) {
        var list = events[name] || (events[name] = []);
        list.push(callback);
        return emit;
    };

    // Remove event. If `callback` is undefined, remove all callbacks for the
    // event. If `event` and `callback` are both undefined, remove all callbacks
    // for all events
    emit.off = function(name, callback) {
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
    emit.fire = function(name, data) {
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

pointman.define('mod/messenger', function(require, exports, module) {
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
        postMessage: function(target, jsonStr) {
            var uid = ++IE.uid;
            var q = IE.q;
            var item = {
                name: (+new Date()) + '' + uid + '^' + document.domain + '&' + jsonStr,
                uid: uid,
                target: target
            };
            q.push(item);
            if (!IE.tm) {
                IE.tm = setInterval(function() {
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
        ListenerMessage: function(win, handler) {
            var lastName = '';
            var reName = /^(\d+?)\^(.+?)&(.*?)$/;

            function onNameChanged() {
                if(!win){
                    return false;
                }else{
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
        initListener: function(obj){
            //当前窗口
            currentWin = obj.currentWin;
            //消息来源窗口
            originWin = obj.originWin;
            //消息传递形式
            msgTransfer = obj.msgTransfer;

            if(currentWin && originWin && msgTransfer){
                //在当前窗口上监听postmessage事件
                if(currentWin.postMessage){
                    if (currentWin.addEventListener) {
                        currentWin.addEventListener('message', messageHandler, false);
                    } else if (currentWin.attachEvent) {
                        currentWin.attachEvent('onmessage', messageHandler);
                    }
                }else {
                    //始终确保在iframe上监听window.name变化
                    if(msgTransfer == 'fromFrame'){
                        //在父窗口中监听iframe发来的消息
                        IE.ListenerMessage(originWin, messageHandler);
                    }else{
                        //在iframe中监听父窗口发送的消息
                        IE.ListenerMessage(currentWin, messageHandler);
                    }
                }
            }
        },
        //注册消息
        register: function(event, callback) {
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
        send: function(obj) {
            //发给目标窗口的数据
            var postData = obj.type + msgSpliter + obj.content;

            if(currentWin && originWin && msgTransfer){
                if(originWin.postMessage){
                    /*
                     * initListener方法注册的是监听函数
                     * 而发送消息与监听消息刚好相反，所以这里需要往originWin发送消息
                     * 支持postmessage时往目标窗口发送消息
                     */
                    originWin.postMessage(postData, '*');
                }else{
                    //始终确保写iframe的window.name
                    if(msgTransfer == 'fromFrame'){
                        //在父窗口中监听iframe发来的消息
                        IE.postMessage(originWin, postData);
                    }else{
                        //在iframe中监听父窗口发送的消息
                        IE.postMessage(currentWin, postData, '*');
                    }
                }
            }
        }
    };
});

pointman.define('mod/sufei-kissymini-mtop', function(require, exports, module) {
    'use strict';
    var emit = require('mod/emit');
    var $ = null;

    function isType(type) {
        return function(obj) {
            return {}.toString.call(obj) == '[object ' + type + ']';
        };
    }
    var isObject = isType('Object');
    var isString = isType('String');

    var sufeiMtop = function() {
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
        init: function(){
            var self = this;

            //事件：验证通过后重发送请求（mtop中重新发送请求由mtop来处理）
            emit.on('event:resendRequest@sufei', function(data){
                // KISSY.one(document).fire('sufei:validateDone', [data]);
                dispatchEvent(document, 'sufei:validateDone', [data]);
            });

            //监听消息
            document.addEventListener('sufei:validateData', function(data){
            // KISSY.one(document).on('sufei:validateData', function(data){
                var result = data[0];
                if(result && isObject(result) && (typeof result.ret !== 'undefined') && result.ret.join('') == 'RGV587_ERROR::SM'){
                    emit.fire('event:showDialog@sufei', result.data.url);
                }else{
                    //不需要校验
                    // KISSY.one(document).fire('sufei:noNeedToValidate', data);
                    dispatchEvent(document, 'sufei:noNeedToValidate', data);
                }
            });
        }
    };

    module.exports = sufeiMtop;
});

pointman.define('sufei', function(require, exports, module) {
    'use strict';
    //var SubMod = require('mod/sufei-seajs-jquery');
    var SubMod = require('mod/sufei-kissymini-mtop');
    var messenger = require('mod/messenger');
    //消息模块是否初始化
    var messengerHasInit = false;
    var emit = require('mod/emit');
    var doc = document;
    var head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;

    var Sufei = function() {
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
        init: function() {
            var self = this;
            var configData = module.config;

            self.config.app = configData.app || '';
            self.config.version = configData.version || '';
            self.config.sufeiStyle = configData.style || '';

            //事件：显示验证对话框
            emit.on('event:showDialog@sufei', function(url) {
                if(!self.cache.dialog){
                    url += (/\?/.test(url)) ? '&' : '?';
                    if(/tpl_redirect_url=http(s)?\:\/\/sec\.(([\w\d])*?\.)?taobao\.com\/query\.htm/.test(decodeURIComponent(url))){
                        url = url.replace('query.htm%3F', 'query.htm%3Fsufeiversion%3D' + self.config.version + '%26app%3D' + self.config.app +'%26');
                    }else{
                        url += 'sufeiversion=' + self.config.version + '&app=' + self.config.app;
                    }
                    //TODO 解决css版本问题
                    self.loadCss(self.config.sufeiStyle, function() {
                        self.createDialog(url);
                    });
                }else{
                    self.changeDialogStates({state:'visible'});
                }
            });

            new SubMod().init();
        },

        //加载CSS
        loadCss: function(url, callback) {
            var node = doc.createElement('link');
            node.chaarset = 'utf-8';
            node.rel = 'stylesheet';
            node.href = url;

            if ('onload' in node) {
                node.onload = function() {
                    callback && callback();
                };
            } else {
                node.onreadystatechange = function() {
                    if (/loaded|complete/.test(node.readyState)) {
                        callback && callback();
                    }
                };
            }

            head.appendChild(node);
        },

        //是否是ie6、7
        isOldBrower: function() {
            var b = doc.createElement('b');
            b.innerHTML = '<!--[if lte IE 7]><i></i><![endif]-->';
            return b.getElementsByTagName('i').length === 1;
        },

        //创建dialog
        createDialog: function(url) {
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
            messenger.register('msg:validateSuccess@sufei', function(data) {
                //重新发送请求
                emit.fire('event:resendRequest@sufei', data);
                //隐藏dialog
                self.changeDialogStates({state: 'hidden'});
                //消息: 重置验证码
                messenger.send({
                    type: 'msg:resetCheckCode@sufei',
                    content: ''
                });
            });

            //绑定关闭事件
            if(closeElement.addEventListener){
                closeElement.addEventListener('click', function(){
                    self.changeDialogStates({state: 'hidden'});
                }, false);
            }else{
                closeElement.attachEvent('onclick', function(){
                    self.changeDialogStates({state: 'hidden'});
                    return false;
                });
            }

            self.cache.dialog = dialog;
        },

        /*
         * 改变dialog显示状态
         * @param {string} obj.state hidden|visible
         */
        changeDialogStates: function(obj){
            if(obj.state === 'hidden'){
                //清空拦截队列
                emit.fire('event:cleanHijackQueue@sufei', {});
                //隐藏dialog
                this.cache.dialog.style.display = 'none';
            }else{
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
        init: function(config){
            sufeiMod.init(config);
        }
    };
});

pointman.use('sufei', function(sufei){sufei.init()});;/*
combined files : 

../q/build/index

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("q", [], factory);
	else if(typeof exports === 'object')
		exports["q"] = factory();
	else
		root["q"] = factory();
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
	    version: ("0.1.0"),
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map
;/*
combined files : 

build/index

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bridge", [], factory);
	else if(typeof exports === 'object')
		exports["bridge"] = factory();
	else
		root["bridge"] = factory();
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

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	/**
	 * Created by Guokai @benbencc on 13/7/24.
	 * Updated by xiaoguan, hongshu
	 * @fileoverview 去啊 H5 容器桥组件
	 * @author 孝瓘<meng.limeng@alibaba-inc.com>
	 * @author 弘树<tiehang.lth@alibaba-inc.com>
	 */
	// ***面向`Android`和`IOS`的`Hybrid API`调用原理***
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
	 */
	
	/**
	 * `Bridge`是为 H5 和客户端交互通讯而产生的一个中间件，即一个 JavaScript 的 SDK ，负责处理 H5 和客户端的方法调用、通信及 H5 页面自身的降级处理（非内嵌在客户端的情况）。
	 *
	 * @class Bridge
	 * @version {@link 0.3.0}
	 *
	 * @example
	 * var bridge = new Bridge('ali_trip_webview_bridge');
	 */
	var Bridge = function Bridge() {
	  this.init.apply(this, arguments);
	};
	
	var ua = navigator.userAgent;
	Bridge.prototype = {
	
	  // 版本号
	  /**
	   * @memberof Bridge#
	   * @type {String}
	   * @desc 版本号
	   *
	   * @example
	   *
	   * var bridge = new Bridge();
	   * console.log(bridge.version); //0.3.0
	   */
	  version: ("0.3.0"),
	
	  //标记设备信息
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
	   */
	  device: {},
	  /**
	   * @typedef {Object} DeviceInfo
	   * @memberof Bridge#
	   * @property {String} type 类型（`"ios"`|`"android"`|`"undefined"`)
	   * @property {String} version 系统版本号
	   */
	
	  //标记客户端信息
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
	   */
	  client: {},
	  /**
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
	   */
	
	  //标记网络信息
	  /**
	   * @ignore
	   * @memberof Bridge#
	   * @type {Object}
	   * @desc 标记网络信息
	   */
	  connection: {},
	
	  // 桥初始化
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
	   */
	  init: function init(bridgeName) {
	    var that = this;
	
	    that.platform = 'h5';
	    that.bridgeName = bridgeName || 'ali_trip_webview_bridge';
	    that.bridge = window[that.bridgeName];
	
	    that.getDeviceInfo();
	    that.getPlatform();
	    that.messageQueueInit();
	    that.getClientInfo();
	    that.handShake.apply(this, arguments);
	
	    that.notification.superthat = that;
	    that.customShare.superthat = that;
	  },
	
	  // 判断WindVane容器环境
	  /**
	   * @memberof Bridge#
	   * @type {Boolean}
	   * @desc 是否在 WindVane 容器环境
	   */
	  isWindVane: /WindVane[\/\s]([\d\.\_]+)/i.test(ua) && window.WindVane && window.WindVane.isAvailable,
	
	  //判断手淘 API版本ios 5.0.1 安卓 5.1.3 以上
	  /**
	   * @memberof Bridge#
	   * @type {Boolean}
	   * @desc 是否在手淘客户端内
	   */
	  isInTBClient: (function () {
	    var match = ua.match(/TB[\s\/][\d\.]+/igm),
	        version = match ? parseInt(match[0].match(/[\d\.]+/igm)[0].split('.').join(''), 10) : 0;
	    if (window.WindVane) {
	      if (/Android/.test(ua)) {
	        return version >= 513;
	      }
	      return version >= 501;
	    }
	    return false;
	  })(),
	
	  // 去啊
	  /**
	   * @memberof Bridge#
	   * @type {Boolean}
	   * @desc 是否在去啊客户端内
	   */
	  isAlitrip: /AliTrip/i.test(ua),
	
	  // 钱包
	  /**
	   * @memberof Bridge#
	   * @type {Boolean}
	   * @desc 是否在钱包客户端内
	   */
	  isAlipay: /AlipayClient/i.test(ua),
	
	  // 手淘
	  /**
	   * @memberof Bridge#
	   * @type {Boolean}
	   * @desc 是否在手淘客户端内
	   */
	  isTaobao: /Aliapp\(TB/i.test(ua),
	
	  // 天猫
	  /**
	   * @memberof Bridge#
	   * @type {Boolean}
	   * @desc 是否在天猫客户端内
	   */
	  isTmall: /AliApp\(TM/i.test(ua),
	
	  // 旺信
	  /**
	   * @memberof Bridge#
	   * @type {Boolean}
	   * @desc 是否在旺信客户端内
	   */
	  isWX: /AliApp\(WX/i.test(ua),
	
	  // 来往
	  /**
	   * @memberof Bridge#
	   * @type {Boolean}
	   * @desc 是否在来往客户端内
	   */
	  isAlilaiwang: /AliApp\(LW/i.test(ua),
	
	  // UC
	  /**
	   * @memberof Bridge#
	   * @type {Boolean}
	   * @desc 是否在 UC 浏览器内
	   */
	  isUC: /UCBrowser/i.test(ua),
	
	  // 微博
	  /**
	   * @memberof Bridge#
	   * @type {Boolean}
	   * @desc 是否在微博客户端内
	   */
	  isAliweibo: /Weibo/i.test(ua),
	
	  // 消息队列初始化
	  // - 针对iOS的实现机制单独做的处理，iOS会主动轮询消息队列中的操作，并批量取回处理。
	  messageQueueInit: function messageQueueInit() {
	    var that = this;
	
	    if (that.platform === 'ios') {
	      //ios 轮询队列
	      window.messageQueue = window.messageQueue || [];
	
	      window.messageQueueFetch = window.messageQueueFetch || function () {
	        var response;
	        response = window.messageQueue.length ? JSON.stringify(window.messageQueue) : '';
	        window.messageQueue = [];
	
	        if (response) {
	          return response;
	        }
	      };
	    }
	  },
	
	  /**
	   * @callback Bridge~hideTitleSuccessCallback
	   * @desc 隐藏标题栏成功回调
	   */
	  /**
	   * @callback Bridge~hideTitleFailureCallback
	   * @desc 隐藏标题栏失败回调
	   */
	
	  // 握手协议
	  // - 用于页面同所属生存环境在首次初始化时进行基础信息交换。
	  handShake: function handShake(callback) {
	    var that = this;
	
	    var cb = function cb() {
	      callback && callback();
	    };
	
	    that.pushBack('bridge:', 'ready', {
	      data: {},
	      successCallback: cb,
	      callbackCommand: cb
	    });
	  },
	
	  // 获取设备信息：IOS/Android
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
	   */
	  getDeviceInfo: function _getDeviceInfo_() {
	    //设备类型
	    if (/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(ua)) {
	      // iOS: Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H321 AliApp(LX/5.8.1) AliTrip/5.8.1
	      this.device.type = 'ios';
	
	      // iOS 版本号提取
	      var iosVersion = /\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/.exec(ua);
	      if (iosVersion && iosVersion[0]) {
	        this.device.version = iosVersion[0].replace(/_/g, '.');
	      }
	    } else if (/Android/i.test(ua)) {
	      this.device.type = 'android';
	      var match = ua.match(/Android\s+([\d\.]+)/i);
	      this.device.version = match && match[1];
	    } else {
	      this.device.type = undefined;
	    }
	
	    return this.device;
	  },
	
	  /**
	   * @method
	   * @memberof Bridge#
	   * @desc 获取设备平台信息（`"android"|"iOS"`）
	   * @returns {String}
	   *
	   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#platform}
    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwbBiTBmZgKVQ4kdDqtGPNUgFK6HZ7TFyf2WqobG5GGWkyV72UrhFoL2jcfbu/cHwlTDcH4ZdBKKfnlFjEAcgXYXgBGYg4p0jEuCgm+CD5V2m3x7k5SWjpaAnYSYGaGepQ2np4+kkZB3dGmzoqyxarWTtbq6vnwXp52zdqPAwLnHzsWpzbaszr1tb4GzyMK0w9TYx8DZo9uf0djukNPdZOO7irLY4dXwhuKm8ungfvPM5eD8Oyd/mC9Ts4j1zASAv1kfL1SKE/VdGwNHQEBmI/bv8J0/G7c3HfM4oZAU4MWVFdHZMGO7Z0NRBNt5X4YBK0eTInTZQSdrJ0CRTnS58kU9S0VtKdLSATjhYcqQwU04j+kEJN18ZGtavWapY7V7VjUYT/kkbNWfJjWZE4x4paZxbrza0L6CpNC1InOKt1d2Jky/GDV3R33678mzKwNL1wn/aliVipUxHlKteL2fWeRLerIFr2KNbz3Dp4S3wu/Dhu5nX0oM1ESVQ06Idyw6ZcTDG2a7aHUKN+Pbt3bL7Ca0fmSbV4acGXtXDlbbE2Xeazy6iGrk75M8rNrVy/HX15PslnV9vtTmL6+LO/QzcGD3+Deofkja83ORnx4uO7HzP/cw7ff8HlxZ8krVmHnYAqTPbVLwK2lsd8J3ymn4PoFNdgckbJViFtDAJoAWchcojdd/VlSNaCJHZmW0y+SbVhf2N9yNqKWcXYnoaJaSYjjy3kF5RuYJm3lwlACnUVgm2Vt12Tpt20WlxKzndef/slyR5hF/YyIJJrPVljj0tByCVZEhKIpXRa/pTaW0OOQKaHaxrYHWZl5qVYmt+ppd0/zQBH44EaOVbajQ5NONydrzDpZ53IUecTn4qC1YyI8iXa5qL2NVrdoJBmqSZjJ255KGCPGgZqn3bKySZ/xGlwWqrujdqqqZuqGGaEoFZZqI8srNqniaQGZiiiuXJJa6/v/wGLppd0jilrfEF6eilaJT63Y62ZnpndtF3GqayZRVInLGO6WmkhZISGh+1g6HK6kV/rdguvt5VSm6ahlho5WqiHORmsD+5iSBrA6U41cLr/fhkwmJHaC5tsCa8gJMRdivflkelh6m5uEvf7Y8TvEdwptO9yW21T45J8LrcowyoyxnsqvPJ9+6oFrs0gzyqvtPTmTN+w/Vbsc8rtoufkxLppzG69Xr6E89ANMT3isU8HFbW5bl5bdbmucq00vlf/LJHXtvJ6sMHcWb1qoOPWJ3Ozcc4dbZ4Zi220jkMVHLR38948L18dg8izmJLSm6LF+vKYY4cCcbwZ5FpnujFR5S8SPXjJxj7s9NI7Mxz4VKKPTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577rQXAAA7)
	   */
	  getPlatform: function getPlatform() {
	    var match = ua.match(/AliTrip[\s\/][\d\.]+/igm);
	    if (match) {
	      if (this.device.type) {
	        this.platform = this.device.type;
	      }
	      this.client.version = parseInt(match[0].match(/[\d\.]+/igm)[0].split('.').join(''), 10);
	      this.client.versionStr = match[0].match(/[\d\.]+/igm)[0];
	    }
	
	    return this.platform;
	  },
	
	  //获取客户端信息：Alitrip
	  /**
	   * @method
	   * @memberof Bridge#
	   * @desc 获取去啊客户端信息
	   *  - 桥协议: `bridge://client_info?params={"success_callback":"xxxxx"}`
	   * @param {Bridge~getClientInfoCallback} callback 回调函数
	   *
	   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#clientInfo}
    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwNBiTgaVTMYQ6p1EQ9YosZqnbK0D6TXinofFTqUVz1V4w2EwsCyfVZnpRdz+YW/rc+hdRxycWqOdAaBcmaNiRtxeY2MfwiHc3ybjoMXim+HZZGKeGyblYylS5cXpXSUbJGhlrKtsFq+koi9qoKMlGOwrsGewq/LEqWtyL0BbcUFqLnKpx/Ox7a7lW7PzLays3u0QKik0svcxdvqua6x2K+b4ODl1tzB69Sw8/jd5pjkHNTdw1fxXopbsWz89ALBISGVT3CuE+idg+hWs47iHFQ/+bIFYMRQyCQ34b3QGCc0/eMJICBaL0+O+lxpYrVSazB+ebTJo3bc6suRNHSJPnkFkkCOSox1bj5sFMqpQiU6Mgm8o45rTkx24+7enDehJaVgtge4ptBvQpWa/WkB7S1TXlW6scpk7Vtw3lV3ztRNjla1Pky70L5Y74WxhvxJxotVlT7FdmwJqEXTLkqkLyZLONNTLDnEJzYMqdSX5WFjObQoBa894t3ZrC59U41boGXPnk0EysM4wc7bhup7FVqW61fJFrPt0Zh7dV+1q5Lbgkdlt3fjxt8oPV2WYnh5soYshuL5TluDh8UcLL1x/2jh58YvGA20PumPJgdMbBz4L/XgGXfurxZ06AtjEHjoDzSbfdUtMdKJxhiNCVV1TlfafTZhatVdhuCp1AHSTGCdYhdh+ygFiBD5Y4xlzJZVYfXQayOJt2F+IX1W0JxtgifS++J6GL7YXY034rZggccuyx9JiP5+ESpJObEflkkfBBqWBWBEJYoXbdZTNjUP0VZBqXsl0W5mCNcagkkPelt6CLOT4nlZkkvilffDwRx2CX9SQpYnRyFtdbRCDyiOeSC3rYJICIrmlocULKSKGbkkL63W98bmgClepZyCORubn350+kgkpjX6MmeqaEghLaHJifwgZjlFbGpamXNtqZ2pDeFUpqWcAeaquwtS3667Ff/6IG552Xjhmshgje2Kif/iFl6rKV5ikip9DyRO2J/zHLYI3y8afnRNduKxqJYqbrW7IjwtrjhJJZWwO28mbZbFL67gjwjDpC9e+6ss77H7FiKqOiao3a16lm/sFrrqexlapmwkSh6i3EJVxobH4ONohwlThiBLDBDQscqcZ/isuyy3wyfOXLdI5qKmvtYnpyn7SSxlm5EvMM5cwDMnmraB73zB2d5vppso/fGB2wGTDXPKjNPidtNcpt2svq1SSDi13M41Vr6dY5l30kbFFr3XTQ14kMXMxfiqvlikY6DG243XpNb5rI8t3w1IAXdRrbVRtX+LRdB6f00Sm3rK1ebjAPHe3kGDpeb4oZk10yr1CNTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577rqzXgAAOw==)
	   */
	  getClientInfo: function getClientInfo(callback) {
	    var that = this;
	
	    if (that.platform === 'h5') {
	      callback && callback({ platform: 'h5' });
	      return;
	    }
	
	    var _callback = function _callback(client_info) {
	      client_info = typeof client_info === 'string' ? JSON.parse(client_info || '{}') : client_info || {};
	
	      //ttid,utdid, push_token, device_id, client_version, client_type
	      extend(that.client, client_info);
	
	      callback && callback(that.client);
	    };
	
	    that.pushBack('bridge:', 'client_info', {
	      successCallback: _callback
	    });
	  },
	  /**
	   * @callback Bridge~getClientInfoCallback
	   * @param clientInfo {ClientInfo} 客户端信息
	   * @see [ClientInfo]{@link Bridge#ClientInfo}
	   * @desc 获取客户端信息回调
	   */
	
	  // 获取用户信息
	  // - @param {fn} callback 入参为object:{userName:'*', userId:'*'}
	  /**
	   * @method
	   * @memberof Bridge#
	   * @desc 获取用户信息
	   * @param {Bridge~getUserInfoCallback} callback 回调函数
	   *
	   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#user_info}
    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFgTBaRyqHCaYAimlRhqEplYona5tMaBU+3ySv5GD4DusrvOu1Wiz1SSB2OD6DHb/08L3XnILhByCAYKLanxZiQ2Ge4EIkx6fjnB6m4ZJnZ14j5aXdZqFmWZ/GYSvbpddqhyuVKAcu2xdomS9q5VzlYCot1awoKAlwamptGy4n4u0n8YdyJDB3n7Kl8KU2tW/tIHcn7XOvmfVx8/Z2M2Tzc0G4+jb77rC45nh3riw3dWv2a7tw/Pu0WHdIWUF60UQcVhsPHBxXDe/y6SbD3UF+5Cv+9uGnoCEigtYrr3k3cuFCOQIwrWzpUefICTJfCaoZ8CdNMzps2+9G8qTKHwVkQlwGZMBRp0WtHiWrkuJQeyRgZ4/lDKS5LvqslZU6UxjViPqsJh4JUOhUsLorkttZbxUlnsIa9/NX9yQ4iHbgU7w7z2zPsXlt0Y+bVB5in26kWB3oUexgeUJFxu2awh9KkVMk+EX+lnPJx4sgIcWKu7HgeZ6Oi8baNkBTg086vW+McifYs1NkseX++zcxw7RF236ZNSPYvU9Qkins+vrnsWtaWdWU9Ddn5GWGcm4M2u5xg6diddcsGF3X44ZFVx7LADl4q7uCzuQs/77789LU90bv/q/5ReGpFxw9846VnglEDxoNVaew5mMJqxs1E2HqFMZYghBaSRqFy9eXXgoTPdViFeiZG6FJvBha4n4eZZWhait8dOKJxL5agoowK+XedjcyhCBxt9D023z7keRfkithp5teRxOGlJGhMGiaYatLVGOOOk2kpJI4Tlpifghpm1SCGHPSo1YZisiifLEviN1BB4SWn3X0rrFhkfEGBWAOeQ/LJ4Vwb2hDfiQGyiaZ65oniW5vzPOhooVayaehlNK7ZHZya5faboj52uehFVNpJHnVqQmnnboxyCp2nzwWWKpySiodlRr0VqYKpctb6261/3jmnmy2W+umuuc7oIqA5/74q6oehCZvsoIpxSOSvSPJYLIL6MQubXoeG5RydX5LY6aR6ZquGuOk2JBd/i9lXIbnEmhkijcndaFulMhi7WKaQlRkqkHmC+e+P2Xl75kz9vYuar9tWa+lOXTLYMKqRxsrqdtNSfHCSAmLcLFpTNrqrv68FvGrIF/JLq8lhgtwtveuAG9WsA8ssEYHwbgrozRqnlrDOW/IsbV9Xkvmk0A+z2/OvewLdWLjWGgzxzfUqzTK+ANJa9aMMx4lwe0696SXWvWo78rIoU4LczO5C/fU277UNNM1mSk3t3DiLqK7PBF8tcsUEnjs4wiecxXe/NR8Nc9BPOwl24Wnmay5fkC+L+DTlKT1uOLTq2kx1U6KPTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577rEXAAA7)
	   */
	  getUserInfo: function getUserInfo(callback) {
	    this.pushBack('bridge:', 'user_info', {
	      successCallback: function successCallback(obj) {
	        callback(obj);
	      }
	    }, true);
	  },
	  /**
	   * @callback Bridge~getUserInfoCallback
	   * @param user {Object} 当前登录用户信息
	   * @param user.userName {String} 当前登录用户名
	   * @param user.userId {String} 当前登录用户 id
	   * @desc 获取用户信息回调
	   */
	
	  // 获取定位信息
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
	   */
	  getGPSInfo: function getGPSInfo(_successCallback, _failCallback) {
	    this.pushBack('lbs/locate', {
	      successCallback: function successCallback(result) {
	        _successCallback && _successCallback(result);
	      },
	      failCallback: function failCallback() {
	        _failCallback && _failCallback();
	      }
	    });
	  },
	  /**
	   * @callback Bridge~getGPSInfoSuccessCallback
	   * @param gpsInfo {Object} 获取到的定位信息
	   * @param gpsInfo.city {String} 定位到的城市
	   * @param gpsInfo.longtitude {Number} 经度
	   * @param gpsInfo.latitude {Number} 纬度
	   * @desc 获取定位成功回调函数
	   */
	  /**
	   * @callback Bridge~getGPSInfoFailCallback
	   * @desc 获取定位失败回调函数
	   */
	
	  //获取网络信息 -- 主要恢复以前的功能
	  getWifiInfo: function getWifiInfo(successCallback) {
	    var that = this;
	
	    if (that.platform === 'h5') {
	      successCallback(navigator.connection || {});
	      return;
	    }
	
	    that.pushBack('bridge:', 'networktype', {
	      successCallback: successCallback
	    });
	  },
	
	  //获取网络信息
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
	   */
	  getNetworkInfo: function getNetworkInfo(successCallback) {
	    var that = this;
	
	    if (that.platform === 'h5') {
	      successCallback(navigator.connection || {});
	      return;
	    }
	
	    that.pushBack('bridge:', 'networktype', {
	      successCallback: successCallback
	    });
	  },
	  /**
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
	   */
	
	  // 比较版本，当前客户端版本和传人的版本比较大小。比如说，你的功能需要在5.5.0以上才能使用，这个时候，你要和
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
	   */
	  compareVersion: function compareVersion(relVersion, digit) {
	    var version = this.client.versionStr;
	
	    if (!version) {
	      return -1;
	    }
	
	    var v = version.split('.'),
	        //客户端版本
	    r = relVersion.split('.'),
	        //传入版本
	    d = digit || v.length,
	        i = -1;
	
	    while (++i < d) {
	      var _v = Number(v[i]) || 0,
	          _r = Number(r[i]) || 0;
	
	      if (_v > _r) {
	        // 客户端版本大于relVersion
	        return 1;
	      } else if (_v < _r) {
	        //客户端版本小于relVersion
	        return -1;
	      }
	    }
	
	    return 0;
	  },
	
	  // 主要API，用于页面同客户端的协议回调，通过URI SCHEME进行H5与Native的通信
	  // - `name` scheme name，协议默认为`native:`，可以省略不传
	  // - `path` 为协议约定的访问路径，如`app/beep`，
	  // - `params` 对应scheme的query参数部分，为调用时传递给客户端的所需数据对象，对象内可包含`successCallback`和`failCallback`
	  //
	  // ***鉴于iOS回调的实现机制***，`newProxy`参数是为了避免在iOS下多次连续回调造成的消息丢失，当设为`true`时，每次均会创建一个新的`iframe`进行发送。
	  pushBack: function pushBack(name, path, params, newProxy, enableH5, events, callbackIsAlwaysAvailable) {
	    var that = this;
	    var uri = (name || 'native:') + '//' + path + '?params=';
	    var callbackName;
	    var args = [].slice.call(arguments);
	
	    if (typeof name !== 'string' || typeof path !== 'string') {
	      name = 'native:';
	      path = args[0];
	      params = args[1];
	      newProxy = args[2];
	      uri = (name || 'native:') + '//' + path + '?params=';
	    }
	
	    if (that.platform === 'h5' && !enableH5) {
	      return;
	    }
	
	    params = params || {};
	
	    if (params.successCallback) {
	      params.callbackCommand = params.successCallback;
	    }
	
	    for (var i in params) {
	      if (params.hasOwnProperty(i)) {
	        if (typeof params[i] === 'function') {
	          callbackName = buildCallback(params[i], callbackIsAlwaysAvailable);
	          params[i] = callbackName;
	        }
	
	        if (_typeof(params[i]) === 'object' && params[i].hasOwnProperty('length')) {
	          for (var j = 0; j < params[i].length; j++) {
	            if (typeof params[i][j] === 'function') {
	              callbackName = buildCallback(params[i][j]);
	              params[i][j] = callbackName;
	            }
	          }
	        }
	
	        var formattedKey = i.replace(/([A-Z])/g, "_$1").toLowerCase();
	        if (i !== formattedKey) {
	          params[formattedKey] = params[i];
	          delete params[i];
	        }
	      }
	    }
	
	    uri += encodeURIComponent(JSON.stringify(params));
	
	    this.sendUriScheme(uri, newProxy, events);
	  },
	
	  // 发送uri scheme
	  // - @param {string} uri
	  // - @param newProxy|events 同pushBack,可忽略不配置
	  // - @param isRoutApp 常用于唤起其他app
	  sendUriScheme: function sendUriScheme(uri, newProxy, events, isRoutApp) {
	    //去啊内
	    if (this.platform === 'android' && !isRoutApp) {
	      prompt('alitrip-android://' + uri);
	      return this;
	    }
	    if (this.platform === 'ios' && !isRoutApp) {
	      messageQueue.push(uri);
	      return this;
	    }
	
	    //hack ios9&safari的smartbanner
	    if ((/^taobaotravel:\/\/smartbanner/i.test(uri) || isRoutApp) && isIos9AndSafari(this.device)) {
	      window.location.href = uri;
	      return;
	    }
	
	    //非去啊内，iframe
	    var proxy = this.mClientProxy;
	    if (newProxy) {
	      buildProxy(uri, events);
	      return this;
	    }
	
	    if (proxy || (proxy = document.querySelector('#J_MClientProxy'))) {
	      proxy.setAttribute('src', uri);
	    } else {
	      proxy = buildProxy(uri);
	    }
	
	    this.mClientProxy = proxy;
	
	    return this;
	  },
	
	  //显示titlebar
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
	   */
	  showTitle: function showTitle(sCallback, fCallback) {
	    this.setUI({
	      titlebar_display: 'show',
	      success_callback: sCallback || function () {},
	      fail_callback: fCallback || function () {}
	    });
	  },
	  /**
	   * @callback Bridge~showTitleSuccessCallback
	   * @desc 显示标题栏成功回调
	   */
	  /**
	   * @callback Bridge~showTitleFailureCallback
	   * @desc 显示标题栏失败回调
	   */
	
	  //隐藏titlebar
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
	   */
	  hideTitle: function hideTitle(sCallback, fCallback) {
	    this.setUI({
	      titlebar_display: 'hide',
	      success_callback: sCallback || function () {},
	      fail_callback: fCallback || function () {}
	    });
	  },
	
	  getRequestParam: function getRequestParam(uri, param, isEscape) {
	    var value;
	    var that = this;
	    if (!param || param && typeof param == 'boolean') {
	      isEscape = param;
	      param = uri;
	      uri = window.location.href;
	    }
	    uri = uri || window.location.href;
	    value = uri.match(new RegExp('[\?\&]' + param + '=([^\&]*)(\&?)', 'i'));
	    value = value ? decodeURIComponent(value[1]) : value;
	    return isEscape ? that.escapeHtml(value) : value;
	  },
	
	  getRequestParams: function getRequestParams(uri, isEscape) {
	    var that = this;
	    var search = location.search.substring(1);
	    uri = uri || window.location.href;
	    if (typeof uri == 'boolean') {
	      isEscape = uri;
	    } else {
	      search = uri && uri.indexOf('?') > -1 ? uri.split('?')[1] : search;
	    }
	    return search ? JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
	      var val;
	      if (key != '') {
	        val = decodeURIComponent(value);
	        val = isEscape ? that.escapeHtml(val) : val;
	      } else {
	        val = value;
	      }
	      return val;
	    }) : {};
	  },
	
	  escapeHtml: function escapeHtml(str) {
	
	    var that = this;
	
	    if (!str) {
	      return '';
	    }
	
	    var reverseEntities = {
	      '&': '&amp;',
	      '>': '&gt;',
	      '<': '&lt;',
	      '`': '&#x60;',
	      '/': '&#x2F;',
	      '"': '&quot;',
	      "'": '&#x27;'
	    };
	    return (str + '').replace(/(&|>|<|`|\/|\"|\')/g, function (m) {
	      return reverseEntities[m];
	    });
	  },
	
	  // 获取URL和客户端传递的所有参数，会优先获取URL中的参数
	  getParams: function getParams(isEscape) {
	    var that = this;
	    var params = that.getRequestParams(isEscape);
	    var client = that.client;
	
	    for (var i in client) {
	      if (client.hasOwnProperty(i) && params.hasOwnProperty(i)) {
	        params[i] = client[i];
	      }
	    }
	
	    return params;
	  },
	
	  /**
	   * @memberof Bridge#
	   * @namespace
	   * @type {Object}
	   * @desc 通知交互集合
	   */
	  notification: {
	
	    // `alert`弹框
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
	     */
	    alert: (function (_alert) {
	      function alert(_x, _x2, _x3, _x4) {
	        return _alert.apply(this, arguments);
	      }
	
	      alert.toString = function () {
	        return _alert.toString();
	      };
	
	      return alert;
	    })(function (message, alertCallback, title, buttonLabels) {
	      var that = this;
	      var callback = function callback(ret) {
	        var buttonIndex = ret.buttonIndex;
	
	        if (Array.isArray(alertCallback)) {
	          alertCallback[buttonIndex] && alertCallback[buttonIndex].apply(this, arguments);
	          return;
	        }
	
	        alertCallback && alertCallback();
	      };
	
	      if (that.superthat.platform === 'h5') {
	        alert.apply(null, arguments);
	        return;
	      }
	
	      if (typeof buttonLabels === 'string') {
	        buttonLabels = [buttonLabels];
	      }
	
	      that.superthat.pushBack('bridge:', 'alert', {
	        message: message,
	        successCallback: callback,
	        title: title,
	        buttonNames: buttonLabels
	      });
	    }),
	    /**
	     * @callback Bridge#notification~alertCallback
	     * @desc 消息提示回调函数
	     */
	
	    // `confirm`确认对话框
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
	     */
	    confirm: (function (_confirm) {
	      function confirm(_x5, _x6, _x7, _x8) {
	        return _confirm.apply(this, arguments);
	      }
	
	      confirm.toString = function () {
	        return _confirm.toString();
	      };
	
	      return confirm;
	    })(function (message, confirmCallback, title, buttonLabels) {
	      var that = this;
	
	      if (that.superthat.platform === 'h5') {
	        if (confirm.apply(null, arguments)) {
	          if (Array.isArray(confirmCallback)) {
	            confirmCallback[0](true);
	          } else {
	            confirmCallback && confirmCallback(true);
	          }
	        } else {
	          if (Array.isArray(confirmCallback)) {
	            confirmCallback[1](false);
	          } else {
	            confirmCallback && confirmCallback(false);
	          }
	        }
	        return;
	      }
	
	      if (typeof buttonLabels === 'string') {
	        buttonLabels = [buttonLabels];
	      }
	
	      that.superthat.pushBack('bridge:', 'confirm', {
	        message: message,
	        title: title,
	        successCallback: confirmCallback,
	        buttonNames: buttonLabels
	      });
	    }),
	    /**
	     * @callback Bridge#notification~confirmCallback
	     * @param result {Boolean} 是否确认
	     * @desc 消息确认回调函数
	     */
	
	    // `prompt`提示对话框
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
	     */
	    prompt: (function (_prompt) {
	      function prompt(_x9, _x10, _x11, _x12, _x13) {
	        return _prompt.apply(this, arguments);
	      }
	
	      prompt.toString = function () {
	        return _prompt.toString();
	      };
	
	      return prompt;
	    })(function (message, defaultValue, promptCallback, title, buttonLabels) {
	      var that = this;
	
	      if (that.superthat.platform === 'h5') {
	        prompt.apply(null, arguments);
	        return;
	      }
	
	      if (typeof buttonLabels === 'string') {
	        buttonLabels = [buttonLabels];
	      }
	
	      that.superthat.pushBack('bridge:', 'prompt', {
	        message: message,
	        value: defaultValue,
	        successCallback: promptCallback,
	        title: title,
	        buttonNames: buttonLabels
	      });
	    }),
	    /**
	     * @callback Bridge#notification~promptCallback
	     * @desc 提示消息确认回调函数
	     */
	
	    // 弱提示
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
	     */
	    toast: function toast(message, milliseconds, callback) {
	      var that = this;
	
	      if (that.superthat.platform === 'h5') {
	        return;
	      }
	
	      that.superthat.pushBack('bridge:', 'toast', {
	        message: message,
	        milliseconds: milliseconds,
	        successCallback: callback
	      });
	    },
	    /**
	     * @callback Bridge#notification~toastCallback
	     * @desc 弱提示回调函数
	     */
	
	    // 蜂鸣
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
	     */
	    beep: function beep(times) {
	      var that = this;
	
	      that.superthat.pushBack('bridge:', 'beep', {
	        times: times
	      });
	    },
	
	    // 震动
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
	     */
	    vibrate: function vibrate(milliseconds) {
	      var that = this;
	
	      that.superthat.pushBack('bridge:', 'vibrate', {
	        milliseconds: milliseconds
	      });
	    }
	  },
	
	  // 新开浏览器页面
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
	   */
	  openBrowser: function openBrowser(url) {
	    var that = this;
	
	    if (that.platform === 'h5') {
	      window.open(url);
	      return;
	    }
	
	    that.pushBack('bridge:', 'open_system_browser', {
	      url: url
	    });
	  },
	
	  // ***针对IOS***，跳转并打开AppStore的相应地址，对于浏览器而言则在新标签中打开对应的应用地址。
	  /**
	   * @method
	   * @memberof Bridge#
	   * @desc ***针对IOS***，跳转并打开AppStore的相应地址，对于浏览器而言则在新标签中打开对应的应用地址。
	   * @param url {String} app store 中对应 url
	   *
	   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#jumpAppStore}
    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovEwtBwNyUQz8EQap9MQ9UqUApRFreIZZWKx1vHVW1lChV+2eOs0U8vwSBhxlqjR6/q98acRuDCYZ9cV5+fWNzGI4ZgIOKeHiLcItggByaVY9daWFZmIKUeqpbaZdjnJOJr56dpZ2nlamUpBivrad9drO7sq+1vnkTvMZ6hL9uYrHNr6YfxsyjwsrdxcO727cR2MzIodXgnuCV0crFxuBtq4600LAl+ubcin+Z5+LK+/Hc87ph0lYrAA+qPjzlmyb7ESOuRH0AE8dQW1PTwUsRs3Bv8T952rlpHjRkIjHwE7WJAaNJUsT95K6JJeSoYraXZcFs2lzZ3/WvbUGTKGT1D2Zj4DMlCmJZzrSiIVWDMiO1EGcxTqN+8BUIWs7nW4yjUsPp31ulb8OjKrwU1by5rzKuIl2KkfSf4Um0Ju2lJwofrcY0Jv0Fl9qf4lB5EuxapUJTkrHJUEYZBNpTqNqtLvZZNyLBrNprUf5MwQ4b50TNSjZ4ynMZreHNqyuWaCW499HfSiW9y1YWcQ1znWUJCLAdelc9P4wrvLV0NG52/y0uJYPSr3rero2bWiG4r8p1l7ieuygaceTDO8bc6gp1vLJ16peuwXjK9WO7wubcTH0cb/p/yZdTxBtVtjie2FEnd3ybddUf1xsF908JHG2FLOeRfEhO+Vlx6AFnp4ngoRShNig/yR+N169Wn42HeoBTjbOLJJxuKFH9pVGXAUqngbhvZtp5RiMhI4QoSV4XbRj+79lxOHzHX44Hy5EUcfJyViBqVgNp7HY3bt3behks0ZViV78F2pI38F6gcljeIZ6SFdXGbZ5oFTPpimhMHpoORoYf7JFA59AhlnQFQGSsNyDr6Io3Ab2tilXXlq6aKjekJapkQyLlppo0uaByKhv52opoE3XgnmgqJq9Gapp5qKaYL5IVdjbIyiWqiqUZaWIqBSOjZrqOMhmOevveq6ZZHE//pKJpPUOSmioZJWl+Cc4CUVmLRoSjuXatgOi2iqY05b7bfQ3XSriXpu9aWdboFFZIXsmrXrqOu62q6885LHg5jUxutni3zi+y+soqI4sLMFv8rwkcqSpS6DWM4I43OCAIWkUcbeiHCkwJ6UcWTNttdxpj26Zuux0gVMIXS6dWqtnAd72+TLnsas7czl1nxokN2JTO67Qz68Zn7PfhzWuAj1rHHFTQd9qNK8Ksgyix4vFi1eeJL6lpnXZqh1t05eTfMJ+NVKrtiHMelm0Whbi/TaHmfnNrQqLysrvWb7RjKdrd7b9QqUcuw3nAoOCq7NwVYobs6CY5yrv2M7Dq+d0jEVC3PU9FbeZEyREzw5opw/RXrppp+Oeuqqr856666/Dnvsss9Oe+2234577rrvfnsBADs=)
	   */
	  openAppStore: function openAppStore(url) {
	    var that = this;
	
	    if (that.platform === 'h5') {
	      window.open(url);
	      return;
	    }
	
	    that.pushBack('bridge:', 'open_app_store', {
	      url: url
	    });
	  },
	
	  // 打开客户端页面
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
	   */
	  openAppPage: function openAppPage(pagename, data) {
	    pagename = pagename || 'home';
	
	    //非客户端内，通过router功能处理
	    this.router({
	      type: 'page',
	      action: pagename,
	      data: data
	    });
	  },
	
	  // 唤醒客户端，并打开指定页面
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
	   */
	  smartbanner: function smartbanner(options) {
	    var that = this;
	
	    var type = options.type || 'page',
	        action = decodeURIComponent(options.action) || 'home',
	        isWapPage = /^http(s)?/i.test(action),
	        params;
	
	    //alitrip客户端内，直接webview打开页面
	    if (/AliTrip/i.test(ua)) {
	      options.page_name = isWapPage ? 'act_webview' : action;
	      options.data = isWapPage ? { url: action } : options.data;
	      this._goto(options);
	      return true;
	    }
	
	    //page 参数
	    if (options.data) {
	      params = extend({}, options.data || {});
	    }
	
	    //线上h5地址url->http...
	    //pagename->page://pagename?params=
	    var _params = {
	      url: isWapPage ? action : type + '://' + action + (params ? '?params=' + encodeURIComponent(JSON.stringify(params)) : ''),
	      //smartbanner的标志符
	      sb: '1234'
	    };
	    extend(_params, options);
	
	    //打点
	    (function () {
	      //打点用
	      var gokey = location.search ? location.search.replace('?', '') : '';
	      gokey += '&deviceType=' + that.device.type + '_' + that.device.version;
	      try {
	        window.goldlog && goldlog.record('/tbtrip.2000.6', '', gokey, 'H46836991');
	      } catch (e) {}
	    })();
	
	    //解决android下chrome内核唤起
	    //fix WindVane [ua直接append在系统UA后面]
	    if (this.device.type === 'android' && /Chrome/i.test(ua) && !this.isWindVane && !this.isAlipay && !this.isAliweibo && !this.isAlilaiwang) {
	      window.location.replace('intent://smartbanner?params=' + encodeURIComponent(JSON.stringify(_params)) + '#Intent;scheme=taobaotravel;package=com.taobao.trip;end');
	    } else {
	      this.pushBack("taobaotravel:", "smartbanner", _params, true, true, options.events);
	    }
	  },
	
	  // 将外部用户导向客户端
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
	   */
	  router: function router(options) {
	    var that = this;
	
	    var _options = {
	      type: 'page',
	      action: 'home',
	      alipayDownload: true
	    };
	    extend(_options, options);
	
	    //钱包、手淘内部可以直接拿到alitrip安装状态
	    var alitrip = {
	      scheme: 'taobaotravel://',
	      packagename: 'com.taobao.trip'
	    };
	
	    //打点用
	    var gokey = location.search ? location.search.replace('?', '') : '';
	    gokey += '&deviceType=' + that.device.type + '_' + that.device.version;
	
	    if (this.isAlipay) {
	      //console.log('alipay');
	      alipayCall(function () {
	        AlipayJSBridge.call('isInstalledApp', alitrip, function (result) {
	          if (result.installed) {
	            //已安装，直接smartbanner
	            //console.log('smartbanner');
	            that.smartbanner(_options);
	
	            //打点，a-黄金串 区别点,b-空,c-业务参数,d-校验码，防滥用
	            //唤起一个点，下载一个点
	            (function () {
	              try {
	                window.goldlog && goldlog.record('/tbtrip.2000.2', '', gokey, 'H46836987');
	              } catch (e) {}
	            })();
	          } else {
	            if (_options.alipayDownload) {
	              console.log('download');
	              that.download(_options.downloadUrl, _options.androidUrl);
	            }
	
	            //打点
	            (function () {
	              try {
	                window.goldlog && goldlog.record('/tbtrip.2000.1', '', gokey, 'H46836965');
	              } catch (e) {}
	            })();
	          }
	        });
	      });
	      return;
	    }
	    //手淘依赖windvane.js
	    if (this.isWindVane && window.WindVane) {
	      //console.log('windvane');
	      window.WindVane.call('Base', 'isInstall', {
	        ios: alitrip.scheme,
	        android: alitrip.packagename
	      }, function (e) {
	        //已安装，直接smartbanner
	        that.smartbanner(_options);
	        //console.log('smartbanner');
	
	        //打点
	        (function () {
	          try {
	            window.goldlog && goldlog.record('/tbtrip.2000.4', '', gokey, 'H46836989');
	          } catch (e) {}
	        })();
	      }, function (e) {
	        //未安装，download
	        that.download(_options.downloadUrl, _options.androidUrl);
	        //console.log('download');
	
	        //打点
	        (function () {
	          try {
	            window.goldlog && goldlog.record('/tbtrip.2000.3', '', gokey, 'H46836988');
	          } catch (e) {}
	        })();
	      });
	      return;
	    }
	
	    var dType = that.device.type,
	
	    // ios <=800ms检测时长
	    // android <=2000ms检测时长
	    openAppTime = dType === 'ios' ? 800 : 2000,
	        beginTime = Date.now(),
	        isOpen = true;
	
	    //配置android 4.1 iframe onload事件
	    _options.events = {
	      onload: function onload() {
	        isOpen = false;
	      }
	    };
	
	    //ios 唤起运行时停止的方案
	    if (dType === 'ios' && !_options.onlydown) {
	      //alitrip内部打开页面
	      if (this.smartbanner(_options)) {
	        return;
	      }
	    }
	
	    //设置时间阈值，在设定时间内未唤起App时，去下载App
	    var sid = (function (beginTime) {
	      return setTimeout(function () {
	        // 间隔时间大于时间阈值，说明已唤起客户端
	        var endTime = Date.now();
	
	        //已唤起app，避免用户返回到该跳转页后去下载。200ms延迟是对消息队列执行性能问题的兼容
	        if (dType === 'ios' && endTime - beginTime < openAppTime + 200) {
	          that.download(_options.downloadUrl);
	        }
	
	        // android
	        if (dType === 'android') {
	          //阻止自动下载
	          return;
	
	          var version = that.device.version.replace(/\./g, '').slice(0, 2);
	
	          // ≥v4.2 唤起app后，浏览器脚本运行 hold on
	          if (version >= 42 && endTime - beginTime < openAppTime + 20) {
	            that.download(_options.downloadUrl, _options.androidUrl);
	          }
	          // <v4.2
	          if (version < 42 && (!isOpen || endTime - beginTime < openAppTime + 200)) {
	            that.download(_options.downloadUrl, _options.androidUrl);
	          }
	        }
	      }, openAppTime);
	    })(beginTime);
	
	    //当App被成功唤起时，清除下载操作(防止已经打开native，有些浏览器还执行下载)
	    (function (sid) {
	      //标准事件
	      // ios:safari
	      window.addEventListener('pagehide', function __clearDownload(e) {
	        console.log('pagehide');
	        clearTimeout(sid);
	        sid = null;
	      }, false);
	      //android:部分默认浏览器(三星)、uc、chrome
	      document.addEventListener('webkitvisibilitychange', function __clearDownload(e) {
	        console.log('webkitvisibilitychange');
	        clearTimeout(sid);
	        sid = null;
	        window.removeEventListener('webkitvisibilitychange', __clearDownload);
	      }, false);
	      //android:chrome
	      document.addEventListener('visibilitychange', function __clearDownload(e) {
	        console.log('visibilitychange');
	        clearTimeout(sid);
	        sid = null;
	        window.removeEventListener('visibilitychange', __clearDownload);
	      }, false);
	      //windVane
	      document.addEventListener('WV.Event.APP.Background', function __clearDownload(e) {
	        console.log('WV.Event.APP.Background');
	        clearTimeout(sid);
	        sid = null;
	        window.removeEventListener('WV.Event.APP.Background', __clearDownload);
	      }, false);
	      document.addEventListener('WV.Event.APP.Active', function __clearDownload(e) {
	        console.log('WV.Event.APP.Active');
	        clearTimeout(sid);
	        sid = null;
	        window.removeEventListener('WV.Event.APP.Active', __clearDownload);
	      }, false);
	
	      //android:部分系统默认浏览器、百度浏览器、钱包
	      window.addEventListener('blur', function __clearDownload(e) {
	        console.log('blur');
	        clearTimeout(sid);
	        sid = null;
	        window.removeEventListener('blur', __clearDownload);
	      }, false);
	    })(sid);
	
	    //android 事件监听事件方案
	    if (dType === 'android') {
	      this.smartbanner(_options);
	    }
	  },
	
	  // 引导去下载客户端
	  /**
	   * @method
	   * @memberof Bridge#
	   * @desc 引导用户跳转去下载去啊客户端
	   * @param downloadUrl {String} 下载 url
	   * @param androidUrl {String} Android 可指定渠道包 URL
	   */
	  download: function download(downloadUrl, androidUrl) {
	    var that = this;
	    //打点
	    (function () {
	      //打点用
	      var gokey = location.search ? location.search.replace('?', '') : '';
	      gokey += '&deviceType=' + that.device.type + '_' + that.device.version;
	      try {
	        window.goldlog && goldlog.record('/tbtrip.2000.5', '', gokey, 'H46836990');
	      } catch (e) {}
	    })();
	
	    var url;
	    //自定义下载页
	    if (downloadUrl) {
	      url = downloadUrl;
	    } else {
	      var appUrls = {
	        ios: 'https://itunes.apple.com/cn/app/tao-bao-lu-xing-ji-piao-jiu/id453691481?mt=8',
	        android: 'https://trip.taobao.com/go/act/other/tripdownloadh5.php'
	      };
	
	      if (this.device.type === 'ios') {
	        url = appUrls.ios;
	      } else {
	        //android 可指定渠道包
	        url = androidUrl || appUrls.android;
	      }
	    }
	    window.location.href = decodeURIComponent(url);
	  },
	
	  // 客户端生存环境下设置WebView顶部的标题显示文案
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
	   */
	  setTitle: function setTitle(title, subtitle) {
	    var that = this;
	
	    if (that.platform === 'h5') {
	      document.title = title;
	      return;
	    }
	
	    that.pushBack('bridge:', 'set_webview_title', {
	      title: title,
	      subtitle: subtitle
	    });
	  },
	
	  // 配置Native 标题栏左右button。
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
	   */
	  setTitleButton: function setTitleButton(title, clickCallback, isLeft, img) {
	    if (this.platform === 'h5') {
	      return;
	    }
	
	    var host = isLeft ? 'set_webview_left_button' : 'set_webview_right_button',
	        params = {
	      title: title,
	      click_callback: clickCallback
	    };
	
	    if (!isLeft && img) {
	      params.img = img;
	    }
	    this.pushBack('bridge:', host, params, null, true, null, true);
	  },
	  /**
	   * @callback Bridge~setTitleButtonClickCallback
	   * @desc 设置标题栏按钮点击回调
	   */
	
	  // 使用去啊app代理发送mtop请求
	  sendMTop: function sendMTop(options) {
	    var protocal = options.needLogin ? 'biz/mtop_ecode_sign' : 'biz/mtop_normal_sign';
	
	    //向客户端发送协议
	    this.pushBack('native:', protocal, options);
	  },
	
	  //设置UI
	  /**
	   * @method
	   * @memberof Bridge#
	   * @desc 动态修改容器 UI
	   *  - 桥协议(修改标题栏颜色): `bridge://set_ui?params={"title_bar_color":"#00ff00"}`
	   * @param options {Object} 配置项
	   * @param options.title_bar_color {String} 标题栏颜色值
	   * @param options.titlebar_display {String} 是否显示标题栏 `"show"|"hide"`
	   */
	  setUI: function setUI(options) {
	    //向客户端发送协议
	    this.pushBack('bridge:', 'set_ui', options);
	  },
	
	  // 跳转到相应的客户端页面，如果有额外的数据则通过`data`参数传递给客户端。
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
	   */
	  open: function open(pagename, data, successCallback, naviType, animeType, trigger) {
	    var params = {
	      page_name: pagename,
	      data: data || {},
	      successCallback: successCallback || function () {},
	      naviType: naviType || 0,
	      animeType: typeof animeType !== 'undefined' ? animeType : 4,
	      trigger: trigger || ''
	    };
	
	    this.pushBack('page:', 'goto', params);
	  },
	  /**
	   * @callback Bridge~openCallback
	   * @desc 跳转成功回调函数
	   */
	
	  // 打开一个新的窗口，以栈的方式来管理窗口
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
	   */
	  pushWindow: function pushWindow(options, callback) {
	    this.open('act_webview', {
	      url: options.href,
	      title: options.title,
	      right_btn_type: options.rightBtnType
	    }, callback, 0, options.animeType || 2, options.trigger);
	  },
	  /**
	   * @callback Bridge~pushWindowCallback
	   * @desc 新开窗口回调函数
	   */
	
	  // 把栈顶的窗口关闭，以栈的方式来管理窗口
	  /**
	   * @method
	   * @memberof Bridge#
	   * @desc 把栈顶的窗口关闭，以栈的方式来管理窗口
	   *  - 桥协议: `bridge://back?params={"callback_command":"xxx"}`
	   * @param callback {Bridge~popWindowCallback} 关闭窗口回调函数
	   *
	   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#popWindow}
    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEohFyTAwVyYBxqXxKi6GpVYikRgFMrVPavYJB4mmWGA5Dv091GU3GStZnd9vQpOPlET3H3wDI4Cd2kMdniPggmMGYNqfIZrYHx/bYF7mxNmkJyUX5VtmU+Cnp5XixOdaJWRp6WElKClvFx4mKoPqqS2i7ilvBexp561squ0hsTBvn+qt8x9p7PAg9O0z9t4xtp4ucm7l1WZytuS0avjAK6hVozY5eriEcP7FuGludTe/dfF3vadq9S9/I1ZKn7hyjhVfGpSPYARilfwwRFhI30dNBe/8K01XkVPAhxg+7AEozFtKZypQlD7bMeHIlzH4xKb5xuSulzpkoeap8qUNiwjL/gGAQ2u1ZPqMaj96El2NaUag+ydF0iPCEVKr4WCq9OhKpv7DYaF7sChMrjIFpyS79ZidpVq4e2LLCWtHdUpD6xJ7Jq2/qUL0C2/UVSRKa3Y8971bl1rZE4beRBYONycyxZMWGwVmErJlfY7/J9nbOvBNzw8dzE5t+fdlsx2j0VNy7DTq1aNrnbD9VbTK15dWeBdf9vRuuz7jwcP9EHAz5bOU1t+zeita1WuvvPCc/HJxuxO6TIWbn6z23eG37GhuPDGuxUuauMzu32Xq4ydojDK7//94Kf9Vlh9N+p00XUG/LrVegfw4IaBVx221GVGVuARiKXtQ1OF9p+sUnoVtruQcfiaF9pZ5mvslUnIgj4Qdjifn1ZyJ22MWIT2zQpeJRivpp6OJgC4rAGIv0AdaiikOS1gphJv4YWJATMlnHi1zdyF17RkaZHmWNdAdlkvQJxyWOx2l5JJhZTghkl1Q2RWBzq+BX0pspCEjngXWiF5WCbs4p5547rnCWfdJZsaFTM1pQKGgZBnrZl4tGh+iVs4HI26QemsDnkH/pOVmRdjrpZaTglZelqINSKt+WDwIaZ449RnMmhLMiyeaSehYY5phWJmmjn4lKautnpc5KnWyv/5HgYKPGVvnqc5qyZ2ilSl47rFfTmpNpnq5mayGwnTGL4IAf1ljWb++xh6OO8bh7Hax2Kdouuu/aGy+tDMrQaYCcHbssDv1+qmWrWNIwcGmh3qomtTkl6KWvA57FYYX+RrxmkBQ3AxTBQt3H2rzzDAqvj6k+uS+RJONr8p/fprwRnAu/7PKwImsXaLK7wmzpK+BKWm/B5I2bsazWjsqlg+viCZ63qI1ltG6jEQ2c0yjjHLWuLLZ67tGr8iitslID3LXSNIbNcsBdauvx1fTmLCPIa7PWNs1vZ32ivnkri4vZ7MKp7aNCGn0zuYsGW2ebgrfw8dCJJ60uC4KaKSO0ZDWay/HDeOvcGuK51qc5egeb5+7PTJ2Oeuqqr856666/Dnvsss9Oe+2234577rrvznvvvtNeAAA7)
	   */
	  popWindow: function popWindow(callback) {
	    this.pushBack('bridge:', 'back', {
	      callbackCommand: function callbackCommand() {
	        callback();
	      }
	    });
	  },
	  /**
	   * @callback Bridge~popWindowCallback
	   * @desc 关闭窗口回调函数
	   */
	
	  // goto page
	  // - {string} page_name	页面名称
	  // - {object} data	页面参数
	  // - {object} data	页面参数
	  // - {string} trigger	触发源
	  _goto: function _goto(options) {
	    var _options = {
	      page_name: 'home',
	      data: {},
	      naviType: 0,
	      animeType: 4,
	      trigger: ''
	    };
	    extend(_options, options);
	
	    this.pushBack('page:', 'goto', _options);
	  },
	
	  /*
	   * 通过window切换页面
	   * noUseWV 手淘中不用windvane做跳转
	   * noUseTripBridge 去啊中不用brige做跳转
	   */
	  /**
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
	   */
	  goTo: function goTo(options, noUseWV, noUseTripBridge) {
	    if (typeof options === 'string') {
	      options = { href: options };
	    }
	    var href = options.href || '',
	        callback = options.callback || function () {},
	        title = options.title || '',
	        rightBtnType = options.rightBtnType || 2,
	        triggerNode = options.triggerNode;
	
	    if (window.MT && window.MT.Tracker && triggerNode) {
	
	      var elementSpm = window.MT.Tracker.getEelementABCDForStr(triggerNode);
	      var urlArr = href.split('#');
	      var oUrl = urlArr[0].split('?');
	
	      //去除url带的spm，主要是有的业务线是写死的
	      if (oUrl.length > 1) {
	        var oParams = oUrl[1];
	        oUrl[1] = oParams.replace(/&{0,1}spm\=[0-9A-Za-z\.]+&?/gi, '');
	      }
	      urlArr[0] = oUrl.length > 1 && oUrl[1] ? oUrl.join('?') : oUrl[0];
	
	      //给href的url上加上spm，这里需要注意hash的情况
	      var connetStr = urlArr[0].indexOf('?') == -1 ? '?' : '&';
	      var spmSearch = 'spm=' + elementSpm;
	      urlArr[0] = urlArr[0] + connetStr + spmSearch;
	
	      //href带上埋点信息
	      if (urlArr[0].indexOf('ttid') == -1) {
	        var ttid = this.getRequestParam(window.location.search, 'ttid') || '';
	        var ttidSearch = 'ttid=' + ttid;
	
	        if ((this.isTmall || this.isTaobao) && urlArr[0].indexOf('/item.htm') != -1) {
	          ttidSearch += '&track_params=' + encodeURIComponent('{"ttid":"' + ttid + '"}');
	        }
	
	        connetStr = urlArr[0].indexOf('?') == -1 ? '?' : '&';
	        urlArr[0] = urlArr[0] + connetStr + ttidSearch;
	      }
	
	      href = urlArr.join('#');
	    }
	
	    //去啊
	    if (this.isAlitrip && !noUseTripBridge) {
	      options.href = getAbsoultePath(href);
	
	      this.pushWindow(options, callback);
	
	      //钱包
	    } else if (this.isAlipay && window.AlipayJSBridge) {
	        href = getAbsoultePath(href);
	        AlipayJSBridge.call('pushWindow', {
	          url: href,
	          param: {
	            // 是否读取页面中的title标签内容
	            readTitle: true,
	            // 显示/隐藏顶部标题栏
	            showTitleBar: true,
	            // 显示/隐藏底部工具栏
	            showToolBar: false,
	            // 显示/隐藏loading
	            showLoading: false,
	            // 返回
	            backBehavior: 'back'
	          }
	        });
	        //手淘
	      } else if (this.isInTBClient && !noUseWV) {
	          href = getAbsoultePath(href);
	
	          var params = {
	            // 要打开的页面地址
	            url: href
	          };
	          window.WindVane.call('Base', 'openWindow', params, function (e) {}, function (e) {
	            window.location.href = href;
	          });
	          //browser
	        } else {
	            window.location.href = href;
	          }
	  },
	
	  // 返回上一页
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
	   */
	  back: function back(pagename, params, noUseWV) {
	    //去啊
	    if (this.isAlitrip) {
	      this.pushBack('bridge:', 'back', params);
	      //钱包
	    } else if (this.isAlipay && window.AlipayJSBridge) {
	        AlipayJSBridge.call('popWindow', params);
	        //手淘
	      } else if (this.isInTBClient && !noUseWV) {
	          window.WindVane.call('WebAppInterface', 'pop', params || {}, function (e) {}, function (e) {
	            history.back();
	          });
	          //browser & other
	        } else {
	            history.back();
	          }
	  },
	
	  // 关闭当前的客户端页面，如果有额外的数据则通过`ext`参数传递给客户端。
	  /**
	   * @method
	   * @memberof Bridge#
	   * @desc 关闭当前页面
	   * @param ext {Object} 额外传递给客户端的参数
	   *
	   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#close}
    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEovFwZAwbycVSaYxGQ9IqEVlkCrVXKIBrlVLDVWzXufU+0V81OQtaQ9ZNRT1xD9DTev7c3yH3sHdmB8cm2NemaDaRuPHoZRapSJlH2ChBiUHY1MlHlol4aLhYZrB58Xm2OimGCohwyubKGgsJ+soIa2slWponOptqsYqJd3i8WxkmnDvFO2aqm+j57PyGXavsYXyN3KvNGxpdzhwe92w9zf47fgv+x74uvf29zP2+yCVv354+L9m9fOf6DVIncF8geLTiSdJH8BLDUvU0xbKEEJ0sUv/mDH4g5m4ZRYj3ao2MAJLCG2oDW/7D53JloYUyNSq76RJbzYmqduJ8+VMcTJ8Kb1Rb6YgnkKRFZTJdShNYM4tFcxwlOiwjsYhalVa4ihXa0GAORZqb1e1iWJYBZzY0O5bjx4Rg1foi2VSuv5Qc1tXNe/fcXzC6Tvi1+/ewW7KC9QL8eVUoY8JinT6OaVeyYwfkGotNa1NuUH3Fpnqe3BOwTsQJpVZ9CBdt1LKtwNGz7fUsa7e4VOtezNb10454pWUNfPst49qcczM9Dr0k7c3M+V2ubDr5yeUZPYKeCxxwZ4xtDTuXFxk3cobVR/BFn1n9cesFUzAnbznu69OmzZf/J75RTavtF5YK97G304CU5ecfd+J1B2AG80VIk4PCkUZhasm9p1JhZZmEIVwSBpdhb/glGCJ90X1mH3VYgdhcW97wZoKDPsGoIluyBSFdjAvqiFloL1UkImyurTjgaEX21SN9RwIJFIlDERlSe7GhWN+S2s0W4Hai7TZea24MyWWVEHYpX3ZijkImeKX1ghpKYGJJJVUzMvkgUSRwmOWObz4poHsIwtlkiFvlVKKgBNJVaJ9KKclnb5TBeGKbXka5n3H92bnZSTimmel1fh7Eoo/q/RgqeJ091+mHKYJqYJD5HZrqXh5m+d1vNya6JKA7xvmVrEjxyteuAUZqKpps/5qJXalh5omskxlu6Zk/vvY46oi+LQvgiomtae11SQpb66vHDotrheSOW26652Zjronr6trqu6giicOv6H6q5ZlW3cqgueTxa4O+8NrrqrLAaojlhAp39d+UvMobaLXdzusopg02LKVmzUJ6XmrDuVupRKWyW2eyJt8756IyhuwdqfyW/OXJ9NKobbgSK6vgxXqycOdvnt7MrLGxvqxxwgdCu2+LSHu89LPF+sulw1FDrNjIC2st5dVIZ00VwRoE3avSu818ZracQByStFcSuq1i0cLmcMxvW+n13G/ZXfSgbrOM89rtDnyqkQkDrvfQySpuoeExrqpuxWvdijjMoDEZO7nNbKpd44t4FchpYFCNTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577rrv7kABADs=)
	   */
	  close: function close(ext) {
	    var that = this;
	
	    if (that.platform === 'h5') {
	      window.close();
	      return;
	    }
	
	    that.pushBack('page:', 'close', ext);
	  },
	
	  // 客户端极简支付，如果有额外的数据则通过`data`参数传递给客户端。
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
	   */
	  minipay: function minipay(alipayId, h5AlipayUrl, data, successCallback, failCallback) {
	    var that = this;
	    var payResult;
	    var callback = function callback(ret) {
	      try {
	        if (typeof ret === 'string') {
	          payResult = JSON.parse(ret);
	        } else {
	          payResult = ret || {};
	        }
	      } catch (e) {
	        /* iOS客户端3.5版本返回的JSON格式有误，解析会出问题*/
	        if (ret.match(/"ResultStatus":"9000"/igm)) {
	          payResult = {
	            ResultStatus: '9000'
	          };
	        }
	      }
	
	      /* iOS SDK返回的字段名首字母是大写，暂时兼容处理*/
	      if (that.platform === 'ios') {
	        payResult.resultStatus = payResult.ResultStatus;
	      }
	
	      if (payResult.resultStatus === '9000') {
	        successCallback && successCallback(payResult);
	        return;
	      }
	
	      failCallback && failCallback(payResult);
	    };
	    var params = {
	      data: data || {},
	      failCallback: failCallback,
	      successCallback: callback
	    };
	    //orderInfo优先
	    if (data && data.orderInfo) {
	      params.order_info = data.orderInfo;
	    } else {
	      params.alipay_id = alipayId;
	    }
	
	    if (that.platform === 'h5' && h5AlipayUrl) {
	      window.location.href = h5AlipayUrl;
	      return;
	    }
	
	    that.pushBack('bridge:', 'minipay', params);
	  },
	  /**
	   * @callback Bridge~minipaySuccessCallback
	   * @desc 客户端极简支付成功回调
	   */
	  /**
	   * @callback Bridge~minipayFailureCallback
	   * @desc 客户端极简支付失败回调
	   */
	
	  // 客户端旺信调用接口
	  // - 如果没有装旺信客户端且未传failCallback，客户端会自行降级跳转到WAP旺旺处理。
	  // - 如果传递有failCallback，则客户端会回调failCallback将逻辑交还给页面自行处理逻辑。
	  // - 客户端3.7.0中新加接口，3.7.0以下版本默认调用failCallback
	  // - {string} sellerName 商户名称
	  // - {string} itemid 宝贝id
	  // - {string} orderid 订单id
	  wangxin: function wangxin(sellerName, itemId, orderId, failCallback) {
	    var that = this;
	
	    if (that.platform === 'h5') {
	      failCallback && failCallback();
	      return;
	    }
	
	    that.pushBack('bridge:', 'open_wangwang', {
	      sellerName: sellerName,
	      itemId: itemId,
	      orderId: orderId,
	      failCallback: failCallback && failCallback
	    });
	  },
	
	  /**
	   * 唤起旺信的新方法
	   * 客户端open_wangwang协议从5.4版本修改，参数http://docs.alibaba-inc.com:8090/pages/viewpage.action?pageId=243739271
	   * {
	   *  'seller_name' : '',
	   *  'custom_info' : {
	   *    // custom_info内部的参数请参见上面链接
	   *  }
	   * }
	   *
	   */
	  /**
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
	   */
	  openWangxin: function openWangxin(params, failCallback) {
	    var that = this;
	    if (that.platform === 'h5' || that.client.version < 540) {
	      failCallback && failCallback();
	      return;
	    }
	
	    that.pushBack('bridge:', 'open_wangwang', params);
	  },
	  /**
	   * @callback Bridge~openWangxinFailCallback
	   * @desc 客户端调用旺信失败回调
	   */
	
	  // 显示客户端Loading
	  /**
	   * @method
	   * @memberof Bridge#
	   * @desc 显示客户端 Loading 框
	   *  - 桥协议: `bridge://open_loading_view?params={}`
	   * @param {Object} params 其他参数
	   *
	   * @see {@link http://h5.m.taobao.com/trip/bridge/index.html#open_loading}
    * @see ![](data:image/gif;base64,R0lGODdhgACAAIAAAAAAAP///ywAAAAAgACAAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/o8CCIfEorFxrAyRQqbxmfxAp0TnUtlkXBfUbqhLtWYpW0U5AZ5+x5DtOQA2sw3ucR0weW/0Wvsc7oX2d3dAKMGXgSiHRzcYiPBmCMg4mfe35/dUmJl22af5cBeleCFatEnZWXUI1cZ52kjpYbpaGatqCepAKzn7WitJyvU7molaLNvBaxyLarEMzDyJvJba2oxtS0YMqw3tDPKdDQ7paJ1GTq42rsx9vggveB7H7n2t7TvfHWkeP/3IT1+0ZByEpbv16KAGg/UwEXSyiF65hxgY4mtHcRhBXP/ypHjSWE1VMGkj32WDJjGfSJIsTdpziTIhxpUwW6qzeZLmRxjUHCoEgmVgQWlAS+3bycolD4sx0SGsdexXxG7VckXVeTUgralQwyGdmHVl2I1Hu/4zG5Lo05sCubr9tC5I2bcvr9K1C/feiZ4TS+Ltaw5RyhRxkQnjK5hqTrQjCpc9PLfh2o6T5eoy/BXxxyhsLQYd6yrM04B0m3LGCDoUQL31NIusOjrzal0KXXMscfps6ciAM25VnVFl4OFtWysGWxmiidzMH6vV/emvchFMWYOMLfolZtpeg8vL7Y9mZ+fcPXrvDVmgRHFnwaOmDF1jL+M1i7f/6hO++/ik9bf/ZE9Cf/HtRlaBbP0VVwsC/obcddtc9txe/SwmoD+5uKbghNppaGFSGHb3IX9S+WcgfYmdF1SItmm4IHHTCScUhf+xSGOBJ0pYInrunLhdczHixiF2Y/FIno/zURfkfeodl5qSWkXYGHHprXfckQji956O593m40+VebaQlLI5NeBiYigF4mwdlqmll1qCmUgntbmY149n7pdWdhUm9x1vdzIZ5ZZ0yjejfVxZ2V1od/VZH4OHQmmeooyeOZ6hjCI6FJoX1TWpmcD9iWKWe3La24Gf1glnRc+1aCNOu2xmXYBiZrcmnsCxl2oET5JZK6C6Fglpfm/GaiKWhC6paT7S/6lKZoKdOhmsUZZKS2V5V+ppbFLLUjvbfj36OZOvrJr6qm9iSZaptzWS++Klagaqbo5+nXpstUuNaS+94UXrwpTvljsdpjzh+2+7DQrM7WvwXVsSgw1n+6B4C3/J23bk2honVhOL+KPFnrKprLbPdrmxswcTm7FVI1eZpMmV5mqwwR43OKe1MjKWspDoLnqyvOfSLOo91eF8pGksh6qykm7yzO7Ng20qrGOCKqw0s0yHiezS2EmNscy+Wq0z1O5ia/OvrSItctWbzsz20Qx/LW2Tu75tH8kcd/2g3IO2PRCrAGYpqYOVXrw3yiGb7XXdrtINc9qB96p4fQTinbHEYjqTqrXaJjderuU30hfatznmySWsmvrbt9tFrc56666/Dnvsss9Oe+2234577rrvznvvvv8OfPDCD18AADs=)
	   */
	  openLoadingView: function openLoadingView(params) {
	    params = params || {};
	    this.pushBack('bridge:', 'open_loading_view', params);
	  },
	
	  // 隐藏客户端的Loading
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
	   */
	  closeLoadingView: function closeLoadingView(callback) {
	    this.pushBack('bridge:', 'close_loading_view', {
	      commonCallback: callback
	    });
	  },
	  /**
	   * @callback Bridge~closeLoadingViewCallback
	   * @desc 隐藏客户端 Loading 框回调函数
	   */
	
	  // 分享
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
	   */
	  share: function share(data) {
	    this.pushBack('page:', 'goto', {
	      page_name: 'share',
	      data: data || {}
	    }, true);
	  },
	
	  /**
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
	   */
	  customShare: {
	
	    /**
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
	     */
	    prepare: function prepare(shareData, _successCallback2) {
	      this.superthat.pushBack('native:', 'share/preload_share', {
	        data: {
	          share_data: shareData
	        },
	        successCallback: function successCallback(ret) {
	          _successCallback2(ret.channels || []);
	        }
	      }, true);
	    },
	    /**
	     * 自定义分享准备阶段成功回调函数
	     *
	     * @callback Bridge#customShare~prepareSuccessCallback
	     */
	
	    /**
	     * 自定义分享第二步，执行分享
	     *
	     * @param channel {String} 待分享渠道 {`"weibo"`|"laiwang"|...}
	     * @param successCallback {Bridge#customShare~execSuccessCallback} 回调函数
	     */
	    exec: function exec(channel, successCallback) {
	      this.superthat.pushBack('native:', 'share/execute_share', {
	        data: {
	          channel: channel || 'sms'
	        },
	        successCallback: successCallback
	      }, true);
	    }
	
	    /**
	     * 自定义分享执行阶段成功回调函数
	     *
	     * @callback Bridge#customShare~execSuccessCallback
	     */
	
	  },
	
	  /**
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
	   */
	  saveImageToAlbum: function saveImageToAlbum(imageUrl, callback) {
	    if (this.platform != 'h5') {
	      imageUrl = getAbsoultePath(imageUrl);
	      var cbFn = function cbFn(result) {
	        return function () {
	          callback(result);
	        };
	      };
	      this.pushBack('bridge:', 'save_image_to_album', {
	        url: imageUrl,
	        successCallback: cbFn(true),
	        failCallback: cbFn(false)
	      });
	    }
	  },
	  /**
	   * @callback Bridge~saveImageToAlbumCallback
	   * @desc 保存图片到系统相册回调
	   * @param result {Boolean} 是否保存成功
	   */
	
	  //截屏分享
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
	   */
	  screenCaptureShare: function screenCaptureShare(params) {
	    var docElement = document.documentElement;
	    this.pushBack('bridge:', 'screenCapture_share', extend({
	      origin_x: 0,
	      origin_y: 0,
	      width: docElement.offsetWidth,
	      height: docElement.offsetHeight
	    }, params));
	  }
	};
	
	//extend
	function extend(oa, ob) {
	  for (var k in ob) {
	    if (ob.hasOwnProperty(k) && ob[k] !== undefined) {
	      oa[k] = ob[k];
	    }
	  }
	  return oa;
	}
	
	// 客户端回调生成器
	// - 客户端目前只能支持挂载到全局下的callback，为防止污染global环境，需要有callback生成机制。
	// - @param {function}fn 实际要执行的回调方法
	// - @param {boolean}isAlwaysAvailable 是否一直可用。因为在有些事件绑定机制下，生成的callback需要持久可用，不能销毁。
	// - @return {string} callback name，挂载到window上的。
	function buildCallback(fn, isAlwaysAvailable) {
	  var guid = buildRandom(),
	      callbackName = 'Bridge_Callbacks_' + (isAlwaysAvailable ? 'always_' : '') + guid;
	
	  window[callbackName] = (function (cb, callbackName) {
	    return function () {
	      cb.apply(this, arguments);
	      !isAlwaysAvailable && delete window[callbackName];
	    };
	  })(fn, callbackName);
	
	  return callbackName;
	}
	
	//唯一标志符生成器
	function buildRandom() {
	  var random = new Date().getTime() + '_' + parseInt(Math.random() * 1000000);
	  return random;
	}
	
	// 创建代理发起uri请求
	// - 基于平台基础协议，系统自动拦截请求并作出预置响应。比如：唤起客户端
	function buildProxy(uri, events) {
	  var guid = buildRandom();
	  var proxy = document.createElement('iframe');
	
	  proxy.id = 'J_MClientProxy_' + guid;
	  proxy.src = uri;
	  proxy.className = 'hidden mclient-proxy';
	  proxy.style.cssText = 'width:0;height:0;opacity:0;display:none;';
	
	  //绑定事件
	  if (events) {
	    for (var k in events) {
	      if (events.hasOwnProperty(k)) {
	        proxy[k] = events[k];
	      }
	    }
	  }
	
	  document.body.appendChild(proxy);
	  return proxy;
	}
	
	//获取绝对地址
	function getAbsoultePath(href) {
	  var link = document.createElement('a');
	  link.href = href;
	  return link.protocol + '//' + link.host + link.pathname + link.search + link.hash;
	}
	
	//处理钱包下桥可用
	function alipayCall(fn) {
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
	
	//判断是否ios9且safari
	function isIos9AndSafari(device) {
	  var result = false;
	  try {
	    result = device.type === 'ios' && device.version.split('.')[0] >= 9 && /safari/i.test(window.navigator.userAgent);
	  } catch (e) {}
	
	  return result;
	}
	
	// 提供全局Global桥
	/**
	 * @membeof Bridge.
	 * @property Global
	 * @type {Bridge}
	 */
	var GlobalBridge = new Bridge();
	Bridge.Global = GlobalBridge;
	
	// 监听domready事件
	document.addEventListener('DOMContentLoaded', function () {
	  GlobalBridge.closeLoadingView();
	}, false);
	
	// 保证错过domready事件后能够在onload时关闭
	window.addEventListener('load', function () {
	  GlobalBridge.closeLoadingView();
	}, false);
	
	// 检查如果已经是complete时直接关闭
	if (document.readyState === 'complete') {
	  GlobalBridge.closeLoadingView();
	}
	
	// 非 WindVane 容器环境，将 `window.WindVane` 置为 `null`
	if (!GlobalBridge.isWindVane) {
	  Object.defineProperty(window, 'WindVane', {
	    enumerable: true,
	    configurable: false,
	    writable: false,
	    value: null
	  });
	}
	
	// 挂载到 global
	window.Bridge = Bridge;
	
	// 兼容 KISSY
	if (window.KISSY && KISSY.add) {
	  KISSY.add('bridge/index', function () {
	    return Bridge;
	  });
	}
	
	module.exports = Bridge;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map
;/*
combined files : 

../jsbridge/build/index

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("q"), require("bridge"));
	else if(typeof define === 'function' && define.amd)
		define("jsbridge", ["q", "bridge"], factory);
	else if(typeof exports === 'object')
		exports["jsbridge"] = factory(require("q"), require("bridge"));
	else
		root["jsbridge"] = factory(root["q"], root["bridge"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
	 * @module JSBridge
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _q = __webpack_require__(1);
	
	var _q2 = _interopRequireDefault(_q);
	
	var _bridge = __webpack_require__(2);
	
	var _bridge2 = _interopRequireDefault(_bridge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	JSBridge.version = ("0.1.2");
	
	// KISSY KMD 兼容
	if (window.KISSY && KISSY.add) {
	  KISSY.add('jsbridge/index', function () {
	    return JSBridge;
	  });
	}
	
	exports.default = JSBridge;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map
;/*
combined files : 

../mtop/build/index

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("q"), require("jsbridge"), require("tracker"));
	else if(typeof define === 'function' && define.amd)
		define("mtop", ["q", "jsbridge", "tracker"], factory);
	else if(typeof exports === 'object')
		exports["mtop"] = factory(require("q"), require("jsbridge"), require("tracker"));
	else
		root["mtop"] = factory(root["q"], root["jsbridge"], root["tracker"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
	 * @description mpi/mtop
	 * @author meng.limeng@alibaba-inc.com
	 */
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _q = __webpack_require__(1);
	
	var _q2 = _interopRequireDefault(_q);
	
	var _jsbridge = __webpack_require__(2);
	
	var _jsbridge2 = _interopRequireDefault(_jsbridge);
	
	var _tracker = __webpack_require__(3);
	
	var _tracker2 = _interopRequireDefault(_tracker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  version: ("0.2.3")
	};
	
	//默认同步一次登陆态
	mtop.isLoginAsync();
	
	module.exports = mtop;
	
	if (window.KISSY && KISSY.add) {
	  KISSY.add('mtop/index', function () {
	    return mtop;
	  });
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	//pointman 2.0.0
	(function(global, undefined) {
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
	        return function(obj) {
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
	            (name === 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name]);
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
	    pointman.on = function(name, callback) {
	        var list = events[name] || (events[name] = []);
	        list.push(callback);
	        return pointman;
	    };
	
	    // Remove event. If `callback` is undefined, remove all callbacks for the
	    // event. If `event` and `callback` are both undefined, remove all callbacks
	    // for all events
	    pointman.off = function(name, callback) {
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
	
	        return (path.substring(last - 2) === '.js' ||
	            path.indexOf('?') > 0 ||
	            lastC === '/') ? path : path + '.js';
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
	            id = id.replace(VARS_RE, function(m, key) {
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
	
	                ret = isFunction(rule) ?
	                    (rule(uri) || uri) :
	                    uri.replace(rule[0], rule[1]);
	
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
	    var cwd = (!location.href || location.href.indexOf('about:') === 0) ? '' : dirname(location.href);
	    var scripts = doc.scripts;
	
	    // Recommend to add `pointmannode` id for the `sea.js` script element
	    var loaderScript = doc.getElementById('pointmannode') ||
	        scripts[scripts.length - 1];
	
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
	        baseElement ?
	            head.insertBefore(node, baseElement) :
	            head.appendChild(node);
	
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
	            node.onerror = function() {
	                onload();
	            };
	        } else {
	            node.onreadystatechange = function() {
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
	
	        code.replace(SLASH_RE, '')
	            .replace(REQUIRE_RE, function(m, m1, m2) {
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
	    Module.prototype.resolve = function() {
	        var mod = this;
	        var ids = mod.dependencies;
	        var uris = [];
	
	        for (var i = 0, len = ids.length; i < len; i++) {
	            uris[i] = Module.resolve(ids[i], mod.uri);
	        }
	        return uris;
	    };
	
	    // Load module.dependencies and fire onload when all done
	    Module.prototype.load = function() {
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
	    Module.prototype.onload = function() {
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
	    Module.prototype.fetch = function(requestCache) {
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
	            requestCache ?
	                requestCache[emitData.requestUri] = sendRequest :
	                sendRequest();
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
	            var m, mods = callbackList[requestUri];
	            delete callbackList[requestUri];
	            while ((m = mods.shift())) {
	                m.load();
	            }
	        }
	    };
	
	    // Execute a module
	    Module.prototype.exec = function() {
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
	
	        require.resolve = function(id) {
	            return Module.resolve(id, uri);
	        };
	
	        require.async = function(ids, callback) {
	            Module.use(ids, callback, uri + '_async_' + cid());
	            return require;
	        };
	
	        // Exec factory
	        var factory = mod.factory;
	
	        var exports = isFunction(factory) ?
	            factory(require, mod.exports = {}, mod) :
	            factory;
	
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
	    Module.resolve = function(id, refUri) {
	        // Emit `resolve` event for plugins such as text plugin
	        var emitData = {
	            id: id,
	            refUri: refUri
	        };
	        return emitData.uri || pointman.resolve(emitData.id, refUri);
	    };
	
	    // Define a module
	    Module.define = function(id, deps, factory) {
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
	    Module.save = function(uri, meta) {
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
	    Module.get = function(uri, deps) {
	        return cachedMods[uri] || (cachedMods[uri] = new Module(uri, deps));
	    };
	
	    // Use function is equal to load a anonymous module
	    Module.use = function(ids, callback, uri) {
	        var mod = Module.get(uri, isArray(ids) ? ids : [ids]);
	
	        mod.callback = function() {
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
	
	    pointman.use = function(ids, callback) {
	        Module.use(ids, callback, data.cwd + '_use_' + cid());
	        return pointman;
	    };
	
	    Module.define.cmd = {};
	    pointman.define = Module.define;
	
	    // For Developers
	
	    pointman.Module = Module;
	    data.fetchedList = fetchedList;
	    data.cid = cid;
	
	    pointman.require = function(id) {
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
	
	    pointman.config = function(configData) {
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
	                window.addEventListener('load', function(ev) {
	                    pointman.use(freeItem, function() {
	                        autoInitMod(freeItem, arguments);
	                    });
	                }, false);
	            } else {
	                window.attachEvent('load', function(ev) {
	                    pointman.use(freeItem, function() {
	                        autoInitMod(freeItem, arguments);
	                    });
	                });
	            }
	        }
	    };
	})(this);
	
	(function() {
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
	
	pointman.define('mod/emit', function(require, exports, module) {
	    'use strict';
	    var emit = {};
	    var events = {};
	
	    // Bind event
	    emit.on = function(name, callback) {
	        var list = events[name] || (events[name] = []);
	        list.push(callback);
	        return emit;
	    };
	
	    // Remove event. If `callback` is undefined, remove all callbacks for the
	    // event. If `event` and `callback` are both undefined, remove all callbacks
	    // for all events
	    emit.off = function(name, callback) {
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
	    emit.fire = function(name, data) {
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
	
	pointman.define('mod/messenger', function(require, exports, module) {
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
	        postMessage: function(target, jsonStr) {
	            var uid = ++IE.uid;
	            var q = IE.q;
	            var item = {
	                name: (+new Date()) + '' + uid + '^' + document.domain + '&' + jsonStr,
	                uid: uid,
	                target: target
	            };
	            q.push(item);
	            if (!IE.tm) {
	                IE.tm = setInterval(function() {
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
	        ListenerMessage: function(win, handler) {
	            var lastName = '';
	            var reName = /^(\d+?)\^(.+?)&(.*?)$/;
	
	            function onNameChanged() {
	                if(!win){
	                    return false;
	                }else{
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
	        initListener: function(obj){
	            //当前窗口
	            currentWin = obj.currentWin;
	            //消息来源窗口
	            originWin = obj.originWin;
	            //消息传递形式
	            msgTransfer = obj.msgTransfer;
	
	            if(currentWin && originWin && msgTransfer){
	                //在当前窗口上监听postmessage事件
	                if(currentWin.postMessage){
	                    if (currentWin.addEventListener) {
	                        currentWin.addEventListener('message', messageHandler, false);
	                    } else if (currentWin.attachEvent) {
	                        currentWin.attachEvent('onmessage', messageHandler);
	                    }
	                }else {
	                    //始终确保在iframe上监听window.name变化
	                    if(msgTransfer == 'fromFrame'){
	                        //在父窗口中监听iframe发来的消息
	                        IE.ListenerMessage(originWin, messageHandler);
	                    }else{
	                        //在iframe中监听父窗口发送的消息
	                        IE.ListenerMessage(currentWin, messageHandler);
	                    }
	                }
	            }
	        },
	        //注册消息
	        register: function(event, callback) {
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
	        send: function(obj) {
	            //发给目标窗口的数据
	            var postData = obj.type + msgSpliter + obj.content;
	
	            if(currentWin && originWin && msgTransfer){
	                if(originWin.postMessage){
	                    /*
	                     * initListener方法注册的是监听函数
	                     * 而发送消息与监听消息刚好相反，所以这里需要往originWin发送消息
	                     * 支持postmessage时往目标窗口发送消息
	                     */
	                    originWin.postMessage(postData, '*');
	                }else{
	                    //始终确保写iframe的window.name
	                    if(msgTransfer == 'fromFrame'){
	                        //在父窗口中监听iframe发来的消息
	                        IE.postMessage(originWin, postData);
	                    }else{
	                        //在iframe中监听父窗口发送的消息
	                        IE.postMessage(currentWin, postData, '*');
	                    }
	                }
	            }
	        }
	    };
	});
	
	pointman.define('mod/sufei-kissymini-mtop', function(require, exports, module) {
	    'use strict';
	    var emit = require('mod/emit');
	    var $ = null;
	
	    function isType(type) {
	        return function(obj) {
	            return {}.toString.call(obj) == '[object ' + type + ']';
	        };
	    }
	    var isObject = isType('Object');
	    var isString = isType('String');
	
	    var sufeiMtop = function() {
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
	        init: function(){
	            var self = this;
	
	            //事件：验证通过后重发送请求（mtop中重新发送请求由mtop来处理）
	            emit.on('event:resendRequest@sufei', function(data){
	                // KISSY.one(document).fire('sufei:validateDone', [data]);
	                dispatchEvent(document, 'sufei:validateDone', [data]);
	            });
	
	            //监听消息
	            document.addEventListener('sufei:validateData', function(data){
	            // KISSY.one(document).on('sufei:validateData', function(data){
	                var result = data[0];
	                if(result && isObject(result) && (typeof result.ret !== 'undefined') && result.ret.join('') == 'RGV587_ERROR::SM'){
	                    emit.fire('event:showDialog@sufei', result.data.url);
	                }else{
	                    //不需要校验
	                    // KISSY.one(document).fire('sufei:noNeedToValidate', data);
	                    dispatchEvent(document, 'sufei:noNeedToValidate', data);
	                }
	            });
	        }
	    };
	
	    module.exports = sufeiMtop;
	});
	
	pointman.define('sufei', function(require, exports, module) {
	    'use strict';
	    //var SubMod = require('mod/sufei-seajs-jquery');
	    var SubMod = require('mod/sufei-kissymini-mtop');
	    var messenger = require('mod/messenger');
	    //消息模块是否初始化
	    var messengerHasInit = false;
	    var emit = require('mod/emit');
	    var doc = document;
	    var head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;
	
	    var Sufei = function() {
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
	        init: function() {
	            var self = this;
	            var configData = module.config;
	
	            self.config.app = configData.app || '';
	            self.config.version = configData.version || '';
	            self.config.sufeiStyle = configData.style || '';
	
	            //事件：显示验证对话框
	            emit.on('event:showDialog@sufei', function(url) {
	                if(!self.cache.dialog){
	                    url += (/\?/.test(url)) ? '&' : '?';
	                    if(/tpl_redirect_url=http(s)?\:\/\/sec\.(([\w\d])*?\.)?taobao\.com\/query\.htm/.test(decodeURIComponent(url))){
	                        url = url.replace('query.htm%3F', 'query.htm%3Fsufeiversion%3D' + self.config.version + '%26app%3D' + self.config.app +'%26');
	                    }else{
	                        url += 'sufeiversion=' + self.config.version + '&app=' + self.config.app;
	                    }
	                    //TODO 解决css版本问题
	                    self.loadCss(self.config.sufeiStyle, function() {
	                        self.createDialog(url);
	                    });
	                }else{
	                    self.changeDialogStates({state:'visible'});
	                }
	            });
	
	            new SubMod().init();
	        },
	
	        //加载CSS
	        loadCss: function(url, callback) {
	            var node = doc.createElement('link');
	            node.chaarset = 'utf-8';
	            node.rel = 'stylesheet';
	            node.href = url;
	
	            if ('onload' in node) {
	                node.onload = function() {
	                    callback && callback();
	                };
	            } else {
	                node.onreadystatechange = function() {
	                    if (/loaded|complete/.test(node.readyState)) {
	                        callback && callback();
	                    }
	                };
	            }
	
	            head.appendChild(node);
	        },
	
	        //是否是ie6、7
	        isOldBrower: function() {
	            var b = doc.createElement('b');
	            b.innerHTML = '<!--[if lte IE 7]><i></i><![endif]-->';
	            return b.getElementsByTagName('i').length === 1;
	        },
	
	        //创建dialog
	        createDialog: function(url) {
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
	            messenger.register('msg:validateSuccess@sufei', function(data) {
	                //重新发送请求
	                emit.fire('event:resendRequest@sufei', data);
	                //隐藏dialog
	                self.changeDialogStates({state: 'hidden'});
	                //消息: 重置验证码
	                messenger.send({
	                    type: 'msg:resetCheckCode@sufei',
	                    content: ''
	                });
	            });
	
	            //绑定关闭事件
	            if(closeElement.addEventListener){
	                closeElement.addEventListener('click', function(){
	                    self.changeDialogStates({state: 'hidden'});
	                }, false);
	            }else{
	                closeElement.attachEvent('onclick', function(){
	                    self.changeDialogStates({state: 'hidden'});
	                    return false;
	                });
	            }
	
	            self.cache.dialog = dialog;
	        },
	
	        /*
	         * 改变dialog显示状态
	         * @param {string} obj.state hidden|visible
	         */
	        changeDialogStates: function(obj){
	            if(obj.state === 'hidden'){
	                //清空拦截队列
	                emit.fire('event:cleanHijackQueue@sufei', {});
	                //隐藏dialog
	                this.cache.dialog.style.display = 'none';
	            }else{
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
	        init: function(config){
	            sufeiMod.init(config);
	        }
	    };
	});
	
	pointman.use('sufei', function(sufei){sufei.init()});
	}.call(window));

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map
;/*
combined files : 

../tracker/build/index

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tracker", [], factory);
	else if(typeof exports === 'object')
		exports["tracker"] = factory();
	else
		root["tracker"] = factory();
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	        version: ("0.5.1"),
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map
;/*
combined files : 

../mtop/build/index

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("q"), require("jsbridge"), require("tracker"));
	else if(typeof define === 'function' && define.amd)
		define("mtop", ["q", "jsbridge", "tracker"], factory);
	else if(typeof exports === 'object')
		exports["mtop"] = factory(require("q"), require("jsbridge"), require("tracker"));
	else
		root["mtop"] = factory(root["q"], root["jsbridge"], root["tracker"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
	 * @description mpi/mtop
	 * @author meng.limeng@alibaba-inc.com
	 */
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _q = __webpack_require__(1);
	
	var _q2 = _interopRequireDefault(_q);
	
	var _jsbridge = __webpack_require__(2);
	
	var _jsbridge2 = _interopRequireDefault(_jsbridge);
	
	var _tracker = __webpack_require__(3);
	
	var _tracker2 = _interopRequireDefault(_tracker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  version: ("0.2.3")
	};
	
	//默认同步一次登陆态
	mtop.isLoginAsync();
	
	module.exports = mtop;
	
	if (window.KISSY && KISSY.add) {
	  KISSY.add('mtop/index', function () {
	    return mtop;
	  });
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	//pointman 2.0.0
	(function(global, undefined) {
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
	        return function(obj) {
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
	            (name === 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name]);
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
	    pointman.on = function(name, callback) {
	        var list = events[name] || (events[name] = []);
	        list.push(callback);
	        return pointman;
	    };
	
	    // Remove event. If `callback` is undefined, remove all callbacks for the
	    // event. If `event` and `callback` are both undefined, remove all callbacks
	    // for all events
	    pointman.off = function(name, callback) {
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
	
	        return (path.substring(last - 2) === '.js' ||
	            path.indexOf('?') > 0 ||
	            lastC === '/') ? path : path + '.js';
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
	            id = id.replace(VARS_RE, function(m, key) {
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
	
	                ret = isFunction(rule) ?
	                    (rule(uri) || uri) :
	                    uri.replace(rule[0], rule[1]);
	
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
	    var cwd = (!location.href || location.href.indexOf('about:') === 0) ? '' : dirname(location.href);
	    var scripts = doc.scripts;
	
	    // Recommend to add `pointmannode` id for the `sea.js` script element
	    var loaderScript = doc.getElementById('pointmannode') ||
	        scripts[scripts.length - 1];
	
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
	        baseElement ?
	            head.insertBefore(node, baseElement) :
	            head.appendChild(node);
	
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
	            node.onerror = function() {
	                onload();
	            };
	        } else {
	            node.onreadystatechange = function() {
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
	
	        code.replace(SLASH_RE, '')
	            .replace(REQUIRE_RE, function(m, m1, m2) {
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
	    Module.prototype.resolve = function() {
	        var mod = this;
	        var ids = mod.dependencies;
	        var uris = [];
	
	        for (var i = 0, len = ids.length; i < len; i++) {
	            uris[i] = Module.resolve(ids[i], mod.uri);
	        }
	        return uris;
	    };
	
	    // Load module.dependencies and fire onload when all done
	    Module.prototype.load = function() {
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
	    Module.prototype.onload = function() {
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
	    Module.prototype.fetch = function(requestCache) {
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
	            requestCache ?
	                requestCache[emitData.requestUri] = sendRequest :
	                sendRequest();
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
	            var m, mods = callbackList[requestUri];
	            delete callbackList[requestUri];
	            while ((m = mods.shift())) {
	                m.load();
	            }
	        }
	    };
	
	    // Execute a module
	    Module.prototype.exec = function() {
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
	
	        require.resolve = function(id) {
	            return Module.resolve(id, uri);
	        };
	
	        require.async = function(ids, callback) {
	            Module.use(ids, callback, uri + '_async_' + cid());
	            return require;
	        };
	
	        // Exec factory
	        var factory = mod.factory;
	
	        var exports = isFunction(factory) ?
	            factory(require, mod.exports = {}, mod) :
	            factory;
	
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
	    Module.resolve = function(id, refUri) {
	        // Emit `resolve` event for plugins such as text plugin
	        var emitData = {
	            id: id,
	            refUri: refUri
	        };
	        return emitData.uri || pointman.resolve(emitData.id, refUri);
	    };
	
	    // Define a module
	    Module.define = function(id, deps, factory) {
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
	    Module.save = function(uri, meta) {
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
	    Module.get = function(uri, deps) {
	        return cachedMods[uri] || (cachedMods[uri] = new Module(uri, deps));
	    };
	
	    // Use function is equal to load a anonymous module
	    Module.use = function(ids, callback, uri) {
	        var mod = Module.get(uri, isArray(ids) ? ids : [ids]);
	
	        mod.callback = function() {
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
	
	    pointman.use = function(ids, callback) {
	        Module.use(ids, callback, data.cwd + '_use_' + cid());
	        return pointman;
	    };
	
	    Module.define.cmd = {};
	    pointman.define = Module.define;
	
	    // For Developers
	
	    pointman.Module = Module;
	    data.fetchedList = fetchedList;
	    data.cid = cid;
	
	    pointman.require = function(id) {
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
	
	    pointman.config = function(configData) {
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
	                window.addEventListener('load', function(ev) {
	                    pointman.use(freeItem, function() {
	                        autoInitMod(freeItem, arguments);
	                    });
	                }, false);
	            } else {
	                window.attachEvent('load', function(ev) {
	                    pointman.use(freeItem, function() {
	                        autoInitMod(freeItem, arguments);
	                    });
	                });
	            }
	        }
	    };
	})(this);
	
	(function() {
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
	
	pointman.define('mod/emit', function(require, exports, module) {
	    'use strict';
	    var emit = {};
	    var events = {};
	
	    // Bind event
	    emit.on = function(name, callback) {
	        var list = events[name] || (events[name] = []);
	        list.push(callback);
	        return emit;
	    };
	
	    // Remove event. If `callback` is undefined, remove all callbacks for the
	    // event. If `event` and `callback` are both undefined, remove all callbacks
	    // for all events
	    emit.off = function(name, callback) {
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
	    emit.fire = function(name, data) {
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
	
	pointman.define('mod/messenger', function(require, exports, module) {
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
	        postMessage: function(target, jsonStr) {
	            var uid = ++IE.uid;
	            var q = IE.q;
	            var item = {
	                name: (+new Date()) + '' + uid + '^' + document.domain + '&' + jsonStr,
	                uid: uid,
	                target: target
	            };
	            q.push(item);
	            if (!IE.tm) {
	                IE.tm = setInterval(function() {
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
	        ListenerMessage: function(win, handler) {
	            var lastName = '';
	            var reName = /^(\d+?)\^(.+?)&(.*?)$/;
	
	            function onNameChanged() {
	                if(!win){
	                    return false;
	                }else{
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
	        initListener: function(obj){
	            //当前窗口
	            currentWin = obj.currentWin;
	            //消息来源窗口
	            originWin = obj.originWin;
	            //消息传递形式
	            msgTransfer = obj.msgTransfer;
	
	            if(currentWin && originWin && msgTransfer){
	                //在当前窗口上监听postmessage事件
	                if(currentWin.postMessage){
	                    if (currentWin.addEventListener) {
	                        currentWin.addEventListener('message', messageHandler, false);
	                    } else if (currentWin.attachEvent) {
	                        currentWin.attachEvent('onmessage', messageHandler);
	                    }
	                }else {
	                    //始终确保在iframe上监听window.name变化
	                    if(msgTransfer == 'fromFrame'){
	                        //在父窗口中监听iframe发来的消息
	                        IE.ListenerMessage(originWin, messageHandler);
	                    }else{
	                        //在iframe中监听父窗口发送的消息
	                        IE.ListenerMessage(currentWin, messageHandler);
	                    }
	                }
	            }
	        },
	        //注册消息
	        register: function(event, callback) {
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
	        send: function(obj) {
	            //发给目标窗口的数据
	            var postData = obj.type + msgSpliter + obj.content;
	
	            if(currentWin && originWin && msgTransfer){
	                if(originWin.postMessage){
	                    /*
	                     * initListener方法注册的是监听函数
	                     * 而发送消息与监听消息刚好相反，所以这里需要往originWin发送消息
	                     * 支持postmessage时往目标窗口发送消息
	                     */
	                    originWin.postMessage(postData, '*');
	                }else{
	                    //始终确保写iframe的window.name
	                    if(msgTransfer == 'fromFrame'){
	                        //在父窗口中监听iframe发来的消息
	                        IE.postMessage(originWin, postData);
	                    }else{
	                        //在iframe中监听父窗口发送的消息
	                        IE.postMessage(currentWin, postData, '*');
	                    }
	                }
	            }
	        }
	    };
	});
	
	pointman.define('mod/sufei-kissymini-mtop', function(require, exports, module) {
	    'use strict';
	    var emit = require('mod/emit');
	    var $ = null;
	
	    function isType(type) {
	        return function(obj) {
	            return {}.toString.call(obj) == '[object ' + type + ']';
	        };
	    }
	    var isObject = isType('Object');
	    var isString = isType('String');
	
	    var sufeiMtop = function() {
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
	        init: function(){
	            var self = this;
	
	            //事件：验证通过后重发送请求（mtop中重新发送请求由mtop来处理）
	            emit.on('event:resendRequest@sufei', function(data){
	                // KISSY.one(document).fire('sufei:validateDone', [data]);
	                dispatchEvent(document, 'sufei:validateDone', [data]);
	            });
	
	            //监听消息
	            document.addEventListener('sufei:validateData', function(data){
	            // KISSY.one(document).on('sufei:validateData', function(data){
	                var result = data[0];
	                if(result && isObject(result) && (typeof result.ret !== 'undefined') && result.ret.join('') == 'RGV587_ERROR::SM'){
	                    emit.fire('event:showDialog@sufei', result.data.url);
	                }else{
	                    //不需要校验
	                    // KISSY.one(document).fire('sufei:noNeedToValidate', data);
	                    dispatchEvent(document, 'sufei:noNeedToValidate', data);
	                }
	            });
	        }
	    };
	
	    module.exports = sufeiMtop;
	});
	
	pointman.define('sufei', function(require, exports, module) {
	    'use strict';
	    //var SubMod = require('mod/sufei-seajs-jquery');
	    var SubMod = require('mod/sufei-kissymini-mtop');
	    var messenger = require('mod/messenger');
	    //消息模块是否初始化
	    var messengerHasInit = false;
	    var emit = require('mod/emit');
	    var doc = document;
	    var head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;
	
	    var Sufei = function() {
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
	        init: function() {
	            var self = this;
	            var configData = module.config;
	
	            self.config.app = configData.app || '';
	            self.config.version = configData.version || '';
	            self.config.sufeiStyle = configData.style || '';
	
	            //事件：显示验证对话框
	            emit.on('event:showDialog@sufei', function(url) {
	                if(!self.cache.dialog){
	                    url += (/\?/.test(url)) ? '&' : '?';
	                    if(/tpl_redirect_url=http(s)?\:\/\/sec\.(([\w\d])*?\.)?taobao\.com\/query\.htm/.test(decodeURIComponent(url))){
	                        url = url.replace('query.htm%3F', 'query.htm%3Fsufeiversion%3D' + self.config.version + '%26app%3D' + self.config.app +'%26');
	                    }else{
	                        url += 'sufeiversion=' + self.config.version + '&app=' + self.config.app;
	                    }
	                    //TODO 解决css版本问题
	                    self.loadCss(self.config.sufeiStyle, function() {
	                        self.createDialog(url);
	                    });
	                }else{
	                    self.changeDialogStates({state:'visible'});
	                }
	            });
	
	            new SubMod().init();
	        },
	
	        //加载CSS
	        loadCss: function(url, callback) {
	            var node = doc.createElement('link');
	            node.chaarset = 'utf-8';
	            node.rel = 'stylesheet';
	            node.href = url;
	
	            if ('onload' in node) {
	                node.onload = function() {
	                    callback && callback();
	                };
	            } else {
	                node.onreadystatechange = function() {
	                    if (/loaded|complete/.test(node.readyState)) {
	                        callback && callback();
	                    }
	                };
	            }
	
	            head.appendChild(node);
	        },
	
	        //是否是ie6、7
	        isOldBrower: function() {
	            var b = doc.createElement('b');
	            b.innerHTML = '<!--[if lte IE 7]><i></i><![endif]-->';
	            return b.getElementsByTagName('i').length === 1;
	        },
	
	        //创建dialog
	        createDialog: function(url) {
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
	            messenger.register('msg:validateSuccess@sufei', function(data) {
	                //重新发送请求
	                emit.fire('event:resendRequest@sufei', data);
	                //隐藏dialog
	                self.changeDialogStates({state: 'hidden'});
	                //消息: 重置验证码
	                messenger.send({
	                    type: 'msg:resetCheckCode@sufei',
	                    content: ''
	                });
	            });
	
	            //绑定关闭事件
	            if(closeElement.addEventListener){
	                closeElement.addEventListener('click', function(){
	                    self.changeDialogStates({state: 'hidden'});
	                }, false);
	            }else{
	                closeElement.attachEvent('onclick', function(){
	                    self.changeDialogStates({state: 'hidden'});
	                    return false;
	                });
	            }
	
	            self.cache.dialog = dialog;
	        },
	
	        /*
	         * 改变dialog显示状态
	         * @param {string} obj.state hidden|visible
	         */
	        changeDialogStates: function(obj){
	            if(obj.state === 'hidden'){
	                //清空拦截队列
	                emit.fire('event:cleanHijackQueue@sufei', {});
	                //隐藏dialog
	                this.cache.dialog.style.display = 'none';
	            }else{
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
	        init: function(config){
	            sufeiMod.init(config);
	        }
	    };
	});
	
	pointman.use('sufei', function(sufei){sufei.init()});
	}.call(window));

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map
;/**
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
})(window, document, location);;/**
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

;/**
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
;/**
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
;/**
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
;/**
 * 离线包TMS区块解析器
 */

!(function() {
    
    var head = document.querySelector('head'),
        htmlEntities = {
            '&amp;': '&',
            '&gt;': '>',
            '&lt;': '<',
            '&#x60;': '`',
            '&#x2F;': '/',
            '&quot;': '"',
            /*jshint quotmark:false*/
            '&#x27;': "'"
        },
        reverseEntities = {},
        unEscapeReg;
    
    (function () {
        for (var k in htmlEntities) {
            reverseEntities[htmlEntities[k]] = k;
        }
    })();
    
    //获得反转义正则    
    function getUnEscapeReg() {
        if (unEscapeReg) {
            return unEscapeReg;
        }
        var str = '';
        for (var k in reverseEntities) {
            str += reverseEntities[k] + '|';
        }
        str += '&#(\\d{1,5});';
        unEscapeReg = new RegExp(str, 'g');
        return unEscapeReg;
    }
    
    //反转义HTML
    function unEscapeHtml(str) {
        return str.replace(getUnEscapeReg(), function (m, n) {
            return htmlEntities[m] || String.fromCharCode(+n);
        });
    }
    
    //异步获取脚本
    function getScript(src, fn, charset) {
        var s = document.createElement('script'),
            parent = head,
            before = null;
        
        //如果传进来的是脚本节点
        if (src && src.nodeName && src.nodeName.toLowerCase() === 'script') {
            [].forEach.call(src.attributes, function(attr) {
                if (attr.specified) {
                    s.setAttribute(attr.nodeName, attr.nodeValue || attr.value);
                }
            });
            s.src = src.src;
            parent = fn;
            fn = arguments[3];
            before = charset && charset.nextSibling;
        } else {
            s.setAttribute('charset', charset || 'utf-8');
            s.src = src;
            s.async = true;
        }
        
        s.onload = s.onerror = function() {
            s.onload = s.onerror = null;
            fn && fn();
        };
        
        if (before) {
            parent.insertBefore(s, before);
        } else {
            parent.appendChild(s);
        }
    }
    
    /**
     * 判断是否时script节点
     * @method isScript
     * @param {HTMLElement} node 节点
     * @return {Boolean}
     */
    function isScript(node) {
        if (node.nodeName && node.nodeName === 'SCRIPT' && 
            (!node.type || node.type === 'text/javascript')) {
            return true;
        }
        return false;
    }
    
    /**
     * 插入TMS区块内容
     * @method insertTMS
     * @param {Function} c TMS内容
     * @param {HTMLElement} s script节点
     */
    function insertTMS(c, id) {
        var frag = document.createDocumentFragment(),
            con = document.createElement('div'),
            s = getCurrentScript(id),
            parent = (s && s.parentNode) || document.body || document.querySelector('head'),
            
            //将content转成字符串，过滤掉头尾，得到TMS区块内容
            //ios会将function(){/**/}替换成function () {/**/;}
            content = c.toString().trim().replace(/^function\s*\(\s*\)\s*\{\/\*|\*\/.*\}$/mg, ''),
            scripts = [],
            i = 0, l,
            node;
        
        //反转义HTML
        //插入临时容器
        con.innerHTML = unEscapeHtml(content);
        l = con.childNodes.length;
        
        while (i++ < l) {
            node = con.childNodes[0];
            
            //过滤脚本
            if (isScript(node)) {
                scripts.push([node, parent, node.nextSibling]);
                con.removeChild(node);
            } else {
                
                //文本节点没有该方法
                if (node.getElementsByTagName) {
                    //过滤子节点中的脚本
                    [].forEach.call(node.getElementsByTagName('script'), function(script) {
                        if (isScript(script)) {
                            scripts.push([script, script.parentNode, script.nextSibling]);
                            script.parentNode.removeChild(script);
                        }
                    });
                }
                
                frag.appendChild(node);
            }
        }
        
        if (s && s.parentNode) {
            s.parentNode.insertBefore(frag, s);
            s.parentNode.removeChild(s);
        } else {
            parent.appendChild(frag);
        }
        
        //执行脚本
        if (scripts.length) {
            scripts.forEach(function(arr) {
                script = arr[0];
                if (script.src) {
                    getScript(script, arr[1], arr[2]);
                } else {
                    try {
                        window['eval'].call(window, script.innerHTML);
                    } catch (err) {
                        setTimeout(function () {
                            throw err;
                        }, 0);
                    }
                }
            });
            scripts = null;
        }
    }
    
    /**
     * 获取当前执行的脚本节点
     * @method getCurrentScript
     * @param {String} id 当前脚本节点id
     * @return {HTMLElement} script 当前脚本节点
     */
    function getCurrentScript(id) {
        var scripts = document.scripts,
            len = scripts.length,
            l = len - 1,
            script, text, path, s;
        
        //如果是通过get_tms_fragment的方式插入，则可以通过获取id去查找
        //有可能脚本随着页面模块被innerHTML等方法插入页面，那么有可能找不到当前id，那么通过分析源码来判断哪个是当前脚本节点
        if (id) {
            script = document.getElementById(id);
            if (!script) {
                for (; l >= 0; l--) {
                    s = scripts[l];
                    text = s.innerHTML.trim();
                    if (/get_tms_fragment/.test(text) && new RegExp('"' + id + '"', 'igm').test(text)) {
                        script = s;
                        break;
                    }
                }
            }
        } else {
            
            //如果支持当前脚本属性
            //Chrome 29+和FireFox 4+
            //Safari不支持
            if (document.currentScript) {
                return document.currentScript;
            }
            
            //如果是通过handle_tms_fragment的方式获取TMS区块
            //那么可以用hack的形式获取到当前报错的脚本地址，然后再来查找当前脚本节点
            try {
                currentScriptDetect();
            } catch(e) {
                path = e.stack.match(/http\:\/\/trip\.taobao\.com\/market\/trip\/h5_offline_service\.php.*\.php/mg);
                if (path && (path = path[0])) {
                    for (; l >= 0; l--) {
                        s = scripts[l];
                        if (s.src === path) {
                            script = s;
                            break;
                        }
                    }
                }
            }
        }
        
        return script;
    }
    
    /**
     * 处理同步TMS区块内容
     * @method handle_tms_fragment
     * @param {Function} content
     */
    window.handle_tms_fragment = function(content, id) {
        var scripts = document.scripts,
            s = scripts[scripts.length - 1];
        
        if (typeof id !== 'undefined') {
            id = 'tms_fragment_' + id;
        }
            
        insertTMS(content, id);
    };
    
    /**
     * 异步获取TMS区块内容
     * @method get_tms_fragment
     * @param {String} src TMS区块地址
     * @param {String} charset 字符编码
     * @param {String} id jsonp序号
     */
    window.get_tms_fragment = function(src, charset, id) {
        var key = 'handle_async_' + id;
        
        //添加callback
        src += (src.match(/\?/) ? '&' : '?') + 'callback=' + key;
        
        //设置回调函数
        window[key] = function(content) {
            insertTMS(content, id);
            delete window[key];
        };
        
        //异步获取TMS内容
        getScript(src, null, charset);
    };
    
    //执行之前的同步缓存数据
    if (window.sync_tms_fragment_cache && sync_tms_fragment_cache.length) {
        sync_tms_fragment_cache.forEach(function(args) {
            handle_tms_fragment.apply(window, args);
        });
    }
    
    //执行之前的异步缓存数据 
    if (window.async_tms_fragment_cache && async_tms_fragment_cache.length) {
        async_tms_fragment_cache.forEach(function(args) {
            get_tms_fragment.apply(window, args);
        });
    }
    
})();