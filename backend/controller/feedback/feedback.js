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

// add a feedback
export const giveRating = asyncWrapper(async (req, res) => {
  const { id: locID } = req.params
  let rating = req.body.rating
  let userId = req.body.rating.postedBy

  const feedback = await FeedBack.findOne({ loc_id: locID })
  const existingRating = feedback.ratings_list.find(
    (rating) => rating.postedBy === userId
  )

  if (existingRating) {
    // Update the existing rating
    existingRating.val = rating.val
  } else {
    // Add a new rating to the ratings_list array
    feedback.ratings_list.push(rating)
  }

  // const result = await FeedBack.findOneAndUpdate(
  //   { loc_id: locID },
  //   { $push: { ratings_list: rating } },
  //   { new: true, returnOriginal: false }
  // )
  const result = feedback.save()

  if (result) {
    res.status(201).json({ msg: 'rating updated' })
  }
})

//delete a feedback
export const deleteFeedback = asyncWrapper(async (req, res) => {
  const { id: locID } = req.params
  let comment = req.body.comment

  const result = await FeedBack.findOneAndUpdate(
    { loc_id: locID },
    { $pull: { comments: { _id: comment } } },
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
