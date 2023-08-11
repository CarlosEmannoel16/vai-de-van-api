import { CityRepository } from "@/infra/CityRepository";

export const makeCityRepository = () => {
    return new CityRepository();
}