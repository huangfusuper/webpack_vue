const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'dist.js'
		//publicPath: '../dist/'
	},
	module: {
	  rules: [
	    {
	      test: /\.(png|jpg|gif)$/,
	      use: [
	        {
	          loader: 'file-loader',
	          options: {
						name: 'imgage/[name].[hash:8].[ext]'
					}
	        }
	      ]
	    },
		  {
			  test: /\.less$/,
			  use: [{
				  loader: "style-loader" // creates style nodes from JS strings
			  }, {
				  loader: "css-loader" // translates CSS into CommonJS
			  }, {
				  loader: "less-loader" // compiles Less to CSS
			  }]
		  },
		  {
			  test: /\.css$/,
			  use: [ 'style-loader', 'css-loader' ]
		  },
		  // ... 其它规则
		  {
			 test: /\.vue$/,
			 loader: 'vue-loader'
		  }
	  ]
	},
	resolve: {
	    alias: {
	      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
	    }
	},
	plugins: [
	    // 请确保引入这个插件！
	    new VueLoaderPlugin(),
		new webpack.BannerPlugin('最终解释权归皇甫所有'),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}