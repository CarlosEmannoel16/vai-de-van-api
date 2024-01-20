import { Route } from "@/domain/Route/entity/Route";

export interface ICreateRouteProtocolRepository {
  create: (data: Route) => Promise<Route>;
}


