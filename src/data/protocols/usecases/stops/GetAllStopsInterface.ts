import { StopInterface } from '@/domain/Stop/interface/StopInterface';

export interface IGetAllStopsProtocolUseCase {
  execute(): Promise<IGetAllStopsProtocolUseCase.Params[]>;
}

export namespace IGetAllStopsProtocolUseCase {
  export type Params = {
    name: string;
    id: string;
  };
}
