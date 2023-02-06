import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/user.routes';
import loginRoutes from './routes/login.routes';
import handleErrorMiddleware from './middlewares/handleError.middleware';
import networkRoutes from './routes/network.routes';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/networks', networkRoutes);
app.use(handleErrorMiddleware);

export default app;
