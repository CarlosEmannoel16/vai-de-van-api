import { IGetAllUsers } from '@/domain/usecases/user/GetAllUsers';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetAllUsersController implements IController {
  constructor(private readonly getAllUsersUseCase: IGetAllUsers) {}
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const users = await this.getAllUsersUseCase.execute();
      console.log(users);
      return res.status(200).json({ status: ResponseStatus.OK, data: users });
    } catch (error) {
      const { message, status, statusCode } = ControllerException.handleError(
        error as Error,
      );

      return res.status(statusCode).json({ message, status });
    }
  }
}
