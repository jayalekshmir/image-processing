import express, { Request, Response } from 'express';
import { resizeImage } from '../utils/imageProcessor';
import { validateImageFile } from '../middleware/validateImageFile';

const router = express.Router();

router.get(
  '/resize',
  [validateImageFile],
  async (req: Request, res: Response) => {
    const { filename, width, height } = req.query;

    try {
      const resizedPath = await resizeImage(
        filename as string,
        parseInt(width as string),
        parseInt(height as string)
      );
      res.sendFile(resizedPath);
    } catch (error) {
      console.error('Error processing image:', error);
      res.status(500).send('Image processing failed.');
    }
  }
);

export default router;
