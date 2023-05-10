export interface ICreateUser {
  execute: (data: ICreateUser.Params) => Promise<ICreateUser.Result>;
}

export namespace ICreateUser {
  export type Params = {
    name: string;
    phone: string;
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
