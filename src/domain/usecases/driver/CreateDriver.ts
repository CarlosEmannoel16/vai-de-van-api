import { User } from "@prisma/client";

export interface ICreateDriver {
   create: (data: ICreateDriver.resquest) => Promise<User>
}
export namespace ICreateDriver {

    export type resquest = {
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