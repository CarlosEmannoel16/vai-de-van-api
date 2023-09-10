import { GetUserByIdUseCase } from '@/data/usecases/user/GetUserByIdUseCase';
import { IGetUserById } from '@/domain/usecases/user/GetUserByid';
import { UserRepository } from '@/infra/UserRepository';
export const makeGetUseByIdUseCase = (): IGetUserById => {
  return new GetUserByIdUseCase(new UserRepository());
};
