const {Schema, model}= require('mongoose')
const COLLECTION_NAME = 'Products'
const DOCUMENT_NAME = 'Product'
const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    //category: {type: Schema.Types.ObjectId, required: true},
    description: {type: String, required: true},
    urlImg: {type: String, required: true}
},{
    timestamps: true,
    collection: COLLECTION_NAME
})
productSchema.index({name: 'text'})
module.exports = model(DOCUMENT_NAME, productSchema)