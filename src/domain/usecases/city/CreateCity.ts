import { City } from "@prisma/client";

export interface ICreateCityUseCase {
    execute(data: ICreateCityUseCase.Params): Promise<City>
}

export namespace ICreateCityUseCase {
    export type Params = {
      coordinates: string,
      disabled: boolean,
      name: string,
      stateId: string,
    }
}
