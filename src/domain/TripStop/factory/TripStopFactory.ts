import { Ticket } from '@/domain/Ticket/entity/Ticket';
import { TripStop } from '../entity/TripStop';

export type ParamsTripStopFactoryCreate = {
  id?: string;
  cityId: string;
  tripStopOrder: number;
  distanceFromLast: number;
};
export class TripStopFactory {
  static create({
    cityId,
    tripStopOrder,
    id = undefined,
    distanceFromLast,
  }: ParamsTripStopFactoryCreate) {
    return new TripStop(id, cityId, tripStopOrder, distanceFromLast);
  }
}
