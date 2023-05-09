import { IMiddleware } from '@/presentation/protocols/IMiddleware';
import { NextFunction, Request, Response } from 'express';

export const adpterMiddleware = (middleware: IMiddleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    middleware.execute(req, res, next);
  };
};
