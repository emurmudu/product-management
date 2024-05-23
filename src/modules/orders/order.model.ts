import { Schema, model } from "mongoose"
import { TOrder } from "./order.interface"


// order schema
const orderSchema = new Schema<TOrder>({
    email:{type: String, required: true, unique:false, trim:true},
    productId: {type: String, required: true, trim:true},
    price: {type: Number, required: true, trim:true},
    quantity: {type: Number, required: true, trim:true}
  })
  
  export const OrderModel = model<TOrder>('Order', orderSchema)
  
  