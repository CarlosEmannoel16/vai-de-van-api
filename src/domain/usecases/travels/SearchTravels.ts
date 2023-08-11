import { Travel } from "@prisma/client";

export interface  ISearchTravels{
    execute(data: ISearchTravels.Params): Promise<Travel[]>;
}

export namespace ISearchTravels{
    export type Params = {
        origin: string;
        destiny: string;
        dateOfTravel: Date;
    }


}