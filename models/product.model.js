const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    cart: String,
    brand: String,
    priceNew: Number,
    priceOld: Number,
    number: Number,
    description: String,
    avartarFile: [{type:String}],
    productSizes: [{type:String}]
});
const Product = mongoose.model('Product', productSchema,'Product');

module.exports = Product;