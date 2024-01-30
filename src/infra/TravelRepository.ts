import { ITravelProtocolRepository } from '../domain/Travel/repositories';
import { IFindAllTravelsProtocolRepository } from '../domain/Travel/repositories/FindAllTravelsProtocolRepository';
import { ISearchTravelProtocolRepository } from '../domain/Travel/repositories/SearchTravelProtocolRepository';
import { PrismaClient, TripStops, Vehicle } from '@prisma/client';
import { Travel } from '@/domain/Travel/entity/Travel';
import { TravelFactory } from '@/domain/Travel/factory/TravelFactory';
import { Driver } from '@/domain/Driver/entity/Driver';
import { RouteFactory } from '@/domain/Route/factories/RouteFactories';
import { TripStopFactory } from '@/domain/TripStop/factory/TripStopFactory';
import { VehicleFactory } from '@/domain/Vehicle/factory/VehicleFactory';
import { Ticket } from '@/domain/Ticket/entity/Ticket';
import { DriverFactory } from '@/domain/Driver/factory/DriverFactory';
import { TicketFactory } from '@/domain/Ticket/factory/TicketFactory';

const prismaClient = new PrismaClient();
export class TravelRepository implements ITravelProtocolRepository {
  async findByIdRoute(id: string): Promise<any> {
    return prismaClient.travel.findMany({
      where: {
        routeId: id,
      },
    });
  }

  async findAll(): Promise<Travel[]> {
    const data = await prismaClient.travel.findMany({
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

    return TravelFactory.mapTravel(
      data.map(travel => ({
        arrivalDate: travel.arrivalDate,
        description: travel.description,
        departureDate: travel.departureDate,
        driver: new Driver(travel.Driver.id, travel.Driver.User.name),
        name: travel.description,
        route: RouteFactory.create({
          km: travel.Route.km,
          kmValue: Number(travel.Route.kmValue),
          name: travel.Route.name,
          id: travel.Route.id,
        }),
        vehicle: VehicleFactory.create({
          color: travel.Vehicle.cor,
          id: travel.Vehicle.id,
          name: travel.Vehicle.description,
          ownerName: travel.Vehicle.ownerName,
          plate: travel.Vehicle.plate,
          quantitySeats: travel.Vehicle.amount_of_accents,
          withAir: travel.Vehicle.with_air,
        }),
        id: travel.id,
        tickets: [] as any,
      })),
    );
  }

  async findById(id: string): Promise<any> {
    return prismaClient.travel.findUnique({
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
    await prismaClient.travel.create({
      data: {
        description: data.description,
        departureDate: data.departureDate,
        arrivalDate: data.arrivalDate,
        idVehicle: data.idVehicle,
        routeId: data.idRoute,
        driverId: data.idDriver,
        status: data.status || 'DESABILITADA',

      },
    });

    return data;
  }

  async update(id: string, data: Travel): Promise<Travel> {
    await prismaClient.travel.update({
      where: { id },
      data: {
        arrivalDate: data.arrivalDate,
        departureDate: data.departureDate,
        description: data.name,
        idVehicle: data.idVehicle,
      },
    });

    return data;
  }

  async delete(id: string): Promise<any> {
    return prismaClient.travel.delete({ where: { id } });
  }

  async search(
    data: ISearchTravelProtocolRepository.Params,
  ): Promise<Travel[]> {
    const result = await prismaClient.travel.findMany({
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
      include: {
        Driver: {
          include: {
            User: true,
          },
        },
        Vehicle: true,
        Route: {
          include: {
            TripStops: {
              include: {
                City: true,
              },
            },
          },
        },
        Tickets: true,
      },
    });

    console.log(result);

    return result?.map(travel => {
      return TravelFactory.createTravel({
        departureDate: travel.departureDate,
        arrivalDate: travel.arrivalDate,
        name: travel.description,
        id: travel.id,
        vehicle: VehicleFactory.create({
          id: travel.Vehicle.id,
          color: travel.Vehicle.cor,
          withAir: travel.Vehicle.with_air,
          name: travel.Vehicle.description,
          quantitySeats: travel.Vehicle.amount_of_accents,
          ownerName: travel.Vehicle.ownerName,
          plate: travel.Vehicle.plate,
        }),
        driver: DriverFactory.create({
          id: travel.Driver.id,
          name: travel.Driver.User.name,
          idUser: travel.Driver.User.id,
        }),
        route: RouteFactory.create({
          km: travel.Route.km,
          kmValue: Number(travel.Route.kmValue),
          name: travel.Route.name,
          id: travel.Route.id,
          tripStops: TripStopFactory.mapCreate(
            travel.Route.TripStops?.map(ts => ({
              cityId: ts.cityid,
              cityName: ts.City.name,
              distanceFromLast: ts.distanceFromLastStop,
              tripStopOrder: ts.tripStopOrder,
              id: ts.id,
            })),
          ),
        }),
        tickets: TicketFactory.mapCreate(
          travel?.Tickets?.map(ticket => ({
            destiny: ticket.destinyId,
            id: ticket.id,
            origin: ticket.originId,
          })),
        ),
      });
    });
  }
}
