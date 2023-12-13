import { ITripStops } from "@/domain/models/TripStops";

export interface ICreateRouteUseCase {
    execute: (data: ICreateRouteUseCase.Params) => Promise<ICreateRouteUseCase.Result>;
  }


  export namespace ICreateRouteUseCase {
    export type Params = {
      destinyId: string,
      originId :string
      km: number,
      name: string,
      kmValue: number
      TripStops: ITripStops[]

    };

    export type Result = {
      id: string;
      name: string;
    };
  }
