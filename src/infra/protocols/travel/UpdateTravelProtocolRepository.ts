import { Travel } from "@prisma/client";

export interface IUpdateTravelProtocolRepository {
    update(id: string, data: Travel): Promise<Travel>;
}