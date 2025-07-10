import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

export function validateImageFile(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { filename, width, height } = req.query;

  if (!filename || !width || !height)
    return res.status(400).send('Missing required parameters.');

  const parsedWidth = parseInt(width as string, 10);
  const parsedHeight = parseInt(height as string, 10);

  if (
    isNaN(parsedWidth) ||
    isNaN(parsedHeight) ||
    parsedWidth <= 0 ||
    parsedHeight <= 0
  ) {
    return res.status(400).json({
      error: 'Width and height must be positive integers',
    });
  }

  const inputPath = path.resolve(`assets/${filename}.jpg`);
  if (!fs.existsSync(inputPath)) {
    return res.status(404).json({
      error: `Image file '${filename}.jpg' not found in assets folder`,
    });
  }

  next();
}
