import { ICreateRouteProtocolRepository } from './protocols/route/CreateRouteProtocolRepository';
import { PrismaClient, Route } from '@prisma/client';
import { IGetAllRouteProtocolRepository } from './protocols/route/GetAllRouteProtocolRepository';
const prisma = new PrismaClient();
export class RouteRepository implements IGetAllRouteProtocolRepository {
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

  // async create(data: ICreateRouteProtocolRepository.Params): Promise<Route> {
  //   const { departure_time, km, name, destinyId, originId } = data;
  //   return await prisma.route.create({
  //     data: {
  //       departure_time,
  //       km,
  //       name,
  //       originId,
  //       path: {
  //         createMany: {
  //           data: [{ cityId: destinyId }, { cityId: originId }],
  //         },
  //       },
  //     },
  //   });
  // }
}
