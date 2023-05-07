import request from 'supertest'
import app from '../../app' // Import your Express app
import TouristAttraction from '../../models/TouristAttraction/TouristAttraction.js'

// You may want to add some seed data for testing purposes
const attractions = [
  {
    name: 'Attraction 1',
    description: 'Attraction 1 description',
    address: 'Attraction 1 address',
    area: 'Attraction 1 area',
  },
  {
    name: 'Attraction 2',
    description: 'Attraction 2 description',
    address: 'Attraction 2 address',
    area: 'Attraction 2 area',
  },
]

describe('Tourist Attraction Routes', () => {
  beforeEach(async () => {
    // Clean up the collection before each test
    // await TouristAttraction.deleteMany({});

    // Add the seed data
    await TouristAttraction.insertMany(attractions)
  })

  // Write your test cases here...
  test('GET / should return a list of tourist attractions', async () => {
    const response = await request(app).get('/api/TASites')
    expect(response.status).toBe(200)
    // expect(response.body.length).toBe(attractions.length)
  })
})
