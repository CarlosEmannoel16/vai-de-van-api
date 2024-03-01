import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { ICreateVehicle } from '@/data/protocols/usecases/vechicle/CreateVechicleUseCase';
import { IController } from '@/presentation/protocols/IController';
import { ResponseStatus } from '@/presentation/utils/response';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class CreateVehicleController implements IController {
  constructor(private readonly createVehicleUseCase: ICreateVehicle) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const result = await this.createVehicleUseCase.execute(req.body);
    if (result)
      return res.status(200).json({
        data: result,
        status: ResponseStatus.CREATED,
      });
  }
}
