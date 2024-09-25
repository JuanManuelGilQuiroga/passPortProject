const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    description: String,
    picture: String
}, { collection: 'products' });

const products = mongoose.model('products', productSchema);

const insertProduct = async (arg) => {
    let res = await new products(arg).save();
    return res
}

const findAllProducts = async () => {
    let res = await products.find();
    return res
}

module.exports = {
    insertProduct,
    findAllProducts
};