export interface IFindTravelByIdProtocolRepository {
    findById(id: string): Promise<any>;
}