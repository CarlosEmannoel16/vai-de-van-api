import { Travel } from "@prisma/client";

export interface IFindAllTravelsProtocolRepository {
    findAll(): Promise<Travel[]>;
}