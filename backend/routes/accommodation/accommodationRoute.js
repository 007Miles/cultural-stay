import express from 'express'

const router = express.Router()

import {
  createaccommodation,
  deleteaccommodation,
  getAllAccommodation,
  updateAccommodation,
} from '../../controller/accommodation/accommodation.js'

router.route('/').get(getAllAccommodation).post(createaccommodation)
router.route('/:id').patch(updateAccommodation).delete(deleteaccommodation)

export default router
