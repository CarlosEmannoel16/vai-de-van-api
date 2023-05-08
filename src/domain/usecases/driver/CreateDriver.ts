export interface ICreateDriver {
   create: (data: ICreateDriver.resquest) => Promise<ICreateDriver.response>
}


export namespace ICreateDriver {
    export type response = {
        name: string
    }

    export type resquest = {
        name: string
    }
}