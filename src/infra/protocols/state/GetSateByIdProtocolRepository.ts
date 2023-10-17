import { State } from '@prisma/client';

export interface IGetStateByIdProtocolRepository {
  getById(id: string): Promise<State>;
}
