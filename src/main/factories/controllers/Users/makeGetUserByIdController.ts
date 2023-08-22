import { GetUserByIdController } from '@/presentation/controller/user/GetUserByIdController';
import { makeGetUseByIdUseCase } from '@makeUseCases';
import { IController } from '@/presentation/protocols/IController';

export function makeGetUserByIdController(): IController {
  return new GetUserByIdController(makeGetUseByIdUseCase());
}
