export interface IGetStateByNameProtocolRepository {
  get(name: string): Promise<IGetStateByNameProtocolRepository.Result>;
}

namespace IGetStateByNameProtocolRepository {
  export type Result = {
    name: string;
    uf: string;
  };
}
