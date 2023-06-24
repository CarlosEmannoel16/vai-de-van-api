export interface IUpdateUserProtocolRepository {
    update(data: IUpdateUserProtocolRepository.Params): Promise<IUpdateUserProtocolRepository.Result>
}

export namespace IUpdateUserProtocolRepository {
    export type Params = {
        id: string;
        name: string;
        phone: string;
        email: string;
        type: string;
        cpf: string;
        password: string;
        date_of_birth: Date;
        cnhExpirationDate: Date;
        cnhDateOfIssue: Date
    };


    export type Result = {
        id: string;
        name: string;
        type: string;
        email: string;
        phone: string;
        date_of_birth: Date;
        cpf: string;
    };
}