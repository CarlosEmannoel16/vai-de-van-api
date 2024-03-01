import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IGetAllRoutes } from '@/data/protocols/usecases/routes/GetAllRoutes';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetAllRoutesController implements IController {
  constructor(private readonly getAllRoute: IGetAllRoutes) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const routes = await this.getAllRoute.execute();
    return res.status(200).json({ status: ResponseStatus.OK, data: routes });
  }
}
