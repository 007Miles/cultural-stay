import express from 'express'

const router = express.Router()

import {
  createRestaurant,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  // changeRestaurantRatingByID,
} from '../../controller/restaurants/restaurants.js'

// middleware for routes
import upload from '../../middleware/cloudinary.js'

//end-points
router
  .route('/')
  .get(getAllRestaurants)
  .post(upload.single('image'), createRestaurant)
router
  .route('/:id')
  .get(getRestaurant)
  .patch(upload.single('image'), updateRestaurant)
  .delete(deleteRestaurant)
// router.route('/restaurantRating/:id').patch(changeRestaurantRatingByID)

export default router
