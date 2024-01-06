import { FindTravelById } from '@/data/usecases/travels/FindTravelByIdUseCase';
import { ICreateTravels } from '@/data/protocols/usecases/travels/CreateTravels';
import { IListAllTravels } from '@/data/protocols/usecases/travels/LisatAllTravels';
import { IGetByIdRouteProtocolRepository } from '@/domain/Route/repository/GetByIdRouteProtocolRepository';
import { ICreateTripStopsProtocolRepository } from '@/domain/TripStop/repositories/CreateTripStopsProtocolRepository';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class FindTravelByIdController implements IController {
  constructor(private readonly findTravelByIdUseCase: FindTravelById) {}

  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const data = await this.findTravelByIdUseCase.execute(req.params.id);
      return res.status(200).json(data);
    } catch (error) {
      const { message, status, statusCode } =
      ControllerException.handleError(error);
    return res.status(statusCode).json({ message, status });
    }
  }
}
