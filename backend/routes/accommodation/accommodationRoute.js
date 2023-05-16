import express from 'express'

const router = express.Router()

import {
  createaccommodation,
  deleteaccommodation,
  getAllAccommodation,
  updateAccommodation,
  getAccommodationByHost,
  getAccommodation,
} from '../../controller/accommodation/accommodation.js'

// middleware for routes
import upload from '../../middleware/cloudinary.js'

router
  .route('/')
  .get(getAllAccommodation)
  .post(upload.array('images'), createaccommodation)
router
  .route('/:id')
  .patch(updateAccommodation)
  .delete(deleteaccommodation)
  .get(getAccommodationByHost)

router.route('/byid/:id').get(getAccommodation)

export default router
