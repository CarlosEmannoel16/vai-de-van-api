import { PrismaClient, Vehicle } from '@prisma/client';

import { IDeleteVehicleRepository } from './protocols/vechicle/DeleteVehicleRepository';
import { IAssociateVechileDriverRepository } from './protocols/vechicle/AssociateVechileDriverRepository';
import { IAssociateAndCreateVechileDriverRepository } from './protocols/vechicle/AssociateAndCrreateVechicleDriverRepository';
import { ICreateVechileProtocolRepository } from './protocols/vechicle/CreateVechileProtocolRepository';
import { GetVechicleByIdProtocolRepository } from './protocols/vechicle/GetVechicleByIdProtocolRepository';

const prisma = new PrismaClient();

export class VechicleRepository
  implements
  IDeleteVehicleRepository
{
  async deleteById(id: string): Promise<Vehicle> {
    return prisma.vehicle.delete({
      where: { id },
    });
   
  }
  async associate({
    idDriver,
    idVechile,
  }: IAssociateVechileDriverRepository.Params): Promise<Vehicle> {
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

  }: IAssociateAndCreateVechileDriverRepository.Params): Promise<Vehicle> {
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
  async getById(id: string): Promise<GetVechicleByIdProtocolRepository.Result> {
    return prisma.vehicle.findUnique({ where: { id } });
  }
  async create(
    data: ICreateVechileProtocolRepository.params,
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
}
