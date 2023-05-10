import { CreateUserUseCase } from '../../../data/usecases/user/CreateUserUseCase';
import { ICreateUser } from '../../../domain/usecases/user/createUser';
import { makeUserRepository } from '@makeRepositories';

export const makeCreateUserUseCase = (): ICreateUser => {
  return new CreateUserUseCase(
    makeUserRepository(),
    makeUserRepository(),
    makeUserRepository(),
  );
};
