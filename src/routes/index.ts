import express, { Request, Response } from 'express'
import images from './api/images'

const routes = express.Router()

routes.get('/', (req: Request, res: Response): void => {
  res.send('start image processing api project')
})

routes.get('/api', (req: Request, res: Response): void => {
  res.send('Go to /images followed by the parameters')
})

routes.use('/api/images', images)

export default routes
