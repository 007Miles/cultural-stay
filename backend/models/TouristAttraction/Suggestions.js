import mongoose from 'mongoose'

const SuggestionsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    area: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updated: 'Updated_at' },
  }
)

const Suggestions = mongoose.model('Suggestions', SuggestionsSchema)

export default Suggestions
