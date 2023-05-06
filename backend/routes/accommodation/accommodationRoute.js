import express from 'express'

const router = express.Router()

import {
  createaccommodation,
  deleteaccommodation,
  getAllAccommodation,
  updateAccommodation,
  getAccommodationByHost,
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

export default router
