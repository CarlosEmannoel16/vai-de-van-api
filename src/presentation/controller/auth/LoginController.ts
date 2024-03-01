import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { NotAuthorizedError } from '@/data/errors/NotAuthorizedError';
import { IAuthLogin } from '@/infra/protocols/auth/AuthLogin';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class LoginController implements IController {
  constructor(private readonly verifyLogin: IAuthLogin) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const result = await this.verifyLogin.verify({
      email: req.body.email,
      password: req.body.password,
    });

    if (!result.authorized) throw new NotAuthorizedError(result.message);

    return res.status(200).json(result);
  }
}
