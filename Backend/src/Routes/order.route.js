const express=require('express')
const verifyUser=require('../Middlewares/jwt-verify.js')
const { CreateOrder, GetuserOrders, CancelOrder } = require('../controller/order.controller.js')
const router =express.Router()

router.post('/confirm-order', verifyUser, CreateOrder)
router.get('/user-orders-data', verifyUser, GetuserOrders,CancelOrder)

module.exports=router;