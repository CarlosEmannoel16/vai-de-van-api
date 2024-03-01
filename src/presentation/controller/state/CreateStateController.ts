import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';
import { ICreateState } from '@/data/protocols/usecases/state/CreateState';
import { createStateValidation } from './validation/yupValidationSate';
import { httpResponse } from '@/presentation/helpers/httpResponse';
import { HandlerErrorController } from '@/@shared/decorators/TryCatch';

export class CreateStateController implements IController {
  constructor(private readonly createStateUseCase: ICreateState) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    createStateValidation.validate(req.body, {
      abortEarly: false,
    });
    const { name, uf } = req.body;
    const result = await this.createStateUseCase.execute({ name, uf });
    return res.status(200).json(httpResponse(result, 'ok'));
  }
}
