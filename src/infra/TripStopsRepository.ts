import { ICreateTripStopsProtocolRepository } from './protocols/tripStops/CreateTripStopsProtocolRepository';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class TripStopsRepository implements ICreateTripStopsProtocolRepository {
  async create({
    pricesBetweenStopsDestiny,
    cityIdFromTo,
    travelId,
    tripStopOrder,
  }: ICreateTripStopsProtocolRepository.Params): ICreateTripStopsProtocolRepository.Result {
    const result = await prisma.tripStops.create({
      data: {
        tripStopOrder,
        cityIdFromTo,
        travelId,
        PricesBetweenStopsOrigin: {
          createMany: {
            data: pricesBetweenStopsDestiny,
          },
        },
      },
    });
    return result;
  }
}
