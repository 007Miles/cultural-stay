import request from 'supertest'
import app from '../../app.js'
import Restaurant from '../../models/restaurants/Restaurants.js'

// Clean mongoDB before and after each test
beforeEach(async () => {
  await Restaurant.deleteMany({})
})

afterAll(async () => {
  await Restaurant.deleteMany({})
})

describe('Restaurant routes', () => {
  // Test for getting all restaurants
  test('GET /api/restaurants should fetch all restaurants', async () => {
    const response = await request(app).get('/api/restaurants')
    expect(response.status).toBe(200)
  })

  // Test for adding a new restaurant
  test('POST /api/restaurants should add a new restaurant', async () => {
    const newRestaurant = {
      name: 'Test Food',
      description: 'Test description',
      city: 'Test city',
      address: 'Test address',
      phone: '0112233445',
      website: 'test@test.com',
      image: 'Test image',
      area: 'Western',
    }

    const response = await request(app)
      .post('/api/restaurants')
      .send(newRestaurant)

    expect(response.status).toBe(201)
    expect(response.body.name).toBe(newRestaurant.name)
  })

  // Test for fetching a single restaurant by ID
  test('GET /api/restaurants/:id should fetch a single restaurant', async () => {
    const newRestaurant = new Restaurant({
      name: 'Test Food',
      description: 'Test description',
      city: 'Test city',
      address: 'Test address',
      phone: '0112233445',
      website: 'test@test.com',
      image: 'Test image',
      area: 'Western',
    })

    await newRestaurant.save()

    const response = await request(app).get(
      `/api/restaurant/${newRestaurant._id}`
    )
    expect(response.status).toBe(200)
    expect(response.body.name).toBe(newRestaurant.name)
  })

  // Test for updating a restaurant by ID
  test('PATCH /api/restaurants/:id should update a restaurant', async () => {
    const newRestaurant = new Restaurant({
      name: 'Test Food',
      description: 'Test description',
      city: 'Test city',
      address: 'Test address',
      phone: '0112233445',
      website: 'test@test.com',
      image: 'Test image',
      area: 'Western',
    })

    await newRestaurant.save()

    const updatedRestaurant = {
      name: 'Updated Restaurant',
    }

    const response = await request(app)
      .put(`/api/restaurant/${newRestaurant._id}`)
      .send(updatedRestaurant)

    expect(response.status).toBe(200)
    expect(response.body.name).toBe(updatedRestaurant.name)
  })

  // Test for deleting a restaurant by ID
  test('DELETE /api/restaurants/:id should delete a restaurant', async () => {
    const newRestaurant = new Restaurant({
      name: 'Test Food',
      description: 'Test description',
      city: 'Test city',
      address: 'Test address',
      phone: '0112233445',
      website: 'test@test.com',
      image: 'Test image',
      area: 'Western',
    })
    await newRestaurant.save()
    const response = await request(app).delete(
      `/api/restaurants/${newRestaurant._id}`
    )
    expect(response.status).toBe(200)
  })
})
