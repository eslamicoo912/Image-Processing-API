import sharp from "sharp";
import path from "path";

const resizeImage = (
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  return sharp(path.resolve(`assets/full/${filename}.jpg`))
    .resize({
      width: Number(width),
      height: Number(height),
      fit: sharp.fit.cover,
    })
    .toBuffer();
};

const resizedImagePath = (
  filename: string,
  height: number,
  width: number
): string => {
  return `assets/thumb/${filename}${height}x${width}.jpg`;
};

export { resizeImage, resizedImagePath };
