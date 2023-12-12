import { IUpdateRoute } from '@/data/protocols/usecases/routes/UpdateRoutes';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export class UpdateRouteController implements IController {
  constructor(private readonly updateRouteUseCase: IUpdateRoute) {}
  async handle(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): Promise<Response<IResponse, Record<string, any>>> {
    try {
      const result = await this.updateRouteUseCase.execute({ ...req.body });
      return res.status(200).json(result);
    } catch (error) {
        const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
