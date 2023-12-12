import { IGetAllRoutes } from '@/data/protocols/usecases/routes/GetAllRoutes';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse, ResponseStatus } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class GetAllRoutesController implements IController {
  constructor(private readonly getAllRoute: IGetAllRoutes) {}
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const routes = await this.getAllRoute.execute();
      return res.status(200).json({ status: ResponseStatus.OK, data: routes });
    } catch (error) {
      const { message, status, statusCode } = ControllerException.handleError(
        error as Error,
      );
      return res.status(statusCode).json({ message, status });
    }
  }
}
