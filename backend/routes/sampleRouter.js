import express from 'express'

const router = express.Router()

//Get Sample massage
router.get('/msg/:string', (req, res) => {
  res.json({ msg: 'sample data send from the sample router' })
})

export default router
