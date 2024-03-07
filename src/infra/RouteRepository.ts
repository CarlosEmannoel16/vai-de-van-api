import { Route } from '@/domain/Route/entity/Route';
import { PrismaClient } from '@prisma/client';
import { IRouteRepository } from '../domain/Route/repository';
import { RouteFactory } from '@/domain/Route/factories/RouteFactories';
import { TripStopFactory } from '@/domain/TripStop/factory/TripStopFactory';
import { StopFactory } from '@/domain/Stop/factory/StopFactory';
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
            stopId: true,
            finalStop: true,
            update_at: true,
            created_at: true,
            initialStop: true,
            tripStopOrder: true,
            distanceFromLastStop: true,
            Stop: true,
          },
        },
      },
    });

    return RouteFactory.create({
      km: route.km,
      kmValue: Number(route.kmValue),
      name: route.name,
      id: route.id,
      tripStops: route.TripStops.map(tripStop => {
        return TripStopFactory.create({
          distanceFromLast: tripStop.distanceFromLastStop,
          tripStopOrder: tripStop.tripStopOrder,
          id: tripStop.id,
          stop: StopFactory.create({
            id: tripStop.Stop.id,
            name: tripStop.Stop.name,
            status: tripStop.Stop.disabled ? 'disable' : 'enable',
            coordinates: tripStop.Stop.coordinates,
          }),
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
            stopId: true,
            finalStop: true,
            initialStop: true,
            tripStopOrder: true,
            distanceFromLastStop: true,
            Stop: {
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

      return routeEntity;
    });
  }

  async create(data: Route): Promise<Route> {
    try {
      await prisma.route.create({
        data: {
          km: data.km,
          name: data.name,
          created_at: new Date(),
          disabled: false,
          kmValue: String(data.kmValue),
          id: data.id,
          TripStops: {
            create: data.tripStops?.map(tripStop => ({
              finalStop: tripStop.isFinalStop,
              initialStop: tripStop.isInitialStop,
              tripStopOrder: tripStop.stopOrder,
              created_at: new Date(),
              distanceFromLastStop: tripStop.distanceFromLast,
              update_at: new Date(),
              stopId: tripStop.stop.id,
            })),
          },
          update_at: new Date(),
        },
      });


      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Error to create route');
    }
  }

  async getCountAll(): Promise<number> {
    return prisma.route.count();
  }
}
