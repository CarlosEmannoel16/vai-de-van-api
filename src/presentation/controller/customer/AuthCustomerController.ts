import { IAuthCustomerProtocolUseCase } from '@/data/protocols/usecases/customer/AuthCustomerUseCaseProtocol';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';

export class AuthCustomerController implements IController {
  constructor(
    private readonly authCustomerUseCase: IAuthCustomerProtocolUseCase,
  ) {}

  // @HandlerErrorController
  async handle(req: IRequest): Promise<IResponse> {

    const response = await this.authCustomerUseCase.handler(
      req.body.email,
      req.body.password,
    );

    console.log(response);
    return {
      statusCode: 200,
      status: ResponseStatus.OK,
      data: response,
      message: 'Customer authenticated successfully',
    };
  }
}
