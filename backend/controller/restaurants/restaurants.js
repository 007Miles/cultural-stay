import Restaurants from '../../models/restaurants/Restaurants.js'
import asyncWrapper from '../../middleware/food/async.js'
import cloudinary from '../../config/cloudinary.js'
import { createCustomError } from '../../errors/Food/custom-error.js'

// create a new restaurant with checking image file
export const createRestaurant = asyncWrapper(async (req, res) => {
  if (!req.files) {
    return res.status(400).json({ message: 'No image provided' })
  }

  // const result = await cloudinary.uploader.upload(req.file.path, {
  //   folder: 'afRestaurant',
  // })

  // req.body.image = result.secure_url
  const image = []

  for (const file of req.files) {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'afRestaurant',
    })

    image.push(result.secure_url)
  }

  req.body.image = image

  const restaurant = await Restaurants.create(req.body)
  res.status(201).json({ restaurant })
})

//using errors custom-error.js for createCustomError
//get a restaurant by id
export const getRestaurant = asyncWrapper(async (req, res, next) => {
  const { id: restaurantID } = req.params
  const restaurant = await Restaurants.findOne({ _id: restaurantID })

  if (!restaurant) {
    return next(
      createCustomError(`No restaurant with id: ${restaurantID}`, 404)
    )
  }
  res.status(200).json({ restaurant })
})

//using errors custom-error.js for createCustomError
//delete a restaurant by id
export const deleteRestaurant = asyncWrapper(async (req, res, next) => {
  const { id: restaurantID } = req.params
  const restaurant = await Restaurants.findOneAndDelete({ _id: restaurantID })
  if (!restaurant) {
    return next(
      createCustomError(`No restaurant with id: ${restaurantID}`, 404)
    )
  }
  res.status(200).json({ restaurant })
})

//using errors custom-error.js for createCustomError
//update a restaurant by id
export const updateRestaurant = asyncWrapper(async (req, res, next) => {
  const { id: restaurantID } = req.params
  const newFood = req.body.food // pushing new arrays without overwritting

  // Construct the MongoDB update object
  const updateObj = {}
  if (newFood) {
    updateObj.$push = { food: newFood }
  }
  if (req.body.name) {
    updateObj.name = req.body.name
  }
  if (req.body.description) {
    updateObj.description = req.body.description
  }
  if (req.body.city) {
    updateObj.city = req.body.city
  }
  if (req.body.address) {
    updateObj.address = req.body.address
  }
  if (req.body.phone) {
    updateObj.phone = req.body.phone
  }
  if (req.body.website) {
    updateObj.website = req.body.website
  }
  if (req.body.area) {
    updateObj.area = req.body.area
  }

  if (req.files) {
    const image = []

    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'afRestaurant',
      })

      image.unshift(result.secure_url)
    }

    // Only update the image array if there are new images
    if (image.length > 0) {
      updateObj.$push = { image: { $each: image, $position: 0 } }
    }
  } else if (req.body.image) {
    // Only update the image array if it's explicitly included in the request body
    updateObj.image = req.body.image
  }

  // Only update the document if there are fields to update
  if (Object.keys(updateObj).length > 0) {
    const restaurant = await Restaurants.findByIdAndUpdate(
      { _id: restaurantID },
      updateObj,
      { new: true }
    )
    if (!restaurant) {
      return next(
        createCustomError(`No restaurant with id: ${restaurantID}`, 404)
      )
    }
    res.status(200).json(restaurant)
  } else {
    // If there are no fields to update, just return the current document
    const restaurant = await Restaurants.findById(restaurantID)
    if (!restaurant) {
      return next(
        createCustomError(`No restaurant with id: ${restaurantID}`, 404)
      )
    }
    res.status(200).json(restaurant)
  }
})

// get all restaurants with search and sort options passed as a query in the req
export const getAllRestaurants = async (req, res) => {
  const { name, city, food, area, sort, fields, numericFilters } = req.query
  const queryObject = {}

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }

  if (city) {
    queryObject.city = { $regex: city, $options: 'i' }
  }

  if (area) {
    queryObject.area = { $regex: area, $options: 'i' }
  }

  if (food) {
    queryObject.food = { $regex: `^${food}$`, $options: 'i' }
  }

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    }
    const regEx = /\b(<|>|>=|=|<=)\b/g
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    )
    const options = ['rating']
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-')
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) }
      }
    })
  }

  console.log(queryObject)

  let result = Restaurants.find(queryObject) // (req.query)
  // sort
  if (sort) {
    const sortList = sort.split(',').join(' ')
    result = result.sort(sortList)
  } else {
    result = result.sort('createdAt')
  }

  if (fields) {
    const fieldList = fields.split(',').join(' ')
    result = result.select(fieldList)
  }

  const restaurant = await result

  res.status(200).json({ restaurant, nbHits: restaurant.length }) //
}

//update restaurant rating by id
// export const changeRestaurantRatingByID = asyncWrapper(
//   async (req, res, next) => {
//     const { id: restaurantID } = req.params
//     const restaurant = await Restaurants.findOneAndUpdate(
//       { _id: restaurantID },
//       req.body.rating,
//       {
//         new: true,
//         runValidators: true,
//       }
//     )
//     var changeRating = function () {
//       restaurant.rating = req.body.rating
//       restaurant.rate_count = restaurant.rate_count + 1
//       restaurant.rate_aggregate = restaurant.rate_aggregate + restaurant.rating
//       var newRating = restaurant.rate_aggregate / restaurant.rate_count

//       restaurant.rating = parseFloat(newRating).toFixed(2) //newRating
//       restaurant.save()
//     }
//     changeRating()

//     if (!restaurant) {
//       return next(
//         createCustomError(`No restaurant with id: ${restaurantID}`, 404)
//       )
//     }
//     res.status(200).json(`Rating successfully updated`)
//   }
// )
