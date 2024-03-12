import { FindTravelById } from "@/data/usecases/travels/FindTravelByIdUseCase"
import { TravelRepository } from "@/infra/TravelRepository"
import { FindTravelByIdController } from "@/presentation/controller/travel/FindTravelByIdController"

export const makeGetTravelByIdController = () => {
    return new FindTravelByIdController(new FindTravelById(new TravelRepository()))
}
