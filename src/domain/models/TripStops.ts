import { PricesBetweenStops } from './PricesBetweenStops';

export interface ITripStops {
  finalStop: boolean;
  initialStop: boolean;
  cityId: string;
  tripStopOrder: number;
  distanceFromLast: number;
  pricesBetweenStops: PricesBetweenStops[];
}
