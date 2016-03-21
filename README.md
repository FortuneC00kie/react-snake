## h5-snake

- 创建者: 舒克<shuke.cl@taobao.com>
- 项目地址: http://gitlab.alibaba-inc.com/shuke.cl/h5-snake

### 初始化

1. `git clone`
2. `tnpm i` 安装依赖 Node 包
3. `cd src/widgets && bower i` 安装依赖 bower 模块

### 开发 & 调试

	grunt dev           浏览器下开发调试
	grunt dev:trip      开发去啊离线包
	grunt dev:taobao    开发手淘离线包
	grunt dev:alipay    开发钱包离线包
	
	grunt debug         浏览器下调试调试
	grunt debug:trip    开发去啊离线包
	grunt debug:taobao  开发手淘离线包
	grunt debug:alipay  开发钱包离线包
	
### 构建打包

    grunt               执行默认全部构建, 包括在线构建和离线包构建
    
### grunt tasks

                   prepub  clam 预发                                                 
                  publish  clam 正式发布                                               
                     demo  开启Demo调试模式                                              
                      dev  开启 Dev 开发模式                                             
                    debug  开启 dev 调试模式                                             
                    daily  替换域名引用到daily                                            
       build_offline_trip  构建去啊客户端离线包                                              
     build_offline_taobao  构建手淘客户端离线包                                              
     build_offline_alipay  构建支付宝钱包客户端离线包                                           
     offline_build_router  构建离线包目标容器选择处理                                           
               exec_build  执行构建脚本                                                  
                    build  默认构建流程                                                  
                     sync  同步 grunt 任务默认配置                                         
                     push  推送本地文件到客户端                                              
                newbranch  获取当前最大版本号,创建新的分支                                        
                newabtest  获取当前最大版本号,创建新的abtest分支                                  
                pubabtest  发布 abtest                                               
               exitabtest  退出 abtest                                               
                  default  Clam 默认流程 

命令帮助:`yo clam:h`

### 自定义构建任务逻辑

从 <http://gitlab.alibaba-inc.com/trip-tools/grunt-default-config/tree/0.4.0/lib> 拷贝对应任务默认配置的 `.js` 文件到项目 `grunt` 目录下进行自定义配置覆盖.

> Tips: 键值对的覆盖是直接替换而不会对数组值做 merge, 所以如需覆盖数组类型值, 请提供完整数组值.

### changeLog

TODO
