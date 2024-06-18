import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { FindTravelById } from '@/data/usecases/travels/FindTravelByIdUseCase';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';

export class FindTravelByIdController implements IController {
  constructor(private readonly findTravelByIdUseCase: FindTravelById) {}

  async handle(req: IRequest): Promise<IResponse> {
    const data = await this.findTravelByIdUseCase.execute(req.params.id);
    return { data, status: ResponseStatus.OK };
  }
}
