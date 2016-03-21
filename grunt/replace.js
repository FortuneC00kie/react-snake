/**
 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
 * replace task
 * 演示自定义 grunt 任务配置使用
 */
module.exports = {
	// 将资源文件引用域名替换为 g-assets.daily.taobao.net
	daily: {
		options: {
			variables: {
				'g.tbcdn.cn': '//g-assets.daily.taobao.net',
				'g.alicdn.com':  '//g-assets.daily.taobao.net'
			},
			prefix: '//'
		},
		files: [
			{
				expand: true,
				cwd: 'build/',
				dest: 'build/',
				src: ['pages/**/*.html']
			}
		]
	}
};
