import sharp from "sharp";
import fs from "fs";
import path from "path";

export async function resizeImage(
  filename: string,
  width: number,
  height: number,
): Promise<string> {
  const inputPath = path.resolve(`assets/${filename}.jpg`);
  const outputPath = path.resolve(`thumb/${filename}_${width}x${height}.jpg`);

  if (fs.existsSync(outputPath)) return outputPath;

  await sharp(inputPath).resize(width, height).toFile(outputPath);
  return outputPath;
}
