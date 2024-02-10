import { UserInterface } from '@/domain/Person/protocols/UserInterface';

export interface IGetAllUsersProtocolRepository {
  getAll(): UserInterface[];
}
