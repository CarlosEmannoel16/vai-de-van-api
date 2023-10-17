import { CreateCityUseCase } from '../../data/usecases/city/CreateCityUseCase';
import { ICityProtocolRepository } from '../../infra/protocols/city';
export type SutTypes = {
  sut: CreateCityUseCase;
  cityRepository: ICityProtocolRepository;
};

const makeSut = (): SutTypes => {
  const makeCityRepository = (): ICityProtocolRepository => {
    return {
      create: jest.fn(),
      disable: jest.fn(),
      getAllCities: jest.fn(),
      getOne: jest.fn(),
      update: jest.fn(),
    };
  };

  const cityRepository = makeCityRepository();

  const sut = new CreateCityUseCase(cityRepository);

  return {
    sut,
    cityRepository: cityRepository,
  };
};

describe(`Create City Use Case`, () => {
  it(`should return error if data is null`, () => {
    const { sut, cityRepository } = makeSut();

    expect(
      sut.execute({
        coordinates: '123',
        disabled: false,
        name: 'any_name',
        stateId: 'any_id',
      }),
    ).rejects.toThrow();
  });
});
