import { State } from '@entitiesPostgres/';
import { ICreateStateProtocolRepository } from '@data/protocols/state/CreateStateProtocolRepository';
import { AppDataSource } from '@DataSource/postgres';
const repository = AppDataSource.getRepository(State);
export class StateRepository implements ICreateStateProtocolRepository {
  async create(
    data: ICreateStateProtocolRepository.Params,
  ): Promise<ICreateStateProtocolRepository.Result> {
    const { id, name, uf } = await repository.save(data);
    return { id, name, uf };
  }
}
