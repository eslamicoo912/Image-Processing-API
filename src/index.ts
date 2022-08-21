import express from 'express'
import routes from './routes'
import path from 'path'

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../assets')))

app.use(routes)

app.get('/', (req: express.Request, res: express.Response): void => {
  res.redirect('/api')
})

app.listen(port, (): void => {
  console.log('listening')
})

export default app
