import { SearchTravelsUseCase } from '@/data/usecases/travels/SearchTravelsUseCase';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';

export class SearchTravelController implements IController {
  constructor(private readonly searchTravelUseCase: SearchTravelsUseCase) {}

  async handle(req: IRequest): Promise<IResponse> {
    const data = await this.searchTravelUseCase.execute(req.query as any);
    return { data, status: ResponseStatus.OK };
  }
}
