import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';
import { getUserYupValidation } from './validation/yupValidationUser';
import { IGetUserById } from '@/data/protocols/usecases/user/GetUserByid';
import { HandlerErrorController } from '@/@shared/decorators/TryCatch';

export class GetUserByIdController implements IController {
  constructor(private readonly getUserById: IGetUserById) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    await getUserYupValidation.validate(req.params, {
      abortEarly: false,
    });

    const user = await this.getUserById.execute(req.params.id);
    return res.status(200).json({ status: ResponseStatus.OK, data: user });
  }
}
