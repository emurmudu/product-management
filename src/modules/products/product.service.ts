import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"



const createProductDB = async (product:TProduct) =>{

    const result = await ProductModel.create(product);
    return result;
}


export const ProductServices ={
    createProductDB,
    

}