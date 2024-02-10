import { UserInterface } from "@/domain/Person/protocols/UserInterface";

export interface IGetUserByEmailProtocolRepository {
  getUserByEmail(
    emailUser: string,
  ): Promise<UserInterface>;
}
