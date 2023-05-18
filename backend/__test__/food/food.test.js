import request from 'supertest'
import app from '../../app.js'
import Food from '../../models/food/Foods.js'

// Clean mongoDB before and after each test
beforeEach(async () => {
  await Food.deleteMany({})
})

afterAll(async () => {
  await Food.deleteMany({})
})

describe('Food routes', () => {
  // Test for getting all food items
  test('GET /api/food should fetch all food items', async () => {
    const response = await request(app).get('/api/food')
    expect(response.status).toBe(200)
  })

  // Test for adding a new food item
  test('POST /api/food should add a new food item', async () => {
    const newFood = {
      name: 'Test Food',
      sinhala_name: 'Test Food',
      description: 'Test description',
      image: 'Test image',
      ingrediants: ['Test ingrediants 01', 'Test ingrediants 02'],
      method: ['Test method 01', 'Test method 02'],
      restaurants: ['Test restaurant 01', 'Test restaurant 02'],
    }

    const response = await request(app).post('/api/food').send(newFood)

    expect(response.status).toBe(201)
    expect(response.body.name).toBe(newFood.name)
  })

  // Test for fetching a single food item by ID
  test('GET /api/food/:id should fetch a single food item', async () => {
    const newFood = new Food({
      name: 'Test Food',
      sinhala_name: 'Test Food',
      description: 'Test description',
      image: 'Test image',
      ingrediants: ['Test ingrediants 01', 'Test ingrediants 02'],
      method: ['Test method 01', 'Test method 02'],
      restaurants: ['Test restaurant 01', 'Test restaurant 02'],
    })

    await newFood.save()

    const response = await request(app).get(`/api/food/${newFood._id}`)
    expect(response.status).toBe(200)
    expect(response.body.name).toBe(newFood.name)
  })

  // Test for updating a food item by ID
  test('PATCH /api/food/:id should update a food item', async () => {
    const newFood = new Food({
      name: 'Test Food',
      sinhala_name: 'Test Food',
      description: 'Test description',
      image: 'Test image',
      ingrediants: ['Test ingrediants 01', 'Test ingrediants 02'],
      method: ['Test method 01', 'Test method 02'],
      restaurants: ['Test restaurant 01', 'Test restaurant 02'],
    })

    await newFood.save()

    const updatedFood = {
      name: 'Updated Food',
    }

    const response = await request(app)
      .put(`/api/food/${newFood._id}`)
      .send(updatedFood)

    expect(response.status).toBe(200)
    expect(response.body.name).toBe(updatedFood.name)
  })

  // Test for deleting a food item by ID
  test('DELETE /api/food/:id should delete a food item', async () => {
    const newFood = new Food({
      name: 'Test Food',
      sinhala_name: 'Test Food',
      description: 'Test description',
      image: 'Test image',
      ingrediants: ['Test ingrediants 01', 'Test ingrediants 02'],
      method: ['Test method 01', 'Test method 02'],
      restaurants: ['Test restaurant 01', 'Test restaurant 02'],
    })
    await newFood.save()
    const response = await request(app).delete(`/api/food/${newFood._id}`)
    expect(response.status).toBe(200)
  })
})
