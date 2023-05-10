// import { ICreateRouteProtocolRepository } from './protocols/route/CreateRouteProtocolRepository';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// export class RouteRepository implements ICreateRouteProtocolRepository {
//   constructor() {}
//   async create(
//     data: ICreateRouteProtocolRepository.Params,
//   ): Promise<ICreateRouteProtocolRepository.Result> {
//     const { departure_time,cityIdDestiny,cityIdOrigin } = data;
//     prisma.route.create({
//       data: { departure_time,originId: cityIdOrigin, path: { create:  [{cityId: cityIdDestiny}, {cityId: cityIdOrigin}] } },
//     });
//   }
// }
