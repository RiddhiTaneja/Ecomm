const path = require('path');
const express = require('express');
//const { postProductAdd } = require('../controller/products');
const router = express.Router();

const shopController = ('../controller/shop')
router.get('/products/all' , shopController.getProductsAll);
//router.get('/products/:id' ,);
//router.get('/cart' ,);
//router.get('/cart/add' ,);


module.exports  = router;
