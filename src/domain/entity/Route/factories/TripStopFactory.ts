import { TripStop } from '../TripStop';

export type ParamsTripStopFactoryCreate = {
  id?: string;
  routeId: string;
  tripStopOrder: number;
  distanceFromLast: number;
  cityId: string;
};
export class TripStopFactory {
  static create({
    distanceFromLast,
    tripStopOrder,
    id = undefined,
    routeId,
    cityId,
  }: ParamsTripStopFactoryCreate) {
    return new TripStop(id, routeId, tripStopOrder, distanceFromLast, cityId);
  }
}
