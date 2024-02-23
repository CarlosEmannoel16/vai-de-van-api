import { Ticket } from '@/domain/Ticket/entity/Ticket';
import { TripStop } from '../entity/TripStop';
import { StopInterface } from '@/domain/Stop/interface/StopInterface';

export type ParamsTripStopFactoryCreate = {
  id?: string;
  tripStopOrder: number;
  distanceFromLast: number;
  stop?: StopInterface;
};
export class TripStopFactory {
  static create({
    stop,
    tripStopOrder,
    id,
    distanceFromLast,
  }: ParamsTripStopFactoryCreate) {
    return new TripStop(stop, tripStopOrder, distanceFromLast);
  }

  static mapCreate(tripStop: ParamsTripStopFactoryCreate[]): TripStop[] {
    return tripStop.map(stop => this.create(stop));
  }
}
