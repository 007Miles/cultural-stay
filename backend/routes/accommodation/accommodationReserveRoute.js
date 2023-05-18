import express from 'express'

const router = express.Router()

import {
  getAllReservation,
  addReserve,
  deletereservation,
  getPendingReservationsByHostId,
} from '../../controller/accommodation/accommodationReserve.js'

router.route('/').get(getAllReservation).post(addReserve)
router.route('/:id').delete(deletereservation)

router.route('/pending/:id').get(getPendingReservationsByHostId)

export default router
