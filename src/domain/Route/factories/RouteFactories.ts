import { Vehicle } from '@/domain/Vehicle/entity/Vehicle';
import { TripStops } from '@prisma/client';
import { TripStop } from '../../TripStop/entity/TripStop';
import { Route } from '../entity/Route';



  export type ParamsCreateRouterFactory = {
    km: number;
    id?: string;
    name: string;
    kmValue: number;
    tripStops?: TripStop[];
  };

export class RouteFactory {
  static create(data: ParamsCreateRouterFactory): Route {
    const route = new Route(data.id, data.km, data.name, data.kmValue);

    if (data.tripStops) {
      data.tripStops?.map(tripStop => {
        route.addStop(tripStop);
      });
    }

    return route;
  }
}
