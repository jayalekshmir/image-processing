import express from 'express';
import resizeRoute from './routers/resize';
import { logger } from './middleware/logger';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger);
app.use('/api', resizeRoute);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
