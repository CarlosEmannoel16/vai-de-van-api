import { Router } from 'express';
import {
  makeCreateUserController,
  makeGetUserByIdController,
  makeGetAllUserController,
  makeLoginController,
  makeCreateDriverController,
  makeUpdateUserController,
  makeDeleteUserController,
  makeUpdateProfileUserController
} from './main/factories/controllers';
import {
  makeMiddlewareAuth,
  makeMiddlewareRouteAdm,
} from './main/factories/middlewares';
import { adpterMiddleware, adpterRouter } from './main/utils';
import upload from './config/upload'
import multer from 'multer';
import { makeCreateVehicleController } from './main/factories/controllers/makeCreateVehicleController';
import { makeGetAllRouteController } from './main/factories/controllers/makeGetAllRouteController';
import { makeGetByIdController } from './main/factories/controllers/makeGetByIdController';
const routes = Router();

routes.post('/login', adpterRouter(makeLoginController()))
routes.get('/free/users', adpterRouter(makeGetAllUserController()))
.post(',', adpterRouter(makeCreateUserController()))


//routes private
routes
  .use(adpterMiddleware(makeMiddlewareAuth()))
  .post('/user/upload/profile', multer({storage: upload.storage}).single('avatar'), adpterRouter(makeUpdateProfileUserController()))
  .get('/user/:id', adpterRouter(makeGetUserByIdController()))
  .get('/users', adpterMiddleware(makeMiddlewareRouteAdm()), adpterRouter(makeGetAllUserController()))
  .post('/user', adpterRouter(makeCreateUserController()))
  .delete('/user/:id', adpterRouter(makeDeleteUserController()))
  .post('/user/driver',adpterMiddleware(makeMiddlewareRouteAdm()), adpterRouter(makeCreateDriverController()))
  .put('/user/driver', adpterMiddleware(makeMiddlewareRouteAdm()), adpterRouter(makeUpdateUserController()))
  .post('/vehicle', adpterMiddleware(makeMiddlewareRouteAdm()),adpterRouter(makeCreateVehicleController()) )
// Next Routers

//Routes
routes.get('/route/:id', adpterRouter(makeGetByIdController()))
routes.get('/routes', adpterRouter(makeGetAllRouteController()))
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

export default routes;
