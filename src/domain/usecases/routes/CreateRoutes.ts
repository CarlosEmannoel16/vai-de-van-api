export interface ICreateRouteUseCase {
    execute: (data: ICreateRouteUseCase.Params) => Promise<ICreateRouteUseCase.Result>;
  }
  
  export namespace ICreateRouteUseCase {
    export type Params = {
      destinyId: string,
      km: number,
      name: string,
      originId :string
      kmValue: string
    };
  
    export type Result = {
      id: string;
      name: string;
    };
  }
  