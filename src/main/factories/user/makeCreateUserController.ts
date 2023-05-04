import { CreateUserController } from '../../../presentation/controller/user/CreateUserController';
import { CreateUserUseCase } from '@/data/usecases/user/CreateUserUseCase';
import { UserRepository } from '@/infra/db/postgres/repository/UserRepository';

export function makeCreateUserController(): CreateUserController {
  const userRepository = new UserRepository();

  const createuserUseCase = new CreateUserUseCase(
    userRepository,
    userRepository,
  );
  return new CreateUserController(createuserUseCase);
}
