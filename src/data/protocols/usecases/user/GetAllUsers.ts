
export interface IGetAllUsers {
  execute(): Promise<IGetAllUsers.Result[]>;
}

export namespace IGetAllUsers {
  export type Result = {
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    date_of_birth: Date;
    created_at: Date;
    update_at: Date;
  };
}
