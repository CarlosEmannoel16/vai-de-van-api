// import { Repository } from 'typeorm';
// import { City, Route } from '@entitiesPostgres/';
// import { RouteModel } from 'src/domain/models';

// export class RouteRepository extends Repository<Route> {
//   public async findById(id: string) {
//     const route = await this.find({
//       where: {
//         id,
//       },
//     });

//     return route;
//   }

//   public async findByOrigin(origin: City) {
//     const route = await this.find({
//       where: {
//         origin,
//       },
//     });
//     return route;
//   }

//   public async findByDestiny(destiny: City) {
//     const route = await this.find({
//       where: {
//         destiny,
//       },
//     });
//     return route;
//   }

//   public async findAllSubRoutes(id: string) {
//     const route = await this.find({
//       where: {
//         id,
//       },
//     });
//     return route;
//   }

//   public async findByParams(params: RouteModel) {
//     const routes = await this.find({
//       where: {
//         ...params,
//       },
//     });
//     return routes;
//   }
// }
