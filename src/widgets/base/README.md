# Base
作者: 孝瓘
## 功能
航旅H5开发基础包

## 使用

### qa-seed.js
* 集合了以下几个模块，* 集合了以下几个模块
	* `kissy-mini-all` （集合`m/anim`、`m/touch`、`m/lang`、`m/base`、`m/ua`、`m/uri`、`m/juicer`、`m/form`）
	* `mpi/q`
	* `mpi/bridge`
	* `mpi/jsbridge`
	* `mpi/mtop`
	* `mpi/tracker`

* 引入，需要手动显示加载，如下：

```
<script src="../../widgets/base/qa-seed.js?nocombo=true"></script>
```
* 使用，直接依赖模块名，如下

```
KISSY.add(function (S, q, jsbridge, mtop, juicer) {
	console.log(arguments);

}, {requires : [
        'q',
        'jsbridge',
        'mtop',
        'juicer'
    ]
});
```


### qa-seed-wlog-tmsparse.js
* 集合了以下几个模块，主要用于H5离线包，通过配置build任务自动构建到offline文件
	* `qa-seed.js`
	* `mpi/wlog` 下三个打点文件：
		* `aplus_wap.js`
		* `spm_wap.js`
		* `spmact_wap.js`
	* `mpi/tms-offline-parser`

* 引入与使用
	* 通过构建工具自动完成对离线包的构建，不需要手动干预。
	* 构建配置

	```
	replace:{
		offline: {
        	options: {
        		//完成离线包依赖的自动替换
        		patterns: [{
					match: /<head>/,
					replacement: [
						'<head>\n',
						'<meta name="aplus-offline" content="1">\n',
						'<script>window._$isOffline$_=true;</script>\n',
						'<script src="../../widgets/base/qa-seed-wlog-tmsparser.js?nocombo=true"></script>'
					].join('')
				},{
					match: /<script.*?base\/qa-seed\.js.*?script>/i,
					replacement: ''
				}]
			}
		}
	}
	```

## ES2015(ES6)

### 使用

#### React

```
import {MTop, Bridge, Q, JSBridge, Tracker, React, ReactDOM} from 'base';
...
```

#### Vue

```
import {MTop, Bridge, Q, JSBridge, Tracker, Vue} from 'base';
...
```

### 开发

- 入口 js: `seed.js`
- 使用 webpack + babel, 按需 `require` 构建
- 本地开发: `grunt dev`, 访问 demo/seed-*.html
- 构建: `grunt es6`
- 构建生成脚本:
    - seed-wv.js: seed(Zepto, mtop, bridge, jsbridge, q, tracker) + windvane.js
        - For 线上活动页
    - seed-wlog-wv.js: seed(Zepto, mtop, bridge, jsbridge, q, tracker) + wlog + windvane.js
        - For 线上 H5 项目页
    - seed-react-wv.js: seed + react + windvane.js
        - For 线上活动页
    - seed-vue-wv.js: seed + vue + windvane.js
        - For 线上活动页
    - seed-react-wlog-wv.js: seed + react + wlog + windvane.js
        - For 线上活动页
    - seed-vue-wlog-wv.js: seed + vue + wlog + windvane.js
        - For 线上活动页
    - seed-react-wlog-wv-tmsparser.js: seed + react + wlog + windvane.js + tms-offline-parser
        - For 手淘离线
    - seed-vue-wlog-wv-tmsparser.js: seed + vue + wlog + windvane.js + tms-offline-parser
        - For 手淘离线
    - seed-react-wlog-tmsparser.js: seed + react + wlog + windvane.js + tms-offline-parser
        - For 去啊 / 钱包(非 WindVane 环境)离线
    - seed-vue-wlog-tmsparser.js: seed + vue + wlog + windvane.js + tms-offline-parser
        - For 去啊 / 钱包(非 WindVane 环境)离线
- 注意: grunt dev 仅监听 demo/seed-*.js 变化实时构建更新, 如需修改 seed.js, 需重新执行 `grunt es6` 构建.
- 注意: 包含 React 的基础库, 压缩版本和非压缩版本 js 并不是直接对应, 压缩版本不包含 `React.addons.ReactTestUtils` & `React.addons.Perf`, 非压缩版本才包含
	
## changelog
* v-0.0.44
	* 更新mpi/mtop，主要内容如下：
		1. 手淘下配置useNative使用native代理mtop请求。但目前手淘桥发mtop，IOS下ttid写死的，会导致我们渠道统计数据异常。@兰梦 已经联系mtop模块相关人@四海 在2015.3.13号以后的版本修复。
		2. 应@兰梦 要求，调整了mtop的异常打点方式。@兰梦
		3. 为适配alitrip域名，钱包下取token配置domain参数

	* 更新桥，主要内容如下：
		* 改造api：`compareVersion`、`buildCallback`(将api改为闭包内私用方法)
        * 新增api：``sendMtop`(方便第三方接入去啊)、`sendUriScheme`、`getUserInfo`、`share`、`getGpsInfo`
        * 废弃api：`connectionInfoDetect`
        * [查看详情](http://gitlab.alibaba-inc.com/mpi/bridge/tree/daily/0.2.24#0-2-24)
* v-0.0.45
    * mpi/base @弘树 @孝瓘
    	1. 包结构规范打包。针对去啊H5容器共享基础包做了base zip包结构调整，严格按照`widgets/base/*`目录结构打包，做为H5容器命中共享包的规则。
    	2. 离线体积。去啊下仅保留 `qa-seed-wlog-tmsparser.js` 和 `qa-seed-angular-wlog-tmsparser.js`。目前base离线包体积仅为156K。
    * mpi/tracker @兰梦
    	* changelog
    		* addGoldLogList 支持click、tap
            * 黄金零件打点加上nick 和 aui（useid),用于用户事件排查使用
            * 增加用户行为埋点sendUserActionLog，用于记录用户行为事件（事件点2001.1.1）
            * A.B点分别位于header和body上的时候，getPageAB无法获取争取的AB点
            * 修改元素ABCD位置方法，如果是非A标签，获取元素data-spm-click的localid信息，设置为D点；
                * 由于去啊客户端，A链接点击跳转无法记录到UT系统，故调整页面跳转方案；需要记录跳转的链接统一使用非A标签，在标签上增加data-spm-click；
                * 跳转统一使用桥协议中得goto协议，goto中会增加ttid和spm的信息
            * 检测各个业务线KISSY.config.version（主要需要测试，看10001的埋点代码中是否有js版本）
            * 去啊android客户端，通过桥协议打开页面无法获取document.reffer （此修改为客户端修改）
            * 页面A标签点击数据未进入UT，确定方案，使用无痕打点，修改桥协议goto方法
            * 性能打点增加页面title信息
            * js报错异常，增加判断，有两次相同异常，则只发送一次
    	* [diff](http://gitlab.alibaba-inc.com/mpi/tracker/compare/publish/0.2.20...master)
    * mpi/jsbridge @若狸
    	* changelog
    		* 增加`setTitle`方法，已适配去啊、钱包、手淘
    	* [diff](http://gitlab.alibaba-inc.com/mpi/jsbridge/compare/publish/0.0.21...master)
    * mpi/mtop @若狸 @孝瓘
    	* changelog
    		* 通过去啊桥发mtop请求，增加_platform_from_h5=true参数，标明来源h5
    		* 增加接口请求tracker打点，记录mtop请求信息，方便复盘H5接口请求
            * 去掉了无用api getPageId
            * 优化了请求的参数配置及注释说明，方便前端伙伴读代码逻辑
        * [diff](http://gitlab.alibaba-inc.com/mpi/mtop/compare/publish/0.1.39...master)
    * kissy-mini @虎牙
    	* changelog
    		* 修复S.EventTarget detach bug
    	* [diff](http://gitlab.alibaba-inc.com/kissy/m/compare/publish/0.3.9...master)
    * mpi/bridge @兰梦
        * changelog
            * 修改goto方法，通过goto方法调整，自动带上ttid和spm信息；其中options参数需要设置triggerNode
        * [http://gitlab.alibaba-inc.com/mpi/bridge/compare/publish/0.2.26...master)

* v-0.0.48
	* mpi/mtop
		* 暂不使用手淘mtop代理，因为当前版本返回json数据全是字符串，不支持type配置
	* mpi/bridge
		* 修复compareVersion方法，保持返回值与历史统一

* v-0.0.49
	* mpi/mtop
		* send方法bugfix

* v-0.0.53
	* mpi/wlog更新https改造相关
    * mpi/mtop#0.1.48
	* mpi/tracker#0.2.24
	* mpi/bridge#0.2.30

* v-0.0.54
	* mpi/bridge#0.2.32
* v-0.1.0
    * mpi/mtop#0.1.50
       * 发送性能打点sendPerformanceLog的时候将自定义参数renderTime 改为 spendTime 
    * mpi/bridge#0.2.33
       * goTo方法增加noUseTripBridge参数，如果为true，在去啊里直接使用location.href方式跳转
    * mpi/tracker#0.2.29
        * 修改性能打点，将iswifi换成netstat
        * 增加时间轴打点timelineStart|timelineEnd（舒克添加）
        * 修改自定义打点，自定数据的mix方法；原有方法会修改默认数据导致数据错乱
        * 修改domready方法，离线包domready不会执行
        * 修改srcVersion的获取方式，离线包window.onload以后srcVersion可能拿不到
    * mpi/wlog#0.2.23
        * 支持离线包https
* v-0.1.1
	* mpi/tracer#0.2.34
	* mpi/mtop#0.1.54
	* mpi/bridge#0.2.31
	* 去啊下打包去除加密
* v-0.1.3
    * mpi/tracer#0.2.35
       * 修复tracker grunt demo下的bug
* v-0.1.8
    * mpi/tracker#0.2.38
        * 修复tracker判断在线/离线页面的BUG

* v-0.1.9
    * mpi/wlog#0.2.4
        * 修复tap导致数据异常问题

* v-0.1.10
    * mpi/tracker#publis/0.3.2
    * mpi/mtop#publish/0.1.56
    * mpi/wlog#publish/0.2.5

* v-0.1.11
    * mpi/tracker#0.3.3
        * 取isOffline参数兼容老方法，解决活动页判断是否离线问题

* v-0.1.12
    * mpi/tracker#0.3.4
        * 恢复sendPoint方法,机票还在使用

* v-0.1.13
    * mpi/bridge#0.2.38
        * 完善桥协议及API文档
        * 增加API: 截屏分享、保存页面图片到系统相册、自定义分享

* v-0.1.16
    * mpi/tracker#0.3.8
        * 新增获取离线包版本
        * 新增获取离线包仓库名

* v-0.1.18
    * mpi/bridge#0.2.43
		* goTo方法增加天猫客户端适配
		* ttid透传误带hash值bugfix
		* minipay兼容alipayId与orderInfo
    * mpi/wlog#0.2.6
    	* 主要修改无痕打点得spm-cnt的值
    * sd/pointman#publish/1.1.20
    	* 与安全同学@季札 确认与1.1.18相比对去啊无影响

* v-0.1.19
    * mpi/bridge#0.2.44
        * 天猫不支持windvane的pop，所以将goTo，back降级，不适配天猫
        * ttid透传取参方法，改为window.location.search

* v-0.1.22
    * mpi/tracker#0.3.11
        * 修改去啊活动离线包版本号推送时机

* v-0.1.23
    * mpi/tracker#0.3.16
        * 新增调试工具

* v-0.1.26
    * 回退代码到0.1.24
    * 更新mpi/mtop0.1.60
        * 在mtop接口返回以后增加一个log
    * 指定windvane版本是publish/2.1.1

* v-0.1.30
    * mpi/mtop#0.1.63
        * 新增异步登陆态判断方法

* v-0.1.32
    * 更新mpi/mtop0.1.58
        * fix token异常的请求请求数bug（mtop循环发送）
        * fix 请求无返回，回调重复执行的bug
        * 增加在tmall下支持native发送mtop请求
        * 支持 支付宝、天猫发送mtop请求支持黑匣子
    * 更新mpi/bridge 0.2.46
        1. 修复goto跳转过程中，如果url没有参数，带上多余&的问题
            * http://k3.alibaba-inc.com/issue/6515816?projectId=40650903
        2. 支持如果是在手淘客户端，跳转到宝贝详情页面，增加额外参数
            * 文档： http://work.taobao.net/issues/43725

* v-0.1.34
    * mpi/mtop#0.1.67
        * 异步登陆方法更新

* v-0.1.36
    * mpi/tracker#0.3.17
        * 优化打点发出时间到onload后50ms

* v-0.1.38
	* mpi/mtop#0.1.68
	    * 解决安全反馈接口被劫持问题，mtop 接口请求默认使用 https
	* mpi/tracker#0.3.19
	    * 【修复】获取页面SPM失败,meta上的name为spm-id的情况

* v-0.1.39
	* mpi/bridge#0.2.55
	    * 增加安卓渠道包的域名支持 alicdn
        * 优化 sendUriScheme 支持 routApp (通过 scheme&packagename 唤起 app)
    * mpi/jsbridge#0.0.22
    	* 新增唤起 App Api，routApp
	* mpi/mtop#0.1.70
		* 修复日常/预发下mtop服务器不支持https适配问题

* v-0.1.40
    * mpi/wlog#0.3.0
        * 新增项目版本号埋点
    * mpi/mtop#0.1.71
        * 在MTOP统一处理前后端埋点串联的问题,检查接口中是否有指定qid字段,如果有,则存入全局变量,在其他打点请求取出变量加入埋点数据.
    * mpi/tracker#0.3.21
        * 【增加】航旅的prism埋点
        
* v-0.1.42
    * mpi/wlog#0.3.0
        * 同步集团 [alilog](http://gitlab.alibaba-inc.com/alilog/wlog) 更新内容
        
* v-0.1.43
    * mpi/wlog#0.3.1
        * data_sufei 改为手动引入
    * mpi/tracker#0.4.2
        * 解决 [用户的出行计划被泄露的问题](http://security.alibaba-inc.com/vul/detail.htm?vulNumber=ALIBABA-2016-01457&lvf=fe9df34d-e0f0-4dc6-939d-7bff008e6bd4)
        * 功能点
            1.［删除] _goldlog方法中'nick'、'aui'信息；去掉黄金令箭请求中用户的信息；
    * mpi/bridge#0.2.57
        * 解决 [获取url中参数有xss攻击的问题](http://security.alibaba-inc.com/vul/detail.htm?vulNumber=ALIBABA-2016-01714&lvf=88b6f486-ac1f-49e1-bc41-9f0cc083c45d)
        * 功能点
            1. [修改]getRequestParam/getRequestParams/getParams方法，在参数后面增加isEscape参数，处理获取url参数中的特殊符号，防止xss攻击
    * mpi/bridge#0.2.58
        * router 默认钱包内不下载逻辑 bugfix