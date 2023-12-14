import { Route } from "@/domain/Route/Route";

export interface IGetByIdRouteProtocolRepository {
  getById: (id: string) => Promise<Route>;
}


