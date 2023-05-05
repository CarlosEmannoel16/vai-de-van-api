export interface IGetUserByName {
  getByName(nameUser: string): Promise<IGetUserByName.Result>;
}

export namespace IGetUserByName {
  export type Result = {
    id: string;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    type: string;
  };
}
