import { Between } from 'typeorm';
import { ITravelProtocolRepository } from './protocols/travel';
import { ICreateTravelProtocolRepository } from './protocols/travel/CreateTravelProtocolRepository';
import { IFindAllTravelsProtocolRepository } from './protocols/travel/FindAllTravelsProtocolRepository';
import { ISearchTravelProtocolRepository } from './protocols/travel/SearchTravelProtocolRepository';
import { PrismaClient, Travel, TripStops } from '@prisma/client';

const travel = new PrismaClient().travel;
export class TravelRepository implements ITravelProtocolRepository {
  async findByIdRoute(id: string): Promise<any> {
    return travel.findMany({
      where: {
        routeId: id,
      }
    })
  }
  async findAll(): Promise<IFindAllTravelsProtocolRepository.Params[]> {
    return travel.findMany({
      select: {
        id: true,
        departureDate: true,
        description: true,
        arrivalDate: true,
        TripStops: {
          select: {
            tripStopOrder: true,
            City: {
              select: {
                name: true,
              }
            },
            cityid: true,
            id: true,
          }
        },
        driverId: true,
        idVehicle: true,
        routeId: true,
        status: true,
        Driver: {
          select: {
            id: true,
            User: true,
          },
        },
        Route: true,
        Vechicle: true,
        update_at: true,
        created_at: true,
      },
    });
  }
  async findById(id: string): Promise<any> {
    return travel.findUnique({ where: { id },select: {
      arrivalDate: true,
      departureDate: true,
      Driver: true,
      driverId: true,
      Vechicle: true,
      TripStops: true,
      id: true,
      Route: true,
      
    } });
  }

  async create(data: ICreateTravelProtocolRepository.Params): Promise<any> {
    return travel.create({
      data: {
        description: data.description,
        arrivalDate: data.arrivalDate,
        departureDate: data.arrivalDate,
        idVehicle: data.idVehicle,
        routeId: data.routeId,
        driverId: data.driverId,

      },
    });
  }

  async update(id: string, data: Travel): Promise<Travel> {
    return travel.update({ where: { id }, data });
  }

  async delete(id: string): Promise<any> {
    return travel.delete({ where: { id } });
  }

  async search(
    data: ISearchTravelProtocolRepository.Params,
  ): Promise<ISearchTravelProtocolRepository.Result[] | undefined> {
    const travel = new PrismaClient().travel;
    const result = await travel.findMany({
      where: {
        departureDate: {
          lte: new Date(`${data.dateOfTravel}T23:59:59.000Z`),
          gte: new Date(`${data.dateOfTravel}T00:00:00.000Z`),
        },
        TripStops: {
          some: {
            cityid: data.origin
          },
        },
      },
      select: {
        arrivalDate: true,
        departureDate: true,
        Route: true,
        Driver: {
          select: {
            User: {
              select: {
                name: true,
              }
            },
          }
        },
        Tickets: {
          select:{
            pricesBetweenStopsId: true,
            PricesBetweenStops: {
              select:{
                TripStops: true

              }
            },
          },

        },
        TripStops: {
          select: {
            City: true,
            tripStopOrder: true,
            PricesBetweenStops: {
              select: {
                City: true,
                price: true,
                idDestiny: true,

              }
            },

          },
        },
        Vechicle: true,
      },
    });

    return result;
  }
}
