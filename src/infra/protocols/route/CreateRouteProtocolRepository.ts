import { Route } from "@/domain/entity/Route/Route";

export interface ICreateRouteProtocolRepository {
  create: (data: Route) => Promise<Route>;
}


