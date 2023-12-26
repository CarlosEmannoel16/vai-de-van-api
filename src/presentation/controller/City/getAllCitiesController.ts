import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { GetAllCitiesUseCase } from '@/data/usecases/city/getCityUseCase';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetAllCitiesController implements IController {
  constructor(private readonly getAllCities: GetAllCitiesUseCase) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const data = await this.getAllCities.execute();
      return res.status(200).json(data);
    } catch (error) {
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
