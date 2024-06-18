import { IFindAllVehiclesUseCase } from '@/data/protocols/usecases/vechicle/FindAllVehicleUseCase';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';


export class GetAllVehiclesController implements IController {
  constructor(
    private readonly findAllVehiclesUseCase: IFindAllVehiclesUseCase,
  ) {}
  async handle(req: IRequest): Promise<IResponse> {
    const result = await this.findAllVehiclesUseCase.execute();
    return {
      message: 'Veículos encontrados com sucesso',
      data: result,
      status: ResponseStatus.OK,
      statusCode: 200,
    };
  }
}
