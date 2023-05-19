import { Travel, Vehicle } from "@prisma/client";

export interface IGetAllUsers {
  execute(): Promise<IGetAllUsers.Result[]>;
}

export namespace IGetAllUsers {
  export type Result = {
    cnh: string;
    Travel: Travel[];
    Vehicle: Vehicle[];
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
    }
}
}
