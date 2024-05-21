import { Request, Response } from "express";
import { ProductServices } from "./product.service";


const addProduct = async (req:Request, res: Response) =>{
    try {
        const {product: productData} = req.body;

    // will call service function to send this data
    const result = await ProductServices.createProductDB(productData)

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


export const ProductControllers ={
    addProduct,

}