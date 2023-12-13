import { Travel } from '@/domain/entity/Travel/Travel';
export interface ICreateTravelProtocolRepository {
  create(data: Travel): Travel;
}

