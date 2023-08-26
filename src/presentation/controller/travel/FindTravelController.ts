import { ICreateTravels } from '@/domain/usecases/travels/CreateTravels';
import { IListAllTravels } from '@/domain/usecases/travels/LisatAllTravels';
import { IGetByIdRouteProtocolRepository } from '@/infra/protocols/route/GetByIdRouteProtocolRepository';
import { ICreateTripStopsProtocolRepository } from '@/infra/protocols/tripStops/CreateTripStopsProtocolRepository';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class FindAllTravelController implements IController {
  constructor(private readonly listAllTravel: IListAllTravels) {}

  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const data = await this.listAllTravel.execute();
      console.log(data);
      return res.status(200).json(data);
    } catch (error) {
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
