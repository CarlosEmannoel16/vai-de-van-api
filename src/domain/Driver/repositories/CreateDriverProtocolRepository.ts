import { DriverInterface } from '@/domain/Person/protocols/DriverInterface';

export interface CreateDriverProtocolRepository {
  create(data: DriverInterface): Promise<DriverInterface>;
}
