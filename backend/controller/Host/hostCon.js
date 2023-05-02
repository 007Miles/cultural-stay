const Host = require('../models/Host/Host.js')
const asyncWrapper = require('../middleware/async')
const cloudinary = require('../middleware/cloudinary')
const { createCustomError } = require('../errors/custom-error')

// This is used to retriew all Hosts-----------------------------------------------------
export const getAllHosts = asyncWrapper(async (req, res) => {
  const hosts = await Host.find({})
  res.status(200).json({ hosts })
})
// -------------------------------------------------------------------------------------------

// This is used to add a single Host---------------------------------------
export const addHost = asyncWrapper(async (req, res) => {
  const hosts = await Host.create(req.body)
  res.status(201).json({ hosts })
})
// -------------------------------------------------------------------------------------------

// This is used to update cart items-------------------------------------------------------------
export const updatehost = asyncWrapper(async (req, res) => {
  const { id: hostID } = req.params

  const hosts = await Host.findOneAndUpdate({ _id: hostID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!hosts) {
    return next(createCustomError(`No Host with this id: ${hostID}`, 404))
  }

  res.status(200).json({ hosts })
})
// -------------------------------------------------------------------------------------------

// This is used to delete single item from the cart-------------------------------------------
export const deletehost = asyncWrapper(async (req, res) => {
  const { id: hostID } = req.params
  const hosts = await Host.findOneAndDelete({ _id: hostID })
  if (!hosts) {
    return next(createCustomError(`No Host with this id: ${hostID}`, 404))
  }

  res.status(200).json({ hosts })
})
// -------------------------------------------------------------------------------------------
