


// Order related controllers:

import { Request, Response } from "express";
import { ProductServices2 } from "./order.service";
import orderValidationSchema from "./order.validation";


// create new orders
const createOrder = async (req:Request, res: Response) =>{
    try {
        const order = req.body;
        const zodParsedOrder = orderValidationSchema.parse(order)

    const result = await ProductServices2.createOrderDB(zodParsedOrder)

    // send response
    res.status(200).json({
        success: true,
        message: 'Order is created successfully',
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


// retrieve all orders
const getAllOrder = async (req:Request, res: Response) =>{
    try {
  
    const result = await ProductServices2.getAllOrderFromDB()

    // send response
    res.status(200).json({
        success: true,
        message: 'Orders fetched successfully',
        data: result,
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        })
    }

}


// retrieve single order by email
const getSingleOrder = async (req:Request, res: Response) =>{
    try {
    // const {orderId} = req.params;
    const {orderId} = req.params;

    const result = await ProductServices2.getSingleOrderFromDB(orderId)

    // send response
    res.status(200).json({
        success: true,
        message: 'Order fetched successfully',
        data: result,
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        })
    }

}



export const ProductControllers2 ={
    createOrder,
    getAllOrder,
    getSingleOrder,
}
