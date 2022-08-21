import app from '../index'
import request from 'supertest'
import { data } from '../utils/data'

describe('Test the endpoint response', () => {
  it('test against the actual resize endpoint, with the correct URL and proper parameters', async (): Promise<void> => {
    // declaring random item from the array of images names
    const randomItem = Math.floor(Math.random() * data.length) // berlin -- moscow -- san -- newyork

    // testing the endpoint for this images
    const res = await request(app).get(
      `/api/images?filename=${data[randomItem]}&width=200&height=200`
    )
    expect(res.statusCode).toEqual(200)
  })
})
