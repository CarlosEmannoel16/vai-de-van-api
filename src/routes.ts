import { Router } from 'express';
import {
  makeCreateUserController,
  makeGetUserByIdController,
  makeGetAllUserController,
  makeLoginController,
  makeCreateDriverController,
  makeUpdateUserController,
  makeDeleteUserController,
  makeUpdateProfileUserController,
} from './main/factories/controllers';

import { adapterRouter } from './main/utils';
import upload from './config/upload';
import multer from 'multer';
import { makeGetAllRouteController } from './main/factories/controllers/Route/makeGetAllRouteController';
import { makeGetByIdController } from './main/factories/controllers/Route/makeGetRouteByIdController';
import { makeCreateRouteController } from './main/factories/controllers/Route/makeCreateRouteController';
import { makeGetAllStopsController } from './main/factories/controllers/Stop/GetAllStopsControllerFactory';
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
import { makeFindAllDriversController } from './main/factories/controllers/Driver/makeFindAllDriversController';
import { makeCreateCustomerController } from './main/factories/controllers/customer/CreateCustomerControllerFactory';
import { makeAuthCustomerController } from './main/factories/controllers/customer/AuthCustomerControllerFactory';

const routes = Router();

routes.post('/login', adapterRouter(makeLoginController()));
routes.get('/free/users', adapterRouter(makeGetAllUserController()));
routes.get('/stops', adapterRouter(makeGetAllStopsController()));

routes.post(
  '/user/upload/profile',
  multer({ storage: upload.storage }).single('avatar'),
  adapterRouter(makeUpdateProfileUserController()),
);
routes.post('/user/driver', adapterRouter(makeCreateDriverController()));
routes.get('/user/:id', adapterRouter(makeGetUserByIdController()));
routes.get('/users', adapterRouter(makeGetAllUserController()));
routes.post('/user', adapterRouter(makeCreateUserController()));

routes.delete('/user/:id', adapterRouter(makeDeleteUserController()));
routes.put('/driver', adapterRouter(makeUpdateUserController()));

//Driver
routes.get('/drivers', adapterRouter(makeFindAllDriversController()));
routes.post('/driver', adapterRouter(makeCreateDriverController()));
routes.put('/driver', adapterRouter(makeUpdateUserController()));
routes.get('/driver/:id', adapterRouter(makeGetUserByIdController()));
routes.delete('/driver/:id', adapterRouter(makeDeleteUserController()));

//Vehicles
routes.post('/vehicle', adapterRouter(makeCreateVehicleController()));
routes.get('/vehicle', adapterRouter(makeGetAllVehiclesController()));
routes.put('/vehicle', adapterRouter(makeUpdateVehicleController()));
routes.get('/vehicle/:id', adapterRouter(makeGetVehicleByIdController()));
routes.delete('/vehicle/:id', adapterRouter(makeDeleteVehicleController()));

//Routes
routes.get('/route/:id', adapterRouter(makeGetByIdController()));
routes.get('/route', adapterRouter(makeGetAllRouteController()));
routes.post('/route', adapterRouter(makeCreateRouteController()));
routes.put('/route', adapterRouter(makeUpdateRouteController()));

//Relatorios
routes.get('/dashboard', adapterRouter(makeDashboardController()));
// routes.get('/report/routes/:idDriver')
// routes.get('/report/routes/:idCity')
// routes.get('/report/routes/all')

//Travel
routes.get('/travel/search', adapterRouter(makeSearchTravelClientController()));
routes.post('/travel', adapterRouter(makeCreateTravelController()));
routes.get('/travel/all', adapterRouter(makeFindAllTravelController()));
routes.get('/travel/:id', adapterRouter(makeGetTravelByIdController()));

//Stops

//Customer
routes.post('/customer', adapterRouter(makeCreateCustomerController()));
routes.post('/customer/auth', adapterRouter(makeAuthCustomerController()));

export default routes;
