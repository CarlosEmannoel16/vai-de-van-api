export interface IFindTravelByOriginIdUseCaseProtocol {
  execute(
    data: IFindTravelByOriginIdUseCaseProtocol.Params,
  ): Promise<IFindTravelByOriginIdUseCaseProtocol.Result[] | undefined>;
}

export namespace IFindTravelByOriginIdUseCaseProtocol {
  export type Params = {
    origin: string;
    dateOfTravel?: Date;
  };

  export type Result = {
    nameDestiny: string;
    nameOrigin: string;
    dateOfDeparture: string;
    value: string;
    driver: string;
    vehicle: {
      classification: number;
    };
    quantity: number;
  };
}
