

import express from 'express'
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/add-product', ProductControllers.addProduct)

router.get('/', ProductControllers.getAllProduct )

router.get('/:productId', ProductControllers.getSingleProduct)

export const ProductRoutes = router;