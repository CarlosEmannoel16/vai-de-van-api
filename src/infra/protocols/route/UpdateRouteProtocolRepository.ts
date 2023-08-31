import { Route} from "@prisma/client";

export interface IUpdateRouteProtocolRepository {
  update: (
    data: IUpdateRouteProtocolRepository.Params,
  ) => Promise<Route>;
}

export namespace IUpdateRouteProtocolRepository {
  export type Params = Route


}
