
var webpackBaseConfig = require('./webpack.base.conf');
var merge = require('webpack-merge');
var config = require('../config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var palMap = require('../pal-map');
var webpackDevConfig = merge(webpackBaseConfig, {
    output: {
        path: path.join(config.rootPath, '_dist'),
        publicPath: './',
        filename: '[name].[chunkhash].js'
    },
	plugins: [
		/*new webpack.optimize.UglifyJsPlugin({
	      output: {
	        comments: false,
	      },
	      compress: {
	        warnings: false
	      }
	    }),*/
        new webpack.HashedModuleIdsPlugin()
	]
})
palMap.file.map(function(it,i) {
	var o = new HtmlWebpackPlugin({
		// filename: typeof it.page=='undefined'?path.join(config.build.buildPath, it.chunk,it.chunk.html):path.join(config.build.buildPath, it.page),
		filename: typeof it.page=='undefined'?it.chunk+'.html':it.page,
        template: typeof it.page=='undefined'?path.join(config.rootPath, 'dist',it.chunk,it.chunk+'.html'):path.join(config.rootPath, 'dist',it.chunk,it.page),
		inject: true,
		hash: false,
		chunks: it.chunks
	})
	webpackDevConfig.plugins.push(o);
})
module.exports = webpackDevConfig;