import { Driver } from "../entity/Driver";

export interface IFindAllDriversProtocolRepository {
  findAll(): Promise<Driver[]>;
}


