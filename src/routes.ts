import { Router } from 'express';
import {
  makeCreateUserController,
  makeGetUserByIdController,
  makeGetAllUserController,
} from './main/factories/controllers';
import { makeMiddlewareAuth } from './main/factories/middlewares/makeMiddlewaredAuth'
import { adpterMiddleware, adpterRouter } from './main/utils'
const routes = Router();

routes.get('/login')

routes.use(adpterMiddleware(makeMiddlewareAuth()))
.post('/user', adpterRouter(makeCreateUserController()))
.get('/users', adpterRouter(makeGetAllUserController()))
.get('/user/:id', adpterRouter(makeGetUserByIdController()));





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
