const path = require("path")
const common = require("./webpack.common")
const merge = require("webpack-merge")
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].[contentHash].bundle.js",
		path: path.resolve(__dirname, "build")
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			},
		]
	},
	plugins: [
		new OptimizeCssAssetsPlugin(),
		new TerserPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
		new CleanWebpackPlugin()
	]
})