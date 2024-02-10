import { UserInterface } from '@/domain/Person/protocols/UserInterface';

export interface ICreateUserProtocolRepository {
  create(data: UserInterface): Promise<UserInterface>;
}
