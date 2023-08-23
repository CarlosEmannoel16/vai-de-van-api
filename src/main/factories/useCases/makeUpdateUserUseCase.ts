import { UpdateUserUseCase } from '@/data/usecases/user/UpdateUserUseCase';
import { IUpdateUser } from '@/domain/usecases/user/UpdateUser';
import { makeUserRepository } from '../repositories/makeUserRepositories';
export const makeUpdateUserUseCase = (): IUpdateUser => {
  return new UpdateUserUseCase(makeUserRepository(), makeUserRepository());
};
