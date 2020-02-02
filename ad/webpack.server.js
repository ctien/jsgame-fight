const path = require("path");

module.exports = {
  mode: "none",
  entry: path.resolve(__dirname, "./server/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "server.bundle.js"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      }
    ]
  }
};
