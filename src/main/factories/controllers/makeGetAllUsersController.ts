import { GetAllUsersController } from '@/presentation/controller/user/GetAllUsersController';
import { IController } from '@/presentation/protocols/IController';
import { makeGetAllUsersUseCase } from '@makeUseCases';

export const makeGetAllUserController = (): IController => {
  return new GetAllUsersController(makeGetAllUsersUseCase());
};
