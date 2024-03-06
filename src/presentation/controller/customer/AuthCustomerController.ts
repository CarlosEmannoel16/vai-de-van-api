import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IAuthCustomerProtocolUseCase } from '@/data/protocols/usecases/customer/AuthCustomerUseCaseProtocol';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class AuthCustomerController implements IController {
  constructor(
    private readonly authCustomerUseCase: IAuthCustomerProtocolUseCase,
  ) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    console.log('AuthCustomerController');
    const result = await this.authCustomerUseCase.handler(
      req.body.email,
      req.body.password,
    );
    return res.status(200).json(result);
  }
}
