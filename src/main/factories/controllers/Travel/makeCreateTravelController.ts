import { CreateTravels } from '@/data/usecases/travels/CreateTravelsUseCase';
import { CityRepository } from '@/infra/CityRepository';
import { DriverRepository } from '@/infra/DriverRepository';
import { RouteRepository } from '@/infra/RouteRepository';
import { TravelRepository } from '@/infra/TravelRepository';
import { UserRepository } from '@/infra/UserRepository';
import { VehicleRepository } from '@/infra/VehicleRepository';
import { CreateTravelController } from '@/presentation/controller/travel/CreateTravelController';
import { IController } from '@/presentation/protocols/IController';

export const makeCreateTravelController = (): IController => {
  return new CreateTravelController(
    new CreateTravels(
      new TravelRepository(),
      new RouteRepository(),
      new DriverRepository(),
      new VehicleRepository(),
    ),
  );
};
