import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IGetAllDriversUseCase } from '@/data/protocols/usecases/driver/GetAllDrivers';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';

export class GetAllDriversController implements IController {
  constructor(private readonly getAllDriversUseCase: IGetAllDriversUseCase) {}

  @HandlerErrorController
  async handle(req: IRequest): Promise<IResponse> {
    const result = await this.getAllDriversUseCase.execute();
    return {
      status: ResponseStatus.OK,
      statusCode: 200,
      data: result,
    };
  }
}
