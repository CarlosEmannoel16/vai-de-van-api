import { Travel } from "@prisma/client";

export interface  ISearchTravelsUseCaseProtocol {
    execute(data: ISearchTravelsUseCaseProtocol.Params):  Promise<ISearchTravelsUseCaseProtocol.Result | undefined> ;
}

export namespace ISearchTravelsUseCaseProtocol{
    export type Params = {
        origin: string;
        destiny: string;
        dateOfTravel: Date; 
    }

    export type Result = {
        nameDestiny: string;
        nameOrigin: string;
        dateOfDeparture: Date;
        value: number;
    }[]

}