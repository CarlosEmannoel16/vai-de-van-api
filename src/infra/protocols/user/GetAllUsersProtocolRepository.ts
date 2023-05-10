export interface IGetAllUsersProtocolRepository {
  getAll(): Promise<IGetAllUsersProtocolRepository.Result[]>;
}

export namespace IGetAllUsersProtocolRepository {
  export type Result = {
    id: string;
    name: string;
    email: string;
    phone: string;
    type: string;
    cpf: string;
    date_of_birth: Date;
  };
}
