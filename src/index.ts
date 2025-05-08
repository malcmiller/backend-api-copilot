import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', userRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
export { server };

