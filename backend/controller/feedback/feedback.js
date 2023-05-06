import FeedBack from '../../models/FeedBack/Feedback.js'
import asyncWrapper from '../../middleware/food/async.js'
import { createCustomError } from '../../errors/Food/custom-error.js'

// create a review template in DataBase
export const createFeedback = asyncWrapper(async (req, res) => {
  const feedback = await FeedBack.create(req.body)
  res.status(201).json({ feedback })
})

// add a feedback
export const addFeedback = asyncWrapper(async (req, res) => {
  const { id: locID } = req.params
  let comment = req.body.comment
  comment.postedBy = req.body.userId
  const result = await FeedBack.findOneAndUpdate(
    { loc_id: locID },
    { $push: { comments: comment } },
    { new: true, returnOriginal: false }
  )

  if (result) {
    res.status(201).json({ result })
  }
})

//delete a feedback
export const deleteFeedback = asyncWrapper(async (req, res) => {
  const { id: locID } = req.params
  let comment = req.body.comment

  const result = await FeedBack.findOneAndUpdate(
    { loc_id: locID },
    { $pull: { comments: { _id: comment._id } } },
    { new: true, returnOriginal: false }
  )

  if (result) {
    res.status(201).json({ result })
  }
})

//get all the feedbacks
export const getAllFeedbackforLoc = asyncWrapper(async (req, res) => {
  const { id: locID } = req.params

  const result = await FeedBack.findOne({ loc_id: locID }).populate(
    'loc_id',
    'name'
  )

  if (result) {
    res.status(201).json({ result })
  }
})
