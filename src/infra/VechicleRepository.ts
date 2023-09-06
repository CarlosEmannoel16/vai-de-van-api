import { PrismaClient, Vehicle } from '@prisma/client';

import { IDeleteVehicleRepository } from './protocols/vechicle/DeleteVehicleRepository';
import { IAssociateAndCreateVehicleDriverRepository } from './protocols/vechicle/AssociateAndCrreateVechicleDriverRepository';
import { ICreateVehicleProtocolRepository } from './protocols/vechicle/CreateVechileProtocolRepository';
import { IVehicleProtocolRepository } from './protocols/vechicle';
import { GetVehicleByParamsProtocolRepository } from './protocols/vechicle/GetVehicleByParamsProtocolRepository';
import { GetVehicleByIdProtocolRepository } from './protocols/vechicle/GetVechicleByIdProtocolRepository';
import { IAssociateVehicleDriverRepository } from './protocols/vechicle/AssociateVechileDriverRepository';

const prisma = new PrismaClient();

export default class VehicleRepository
  implements
  IVehicleProtocolRepository
{
  async getOneByParams(data: GetVehicleByParamsProtocolRepository.Params): Promise<Vehicle> {
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
    description

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
  async getById(id: string): Promise<GetVehicleByIdProtocolRepository.Result> {
    return prisma.vehicle.findUnique({ where: { id } });
  }
  async create(
    data: ICreateVehicleProtocolRepository.params,
  ): Promise<Vehicle> {
    const { amount_of_accents, cor, plate, with_air, ownerId,description } = data;
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
      where: { id: data.id},
      data: {
        ...data,
      }
    });
  }

  async countAll(): Promise<number> {
    return prisma.vehicle.count();
  }
}
