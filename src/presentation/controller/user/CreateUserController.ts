import { Request, Response } from 'express';
import { IResponse, ResponseStatus } from '../../utils/response';
import { createUserYupValidation } from './validation/yupValidationUser';
import { IController } from '@/presentation/protocols/IController';
import { ICreateUser } from '@/data/protocols/usecases/user';
import { IRequest } from '@/main/utils';

export class CreateUserController implements IController {
  private readonly createUserUseCase: ICreateUser;
  constructor(CreateUserUseCase: ICreateUser) {
    this.createUserUseCase = CreateUserUseCase;
  }

  async handle(req: IRequest): Promise<IResponse> {
    await createUserYupValidation.validate(req.body, {
      abortEarly: false,
    });


    const user = await this.createUserUseCase.execute(req.body);

    return {
      status: ResponseStatus.CREATED,
      data: user,
      statusCode: 201,
    };
  }
}
