import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IGetAllStopsProtocolUseCase } from '@/data/protocols/usecases/stops/GetAllStopsInterface';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetAllStopsController implements IController {
  constructor(
    private readonly getAllStopsUseCase: IGetAllStopsProtocolUseCase,
  ) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const data = await this.getAllStopsUseCase.execute();
    return res.status(200).json(data);
  }
}
