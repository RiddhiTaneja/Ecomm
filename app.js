const path = require('path');
const express = require('express');
const app = express();
const PORT= 4444;
const mongoose = require('mongoose');
const hbs = require('hbs');
//setting of partial hbs
app.set('view engine' ,'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/' ,(req,res,next)=>{
    res.render('index');

})
//routes
const adminRouter = require('./routes/admin')
app.use('/admin' , adminRouter)
    

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

// ad