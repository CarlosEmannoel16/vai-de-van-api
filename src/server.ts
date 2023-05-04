import app from './loaders/app';
import { createClient } from 'redis';
const client = createClient();

client.connect().then(() => {
  app.listen(3000, () => {
    console.log('Server started on port 3000!');
  });
});
