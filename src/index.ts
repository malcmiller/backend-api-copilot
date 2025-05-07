import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

