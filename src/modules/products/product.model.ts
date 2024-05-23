import  { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

  
// variant sub schema
  const variantSchema = new Schema<TVariant>({
    type:  {type: String, required: true, trim:true},
    value: {type: String, required: true, trim:true},
  });


// inventory sub schema
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true, trim:true  },
  inStock: { type: Boolean, required: true, trim:true },
});


// main schema
const productSchema = new Schema<TProduct>({
  name: { type: String, required: true, maxlength:[20, 'Max length can not be more than 20'], trim:true },
  description: { type: String, required: true, trim:true },
  price: { type: Number, required: true, trim:true  },
  category: { type: String, required: true, trim:true },
  tags: { type: [String], required: true, trim:true  },
  variants: {type:[variantSchema], required: true},
  inventory: {type:inventorySchema, required: true },

});



// productSchema model
export const ProductModel = model<TProduct>('Product', productSchema);



