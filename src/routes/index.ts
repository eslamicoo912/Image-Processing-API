import express from 'express'
import images from './api/images'

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('start image processing api project')
})

routes.get('/api', (req, res) => {
  res.send('Go to /images followed by the parameters')
})

routes.use('/api/images', images)

export default routes
