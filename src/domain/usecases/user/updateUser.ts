export interface IUpdateUser {
    execute: (data: IUpdateUser.Params) => Promise<IUpdateUser.Result>
}

export namespace IUpdateUser {
    export type Params = {
        id: string;
        name: string;
        phone: string;
        email?: string;
        type: string;
        cpf: string;
        password: string;
        date_of_birth: Date;
        requestOwner: string;
    };

    export type Result = {
        id: string;
        name: string;
    };
}