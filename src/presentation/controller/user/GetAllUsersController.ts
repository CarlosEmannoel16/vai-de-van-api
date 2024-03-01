import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IGetAllUsers } from '@/data/protocols/usecases/user/GetAllUsers';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetAllUsersController implements IController {
  constructor(private readonly getAllUsersUseCase: IGetAllUsers) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const users = await this.getAllUsersUseCase.execute();
    return res.status(200).json({ status: ResponseStatus.OK, data: users });
  }
}
