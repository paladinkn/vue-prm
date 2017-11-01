

process.env.NODE_ENV = 'pro';

var webpack = require('webpack');
var webpackConfig = require('./webpack.pro.conf');
var config = require('../config');
var chalk = require('chalk');
//清空文件夹  rimraf dist
var rm = require('rimraf');
//清空文件夹，再进行webpack打包
console.log(chalk.yellow('删除原有文件。'));
rm(config.build.buildPath, function() {
	console.log(chalk.yellow('构建文件中....'));
	webpack(webpackConfig, function(err,stats) {
		console.log(chalk.green('构建成功！'));
	});
})