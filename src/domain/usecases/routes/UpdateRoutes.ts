import { Route } from "@prisma/client";

export interface IUpdateRoute {
    execute: (data: IUpdateRoute.Params) => Promise<Route>;
  }
  
  export namespace IUpdateRoute {
    export type Params = {
      destinyId: string,
      km: number,
      name: string,
      originId :string
      kmValue: string
      id: string
    };
  }
  