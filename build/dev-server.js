 

var express = require('express');
var path = require('path');
var opn = require("opn");
var webpack = require('webpack');
var config = require('../config');
//定义全局开发环境
if(!process.env.NODE_ENV) {
	process.env.NODE_ENV = config.dev.env;
}
var webpackConfig = require('./webpack.dev.conf.js');
var app = express();
var port = process.env.PORT || config.dev.port;
var url = 'http:127.0.0.1:'+port;
var autoOpenBrowser = !!config.dev.autoOpenBrowser;
var mock = require('./mock.js');
var compiler = webpack(webpackConfig);
var bodyParser = require('body-parser');
//配置webpack中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, function() {
	publicPath: webpackConfig.output.publicPath
	quiet: true
})
//加载webpack中间件
app.use(devMiddleware);
app.use(bodyParser.json());

//mock 数据路由
mock.use(app);
/*app.get('/*.html', function(req, resp) {
	var html_url = path.join(path.resolve(req.url.split('/')[1]));
	resp.sendFile(html_url);
})*/
//启动服务器
var server = app.listen(port, function() {
	console.log(url);
	if(autoOpenBrowser) {
		opn(url);
	}
})