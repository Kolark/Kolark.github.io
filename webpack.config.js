const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/js/app.js",
		app2: "./src/js/app2.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		// filename: '[name].bundle.js',
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset",
			},
			{
				test: /\.html$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: "src/*.html",
					to: "[name][ext]",
				},
				{
					from: "src/img/*",
					to: "img/[name][ext]",
				},
				{
					from: "src/css/*",
					to: "css/[name][ext]",
				},
				{
					from: "src/fonts/*",
					to: "fonts/[name][ext]",
				},
			],
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new HtmlMinimizerPlugin(),
			new CssMinimizerPlugin(),
			new TerserPlugin(),
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		open: true,
		port: 8080,
		compress: true,
		watchFiles: {
			paths: ["src/*"],
		},
	},
};
