import { GetAllUsersUseCase } from '@/data/usecases/user/GetAllUsersUseCase';
import { IGetAllUsers } from '@/domain/usecases/user/GetAllUsers';
import { makeUserRepository } from '@makeRepositories';

export const makeGetAllUsersUseCase = (): IGetAllUsers => {
  return new GetAllUsersUseCase(makeUserRepository());
};
