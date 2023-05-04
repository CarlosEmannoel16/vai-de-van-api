import { Request, Response } from 'express';
import { CreateUser } from '@/domain/usecases/user/createUser';
import { IController } from '@/presentation/protocols/controller';
import { IResponse, ResponseStatus } from '../../utils/response';
import { createUserYupValidation } from './validation/yupValidationUser';
import ControllerException from '../../helpers/ControllerException';

export class CreateUserController implements IController {
  constructor(private readonly createUserUseCase: CreateUser) {}

  async handle(
    req: Request,
    res: Response<IResponse>,
  ): Promise<Response<IResponse>> {
    try {
      createUserYupValidation.validate(req.body, {
        abortEarly: false,
      });

      const user = await this.createUserUseCase.execute(req.body);

      return res.status(201).json({
        status: ResponseStatus.CREATED,
        data: user,
      });
    } catch (error) {
      const { message, status, statusCode } = ControllerException.handleError(
        new Error(),
      );
      return res.status(statusCode).json({ message, status });
    }
  }
}
