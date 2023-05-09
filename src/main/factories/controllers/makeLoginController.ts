import { LoginController } from '@/presentation/controller/auth/LoginController';
import { makeLoginUseCase } from '../useCases/makeLoginUseCase';
import { IController } from '@/presentation/protocols/IController';

export function makeLoginController(): IController {
  return new LoginController(makeLoginUseCase());
}