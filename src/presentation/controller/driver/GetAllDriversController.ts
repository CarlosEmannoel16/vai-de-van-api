import { IGetAllDriversUseCase } from '@/data/protocols/usecases/driver/GetAllDrivers';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export class GetAllDriversController implements IController {
  constructor(private readonly getAllDriversUseCase: IGetAllDriversUseCase) {}
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
      const result = await this.getAllDriversUseCase.execute();
      return res.status(200).json({ data: result });
    } catch (error) {
      console.log(error);
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      res.status(statusCode).json({ message, status });
    }
  }
}
