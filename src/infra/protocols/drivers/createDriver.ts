import { DriverInterface } from "@/domain/Person/protocols/DriverInterface";

export interface IDriverProtocolRepository {
  create(data: DriverInterface): Promise<DriverInterface>;
  findById(id: string): Promise<DriverInterface>;
  findAll(): Promise<DriverInterface[]>;
}

