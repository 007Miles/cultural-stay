import mongoose from 'mongoose'

const ReserveSchema = new mongoose.Schema({
  rp_name: {
    type: String,
    required: [false, 'Please provide name'],
    trim: true,
  },
  rp_email: {
    type: String,
    required: [false, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    trim: true,
  },
  rp_phone: {
    type: Number,
    required: [false, 'Please provide contact number'],
    min: [
      9,
      'phone number should contain at least 9 digits, {VALUE} is invalid',
    ],
  },
  rp_languages: {
    type: String,
    trim: true,
  },
  rp_country: {
    type: String,
    trim: true,
  },
  reserve_from: {
    type: Date,
    trim: true,
  },
  reserve_to: {
    type: Date,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  rp_noofPassengers: {
    type: Number,
    trim: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
  hostId: {
    type: String,
    // ref: 'Host',
    required: [false, 'Please provide Host'],
  },
})

const AccommodationReserve = mongoose.model('Reservation', ReserveSchema)

export default AccommodationReserve
