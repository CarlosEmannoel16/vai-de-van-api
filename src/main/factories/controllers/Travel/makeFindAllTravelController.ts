import { FindAllTravels } from "@/data/usecases/travels/FindTravelsUseCase";
import { TravelRepository } from "@/infra/TravelRepository";
import { FindAllTravelController } from "@/presentation/controller/travel/FindTravelController";
import { IController } from "@/presentation/protocols/IController";


export const makeFindAllTravelController = (): IController => {
  return new FindAllTravelController(
    new FindAllTravels(
      new TravelRepository(),
    ),
  );
};
