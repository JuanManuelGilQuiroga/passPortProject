const express = require('express');
const ProductValidator = require('../validators/productValidator.cjs');
const ProductController = require('../controllers/productController.cjs');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');

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

/*router.post('/product', fileUpload({
  limits: { fileSize: 50 * 1024 *1024 }
}), express.json(), async(req, res)=>{
  let file = req.files.product_image;
  let data = {
    name: req.body.name,
    description: req.body.description,
    brand: req.body.brand,
    image_data: file
  }
  let fileBuffer = file.data;
  const filePath = path.join(process.env.EXPRESS_STATIC, '/storage/img', file.name);
  fs.writeFile(filePath, fileBuffer, (err) => {
        if (err) return res.status(500).send('Error al guardar el archivo.');
        res.status(200).json("Archivo Guardado");
    }); 
    let prove = await productController.crearProducto(data)
    console.log(prove)
});*/

router.post('/product', productValidator.validateProductData(), productController.crearProducto);
router.get('/products', productValidator.validateProductEmpty(), productController.listarProductos);


module.exports = router;