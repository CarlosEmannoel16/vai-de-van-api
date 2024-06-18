import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { ICreateVehicle } from '@/data/protocols/usecases/vechicle/CreateVechicleUseCase';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { ResponseStatus } from '@/presentation/utils/response';
import { IResponse } from '@/presentation/utils/response';

export class CreateVehicleController implements IController {
  constructor(private readonly createVehicleUseCase: ICreateVehicle) {}

  async handle(req: IRequest): Promise<IResponse> {
    const result = await this.createVehicleUseCase.execute(req.body);
    if (result)
      return {
        data: result,
        status: ResponseStatus.CREATED,
      };
  }
}
