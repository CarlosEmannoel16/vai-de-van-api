import { StopInterface } from '@/domain/Stop/interface/StopInterface';
export interface IGetStopRepository {
  getOne(id: string): Promise<StopInterface>;
}
