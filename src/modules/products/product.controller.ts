import { Request, Response } from "express";
import { ProductServices} from "./product.service";
import productValidationSchema from "./product.validation";


// product releated controllers:

// create/add a new product on db
const addProduct = async (req:Request, res: Response) =>{
    try {
        // const {product: productData} = req.body;
        const product = req.body;

        const zodParsedData = productValidationSchema.parse(product)

    // will call service function to send this data
    // const result = await ProductServices.createProductDB(productData)
    const result = await ProductServices.createProductDB(zodParsedData)

    // send response
    res.status(200).json({
        success: true,
        message: 'Product is created successfully',
        data: result,
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error
        })
    }

}


// retieve all product
const getAllProduct = async (req:Request, res: Response) =>{
    try {
    const result = await ProductServices.getAllProductFromDB()

    // send response
    res.status(200).json({
        success: true,
        message: 'Products fetched successfully',
        data: result,
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error
        })
    }

}


// retieve single product
const getSingleProduct = async (req:Request, res: Response) =>{
    try {
    const {productId} = req.params;
  
    const result = await ProductServices.getSingleProductFromDB(productId)

    // send response
    res.status(200).json({
        success: true,
        message: 'Product fetched successfully',
        data: result,
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error
        })
    }

}

// delete product

const deleteSingleProduct = async (req:Request, res: Response) =>{
    try {
    const {productId} = req.params;
  
    const result = await ProductServices.deleteProductFromDB(productId)

    // send response
    res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
        data: null,
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error
        })
    }

}


export const ProductControllers ={
    addProduct,
    getAllProduct,
    getSingleProduct,
    deleteSingleProduct,

}
