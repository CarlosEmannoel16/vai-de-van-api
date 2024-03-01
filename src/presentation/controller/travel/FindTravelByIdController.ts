import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { FindTravelById } from '@/data/usecases/travels/FindTravelByIdUseCase';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class FindTravelByIdController implements IController {
  constructor(private readonly findTravelByIdUseCase: FindTravelById) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const data = await this.findTravelByIdUseCase.execute(req.params.id);
    return res.status(200).json(data);
  }
}
