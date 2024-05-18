const path = require('path');
const express = require('express');
//const { postProductAdd } = require('../controller/products');
const router = express.Router();

const adminController = require('../controller/admin'); //req  kaise aai 
//GET req
router.get('/' ,adminController.getAdminHome)
router.get('/products/all',adminController.getProductsAll);
router.get('/products/add' , adminController.getProductsAdd);
router.get('/products/update/:id' , adminController.getProductsUpdate);
//router.get('/products/:id' ,)
router.get('/products/delete/:id' ,adminController.getDeleteProductById);

router.post('/products/add' , adminController.postProductsAdd);
router.post('/products/update' ,adminController.postProductsUpdate);
//router.post('/products/delete/:id' ,adminController.PostProductsDelete);
module.exports= router;
