export interface ICreateRouteUseCase {
  execute: (
    data: ICreateRouteUseCase.Params,
  ) => Promise<ICreateRouteUseCase.Result>;
}

export namespace ICreateRouteUseCase {
  export type Params = {
    km: number;
    name: string;
    kmValue: number;
    TripStops: {
      distanceFromLast: number;
      stopOrder: number;
      isFinalStop: boolean;
      isInitialStop: boolean;
      stopId: string;
    }[]
  };

  export type Result = {
    id: string;
    name: string;
  };
}
