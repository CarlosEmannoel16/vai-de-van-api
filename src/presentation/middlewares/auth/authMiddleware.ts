import { NotAuthorizedError } from '@/data/errors/NotAuthorizedError';
import { IJwtCompare } from '@/infra/protocols/auth/jwtCompare';
import { IMiddleware } from '@/presentation/protocols/IMiddleware';
import { Request, Response, NextFunction } from 'express';
import ControllerException from '@/presentation/helpers/ControllerException';

export class AuthMiddleware implements IMiddleware {
  constructor(private readonly compareJwt: IJwtCompare) {}
  execute(req: Request, res: Response, next: NextFunction) {
    try {
      const bearer = req.headers.authorization;
      if (!bearer) throw new NotAuthorizedError('Cliente nao autorizado');
      const { authorized, id, name } = this.compareJwt.execute(bearer);
      if (!authorized) throw new NotAuthorizedError('Cliente nao autorizado');
      req.user = { id, name };
      next();
    } catch (error) {
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
