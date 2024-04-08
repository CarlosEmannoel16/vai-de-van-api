import { CreateCityUseCase } from "@/data/usecases/stops/CreateCityUseCase";
import { IGetStateByIdProtocolRepository } from "@/infra/protocols";
import { IStopProtocolRepository } from "@/infra/protocols/stops/StopProtocolRepository";



const makeSut = () => {
  const makeCityRepository = (): IStopProtocolRepository => {
    return {
     changeStatus: jest.fn(),
     create: jest.fn(),
     getAll: jest.fn(),
     getByIds: jest.fn(),
     getOne: jest.fn(),
     update: jest.fn(),
    };
  };


  const makeStateRepository = (): IGetStateByIdProtocolRepository => {
    return {
      getById: jest.fn(),
    }
  }

  const cityRepository = makeCityRepository();
  const stateRepository = makeStateRepository();

  const sut = new CreateCityUseCase(cityRepository, stateRepository);

  return {
    sut,
    cityRepository: cityRepository,
    stateRepository,
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
