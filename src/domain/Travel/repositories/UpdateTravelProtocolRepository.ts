import { Travel } from "@/domain/Travel/entity/Travel";

export interface IUpdateTravelProtocolRepository {
    update(id: string, data: Travel): Promise<Travel>;
}
