import { CreateUserUseCase } from '../../../dataUseCases/usecases/user/CreateUserUseCase';
import { ICreateUser } from '../../../domain/usecases/user/createUser';
import { UserRepository } from '../../../infra/db/postgres/repository/UserRepository';

export const makeCreateUserUseCase = (): ICreateUser => {
  return new CreateUserUseCase(
    new UserRepository(),
    new UserRepository(),
    new UserRepository(),
  );
};
