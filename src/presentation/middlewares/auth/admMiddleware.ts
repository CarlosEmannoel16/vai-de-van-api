import { NotAuthorizedError } from '@/data/errors/NotAuthorizedError';
import { IJwtCompare } from '@/infra/protocols/auth/jwtCompare';
import { IMiddleware } from '@/presentation/protocols/IMiddleware';
import { Request, Response, NextFunction } from 'express';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IGetUserByIdProtocolRepository } from '@/infra/protocols';

export class AdmMiddleware implements IMiddleware {
  constructor(private readonly getUserById: IGetUserByIdProtocolRepository) {}
  async execute(req: Request, res: Response, next: NextFunction) {
    try {
     const requestOwnerData = await this.getUserById.getById(req.user.id)
     if(requestOwnerData.type === `ADM`) return next();
     throw new NotAuthorizedError('Usuário nao possui acesso a essa rota')
    } catch (error) {
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
