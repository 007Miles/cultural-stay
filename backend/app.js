import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './config/dbconnect.js'
import Router from './routes/index.js'

dotenv.config()

const app = express()
app.use(express.json({ limit: '1mb' }))

app.use(cors())

connectDB()

app.use('/api', Router)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})
