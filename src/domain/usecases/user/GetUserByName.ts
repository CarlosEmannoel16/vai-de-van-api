export interface GetUserByName {
  getByName(nameUser: string): Promise<GetUserByName.Result>;
}

export namespace GetUserByName {
  export type Result = {
    id: string;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    type: string;
  };
}
