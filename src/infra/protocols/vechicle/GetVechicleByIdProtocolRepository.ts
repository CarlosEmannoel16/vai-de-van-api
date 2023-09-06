export interface GetVehicleByIdProtocolRepository{
    getById(id: string): Promise<GetVehicleByIdProtocolRepository.Result>
}

export namespace GetVehicleByIdProtocolRepository {
    export type Result = {}
}