export interface ICreateRoute {
    execute: (data: ICreateRoute.Params) => Promise<ICreateRoute.Result>;
  }
  
  export namespace ICreateRoute {
    export type Params = {
      departure_time: string;
      originId: string;
      email?: string;
      type: string;
      cpf: string;
      password: string;
      date_of_birth: Date;
      requestOwner: string
  
    };
  
    export type Result = {
      id: string;
      name: string;
    };
  }
  