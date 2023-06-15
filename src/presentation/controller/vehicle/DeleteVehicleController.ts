import { IDeleteVehicleUseCase } from '@/domain/usecases/vechicle/DeleteVehicleUseCase';
import { IDeleteVehicleRepository } from '@/infra/protocols/vechicle/DeleteVehicleRepository';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class DeleteVehicleController implements IController {
  constructor(private readonly deleteVehicleUseCase: IDeleteVehicleUseCase) {}
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const result = await this.deleteVehicleUseCase.execute(req.params.id);
      if (result) return res.status(200).json({ message: 'deleted deleted' });
      return res.status(500).json({ message: 'Vehicle not deleted' });
    } catch (error) {
      console.log(error);
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
