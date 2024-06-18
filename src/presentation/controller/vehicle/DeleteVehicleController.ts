import { IDeleteVehicleUseCase } from '@/data/protocols/usecases/vechicle/DeleteVehicleUseCase';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';

export class DeleteVehicleController implements IController {
  constructor(private readonly deleteVehicleUseCase: IDeleteVehicleUseCase) {}

  async handle(req: IRequest): Promise<IResponse> {
    const result = await this.deleteVehicleUseCase.execute(req.params.id);
    if (result)
      return { status: ResponseStatus.DELETED, message: 'deleted deleted' };
  }
}
