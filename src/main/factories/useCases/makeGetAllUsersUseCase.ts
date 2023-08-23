import { GetAllUsersUseCase } from '@/data/usecases/user/GetAllUsersUseCase';
import { IGetAllUsers } from '@/domain/usecases/user/GetAllUsers';
import { makeUserRepository } from '../repositories/makeUserRepositories';

export const makeGetAllUsersUseCase = (): IGetAllUsers => {
  return new GetAllUsersUseCase(makeUserRepository());
};
