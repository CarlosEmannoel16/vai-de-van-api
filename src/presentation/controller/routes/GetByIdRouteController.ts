import { IGetByIdRoutes } from '@/data/protocols/usecases/routes/GetByIdRoutes';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetByIdRouteController implements IController {
  constructor(private readonly getByidRoute: IGetByIdRoutes) {}
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const { id } = req.params;
      const route = await this.getByidRoute.execute({ id });
      return res.status(200).json(route);
    } catch (error) {
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
    }
  }
}
