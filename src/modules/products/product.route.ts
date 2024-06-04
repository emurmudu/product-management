

import express from 'express'
import { ProductControllers} from './product.controller';

const router = express.Router();
// product routes
// create post
router.post('/', ProductControllers.addProduct)

// get all products
router.get('/', ProductControllers.getAllProduct )

// get single product
router.get('/:productId', ProductControllers.getSingleProduct)

// delete single product
router.delete('/:productId', ProductControllers.deleteSingleProduct)

// update product
router.put('/:productId', ProductControllers.updateSingleProduct)


// search products
router.get('/', ProductControllers.searchProducts)




export const ProductRoutes = router;
