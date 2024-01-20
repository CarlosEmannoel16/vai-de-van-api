import { Travel } from "@prisma/client";

export interface IFindTravelByIdRouteProtocolRepository {
    findByIdRoute(id: string): Promise<Travel[]>;
}