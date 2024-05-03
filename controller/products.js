 const Products = require('../models/products');


module.exports.postProductsAdd = async (req, res , next) =>{

const {name , price , description , imageUrl , seller} = req.body;
console.log(name , price , description );

await Products.create({
    name , 
    price,
    description,
    imageUrl,
    seller
});

res.redirect('/admin/products/all');
}

module.exports.getProductsAll = async (req, res , next) =>{
    const  products = await Products.find();
   // console.log(products)
    res.send(products);
    }

    