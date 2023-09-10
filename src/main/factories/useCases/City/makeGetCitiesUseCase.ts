import { GetAllCitiesUseCase } from "@/data/usecases/city/getCityUsCase"
import { CityRepository } from "@/infra/CityRepository"

export const makegetCitiesUseCase =() => {
    return new GetAllCitiesUseCase(new CityRepository())
}