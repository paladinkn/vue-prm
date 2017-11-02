var path = require('path');
var config = require('./config');
var publicPath = path.join(config.rootPath, 'dist');
module.exports = {
	//js注册
	script: {
	    lib:['vue','jquery'],
		pal: path.join(publicPath,'pal'),
		supplier: path.join(publicPath,'supplier'),
		util: path.join(publicPath,'util'),
	},
	//默认页面
	default: 'pal.html',
	//html对应js
	file: [
		{
			page: 'pal.html',
			chunks: ['common','util','lib','pal']

		},
		{
			page: 'supplier.html',
			chunks: ['common','util','lib','supplier']
		},
	]
}