"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCityUseCase_1 = require("@/data/usecases/city/CreateCityUseCase");
const makeSut = () => {
    const makeCityRepository = () => {
        return {
            create: jest.fn(),
            disable: jest.fn(),
            getAllCities: jest.fn(),
            getOne: jest.fn(),
            update: jest.fn(),
        };
    };
    const makeStateRepository = () => {
        return {
            getById: jest.fn(),
        };
    };
    const cityRepository = makeCityRepository();
    const stateRepository = makeStateRepository();
    const sut = new CreateCityUseCase_1.CreateCityUseCase(cityRepository, stateRepository);
    return {
        sut,
        cityRepository: cityRepository,
        stateRepository,
    };
};
describe(`Create City Use Case`, () => {
    it(`should return error if data is null`, () => {
        const { sut, cityRepository } = makeSut();
        expect(sut.execute({
            coordinates: '123',
            disabled: false,
            name: 'any_name',
            stateId: 'any_id',
        })).rejects.toThrow();
    });
});
