import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { InvalidParamsError } from '@/data/errors/ParamsInvalid';
import { BaseError } from '@/data/errors/baseError';
import { ICreateCustomerUseCaseProtocol } from '@/data/protocols/usecases/customer/CreateCustomerUseCaseProtocol';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export class CreateCustomerController implements IController {
  constructor(
    private readonly createCustomerUseCase: ICreateCustomerUseCaseProtocol,
  ) {}
  @HandlerErrorController
  async handle(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): Promise<Response<IResponse, Record<string, any>>> {
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

    return res.status(201).json({
      name: result.name,
      id: result.id,
      email: result.email,
    });
  }
}
