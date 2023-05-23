import { ICreateRoute } from '@/domain/usecases/routes/CreateRoutes';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export class CreateDriverController implements IController {
  constructor(private readonly createRouter: ICreateRoute) {}
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const data = req.body;
      const route = await this.createRouter.execute(data);
        return res.status(200).json(route)
    } catch (error) {
        const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
