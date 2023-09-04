import { IMiddleware } from '@/presentation/protocols/IMiddleware';
import { NextFunction, Request, Response } from 'express';

export const adapterMiddleware = (middleware: IMiddleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    middleware.execute(req, res, next);
  };
};
