import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IUpdateRoute } from '@/data/protocols/usecases/routes/UpdateRoutes';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class UpdateRouteController implements IController {
  constructor(private readonly updateRouteUseCase: IUpdateRoute) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const result = await this.updateRouteUseCase.execute({ ...req.body });
    return res.status(200).json(result);
  }
}
