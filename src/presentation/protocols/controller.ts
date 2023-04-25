import { Request, Response } from 'express';
import { IResponse } from '../utils/response';

export interface IController {
  handle(req: Request, res: Response): Promise<Response<IResponse>>;
}
