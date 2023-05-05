export interface IGetAllUsers {
  execute(): Promise<IGetAllUsers.Result[]>;
}

export namespace IGetAllUsers {
  export type Result = {
    id: string;
    name: string;
    type: string;
    email: string;
    phone: string;
    cpf: string;
    date_of_birth: Date;
  };
}
