import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IListAllTravels } from '@/data/protocols/usecases/travels/LisatAllTravels';

import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class FindAllTravelController implements IController {
  constructor(private readonly listAllTravel: IListAllTravels) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const data = await this.listAllTravel.execute();
    return res.status(200).json(data);
  }
}
