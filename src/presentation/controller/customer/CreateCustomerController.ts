import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { InvalidParamsError } from '@/data/errors/ParamsInvalid';
import { ICreateCustomerUseCaseProtocol } from '@/data/protocols/usecases/customer/CreateCustomerUseCaseProtocol';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class CreateCustomerController implements IController {
  constructor(
    private readonly createCustomerUseCase: ICreateCustomerUseCaseProtocol,
  ) {}
  async handle(req: IRequest): Promise<IResponse> {
    if (!req.body.dateOfBirth) {
      throw new InvalidParamsError('dateOfBirth is required');
    }

    const result = await this.createCustomerUseCase.execute({
      cpf: req.body.cpf,
      dateOfBirth: new Date(req.body.dateOfBirth),
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      phone: req.body.phone,
    });

    return {
      data: {
        name: result.name,
        id: result.id,
        email: result.email,
        emailConfirmed: result.emailConfirm,
      },
      status: ResponseStatus.CREATED
    };
  }
}
