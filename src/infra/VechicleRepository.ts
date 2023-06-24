import { PrismaClient, Vehicle } from '@prisma/client';
import {
  GetVechicleByIdProtocolRepository,
  GetVechicleProtocolRepository,
  IAssociateAndCreateVechileDriverRepository,
  ICreateVechileProtocolRepository,
  IAssociateVechileDriverRepository,
} from './protocols/vechicle';
import { IDeleteVehicleRepository } from './protocols/vechicle/DeleteVehicleRepository';

const prisma = new PrismaClient();

export class VechicleRepository
  implements
    ICreateVechileProtocolRepository,
    GetVechicleByIdProtocolRepository,
    GetVechicleProtocolRepository,
    IAssociateAndCreateVechileDriverRepository,
    IAssociateVechileDriverRepository,
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
  }: IAssociateAndCreateVechileDriverRepository.Params): Promise<Vehicle> {
    return prisma.vehicle.create({
      data: {
        amount_of_accents,
        cor,
        plate,
        with_air,
        ownerId,
      },
    });
  }
  async getAll(): Promise<GetVechicleProtocolRepository.Result> {
    return prisma.vehicle.findMany();
  }
  async getById(id: string): Promise<GetVechicleByIdProtocolRepository.Result> {
    return prisma.vehicle.findUnique({ where: { id } });
  }
  async create(
    data: ICreateVechileProtocolRepository.params,
  ): Promise<Vehicle> {
    const { amount_of_accents, cor, plate, with_air, ownerId } = data;
    return prisma.vehicle.create({
      data: {
        amount_of_accents,
        cor,
        plate,
        with_air,
        ownerId,
      },
    });
  }
}
