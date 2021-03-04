const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')
module.exports = webpackMerge.merge(baseConfig,{
	plugins: [
		new UglifyjsWebpackPlugin()
	]
})