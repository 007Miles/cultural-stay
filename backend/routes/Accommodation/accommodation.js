import express from 'express'

const router = express.Router()

import {
  getAllAccommodation,
  getAccommodationByID,
  getAccommodationByHost,
  createaccommodation,
  deleteaccommodation,
  changeAccommodationRatingByID,
  updateAccommodation,
} from '../../controller/Host/accommodation.js'

// // middleware for routes
// import upload from '../../middleware/cloudinary.js'

//end-points
router.route('/').get(getAllAccommodation).post(createaccommodation)
// .post(upload.single('image'), createaccommodation)
router
  .route('/:id')
  .get(getAccommodationByID)
  .patch(updateAccommodation)
  // .patch(upload.single('image'), updateRestaurant)
  .delete(deleteaccommodation)
router.route('/accommodationRating/:id').patch(changeAccommodationRatingByID)
router.route('/accommodationByHost/:id').get(getAccommodationByHost)

export default router
