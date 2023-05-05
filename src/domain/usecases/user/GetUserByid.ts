export interface IGetUserById {
  execute(idUser: string): Promise<IGetUserById.Result>;
}

export namespace IGetUserById {
  export type Result = {
    id: string;
    name: string;
    type: string;
    email: string;
    phone: string;
    cpf: string;
  };
}
