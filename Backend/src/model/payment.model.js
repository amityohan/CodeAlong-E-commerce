const mongoose=require('mongoose')
const file={
    isPaid:{
        type:Boolean,
        require:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    paidOrders:[{
        type:mongoose.Types.ObjectId,
        ref:'Order',
        required:true
    }],
    razorpay:{
        orderId:{type:String, required:true},
        paymentId:{type:String, required:true},
        signature:{type:String, required:true},
    }

}

const SchemaPayment=new mongoose.Schema(file,{versionKey:false})
const PaymentModel=mongoose.model('Payment',SchemaPayment)
module.exports=PaymentModel