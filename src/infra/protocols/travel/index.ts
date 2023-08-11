import { ICreateTravelProtocolRepository } from "./CreateTravelProtocolRepository";
import { IDeleteTravelProtocolRepository } from "./DeleteTravelProtocolRepository";
import { IFindAllTravelsProtocolRepository } from "./FindAllTravelsProtocolRepository";
import { IFindTravelByIdProtocolRepository } from "./GetTravelByIdProtocolRepository";
import { ISearchTravelProtocolRepository } from "./SearchTravelProtocolRepository";
import { IUpdateTravelProtocolRepository } from "./UpdateTravelProtocolRepository";

export interface ITravelProtocolRepository extends 
ICreateTravelProtocolRepository, 
IFindTravelByIdProtocolRepository, 
IUpdateTravelProtocolRepository, 
IDeleteTravelProtocolRepository,
ISearchTravelProtocolRepository,
IFindAllTravelsProtocolRepository {}