import express from 'express'

const router = express.Router()

import {
  getAllTouristAttractions,
  createTouristAttraction,
  updateTouristAttraction,
  deleteTouristAttraction,
  getTouristAttractionById,
} from '../../controller/touristAttractionController.js'

router.get('/', getAllTouristAttractions)
router.post('/', createTouristAttraction)
router.put('/:id', updateTouristAttraction)
router.delete('/:id', deleteTouristAttraction)
router.get('/:id', getTouristAttractionById)

export default router
