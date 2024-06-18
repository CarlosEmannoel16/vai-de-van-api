import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IGetAllUsers } from '@/data/protocols/usecases/user/GetAllUsers';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetAllUsersController implements IController {
  constructor(private readonly getAllUsersUseCase: IGetAllUsers) {}

  async handle(req: IRequest): Promise<IResponse> {
    const users = await this.getAllUsersUseCase.execute();
    return {
      status: ResponseStatus.OK,
      data: users,
      statusCode: 200,
    };
  }
}
