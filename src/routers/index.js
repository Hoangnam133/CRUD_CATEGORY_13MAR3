const express = require('express');

const router = express.Router();
router.use('/product',require('./product/index'))
module.exports = router