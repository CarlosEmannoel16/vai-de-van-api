import { DashboardUseCase } from "@/data/usecases/report/Dashboard";
import { IDashboardUseCase } from "@/data/protocols/usecases/dashboard/DashboardInterface";
import ControllerException from "@/presentation/helpers/ControllerException";
import { IController } from "@/presentation/protocols/IController";
import { IResponse } from "@/presentation/utils/response";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export class DashboardController implements IController {
    constructor(private readonly dashboardUseCase: IDashboardUseCase) { }
    async handle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<IResponse, Record<string, any>>> {
        try {
            const result = await this.dashboardUseCase.execute()
            return res.status(200).json({ data: result })
        } catch (error) {
            const { message, status, statusCode } =
                ControllerException.handleError(error);
            return res.status(statusCode).json({ message, status });
        }
    }
}
