import { City, PricesBetweenStops, Travel, TripStops } from "@prisma/client";

export interface ISearchTravelProtocolRepository {
    search(data: ISearchTravelProtocolRepository.Params):  Promise<ISearchTravelProtocolRepository.Result[]>;
}

export namespace ISearchTravelProtocolRepository {
    export type Params = {
        origin: string;
        destiny: string;
        dateOfTravel: Date;
    }

    export type Result = {
        Travel: Travel,
        City: City,
        PricesBetweenStops: PricesBetweenStops[],
        cityIdFromTo: string,
        id: string,
        travelId: string,
        tripStopOrder: number,
    } 
}