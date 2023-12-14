import { Route } from '@/domain/Route/Route';

export interface IUpdateRouteProtocolRepository {
  update: (data: Route) => Promise<Route>;
}
