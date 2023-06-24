export interface ICreateRoute {
    execute: (data: ICreateRoute.Params) => Promise<ICreateRoute.Result>;
  }
  
  export namespace ICreateRoute {
    export type Params = {
      destinyId: string,
      km: number,
      name: string,
      originId :string
      kmValue: number
    };
  
    export type Result = {
      id: string;
      name: string;
    };
  }
  