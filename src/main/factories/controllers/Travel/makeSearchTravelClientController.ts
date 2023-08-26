import { SearchTravelsUseCase } from '@/data/usecases/travels/SearchTravelsUseCase';
import { TravelRepository } from '@/infra/TravelRepository';
import { SearchTravelController } from '@/presentation/controller/travel/SerachTravelController';

export const makeSearchTravelClientController = () => {
  return new SearchTravelController(
    new SearchTravelsUseCase(new TravelRepository()),
  );
};
