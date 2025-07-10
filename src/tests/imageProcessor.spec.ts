import fs from 'fs';
import { resizeImage } from '../utils/imageProcessor';

describe('resizeImage', () => {
  it('should resize the image and return the output path', async () => {
    const output = await resizeImage('encenadaport', 100, 100);
    expect(fs.existsSync(output)).toBe(true);
  });
});
