var fs = require('fs');
var path = require('path');
module.exports = {
  mode: 'production',

  entry: path.resolve(__dirname, 'server/server.js'),

  output: {
    path: __dirname + '/build/dist/',
    filename: 'server.bundle.js',
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
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }
   ],
  }
};