let webpack = require('webpack');
let path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:0000',
		'webpack/hot/only-dev-server',
		'.src'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},	
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js', ]
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_module/,
			loader: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
		}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}