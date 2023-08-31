import { UpdateRouteController } from "@/presentation/controller/routes/UpdateRoutesController"
import { UpdateTravelController } from "@/presentation/controller/travel/UpdateTravelController"
import { makeUpdateRouteUseCase } from "../../useCases/Route/makeUpdateRouteUseCase"

export const makeUpdateRouteController = () => {
    return new UpdateRouteController(makeUpdateRouteUseCase())
}