export interface ICreateDriverProtocolRepository {
    createDriver: (data:ICreateDriverProtocolRepository.Params)=> Promise<ICreateDriverProtocolRepository.Result>
}

export namespace ICreateDriverProtocolRepository {
    export type Params = {
        name: string;
        cnh: string
        email: string;
        phone: string;
        date_of_birth: Date;
        cpf: string;
        password: string;
      };
    
      export type Result = {
        id: string;
        name: string;
        email: string;
        phone: string;
        date_of_birth: Date;
        cpf: string;
      };
}