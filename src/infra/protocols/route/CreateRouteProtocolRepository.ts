import { Route } from "@/domain/Route/Route";

export interface ICreateRouteProtocolRepository {
  create: (data: Route) => Promise<Route>;
}


