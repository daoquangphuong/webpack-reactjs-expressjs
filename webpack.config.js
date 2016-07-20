var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: [
		"babel-polyfill",
		"webpack-hot-middleware/client",
		"./src/entry.js"
	],
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
		publicPath: "/static/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/,
				include: path.resolve(__dirname, "./src")
			}
		]
	},
	plugins: [
		// Webpack 1.0
		new webpack.optimize.OccurenceOrderPlugin(),
		// Webpack 2.0 fixed this miss spelling
		// new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
