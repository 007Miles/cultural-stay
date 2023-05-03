// const mongoose = require('mongoose')
import mongoose from 'mongoose'

const AccommodationSchema = new mongoose.Schema(
  {
    accommodation_name: {
      type: String,
      required: [false, 'must provide accommodation name'],
      trim: true,
    },
    location_name: {
      type: String,
      required: [false, 'must provide accommodation location'],
      trim: true,
    },
    location_link: {
      type: String,
      required: [false, 'must provide accommodation location link'],
      trim: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    availability_from: {
      type: Date,
      default: Date.now(),
    },
    availability_to: {
      type: Date,
    },
    no_of_guests_welcome: {
      type: Number,
      required: [false, 'must provide no of guests welcome'],
      min: [1, 'package must welcome at least 1 guests'],
    },
    no_of_bedrooms: {
      type: Number,
      required: false,
      default: 1,
    },
    no_of_beds: {
      type: Number,
      required: false,
      default: 1,
    },
    no_of_washrooms: {
      type: Number,
      required: false,
      default: 1,
    },
    price_per_night: {
      type: Number,
      required: [false, 'must provide Accommodation price'],
      min: [0, 'product price should be more than 0'],
    },
    welcome_type: {
      type: String,
      required: false,
      trim: true,
      enum: {
        values: ['Couple', 'Family', 'Solo'],
        message: '{VALUE} is not a valid Type',
      },
    },
    category: {
      type: String,
      required: [false, 'must provide accommodation category'],
      trim: true,
    },
    description: {
      type: String,
      required: [false, 'must provide accommodation description'],
      trim: true,
    },
    facilities: {
      type: String,
      required: [false, 'must provide accommodation facilities'],
      trim: true,
    },
    rating: {
      type: Number,
      default: 0.0,
      max: [5, 'rating cannot be higher than 5, {VALUE} is invalid'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    createdBy: {
      type: String,
      // ref: 'Host',
      required: [false, 'Please provide Host'],
    },
    image: {
      type: String,
      required: [false, 'Please provide png or jpg product images'],
    },
    // image_02: {
    //   type: String,
    //   required: [false, 'Please provide png or jpg product images'],
    // },
    // image_03: {
    //   type: String,
    //   required: [false, 'Please provide png or jpg product images'],
    // },
    // image_04: {
    //   type: String,
    //   required: [false, 'Please provide png or jpg product images'],
    // },
    rate_count: {
      type: Number,
      default: 0,
    },
    rate_aggregate: {
      type: Number,
      default: 0.0,
    },
  },
  { timestamps: true }
)

const Accommodation = mongoose.model('Accommodation', AccommodationSchema)
// module.exports = mongoose.model('Accommodation', AccommodationSchema)
export default Accommodation
