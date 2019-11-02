const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	entry: {
		'bootstrap': './ts/bootstrap',
		'bootstrap-admin': './ts/bootstrap-admin',
		'bootstrap-tools': './ts/bootstrap-tools',
	},
	devtool: 'cheap-eval-source-map',
	devServer: {
		host: '0.0.0.0',
		port: 8090,
		hot: true,
		historyApiFallback: true,
		publicPath: '/assets/scripts/',
		stats: 'minimal',
	},
	stats: 'minimal',
	output: {
		pathinfo: false
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['babel-loader', 'ts-loader', 'angular2-template-loader'],
			},
		],
	},
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({ DEVELOPMENT: true, TOOLS: true, SERVER: false, BETA: true, TIMING: true, TESTS: false }),
	],
});
