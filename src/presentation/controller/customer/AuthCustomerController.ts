import { IAuthCustomerProtocolUseCase } from '@/data/protocols/usecases/customer/AuthCustomerUseCaseProtocol';
import { RequestAdapter } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';

export class AuthCustomerController implements IController {
  constructor(
    private readonly authCustomerUseCase: IAuthCustomerProtocolUseCase,
  ) {}

  // @HandlerErrorController
  async handle(req: RequestAdapter): Promise<IResponse> {
    const response = await this.authCustomerUseCase.handler(
      req.body.email,
      req.body.password,
    );
    return {
      status: ResponseStatus.OK,
      data: response,
      message: 'Customer authenticated successfully',
    };
  }
}
