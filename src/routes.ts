import { Router } from 'express';

import { makeCreateUserController } from './main/factories/user/makeCreateUserController';
import { makeGetUserByIdController } from './main/factories/user/makeGetUserByIdController';

const router = Router();

router.post('/user', makeCreateUserController().handle);
router.get('/user/:idUser', makeGetUserByIdController().handle);

export default router;
