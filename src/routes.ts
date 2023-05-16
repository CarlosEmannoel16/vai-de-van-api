import { Router } from 'express';
import {
  makeCreateUserController,
  makeGetUserByIdController,
  makeGetAllUserController,
  makeLoginController,
  makeCreateDriverController,
  makeUpdateUserController,
  makeDeleteUserController,
} from '@makeControllers';
import {
  makeMiddlewareAuth,
  makeMiddlewareRouteAdm,
} from './main/factories/middlewares';
import { adpterMiddleware, adpterRouter } from './main/utils';
const routes = Router();

routes.post('/login', adpterRouter(makeLoginController()));



//routes private
routes
  .use(adpterMiddleware(makeMiddlewareAuth()))
  .get('/user/:id', adpterRouter(makeGetUserByIdController()))
  .get('/users', adpterMiddleware(makeMiddlewareRouteAdm()), adpterRouter(makeGetAllUserController()))
  .post('/user', adpterRouter(makeCreateUserController()))
  .delete('/user/:id', adpterRouter(makeDeleteUserController()))
  .post('/user/driver',adpterMiddleware(makeMiddlewareRouteAdm()), adpterRouter(makeCreateDriverController()))
  .put('/user', adpterMiddleware(makeMiddlewareRouteAdm()), adpterRouter(makeUpdateUserController()));

// Next Routers

//Routes
// routes.get('/route/:id')
// routes.get('/route')
// routes.post('/route')
// routes.put('/route')
// routes.delete('/route/:id')

//Veiculos
// routes.get('/vechicle/:id')
// routes.get('/vechicle')
// routes.post('/vechicle')
// routes.put('/vechicle')
// routes.delete('/vechicle/:id')

//Relatorios
// routes.get('/report/routes/:idRouter')
// routes.get('/report/routes/:idDriver')
// routes.get('/report/routes/:idCity')
// routes.get('/report/routes/all')

export = routes;
