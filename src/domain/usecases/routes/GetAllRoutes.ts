export interface IGetAllRoutes {
  execute: () => Promise<IGetAllRoutes.Result[]>;
}

export namespace IGetAllRoutes {
  export type Result = {
    id: string;
    name: string;
    km: number;
    kmValue: string | null;
    originId: string;
    destinyId: string;
  };
}
