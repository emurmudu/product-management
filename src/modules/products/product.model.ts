import mongoose, { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";
  
// variant sub schema
  const variantSchema = new Schema<TVariant>({
    type:  {type: String, required: true},
    value: {type: String, required: true},
  });


// inventory sub schema
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, default: 0 },
  inStock: { type: Boolean, required: true },
});

// main schema
const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true }
});

// productSchema model
export const ProductModel = model<TProduct>('Product', productSchema);

