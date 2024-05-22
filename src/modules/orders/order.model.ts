import { Schema, model } from "mongoose"
import { TOrder } from "./order.interface"


// order schema
const orderSchema = new Schema<TOrder>({
    email:{type: String, required: true, unique:false},
    productId: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true}
  })
  
  export const OrderModel = model<TOrder>('Order', orderSchema)
  
  