import express from 'express'

const router = express.Router()

import {
  getAllHosts,
  addHost,
  updatehost,
  deletehost,
  gethostbyID,
} from '../../controller/hostLocal/hostLocal.js'

router.route('/').get(getAllHosts).post(addHost)
router.route('/:id').patch(updatehost).delete(deletehost).get(gethostbyID)

export default router
