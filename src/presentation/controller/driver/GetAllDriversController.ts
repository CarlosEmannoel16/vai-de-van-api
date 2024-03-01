import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IGetAllDriversUseCase } from '@/data/protocols/usecases/driver/GetAllDrivers';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';


export class GetAllDriversController implements IController {
  constructor(private readonly getAllDriversUseCase: IGetAllDriversUseCase) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const result = await this.getAllDriversUseCase.execute();
    return res.status(200).json({ data: result });
  }
}
