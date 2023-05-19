import { ICreateRouteProtocolRepository } from './protocols/route/CreateRouteProtocolRepository';
import { PrismaClient, Route } from '@prisma/client';
const prisma = new PrismaClient();
export class RouteRepository implements ICreateRouteProtocolRepository {
  constructor() {}
  async create(data: ICreateRouteProtocolRepository.Params): Promise<Route> {
    const { departure_time, km, name, destinyId, originId } = data;
    return await prisma.route.create({
      data: {
        departure_time,
        km,
        name,
        originId,
        path: {
          createMany: {
            data: [{ cityId: destinyId }, { cityId: originId }],
          },
        },
      },
    });
  }
}
