import express from 'express'

const router = express.Router()

import {
  getAllTouristAttractions,
  createTouristAttraction,
  updateTouristAttraction,
  deleteTouristAttraction,
  getTouristAttractionById,
} from '../../controller/touristAttractionController.js'

//get touristAttractions by search quary
router.get('/', getAllTouristAttractions)

//create new tourist attraction site
router.post('/', createTouristAttraction)

router.put('/:id', updateTouristAttraction)

router.delete('/:id', deleteTouristAttraction)

router.get('/:id', getTouristAttractionById)

export default router
