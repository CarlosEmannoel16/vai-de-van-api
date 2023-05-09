import { GetUserByIdUseCase } from '@/dataUseCases/usecases/user/GetUserByIdUseCase';
import { IGetUserById } from '@/domain/usecases/user/GetUserByid';
import { UserRepository } from '@/infra/db/postgres/repository/UserRepository';
export const makeGetUseByIdUseCase = (): IGetUserById => {
  return new GetUserByIdUseCase(new UserRepository());
};
