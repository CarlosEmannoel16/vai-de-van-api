import { CreateUserUseCase } from '../../../data/usecases/user/CreateUserUseCase';
import { CreateUser } from '../../../domain/usecases/user/createUser';
import { UserRepository } from '../../../infra/db/postgres/repository/UserRepository';

export const makeCreateUserUseCase = (): CreateUser => {
  return new CreateUserUseCase(new UserRepository(), new UserRepository());
};
