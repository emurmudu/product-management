

import express from 'express'
import { OrderController } from './order.controller';

const router = express.Router();

// order routes
// create post
router.post('/create-order', OrderController.createOrder)

// get all orders
router.get('/', OrderController.getAllOrder)

// get single order
router.get('/', OrderController.getSingleOrder)



export const OrderRoutes = router;