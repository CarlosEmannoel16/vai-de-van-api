import { ITravelProtocolRepository } from '../domain/Travel/repositories';
import { IFindAllTravelsProtocolRepository } from '../domain/Travel/repositories/FindAllTravelsProtocolRepository';
import { ISearchTravelProtocolRepository } from '../domain/Travel/repositories/SearchTravelProtocolRepository';
import { PrismaClient, TripStops, Vehicle } from '@prisma/client';
import { Travel } from '@/domain/Travel/entity/Travel';
import { TravelFactory } from '@/domain/Travel/factory/TravelFactory';
import { RouteFactory } from '@/domain/Route/factories/RouteFactories';
import { TripStopFactory } from '@/domain/TripStop/factory/TripStopFactory';
import { VehicleFactory } from '@/domain/Vehicle/factory/VehicleFactory';
import { TicketFactory } from '@/domain/Ticket/factory/TicketFactory';
import { TravelInterface } from '@/domain/Travel/entity/travel.interface';
import PersonFactory from '@/domain/Person/factory/PersonFactory';
import { StopFactory } from '@/domain/Stop/factory/StopFactory';

const travelDataBase = new PrismaClient().travel;
export class TravelRepository implements ITravelProtocolRepository {
  async findByIdRoute(id: string): Promise<any> {
    return travelDataBase.findMany({
      where: {
        routeId: id,
      },
    });
  }

  async findAll(): Promise<Travel[]> {
    const data = await travelDataBase.findMany({
      select: {
        id: true,
        departureDate: true,
        description: true,
        arrivalDate: true,
        driverId: true,
        idVehicle: true,
        routeId: true,
        status: true,
        Driver: true,
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
        driver: PersonFactory.driver({
          id: travel.Driver.id,
          name: travel.Driver.name,
          cpf: travel.Driver.cpf,
          email: travel.Driver.email,
          cnh: travel.Driver.cnh,
          dateOfBirth: travel.Driver.date_of_birth,
          dateOfCreate: travel.Driver.created_at,
          dateOfUpdate: travel.Driver.update_at,
          password: travel.Driver.password,
          phone: travel.Driver.phone,
        }),
        name: travel.description,
        route: RouteFactory.create({
          km: travel.Route.km,
          kmValue: Number(travel.Route.kmValue),
          name: travel.Route.name,
          id: travel.Route.id,
        }),
        vehicle: VehicleFactory.bus({
          description: travel.Vehicle.description,
          id: travel.Vehicle.id,
          quantitySeats: travel.Vehicle.amount_of_accents,
        }),
        id: travel.id,
        tickets: [] as any,
      })),
    );
  }

  async findById(id: string): Promise<Travel> {
    const result = await travelDataBase.findUnique({
      where: { id },
      include: {
        Route: {
          include: {
            TripStops: {
              include: {
                Stop: true,
              },
            },
          },
        },
        Vehicle: true,
        Tickets: true,
        Payment: true,
        Driver: true,
      },
    });

    const driver = PersonFactory.driver({
      id: result.Driver.id,
      name: result.Driver.name,
      cpf: result.Driver.cpf,
      email: result.Driver.email,
    });

    const tripStops = TripStopFactory.mapCreate(
      result.Route.TripStops?.map(ts => {
        return {
          distanceFromLast: ts.distanceFromLastStop,
          stop: StopFactory.create({
            coordinates: ts.Stop.coordinates,
            id: ts.Stop.id,
            name: ts.Stop.name,
            status: ts.Stop.disabled ? 'disable' : 'enable',
          }),
          tripStopOrder: ts.tripStopOrder,
          id: ts.id,
        };
      }),
    );

    const route = RouteFactory.create({
      km: result.Route.km,
      kmValue: Number(result.Route.kmValue),
      name: result.Route.name,
      id: result.Route.id,
      tripStops,
    });

    const vehicle = VehicleFactory.bus({
      color: result.Vehicle.cor,
      id: result.Vehicle.id,
      ownerName: result.Vehicle.ownerName,
      plate: result.Vehicle.plate,
      quantitySeats: result.Vehicle.amount_of_accents,
      withAir: result.Vehicle.with_air,
      description: result.Vehicle.description,
    });

    const tickets = TicketFactory.mapCreate(
      result.Tickets?.map(ticket => ({
        destiny: ticket.destinyId,
        id: ticket.id,
        origin: ticket.originId,
      })) || [],
    );

    return TravelFactory.createTravel({
      arrivalDate: result.arrivalDate,
      departureDate: result.departureDate,
      driver,
      name: result.description,
      route,
      description: result.description,
      id: result.id,
      vehicle,
      status: result.status,
    });
  }

  async create(data: Travel): Promise<Travel> {
    await travelDataBase.create({
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
    await travelDataBase.update({
      where: { id },
      data: {
        arrivalDate: data.arrivalDate,
        departureDate: data.departureDate,
        description: data.name,
        idVehicle: data.idVehicle,
        status: data.status,
      },
    });

    return data;
  }

  async delete(id: string): Promise<any> {
    return travelDataBase.delete({ where: { id } });
  }

  async search(
    data: ISearchTravelProtocolRepository.Params,
  ): Promise<Travel[]> {
    const result = await travelDataBase.findMany({
      where: {
        departureDate: {
          lte: new Date(`${data.dateOfTravel}T23:59:59.000Z`),
          gte: new Date(`${data.dateOfTravel}T00:00:00.000Z`),
        },
        Route: {
          TripStops: {
            some: {
              stopId: data.origin,
            },
          },
        },
        status: 'ABERTA',
      },
      include: {
        Driver: true,
        Vehicle: true,
        Route: {
          include: {
            TripStops: {
              include: {
                Stop: true,
              },
            },
          },
        },
        Tickets: true,
      },
    });

    return result?.map(travel => {
      return TravelFactory.createTravel({
        departureDate: travel.departureDate,
        arrivalDate: travel.arrivalDate,
        name: travel.description,
        id: travel.id,
        vehicle: VehicleFactory.bus({
          id: travel.Vehicle.id,
          color: travel.Vehicle.cor,
          withAir: travel.Vehicle.with_air,
          description: travel.Vehicle.description,
          quantitySeats: travel.Vehicle.amount_of_accents,
          ownerName: travel.Vehicle.ownerName,
          plate: travel.Vehicle.plate,
        }),
        driver: PersonFactory.driver({
          id: travel.Driver.id,
          name: travel.Driver.name,
          cpf: travel.Driver.cpf,
          email: travel.Driver.email,
        }),
        route: RouteFactory.create({
          km: travel.Route.km,
          kmValue: Number(travel.Route.kmValue),
          name: travel.Route.name,
          id: travel.Route.id,
          tripStops: TripStopFactory.mapCreate(
            travel.Route.TripStops?.map(ts => ({
              distanceFromLast: ts.distanceFromLastStop,
              tripStopOrder: ts.tripStopOrder,
              id: ts.id,
              stop: StopFactory.create({
                coordinates: ts.Stop.coordinates,
                id: ts.Stop.id,
                name: ts.Stop.name,
                status: ts.Stop.disabled ? 'disable' : 'enable',
              }),
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

  async findByCityOrigin(cityOrigin: string): Promise<TravelInterface[]> {
    const result = await travelDataBase.findMany({
      where: {
        Route: {
          TripStops: {
            some: {
              stopId: cityOrigin,
              initialStop: true,
            },
          },
        },
      },
      include: {
        Driver: true,
        Vehicle: true,
        Route: {
          include: {
            TripStops: {
              include: {
                Stop: true,
              },
            },
          },
        },
        Tickets: true,
      },
    });

    return result?.map(travel => {
      return TravelFactory.createTravel({
        id: travel.id,
        name: travel.description,
        arrivalDate: travel.arrivalDate,
        departureDate: travel.departureDate,
        vehicle: VehicleFactory.bus({
          id: travel.Vehicle.id,
          color: travel.Vehicle.cor,
          plate: travel.Vehicle.plate,
          description: travel.Vehicle.description,
          withAir: travel.Vehicle.with_air,
          ownerName: travel.Vehicle.ownerName,
          quantitySeats: travel.Vehicle.amount_of_accents,
        }),
        driver: PersonFactory.driver({
          id: travel.Driver.id,
          name: travel.Driver.name,
          cpf: travel.Driver.cpf,
          email: travel.Driver.email,
        }),
        route: RouteFactory.create({
          km: travel.Route.km,
          id: travel.Route.id,
          name: travel.Route.name,
          kmValue: Number(travel.Route.kmValue),
          tripStops: TripStopFactory.mapCreate(
            travel.Route.TripStops?.map(ts => ({
              distanceFromLast: ts.distanceFromLastStop,
              stop: StopFactory.create({
                coordinates: ts.Stop.coordinates,
                id: ts.Stop.id,
                name: ts.Stop.name,
                status: ts.Stop.disabled ? 'disable' : 'enable',
              }),
              tripStopOrder: ts.tripStopOrder,
              id: ts.id,
            })),
          ),
        }),
        tickets: TicketFactory.mapCreate(
          travel?.Tickets?.map(ticket => ({
            destiny: ticket.destinyId,
            origin: ticket.originId,
            id: ticket.id,
          })),
        ),
      });
    });
  }
}
