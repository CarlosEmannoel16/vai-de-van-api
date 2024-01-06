import { ICreateTravels } from '@/data/protocols/usecases/travels/CreateTravels';
import { IListAllTravels } from '@/data/protocols/usecases/travels/LisatAllTravels';
import { IGetByIdRouteProtocolRepository } from '@/domain/Route/repository/GetByIdRouteProtocolRepository';
import { ICreateTripStopsProtocolRepository } from '@/domain/TripStop/repositories/CreateTripStopsProtocolRepository';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class FindAllTravelController implements IController {
  constructor(private readonly listAllTravel: IListAllTravels) {}

  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const data = await this.listAllTravel.execute();
      return res.status(200).json(data);
    } catch (error) {
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
