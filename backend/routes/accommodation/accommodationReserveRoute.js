import express from 'express'

const router = express.Router()

import {
  getAllReservation,
  addReserve,
  deletereservation,
} from '../../controller/accommodation/accommodationReserve.js'

router.route('/').get(getAllReservation).post(addReserve)
router.route('/:id').delete(deletereservation)

export default router
