const path = require('path');
const express = require('express');
const app = express();
const PORT= 4444;
const mongoose = require('mongoose');


app.set('view engine' ,'hbs');
app.use(express.urlencoded({extended:true}));

//routes
const adminRouter = require('./routes/admin')
app.use('/admin' , adminRouter)
    
   

mongoose.connect('mongodb://127.0.0.1:27017/taneja').then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    
    });
    
})
.catch(err=>{
    console.log(err)
})

// ad