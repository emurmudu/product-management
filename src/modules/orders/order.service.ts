


// order related service methods

import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

// create a order
const createOrderDB = async (order:TOrder) =>{
    const result = await OrderModel.create(order);
    return result;
}

// get all order
const getAllOrderFromDB = async()=>{
    const result = await OrderModel.find()
    return result;
}

// get single order
const getSingleOrderFromDB = async(email:string)=>{
    const result = await OrderModel.find({email});
    return result;
}



export const ProductServices2 ={
    createOrderDB,
    getAllOrderFromDB,
    getSingleOrderFromDB,
}