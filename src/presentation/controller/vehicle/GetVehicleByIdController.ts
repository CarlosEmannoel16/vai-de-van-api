import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { GetVehicleByIdUseCase } from '@/data/usecases/vehicle/GetVehicleById';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetVehicleByIdController implements IController {
  constructor(private readonly getVehicleByIdUseCase: GetVehicleByIdUseCase) {}

  @HandlerErrorController
  async handle(request: Request, res: Response): Promise<Response<IResponse>> {
    const { id } = request.params;
    const vehicle = await this.getVehicleByIdUseCase.execute(id);
    return res.status(200).json(vehicle);
  }
}
