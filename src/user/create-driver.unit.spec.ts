import { User } from '@prisma/client';
import { ICreateDriverProtocolRepository } from '../infra/protocols/drivers/index';
import { IGetUserByParamsProtocolRepository } from '../infra/protocols/user/GetUserByParamsProtocolRepository';
import { ICreateDriver } from '../domain/usecases/driver/CreateDriver';
import { CreateDriverUseCase } from '../data/usecases/driver/CreateDriverUseCase';



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



const makeUserRepository = (): ICreateDriverProtocolRepository => {
  return {
    createDriver: jest.fn()
  };
};

const makeUserRepositoryParams = (): IGetUserByParamsProtocolRepository => {
  return {
    getUserByParams: jest.fn().mockResolvedValue(null),
  };
};

describe('Unit Create Driver Use Case ', () => {
  test('Deve retornar erro se cpf ja estiver cadastrado', async () => {
    const makeMockerUserRepository = makeUserRepository();
    const makeMockerUserRepositoryParams = makeUserRepositoryParams();
    const sut = new CreateDriverUseCase(
      makeMockerUserRepository,
      makeMockerUserRepositoryParams,
    );

    makeMockerUserRepositoryParams.getUserByParams = jest
      .fn()
      .mockResolvedValue(userByParams);
    await expect(sut.create(userInput)).rejects.toThrow('CPF já cadastrado');
  });
  test('Deve retornar erro se email ja estiver cadastrado', async () => {
    const makeMockerUserRepository = makeUserRepository();
    const makeMockerUserRepositoryParams = makeUserRepositoryParams();
    const sut = new CreateDriverUseCase(
      makeMockerUserRepository,
      makeMockerUserRepositoryParams,
    );

    makeMockerUserRepositoryParams.getUserByParams = jest
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
      date_of_birth:  expect.any(Date),
      email: userInput.email,
      id: expect.any(String),
      name: userInput.name,
      password: userInput.password,
      phone: userInput.phone,
      type: 'driver',
      update_at:  expect.any(Date),
    };

    makeMockerUserRepository.createDriver = jest.fn().mockResolvedValue(returnCreateUser);


    const output =  await sut.create(userInput) 
    expect(output).toEqual(returnCreateUser);
  });
});
