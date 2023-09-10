import { UpdateRouteUseCase } from "@/data/usecases/routes/UpdateRoutesUseCase";
import { RouteRepository } from "@/infra/RouteRepository";

export const makeUpdateRouteUseCase = () => {
    return new UpdateRouteUseCase(new RouteRepository());
}