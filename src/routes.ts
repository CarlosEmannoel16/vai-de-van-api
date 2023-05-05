import { Request, Response, Router } from 'express';
import { makeCreateUserController } from './main/factories/controllers/makeCreateUserController';
// import { makeGetUserByIdController } from './main/factories/controllers/user/makeGetUserByIdController';
const CreateUserController = makeCreateUserController();
const routes = Router();
routes.post('/user', (req: Request, res: Response) => {
  CreateUserController.handle(req, res);
});
// router.get('/user/:idUser', makeGetUserByIdController().handle);

export = routes;
