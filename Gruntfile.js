/**
 * 本文件是 Gruntfile.js 默认模板，请根据需要和注释提示自行修改
 * 从这里获得最新版
 * http://gitlab.alibaba-inc.com/trip-tools/generator-clam/blob/master/app/templates/Gruntfile_src.js
 * 文档地址:
 * http://cnpmjs.org/package/generator-clam
 */
var path = require('path'),
  clamUtil = require('clam-util'),
  fs = require('fs'),
  exec = require('child_process').exec,
  gruntDefaultConfig = require('@ali/grunt-default-config');

module.exports = function (grunt) {
  require('time-grunt')(grunt);

  // -------------------------------------------------------------
  // 智能载入模块
  // https://github.com/shootaroo/jit-grunt
  // -------------------------------------------------------------
  require('jit-grunt')(grunt, {
    hpm: '@ali/grunt-hpm',
    'inc_offline': '@ali/grunt-inc-offline',
    'webpack-dev-server': 'grunt-webpack',
    'devserver': '@ali/grunt-devserver'
  });

  var task = grunt.task;

  // -------------------------------------------------------------
  // 任务配置
  // -------------------------------------------------------------

  // 如果 Gruntfile.js 编码为 gbk，打开此注释
  // grunt.file.defaultEncoding = 'gbk';

  var pkgConfig = require('./package.json');
  var gruntConfig = clamUtil.mergeGruntConfig(pkgConfig, grunt, gruntDefaultConfig);
  gruntConfig.pkg = pkgConfig;
  gruntConfig.currentBranch = 'master';

  grunt.initConfig(gruntConfig);

  // -------------------------------------------------------------
  // 注册Grunt子命令
  // -------------------------------------------------------------

  // 预发布资源文件
  grunt.registerTask('prepub', 'clam 预发', function (type, msg) {

    var done = this.async();
    // 只传入一个参数时，即为 msg
    if (type && (type != 'nobuild') && !msg) {
      msg = type;
      type = null;
    }
    clamUtil.getBranchVersion(function (version) {
      grunt.log.write(('当前分支：' + version).green);
      grunt.config.set('currentBranch', version);

      var tasks = [
        'replace:daily',
        'exec:add',
        'exec:commit:' + msg,
        'exec:prepub'
      ];
      if (type != 'nobuild') {
        tasks.unshift('exec_build');
      }
      task.run(tasks);
      done();
    });
  });

  // 正式发布资源文件
  grunt.registerTask('publish', 'clam 正式发布', function (msg) {
    var done = this.async();
    clamUtil.getBranchVersion(function (version) {
      if (pkgConfig.isABTest) {
        task.run('pubabtest');

      } else {
        grunt.log.write(('当前分支：' + version).green);
        grunt.config.set('currentBranch', version);
        task.run(['exec_build']);
        task.run(['exec:add', 'exec:commit:' + msg]);
        task.run(['exec:prepub']);
        task.run(['exec:tag', 'exec:publish']);
      }
      done();
    });
  });

  // 启动 dev 开发时的本地服务
  grunt.registerTask('dev', '开启 Dev 开发模式', function (type) {
    /**
     * 开启不同离线包调试模式
     * `grunt dev:main` 浏览器下开发调试
     * `grunt dev:trip` 去啊离线包开发调试
     * `grunt dev:taobao` 手淘离线包开发调试
     * `grunt dev:alipay` 钱包离线包开发调试
     */
    task.run(['devserver:' + (type || 'main') ]);
  });

  // 启动 debug 调试时的本地服务
  grunt.registerTask('debug', '开启 dev 调试模式', function (type) {
    var watchTarget = 'debug' + (type ? '_' + type : '');
    var watchTargetConfig = grunt.config.get('watch')[watchTarget];
    if (watchTargetConfig) {
      // 先执行一遍目标 debug 构建
      task.run(watchTargetConfig.tasks);
      task.run([
        'devserver:debug' + (type ? '_offline' : ''),
        'watch:' + watchTarget
      ]);
    }
  });

  // 替换build里的http://g.tbcdn.cn的引用为daily的引用
  grunt.registerTask('daily', '替换域名引用到daily', function () {
    task.run(['replace:daily']);
  });

  // 离线包构建任务前缀
  var offlineBuildPrefix = 'build_offline_';

  // 构建去啊客户端离线包
  grunt.registerTask(offlineBuildPrefix + 'trip', '构建去啊客户端离线包', function () {

    grunt.log.subhead('>> 开始构建去啊离线包');

    task.run([
      'clean:offline',

      // webpack 构建 js
      'webpack:trip',

      // 复制 base & html
      'copy:offline_trip',

      // html 处理
      'domman:offline_trip',

      // 生成 abc.json
      'cacheinfo:main',

      // 压缩包
      'exec:zip_trip',

      // 增量包
      'inc_offline'
    ]);
  });

  // 构建手淘客户端离线包
  grunt.registerTask(offlineBuildPrefix + 'taobao', '构建手淘客户端离线包', function () {
    grunt.log.subhead('>> 开始构建手淘离线包');
    task.run([
      'clean:offline',

      // webpack 构建 js
      'webpack:taobao',

      // 复制 base & html
      'copy:offline_taobao',

      // html 处理
      'domman:offline_taobao',

      // 压缩包
      'exec:zip_taobao'
    ]);
  });

  // 构建钱包客户端离线包
  grunt.registerTask(offlineBuildPrefix + 'alipay', '构建支付宝钱包客户端离线包', function () {
    grunt.log.subhead('>> 开始构建支付宝钱包离线包');
    task.run([
      'clean:offline',

      // webpack 构建 js
      'webpack:alipay',

      // 复制 base & html
      'copy:offline_alipay',

      // html 处理
      'domman:offline_alipay',

      // 压缩包
      'hpm'
    ]);
  });

  // 构建离线包目标容器选择处理
  grunt.registerTask('offline_build_router', '构建离线包目标容器选择处理', function (target) {
    if (!target) {
      var offlineTargets = grunt.config('targets');
      var offlineBuildTasks = offlineTargets.map(function (targetName) {
        return offlineBuildPrefix + targetName;
      });
      task.run(offlineBuildTasks);
    } else {
      task.run(offlineBuildPrefix + target);
    }
  });


  // 默认构建流程
  grunt.registerTask('exec_build', '执行构建脚本', function (offlineTarget) {

    var actions = [

      // 更新 base
      // 'exec:update_base',

      // 构建准备流程
      'clean:build',

      // webpack 构建 js
      'webpack:main',
      'webpack:dist',

      // 复制 base & html
      'copy:main',

      // html 处理
      'domman:online'
    ];

    //应用名标记
    grunt.config.set('domman.options.name', pkgConfig.name);

    //ABTest，增加B标记
    if (pkgConfig.isABTest) {
      grunt.config.set('domman.options.abtest', 'B');
    }

    if (offlineTarget) {
      actions.push('offline_build_router:' + offlineTarget);
    } else {
      actions = actions.concat([
        'prompt:main',
        'offline_build_router'
      ]);
    }

    task.run(actions.concat('exec:echo_pkg'));
  });

  // 默认构建任务
  grunt.registerTask('build', '默认构建流程', function (type) {
    task.run('exec_build' + (type ? (':' + type) : ''));
  });


  // 更新 grunt task default config
  grunt.registerTask('sync', '同步 grunt 任务默认配置', function (version) {
    var done = this.async();
    var command = 'bower ' + (version ? ('install default=trip-tools/grunt-default-config#' + version) : 'update default');
    exec('cd grunt;' + command + ';cd ..', function (err, stdout, stderr) {
      if (err) {
        console.error(err);
        done(err);
      } else {
        console.log(stdout);
        console.log('更新 grunt 任务默认配置成功！');
        done();
      }
    });
  });

  // 创建新分支
  grunt.registerTask('newbranch', '获取当前最大版本号,创建新的分支', function (type, msg) {
    var done = this.async();

    // 获取当前分支
    clamUtil.getBranchVersion(function (version) {
      if (/abtest/.test(version)) {
        //在abtest的分支上，提示合并到master后再新拉分支
        grunt.fail.fatal('当前处于 abtest 分支，请合并到master后新开分支'.red);
        done();
      } else {
        exec('git branch -a & git tag', function (err, stdout, stderr, cb) {

          if (/abtest\/\d+\.\d+\.\d+/.test(stdout)) {
            grunt.log.error('当前有尚未清理的本地/远程 abtest 分支，建议及时清理！'.red);
          }

          var versions = stdout.match(/\d+\.\d+\.\d+/ig),
            r = clamUtil.getBiggestVersion(versions);
          if (!r || !versions) {
            r = '0.1.0';
          } else if (type == 'major') {
            r[0]++;
            r[1] = 0;
            r[2] = 0;
            r = r.join('.');
          } else if (type == 'minor') {
            r[1]++;
            r[2] = 0;
            r = r.join('.');
          } else {
            r[2]++;
            r = r.join('.');
          }
          grunt.log.write(('新分支：daily/' + r).green);
          grunt.config.set('currentBranch', r);
          task.run(['exec:new_branch']);
          // 回写入 package.json 的 version
          try {
            abcJSON = require(path.resolve(process.cwd(), 'package.json'));
            abcJSON.version = r;
            abcJSON.isABTest = false;
            clamUtil.fs.writeJSONFile("package.json", abcJSON, function (err) {
              console.log(err || 'update package.json done.');
            });
          } catch (e) {
            console.error('当前目录下未找到 package.json.');
          }
          done();
        });
      }
    });
  });

  // 创建新 abtest 分支
  grunt.registerTask('newabtest', '获取当前最大版本号,创建新的abtest分支', function (type, msg) {
    var done = this.async();
    exec('git branch -a & git tag', function (err, stdout, stderr, cb) {
      var versions = stdout.match(/\d+\.\d+\.\d+/ig),
        r = clamUtil.getBiggestVersion(versions);
      if (!r || !versions) {
        r = '0.1.0';
      } else {
        r[2]++;
        r = r.join('.');
      }
      grunt.log.write(('新分支：abtest/' + r).green);
      grunt.config.set('currentBranch', r);
      task.run(['exec:new_abtest']);
      // 回写入 package.json 的 version
      try {
        abcJSON = require(path.resolve(process.cwd(), 'package.json'));
        abcJSON.version = r;
        abcJSON.isABTest = true;
        clamUtil.fs.writeJSONFile("package.json", abcJSON, function (err) {
          console.log(err || 'update package.json done.');
        });
      } catch (e) {
        console.error('当前目录下未找到 package.json.');
      }
      done();
    });
  });

  // 发布 abtest
  grunt.registerTask('pubabtest', '发布 abtest', function (msg) {
    task.run([
      'exec_build',
      'replace:daily',
      'exec:add',
      'exec:commit:' + (msg || 'pubabtest@' + pkgConfig.version),
      'exec:prepub',
      'exec:publish_abtest'
    ]);
  });


  // 退出 abtest
  grunt.registerTask('exitabtest', '退出 abtest', function (msg) {

    var done = this.async();
    exec('git status -s', function (err, stdout, stderr) {
      var gitStatus = stdout.replace(/\s/g, '').trim();
      if (gitStatus != '') {
        grunt.fail.fatal('当前 Git 仓库有尚未提交的变更，请处理后再重试！');
      } else {
        grunt.verbose.writeln('即将退出 abtest...');
        task.run([
          'newbranch',
          'publish:' + (msg || 'exitabtest@' + pkgConfig.version)
        ]);
        done();
      }
    });
  });

  // -------------------------------------------------------------
  // 注册Grunt主流程
  // -------------------------------------------------------------

  return grunt.registerTask('default', 'Clam 默认流程', function (type, msg) {

    var done = this.async();

    // 获取当前分支
    clamUtil.getBranchVersion(function (version) {
      grunt.log.write(('当前分支：' + version).green);
      grunt.config.set('currentBranch', version);
      done();
    });

    // 构建和发布任务
    if (!type) {
      task.run(['build']);
    }
  });

};
