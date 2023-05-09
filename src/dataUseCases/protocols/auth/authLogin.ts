import { User } from "@prisma/client"


 
export interface IAuthLogin {
    verify: (data: IAuthLogin.request) => Promise<IAuthLogin.response>
}

export namespace IAuthLogin {
    export type request = {
        email: string
        password: string
    }

    export type response = {
        authorized: boolean
        type: string
        token: string
        user: {
            id: string
            name: string
            email: string
            type: string
        }
    }  
}