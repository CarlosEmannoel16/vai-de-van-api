import { Travel } from "../entity/Travel";

export interface IFindTravelByIdProtocolRepository {
    findById(id: string): Promise<Travel>;
}
