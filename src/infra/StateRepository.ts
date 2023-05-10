import { ICreateStateProtocolRepository } from '@/infra/protocols/state';
import { PrismaClient } from '@prisma/client';
const state = new PrismaClient().state;

export class StateRepository implements ICreateStateProtocolRepository {
  async create(
    data: ICreateStateProtocolRepository.Params,
  ): Promise<ICreateStateProtocolRepository.Result> {
    const { id, name, uf } = await state.create({ data });
    return { id, name, uf };
  }
}
