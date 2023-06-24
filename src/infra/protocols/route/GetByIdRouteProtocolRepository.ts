export interface IGetByIdRouteProtocolRepository {
  getById: (
    data: IGetByIdRouteProtocolRepository.Params,
  ) => Promise<IGetByIdRouteProtocolRepository.Result>;
}

export namespace IGetByIdRouteProtocolRepository {
  export type Params = {
    id: string;
  };

  export type Result = {
    id: string;
    name: string;
    km: number;
    kmValue: number | null;
    originId: string;
    destinyId: string;
  };
}
