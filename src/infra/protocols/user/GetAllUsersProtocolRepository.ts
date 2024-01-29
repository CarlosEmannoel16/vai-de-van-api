import { Travel, User, Vehicle } from '@prisma/client';

export interface IGetAllUsersProtocolRepository {
  getAll(): Promise<IGetAllUsersProtocolRepository.Result[]>;
}

export namespace IGetAllUsersProtocolRepository {
  export type Result = {
    User: {
      id: string;
      name: string;
      email: string;
      cpf: string;
      phone: string;
      date_of_birth: Date;
      type: string;
      created_at: Date;
      update_at: Date;
      Driver: {
        cnh: string;
        cnhDateOfIssue: Date;
        cnhExpirationDate: Date;
        Travel: Travel[];
    }[];
    };
  };
}
