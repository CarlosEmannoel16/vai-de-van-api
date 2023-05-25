import { PrismaClient, Vehicle } from '@prisma/client';
import {
  GetVechicleByIdProtocolRepository,
  GetVechicleProtocolRepository,
  IAssociateAndCreateVechileDriverRepository,
  ICreateVechileProtocolRepository,
  IAssociateVechileDriverRepository,
} from './protocols/vechicle';

const prisma = new PrismaClient();

export class VechicleRepository
  implements
    ICreateVechileProtocolRepository,
    GetVechicleByIdProtocolRepository,
    GetVechicleProtocolRepository,
    IAssociateAndCreateVechileDriverRepository,
    IAssociateVechileDriverRepository
{
  async associate({
    idDriver,
    idVechile,
  }: IAssociateVechileDriverRepository.Params): Promise<Vehicle> {
    return prisma.vehicle.update({
      where: { id: idVechile },
      data: { Driver: { connect: { id: idDriver } } },
    });
  }
  async associateAndCreate({
    amount_of_accents,
    cor,
    plate,
    with_air,
    idDriver,
    ownerId,
  }: IAssociateAndCreateVechileDriverRepository.Params): Promise<Vehicle> {
    return prisma.vehicle.create({
      data: {
        amount_of_accents,
        cor,
        plate,
        with_air,
        ownerId,
        Driver: { connect: { id: idDriver } },
      },
    });
  }
  getAll(): Promise<GetVechicleProtocolRepository.Result> {
    return prisma.vehicle.findMany();
  }
  getById(id: string): Promise<GetVechicleByIdProtocolRepository.Result> {
    return prisma.vehicle.findUnique({ where: { id } });
  }
  create(data: ICreateVechileProtocolRepository.params): Promise<Vehicle> {
    const { amount_of_accents, cor, plate, with_air, ownerId } = data;
    return prisma.vehicle.create({
      data: { amount_of_accents, cor, plate, with_air, ownerId },
    });
  }
}
