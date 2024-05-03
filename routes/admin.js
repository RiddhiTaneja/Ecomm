const path = require('path');
const express = require('express');
//const { postProductAdd } = require('../controller/products');
const router = express.Router();

const adminController = require('../controller/products'); //req  kaise aai 
//GET req
router.get('/products/all',adminController.getProductsAll);
//router.get('/products/:id' ,)
//router.get('/products/delete/:id' ,)

router.post('/products/add' , adminController.postProductsAdd);
//router.post('/products/update' ,);
module.exports= router;
