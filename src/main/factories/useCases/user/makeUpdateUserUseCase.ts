import { UpdateUserUseCase } from '@/data/usecases/user/UpdateUserUseCase';
import { IUpdateUser } from '@/data/protocols/usecases/user/UpdateUser';
import { UserRepository } from '@/infra/UserRepository';
export const makeUpdateUserUseCase = (): IUpdateUser => {
  return new UpdateUserUseCase(new UserRepository());
};
