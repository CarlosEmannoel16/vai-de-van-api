import { RouterInterface } from "@/domain/Route/interface/RouteInterface";

export interface IUpdateRoute {
    execute: (data: IUpdateRoute.Params) => Promise<RouterInterface>;
  }

  export namespace IUpdateRoute {
    export type Params = {
      destinyId: string,
      km: number,
      name: string,
      originId :string
      kmValue: number
      id: string
    };
  }
