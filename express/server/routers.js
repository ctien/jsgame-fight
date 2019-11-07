const express = require('express');

const router = express.Router();

const product = require('./modules/product');
const productAPI = require('./modules/product/api')

router.use('/product', product);
router.use('/api/v1/product', productAPI)

module.exports = router;