import { Ticket } from '@/domain/Ticket/entity/Ticket';
import { TripStop } from '../entity/TripStop';

export type ParamsTripStopFactoryCreate = {
  id?: string;
  cityId: string;
  cityName: string;
  tripStopOrder: number;
  distanceFromLast: number;
};
export class TripStopFactory {
  static create({
    cityId,
    tripStopOrder,
    id,
    distanceFromLast,
    cityName,
  }: ParamsTripStopFactoryCreate) {

    return new TripStop(id, cityId, cityName, tripStopOrder, distanceFromLast);
  }
}
