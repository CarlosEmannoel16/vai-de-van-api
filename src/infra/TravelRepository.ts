import { Between } from 'typeorm';
import { ITravelProtocolRepository } from './protocols/travel';
import { ICreateTravelProtocolRepository } from './protocols/travel/CreateTravelProtocolRepository';
import { IFindAllTravelsProtocolRepository } from './protocols/travel/FindAllTravelsProtocolRepository';
import { ISearchTravelProtocolRepository } from './protocols/travel/SearchTravelProtocolRepository';
import { PrismaClient, TripStops, Vehicle } from '@prisma/client';
import { Travel } from '@/domain/Travel/entity/Travel';
import { TravelFactory } from '@/domain/Travel/factory/TravelFactory';
import { Driver } from '@/domain/Driver/entity/Driver';
import { RouteFactory } from '@/domain/Route/factories/RouteFactories';
import { TripStopFactory } from '@/domain/TripStop/factory/TripStopFactory';
import { VehicleFactory } from '@/domain/Vehicle/factory/VehicleFactory';
import { Ticket } from '@/domain/Ticket/entity/Ticket';

const travel = new PrismaClient().travel;
export class TravelRepository implements ITravelProtocolRepository {
  async findByIdRoute(id: string): Promise<any> {
    return travel.findMany({
      where: {
        routeId: id,
      },
    });
  }
  async findAll(): Promise<IFindAllTravelsProtocolRepository.Params[]> {
    return travel.findMany({
      select: {
        id: true,
        departureDate: true,
        description: true,
        arrivalDate: true,
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
        Vehicle: true,
        update_at: true,
        created_at: true,
      },
    });
  }
  async findById(id: string): Promise<any> {
    return travel.findUnique({
      where: { id },
      select: {
        arrivalDate: true,
        departureDate: true,
        Driver: true,
        driverId: true,
        Vehicle: true,
        id: true,
        Route: true,
      },
    });
  }

  async create(data: Travel): Promise<Travel> {
    await travel.create({
      data: {
        description: data.Name,
        departureDate: data.DepartureDate,
        arrivalDate: data.ArrivalDate,
        idVehicle: data.IdVehicle,
        routeId: data.IdRoute,
        driverId: data.IdDriver,
        status: 'DESABILITADA',
      },
    });

    return data;
  }

  async update(id: string, data: Travel): Promise<Travel> {
    await travel.update({ where: { id }, data });
    return data;
  }

  async delete(id: string): Promise<any> {
    return travel.delete({ where: { id } });
  }

  async search(
    data: ISearchTravelProtocolRepository.Params,
  ): Promise<Travel[]> {
    const result = await new PrismaClient().travel.findMany({
      where: {
        departureDate: {
          lte: new Date(`${data.dateOfTravel}T23:59:59.000Z`),
          gte: new Date(`${data.dateOfTravel}T00:00:00.000Z`),
        },
        Route: {
          TripStops: {
            some: {
              cityid: data.origin,
            },
          },
        },
      },
      select: {
        arrivalDate: true,
        departureDate: true,
        Route: {
          select: {
            TripStops: {
              select: {
                id: true,
                cityid: true,
                finalStop: true,
                initialStop: true,
                tripStopOrder: true,
                distanceFromLastStop: true,
                City: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            id: true,
            km: true,
            name: true,
            kmValue: true,
          },
        },
        Driver: {
          select: {
            User: {
              select: {
                name: true,
              },
            },
            id: true,
          },
        },
        id: true,
        Vehicle: true,
        Tickets: true,
        description: true,
      },
    });

    return result?.map(travel => {
      const driver = new Driver(travel.Driver.User.name, travel.Driver.id);
      const route = RouteFactory.create({
        km: travel.Route.km,
        kmValue: Number(travel.Route.kmValue),
        name: travel.Route.name,
        id: travel.Route.id,
        tripStops: travel.Route.TripStops?.map(tripStop => {
          return TripStopFactory.create({
            id: tripStop.id,
            cityId: tripStop.cityid,
            cityName: tripStop.City.name,
            tripStopOrder: tripStop.tripStopOrder,
            distanceFromLast: tripStop.distanceFromLastStop,
          });
        }),
      });

      const vehicle = VehicleFactory.create({
        id: travel.Vehicle.id,
        color: travel.Vehicle.cor,
        withAir: travel.Vehicle.with_air,
        name: travel.Vehicle.description,
        quantitySeats: travel.Vehicle.amount_of_accents,
      });

      return TravelFactory.createTravel({
        departureDate: travel.departureDate,
        arrivalDate: travel.arrivalDate,
        name: travel.description,
        id: travel.id,
        vehicle,
        driver,
        route,
        tickets: travel?.Tickets?.map(ticket => {
          return new Ticket(ticket.id, ticket.originId, ticket.destinyId);
        }) || [],
      });
    });
  }
}
