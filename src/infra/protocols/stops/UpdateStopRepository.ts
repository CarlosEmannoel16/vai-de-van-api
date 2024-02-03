import { StopInterface } from '@/domain/Stop/interface/StopInterface';

export interface IUpdateStopRepository {
  update(data: StopInterface): Promise<StopInterface>;
}
