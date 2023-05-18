import request from 'supertest'
import app from './app'
import AccommodationReserve from '../../models/Accommodation/AccommodationReserve,js'
import mongoose from 'mongoose'

const testReservation = {
  rp_name: 'John Doe',
  rp_email: 'johndoe@example.com',
  rp_phone: 123456789,
  rp_languages: 'English, Spanish',
  rp_country: 'United States',
  reserve_from: '2023-06-01',
  reserve_to: '2023-06-10',
  description: 'A family vacation',
  rp_noofPassengers: 4,
  status: 'pending',
  hostId: 'host123',
}

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
})

afterEach(async () => {
  await AccommodationReserve.deleteMany()
})

afterAll(async () => {
  await mongoose.connection.close()
})

describe('Accommodation Reservation API', () => {
  it('should create a new reservation', async () => {
    const response = await request(app)
      .post('/api/accommodationReserve')
      .send(testReservation)

    expect(response.status).toBe(201)
    expect(response.body.rp_name).toEqual(testReservation.rp_name)
  })

  it('should get all reservations', async () => {
    await request(app).post('/api/accommodationReserve').send(testReservation)

    const response = await request(app).get('/api/accommodationReserve')

    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(1)
    expect(response.body[0].rp_name).toEqual(testReservation.rp_name)
  })

  it('should get pending reservations by host ID', async () => {
    await request(app).post('/api/accommodationReserve').send(testReservation)

    const response = await request(app).get(
      `/api/accommodationReserve/${testReservation.hostId}`
    )

    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(1)
    expect(response.body[0].rp_name).toEqual(testReservation.rp_name)
  })

  it('should delete reservation by ID', async () => {
    const reservation = await new AccommodationReserve(testReservation).save()

    const response = await request(app).delete(
      `/api/accommodationReserve/${reservation._id}`
    )

    expect(response.status).toBe(204)
  })
})
