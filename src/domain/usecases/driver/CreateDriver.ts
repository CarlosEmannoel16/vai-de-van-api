export interface ICreateDriver {
   create: (data: ICreateDriver.resquest) => Promise<ICreateDriver.response>
}
export namespace ICreateDriver {
    export type response = {
        id: string
        name: string;
        email: string;
        phone: string;
        date_of_birth: Date;
        cpf: string; 
    }

    export type resquest = {
        name: string;
        cnh: string
        email: string;
        phone: string;
        date_of_birth: string;
        cpf: string;
        password: string;
    }
}