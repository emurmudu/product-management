


// Order related controllers:

import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";
import { z } from 'zod';


// create new orders
const createOrder = async (req:Request, res: Response) =>{
    try {
        const order = req.body;
        const zodParsedOrder = orderValidationSchema.parse(order)

    const result = await OrderServices.createOrderDB(zodParsedOrder)

    // send response
    res.status(200).json({
        success: true,
        message: 'Order is created successfully',
        data: result,
    })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: error.errors,
            });
        } else if (error instanceof Error) {
            if (error.message === 'Insufficient quantity available in inventory') {
                return res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error.message === 'Product not found') {
                return res.status(404).json({
                    success: false,
                    message: error.message,
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'Something went wrong',
                    error: error.message,
                });
            }
        } else {
            res.status(500).json({
                success: false,
                message: 'Something went wrong',
                error: 'Unknown error',
            });
        }
    }

}


// retrieve all orders
const getAllOrder = async (req:Request, res: Response) =>{
    try {
  
    const result = await OrderServices.getAllOrderFromDB()

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
const getSingleOrder = async (req: Request, res: Response) =>{
    try {
    // const {orderId} = req.params;
    const email = req.query.email  as string;
    const result = await OrderServices.getOrderByEmailFromDB(email);
    
    // send response
    res.status(200).json({
        success: true,
        message: `Order fetched successfully with ${email}`,
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



export const OrderController ={
    createOrder,
    getAllOrder,
    getSingleOrder,
}
