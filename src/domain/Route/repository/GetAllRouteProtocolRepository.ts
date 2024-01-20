import { Route } from "@/domain/Route/entity/Route";

export interface IGetAllRouteProtocolRepository {
  getAll: () => Promise<Route[]>;
}


