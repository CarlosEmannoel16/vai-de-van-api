import { ICreateCityUseCase } from '@/data/protocols/usecases/city/CreateCity';
import { IGetStateByIdProtocolRepository } from '@/infra/protocols';
import { ICityProtocolRepository } from '@/infra/protocols/city';
import { City } from '@prisma/client';
import { createCitySchemaValidation } from './validation';

export class CreateCityUseCase implements ICreateCityUseCase {
  constructor(
    private readonly cityRepository: ICityProtocolRepository,
    private readonly stateRepository: IGetStateByIdProtocolRepository,
  ) {}
  async execute(data: ICreateCityUseCase.Params): Promise<City> {
    await createCitySchemaValidation.validate(data, { abortEarly: false });

    const existsState = await this.stateRepository.getById(data.stateId);

    if (!existsState) throw new Error('Estado não encontrado');

    const result = await this.cityRepository.create(data);
    if(result) return result;

  }
}
