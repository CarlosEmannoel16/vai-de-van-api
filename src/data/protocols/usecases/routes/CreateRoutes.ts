import { TripStops } from "@prisma/client";

export interface ICreateRouteUseCase {
    execute: (data: ICreateRouteUseCase.Params) => Promise<ICreateRouteUseCase.Result>;
  }
  
  export namespace ICreateRouteUseCase {
    export type Params = {
      destinyId: string,
      originId :string
      km: number,
      name: string,
      kmValue: string
      TripStops: TripStops[]
    };
  
    export type Result = {
      id: string;
      name: string;
    };
  }
  