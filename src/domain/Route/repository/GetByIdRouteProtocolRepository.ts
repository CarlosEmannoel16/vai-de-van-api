import { Route } from "@/domain/Route/entity/Route";

export interface IGetByIdRouteProtocolRepository {
  getById: (id: string) => Promise<Route>;
}


