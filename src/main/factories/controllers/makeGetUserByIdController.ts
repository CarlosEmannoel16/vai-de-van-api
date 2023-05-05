import { GetUserByIdController } from '@/presentation/controller/user/GetUserByIdController';
import { makeUseByIdUseCase } from '../useCases/makeGetUserByIdUseCase';

export function makeGetUserByIdController(): GetUserByIdController {
  return new GetUserByIdController(makeUseByIdUseCase());
}
