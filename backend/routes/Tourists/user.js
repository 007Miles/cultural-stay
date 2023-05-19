import express from 'express'
const router = express.Router()

import { createUser } from '../../controller/Tourist/users.js'

//end-points
router.route('/signIn').post(createUser)
// router
//   .route('/:id')
//   .get(getAllFeedbackforLoc)
//   .patch(addFeedback)
//   .delete(deleteFeedback)
// router.route('/ratings/:id').patch(giveRating)

export default router
