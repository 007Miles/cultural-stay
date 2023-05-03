import express from 'express'

const router = express.Router()

import {
  createFood,
  getFood,
  deleteFood,
  updateFood,
  getAllFood,
} from '../../controller/food/food.js'

// middleware for routes
import upload from '../../middleware/cloudinary.js'

//end-points
router.route('/').get(getAllFood).post(upload.single('image'), createFood)
router
  .route('/:id')
  .get(getFood)
  .patch(upload.single('image'), updateFood)
  .delete(deleteFood)

export default router
