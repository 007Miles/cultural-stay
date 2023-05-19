import express from 'express'
import upload from '../../middleware/cloudinary.js'

const router = express.Router()

import {
  getAllTouristAttractions,
  createTouristAttraction,
  updateTouristAttraction,
  deleteTouristAttraction,
  getTouristAttractionById,
  createTARecommendation,
} from '../../controller/TouristAttraction/touristAttractionController.js'

//get touristAttractions by search quary
router.get('/', getAllTouristAttractions)

//create new tourist attraction site
router.post('/', upload.array('images'), createTouristAttraction)
// router.route('/').post(upload.single('image'), createTouristAttraction)

router.post('/fromRecom', createTARecommendation)

// Update single tourists attractions by Id
router.put('/:id', updateTouristAttraction)

// Delete single tourists attractions by Id
router.delete('/:id', deleteTouristAttraction)

// Get single tourists attractions by Id
router.get('/:id', getTouristAttractionById)

export default router
