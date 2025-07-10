import request from 'supertest';
import express from 'express';
import resizeRoute from '../routers/resize';
import { validateImageFile } from '../middleware/validateImageFile';

const app = express();
app.use('/api', [validateImageFile], resizeRoute);

describe('GET /api/resize', () => {
  it('returns 400 if missing params', async () => {
    const res = await request(app).get('/api/resize');
    expect(res.status).toBe(400);
  });

  it('returns 404 if image file does not exist', async () => {
    const res = await request(app).get(
      '/api/resize?filename=nonexistent&width=100&height=100'
    );
    expect(res.status).toBe(404);
    expect(res.body.error).toBe(
      "Image file 'nonexistent.jpg' not found in assets folder"
    );
  });

  it('returns 400 if width or height is invalid', async () => {
    const res = await request(app).get(
      '/api/resize?filename=encenadaport&width=invalid&height=100'
    );
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Width and height must be positive integers');
  });
  it('returns resized image file', async () => {
    const res = await request(app).get(
      '/api/resize?filename=encenadaport&width=100&height=100'
    );
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toBe('image/jpeg');
    expect(res.body).toBeDefined();
  });
});
