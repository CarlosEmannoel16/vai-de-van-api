import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IFindAllVehiclesUseCase } from '@/data/protocols/usecases/vechicle/FindAllVehicleUseCase';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetAllVehiclesController implements IController {
  constructor(
    private readonly findAllVehiclesUseCase: IFindAllVehiclesUseCase,
  ) {}
  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    const result = await this.findAllVehiclesUseCase.execute();
    return res
      .status(200)
      .json({ message: 'Veículos encontrados com sucesso', data: result });
  }
}
