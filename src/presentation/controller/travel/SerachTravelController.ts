import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { SearchTravelsUseCase } from '@/data/usecases/travels/SearchTravelsUseCase';
import { IController } from '@/presentation/protocols/IController';
import { Request, Response } from 'express';

export class SearchTravelController implements IController {
  constructor(private readonly searchTravelUseCase: SearchTravelsUseCase) {}

  @HandlerErrorController
  async handle(req: Request, res: Response) {
    const data = await this.searchTravelUseCase.execute(req.query as any);
    return res.status(200).json({ data });
  }
}
