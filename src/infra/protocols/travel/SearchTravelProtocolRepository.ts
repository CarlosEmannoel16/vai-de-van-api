import { Travel } from "@prisma/client";

export interface ISearchTravelProtocolRepository {
    search(data: ISearchTravelProtocolRepository.Params): Promise<Travel[]>;
}

export namespace ISearchTravelProtocolRepository {
    export type Params = {
        origin: string;
        destiny: string;
        dateOfTravel: Date;
    }

    export type Result = {
        id: string;
        origin: string;
        destiny: string;
        price: number;
        company: string;
        date: Date;
    }[]
}