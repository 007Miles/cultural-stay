const Accommodation = require('../models/Host/Accommodation.js')
const asyncWrapper = require('../middleware/async')
const cloudinary = require('../middleware/cloudinary')
const { createCustomError } = require('../errors/custom-error')

// Register a new accommodation
const createaccommodation = asyncWrapper(async (req, res) => {
  //   const result = await cloudinary.uploader.upload(req.file.path, {
  //     folder: 'afAccommodation',
  //   })

  //   req.body.image = result.secure_url

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
const deleteaccommodation = asyncWrapper(async (req, res, next) => {
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

// //using errors custom-error.js for createCustomError
// //get all Accommodation of a given category
// const getAccommodationByHost = asyncWrapper(async (req, res, next) => {
//   const { id: hostID } = req.params
//   const accommodation = await Accommodation.find({ createdBy: hostID }).exec()
//   if (!accommodation) {
//     return next(
//       createCustomError(`No accommodation with category: ${hostID}`, 404)
//     )
//   }
//   res.status(200).json({ accommodation })
// })

// This is used to retriew all Accommodation Details-----------------------------------------------------
const getAllAccommodation = asyncWrapper(async (req, res) => {
  const accommodation = await Accommodation.find({})
  res.status(200).json({ accommodation })
})

//using errors custom-error.js for createCustomError
//update a Accommodation by id
const updateAccommodation = asyncWrapper(async (req, res, next) => {
  const { id: accommodationID } = req.params
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'afRestaurant',
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

//update Accommodation rating by id
const changeAccommodationRatingByID = asyncWrapper(async (req, res, next) => {
  const { id: accommodationID } = req.params
  const accommodation = await Accommodation.findOneAndUpdate(
    { _id: accommodationID },
    req.body.rating,
    {
      new: true,
      runValidators: true,
    }
  )
  var changeRating = function () {
    accommodation.rating = req.body.rating
    accommodation.rate_count = accommodation.rate_count + 1
    accommodation.rate_aggregate =
      accommodation.rate_aggregate + accommodation.rating
    var newRating = accommodation.rate_aggregate / accommodation.rate_count

    accommodation.rating = parseFloat(newRating).toFixed(2) //newRating
    accommodation.save()
  }
  changeRating()

  if (!accommodation) {
    return next(
      createCustomError(
        `No accommodation with this id: ${accommodationID}`,
        404
      )
    )
  }
  res.status(200).json(`Rating successfully updated`)
})

// // get all products with search and sort options passed as a query in the req
// const getAllProducts = async (req, res) => {
//   const {
//     availability,
//     manufacturer,
//     product_name,
//     category,
//     sort,
//     fields,
//     numericFilters,
//   } = req.query
//   const queryObject = {}

//   if (availability) {
//     queryObject.availability = availability === 'true' ? true : false
//   }

//   if (manufacturer) {
//     queryObject.manufacturer = { $regex: manufacturer, $options: 'i' }
//   }

//   if (product_name) {
//     queryObject.product_name = { $regex: product_name, $options: 'i' }
//   }

//   if (category) {
//     queryObject.category = category
//   }

//   if (numericFilters) {
//     const operatorMap = {
//       '>': '$gt',
//       '>=': '$gte',
//       '=': '$eq',
//       '<': '$lt',
//       '<=': '$lte',
//     }
//     const regEx = /\b(<|>|>=|=|<=)\b/g
//     let filters = numericFilters.replace(
//       regEx,
//       (match) => `-${operatorMap[match]}-`
//     )
//     const options = ['price', 'rating', 'package_quantity']
//     filters = filters.split(',').forEach((item) => {
//       const [field, operator, value] = item.split('-')
//       if (options.includes(field)) {
//         queryObject[field] = { [operator]: Number(value) }
//       }
//     })
//   }

//   console.log(queryObject)

//   let result = Product.find(queryObject) // (req.query)
//   // sort
//   if (sort) {
//     const sortList = sort.split(',').join(' ')
//     result = result.sort(sortList)
//   } else {
//     result = result.sort('createdAt')
//   }

//   if (fields) {
//     const fieldList = fields.split(',').join(' ')
//     result = result.select(fieldList)
//   }

//   const products = await result

//   res.status(200).json({ products, nbHits: products.length }) //
// }

module.exports = {
  getAllAccommodation,
  getAccommodationByHost,
  createaccommodation,
  deleteaccommodation,
  changeAccommodationRatingByID,
  updateAccommodation,
}
