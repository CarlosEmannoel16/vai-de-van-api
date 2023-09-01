import { City } from '@prisma/client';
export namespace IUpdateCityRepository {
  export type Params = {
    id: string;
    City: City;
  };
}

export interface IUpdateCityRepository {
  update(data: IUpdateCityRepository.Params): Promise<City>;
}
