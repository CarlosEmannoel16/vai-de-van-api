import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { ICreateTravels } from '@/data/protocols/usecases/travels/CreateTravels';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class CreateTravelController implements IController {
  constructor(private readonly createTravel: ICreateTravels) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const data = await this.createTravel.execute(req.body);
    return res.status(200).json(data);
  }
}
