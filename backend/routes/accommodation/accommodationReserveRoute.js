import express from 'express'
import upload from '../../middleware/cloudinary.js'

const router = express.Router()

import {
  getAllReservation,
  addReserve,
  deletereservation,
  getPendingReservationsByHostId,
  getReservationByID,
  updateReservationStatus,
  getReservationsByHostId,
} from '../../controller/accommodation/accommodationReserve.js'

router.route('/').get(getAllReservation)
router.post('/', upload.array('images'), addReserve)
router
  .route('/:id')
  .delete(deletereservation)
  .get(getReservationByID)
  .post(updateReservationStatus)

router.route('/pending/:id').get(getPendingReservationsByHostId)
router.route('/host/:hostId').get(getReservationsByHostId)

export default router
