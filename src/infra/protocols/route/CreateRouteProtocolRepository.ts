export interface ICreateRouteProtocolRepository {
  create: (
    data: ICreateRouteProtocolRepository.Params,
  ) => Promise<ICreateRouteProtocolRepository.Result>;
}

export namespace ICreateRouteProtocolRepository {
  export type Params = {
    departure_time: Date
    cityIdOrigin: string
    cityIdDestiny: string
  };
  export type Result = {};
}
