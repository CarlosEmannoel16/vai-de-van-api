import { Route } from '@/domain/Route/Route';
import { PrismaClient } from '@prisma/client';
import { IRouteRepository } from './protocols/route';
import { RouteFactory } from '@/domain/Route/factories/RouteFactories';
import { TripStopFactory } from '@/domain/TripStop/factory/TripStopFactory';
import { IGetAllRouteProtocolRepository } from './protocols/route/GetAllRouteProtocolRepository';
const prisma = new PrismaClient();
export class RouteRepository implements IRouteRepository {
  async update(data: Route): Promise<Route> {
    await prisma.route.update({
      where: {
        id: data.Id,
      },
      data: {
        km: data.Km,
        name: data.Name,
        update_at: new Date(),
        kmValue: String(data.KmValue),
      },
    });

    return data;
  }
  async getById(id: string): Promise<Route> {
    const route = await prisma.route.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        km: true,
        name: true,
        kmValue: true,
        disabled: true,
        created_at: true,
        update_at: true,
        TripStops: {
          select: {
            id: true,
            cityid: true,
            finalStop: true,
            update_at: true,
            created_at: true,
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
      },
    });

    return RouteFactory.create({
      km: route.km,
      kmValue: Number(route.kmValue),
      name: route.name,
      id: route.id,
      tripStops: route.TripStops?.map(tripStop => {
        return TripStopFactory.create({
          cityId: tripStop.cityid,
          distanceFromLast: Number(tripStop.distanceFromLastStop),
          tripStopOrder: tripStop.tripStopOrder,
          id: tripStop.id,
          cityName: tripStop.City.name,
        });
      }),
    });
  }

  async getAll(): Promise<IGetAllRouteProtocolRepository.Result[]> {
    const routes = prisma.route.findMany({
      select: {
        id: true,
        name: true,
        km: true,
        kmValue: true,
      },
    });
    return routes;
  }

  async create(data: Route): Promise<Route> {
    await prisma.route.create({
      data: {
        km: data.Km,
        name: data.Name,
        created_at: new Date(),
        disabled: false,
        kmValue: String(data.KmValue),
        id: data.Id,
        TripStops: {
          create: data.Stops?.map(tripStop => {
            return {
              id: tripStop.StopId,
              finalStop: tripStop.IsFinalStop,
              initialStop: tripStop.IsInitialStop,
              tripStopOrder: tripStop.TripStopOrder,
              created_at: new Date(),
              distanceFromLastStop: tripStop.DistanceFromLast,
              update_at: new Date(),
              cityid: tripStop.CityId,
            };
          }),
        },
      },
    });
    return data;
  }

  async getCountAll(): Promise<number> {
    return prisma.route.count();
  }
}
