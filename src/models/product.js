const mongoose= require('mongoose')
const Schema= mongoose.Schema
const productSchema= Schema({
    imagePath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
    },
    category:{
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
})

const Product= mongoose.model('Product',productSchema)
module.exports= Product