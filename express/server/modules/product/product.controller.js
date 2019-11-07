// const Product = require('./product.model')

exports.index = function (req, res) {
  // var products = await Product.find();
  res.render('./product.pug')
};
