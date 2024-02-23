import { ICreateDriverUseCase } from '@/data/protocols/usecases/driver/CreateDriver';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';


export class CreateDriverController implements IController {
  constructor(private readonly createDriver: ICreateDriverUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const driver = await this.createDriver.create(req.body);
      return res.status(200).json({ data: driver });
    } catch (error) {
     console.log(error);
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      res.status(statusCode).json({ message, status });
    }
  }
}
