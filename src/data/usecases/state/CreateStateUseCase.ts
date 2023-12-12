import {
  ICreateStateProtocolRepository,
  IGetStateByIdProtocolRepository,
  IGetStateByNameProtocolRepository,
} from '@/infra/protocols/state';

import { ICreateState } from '@/data/protocols/usecases/state/CreateState';

export class CreateStateUseCase implements ICreateState {
  constructor(
    private readonly createStateRepository: ICreateStateProtocolRepository,
    private readonly getStateByName: IGetStateByNameProtocolRepository,
  ) {}

  async execute(data: ICreateState.Params): Promise<ICreateState.Result> {
    const { name, uf } = data;

    const existsState = await this.getStateByName.get(name);

    if (existsState) return; //Tratar retorno
    const stateCreated = await this.createStateRepository.create({ name, uf });

    return stateCreated;
  }
}
