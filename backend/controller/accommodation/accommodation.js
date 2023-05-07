import Accommodation from '../../models/Accommodation/Accommodation.js'
import asyncWrapper from '../../middleware/Host/async.js'
import cloudinary from '../../config/cloudinary.js'
import { createCustomError } from '../../errors/Host/custom-error.js'

// Register a new accommodation
export const createaccommodation = asyncWrapper(async (req, res) => {
  if (!req.files) {
    return res.status(400).json({ message: 'No images provided' })
  }

  const images = []

  for (const file of req.files) {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'afAccommodation',
    })

    images.push(result.secure_url)
  }

  req.body.images = images

  const accommodation = await Accommodation.create(req.body)

  res.status(201).json({ accommodation })
})

//using errors custom-error.js for createCustomError
//get a accommodation by id
export const getAccommodation = asyncWrapper(async (req, res, next) => {
  const { id: accommodationID } = req.params
  const accommodation = await Accommodation.findOne({ _id: accommodationID })

  if (!accommodation) {
    return next(
      createCustomError(
        `No Accommodation with this id: ${accommodationID}`,
        404
      )
    )
  }
  res.status(200).json({ accommodation })
})

//using errors custom-error.js for createCustomError
//delete a accommodation by id
export const deleteaccommodation = asyncWrapper(async (req, res, next) => {
  const { id: accommodationID } = req.params
  const accommodation = await Accommodation.findOneAndDelete({
    _id: accommodationID,
  })
  if (!accommodation) {
    return next(
      createCustomError(
        `No accommodation with this id: ${accommodationID}`,
        404
      )
    )
  }
  res.status(200).json({ accommodation })
})

//using errors custom-error.js for createCustomError

export const getAccommodationByHost = asyncWrapper(async (req, res, next) => {
  const { id: hostID } = req.params
  const accommodation = await Accommodation.find({ createdBy: hostID }).exec()
  if (!accommodation) {
    return next(
      createCustomError(`No accommodation with category: ${hostID}`, 404)
    )
  }
  res.status(200).json({ accommodation })
})

// This is used to retriew all Accommodation Details-----------------------------------------------------
export const getAllAccommodation = asyncWrapper(async (req, res) => {
  const accommodation = await Accommodation.find({})
  // const accommodation = await Accommodation.find({}).populate('host')
  res.status(200).json({ accommodation })
})

//using errors custom-error.js for createCustomError
//update a Accommodation by id
export const updateAccommodation = asyncWrapper(async (req, res, next) => {
  const { id: accommodationID } = req.params
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'afAccommodation',
    })
    req.body.image = result.secure_url
  }

  const accommodation = await Accommodation.findOneAndUpdate(
    { _id: accommodationID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  if (!accommodation) {
    return next(
      createCustomError(`No accommodation with id: ${accommodationID}`, 404)
    )
  }
  res.status(200).json({ accommodation })
})
