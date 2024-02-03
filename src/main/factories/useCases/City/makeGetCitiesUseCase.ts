import { GetAllCitiesUseCase } from "@/data/usecases/city/getCityUseCase"
import { StopRepository } from "@/infra/StopRepository"

export const makegetCitiesUseCase =() => {
    return new GetAllCitiesUseCase(new StopRepository())
}
