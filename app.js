const path = require('path');
const express = require('express');
const app = express();
const PORT= 4444;
const mongoose = require('mongoose');
const hbs = require('hbs');
const User = require("./models/user");
//setting of partial hbs
app.use(async(req,res,next)=>{
let user= await User.findOne({
    _id: "6651b0b8056847376046b7a3"
});
req.user = user;
next();
})
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine' ,'hbs');


app.use(express.urlencoded({extended:true}));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'LinkCss')));

app.get('/');
//routes
const homeRouter = require('./routes/home');
app.get('/', homeRouter);


const adminRouter = require('./routes/admin');
app.use('/admin' , adminRouter);

const shopRouter = require('./routes/shop');
app.use('/shop' , shopRouter);

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce').then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    
    });
    
})
.catch(err=>{
    console.log(err)
})