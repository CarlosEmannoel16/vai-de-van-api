import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { ICreateRouteUseCase } from '@/data/protocols/usecases/routes/CreateRoutes';
import { IRequest } from '@/main/utils';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class CreateRoutesController implements IController {
  constructor(private readonly createRouterUseCase: ICreateRouteUseCase) {}

  async handle(req: IRequest): Promise<IResponse> {
    const data = req.body;
    const route = await this.createRouterUseCase.execute(data);
    return { data: route, status: ResponseStatus.CREATED };
  }
}
