import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle';
import { CreateVehicleUseCase } from '@/data/usecases/vehicle/CreateVechicle';
import { ICreateVehicle } from '@/data/protocols/usecases/vechicle/CreateVechicleUseCase';
import { IGetUserByIdProtocolRepository } from '@/infra/protocols/user/GetUserByIdProtocolRepository';
import { IUserProtocolRepository } from '@/infra/protocols';
import { Vehicle } from '@prisma/client';

const makerVehicleRepository = (): IVehicleProtocolRepository => {
  return {
    associate: jest.fn(),
    associateAndCreate: jest.fn(),
    create: jest.fn(),
    deleteById: jest.fn(),
    getAll: jest.fn(),
    getById: jest.fn(),
    getOneByParams: jest.fn().mockResolvedValueOnce(null),
  };
};

const makeUserRepository = (): IUserProtocolRepository => {
  return {
    getById: jest.fn().mockResolvedValueOnce(user),
    create: jest.fn(),
    delete: jest.fn(),
    getAll: jest.fn(),
    getByCpf: jest.fn(),
    getUserByEmail: jest.fn(),
    getUserByParams: jest.fn().mockResolvedValueOnce(user),
    getUserByName: jest.fn(),
    update: jest.fn(),
    getDriverById: jest.fn(),
  };
};

const user: IGetUserByIdProtocolRepository.Result = {
  cpf: 'any_cpf',
  created_at: new Date(),
  date_of_birth: new Date(),
  email: 'any_email',
  id: 'any_id',
  name: 'any_name',
  password: 'any_password',
  phone: 'any_phone',
  type: 'any_type',
  update_at: new Date(),
  Driver: [],
  Vehicle: [],
};

const vehicleOutput: Vehicle = {
  amount_of_accents: 1,
  cor: 'any_cor',
  created_at: new Date(),
  description: 'any_description',
  id: 'any_id',
  ownerId: 'any_owner_id',
  plate: 'any_plate',
  update_at: new Date(),
  with_air: true,
};

const input: ICreateVehicle.Params = {
  amount_of_accents: 1,
  cor: 'any_cor',
  description: 'any_description',
  plate: 'any_plate',
  with_air: true,
  ownerId: 'any_owner_id',
};

describe('Unit Create Vehicle Use Case', () => {
  test('Deve retornar erro se placa ja estiver cadastrada', async () => {
    const mockMakerVehicleRepository = makerVehicleRepository();
    const mockMakerUserRepository = makeUserRepository();
    const sut = new CreateVehicleUseCase(
      mockMakerVehicleRepository,
      mockMakerUserRepository,
    );

    mockMakerVehicleRepository.getOneByParams = jest
      .fn()
      .mockResolvedValueOnce(vehicleOutput);

    await expect(sut.execute(input)).rejects.toThrow('Placa já cadastrada');
  });

  test('Deve retornar erro se proprietario nao existir', async () => {
    const mockMakerVehicleRepository = makerVehicleRepository();
    const mockMakerUserRepository = makeUserRepository();

    const sut = new CreateVehicleUseCase(
      mockMakerVehicleRepository,
      mockMakerUserRepository,
    );
    mockMakerUserRepository.getById = jest.fn().mockResolvedValue(null);

    await expect(sut.execute(input)).rejects.toThrow(
      'Proprietário não encontrado',
    );
  });
  // test('Deve retornar erro se renavam ja estiver cadastrado', async () => {});
  // test('Deve retornar erro se chassi ja estiver cadastrado', async () => {});
});
