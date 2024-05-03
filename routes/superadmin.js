const path = require('path');
const express = require('express');
const router = express.Router();

router.post('/products/add' , (req, res, next)=>{
const {name , price , description ,imageurl , seller} =req.body ;

});


module.exports= router;