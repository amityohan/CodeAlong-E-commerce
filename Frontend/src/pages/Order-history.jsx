import axios from 'axios';
import {useEffect, useState} from 'react';
import CartCard from '../Components/productCard/CartCard.jsx';

function OrderHistory() {
const [orderedData,setOrderedData]=useState([]);
const data = useSelector((state) => state.user);
const fetchedOrderedProducts=async()=>{
    const token=localStorage.getItem('token');
    
    if(!token){
        return alert(`Token is missing, Please Login`)
    }

    const response=await axios.get(`http://localhost:8080/order/user-orders-data?token=${token}`)
    const reversedData=response.data.orders?.reverse();
    console.log(response.data.orders);
    setOrderedData(reversedData);
};

useEffect(()=>{
    fetchedOrderedProducts();
},[])

const handleCancel=async(id)=>{
    console.log(id);
    const token=localStorage.getItem('token');
    if(!token){
        return alert(`Token is missing, Please Login`)
    }
    await axios.patch(`http://localhost:8080/orders/cancel-order?token=${token}&orderId=${id}`);
    fetchedOrderedProducts()

}

 
return (
    <div>
      Ordered 
      {
        orderedData?.map((singleCartObject, index)=>{
            return(
                <div key={index}>
                    <CartCard
                        title={singleCartObject.orderItems.title}
                        images={singleCartObject.orderItems.images}
                        description={singleCartObject.orderItems.description}
                        discountedPrice={singleCartObject.orderItems.discountedPrice}
                        id={singleCartObject._id}
                        orderStatus={singleCartObject.orderStatus}
                        createdBy={'amit@gmail.com'}
                    />
                </div>
            )
        })
      }
    </div>
  )
}

export default OrderHistory
