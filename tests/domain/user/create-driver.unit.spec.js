"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateDriverUseCase_1 = require("@/data/usecases/driver/CreateDriverUseCase");
const userByParams = {
    cnh: 'any_cnh',
    cpf: 'any_cpf',
    date_of_birth: new Date('2021-05-05'),
    email: 'any_email',
    name: 'any_name',
    phone: 'any_phone',
    type: 'any_type',
};
const userInput = {
    cnh: 'any_cnh',
    cnhDateOfIssue: '2021-05-05',
    cnhExpirationDate: '2021-05-05',
    cpf: 'any_cpf',
    date_of_birth: '2021-05-05',
    email: 'any_email',
    name: 'any_name',
    password: 'any_password',
    phone: 'any_phone',
};
const makeUserRepository = () => {
    return {
        create: jest.fn().mockResolvedValue(null),
        delete: jest.fn().mockResolvedValue(null),
        getAll: jest.fn().mockResolvedValue(null),
        getByCpf: jest.fn().mockResolvedValue(null),
        getById: jest.fn().mockResolvedValue(null),
        getUserByEmail: jest.fn().mockResolvedValue(null),
        getUserByName: jest.fn().mockResolvedValue(null),
        getUserByParams: jest.fn().mockResolvedValue(null),
        update: jest.fn().mockResolvedValue(null),
        getDriverById: jest.fn().mockResolvedValue(null),
    };
};
const makeCreateDriverRepository = () => {
    return {
        createDriver: jest.fn().mockResolvedValue(null),
    };
};
const makeSut = () => {
    const userRepository = makeUserRepository();
    const createDriverRepository = makeCreateDriverRepository();
    const sut = new CreateDriverUseCase_1.CreateDriverUseCase(userRepository, createDriverRepository);
    return {
        sut,
        createDriverRepository,
        userRepository,
    };
};
describe('Unit Create Driver Use Case ', () => {
    test('Deve retornar erro se cpf ja estiver cadastrado', async () => {
        const { sut, createDriverRepository, userRepository } = makeSut();
        userRepository.getUserByParams = jest.fn().mockResolvedValue(userByParams);
        await expect(sut.create(userInput)).rejects.toThrow('CPF já cadastrado');
    });
    test('Deve retornar erro se email ja estiver cadastrado', async () => {
        const { sut, createDriverRepository, userRepository } = makeSut();
        userRepository.getUserByParams = jest
            .fn()
            .mockResolvedValueOnce(undefined)
            .mockResolvedValueOnce(userByParams);
        await expect(sut.create(userInput)).rejects.toThrow('Email já cadastrado');
    });
    test.skip('Deve criar motorista', async () => {
        const makeMockerUserRepository = makeUserRepository();
        const driverRepository = makeCreateDriverRepository();
        const sut = new CreateDriverUseCase_1.CreateDriverUseCase(makeMockerUserRepository, driverRepository);
        const returnCreateUser = {
            cpf: 'any_cpf',
            created_at: expect.any(Date),
            date_of_birth: expect.any(Date),
            email: userInput.email,
            id: expect.any(String),
            name: userInput.name,
            password: userInput.password,
            phone: userInput.phone,
            type: 'driver',
            update_at: expect.any(Date),
        };
        makeMockerUserRepository.create = jest
            .fn()
            .mockResolvedValue(returnCreateUser);
        const output = await sut.create(userInput);
        expect(output).toEqual(returnCreateUser);
    });
});
