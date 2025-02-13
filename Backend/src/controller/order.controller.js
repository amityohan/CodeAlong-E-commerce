const mongoose=require('mongoose')
const usermodel=require("../model/user_model.js")
const OrderModel = require("../model/order.model.js") 
// const usermodel=require('../model/user_model.js')
const cartModel = require('../model/cart.model.js')

async function CreateOrder(req,res) {
    const userId=req.userId 
    const {Items,address,totalAmount}=req.body
    try{
        if (!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(400).send({message:'Invalid user Id',success:false})
        }
        const checkUser=await usermodel.findOne({_id:userId});
        if(!checkUser){
            return res.status(400).send({message:'User not present Please signup',success:false})
        }
        if(!Items){
            return res.status(400).send({message:'Please add items to order',success:false})
        }

        const order=Items.map(async(ele)=>{
            return await OrderModel.create({
                user:userId,
                orderItems:ele.productId._id,
                shippingAddress: address,
                totalAmount:totalAmount
            });
        });
        await Promise.all(order)

        const ItemsMapped=Items.map(async(eachItem)=>{
            return await cartModel.findByIdAndDelete({_id:eachItem._id});

        })

        const checkDeletedItems=await Promise.all(ItemsMapped);

        return res
            .status(201)
            .send({ message: 'Data Successfully fetched',
                 success: true,
                 checkDeletedItems });
    }catch(err){
        return res.status(500).send({message:err.message,success:false})
    }
}

async function GetuserOrders(req,res) {
    const userId = req.userId
    try{
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).send({ message: 'Invalid user Id', success: false })
        }
        const checkUser=await usermodel.findOne({_id:userId});
        if(!checkUser){
            return res.status(400).send({message:'User not present Please signup',success:false})
        }

        const orders=await OrderModel.find({
            user:userId,
            orderStatus:{$ne:'Cancelled'},
        },{ orderStatus:1, orderItem:1 }
    ).populate('orderItems')
        
        return res.status(200).send({message:'Data Successfully fetched',success:true,orders})
    }catch(err){
        return res.status(500).send({ message: err.message, success: false,orders })
    }
}


async function CancelOrder(req,res){
    const userId=req.UserId
    const orderId=req.query.orderId;
    try{
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400)
                    .send({message:'Invalid Order Id', success:false});
        }
        if(!mongoose.Types.ObjectId.isValid(orderId)){
            return res.status(400)
                    .send({message:'Invalid Order Id', success:false})
        }
        
        await OrderModel.findByIdAndUpdate(
            {_id:orderId},
            {orderStatus:'Cancelled'},
            {new:true}
        );
        return res.status(200).send({message:'Order Cancelled Successfully',success:true})

    }catch(er){
        return res.status(500).send({message:er.message,success:false})
    }

}

module.exports={CreateOrder,GetuserOrders,CancelOrder}