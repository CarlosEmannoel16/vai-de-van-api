import { GetByIdRouteController } from "@/presentation/controller/routes/GetByIdRouteController";
import { IController } from "@/presentation/protocols/IController";
import { makeGetUseByIdUseCase } from "../useCases";
import { makeGetByIdRouteUseCase } from "../useCases/makeGetByIdRouteUseCase";

export function makeGetByIdController(): IController{
    return new GetByIdRouteController(makeGetByIdRouteUseCase())
} 