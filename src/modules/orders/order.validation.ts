import { z } from "zod";

// Define the Zod schema for an order
const orderValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  productId: z.string().nonempty({ message: "Product ID is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z
    .number()
    .int()
    .positive({ message: "Quantity must be a positive integer" }),
});

export default orderValidationSchema;
