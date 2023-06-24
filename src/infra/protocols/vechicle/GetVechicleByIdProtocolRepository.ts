export interface GetVechicleByIdProtocolRepository{
    getById(id: string): Promise<GetVechicleByIdProtocolRepository.Result>
}

export namespace GetVechicleByIdProtocolRepository {
    export type Result = {}
}