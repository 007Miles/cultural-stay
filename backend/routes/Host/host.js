import express from 'express'

const router = express.Router()

import {
  getAllHosts,
  addHost,
  updatehost,
  deletehost,
} from '../../controller/Host/Host.js'

// // middleware for routes
// import upload from '../../middleware/cloudinary.js'

//end-points
router.route('/').get(getAllHosts).post(addHost)
// .post(upload.single('image'), createaccommodation)
router
  .route('/:id')
  .patch(updatehost)
  // .patch(upload.single('image'), updateRestaurant)
  .delete(deletehost)

export default router
