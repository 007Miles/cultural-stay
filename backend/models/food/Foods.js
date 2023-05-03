import mongoose from 'mongoose'
// import Restaurants from '../restaurants/restaurants'

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
      required: [true, 'Please provide png or jpg food image'],
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
      // ref: 'Restaurants',
      default: [],
    },
  },
  { timestamps: true }
)

const Food = mongoose.model('Food', FoodSchema)
export default Food
