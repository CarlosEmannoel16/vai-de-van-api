import { ICreateRouteProtocolRepository } from './protocols/route/CreateRouteProtocolRepository';
import { PrismaClient, Route } from '@prisma/client';
import { IGetAllRouteProtocolRepository } from './protocols/route/GetAllRouteProtocolRepository';
import { IGetByIdRouteProtocolRepository } from './protocols/route/GetByIdRouteProtocolRepository';
import { IUpdateRouteProtocolRepository } from './protocols/route/UpdateRouteProtocolRepository';
import { IRouteRepository } from './protocols/route';
const prisma = new PrismaClient();
export class RouteRepository
  implements
  IRouteRepository
{
  async update(data: IUpdateRouteProtocolRepository.Params): Promise<Route>{
   return prisma.route.update({
      where: {
        id: data.id,
      },
      data: {
        km: data.km,
        kmValue: data.kmValue,
        name: data.name,
        originId: data.originId,
        destinyId: data.destinyId,
        update_at: new Date(),
      }
    })
  };
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
        originId: true,
        destinyId: true,
        Destiny: true,
        Origin: true,
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
        originId: true,
        destinyId: true,
        Origin: true,
        Destiny: true,
      },
    });
    return routes;
  }

  async create(data: ICreateRouteProtocolRepository.Params): Promise<Route> {
    const { km, name, destinyId, originId, kmValue } = data;
    return prisma.route.create({
      data: {
        km,
        name,
        originId,
        destinyId,
        kmValue,
      },
    });
  }

  async getCountAll(): Promise<number> {
   return prisma.route.count();
  }
}
