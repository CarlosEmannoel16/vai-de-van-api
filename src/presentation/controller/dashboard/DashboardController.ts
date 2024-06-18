import { IDashboardUseCase } from '@/data/protocols/usecases/dashboard/DashboardInterface';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IRequest } from '@/main/utils';

export class DashboardController implements IController {
  constructor(private readonly dashboardUseCase: IDashboardUseCase) {}

  async handle(req: IRequest): Promise<IResponse> {
    const result = await this.dashboardUseCase.execute();
    return { data: result, status: ResponseStatus.OK };
  }
}
