import { CreateCityUseCase } from '@/data/usecases/stops/CreateCityUseCase';
import { IGetStateByIdProtocolRepository } from '@/infra/protocols';
import { IStopProtocolRepository } from '@/infra/protocols/stops/StopProtocolRepository';

const makeCityProtocolRepository = (): IStopProtocolRepository => ({
  changeStatus: jest.fn(),
  create: jest.fn(),
  getAll: jest.fn(),
  getByIds: jest.fn(),
  getOne: jest.fn(),
  update: jest.fn(),
});

const makeGetStateByIdProtocolRepository =
  (): IGetStateByIdProtocolRepository => ({
    getById: jest.fn(),
  });

const makeSut = () => {
  const cityRepository = makeCityProtocolRepository();
  const stateRepository = makeGetStateByIdProtocolRepository();
  const sut = new CreateCityUseCase(cityRepository, stateRepository);

  return { sut, cityRepository, stateRepository };
};

describe('Create City Use Case Unit Test', () => {});
