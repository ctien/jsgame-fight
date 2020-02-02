const path = require("path")
const common = require("./webpack.common")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "build")
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new MiniCssExtractPlugin({ filename: "[name].css" }),
		new CleanWebpackPlugin()
	]
})