import { ICreateRouteProtocolRepository } from './protocols/route/CreateRouteProtocolRepository';
import { PrismaClient, Route } from '@prisma/client';
import { IGetAllRouteProtocolRepository } from './protocols/route/GetAllRouteProtocolRepository';
import { IGetByIdRouteProtocolRepository } from './protocols/route/GetByIdRouteProtocolRepository';
const prisma = new PrismaClient();
export class RouteRepository
  implements
    IGetAllRouteProtocolRepository,
    IGetByIdRouteProtocolRepository,
    ICreateRouteProtocolRepository
{
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
}
