import { GetAllUsersController } from '@/presentation/controller/user/GetAllUsersController';
import { IController } from '@/presentation/protocols/IController';
import { makeGetAllUsersUseCase } from '../useCases';

export const makeGetAllUserController = (): IController => {
  return new GetAllUsersController(makeGetAllUsersUseCase());
};
