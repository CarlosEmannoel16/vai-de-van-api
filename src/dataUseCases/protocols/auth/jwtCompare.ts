export interface IJwtCompare{
    execute: (token: string) => IJwtCompare.Response
}

export namespace IJwtCompare {
    export type Response = {
        message: string
        authorized: boolean
    }
}
