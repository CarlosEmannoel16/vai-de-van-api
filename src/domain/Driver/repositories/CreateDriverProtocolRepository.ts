import { Driver } from '../entity/Driver';

export interface CreateDriverProtocolRepository {
  create(data: Driver): Promise<Driver>;
}
