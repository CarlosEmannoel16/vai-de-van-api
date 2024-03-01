import { UpdateVehicleUseCase } from '@/data/usecases/vehicle/UpdateVehicle';

import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

import { HandlerErrorController } from '@/@shared/decorators/TryCatch';

export class UpdateVehicleController implements IController {
  constructor(private readonly updateVehicleUseCase: UpdateVehicleUseCase) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const result = await this.updateVehicleUseCase.execute(req.body);
    return res.status(200).json({ data: result });
  }
}
