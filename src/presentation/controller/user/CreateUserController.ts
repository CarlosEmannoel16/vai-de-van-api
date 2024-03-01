import { Request, Response } from 'express';
import { IResponse, ResponseStatus } from '../../utils/response';
import { createUserYupValidation } from './validation/yupValidationUser';
import { IController } from '@/presentation/protocols/IController';
import { ICreateUser } from '@/data/protocols/usecases/user';
import { HandlerErrorController } from '@/@shared/decorators/TryCatch';

export class CreateUserController implements IController {
  private readonly createUserUseCase: ICreateUser;
  constructor(CreateUserUseCase: ICreateUser) {
    this.createUserUseCase = CreateUserUseCase;
  }

  @HandlerErrorController
  async handle(
    req: Request,
    res: Response<IResponse>,
  ): Promise<Response<IResponse>> {
    await createUserYupValidation.validate(req.body, {
      abortEarly: false,
    });
    const user = await this.createUserUseCase.execute(req.body);

    return res.status(201).json({
      status: ResponseStatus.CREATED,
      data: user,
    });
  }
}
