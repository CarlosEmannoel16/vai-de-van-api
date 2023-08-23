import { GetUserByIdUseCase } from '@/data/usecases/user/GetUserByIdUseCase';
import { IGetUserById } from '@/domain/usecases/user/GetUserByid';
import { makeUserRepository } from '../repositories/makeUserRepositories';
export const makeGetUseByIdUseCase = (): IGetUserById => {
  return new GetUserByIdUseCase(makeUserRepository());
};
