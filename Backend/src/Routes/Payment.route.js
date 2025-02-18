const express=require('express');
const router=express.Router();

const{
    getKeys,
    createOrder,
    PayOrders,
}=require('../controller/payment.controller.js')

const verifyUser=require("../Middlewares/jwt-verify.js");


router.post('/create-order', createOrder);

router.post('/pay-order', verifyUser, PayOrders);

router.get('/get-razorpay-key', getKeys);

module.exports=router
