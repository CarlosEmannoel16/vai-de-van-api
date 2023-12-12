import { User } from "@prisma/client";

export interface ICreateDriver {
   create: (data: ICreateDriver.request) => Promise<User>
}
export namespace ICreateDriver {

    export type request = {
        name: string;
        cnh: string
        email: string;
        phone: string;
        date_of_birth: string;
        cpf: string;
        password: string;
        cnhDateOfIssue: string 
        cnhExpirationDate: string
    }
}