import { ICreateUser } from '@/domain/usecases/user';
import { CreateUserUseCase } from '../../../data/usecases/user/CreateUserUseCase';
import { makeUserRepository } from '../repositories/makeUserRepositories';

export const makeCreateUserUseCase = (): ICreateUser => {
  return new CreateUserUseCase(
    makeUserRepository(),
    makeUserRepository(),
    makeUserRepository(),
  );
};
