import express from 'express'

import sampleRouter from './sampleRouter.js'
import accommodationRouter from './accommodation/accommodationRoute.js'
import hostLocalRouter from './hostLocal/hostLocal.js'
import foodRouter from './food/food.js'
import restaurantRouter from './restaurants/restaurants.js'
import TouristAttractionRouter from './TouristAttraction/TouristAttraction.js'


const router = express.Router()

router.use('/sample', sampleRouter)
router.use('/accommodation', accommodationRouter)
router.use('/hostLocal', hostLocalRouter)
router.use('/food', foodRouter)
router.use('/restaurants', restaurantRouter)
router.use('/TASites', TouristAttractionRouter)


export default router
