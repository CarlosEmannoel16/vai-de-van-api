import { GetAllRoutesController } from "@/presentation/controller/routes/GetAllRoutesController";
import { IController } from "@/presentation/protocols/IController";
import { makeGetAllRoutesUseCase } from "../../useCases/Route/makeGetAllRoutesUseCase";

export const makeGetAllRouteController = ():IController => {
    return new GetAllRoutesController(makeGetAllRoutesUseCase())
}