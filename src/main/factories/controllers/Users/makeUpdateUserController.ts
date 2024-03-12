import { UpdateUserController } from '@/presentation/controller/user/UpdateUserController';
import { makeUpdateUserUseCase } from '../../useCases/user/makeUpdateUserUseCase';
import { IController } from '@/presentation/protocols/IController';

export const makeUpdateUserController = (): IController => {
  return new UpdateUserController(makeUpdateUserUseCase());
};
