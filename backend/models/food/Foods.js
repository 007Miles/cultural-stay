import mongoose from 'mongoose'
import Restaurants from ('../restaurants/Restaurants')

const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'must provide food name'],
      trim: true,
    },
    sinhala_name: {
      type: String,
      required: [true, 'must provide food sinhala name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'must provide food description'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Please provide png or jpg food images'],
    },
    ingrediants: {
      type: [String],
      default: [],
    },
    method: {
      type: [String],
      default: [],
    },
    restaurants: {
      type: [String],
      ref: 'Restaurants',
      default: [],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Food', FoodSchema)
