import { StopInterface } from "@/domain/Stop/interface/StopInterface";

export interface IGetAllStopsRepository {
    getAll(): Promise<StopInterface[]>

}
