

import express from 'express'
import { OrderController } from './order.controller';

const router = express.Router();

// create post
router.post('/', OrderController.createOrder)

// get all orders
router.get('/', OrderController.getAllOrder)

//route to get single order by email query
router.get('/', OrderController.getSingleOrder)



export const OrderRoutes = router;