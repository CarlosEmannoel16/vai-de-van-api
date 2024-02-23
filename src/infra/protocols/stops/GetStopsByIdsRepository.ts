import { StopInterface } from "@/domain/Stop/interface/StopInterface";

export interface IGetStopsByIdsRepository {
  getByIds(ids: string[]): Promise<StopInterface[]>;
}
