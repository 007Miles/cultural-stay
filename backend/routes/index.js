import express from 'express'

import sampleRouter from './sampleRouter.js'

const router = express.Router()

router.use('/sample', sampleRouter)

export default router
