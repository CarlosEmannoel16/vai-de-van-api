import { ISearchTravelsUseCaseProtocol } from '@/data/protocols/usecases/travels/SearchTravels';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { Request, Response } from 'express';

export class UpdateTravelController implements IController {
  constructor(private readonly searchTravelUseCase: ISearchTravelsUseCaseProtocol) {}
  async handle(req: Request, res: Response) {
    try {
      const data = await this.searchTravelUseCase.execute(req.query as any);
      return res.status(200).json({ data });
    } catch (error) {
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
