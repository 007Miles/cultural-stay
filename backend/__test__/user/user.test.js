import request from 'supertest'
import app from '../../app.js'
import User from '../../models/Tourists/User.js'

// Clean the data base
beforeEach(async () => {
  await User.deleteMany({})
})

afterAll(async () => {
  await User.deleteMany({})
})

describe('User API', () => {
  //test for adding a new user
  test('POST /api/user - create a new user', async () => {
    const res = await request(app).post('/api/user').send({
      username: 'Sam',
      user_email: 'Sam@gmail.com',
      password: 'sam',
    })
    expect(res.statusCode).toBe(201)
    expect(res.body.user.username).toBe('Sam')
    expect(res.body.user.user_email).toBe('Sam@gmail.com')
  })

  //test for user login
  test('POST /api/user/signIn - log in a user with correct credentials', async () => {
    const res = await request(app).post('/api/user/login').send({
      email: 'Sam@gmail.com',
      password: 'sam',
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.token).toBeDefined()
  })

  //test for user login failure
  test('POST /api/user/login - fail to log in a user with incorrect credentials', async () => {
    const res = await request(app).post('/api/user/login').send({
      email: 'Sam@gmail.com',
      password: 'wrongpassword',
    })
    expect(res.statusCode).toBe(401)
    expect(res.body.error).toBe('Unauthorized')
  })
})
