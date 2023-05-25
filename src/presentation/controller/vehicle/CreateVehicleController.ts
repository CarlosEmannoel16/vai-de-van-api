import { ICreateVechicle } from "@/domain/usecases/vechicle/CreateVechicleUseCase";
import { IController } from "@/presentation/protocols/IController";
import { ResponseStatus } from "@/presentation/utils/response";
import { IResponse } from "@/presentation/utils/response";
import { Request, Response } from "express";


export class CreateVehicleCOntroller implements IController{

    constructor(private readonly createVehicleUseCase: ICreateVechicle){}
    async handle(req: Request, res: Response): Promise<Response<IResponse>>{

        try {
                const result = await this.createVehicleUseCase.execute(req.body)
                if(result)
                return res.status(200).json({
                    data: result,
                    status: ResponseStatus.CREATED
                })
        } catch (error) {
            
        }
    }
}