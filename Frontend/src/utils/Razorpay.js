import axios from 'axios';
export const handlePay=async(total, token, orderIds)=>{
    try{
        const createOrderResponse= await axios.post(
            'http://localhost:8080/payment/create-order',
            {
                amount:total,
                currency:"INR",
            }
        );

        const {amount, id:orderId, currency}=createOrderResponse.data.orders;

        const responseKeys= await axios.get(
            'http://localhost:8080/payment/get-razorpay-key'
        );

        const keys=responseKeys.data;

        const options={
            key:keys.key,
            amount:amount,
            currency:currency,
            name:"Ecom Follow along",
            description: 'Test transaction',
            image:'https://cdn.vectorstock.com/i/500p/22/42/eco-green-leaf-concept-vector-1722242.jpg',
            order_id:orderId,
            handler:async function(response){
                const result=await axios.post(
                    `http://localhost:8080/payment/pay-order?token=${token}`,
                    {
                        amount:amount,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature:response.razorpay_signature,
                        orderIds,
                    }
                );
                alert(result.data.message);
            },
            prefill:{
                name:"Yohan",
                email:"yohan@gmail.com",
                contact:"9654158723",
            },
            notes:{
                address:'Razorpay Corporate Office',

            },
            theme:{
                color:'black',
            },
        };

        const paymentObject=new window.Razorpay(options);
        paymentObject.open();

    }catch(er){
        console.log(er.message);
    }
}