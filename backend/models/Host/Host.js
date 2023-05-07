import mongoose from 'mongoose'

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
  credentialID: {
    type: String,
  },
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
})

const Host = mongoose.model('Host', HostSchema)

export default Host
