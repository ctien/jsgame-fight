module.exports = {
	entry: {
		vendor: "./src/vendor.js",
		main: "./src/index.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader"
			},
			{
				test: /\.html$/,
				use: "html-loader"
			},
			{
				test: /\.(png|gif|svg|jpg|jpeg)$/,
				use: {
					loader: "file-loader",
					options: {
						filename: "[name].[hash].[ext]",
						outputPath: "images"
					}
				}
			}
		]
	}
}