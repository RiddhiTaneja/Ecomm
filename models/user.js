const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true

    },
    password: String,
    cart:[{
        id:{
            type:Schema.Types.ObjectId,
            required: true,
            ref: "products"
        },
        quantity: Number
    }],
    orders:[{
        products:[{
            product: {  type: Schema.Types.ObjectId,
                ref: "products"
            },
            quantity: Number,
            price: Number
    }],
        date:{
            type:Date,
            default:Date.now
        }
    }]
})

module.exports = mongoose.model('users',userSchema);

let users =([
    {
        name:"Riddhi",
        email:"riddhitaneja26@gmail.com",
        password:"12345678",
        cart:[],
        orders:[]
    },

    {
        name:"Pankaj",
        email:"pankaj26@gmail.com",
        password:"1234567",
        cart:[],
        orders:[]
    },

    {
        name:"Aryan",
        email:"aryan123@gmail.com",
        password:"123456",
        cart:[],
        orders:[]
    },

])