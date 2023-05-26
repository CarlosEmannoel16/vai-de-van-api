export interface IGetAllRoutes {
  execute: () => Promise<IGetAllRoutes.Result[]>;
}

export namespace IGetAllRoutes {
  export type Result = {
    id: string;
    name: string;
    km: number;
    kmValue: number | null;
    originId: string;
    destinyId: string;
  };
}
