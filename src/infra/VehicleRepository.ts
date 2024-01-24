import { PrismaClient } from '@prisma/client';
import { IAssociateAndCreateVehicleDriverRepository } from './protocols/vechicle/AssociateAndCreateVechicleDriverRepository';
import { ICreateVehicleProtocolRepository } from './protocols/vechicle/CreateVehicleProtocolRepository';
import { IVehicleProtocolRepository } from './protocols/vechicle';
import { GetVehicleByParamsProtocolRepository } from './protocols/vechicle/GetVehicleByParamsProtocolRepository';
import { IAssociateVehicleDriverRepository } from './protocols/vechicle/AssociateVehicleDriverRepository';
import { Vehicle } from '@/domain/Vehicle/entity/Vehicle';
import { VehicleFactory } from '@/domain/Vehicle/factory/VehicleFactory';
import { Travel } from '@/domain/Travel/entity/Travel';
import { GetTravelsActivesFromVehicleRepository } from './protocols/vechicle/GetTravelsActivesFromVehicleRepository';

const prisma = new PrismaClient();

export class VehicleRepository implements IVehicleProtocolRepository {
  async getTravelsActives(
    id: string,
  ): Promise<GetTravelsActivesFromVehicleRepository.Result> {
    const result = await prisma.vehicle.findMany({
      select: {
        Travel: {
          select: {
            status: true,
          },
        },
      },
      where: {
        id,
        Travel: {
          some: {
            status: 'EM_ANDAMENTO',
          },
        },
      },
    });

    return result.map((vehicle: any) => vehicle.Travel);
  }
  async getOneByParams(
    data: GetVehicleByParamsProtocolRepository.Params,
  ): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.findFirst({
      where: { ...data },
    });
    return VehicleFactory.create({
      id: vehicle.id,
      name: vehicle.description,
      quantitySeats: vehicle.amount_of_accents,
      color: vehicle.cor,
      withAir: vehicle.with_air,
      plate: vehicle.plate,
      ownerId: vehicle.ownerId,
    });
  }
  async deleteById(id: string): Promise<boolean> {
    await prisma.vehicle.delete({
      where: { id },
    });

    return true;
  }
  async associate({
    idDriver,
    idVehicle,
  }: IAssociateVehicleDriverRepository.Params): Promise<any> {
    await prisma.vehicle.update({
      where: { id: idVehicle },
      data: { ownerId: idDriver },
    });
  }
  async associateAndCreate({
    amount_of_accents,
    cor,
    plate,
    with_air,
    ownerId,
    description,
  }: IAssociateAndCreateVehicleDriverRepository.Params): Promise<Vehicle> {
    const result = await prisma.vehicle.create({
      data: {
        amount_of_accents,
        cor,
        plate,
        with_air,
        ownerId,
        description,
      },
    });

    return VehicleFactory.create({
      id: result.id,
      name: result.description,
      quantitySeats: result.amount_of_accents,
      color: result.cor,
      withAir: result.with_air,
      plate: result.plate,
      ownerId: result.ownerId,
    });
  }
  async getAll(): Promise<Vehicle[]> {
    const result = await prisma.vehicle.findMany();
    return result.map(vehicle =>
      VehicleFactory.create({
        id: vehicle.id,
        name: vehicle.description,
        quantitySeats: vehicle.amount_of_accents,
        color: vehicle.cor,
        withAir: vehicle.with_air,
        plate: vehicle.plate,
        ownerId: vehicle.ownerId,
      }),
    );
  }
  async getById(id: string): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.findFirst({ where: { id } });
    return VehicleFactory.create({
      id: vehicle.id,
      name: vehicle.description,
      quantitySeats: vehicle.amount_of_accents,
      color: vehicle.cor,
      withAir: vehicle.with_air,
      plate: vehicle.plate,
      ownerId: vehicle.ownerId,
    });
  }
  async create(
    data: ICreateVehicleProtocolRepository.params,
  ): Promise<Vehicle> {
    const result = await prisma.vehicle.create({
      data,
    });

    return VehicleFactory.create({
      id: result.id,
      name: result.description,
      quantitySeats: result.amount_of_accents,
      color: result.cor,
      withAir: result.with_air,
      plate: result.plate,
      ownerId: result.ownerId,
    });
  }

  async update(data: Vehicle): Promise<Vehicle> {
    await prisma.vehicle.update({
      where: { id: data.Id },
      data: {
        ...data,
      },
    });

    return data;
  }

  async countAll(): Promise<number> {
    return prisma.vehicle.count();
  }
}
