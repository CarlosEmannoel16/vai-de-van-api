import { PrismaClient } from '@prisma/client';
import { VehicleFactory } from '@/domain/Vehicle/factory/VehicleFactory';
import { IVehicleProtocolRepository } from './protocols/vechicle/VehicleProtocolRepository';
import { VehicleInterface } from '@/domain/Vehicle/interface/VehicleInterface';

const prisma = new PrismaClient();

export class VehicleRepository
  implements IVehicleProtocolRepository<VehicleInterface>
{
  async getTravelsActives(id: string): Promise<any> {
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
  async getOneByParams(data: VehicleInterface): Promise<VehicleInterface> {

    const vehicle = await prisma.vehicle.findFirst({
      where: { ...data },
    });

    if (vehicle)
      return VehicleFactory.bus({
        id: vehicle.id,
        description: vehicle.description,
        quantitySeats: vehicle.amount_of_accents,
        color: vehicle.cor,
        withAir: vehicle.with_air,
        plate: vehicle.plate,
        ownerName: vehicle.ownerName,
      });
  }
  async deleteById(id: string): Promise<boolean> {
    await prisma.vehicle.delete({
      where: { id },
    });

    return true;
  }
  async getAll(): Promise<VehicleInterface[]> {
    const result = await prisma.vehicle.findMany();
    return result.map(vehicle =>
      VehicleFactory.bus({
        id: vehicle.id,
        description: vehicle.description,
        quantitySeats: vehicle.amount_of_accents,
        color: vehicle.cor,
        withAir: vehicle.with_air,
        plate: vehicle.plate,
        ownerName: vehicle.ownerName,
      }),
    );
  }
  async getById(id: string): Promise<VehicleInterface> {
    const vehicle = await prisma.vehicle.findFirst({ where: { id } });
    return VehicleFactory.bus({
      id: vehicle.id,
      description: vehicle.description,
      quantitySeats: vehicle.amount_of_accents,
      color: vehicle.cor,
      withAir: vehicle.with_air,
      plate: vehicle.plate,
      ownerName: vehicle.ownerName,
    });
  }
  async create(data: VehicleInterface): Promise<VehicleInterface> {
   await prisma.vehicle.create({
      data: {
        id: data.id,
        amount_of_accents: data.quantitySeats,
        cor: data.color,
        description: data.description,
        ownerName: data.ownerName,
        plate: data.plate,
        with_air: data.withAir,
      },
    });

    return data;
  }
  async update(data: VehicleInterface): Promise<VehicleInterface> {
    await prisma.vehicle.update({
      where: { id: data.id },
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
