var path = require('path');
var config = require('../config');
var palMap = require('../pal-map');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackConfig = {
	entry: palMap.script,
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: '/\.js$/',
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
		        test:/\.css$/,
		        loader: 'style-loader!css-loader'
		    },
		    {
		        test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'sass-loader']
                })
		    },
		     {
		        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
		        use: [{
		          loader: 'url-loader',
		          options: {
		            limit: 10000
		          }
		        }]
		    }
		]
	},
    plugins: [
        new ExtractTextPlugin({
            filename:'[name].[contenthash].css'
        })
    ],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js'
		},
	}
}
module.exports = webpackConfig;