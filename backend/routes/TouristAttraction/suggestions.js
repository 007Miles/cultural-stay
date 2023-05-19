import express from 'express'
import upload from '../../middleware/cloudinary.js'

const router = express.Router()

import {
  getAllSuggestions,
  createSuggestions,
  deleteSuggestions,
  getSuggestionsById,
} from '../../controller/TouristAttraction/SuggestionsController.js'

//get Suggestions by search quary
router.get('/', getAllSuggestions)

//create new tourist attraction site
router.post('/', upload.array('images'), createSuggestions)

// Delete single tourists attractions by Id
router.delete('/:id', deleteSuggestions)

// Get single tourists attractions by Id
router.get('/:id', getSuggestionsById)

export default router
