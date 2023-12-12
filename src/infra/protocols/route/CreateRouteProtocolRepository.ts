import { Route } from '@prisma/client';

export interface ICreateRouteProtocolRepository {
  create: (data: ICreateRouteProtocolRepository.Params) => Promise<Route>;
}

export namespace ICreateRouteProtocolRepository {
  export type Params = {
    name: string;
    km: number;
    kmValue: string;
    destinyId: string;
    originId: string;

  };
}
