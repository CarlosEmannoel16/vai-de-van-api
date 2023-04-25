export interface GetUserById {
  execute(idUser: string): Promise<GetUserById.Result>;
}

export namespace GetUserById {
  export type Result = {
    id: string;
    name: string;
    type: string;
    email: string;
    phone: string;
    cpf: string;
  };
}
