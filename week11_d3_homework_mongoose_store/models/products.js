//Start dependencies:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the product schema:
const productSchema = new Schema({
    name: {type: String, required: true},
    description: String,
    img: String,
    price: {type: Number, min: 0},
    qty: {type: Number, min: 0}
});

//Create the model:
const Product = mongoose.model('Product', productSchema);

//Export it so it can be used in controllers/product.js
module.exports = Product;