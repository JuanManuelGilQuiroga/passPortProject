const { insertProduct, findAllProducts } = require('../models/productModel.cjs');

module.exports = class ProductRepository {
    async save(arg) {
        try {
            return await insertProduct(arg);
        } catch (error) {
            throw new Error(JSON.stringify({status: 500, message: 'Producto no guardado.'}));
        }
    }

    async getAllProducts(){
        try {
            console.log(await findAllProducts())
            return await findAllProducts();
        } catch (error) {
            throw new Error(JSON.stringify({status: 400, message: 'Productos no encontrados.'}));
        }
    }
}