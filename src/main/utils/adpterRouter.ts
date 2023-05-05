import { IController } from '@/presentation/protocols/controller';
import { Request, Response } from 'express';

export const adpterRouter = (controller: IController) => {
  return async (req: Request, res: Response) => {
    controller.handle(req, res);
  };
};
