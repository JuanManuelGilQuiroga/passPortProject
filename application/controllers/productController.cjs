const {validationResult} = require('express-validator');
const ProductRepository = require('../../domain/repositories/productRepository.cjs');

module.exports = class ProductController {
    constructor(){
        this.productRepository = new ProductRepository();
    }

    async crearProducto (data) {
        try {
            const errors = validationResult(data);
            if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
            const newProduct = await this.productRepository.save(data);
            return {
                status: 201,
                data: newProduct
            }
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            return {
                status: errorObj.status,
                message: errorObj.message
            }
        }
    }

    async listarProductos (req,res) {
        try {
            const product = await this.productRepository.getAllProducts();
            return res.status(201).json({ data: product });
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}