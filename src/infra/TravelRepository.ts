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
            every: {
              cityid: { in: [data.origin, data.destiny] },
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
              include: {},
            },
            id: true,
            km: true,
            kmValue: true,
            name: true,
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
        Vehicle: true,
        Tickets: true,
        description: true,
        id: true,
      },
    });

    return result.map(travel => {
      const driver = new Driver(travel.Driver.User.name, travel.Driver.id);
      const route = RouteFactory.create({
        km: travel.Route.km,
        kmValue: Number(travel.Route.kmValue),
        name: travel.Route.name,
        id: travel.Route.id,
        tripStops: travel.Route.TripStops.map(tripStop => {
          return TripStopFactory.create({
            cityId: tripStop.cityid,
            distanceFromLast: tripStop.distanceFromLastStop,
            tripStopOrder: tripStop.tripStopOrder,
            id: tripStop.id,
          });
        }),
      });

      const vehicle = VehicleFactory.create({
        color: travel.Vehicle.cor,
        name: travel.Vehicle.description,
        id: travel.Vehicle.id,
        quantitySeats: travel.Vehicle.amount_of_accents,
        withAir: travel.Vehicle.with_air,
      });

     return  TravelFactory.createTravel({
        arrivalDate: travel.arrivalDate,
        departureDate: travel.departureDate,
        name: travel.description,
        driver,
        route,
        vehicle,
        id: travel.id,
        tickets: travel.Tickets.map(ticket => {
          return new Ticket(ticket.id, ticket.originId, ticket.destinyId);
        }),
      });
    });
  }
}
