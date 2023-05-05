import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(3050, () => {
  console.log('Server started on port 3050!');
});
