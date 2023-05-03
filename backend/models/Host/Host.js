const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const HostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    trim: true,
    unique: true,
  },
  //   password: {
  //     type: String,
  //     required: [true, 'Please provide password'],
  //     minlength: 6,
  //   },
  address: {
    type: String,
    required: [true, 'Please provide address'],
    trim: true,
    minlength: 3,
  },
  phone: {
    type: Number,
    required: [true, 'Please provide contact number'],
    min: [
      9,
      'phone number should contain at least 9 digits, {VALUE} is invalid',
    ],
  },
  languages: {
    type: String,
    trim: true,
  },
  profile_image: {
    type: String,
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
})

// SellerSchema.pre('save', async function () {
//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt)
// })

// SellerSchema.methods.createJWT = function () {
//   return jwt.sign(
//     { userId: this._id, name: this.name },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: process.env.JWT_LIFETIME,
//     }
//   )
// }

// SellerSchema.methods.comparePassword = async function (candidatePassword) {
//   const isMatch = await bcrypt.compare(candidatePassword, this.password)
//   return isMatch
// }

module.exports = mongoose.model('Host', HostSchema)
