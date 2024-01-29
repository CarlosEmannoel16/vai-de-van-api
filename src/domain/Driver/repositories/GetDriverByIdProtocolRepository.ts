import { Driver } from "../entity/Driver";

export interface IFindDriverByIdProtocolRepository {
  findById(id: string): Promise<Driver>;
}


