const express = require('express');
const router = express.Router();
const categoryModels = require('../../models/category.models');
router.get('/getAll', async function (req, res, next) {
    try {
        const category = await categoryModels.find({isDeleted: true})
        res.json(category);
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.post('/create', async function (req, res, next) {
    try {
        const category = await categoryModels.create(req.body);
        res.json(category);
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.put('/update/:id', async function (req, res, next) {
   try {
        let id = req.params.id
        const category = await categoryModels.findByIdAndUpdate(id, req.body, { new: true });
        res.json(category);
   } catch (error) {
        res.status(404).send(error.message)
   }
})

router.delete('/delete/:id', async function (req, res, next) {
    try {
        let id = req.params.id
        const category = await categoryModels.findByIdAndUpdate(id, {isDeleted: true}, { new: true });
        res.json(category);
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router;