var fs = require('fs');
var path = require('path');

module.exports = {
  mode: 'production',

  entry: path.resolve(__dirname, './client/index.js'),

  output: {
    path: __dirname + '/build/dist/',
    filename: 'main.js',
  },

  target: 'node',

  node: {
    __filename: true,
    __dirname: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ],
  }
};
