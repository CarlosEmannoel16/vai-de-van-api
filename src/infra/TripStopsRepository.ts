import { ICreateTripStopsProtocolRepository } from './protocols/tripStops/CreateTripStopsProtocolRepository';
import { PricesBetweenStops, PrismaClient, TripStops } from '@prisma/client';
const prisma = new PrismaClient();

export class TripStopsRepository implements ICreateTripStopsProtocolRepository {
  async createMany(data: TripStops[], data2: PricesBetweenStops[]): Promise<any> {
    const result = await prisma.tripStops.createMany({
      data,
    });

    const result2 = await prisma.pricesBetweenStops.createMany({
      data: data2,
    });
    console.log('result=>', result);
    console.log('result2=>', result2);

    return result;
  }
}
