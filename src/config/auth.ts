import * as dotenv from 'dotenv';

dotenv.config();
export default {
  jwt: {
    secret: String(process.env.SECRET_TOKEN),
    expiresIn: '1d',
  },
};
