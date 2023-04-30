import mongoose from 'mongoose'
import geojsonSchema from ('mongoose-geojson-schema')
const Food = require('../food/Foods')

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'must provide restaurant name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'must provide restaurant description'],
      trim: true,
    },
    // main city of the restaurant
    city: {
      type: String,
      required: [true, 'must provide city name'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'must provide restaurant address'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide contact number'],
      min: [
        9,
        'phone number should contain at least 9 digits, {VALUE} is invalid',
      ],
    },
    website: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      default: 0.0,
      max: [5, 'rating cannot be higher than 5, {VALUE} is invalid'],
    },
    rate_count: {
      type: Number,
      default: 0,
    },
    rate_aggregate: {
      type: Number,
      default: 0.0,
    },
    // location: {
    //   type: mongoose.Schema.Types.Point,
    //   required: true
    // },
    food: {
        type: [String],
        ref: 'Food',
        default: [],
      },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Restaurants', RestaurantSchema)
