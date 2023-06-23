import { User } from "@prisma/client";

export interface ICreateDriverProtocolRepository {
    createDriver(data:ICreateDriverProtocolRepository.Params): Promise<User>
}

export namespace ICreateDriverProtocolRepository {
    export type Params = {
        name: string;
        cnh: string
        email: string;
        phone: string;
        date_of_birth: string;
        cpf: string;
        password: string;
        cnhDateOfIssue: string 
        cnhExpirationDate: string
      };
    
     
}