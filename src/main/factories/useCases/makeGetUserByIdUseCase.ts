import { GetUserByIdUseCase } from '@/data/usecases/user/GetUserByIdUseCase';
import { UserRepository } from '@/infra/db/postgres/repository/UserRepository';
export const makeUseByIdUseCase = () => {
  return new GetUserByIdUseCase(new UserRepository());
};
