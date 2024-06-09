import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"


// create/add a new product on db
const createProductDB = async (product:TProduct) =>{
    const result = await ProductModel.create(product);
    return result;
}

// retrieve all products
const getAllProductFromDB = async(query: Record<string, unknown>)=>{
    let searchTerm = '';
  if(query?.searchTerm){
    searchTerm = query?.searchTerm as string
  }
    const result = await ProductModel.find({
        $or:['name', 'description', 'category'].map((field) =>({
          [field]: {$regex: searchTerm, $options:'i'}
        }))
      });
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

// update product from DB
const updateProductFromDB = async(_id:string, update:object)=>{
    const result = await ProductModel.findByIdAndUpdate(_id, update, {new : true});
    return result;
}


// search product
const searchProductFromDB = async(name : string)=>{
    
    const result = await ProductModel.find({
        name: new RegExp(name, 'i') })
        return result;
    };





export const ProductServices ={
    createProductDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    deleteProductFromDB,
    updateProductFromDB,
    searchProductFromDB,

}


