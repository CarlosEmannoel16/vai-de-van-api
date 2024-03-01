import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { ICreateRouteUseCase } from '@/data/protocols/usecases/routes/CreateRoutes';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class CreateRoutesController implements IController {
  constructor(private readonly createRouterUseCase: ICreateRouteUseCase) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const data = req.body;
    const route = await this.createRouterUseCase.execute(data);
    return res.status(200).json(route);
  }
}
