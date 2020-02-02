const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/client/index.js']
  },
  output: {
    path: path.resolve(__dirname, './dist/client'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
