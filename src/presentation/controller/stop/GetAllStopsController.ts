import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { IGetAllStopsProtocolUseCase } from '@/data/protocols/usecases/stops/GetAllStopsInterface';
import { RequestAdapter } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';

export class GetAllStopsController implements IController {
  constructor(
    private readonly getAllStopsUseCase: IGetAllStopsProtocolUseCase,
  ) {}

  @HandlerErrorController
  async handle(req: RequestAdapter): Promise<IResponse> {
    const response = await this.getAllStopsUseCase.execute();
    return {
      status: ResponseStatus.OK,
      data: response,
    };
  }
}
