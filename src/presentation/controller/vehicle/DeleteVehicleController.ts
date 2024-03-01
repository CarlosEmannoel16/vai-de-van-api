import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IDeleteVehicleUseCase } from '@/data/protocols/usecases/vechicle/DeleteVehicleUseCase';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class DeleteVehicleController implements IController {
  constructor(private readonly deleteVehicleUseCase: IDeleteVehicleUseCase) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const result = await this.deleteVehicleUseCase.execute(req.params.id);
    if (result) return res.status(200).json({ message: 'deleted deleted' });
  }
}
