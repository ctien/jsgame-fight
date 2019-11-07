const express = require('express');

const router = express.Router();

const {
  index
} = require('./product.controller');

router.get('/', index);

module.exports = router;
