import request from 'supertest'
import app from './app'
import Host from '../../models/Host/Host.js'

const testHost = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  credentialID: 'cred123',
  address: '123 Test Street',
  phone: 123456789,
  languages: 'English, Spanish',
  profile_image: 'image.jpg',
}

afterEach(async () => {
  await Host.deleteMany()
})

afterAll(async () => {
  await mongoose.connection.close()
})

describe('Host Local API', () => {
  it('should create a new host', async () => {
    const response = await request(app).post('/api/hostLocal').send(testHost)

    expect(response.status).toBe(201)
    expect(response.body.name).toEqual(testHost.name)
  })

  it('should get all hosts', async () => {
    await request(app).post('/api/hostLocal').send(testHost)

    const response = await request(app).get('/api/hostLocal')

    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(1)
    expect(response.body[0].name).toEqual(testHost.name)
  })

  it('should get host by ID', async () => {
    const host = await new Host(testHost).save()

    const response = await request(app).get(`/api/hostLocal/${host._id}`)

    expect(response.status).toBe(200)
    expect(response.body.name).toEqual(testHost.name)
  })

  it('should update host by ID', async () => {
    const host = await new Host(testHost).save()

    const updatedHost = {
      name: 'Jane Doe',
    }

    const response = await request(app)
      .patch(`/api/hostLocal/${host._id}`)
      .send(updatedHost)

    expect(response.status).toBe(200)
    expect(response.body.name).toEqual(updatedHost.name)
  })

  it('should delete host by ID', async () => {
    const host = await new Host(testHost).save()

    const response = await request(app).delete(`/api/hostLocal/${host._id}`)

    expect(response.status).toBe(204)
  })
})
