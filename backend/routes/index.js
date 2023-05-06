import express from 'express'

import sampleRouter from './sampleRouter.js'
import accommodationRouter from './accommodation/accommodationRoute.js'
import accommodationReserveRouter from './accommodation/accommodationReserveRoute.js'
import hostLocalRouter from './hostLocal/hostLocal.js'
import foodRouter from './food/food.js'
import restaurantRouter from './restaurants/restaurants.js'
import TouristAttractionRouter from './TouristAttraction/TouristAttraction.js'
import suggestionRouter from './TouristAttraction/suggestions.js'
import FeedBackRouter from './feedback/feedback.js'

const router = express.Router()

router.use('/sample', sampleRouter)
router.use('/accommodation', accommodationRouter)
router.use('/accommodationReserve', accommodationReserveRouter)
router.use('/hostLocal', hostLocalRouter)
router.use('/food', foodRouter)
router.use('/restaurants', restaurantRouter)
router.use('/TASites', TouristAttractionRouter)
router.use('/suggestion', suggestionRouter)
router.use('/feedback', FeedBackRouter)

export default router
