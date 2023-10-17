import { GetAllCitiesUseCase } from "@/data/usecases/city/getCityUseCase"
import { CityRepository } from "@/infra/CityRepository"

export const makegetCitiesUseCase =() => {
    return new GetAllCitiesUseCase(new CityRepository())
}
