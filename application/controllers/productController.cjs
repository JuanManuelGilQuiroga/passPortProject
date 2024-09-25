const {validationResult} = require('express-validator');
const ProductRepository = require('../../domain/repositories/productRepository.cjs');

module.exports = class ProductController {

    async crearProducto (req, res) {
        try {
            const errors = validationResult(req.body);
            if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
            let productRepository = new ProductRepository()
            const newProduct = await productRepository.save(req.body);
            res.status(201).json({
                status: 201,
                data: newProduct
            }) 
            console.log(newProduct)
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json(errorObj)
        }
    }

    async listarProductos (req,res) {
        try {
            let productRepository = new ProductRepository()
            const product = await productRepository.getAllProducts();
            console.log(product)
            return res.status(201).json({ data: product });
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            console.log(errorObj)
            res.status(errorObj.status).json(errorObj);
        }
    }
}