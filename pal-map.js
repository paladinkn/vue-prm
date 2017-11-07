var path = require('path');
var config = require('./config');
var publicPath = path.join(config.rootPath, 'src');
const commonChunks=['runtime','util','lib'];
module.exports = {
	//js注册
	script: {
	    lib:['vue','jquery'],
	    login: path.join(publicPath,'login'),
		pal: path.join(publicPath,'pal'),
		supplier: path.join(publicPath,'supplier'),
		util: path.join(publicPath,'util'),
		test: path.join(publicPath,'test'),
	},
	//默认页面
	default: 'login.html',
	//html对应js
	file: [
		{
			chunk: 'test',
			chunks: ['runtime', 'util', 'lib', 'test'],
		},
		{
            chunk:'login',
            page: 'login.html',
			chunks: ['runtime','util','lib','login']

		},
		{
            chunk:'pal',
			chunks: commonChunks.concat(['pal'])

		},
		{
            chunk:'supplier',
			chunks: commonChunks.concat(['supplier'])
		},
	]
}