import { Travel } from "../entity/Travel";

export interface IFindAllTravelsProtocolRepository {
    findAll(): Promise<Travel[]>;
}
