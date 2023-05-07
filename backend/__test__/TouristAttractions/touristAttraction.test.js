import request from 'supertest'
import app from '../../app.js'
import TouristAttraction from '../../models/TouristAttraction/TouristAttraction.js'

// Cleanup database before and after each test
beforeEach(async () => {
  await TouristAttraction.deleteMany({})
})

afterAll(async () => {
  await TouristAttraction.deleteMany({})
})

describe('Tourist Attraction Routes', () => {
  // Test for getting all tourist attractions
  test('GET /api/TASites should return a list of tourist attractions', async () => {
    const response = await request(app).get('/api/TASites')
    expect(response.status).toBe(200)
  })

  // Test for creating a new tourist attraction
  test('POST /api/TASites should create a new tourist attraction', async () => {
    const newTouristAttraction = {
      name: 'Test Attraction',
      description: 'Test description',
      address: 'Test address',
      area: 'Test area',
    }

    const response = await request(app)
      .post('/api/TASites')
      .send(newTouristAttraction)

    expect(response.status).toBe(201)
    expect(response.body.name).toBe(newTouristAttraction.name)
  })

  // Test for getting a single tourist attraction by ID
  test('GET /api/TASites/:id should return a single tourist attraction', async () => {
    const newTouristAttraction = new TouristAttraction({
      name: 'Test Attraction',
      description: 'Test description',
      address: 'Test address',
      area: 'Test area',
    })

    await newTouristAttraction.save()

    const response = await request(app).get(
      `/api/TASites/${newTouristAttraction._id}`
    )
    expect(response.status).toBe(200)
    expect(response.body.name).toBe(newTouristAttraction.name)
  })

  // Test for updating a tourist attraction by ID
  test('PUT /api/TASites/:id should update a tourist attraction', async () => {
    const newTouristAttraction = new TouristAttraction({
      name: 'Test Attraction',
      description: 'Test description',
      address: 'Test address',
      area: 'Test area',
    })

    await newTouristAttraction.save()

    const updatedAttraction = {
      name: 'Updated Attraction',
    }

    const response = await request(app)
      .put(`/api/TASites/${newTouristAttraction._id}`)
      .send(updatedAttraction)

    expect(response.status).toBe(200)
    expect(response.body.name).toBe(updatedAttraction.name)
  })

  // Test for deleting a tourist attraction by ID
  test('DELETE /api/TASites/:id should delete a tourist attraction', async () => {
    const newTouristAttraction = new TouristAttraction({
      name: 'Test Attraction',
      description: 'Test description',
      address: 'Test address',
      area: 'Test area',
    })
    await newTouristAttraction.save()
    const response = await request(app).delete(
      `/api/TASites/${newTouristAttraction._id}`
    )
    expect(response.status).toBe(200)
  })
})
