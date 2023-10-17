import { User } from '@prisma/client';
import { ICreateDriverProtocolRepository } from '../../infra/protocols/drivers/index';
import { IGetUserByParamsProtocolRepository } from '../../infra/protocols/user/GetUserByParamsProtocolRepository';
import { ICreateDriver } from '../../domain/usecases/driver/CreateDriver';
import { CreateDriverUseCase } from '../../data/usecases/driver/CreateDriverUseCase';
import { type } from 'os';
import { IUserProtocolRepository } from '@/infra/protocols';

const userByParams: IGetUserByParamsProtocolRepository.Params = {
  cnh: 'any_cnh',
  cpf: 'any_cpf',
  date_of_birth: new Date('2021-05-05'),
  email: 'any_email',
  name: 'any_name',
  phone: 'any_phone',
  type: 'any_type',
};

const userInput: ICreateDriver.request = {
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

const makeUserRepository = (): IUserProtocolRepository => {
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
  };
};

const makeCreateDriverRepository = (): ICreateDriverProtocolRepository => {
  return {
    createDriver: jest.fn().mockResolvedValue(null),
  };
};

export type SutTypes = {
  sut: ICreateDriver;
  userRepository: IUserProtocolRepository;
  createDriverRepository: ICreateDriverProtocolRepository;
};

const makeSut = (): SutTypes => {
  const userRepository = makeUserRepository();
  const createDriverRepository = makeCreateDriverRepository();

  const sut = new CreateDriverUseCase(userRepository, createDriverRepository);

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
  test('Deve criar motorista', async () => {
    const makeMockerUserRepository = makeUserRepository();
    const makeMockerUserRepositoryParams = makeUserRepositoryParams();

    const sut = new CreateDriverUseCase(
      makeMockerUserRepository,
      makeMockerUserRepositoryParams,
    );

    const returnCreateUser: User = {
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

    makeMockerUserRepository.createDriver = jest
      .fn()
      .mockResolvedValue(returnCreateUser);

    const output = await sut.create(userInput);
    expect(output).toEqual(returnCreateUser);
  });
});
