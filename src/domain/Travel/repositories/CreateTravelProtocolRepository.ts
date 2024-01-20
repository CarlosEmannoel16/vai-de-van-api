import { Travel } from '@/domain/Travel/entity/Travel';
export interface ICreateTravelProtocolRepository {
  create(data: Travel): Promise<Travel>;
}

