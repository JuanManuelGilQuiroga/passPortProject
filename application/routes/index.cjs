const express = require('express');
const ProductValidator = require('../validators/productValidator.cjs');
const ProductController = require('../controllers/productController.cjs');

const router = express.Router();

router.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
    console.log(req.isAuthenticated())
    console.log("Acceso concedido")
  } else {
    res.redirect('/login');
    console.log("Acceso denegado")
  }
});

router.get('/login', (req, res) => {
  res.send('Home Page');
});

const productValidator = new ProductValidator();
const productController = new ProductController();

router.post('/product', productValidator.validateProductData(), productController.crearProducto);
router.get('/products', productValidator.validateProductEmpty(), productController.listarProductos);


module.exports = router;