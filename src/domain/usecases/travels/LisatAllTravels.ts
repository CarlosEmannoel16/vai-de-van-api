import { Travel } from "@prisma/client";

export interface IListAllTravels {
    execute(): Promise<Travel[]>;
}