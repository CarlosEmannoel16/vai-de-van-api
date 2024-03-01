import { StopInterface } from '@/domain/Stop/interface/StopInterface';

export interface IStopProtocolRepository {
  changeStatus(id: string): Promise<StopInterface>;
  create(data: StopInterface): Promise<StopInterface>;
  getAll(): Promise<StopInterface[]>;
  getOne(id: string): Promise<StopInterface>;
  getByIds(ids: string[]): Promise<StopInterface[]>;
  update(data: StopInterface): Promise<StopInterface>;
}
