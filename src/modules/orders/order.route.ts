

import express from 'express'
import { ProductControllers2 } from './order.controller';

const router = express.Router();

// order routes
// create post
router.post('/create-order', ProductControllers2.createOrder)

// get all orders
router.get('/', ProductControllers2.getAllOrder)

// get single order
router.get('/:orderId', ProductControllers2.getSingleOrder)



export const ProductRoutes2 = router;