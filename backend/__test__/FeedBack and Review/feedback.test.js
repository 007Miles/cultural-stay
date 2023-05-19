import request from 'supertest'
import app from '../../app.js'
import FeedBack from '../../models/FeedBack/Feedback.js'

// Clean the data base
beforeEach(async () => {
  await FeedBack.deleteMany({})
})

afterAll(async () => {
  await FeedBack.deleteMany({})
})

describe('Feedback Routes', () => {
  // Test for getting the feedback list for a location
  test('GET /api/feedback/:id should return the list of comments and ratings list', async () => {
    const response = await request(app).get(
      '/api/feedback/644feb454ae98832d6797b9b'
    )
    expect(response.status).toBe(200)
  })

  // Test for creating a feedback template
  test('POST /api/feedback should create a feedback template', async () => {
    const newFeedback = {
      location_type: 'Restaurants',
      loc_id: '644feb454ae98832d6797b9b',
    }
    const response = await request(app).post('/api/feedback').send(newFeedback)
    expect(response.status).toBe(201)
    expect(response.body.location_type).toBe(newTouristAttraction.location_type)
  })

  // Test for adding a new feedback to a location
  test('PATCH /api/feedback/:id should return the feedback document with new data', async () => {
    const newComment = {
      comment: { text: 'wonderful experience' },
      userId: 'eva@gmail.com',
    }
    const response = await request(app)
      .patch(`/api/feedback/644feb454ae98832d6797b9b`)
      .send(newComment)
    expect(response.status).toBe(200)
    expect(response.body.location_type).toBe(newTouristAttraction.location_type)
  })

  // Test for giving a rating to a location
  test('PATCH /api/feedback/ratings/:id should put a new rating to a location', async () => {
    const newRating = {
      rating: { val: 5, postedBy: 'eva@gmail.com' },
    }
    const response = await request(app)
      .patch(`/api/feedback/ratings/64511c97c12e5637300a44f9`)
      .send(newRating)
    expect(response.status).toBe(200)
    expect(response.body.location_type).toBe(newTouristAttraction.location_type)
  })

  // Test for deleting a cooment
  test('DELETE /api/feedback/:id should delete the comment', async () => {
    const response = await request(app).delete(
      `/api/feedback/644feb454ae98832d6797b9b`
    )
    expect(response.status).toBe(200)
  })
})
