import { StopInterface } from '@/domain/Stop/interface/StopInterface';

export interface ICreateStopRepository {
  create(data: StopInterface): Promise<StopInterface>;
}
