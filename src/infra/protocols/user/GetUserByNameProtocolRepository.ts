import { UserInterface } from '@/domain/Person/protocols/UserInterface';

export interface IGetUserByNameProtocolRepository {
  getUserByName(nameUser: string): Promise<UserInterface>;
}
