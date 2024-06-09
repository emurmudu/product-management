


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
const getAllOrderFromDB = async(query: Record<string, unknown>)=>{
    const queryObj = {...query};
    const searchFields = ['email'];
    let searchTerm = '';
    if(query?.searchTerm){
      searchTerm = query?.searchTerm as string
    }
    const searchQuery = OrderModel.find({
      $or:searchFields.map((field) =>({
        [field]: {$regex: searchTerm, $options:'i'}
      }))
    })
  
    const excludeFields = ['searchTerm'];
    excludeFields.forEach((el) => delete queryObj[el]);

    const result = await searchQuery.find(queryObj)
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