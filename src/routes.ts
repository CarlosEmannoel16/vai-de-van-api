import { Router } from 'express';
import { adpterRouter } from './main/utils/adpterRouter';
import {
  makeCreateUserController,
  makeGetUserByIdController,
  makeGetAllUserController,
} from './main/factories/controllers';

const routes = Router();
routes.post('/user', adpterRouter(makeCreateUserController()));
routes.get('/users', adpterRouter(makeGetAllUserController()));
routes.get('/user/:id', adpterRouter(makeGetUserByIdController()));

// Next Routers
// routes.get('/route/:id')
// routes.get('/route')
// routes.post('/route')
// routes.put('/route')
// routes.delete('/route/:id')




export = routes;
