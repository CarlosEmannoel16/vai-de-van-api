import { UserInterface } from '@/domain/Person/protocols/UserInterface';
import { Travel, User, Vehicle } from '@prisma/client';
import { Driver } from 'typeorm';

export interface IGetUserByIdProtocolRepository {
  getById(id: string): Promise<UserInterface>;
}
