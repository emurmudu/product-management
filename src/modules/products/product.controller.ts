import { Request, Response } from "express";
import { ProductServices} from "./product.service";
import productValidationSchema from "./product.validation";


// product releated controllers:

// create/add a new product on db
const addProduct = async (req:Request, res: Response) =>{
    
    try {
        const product = req.body;

        const zodParsedData = productValidationSchema.parse(product)

    const result = await ProductServices.createProductDB(zodParsedData)

    res.status(200).json({
        success: true,
        message: 'Product created successfully',
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
    const result = await ProductServices.getAllProductFromDB(req.query)

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
    if(!result){
        throw new Error('Product not deleted')
    }

    res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
        data: null 
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error
        })
    }
}


// update product
const updateSingleProduct = async (req:Request, res: Response) =>{
    try {
    const id = req.params.productId;
    const updateData = {
        $set :{
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            tags: req.body.tags,
            variants: req.body.variants,
            inventory: req.body.inventory,
        }
    };
  
    const result = await ProductServices.updateProductFromDB(id, updateData)

    res.status(200).json({
        success: true,
        message: 'Product updated successfully',
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


// search products
const searchProducts = async (req:Request, res: Response) =>{
    try {
    const name = req.query.name as string;
  
    const result = await ProductServices.searchProductFromDB(name)
    
    res.status(200).json({
        success: true,
        message:`Products matching search term '${name}' fetched successfully!`,
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



export const ProductControllers ={
    addProduct,
    getAllProduct,
    getSingleProduct,
    deleteSingleProduct,
    updateSingleProduct,
    searchProducts,

}
