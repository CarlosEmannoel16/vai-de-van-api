import { GetUserByIdUseCase } from '@/data/usecases/user/GetUserByIdUseCase';
import { IGetUserById } from '@/data/protocols/usecases/user/GetUserByid';
import { UserRepository } from '@/infra/UserRepository';
export const makeGetUseByIdUseCase = (): IGetUserById => {
  return new GetUserByIdUseCase(new UserRepository());
};
