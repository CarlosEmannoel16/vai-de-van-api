import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { GetVehicleByIdUseCase } from '@/data/usecases/vehicle/GetVehicleById';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetVehicleByIdController implements IController {
  constructor(private readonly getVehicleByIdUseCase: GetVehicleByIdUseCase) {}

  async handle(req: IRequest): Promise<IResponse> {
    const { id } = req.params;
    const vehicle = await this.getVehicleByIdUseCase.execute(id);
    return { data: vehicle, status: ResponseStatus.OK };
  }
}
