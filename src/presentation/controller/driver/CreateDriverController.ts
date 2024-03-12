import { HandlerErrorController } from '@/@shared/decorators/TryCatch';
import { ICreateDriverUseCase } from '@/data/protocols/usecases/driver/CreateDriver';
import { IRequest } from '@/main/utils';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';

export class CreateDriverController implements IController {
  constructor(private readonly createDriver: ICreateDriverUseCase) {}

  async handle(req: IRequest): Promise<IResponse> {
    const driver = await this.createDriver.create(req.body);
    return {
      status: ResponseStatus.CREATED,
      statusCode: 201,
      data: driver,
    };
  }
}
