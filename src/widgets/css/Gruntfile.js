/**
 * 本文件是 Gruntfile.js 默认模板，请根据需要和注释提示自行修改
 * 从这里获得最新版
 * https://github.com/jayli/generator-clam/blob/master/app/templates/Gruntfile_src.js
 * 文档地址:
 * http://cnpmjs.org/package/generator-clam
 */
var path = require('path'),
    fs = require('fs'),
    os = require('os'),
    clamUtil = require('clam-util'),
    exec = require('child_process').exec;

module.exports = function(grunt) {

    require('jit-grunt')(grunt);

    var task = grunt.task;
    // 配置默认分支

    grunt.initConfig({

        pkg: grunt.file.readJSON('abc.json'),

        currentBranch: 'master',

        // 对build目录进行清理
        clean: {
            build: {
                src: 'build/*'
            },
            sassdoc: {
                src: 'docs/*'
            }
        },

        sassdoc: {
            default: {
                src: ['scss/**/*.scss','snippets/**/*.scss'],
                options: {
                    theme: 'flippant',
                    dest: "docs",
                    autofill: [],
                    groups: {
                        snippest: '代码片段',
                        animation: '动画',
                        gradient: '渐变',
                        UI: '页面UI相关',
                        color: '基础色值',
                        functions: '函数集合',
                        'undefined': '其他',
                    }
                }
            }
        },

        sass: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'scss/',
                        src: ['**/*.scss', '!**/build/**/*.scss'],
                        dest: '.',
                        ext: '.css'
                    }
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['*.scss'],
                    dest: 'build/',
                    ext: '.css'
                }]
            }
        },

        cssmin: {
            scss: {
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: ['**/*.css', '!**/*-min.css'],
                    dest: 'build/',
                    ext: '-min.css'
                }]
            }
        },

        focus: {
            dev: {
                include: ['demo', 'mixin']
            }
        },

        watch: {
            demo: {
                files: ['scss/**/*.scss','!scss/_mpi-mixins.scss'],
                tasks: ['sassdoc']
            },
            mixin: {
                files: ['scss/**/*.scss'],
                options: {
                    event: ['added', 'deleted']
                },
                tasks: ['mpimixin']
            }
        },

        exec: {
            new_branch: {
                command: 'git checkout -b daily/<%= currentBranch %>'
            },
            add: {
                command: 'git add . -A'
            },
            commit: {
                command: function (msg) {
                    return 'git commit -m "' + msg + '"';
                }
            },
            prepub: {
                command: 'git push origin daily/<%= currentBranch %>:daily/<%= currentBranch %>'
            },
            tag: {
                command: 'git tag publish/<%= currentBranch %>'
            },
            publish: {
                command: 'git push origin publish/<%= currentBranch %>:publish/<%= currentBranch %>'
            }
        },

        flexcombo: {
            demo: {
                options: {
                    proxyport: '<%= pkg.proxyPort %>',               	// 本地反向代理端口
                    target: '.',                                     // flex-combo 要代理的目录
                    urls: '/<%= pkg.group %>/<%= pkg.name %>',    // flex-combo 要代理的匹配 url
                    port: '<%= pkg.port %>',                         // 本地服务端口
                    proxyHosts: [                                       // 本地反向代理需要代理的主机名
                        'demo',
                        'demo.com',
                        'dev.waptest.taobao.com',
                        'dev.wapa.taobao.com',
                        'dev.m.taobao.com',
                        'dev.waptest.alitrip.com',
                        'dev.wapa.alitrip.com',
                        'dev.m.alitrip.com'
                    ],
                    needHttps: false,								// 是否开启 HTTPS 请求监控，默认 false
                    livereload: false							// 是否自动刷新，默认 false，可配置为 true 或期望 livereload 服务工作的端口号
                }
            }
        }
    });

    grunt.registerTask('docs', '生成doc', function(type, msg) {
        task.run(['clean:sassdoc', 'sassdoc']);
    });

    grunt.registerTask('mpimixin', '生成mpi-mixins', function(){
        var done = this.async();
        grunt.log.write(('生成mpi-mixins文件').green);

        var files = clamUtil.walk('scss',['scss'],['']);

        var content = [];
        content.push('@charset "UTF-8";');
        content.push('');
        content.push('@import "variables";');
        content.push('');

        files['scss'].forEach(function(v){
            if(/^(extends|mixins)/.test(v)){
                content.push('@import "'+ v.replace(/\/_/,'/').replace(/\.scss/,'')+'";');
            }
        });
        fs.writeFile('scss/_mpi-mixins.scss', content.join(os.EOL), function(){
            done();
        });
    });


    /*
    * 获取当前最大版本号，并创建新分支
    **/
    grunt.registerTask('newbranch', 'clam newBranch...', function (type) {
        var done = this.async();
        var abcJSON = {}, packageJSON = {};
        exec('git branch -a & git tag', function (err, stdout, stderr, cb) {
            var r = clamUtil.getBiggestVersion(stdout.match(/\d+\.\d+\.\d+/ig));
            if (!r) {
                r = '0.0.1';
            } else {
                r[2]++;
                r = r.join('.');
            }
            grunt.log.write(('新分支：daily/' + r).green);
            grunt.config.set('currentBranch', r);
            task.run(['exec:new_branch']);
            // 回写入 abc.json 的 version
            try {
                abcJSON = require(path.resolve(process.cwd(), 'abc.json'));
                abcJSON.version = r;
                clamUtil.fs.writeJSONFile("abc.json", abcJSON, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("update abc.json.");
                    }
                });

                packageJSON = require(path.resolve(process.cwd(), 'package.json'));
                packageJSON.version = r;
                clamUtil.fs.writeJSONFile("package.json", packageJSON, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("update package.json.");
                    }
                });
            } catch (e) {
                console.log('未找到package.json');
            }
            done();
        });
    });

    // 预发布资源文件
    grunt.registerTask('prepub', 'clam 预发', function (type, msg) {
        var done = this.async();
        // 只传入一个参数时，即为 msg
        if(type && (type != 'nobuild') && !msg) {
            msg = type;
            type = null;
        }
        clamUtil.getBranchVersion(function (version) {
            grunt.log.write(('当前分支：' + version).green);
            grunt.config.set('currentBranch', version);

            var tasks = [
                'exec:add',
                'exec:commit:' + msg,
                'exec:prepub'
            ];
            if(type != 'nobuild') {
                tasks.unshift('default');
            }
            task.run(tasks);
            done();
        });
    });

    // 正式发布资源文件
    grunt.registerTask('publish', 'clam 正式发布', function (msg) {
        var done = this.async();
        clamUtil.getBranchVersion(function (version) {
            grunt.log.write(('当前分支：' + version).green);
            grunt.config.set('currentBranch', version);
            task.run(['default']);
            task.run(['exec:add', 'exec:commit:' + msg]);
            task.run(['exec:prepub']);
            task.run(['exec:tag', 'exec:publish']);
            done();
        });
    });

    // 启动 demo 调试时的本地服务
    grunt.registerTask('demo', '开启Demo调试模式', function () {
        task.run(['flexcombo:demo', 'focus:dev']);
    });

    return grunt.registerTask('default', 'Clam 默认流程', function(type, msg) {
        task.run(['clean', 'sass', 'sassdoc', 'mpimixin', 'cssmin']);
    });

};
