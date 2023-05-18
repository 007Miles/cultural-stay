import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'must provide a order id'],
    trim: true,
  },
  user_email: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'host', 'tourist'],
  },
  password: {
    type: String,
    required: [true, ' must provide a password'],
  },
  refreshToken: {
    type: String,
    default: '',
  },
})

// module.exports = mongoose.model('User', UserSchema)

const User = mongoose.model('User', UserSchema)
export default User
