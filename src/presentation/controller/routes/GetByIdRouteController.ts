import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IGetByIdRoutes } from '@/data/protocols/usecases/routes/GetByIdRoutes';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetByIdRouteController implements IController {
  constructor(private readonly getByidRoute: IGetByIdRoutes) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const { id } = req.params;
    const route = await this.getByidRoute.execute({ id });
    return res.status(200).json(route);
  }
}
