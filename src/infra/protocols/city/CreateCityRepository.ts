import { City } from '@prisma/client';

export interface ICreateCityRepository {
  create(data: Omit<City, 'id' | 'created_at' | 'update_at'>): Promise<City>;
}
