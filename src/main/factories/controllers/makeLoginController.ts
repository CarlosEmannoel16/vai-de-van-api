import { LoginController } from '@/presentation/controller/auth/LoginController';
import { makeLoginUseCase } from '@makeUseCases';
import { IController } from '@/presentation/protocols/IController';

export function makeLoginController(): IController {
  return new LoginController(makeLoginUseCase());
}