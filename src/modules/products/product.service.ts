import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"


// create/add a new product on db
const createProductDB = async (product:TProduct) =>{
    const result = await ProductModel.create(product);
    return result;
}

// retrieve all products
const getAllProductFromDB = async()=>{
    const result = await ProductModel.find();
    return result;
}

// retrieve a specific product by id
const getSingleProductFromDB = async(_id:string)=>{
    const result = await ProductModel.findOne({_id});
    return result;
}

const deleteProductFromDB = async(_id:string)=>{
    // const result = await ProductModel.updateOne({_id}, {isDeleted:true})
    const result = await ProductModel.deleteOne({_id})
    return result;
}


export const ProductServices ={
    createProductDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    deleteProductFromDB,

}


