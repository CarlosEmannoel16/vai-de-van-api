import { GetUserByIdController } from '@presentation/controller/user/GetUserByIdController';
import { GetUserByIdUseCase } from '@data/usecases/user/GetUserByIdUseCase';
import { UserRepository } from '@infra/db/postgres/repository/UserRepository';

export function makeGetUserByIdController(): GetUserByIdController {
  const userRepository = new UserRepository();
  const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
  return new GetUserByIdController(getUserByIdUseCase);
}
