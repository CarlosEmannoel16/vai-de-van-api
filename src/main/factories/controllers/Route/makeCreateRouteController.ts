import { CreateRoutesController } from "@/presentation/controller/routes/CreateRoutesController"
import { makeCreateRouteUseCase } from "../../useCases/Route/makeCreateRouteUseCase"

export const makeCreateRouteController = () => {
    return new CreateRoutesController(makeCreateRouteUseCase())
}