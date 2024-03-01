import { IDashboardUseCase } from '@/data/protocols/usecases/dashboard/DashboardInterface';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

import { HandlerErrorController } from '@/@shared/decorators/TryCatch';

export class DashboardController implements IController {
  constructor(private readonly dashboardUseCase: IDashboardUseCase) {}
  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const result = await this.dashboardUseCase.execute();
    return res.status(200).json({ data: result });
  }
}
