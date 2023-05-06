import express from 'express'
const router = express.Router()

import {
  createFeedback,
  addFeedback,
  deleteFeedback,
  getAllFeedbackforLoc,
  giveRating,
} from '../../controller/feedback/feedback.js'

//end-points
router.route('/').post(createFeedback)
router
  .route('/:id')
  .get(getAllFeedbackforLoc)
  .patch(addFeedback)
  .delete(deleteFeedback)
router.route('/ratings/:id').patch(giveRating)

export default router
