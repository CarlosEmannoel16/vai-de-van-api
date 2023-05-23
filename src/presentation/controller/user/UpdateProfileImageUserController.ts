import { Request, Response } from 'express';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '../../utils/response';
import ControllerException from '../../helpers/ControllerException';

export class UpdateProfileImageUserController implements IController {
 
  constructor() {}
  async handle(
    req: Request,
    res: Response<IResponse>,
  ): Promise<Response<IResponse>> {
    try {
        console.log(req.file)
      
    } catch (error) {
      const { message, status, statusCode } = ControllerException.handleError(
        error as Error,
      );
      return res.status(statusCode).json({ message, status });
    }
  }
}
