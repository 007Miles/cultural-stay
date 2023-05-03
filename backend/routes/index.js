import express from 'express'

import sampleRouter from './sampleRouter.js'
import accommodationRouter from './accommodation/accommodationRoute.js'
import hostLocalRouter from './hostLocal/hostLocal.js'

const router = express.Router()

router.use('/sample', sampleRouter)
router.use('/accommodation', accommodationRouter)
router.use('/hostLocal', hostLocalRouter)

export default router
