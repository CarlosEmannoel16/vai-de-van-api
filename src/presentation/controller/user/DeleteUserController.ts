import { IDeleteUser } from '@/data/protocols/usecases/user/DeleteUser';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';
import { deleteUserByIdYupValidation } from './validation/yupValidationUser';
import { UserNotFoundError } from '@/data/errors/UserNotFound';
import { HandlerErrorController } from '@/@shared/decorators/TryCatch';

export class DeleteUserController implements IController {
  constructor(private readonly deleteUserById: IDeleteUser) {}

  @HandlerErrorController
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    await deleteUserByIdYupValidation.validate(req.params, {
      abortEarly: false,
    });

    const deleted = await this.deleteUserById.execute(req.params.id);
    if (!deleted) throw new UserNotFoundError('Erro ao deletat usuário');

    return res.status(201).json({ deleted: true });
  }
}
