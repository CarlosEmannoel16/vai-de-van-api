import { IFindAllVehiclesUseCase } from "@/data/protocols/usecases/vechicle/FindAllVehicleUseCase";
import ControllerException from "@/presentation/helpers/ControllerException";
import { IController } from "@/presentation/protocols/IController";
import { IResponse } from "@/presentation/utils/response";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export class GetAllVehiclesController implements IController{
    constructor(private readonly findAllVehiclesUseCase: IFindAllVehiclesUseCase) {}
    async handle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<IResponse, Record<string, any>>> {
      try {
         const result = await this.findAllVehiclesUseCase.execure()
         return res.status(200).json({ message: "Veículos encontrados com sucesso", data: result });
      } catch (error) {
        console.log(error)
        const { message, status, statusCode } =
        ControllerException.handleError(error);
      return res.status(statusCode).json({ message, status });
      }
    }
}
