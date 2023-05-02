import express from 'express'

import sampleRouter from './sampleRouter.js'
import hostRouter from './Host/host.js'
import accommodationRouter from './Host/accommodation.js'

const router = express.Router()

router.use('/sample', sampleRouter)
router.use('/host', hostRouter)
router.use('/accommodation', accommodationRouter)

export default router
