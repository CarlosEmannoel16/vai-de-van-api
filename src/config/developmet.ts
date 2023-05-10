import * as dotenv from 'dotenv';

dotenv.config();
export default {
  server: {
    port: String(process.env.PORT)
  },
};
