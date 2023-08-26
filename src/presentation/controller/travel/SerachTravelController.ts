import { SearchTravelsUseCase } from '@/data/usecases/travels/SearchTravelsUseCase';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { Request, Response } from 'express';

export class SearchTravelController implements IController {
  constructor(private readonly searchTravelUseCase: SearchTravelsUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      console.log('===>');
      const data = await this.searchTravelUseCase.execute(req.params as any);
      return res.status(200).json({ data });
    } catch (error) {
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
