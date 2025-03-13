const express = require('express');

const router = express.Router();
router.use('/product',require('./product/index'))
router.use('/category',require('./category/index'))

module.exports = router