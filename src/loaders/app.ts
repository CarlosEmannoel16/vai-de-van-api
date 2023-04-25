import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import routes from '../routes';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(express.urlencoded({ extended: true }));

export default app;
