import 'reflect-metadata';
import app from './loaders/app';
import Databases from './loaders/Databases';

Databases.startPostgres()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server started on port 3000!');
    });
  })
  .catch(error => {
    console.log(error);
  });
