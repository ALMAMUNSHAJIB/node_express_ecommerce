const {Schema, model} = require('mongoose');

const productSchema = Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    categories: {
        type: Array
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }

},{
    timestamps: true
});

const Product =  model('Product', productSchema);
module.exports = Product;