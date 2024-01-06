import { Route } from '@/domain/Route/entity/Route';
import { PrismaClient } from '@prisma/client';
import { IRouteRepository } from '../domain/Route/repository';
import { RouteFactory } from '@/domain/Route/factories/RouteFactories';
import { TripStopFactory } from '@/domain/TripStop/factory/TripStopFactory';
const prisma = new PrismaClient();
export class RouteRepository implements IRouteRepository {
  async update(data: Route): Promise<Route> {
    await prisma.route.update({
      where: {
        id: data.id,
      },
      data: {
        km: data.km,
        name: data.name,
        update_at: new Date(),
        kmValue: String(data.kmValue),
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

  async getAll(): Promise<Route[]> {
    const routes = await prisma.route.findMany({
      select: {
        id: true,
        name: true,
        km: true,
        kmValue: true,
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
      },
    });
    return routes.map(route => {
      const routeEntity = RouteFactory.create({
        km: route.km,
        kmValue: Number(route.kmValue),
        name: route.name,
        id: route.id,
      });

      route.TripStops?.map(tripStop => {
        const tripStopEntity = TripStopFactory.create({
          cityId: tripStop.cityid,
          cityName: tripStop.City.name,
          distanceFromLast: Number(tripStop.distanceFromLastStop),
          id: tripStop.id,
          tripStopOrder: tripStop.tripStopOrder,
        });
        routeEntity.addStop(tripStopEntity);
      });
      return routeEntity;
    });
  }

  async create(data: Route): Promise<Route> {
    await prisma.route.create({
      data: {
        km: data.km,
        name: data.name,
        created_at: new Date(),
        disabled: false,
        kmValue: String(data.kmValue),
        id: data.id,
        TripStops: {
          create: data.stops?.map(tripStop => {
            return {
              id: tripStop.stopId,
              finalStop: tripStop.isFinalStop,
              initialStop: tripStop.isInitialStop,
              tripStopOrder: tripStop.tripStopOrder,
              created_at: new Date(),
              distanceFromLastStop: tripStop.distanceFromLast,
              update_at: new Date(),
              cityid: tripStop.cityId,
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
