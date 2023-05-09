import { GetUserByIdUseCase } from '@/dataUseCases/usecases/user/GetUserByIdUseCase';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';
import { getUserYupValidation } from './validation/yupValidationUser';
import ControllerException from '@/presentation/helpers/ControllerException';

export class GetUserByIdController implements IController {
  constructor(private readonly getUserById: GetUserByIdUseCase) {}
  async handle(
    req: Request,
    res: Response<any, Record<string, any>>,
  ): Promise<Response<IResponse>> {
    try {
      await getUserYupValidation.validate(req.params, {
        abortEarly: false,
      });

      const user = await this.getUserById.execute(req.params.id);
      return res.status(200).json({ status: ResponseStatus.OK, data: user });
    } catch (err) {
      const { message, status, statusCode } = ControllerException.handleError(
        err as Error,
      );

      return res.status(statusCode).json({ message, status });
    }
  }
}
