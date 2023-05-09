import { GetAllUsersUseCase } from '@/dataUseCases/usecases/user/GetAllUsersUseCase';
import { IGetAllUsers } from '@/domain/usecases/user/GetAllUsers';
import { UserRepository } from '@/infra/db/postgres/repository/UserRepository';

export const makeGetAllUsersUseCase = (): IGetAllUsers => {
  return new GetAllUsersUseCase(new UserRepository());
};
