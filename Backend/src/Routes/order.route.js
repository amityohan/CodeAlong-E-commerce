const express=require('express')
const {verifyToken}=require('../Middlewares/jwt-verify.js')
const { CreateOrder, GetuserOrders } = require('../controller/order.controller.js')
const router =express.Router()

router.post('/confirm-order', verifyToken, CreateOrder)
router.get('/user-order-data', verifyToken, GetuserOrders)

module.exports=router;