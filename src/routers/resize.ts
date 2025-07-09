import express, {Request, Response} from "express";
import { resizeImage } from "../utils/imageProcessor";

const router = express.Router();

router.get("/resize", async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;

  if (!filename || !width || !height)
    return res.status(400).send("Missing required parameters.");

  try {
    const resizedPath = await resizeImage(
      filename as string,
      parseInt(width as string),
      parseInt(height as string),
    );
    res.sendFile(resizedPath);
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).send("Image processing failed.");
  }
});

export default router;
