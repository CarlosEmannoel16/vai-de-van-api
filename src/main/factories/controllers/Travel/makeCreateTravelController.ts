import { CreateTravels } from '@/data/usecases/travels/CreateTravelsUseCase';
import { CityRepository } from '@/infra/CityRepository';
import { RouteRepository } from '@/infra/RouteRepository';
import { TravelRepository } from '@/infra/TravelRepository';
import { TripStopsRepository } from '@/infra/TripStopsRepository';
import { CreateTravelController } from '@/presentation/controller/travel/CreateTravelController';
import { IController } from '@/presentation/protocols/IController';

export const makeCreateTravelController = (): IController => {
  return new CreateTravelController(
    new CreateTravels(
      new TravelRepository(),
      new TripStopsRepository(),
      new RouteRepository(),
      new CityRepository(),
    ),
  );
};
