import { ICreateUser } from '@/domain/usecases/user';
import { CreateUserUseCase } from '../../../../data/usecases/user/CreateUserUseCase';
import { UserRepository } from '@/infra/UserRepository';

export const makeCreateUserUseCase = (): ICreateUser => {
  return new CreateUserUseCase(
    new UserRepository(),
  );
};
