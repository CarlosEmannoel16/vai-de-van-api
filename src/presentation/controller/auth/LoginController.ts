import { NotAuthorizedError } from '@/data/errors/NotAuthorizedError';
import { IAuthLogin } from '@/infra/protocols/auth/AuthLogin';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import * as yup from 'yup';
export class LoginController implements IController {
  constructor(private readonly verifyLogin: IAuthLogin) {}

  async handle(req: IRequest): Promise<IResponse> {
    yup
      .object()
      .shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })
      .validateSync(req.body, { abortEarly: false });

    const result = await this.verifyLogin.verify({
      email: req.body.email,
      password: req.body.password,
    });

    if (!result.authorized) throw new NotAuthorizedError(result.message);

    return {
      status: ResponseStatus.OK,
      data: result,
      message: 'User authenticated successfully',
      statusCode:200
    };
  }
}
