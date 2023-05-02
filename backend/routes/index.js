import express from 'express'

import sampleRouter from './sampleRouter.js'
import TouristAttractionRouter from './TouristAttraction/TouristAttraction.js'

const router = express.Router()

router.use('/sample', sampleRouter)
router.use('/TASites', TouristAttractionRouter)

export default router
