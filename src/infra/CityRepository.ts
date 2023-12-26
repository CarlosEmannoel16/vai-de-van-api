import { City, PrismaClient } from '@prisma/client';
import { ICityProtocolRepository } from './protocols/city';
import { IUpdateCityRepository } from './protocols/city/UpdateCityRepository';

const prisma = new PrismaClient();

export class CityRepository implements ICityProtocolRepository {
  getOne(id: string): Promise<City> {
    return prisma.city.findUnique({ where: { id} });
  }
  async create(data: City): Promise<City> {
    return prisma.city.create({ data });
  }
  async disable(id: string): Promise<City> {
    return prisma.city.update({  where: { id }, data: { disabled: true }});
  }
  async update({City,id}: IUpdateCityRepository.Params): Promise<City> {
    return prisma.city.update({  where: { id }, data: { ...City }});
  }
  async getAllCities(): Promise<City[]> {
    return prisma.city.findMany();
  }
}
