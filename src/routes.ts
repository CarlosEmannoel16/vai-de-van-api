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
import { adapterMiddleware, adapterRouter } from './main/utils';
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
import { makeUpdateRouteController } from './main/factories/controllers/Route/makeUpdateRouteController';
import { makeDashboardController } from './main/factories/controllers/Dashboard/makeDashboardController';

const routes = Router();

routes
.post('/login', adapterRouter(makeLoginController()))
.get('/free/users', adapterRouter(makeGetAllUserController()))
.get('/city', adapterRouter(makeGetCitiesController()))


//routes private
routes
  //.use(adpterMiddleware(makeMiddlewareAuth()))
  .post('/user/upload/profile', multer({storage: upload.storage}).single('avatar'), adapterRouter(makeUpdateProfileUserController()))
  .get('/user/:id', adapterRouter(makeGetUserByIdController()))
  .get('/users',  adapterRouter(makeGetAllUserController()))
  .post('/user', adapterRouter(makeCreateUserController()))
  .delete('/user/:id', adapterRouter(makeDeleteUserController()))
  .post('/user/driver', adapterRouter(makeCreateDriverController()))
  .put('/user/driver', adapterRouter(makeUpdateUserController()))
  .post('/vehicle', adapterRouter(makeCreateVehicleController()) )
  .get('/vehicle',  adapterRouter(makeGetAllVehiclesController()))
  .put('/vehicle',  adapterRouter(makeUpdateVehicleController()) )
  .get('/vehicle/:id',  adapterRouter(makeGetVehicleByIdController()))
  .delete('/vehicle/:id',  adapterRouter(makeDeleteVehicleController()) )

// Next Routers

//Routes
routes.get('/route/:id', adapterRouter(makeGetByIdController()))
routes.get('/route', adapterRouter(makeGetAllRouteController()))
routes.post('/route', adapterRouter(makeCreateRouteController()))
 routes.put('/route', adapterRouter(makeUpdateRouteController()))
// routes.delete('/route/:id')



//Relatorios
 routes.get('/dashboard', adapterRouter(makeDashboardController()))
// routes.get('/report/routes/:idDriver')
// routes.get('/report/routes/:idCity')
// routes.get('/report/routes/all')

//Travel
routes.get('/travel/search', adapterRouter(makeSearchTravelClientController()))
routes.post('/travel', adapterRouter(makeCreateTravelController()))
routes.get('/travel/all', adapterRouter(makeFindAllTravelController()))
routes.get('/travel/:id', adapterRouter(makeGetTravelByIdController()))



export default routes;
