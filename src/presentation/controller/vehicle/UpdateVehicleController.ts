import { UpdateVehicleUseCase } from '@/data/usecases/vehicle/UpdateVehicle';

import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IRequest } from '@/main/utils';

export class UpdateVehicleController implements IController {
  constructor(private readonly updateVehicleUseCase: UpdateVehicleUseCase) {}

  async handle(req: IRequest): Promise<IResponse> {
    const result = await this.updateVehicleUseCase.execute(req.body);
    return { data: result, status: ResponseStatus.CREATED };
  }
}
