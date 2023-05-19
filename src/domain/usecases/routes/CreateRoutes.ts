export interface ICreateRoute {
    execute: (data: ICreateRoute.Params) => Promise<ICreateRoute.Result>;
  }
  
  export namespace ICreateRoute {
    export type Params = {
      departure_time: string,
      destinyId: string,
      km: number,
      name: string,
      originId :string
    };
  
    export type Result = {
      id: string;
      name: string;
    };
  }
  