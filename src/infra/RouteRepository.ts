import { PrismaClient } from '@prisma/client';
import { IGetAllRouteProtocolRepository } from './protocols/route/GetAllRouteProtocolRepository';
import { IGetByIdRouteProtocolRepository } from './protocols/route/GetByIdRouteProtocolRepository';
import { IUpdateRouteProtocolRepository } from './protocols/route/UpdateRouteProtocolRepository';
import { IRouteRepository } from './protocols/route';
import { Route } from '@/domain/entity/Route/Route';
const prisma = new PrismaClient();
export class RouteRepository implements IRouteRepository {
  async update(data: Route): Promise<Route> {
    await prisma.route.update({
      where: {
        id: data.Id,
      },
      data: {
        km: data.Km,
        kmValue: String(data.KmValue),
        name: data.Name,
        update_at: new Date(),
      },
    });

    return data;
  }
  async getById(
    data: IGetByIdRouteProtocolRepository.Params,
  ): Promise<IGetByIdRouteProtocolRepository.Result> {
    const route = prisma.route.findFirst({
      where: {
        id: data.id,
      },
      select: {
        id: true,
        name: true,
        km: true,
        kmValue: true,
        disabled: true,
        created_at: true,
        update_at: true,
      },
    });
    return route;
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
          create: data.Stops.map(tripStop => {
            return {
              id: tripStop.StopId,
              finalStop: tripStop.IsFinalStop,
              initialStop: tripStop.IsInitialStop,
              tripStopOrder: tripStop.TripStopOrder,
              created_at: new Date(),
              distanceFromLastStop: tripStop.DistanceFromLast,
              cityid: tripStop.CityId,
              update_at: new Date(),
              PricesBetweenStops: {
                create: tripStop.PricesBetweenStops.map(price => {
                  return {
                    idDestiny: price.destinyId,
                    price: price.value,
                  };
                }),
              },
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
