import { CreateUserController } from '../../../presentation/controller/user/CreateUserController';
import { makeCreateUserUseCase } from '../../factories/useCases/makeCreateUserUseCase';
export const makeCreateUserController = (): CreateUserController => {
  return new CreateUserController(makeCreateUserUseCase());
};
