const express = require('express');
const productController = require('../controllers/productscontrollers.js');


const productRouter = express.Router();

productRouter.route('/')
   .get(productController.getAllProducts)
   .post(productController.addProduct);
   
productRouter.route('/:id')
   .delete(productController.dltProduct);


module.exports = productRouter;
