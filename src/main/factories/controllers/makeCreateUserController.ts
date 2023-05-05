import { CreateUserController } from '../../../presentation/controller/user/CreateUserController';
import { makeCreateUserUseCase } from '../../factories/useCases/makeCreateUserUseCase';
export function makeCreateUserController(): CreateUserController {
  return new CreateUserController(makeCreateUserUseCase());
}
