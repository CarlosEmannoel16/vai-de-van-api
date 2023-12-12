import { ICreateVehicle } from '@/data/protocols/usecases/vechicle/CreateVechicleUseCase';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { ResponseStatus } from '@/presentation/utils/response';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class CreateVehicleController implements IController {
  constructor(private readonly createVehicleUseCase: ICreateVehicle) {}
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const result = await this.createVehicleUseCase.execute(req.body);
      if (result)
        return res.status(200).json({
          data: result,
          status: ResponseStatus.CREATED,
        });
          return res.status(500).json({
            data: result,
            status: ResponseStatus.INTERNAL_SERVER_ERROR,
          });
    } catch (error) {
      console.log(error)
        const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
