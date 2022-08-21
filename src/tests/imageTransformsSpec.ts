import { resizeImage } from '../utils/imageTransform'

describe('Test image processing function', () => {
  it('Throws unfound image error', async (): Promise<void> => {
    await expectAsync(resizeImage('cairo', 200, 200)).toBeRejected()
  })

  it('Resolves succesfully with right name / width / height', async (): Promise<void> => {
    await expectAsync(resizeImage('berlin', 200, 200)).toBeResolved()
  })
})
