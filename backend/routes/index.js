import express from 'express'

import sampleRouter from './sampleRouter.js'
import foodRouter from './food/food.js'
import restaurantRouter from './restaurants/restaurants.js'
import TouristAttractionRouter from './TouristAttraction/TouristAttraction.js'
import suggestionRouter from './TouristAttraction/suggestions.js'

const router = express.Router()

router.use('/sample', sampleRouter)
router.use('/food', foodRouter)
router.use('/restaurants', restaurantRouter)
router.use('/TASites', TouristAttractionRouter)
router.use('/suggestion', suggestionRouter)

export default router
