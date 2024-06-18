import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IUpdateRoute } from '@/data/protocols/usecases/routes/UpdateRoutes';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class UpdateRouteController implements IController {
  constructor(private readonly updateRouteUseCase: IUpdateRoute) {}

  async handle(req: IRequest): Promise<IResponse> {
    const result = await this.updateRouteUseCase.execute({ ...req.body });
    return { data: result, status: ResponseStatus.CREATED };
  }
}
