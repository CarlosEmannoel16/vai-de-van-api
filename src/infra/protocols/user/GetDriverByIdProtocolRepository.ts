import { Driver } from "@/domain/Driver/entity/Driver";

export interface IGetDriverByIdProtocolRepository {
  getDriverById(id: string): Promise<Driver>;
}
