import { PrismaClient } from '@prisma/client';

import { IDeleteVehicleRepository } from './protocols/vechicle/DeleteVehicleRepository';
import { IAssociateAndCreateVehicleDriverRepository } from './protocols/vechicle/AssociateAndCrreateVechicleDriverRepository';
import { ICreateVehicleProtocolRepository } from './protocols/vechicle/CreateVechileProtocolRepository';
import { IVehicleProtocolRepository } from './protocols/vechicle';
import { GetVehicleByParamsProtocolRepository } from './protocols/vechicle/GetVehicleByParamsProtocolRepository';
import { GetVehicleByIdProtocolRepository } from './protocols/vechicle/GetVechicleByIdProtocolRepository';
import { IAssociateVehicleDriverRepository } from './protocols/vechicle/AssociateVechileDriverRepository';
import { Vehicle } from '@/domain/Vehicle/entity/Vehicle';
import { is } from 'sequelize/types/lib/operators';
import { VehicleFactory } from '@/domain/Vehicle/factory/VehicleFactory';

const prisma = new PrismaClient();

export class VehicleRepository implements IVehicleProtocolRepository {
  async getOneByParams(
    data: GetVehicleByParamsProtocolRepository.Params,
  ): Promise<Vehicle> {
    return prisma.vehicle.findFirst({
      where: { ...data },
    });
  }
  async deleteById(id: string): Promise<Vehicle> {
    return prisma.vehicle.delete({
      where: { id },
    });
  }
  async associate({
    idDriver,
    idVechile,
  }: IAssociateVehicleDriverRepository.Params): Promise<Vehicle> {
    return prisma.vehicle.update({
      where: { id: idVechile },
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
    return prisma.vehicle.create({
      data: {
        amount_of_accents,
        cor,
        plate,
        with_air,
        ownerId,
        description,
      },
    });
  }
  async getAll(): Promise<Vehicle[]> {
    return prisma.vehicle.findMany();
  }
  async getById(id: string): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.findUnique({ where: { id } });

    return VehicleFactory.create({
      id: vehicle.id,
      name: vehicle.description,
      quantitySeats: vehicle.amount_of_accents,
    })
  }
  async create(
    data: ICreateVehicleProtocolRepository.params,
  ): Promise<Vehicle> {
    const { amount_of_accents, cor, plate, with_air, ownerId, description } =
      data;
    return prisma.vehicle.create({
      data: {
        amount_of_accents,
        cor,
        plate,
        with_air,
        ownerId,
        description,
      },
    });
  }

  async update(data: Vehicle): Promise<Vehicle> {
    return prisma.vehicle.update({
      where: { id: data.id },
      data: {
        ...data,
      },
    });
  }

  async countAll(): Promise<number> {
    return prisma.vehicle.count();
  }
}
