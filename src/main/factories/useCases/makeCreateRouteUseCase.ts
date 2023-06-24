import { CreateRouteUseCase } from "@/data/usecases/routes/CreateRoutesUseCase";
import { RouteRepository } from "@/infra/RouteRepository";

export const makeCreateRouteUseCase = () => {
    return new CreateRouteUseCase(new RouteRepository());
}