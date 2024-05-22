

import { boolean, z } from "zod";

const variantValidationSchema = z.object({
    type: z.string().trim().min(1, { message: "Type is required" }),
    value: z.string().trim().min(1, { message: "Value is required" }),
  });
  
  const inventoryValidationSchema = z.object({
    quantity: z.number().int().min(0, { message: "Quantity must be a non-negative integer" }),
    inStock: z.boolean(),
  });
  
  const productValidationSchema = z.object({
    name: z.string().trim().max(20, { message: "Max length cannot be more than 20 characters" }),
    description: z.string().trim().min(1, { message: "Description is required" }),
    price: z.number().nonnegative({ message: "Price must be a non-negative number" }),
    category: z.string().trim().min(1, { message: "Category is required" }),
    tags: z.array(z.string().trim().min(1, { message: "Tag cannot be empty" })),
    variants: z.array(variantValidationSchema),
    inventory: inventoryValidationSchema,

  });


  export default productValidationSchema;