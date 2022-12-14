import express, { Request, Response } from 'express'
import path from 'path'
import process from 'process'
import { promises as fsPromises } from 'fs'
import fs from 'fs'
import { data } from '../../utils/data'
import { resizeImage, resizedImagePath } from '../../utils/imageTransform'

const images = express.Router()

images.get('/', async (req: Request, res: Response): Promise<void> => {
  const width: number = req.query.width as unknown as number
  const height: number = req.query.height as unknown as number
  const filename = req.query.filename as string

  const outputImgPath: string = resizedImagePath(filename, height, width)

  const imgPath = path.join(process.cwd(), `/assets/full/${filename}.jpg`)
  const img = data.includes(filename)
  if (filename === undefined) {
    res.status(200).send('Please type the image name')
    return
  }
  if (img === false) {
    res.status(404).send('image not found')
    return
  }
  if (fs.existsSync(imgPath) === false) {
    res.status(404).send('resource not found')
    return
  }
  if (!width && !height) {
    return res.sendFile(imgPath)
  }
  if (isNaN(width) || isNaN(height)) {
    res.status(400).send('Width and height should be a number')
    return
  }
  if (!fs.existsSync(outputImgPath)) {
    const resizedImage = await resizeImage(filename, height, width)
    await fsPromises.writeFile(outputImgPath, resizedImage)
  }

  res.sendFile(path.resolve(outputImgPath))

  res.sendFile
})

export default images
