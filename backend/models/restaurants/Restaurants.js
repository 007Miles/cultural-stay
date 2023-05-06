import mongoose from 'mongoose'
import geojsonSchema from 'mongoose-geojson-schema'
// import Food from '../food/Foods'

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
    image: {
      type: String,
      required: [true, 'Please provide png or jpg restaurant images'],
    },
    area: {
      type: String,
      required: [true, 'must provide restaurant province'],
      trim: true,
      enum: {
        values: [
          'Western',
          'Northern',
          'North Central',
          'North Western',
          'Central',
          'Eastern',
          'Uva',
          'Sabaragamuwa',
          'Southern',
        ],
        message: '{VALUE} is not a valid province',
      },
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
      // ref: 'Food',
      default: [],
    },
  },
  { timestamps: true }
)

const Restaurants = mongoose.model('Restaurants', RestaurantSchema)
export default Restaurants
