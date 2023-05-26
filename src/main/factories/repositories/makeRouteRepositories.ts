import { RouteRepository } from "@/infra/RouteRepository";

export const makeRoutesRepositories = (): RouteRepository => {
    return new RouteRepository()
}