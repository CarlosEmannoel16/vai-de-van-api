import { Request, Response } from 'express';
import { ICreateUser } from '../../../domain/usecases/user/CreateUser';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '../../utils/response';
import { createUserYupValidation } from './validation/yupValidationUser';
import ControllerException from '../../helpers/ControllerException';

export class CreateUserController implements IController {
  private readonly createUserUseCase: ICreateUser;
  constructor(CreateUserUseCase: ICreateUser) {
    this.createUserUseCase = CreateUserUseCase;
  }
  async handle(
    req: Request,
    res: Response<IResponse>,
  ): Promise<Response<IResponse>> {
    try {
      await createUserYupValidation.validate(req.body, {
        abortEarly: false,
      });
      const user = await this.createUserUseCase.execute(req.body);

      return res.status(201).json({
        status: ResponseStatus.CREATED,
        data: user,
      });
    } catch (error) {
      const { message, status, statusCode } = ControllerException.handleError(
        error as Error,
      );
      return res.status(statusCode).json({ message, status });
    }
  }
}
