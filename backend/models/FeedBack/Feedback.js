import mongoose from 'mongoose'

const FeedBackSchema = new mongoose.Schema({
  location_type: {
    type: String,
    required: true,
    enum: ['Accommodation', 'Restaurants', 'TouristAttraction'],
  },
  loc_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'location_type',
  },
  rating: {
    type: Number,
    default: 0.0,
    max: 5.0,
  },
  ratings_list: [
    {
      val: { type: Number, max: 5.0 },
      postedBy: { type: String },
    },
  ],
  comments: [
    {
      text: { type: String },
      created: {
        type: Date,
        default: Date.now(),
      },
      postedBy: { type: String },
    },
  ],
})

FeedBackSchema.pre('save', function (next) {
  // Calculate the average rating from the ratings_list array
  const ratings = this.ratings_list.map((rating) => rating.val)
  const avgRating = ratings.reduce((acc, val) => acc + val, 0) / ratings.length

  // Set the rating attribute to the average rating
  this.rating = avgRating

  // Call the next middleware function
  next()
})

const FeedBack = mongoose.model('FeedBack', FeedBackSchema)
export default FeedBack
