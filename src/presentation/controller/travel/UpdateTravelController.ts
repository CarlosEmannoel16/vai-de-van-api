import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { ISearchTravelsUseCaseProtocol } from '@/data/protocols/usecases/travels/SearchTravels';
import { IController } from '@/presentation/protocols/IController';
import { Request, Response } from 'express';

export class UpdateTravelController implements IController {
  constructor(
    private readonly searchTravelUseCase: ISearchTravelsUseCaseProtocol,
  ) {}

  @HandlerErrorController
  async handle(req: Request, res: Response) {
    const data = await this.searchTravelUseCase.execute(req.query as any);
    return res.status(200).json({ data });
  }
}
