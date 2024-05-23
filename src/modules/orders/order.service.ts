


// order related service methods

// import { string } from "zod";
import { ProductModel } from "../products/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrderDB = async (order:TOrder) =>{
    const product = await ProductModel.findById(order.productId);
    if(!product){
        throw new Error('Product not found');
    }

    if (product.inventory.quantity < order.quantity) {
        throw new Error('Insufficient quantity available in inventory');
    }

    product.inventory.quantity -= order.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;

    await product.save();

    const result = await OrderModel.create(order);
    return result;
}

// get all order
const getAllOrderFromDB = async()=>{
    const result = await OrderModel.find()
    return result;
}

// get single order by email

const getOrderByEmailFromDB = async(email : string)=>{
    const result = await OrderModel.find({email});
    return result;
}



export const OrderServices ={
    createOrderDB,
    getAllOrderFromDB,
    getOrderByEmailFromDB,
}