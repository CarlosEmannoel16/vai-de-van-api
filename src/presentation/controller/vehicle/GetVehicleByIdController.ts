import { GetVehicleByIdUseCase } from "@/data/usecases/vehicle/GetVehicleById";
import ControllerException from "@/presentation/helpers/ControllerException";
import { IController } from "@/presentation/protocols/IController";
import { IResponse } from "@/presentation/utils/response";
import { Request, Response } from "express-serve-static-core";

export class GetVehicleByIdController implements IController {
    constructor(private readonly getVehicleByIdUseCase: GetVehicleByIdUseCase) {}
    async handle(request: Request, res: Response): Promise<Response<IResponse>> {
       try {
         const { id } = request.params;
         const vehicle = await this.getVehicleByIdUseCase.execute(id);
         return res.status(200).json(vehicle);
       } catch (error) {
        console.log(error);
        const { message, status, statusCode } =
          ControllerException.handleError(error);
        return res.status(statusCode).json({ message, status });
       }
    }
}
