import { City, Route } from '@prisma/client';

export interface IGetByIdRouteProtocolRepository {
  getById: (data: IGetByIdRouteProtocolRepository.Params) => Promise<IGetByIdRouteProtocolRepository.Result>;
}

export namespace IGetByIdRouteProtocolRepository {
  export type Params = {
    id: string;
  };

  export type Result = {
    id: string;
    name: string;
    km: number;
    kmValue: string | null;
    originId: string;
    destinyId: string;
    disabled: boolean;
    Destiny: City;
    Origin: City;
    created_at: Date;
    update_at: Date;
  };
}
