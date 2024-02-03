import { City } from "@prisma/client";

export interface IChangeStatusStopRepository {
    changeStatus(id: string): Promise<City>

}
