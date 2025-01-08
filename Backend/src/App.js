if (process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'./src/config/.env'
    });
}
const express=require('express');
const UserRouter=require('./Routes/user.route.js')
const productRouter=require('./Routes/product.route.js')

const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    return res.send('Welcome to backend')
});

app.use('/user',UserRouter)

app.use('/product', productRouter)

module.exports=app