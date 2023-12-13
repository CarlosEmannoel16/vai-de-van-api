import { Route } from '@/domain/entity/Route/Route';

export interface IUpdateRouteProtocolRepository {
  update: (data: Route) => Promise<Route>;
}
