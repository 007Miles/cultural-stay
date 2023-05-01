import express from 'express'

import sampleRouter from './sampleRouter.js'
import foodRouter from './food/food.js'
import restaurantRouter from './restaurants/restaurants.js'

const router = express.Router()

router.use('/sample', sampleRouter)
router.use('/food', foodRouter)
router.use('/restaurants', restaurantRouter)

export default router
