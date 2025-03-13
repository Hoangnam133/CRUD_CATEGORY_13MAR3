const express = require('express');
const router = express.Router();
const productModels = require('../../models/product.models');
router.get('/getAll', async function (req, res, next) {
    const products = await productModels.find()
    res.json(products);
})

router.post('/create', async function (req, res, next) {
    const product = await productModels.create(req.body);
    res.json(product);
})
module.exports = router;