import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// create/add a new product on db
const addProduct = async (req:Request, res: Response) =>{
    try {
        // const {product: productData} = req.body;
        const product = req.body;

    // will call service function to send this data
    // const result = await ProductServices.createProductDB(productData)
    const result = await ProductServices.createProductDB(product)

    // send response
    res.status(200).json({
        success: true,
        message: 'Product is created successfully',
        data: result,
    })
    } catch (error) {
        console.log(error);
    }

}


// retieve all product
const getAllProduct = async (req:Request, res: Response) =>{
    try {
  
    const result = await ProductServices.getAllProductDB()

    // send response
    res.status(200).json({
        success: true,
        message: 'Products fetched successfully',
        data: result,
    })
    } catch (error) {
        console.log(error);
    }

}







export const ProductControllers ={
    addProduct,
    getAllProduct,

}