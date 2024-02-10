import { UserInterface } from '@/domain/Person/protocols/UserInterface';

export interface IUpdateUserProtocolRepository {
  update(data: UserInterface): Promise<UserInterface>;
}
