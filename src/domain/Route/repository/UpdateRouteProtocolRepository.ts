import { Route } from '@/domain/Route/entity/Route';

export interface IUpdateRouteProtocolRepository {
  update: (data: Route) => Promise<Route>;
}
