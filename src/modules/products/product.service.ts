import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"


// create/add a new product on db
const createProductDB = async (product:TProduct) =>{
    const result = await ProductModel.create(product);
    return result;
}

// retrieve all products
const getAllProductDB = async()=>{
    const result = await ProductModel.find();
    return result;
}


export const ProductServices ={
    createProductDB,
    getAllProductDB,
    

}