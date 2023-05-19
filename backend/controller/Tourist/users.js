// const User = require('../../models/Tourists/User')
import User from '../../models/Tourists/User.js'
import asyncWrapper from '../../middleware/food/async.js'
import bcrypt from 'bcrypt'

export const createUser = asyncWrapper(async (req, res) => {
  req.body.password = await bcrypt.hashSync(req.body.password, 10)
  const user = await User.create(req.body)
  res.status(201).json({ user })
  // res.send('create delivery')
})

export const loginUser = asyncWrapper(async (req, res) => {
  const { user, pwd } = req.body
  if (!user || !pwd)
    return res.status(400).json({ msg: 'The username and password required' })

  const foundUser = await User.findOne({ user_email: user })
  if (!foundUser) return res.status(401).json({ msg: 'user not found' })

  // password comparison
  const match = await bcrypt.compare(pwd, foundUser.password)
  // const match = pwd === foundUser.password

  if (match) {
    const role = foundUser.role
    const username = foundUser.username
    const useremail = foundUser.user_email
    res.json({ username, useremail, role })
  } else {
    res.sendStatus(401)
  }
  // const user = await User.create(req.body)
  // res.status(201).json({ user })
  // res.send('create delivery')
})
