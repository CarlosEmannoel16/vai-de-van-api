import { PricesBetweenStops, TripStops } from '@prisma/client';

export interface ICreateTripStopsProtocolRepository {
  createMany(data: TripStops[], data2: PricesBetweenStops[]): Promise<any>;
}
