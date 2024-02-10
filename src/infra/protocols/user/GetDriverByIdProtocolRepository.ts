import { UserInterface } from "@/domain/Person/protocols/UserInterface";

export interface IGetDriverByIdProtocolRepository {
  getDriverById(id: string): Promise<UserInterface>;
}
