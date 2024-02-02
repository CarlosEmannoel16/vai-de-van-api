import { TravelRepository } from "@/infra/TravelRepository";

export const makeUpdateTravelController = (): IController => {
  const travelRepository = new TravelRepository();
  const updateTravelUseCase = new UpdateTravelUseCase(travelRepository);
  return new UpdateTravelController(updateTravelUseCase);
};
