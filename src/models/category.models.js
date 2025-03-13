const {Schema, model}= require('mongoose')
const COLLECTION_NAME = 'Categories'
const DOCUMENT_NAME = 'Category'
const categorySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    isDeleted: {type: Boolean, required: true}
},{
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, categorySchema)