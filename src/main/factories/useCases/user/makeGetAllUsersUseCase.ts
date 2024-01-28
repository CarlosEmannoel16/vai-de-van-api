import { GetAllUsersUseCase } from '@/data/usecases/user/GetAllUsersUseCase';
import { IGetAllUsers } from '@/data/protocols/usecases/user/GetAllUsers';
import { UserRepository } from '@/infra/UserRepository';

export const makeGetAllUsersUseCase = (): IGetAllUsers => {
  return new GetAllUsersUseCase(new UserRepository());
};
