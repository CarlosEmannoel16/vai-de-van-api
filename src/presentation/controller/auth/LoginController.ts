import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { NotAuthorizedError } from '@/data/errors/NotAuthorizedError';
import { IAuthLogin } from '@/infra/protocols/auth/AuthLogin';
import { RequestAdapter } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class LoginController implements IController {
  constructor(private readonly verifyLogin: IAuthLogin) {}

  @HandlerErrorController
  async handle(req: RequestAdapter): Promise<IResponse> {
    const result = await this.verifyLogin.verify({
      email: req.body.email,
      password: req.body.password,
    });

    if (!result.authorized) throw new NotAuthorizedError(result.message);

    return {
      status: ResponseStatus.OK,
      data: result,
      message: 'User authenticated successfully',
    };
  }
}
