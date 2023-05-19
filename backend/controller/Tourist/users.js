// const User = require('../../models/Tourists/User')
import User from '../../models/Tourists/User.js'
import asyncWrapper from '../../middleware/food/async.js'

export const createUser = asyncWrapper(async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json({ user })
  // res.send('create delivery')
})
