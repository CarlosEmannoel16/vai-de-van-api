import { Ticket } from '@/domain/Ticket/entity/Ticket';
import { TripStop } from '../entity/TripStop';
import { StopInterface } from '@/domain/Stop/interface/StopInterface';

export type ParamsTripStopFactoryCreate = {
  id?: string;
  tripStopOrder: number;
  distanceFromLast: number;
  stop?: StopInterface;
  isInitialStop?: boolean;
  isFinalStop?: boolean;
};
export class TripStopFactory {
  static create({
    stop,
    tripStopOrder,
    id,
    distanceFromLast,
    isFinalStop,
    isInitialStop,
  }: ParamsTripStopFactoryCreate) {
    return new TripStop(
      stop,
      tripStopOrder,
      distanceFromLast,
      isInitialStop,
      isFinalStop,
    );
  }

  static mapCreate(tripStop: ParamsTripStopFactoryCreate[]): TripStop[] {
    return tripStop.map(stop => this.create(stop));
  }
}
