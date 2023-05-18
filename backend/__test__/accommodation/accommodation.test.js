import supertest from 'supertest'
import app from '../../app.js'
import Accommodation from '../../models/Accommodation/Accommodation.js'

const request = supertest(app)

describe('Accommodation API Test', () => {
  let accommodationId

  it('should create a new accommodation', async () => {
    const res = await request
      .post('/accommodation')
      .field('name', 'Test Accommodation')
      .field('address', 'Test Address')
      .field('area', 'Test Area')
      .field('location_maplink', 'https://test.com/maplink')
      .field('no_of_guests_welcome', '2')
      .field('price_per_night', '50')
      .field('welcome_type', 'Couple')
      .field('description', 'Test Description')
      .field('facilities', 'Test Facilities')
      .attach('image', 'tests/test_image.jpg')
    expect(res.status).toBe(201)
    expect(res.body.name).toBe('Test Accommodation')
    expect(res.body.address).toBe('Test Address')
    expect(res.body.area).toBe('Test Area')
    expect(res.body.location_maplink).toBe('https://test.com/maplink')
    expect(res.body.no_of_guests_welcome).toBe(2)
    expect(res.body.price_per_night).toBe(50)
    expect(res.body.welcome_type).toBe('Couple')
    expect(res.body.description).toBe('Test Description')
    expect(res.body.facilities).toBe('Test Facilities')
    expect(res.body.images.length).toBe(1)
    expect(res.body.images[0]).toMatch(/.*.jpg$/)
    accommodationId = res.body._id
  })

  it('should get all accommodation', async () => {
    // const res = await request.get('/accommodation')
    // expect(res.status).toBe(200)
    // expect(res.body.length).toBeGreaterThanOrEqual(1)
  })

  it('should update an accommodation', async () => {
    // const res = await request.patch(/accommodation/${accommodationId}).send({
    // name: 'Updated Test Accommodation',
    // address: 'Updated Test Address',
    // area: 'Updated Test Area',
  })
  // expect(res.status).toBe(200)
  // expect(res.body.name).toBe('Updated Test Accommodation')
  // expect(res.body.address).toBe('Updated Test Address')
  // expect(res.body.area).toBe('Updated Test Area')
})

it('should get an accommodation by ID', async () => {
  // const res = await request.get(/accommodation/${accommodationId})
  // expect(res.status).toBe(200)
  // expect(res.body._id).toBe(accommodationId)
})

it('should delete an accommodation', async () => {
  // const res = await request.delete(/accommodation/${accommodationId})
  // expect(res.status).toBe(200)
  // expect(res.body._id).toBe(accommodationId)
})
