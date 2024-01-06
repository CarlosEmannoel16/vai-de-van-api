import { ICreateTravels } from '@/data/protocols/usecases/travels/CreateTravels';
import { IGetByIdRouteProtocolRepository } from '@/domain/Route/repository/GetByIdRouteProtocolRepository';
import { ICreateTripStopsProtocolRepository } from '@/domain/TripStop/repositories/CreateTripStopsProtocolRepository';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class CreateTravelController implements IController {
  constructor(private readonly createTravel: ICreateTravels) {}

  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const data = await this.createTravel.execute(req.body);
      return res.status(200).json(data);
    } catch (error) {
      const { message, status, statusCode } =
      ControllerException.handleError(error);
    return res.status(500).json({ message, status });
    }
  }
}
