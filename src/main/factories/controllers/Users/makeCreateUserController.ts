import { IController } from '@/presentation/protocols/IController';
import { CreateUserController } from '../../../../presentation/controller/user/CreateUserController';
import { makeCreateUserUseCase } from '@makeUseCases';

export const makeCreateUserController = (): IController => {
  return new CreateUserController(makeCreateUserUseCase());
};
