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
import { makeGetAllRouteController } from './main/factories/controllers/Route/makeGetAllRouteController';
import { makeGetByIdController } from './main/factories/controllers/Route/makeGetRouteByIdController';
import { makeCreateRouteController } from './main/factories/controllers/Route/makeCreateRouteController';
import { makeGetCitiesController } from './main/factories/controllers/Cities/makeGetCitiesController';
import { makeCreateTravelController } from './main/factories/controllers/Travel/makeCreateTravelController';
import { makeFindAllTravelController } from './main/factories/controllers/Travel/makeFindAllTravelController';
import { makeCreateVehicleController } from './main/factories/controllers/Vehicles/makeCreateVehicleController';
import { makeGetAllVehiclesController } from './main/factories/controllers/Vehicles/makeGetAllVehiclesController';
import { makeDeleteVehicleController } from './main/factories/controllers/Vehicles/makeDeleteVehicleController';
import { makeGetVehicleByIdController } from './main/factories/controllers/Vehicles/makeGetVehicleByIdController';
import { makeUpdateVehicleController } from './main/factories/controllers/Vehicles/makeUpdateVehicleController';
import { makeGetTravelByIdController } from './main/factories/controllers/Travel/makeGetTravelByIdController';
import { makeSearchTravelClientController } from './main/factories/controllers/Travel/makeSearchTravelClientController';

const routes = Router();

routes
.post('/login', adpterRouter(makeLoginController()))
.get('/free/users', adpterRouter(makeGetAllUserController()))
.get('/city', adpterRouter(makeGetCitiesController()))


//routes private
routes
  //.use(adpterMiddleware(makeMiddlewareAuth()))
  .post('/user/upload/profile', multer({storage: upload.storage}).single('avatar'), adpterRouter(makeUpdateProfileUserController()))
  .get('/user/:id', adpterRouter(makeGetUserByIdController()))
  .get('/users',  adpterRouter(makeGetAllUserController()))
  .post('/user', adpterRouter(makeCreateUserController()))
  .delete('/user/:id', adpterRouter(makeDeleteUserController()))
  .post('/user/driver', adpterRouter(makeCreateDriverController()))
  .put('/user/driver', adpterRouter(makeUpdateUserController()))
  .post('/vehicle', adpterRouter(makeCreateVehicleController()) )
  .get('/vehicle',  adpterRouter(makeGetAllVehiclesController()))
  .put('/vehicle',  adpterRouter(makeUpdateVehicleController()) )
  .get('/vehicle/:id',  adpterRouter(makeGetVehicleByIdController()))
  .delete('/vehicle/:id',  adpterRouter(makeDeleteVehicleController()) )

// Next Routers

//Routes
routes.get('/route/:id', adpterRouter(makeGetByIdController()))
routes.get('/route', adpterRouter(makeGetAllRouteController()))
routes.post('/route', adpterRouter(makeCreateRouteController()))
// routes.put('/route')
// routes.delete('/route/:id')



//Relatorios
// routes.get('/report/routes/:idRouter')
// routes.get('/report/routes/:idDriver')
// routes.get('/report/routes/:idCity')
// routes.get('/report/routes/all')

//Travel
routes.get('/travel/search', adpterRouter(makeSearchTravelClientController()))
routes.post('/travel', adpterRouter(makeCreateTravelController()))
routes.get('/travel/all', adpterRouter(makeFindAllTravelController()))
routes.get('/travel/:id', adpterRouter(makeGetTravelByIdController()))



export default routes;
