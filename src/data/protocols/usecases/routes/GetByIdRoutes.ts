export interface IGetByIdRoutes {
  execute: (data: IGetByIdRoutes.Params) => Promise<IGetByIdRoutes.Result>;
}

export namespace IGetByIdRoutes {
  export type Params = {
    id: string;
  };
  export type Result = {
    id: string;
    name: string;
    km: number;
    kmValue: string | null;
  };
}
